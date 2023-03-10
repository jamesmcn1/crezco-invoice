import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { v4 as uuidv4 } from 'uuid';
import Screen from '../components/Screen'
import Title from '../components/Title'
import {QRCodeSVG} from 'qrcode.react';

export default function Invoice() {
  const [userData, setUserData] = React.useState({});
  const [paymentData, setPaymentData] = React.useState({});
  const apiKey = 'cKJTQJ3T2j9FM5dySUfExkhPCaEg4Nut'
  const router = useRouter()
  const userId = router.query['user-id']
  const usersUrl = `https://api.sandbox.crezco.com/v1/users/${userId}`;
  const payDemandUrl = `https://api.sandbox.crezco.com/v1/users/${userId}/pay-demands`
  const getPayDemandUri = 'https://api.sandbox.crezco.com/v1/pay-demands/'

  console.log(userId)

  useEffect(() => {
    const getUserId = async () => {
      if (!userId) {
        return
      }
      try {
        const res = await fetch(usersUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Crezco-Key': `${apiKey}`,
          },
        })
        console.log('response received')
        const data = await res.json()
        if (!data || !Object.keys(data).length) { return; }
        
        setUserData(data);


      } catch (err) {
        console.log(err)
      }
    }

    getUserId()
    return
  }, [userId])

  const handleSubmit = async (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);

    const newUUID = uuidv4();


    try {
      const res = await fetch(payDemandUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Crezco-Key': `${apiKey}`,
        },
        body: JSON.stringify({
          request: {
            amount: '100.00',
            reference: '1234',
            currency: 'GBP'
          },
          idempotencyId: newUUID
        })
      })
      const payDemandId = await res.json();

      if (!payDemandId) { return; }
      const qrCode = await fetch(`${getPayDemandUri}/${payDemandId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Crezco-Key': `${apiKey}`,
        },
      })
      const link = await qrCode.json();
      console.log(link);
      setPaymentData(link)
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <Screen>
      <div className='w-full max-w-xs'>
        <Title>Create an Invoice</Title>
        {
          paymentData && (
            <div>
              <QRCodeSVG value={paymentData.paymentUri} />
              <a href={paymentData.paymentUri}> Open your payment</a>

            </div>
          )
        }
          <form method="post" onSubmit={handleSubmit}>
              <div>
                <div className='mb-4'>
                  <label className='block text-white text-sm font-bold mb-2'>
                    Amount: <input name="amount" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                  </label>
                  
                </div>
                <div className='mb-4'>
                  <label className='block text-white text-sm font-bold mb-2'>
                    Reference: <input name="reference" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                  </label>
                </div>
                <button type="submit" className='bg-peach hover:bg-peach text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Submit</button>
              </div>
          </form>
      </div>
    </Screen>
  )
}
