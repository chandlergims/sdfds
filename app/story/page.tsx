import Navigation from "../components/Navigation";

export default function Story() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">This is Benny.</h1>
          <p className="text-sm text-gray-600">Built different. Moving faster.</p>
        </div>
        
        <div className="space-y-3 mb-8">
          <div className="border-b border-gray-200 pb-3">
            <p className="text-xs text-gray-600 leading-relaxed">
              No venture capital. No corporate overlords. No permission slips from billion-dollar boardrooms.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-3">
            <p className="text-xs text-gray-600 leading-relaxed">
              Benny exists because a small team decided they were done waiting for legacy companies to catch up.
              While tech giants spent months scheduling meetings about meetings, we built.
              While they argued over brand guidelines, we shipped.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-3">
            <p className="text-xs text-gray-900 font-bold leading-relaxed">
              Benny moves faster than their legal teams can write NDAs.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-3">
            <p className="text-xs text-gray-600 leading-relaxed">
              What takes them half a year and seventeen approvals?
              We knocked it out over a weekend.
              Not because we're smarter — because we don't need permission.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-3">
            <h2 className="text-sm font-bold text-gray-900 mb-2 uppercase">Here's what makes them nervous:</h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              Benny runs on technology they don't have access to yet.
              A framework that builds characters, brands, and intellectual property in hours instead of quarters.
              No committees deciding if it's "on message." No executives killing ideas before they breathe.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-3">
            <p className="text-xs text-gray-600 leading-relaxed">
              Just pure execution. Automated. Scalable. Unstoppable.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-3">
            <p className="text-xs text-gray-600 leading-relaxed">
              When this framework goes public, it won't just be us building anymore.
              It'll be thousands of creators making their own characters, their own IP, their own brands —
              all moving at a speed that makes traditional media companies look like they're running in quicksand.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-3">
            <h2 className="text-sm font-bold text-gray-900 mb-2 uppercase">Why billion-dollar companies hate this:</h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              They've spent decades building moats. Infrastructure. Processes. Barriers to entry.
              We just walked around all of it.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-3">
            <p className="text-xs text-gray-600 leading-relaxed">
              Benny doesn't need their distribution networks. Doesn't need their capital. Doesn't need their approval to exist.
              He's proof that creativity beats bureaucracy every single time.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded">
          <p className="text-sm font-bold text-gray-900">
            Benny isn't here to compete with tech giants.
            He's here to make them irrelevant.
          </p>
        </div>
      </main>
    </div>
  );
}
