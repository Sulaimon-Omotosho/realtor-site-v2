import React, { useEffect, useState } from 'react'
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore'
import Spinner from '../components/Spinner'
import { db } from '../firebase'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from 'swiper'
import 'swiper/css/bundle'
import { useNavigate } from 'react-router-dom'

export default function Slider() {
  const [listings, setListings] = useState(null)
  const [loading, setLoading] = useState(true)
  SwiperCore.use([Autoplay, Navigation, Pagination])
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchListings() {
      const listingsRef = collection(db, 'listings')
      const q = query(listingsRef, orderBy('timestamp', 'desc'), limit(5))
      const docSnap = await getDocs(q)
      let listings = []
      docSnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        })
      })
      setListings(listings)
      setLoading(false)
    }
    fetchListings()
  }, [])
  if (loading) {
    return <Spinner />
  }
  if (listings.length === 0) {
    return <></>
  }
  return (
    listings && (
      <>
        <Swiper
          slidesPerView={1}
          navigation
          pagination={{ type: 'progressbar' }}
          effect='fade'
          modules={[EffectFade]}
          autoplay={{ delay: 3000 }}
        >
          {listings.map(({ data, id }) => (
            <SwiperSlide
              key={id}
              onClick={() => navigate(`/category/${data.type}/${id}`)}
            >
              <div
                style={{
                  background: `url(${data.imgUrls[0]}) center, no-repeat`,
                  backgroundSize: 'cover',
                }}
                class='relative w-full h-[300px] overflow-hidden cursor-pointer'
              ></div>
              <p class='text-white absolute left-1 top-3 font-medium max-w-[90%] bg-blue-300 shadow-lg opacity-90 p-3 rounded-br-3xl'>
                {data.name}
              </p>
              <p class='text-white absolute left-1 bottom-1 font-medium max-w-[90%] bg-red-300 shadow-lg opacity-90 p-3 rounded-tr-3xl'>
                N{data.discountedPrice ?? data.regularPrice}
                {data.type === 'rent' && '/ Month'}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    )
  )
}
