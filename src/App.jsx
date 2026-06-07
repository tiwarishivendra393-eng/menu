import Header from "./components/Header"
import CategorySection from "./components/CategorySection"
import Footer from "./components/Footer"
import menuData from "./data/menu.json"

function App() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 -top-28 h-80 bg-gradient-to-b from-orange-300/40 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-[36rem] h-72 w-72 rounded-full bg-red-200/30 blur-3xl" />
{/* fhfhieinensndjcvndfkjnvkjfkjvfjksvkjfvjvfvn */}
      <main className="mx-auto max-w-3xl space-y-6 px-4 py-6 sm:px-6 sm:py-8">
        <Header
          restaurantName={menuData.restaurantName}
          welcomeMessage={menuData.welcomeMessage}
          categories={menuData.categories}
        />

        <section className="rounded-2xl border border-orange-200 bg-white/80 p-4 shadow-sm backdrop-blur sm:p-5">
          <p className="text-sm font-semibold uppercase tracking-wider text-red-700">Our Menu</p>
          <p className="mt-1 text-sm text-stone-600 sm:text-base">
            Tap any category chip above to jump quickly and browse prices.
          </p>
        </section>

        <div className="space-y-4 sm:space-y-5">
          {menuData.categories.map((category) => (
            <CategorySection key={category.id} category={category} />
          ))}
        </div>

        <Footer contactNumber={menuData.contactNumber} />
      </main>
    </div>
  )
}

export default App
