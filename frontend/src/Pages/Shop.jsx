import React from 'react'
import { Hero } from '../Components/Heros/Hero'
import { Popular } from '../Components/Populars/Popular'
import { Offers } from '../Components/Offers/Offers'
import { NewsLetter } from '../Components/NewsLetter/NewsLetter'
import { NewCollection } from '../Components/NewCollections/NewCollection'

export const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <NewsLetter />
    </div>
  )
}
