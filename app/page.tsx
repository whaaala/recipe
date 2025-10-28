import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("recipes")
    .select("id", { head: true, count: "exact" })
    .limit(1);
  const isConnected = !error;
  return (
    <main className="min-h-[calc(100vh-14rem)] w-full bg-zinc-50 text-zinc-950 dark:bg-black dark:text-zinc-50">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-16">
        <header className="flex flex-col items-center gap-3 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
            Aduce-style Recipe Share
          </div>
          <div className={`${isConnected ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-rose-50 text-rose-700 border-rose-200"} inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium`}>
            {isConnected ? "Supabase connected" : `Supabase error: ${error?.message}`}
          </div>
          <h1 className="text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">
            Discover, cook, and share your favorite recipes
          </h1>
          <p className="max-w-2xl text-balance text-base leading-7 text-zinc-600 dark:text-zinc-400">
            A simple place to browse delicious dishes, save favorites, and soon upload your own. Supabase-powered features coming next.
          </p>
          <div className="mt-2 flex w-full flex-col items-center gap-3 sm:flex-row">
            <div className="relative w-full sm:max-w-md">
              <input
                aria-label="Search recipes"
                placeholder="Search recipes (e.g. chili, vegan, pasta)"
                className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none ring-0 transition-shadow placeholder:text-zinc-400 focus:border-zinc-300 focus:shadow-[0_0_0_4px_rgba(24,24,27,0.06)] dark:border-zinc-800 dark:bg-zinc-900 dark:focus:border-zinc-700"
              />
            </div>
            <div className="flex gap-3">
              <a
                href="/recipes"
                className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                Browse Recipes
              </a>
              <a
                href="/recipes/create"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
              >
                Create Recipe
              </a>
            </div>
          </div>
        </header>

        <section aria-label="Featured" className="mt-6">
          <h2 className="mb-4 text-lg font-semibold">Featured recipes</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <article
                key={i}
                className="group rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
              >
                <div className="mb-3 aspect-[16/10] w-full rounded-xl bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-700" />
                <h3 className="line-clamp-1 text-base font-medium">Sample Recipe Title {i}</h3>
                <p className="line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
                  A short teaser description goes here to showcase how recipes will look in the feed.
                </p>
                <div className="mt-3 flex items-center justify-between text-xs text-zinc-500">
                  <span>20 min • Easy</span>
                  <span>❤ 123</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-label="Categories" className="mt-4">
          <h2 className="mb-3 text-lg font-semibold">Popular categories</h2>
          <div className="flex flex-wrap gap-2">
            {["Breakfast", "Vegan", "Quick", "Desserts", "Pasta", "Gluten-free"].map(
              (tag) => (
                <a
                  key={tag}
                  href={`/recipes?tag=${encodeURIComponent(tag.toLowerCase())}`}
                  className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
                >
                  {tag}
                </a>
              )
            )}
          </div>
        </section>

      </section>
    </main>
  );
}
