import React, { useState } from 'react'
import MyImage from '../../image/gambar1.jpg'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector} from 'react-redux'
import { increase, remove, decrease } from '../../config/slice/itemSlice';

const CardItem = (props) => {
    const [message, setMessage] = useState('');
    const isAnonymous = true;
    const dispatch = useDispatch()
    const handleClick = event => {
        event.currentTarget.disabled = true;
      };
    

  return (
    <div className="card mb-3" style={{maxWidth:'720px'}}>
                <div className="row g-0">
                        <div className="col">
                            <img src={props.img} alt="" style={{width:'150px', height:'200px', borderRadius:'10px'}}/>
                        </div>
                        <div className="col-md-auto">
                            <div className="card-body pt-4">
                                <div className='card-title pt-3 ps-2 mb-5'>
                                <h5>{props.title}</h5>
                                <p style={{fontSize:'14px', opacity:'0.5'}}>Ingrediants: {props.ingrediants}</p>

                                </div>
                                <div className='button'>
                                    <button className='btn ' onClick={() => {
                                        dispatch(remove(props.id))
                                    }}><FontAwesomeIcon icon={faTrash} /><span className='text-uppercase px-2'>Remove Item</span></button>
                                    <button className='btn' onClick={handleClick}><FontAwesomeIcon icon={faHeart} /><span className='text-uppercase px-2' >add to watchlist</span></button>
                                </div>
                            </div>
                        </div>
                        <div className="col d-flex flex-column justify-content-around align-items-center">
                            <div className='count d-flex mt-3'>
                                <button onClick={() =>{
                                    dispatch(decrease(props.id))
                                }}>-</button>
                                
                                <p className='text-center'>{props.amount}</p>
                                <button onClick={() => {
                                    dispatch(increase(props.id))
                                }}>+</button>
                            </div>
                            <div>
                                <p>${props.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default CardItem