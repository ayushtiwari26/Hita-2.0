import React from 'react'
import {client} from '../lib/client'
import { Product, HeroBanner, FooterBanner } from '../components'

const Home = ({products, bannerData}) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>

      <div className='products-heading'>
        <h2>Best Seller Products</h2>
      </div>

      <div className='products-container'>
        {products?.map((product) => <Product key={product._id} product={product}/>)}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </div>
  )
}

export const getServerSideProps = async ()=>{
  //grab all products from sanity
  const query =  '*[_type=="product"]' 
  const products = await client.fetch(query)

  const bannerQuery =  '*[_type=="banner"]' 
  const bannerData = await client.fetch(bannerQuery)

  return {
    props:{products, bannerData}
  }
} 

export default Home

