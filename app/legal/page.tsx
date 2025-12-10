import Navigation from "../components/Navigation";

export default function Legal() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Legal & IP Ownership</h1>
          <p className="text-sm text-gray-600">Intellectual property rights and licensing information</p>
        </div>
        
        <div className="space-y-3 mb-8">
          <div className="border-b border-gray-200 pb-3">
            <h2 className="text-sm font-bold text-gray-900 mb-2 uppercase">Intellectual Property Rights</h2>
            <p className="text-xs text-gray-600 leading-relaxed mb-2">
              Benny and all associated characters, designs, content, and materials are the exclusive intellectual property 
              of our company. All rights reserved.
            </p>
            <p className="text-xs text-gray-600 leading-relaxed">
              This includes but is not limited to trademarks, copyrights, trade dress, personality rights, 
              and any other proprietary rights associated with the character and brand.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-3">
            <h2 className="text-sm font-bold text-gray-900 mb-2 uppercase">Framework Ownership</h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              The underlying framework and technology used to create and manage IP are proprietary systems owned by our company.
              Upon public release, the framework will be available under licensing terms to be announced.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-3">
            <h2 className="text-sm font-bold text-gray-900 mb-2 uppercase">Creator Rights</h2>
            <p className="text-xs text-gray-600 leading-relaxed mb-2">
              When the framework is publicly released, creators who use it will retain ownership of their own generated characters and IP, 
              subject to the framework's licensing agreement.
            </p>
            <p className="text-xs text-gray-600 leading-relaxed">
              All creator-generated IP will be legally protected and tracked through the framework's built-in ownership systems.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-3">
            <h2 className="text-sm font-bold text-gray-900 mb-2 uppercase">Usage & Licensing</h2>
            <p className="text-xs text-gray-600 leading-relaxed mb-2">
              Unauthorized use, reproduction, or distribution of Benny or related IP without express written permission is prohibited.
            </p>
            <p className="text-xs text-gray-600 leading-relaxed">
              For licensing inquiries, partnership opportunities, or permission requests, please contact our legal team.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-3">
            <h2 className="text-sm font-bold text-gray-900 mb-2 uppercase">Copyright Notice</h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              © 2025 All Rights Reserved. Benny™ is a registered trademark. Unauthorized use is subject to legal action.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
