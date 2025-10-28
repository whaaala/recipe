import Link from "next/link";
export function Header() {
  return (
    <header className="w-full border-b border-zinc-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          Aduce Recipes
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/recipes" className="text-zinc-700 hover:underline dark:text-zinc-200">
            Recipes
          </Link>
          <Link href="/recipes/create" className="text-zinc-700 hover:underline dark:text-zinc-200">
            Create
          </Link>
          <Link
            href="/auth/login"
            className="rounded-lg border border-zinc-200 px-3 py-1.5 text-zinc-900 hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-900"
          >
            Sign in
          </Link>
        </nav>
      </div>
    </header>
  );
}


