import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex justify-center gap-6 py-6 border-b border-gray-200">
      <Link
        href="/"
        className="text-xs text-gray-900 hover:text-gray-600 font-bold uppercase tracking-wide"
      >
        Home
      </Link>
      <Link
        href="/story"
        className="text-xs text-gray-900 hover:text-gray-600 font-bold uppercase tracking-wide"
      >
        Story
      </Link>
      <Link
        href="/framework"
        className="text-xs text-gray-900 hover:text-gray-600 font-bold uppercase tracking-wide"
      >
        Framework
      </Link>
      <Link
        href="/forbes"
        className="text-xs text-gray-900 hover:text-gray-600 font-bold uppercase tracking-wide"
      >
        Forbes
      </Link>
      <Link
        href="/legal"
        className="text-xs text-gray-900 hover:text-gray-600 font-bold uppercase tracking-wide"
      >
        Legal
      </Link>
    </nav>
  );
}
