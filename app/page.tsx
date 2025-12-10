import Image from "next/image";
import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-1 flex flex-col items-center justify-center">
        <Image
          src="/Untitled design - 2025-12-10T165751.792.png"
          alt="Logo"
          width={150}
          height={150}
          priority
        />
        <div className="flex gap-6 mt-8">
          <Link
            href="/story"
            className="text-sm text-gray-900 hover:text-gray-600 font-bold"
          >
            Story
          </Link>
          <Link
            href="/framework"
            className="text-sm text-gray-900 hover:text-gray-600 font-bold"
          >
            Framework
          </Link>
          <Link
            href="/forbes"
            className="text-sm text-gray-900 hover:text-gray-600 font-bold"
          >
            Forbes
          </Link>
          <Link
            href="/legal"
            className="text-sm text-gray-900 hover:text-gray-600 font-bold"
          >
            Legal
          </Link>
        </div>
      </main>
    </div>
  );
}
