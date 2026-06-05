function Header({ restaurantName, welcomeMessage, categories }) {
  return (
    <header className="rounded-3xl bg-gradient-to-br from-red-600 via-orange-500 to-amber-400 p-6 text-white shadow-lg sm:p-8">
      <div className="flex items-center gap-4">
        <img
          src="/logo.png"
          alt="Jay Ambe Fast Food logo"
          className="h-16 w-16 shrink-0 rounded-full border-2 border-white/70 object-cover shadow-md sm:h-20 sm:w-20"
        />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-100">
            Fresh • Fast • Tasty
          </p>
          <h1 className="text-2xl font-extrabold tracking-wide sm:text-3xl">
            {restaurantName}
          </h1>
        </div>
      </div>

      <p className="mt-4 max-w-xl text-sm text-amber-50 sm:text-base">{welcomeMessage}</p>

      <nav className="mt-5 grid grid-cols-3 gap-2">
        {categories.map((category) => (
          <a
            key={category.id}
            href={`#${category.id}`}
            className="rounded-xl bg-white/20 px-2 py-2.5 text-center text-[11px] font-semibold leading-tight transition hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 sm:rounded-full sm:px-3 sm:text-sm"
          >
            {category.name}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header
