export default function InvoiceForm({ handleSubmit }) {
  return (
    <form method="post" onSubmit={handleSubmit}>
      <div>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-white">
            Amount:
          </label>
          <input
            name="amount"
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight shadow focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-white">
            Reference:
          </label>
          <input
            name="reference"
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight shadow focus:outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="focus:shadow-outline rounded bg-peach py-2 px-4 font-bold text-white hover:bg-peach focus:outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  )
}
