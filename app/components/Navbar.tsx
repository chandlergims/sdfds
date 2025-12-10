export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-gray-900">Logo</span>
          </div>
          <div className="flex space-x-8">
            <a
              href="#"
              className="text-gray-900 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
