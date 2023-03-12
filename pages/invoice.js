import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { v4 as uuidv4 } from 'uuid'
import Screen from '../components/Screen'
import Title from '../components/Title'
import InvoiceForm from '../components/InvoiceForm'
import { QRCodeSVG } from 'qrcode.react'

export default function Invoice() {
  const [userData, setUserData] = React.useState({})
  const [paymentData, setPaymentData] = React.useState({})
  const apiKey = 'cKJTQJ3T2j9FM5dySUfExkhPCaEg4Nut'
  const router = useRouter()
  const userId = router.query['user-id']
  const usersUrl = `https://api.sandbox.crezco.com/v1/users/${userId}`
  const payDemandUrl = `https://api.sandbox.crezco.com/v1/users/${userId}/pay-demands`
  const getPayDemandUri = 'https://api.sandbox.crezco.com/v1/pay-demands/'

  useEffect(() => {
    const getUserId = async () => {
      // if no query parameter, redirect to home
      if (!window.location.search) {
        router.push('/')
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
        const data = await res.json()
        if (!data || !Object.keys(data).length) {
          return
        }
        setUserData(data)
      } catch (err) {
        console.log(err)
      }
    }

    getUserId()
    return
  }, [userId])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const formJson = Object.fromEntries(formData.entries())
    const newUUID = uuidv4()

    try {
      const res = await fetch(payDemandUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Crezco-Key': `${apiKey}`,
        },
        body: JSON.stringify({
          request: {
            amount: formJson.amount,
            reference: formJson.reference,
            currency: 'GBP',
          },
          idempotencyId: newUUID,
        }),
      })
      const payDemandId = await res.json()

      if (!payDemandId) {
        return
      }
      const qrCode = await fetch(`${getPayDemandUri}/${payDemandId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Crezco-Key': `${apiKey}`,
        },
      })
      const link = await qrCode.json()
      setPaymentData(link)
    } catch (err) {
      console.log(err)
    }
  }

  const handleReset = (e) => {
    e.preventDefault()
    setPaymentData({})
  }

  const renderFormOrPaymentLink = () => {
    if (paymentData && paymentData.paymentUri) {
      return (
        <div className="flex flex-col items-center">
          <QRCodeSVG value={paymentData.paymentUri} className="mb-4" />
          <a
            href={paymentData.paymentUri}
            className="block text-center text-peach"
          >
            <button
              type="submit"
              className="focus:shadow-outline mb-4 rounded bg-peach py-2 px-4 font-bold text-white hover:bg-peach focus:outline-none"
            >
              Confirm payment
            </button>
          </a>
          <a
            onClick={handleReset}
            className="block cursor-pointer text-center text-peach"
          >
            {' '}
            Make another payment
          </a>
        </div>
      )
    }
    return <InvoiceForm handleSubmit={handleSubmit} />
  }

  return (
    <Screen>
      <div className="w-full max-w-xs">
        {!paymentData.paymentUri && <Title>Create an Invoice</Title>}
        {renderFormOrPaymentLink()}
      </div>
    </Screen>
  )
}
