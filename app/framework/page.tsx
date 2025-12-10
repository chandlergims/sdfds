import Navigation from "../components/Navigation";

export default function Framework() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">The Framework</h1>
          <p className="text-sm text-gray-600">Technology powering the next generation of IP creation</p>
        </div>
        
        <div className="space-y-3 mb-8">
          <div className="border-b border-gray-200 pb-3">
            <h2 className="text-sm font-bold text-gray-900 mb-2 uppercase">Instant Character Creation</h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              Build brandable characters with personality, style, and purpose in minutes instead of months.
              Define traits, behaviors, and visual identity through intuitive tooling.
            </p>
          </div>
          
          <div className="border-b border-gray-200 pb-3">
            <h2 className="text-sm font-bold text-gray-900 mb-2 uppercase">Automated Distribution</h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              Integrate seamlessly with social platforms for automated content posting and engagement.
              Your characters work while you sleep.
            </p>
          </div>
          
          <div className="border-b border-gray-200 pb-3">
            <h2 className="text-sm font-bold text-gray-900 mb-2 uppercase">Scalable Creativity</h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              No committees. No approval chains. No "staying on brand."
              Create what you want, when you want, as fast as you can think.
            </p>
          </div>
          
          <div className="border-b border-gray-200 pb-3">
            <h2 className="text-sm font-bold text-gray-900 mb-2 uppercase">Universal Integration</h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              Plug into indie tools, enterprise APIs, and everything in between.
              Built for flexibility, not vendor lock-in.
            </p>
          </div>
          
          <div className="border-b border-gray-200 pb-3">
            <h2 className="text-sm font-bold text-gray-900 mb-2 uppercase">Legal Protection</h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              Create real, ownable, legally protected intellectual property.
              Track ownership, licensing, and revenue from day one.
            </p>
          </div>
          
          <div className="border-b border-gray-200 pb-3">
            <h2 className="text-sm font-bold text-gray-900 mb-2 uppercase">Community-Driven</h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              When it goes public, anyone can build. Anyone can remix. Anyone can franchise their own characters.
              The ecosystem grows with every creator who joins.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded">
          <h2 className="text-sm font-bold text-gray-900 mb-2 uppercase">Public Release: Coming Soon</h2>
          <p className="text-xs text-gray-600 leading-relaxed">
            Hackathons. Launches. Mods. Skins. Agents. Plugins.
            All open. All possible. All yours to build.
          </p>
        </div>
      </main>
    </div>
  );
}
