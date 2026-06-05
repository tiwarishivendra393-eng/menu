import MenuItem from "./MenuItem"
import CategoryImage from "./CategoryImage"

function CategorySection({ category }) {
  return (
    <section
      id={category.id}
      className="scroll-mt-24 rounded-2xl border border-orange-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <CategoryImage
            categoryId={category.id}
            className="h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-orange-200 bg-orange-50 p-1.5 sm:h-12 sm:w-12"
          />
          <h2 className="text-xl font-bold text-red-700 sm:text-2xl">{category.name}</h2>
        </div>
        <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-red-700">
          {category.items.length} Items
        </span>
      </div>
      <ul className="mt-3">
        {category.items.map((item) => (
          <MenuItem key={item.name} {...item} />
        ))}
      </ul>
    </section>
  )
}

export default CategorySection
