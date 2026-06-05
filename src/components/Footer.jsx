function Footer({ contactNumber }) {
  const phoneNumbers = contactNumber.split("/").map((number) => number.trim())

  return (
    <footer className="rounded-2xl bg-stone-900 p-5 text-sm text-stone-200 sm:p-6">
      <p className="font-semibold text-amber-300">Contact: {contactNumber}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {phoneNumbers.map((number) => (
          <a
            key={number}
            href={`tel:+91${number}`}
            className="rounded-full bg-amber-300/20 px-3 py-1 text-xs font-semibold text-amber-200 transition hover:bg-amber-300/30"
          >
            Call {number}
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer
