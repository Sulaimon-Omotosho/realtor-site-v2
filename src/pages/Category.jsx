import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import ListingItem from '../components/ListingItem'
import Spinner from '../components/Spinner'
import { db } from '../firebase'

export default function Category() {
  const [listings, setListings] = useState(null)
  const [loading, setLoading] = useState(true)
  const [lastFetchedListings, setLastFetchedListings] = useState(null)
  const params = useParams()

  useEffect(() => {
    async function fetchListings() {
      try {
        const listingRef = collection(db, 'listings')
        const q = query(
          listingRef,
          where('type', '==', params.categoryName),
          orderBy('timestamp', 'desc'),
          limit(8)
        )
        const querySnap = await getDocs(q)
        const lastVisible = querySnap.docs[querySnap.docs.length - 1]
        setLastFetchedListings(lastVisible)
        const listings = []
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          })
        })
        setListings(listings)
        setLoading(false)
      } catch (error) {
        toast.error('Offers Not Found')
      }
    }
    fetchListings()
  }, [params.categoryName])

  async function onMoreListings() {
    try {
      const listingRef = collection(db, 'listings')
      const q = query(
        listingRef,
        where('type', '==', params.categoryName),
        orderBy('timestamp', 'desc'),
        startAfter(lastFetchedListings),
        limit(4)
      )
      const querySnap = await getDocs(q)
      const lastVisible = querySnap.docs[querySnap.docs.length - 1]
      setLastFetchedListings(lastVisible)
      const listings = []
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        })
      })
      setListings((prevState) => [...prevState, ...listings])
      setLoading(false)
    } catch (error) {}
  }

  return (
    <div class='max-w-6xl mx-auto px-3'>
      <h1 class='text-3xl text-center mt-6 font-bold uppercase mb-6'>
        {params.categoryName === 'rent' ? 'For Rent' : 'For Sale'}
      </h1>
      {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
          <main>
            <ul class='sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5'>
              {listings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  id={listing.id}
                  listing={listing.data}
                />
              ))}
            </ul>
          </main>
          {lastFetchedListings && (
            <div class='flex justify-center items-center'>
              <button
                onClick={onMoreListings}
                class='bg-white px-3 py-1.5 text-gray-700 border border-gray-300 m-6 hover:border-slate-600 rounded transition duration-150 ease-in-out'
              >
                Load More
              </button>
            </div>
          )}
        </>
      ) : (
        <p>No Offers Available</p>
      )}
    </div>
  )
}
