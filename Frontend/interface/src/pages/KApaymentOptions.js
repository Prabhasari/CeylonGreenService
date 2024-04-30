import React from 'react'
import Layout1 from '../components/Layout/Layout1';
import {} from '../components/KApaymentOption.css';

export const KApaymentOptions = () => {
  return (
    <Layout1>
        <p style={{textAlign:'center'}}>Choose payment type</p>
        <ul className='ulc'>
            <li>
                <div>
                    <a href="/KApaymentForm" >
                    <button className='btnb'>Bank Transfer</button>
                    </a>
                </div>
            </li>
            <li>
                <div>
                    <a href="/KApaymentForm" >
                        <button className='btnb'>Card Payment</button>
                    </a>
                </div>
            </li>
            <li>
                <div>
                    <a href="/KApaymentForm" >
                        <button className='btnb'>PayHere</button>
                    </a>
                </div>
            </li>
            <li>
                <div>
                    <a href="/KApaymentForm" >
                        <button className='btnb'>Paypal</button>
                    </a>
                </div>
            </li>
        </ul>
        
    </Layout1>
  )
}
