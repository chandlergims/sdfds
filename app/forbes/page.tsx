import Navigation from "../components/Navigation";

export default function Forbes() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-1 bg-gray-900 text-white text-xs font-bold mb-3 rounded">
            FORBES RANKING #99999
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">By The Numbers</h1>
        </div>
        
        <div className="space-y-3 mb-8">
          <div className="flex justify-between items-center border-b border-gray-200 pb-2">
            <span className="text-xs text-gray-500 font-medium uppercase">Year Founded</span>
            <span className="text-lg font-bold text-gray-900">2025</span>
          </div>
          
          <div className="flex justify-between items-center border-b border-gray-200 pb-2">
            <span className="text-xs text-gray-500 font-medium uppercase">Team Size</span>
            <span className="text-lg font-bold text-gray-900">3–5</span>
          </div>
          
          <div className="flex justify-between items-center border-b border-gray-200 pb-2">
            <span className="text-xs text-gray-500 font-medium uppercase">IP Generated</span>
            <span className="text-lg font-bold text-gray-900">1,000+ units</span>
          </div>
          
          <div className="flex justify-between items-center border-b border-gray-200 pb-2">
            <span className="text-xs text-gray-500 font-medium uppercase">Framework Release</span>
            <span className="text-lg font-bold text-gray-900">Coming Soon</span>
          </div>
          
          <div className="flex justify-between items-center border-b border-gray-200 pb-2">
            <span className="text-xs text-gray-500 font-medium uppercase">Notable Characters</span>
            <span className="text-lg font-bold text-gray-900">Benny</span>
          </div>
          
          <div className="flex justify-between items-center border-b border-gray-200 pb-2">
            <span className="text-xs text-gray-500 font-medium uppercase">Monthly Reach</span>
            <span className="text-lg font-bold text-gray-900">TBD</span>
          </div>
          
          <div className="flex justify-between items-center border-b border-gray-200 pb-2">
            <span className="text-xs text-gray-500 font-medium uppercase">Valuation</span>
            <span className="text-lg font-bold text-gray-900">TBD</span>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded">
          <h2 className="text-sm font-bold text-gray-900 mb-2 uppercase">Core Mission</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Build the world's most valuable IP engine — systematically generating intellectual property at scale, 
            empowering creators to own their work and compete with companies 1000x their size.
          </p>
        </div>
      </main>
    </div>
  );
}
