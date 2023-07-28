import React, { useEffect, useState } from 'react'
import CardItem from '../cardItem/CardItem'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../../config/slice/itemSlice'


const Home = () => {
  const totalCount = useSelector((state) => state.cart.totalCount)
  const items = useSelector((state) => state.cart.items)
  const totalAmount = useSelector((state) => state.cart.totalAmount)

  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(getCartTotal())
  },[items])
  

  
  

  return (
    <div>
        <h1 className='text-center mb-5'>Shopping cart</h1>
        <div className='main'>
          <div className="cart-item bg-white">
              <p>Cart ({totalCount} items)</p>
              {items.map((item) => {
                return <CardItem key={item.id} {...item} />;
              })}
              
          </div>
          <div className="amount d-flex flex-column justify-content-evenly mt-2">
              <div>
                <h1 className='fs-5'>The Total Amount Of</h1>
                <p>Temporary amount <span className='harga'>${totalAmount}</span> </p>
                <p>Shipping <span className='ongkir'>Gratis</span> </p>
              </div>             
              <div>
                <h3 className='fs-5 border-top'>The Total Amount Of <span>${totalAmount}</span></h3>
                <p className='fs-6 fw-lighter'>(Including VAT)</p>
              </div>
              <div className='d-grid gap-2'>
                <button className='btn btn-primary text-uppercase'>go to checkout</button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Home