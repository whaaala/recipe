export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 bg-white py-6 text-xs text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4">
        <span>© {new Date().getFullYear()} Aduce Recipes</span>
        <span>Supabase integration coming next →</span>
      </div>
    </footer>
  );
}


