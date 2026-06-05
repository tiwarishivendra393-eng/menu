function MenuItem({ name, price, small, big }) {
  const hasDualPrice = small !== undefined && big !== undefined

  return (
    <li className="flex items-start justify-between gap-3 border-b border-orange-100 py-3 last:border-b-0">
      <span className="text-sm font-medium text-stone-700 sm:text-base">{name}</span>
      {hasDualPrice ? (
        <div className="flex shrink-0 flex-col items-end gap-1 text-xs font-bold text-red-700 sm:flex-row sm:items-center sm:gap-2 sm:text-sm">
          <span className="rounded-full bg-amber-100 px-2.5 py-1">S: {small}/-</span>
          <span className="rounded-full bg-orange-100 px-2.5 py-1">B: {big}/-</span>
        </div>
      ) : (
        <span className="shrink-0 rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-red-700">
          {price}/-
        </span>
      )}
    </li>
  )
}

export default MenuItem
