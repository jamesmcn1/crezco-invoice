import { QRCodeSVG } from 'qrcode.react'


export default function PaymentLink({ paymentData, handleReset }) {
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
  