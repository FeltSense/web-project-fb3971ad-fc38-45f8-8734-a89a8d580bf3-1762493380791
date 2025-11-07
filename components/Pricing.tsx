export default function Pricing() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
  <div className="max-w-7xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-4">
      <h2 className="text-4xl md:text-5xl font-bold text-prestige-noir mb-4">
        Unlock Premium Access
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
        Join Prestige Properties and gain exclusive access to the finest luxury real estate opportunities
      </p>
    </div>

    {/* Pricing Card */}
    <div className="mt-12 md:mt-16 flex justify-center">
      <div className="max-w-md w-full bg-white rounded-2xl border-2 border-blue-600 shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300">
        {/* Card Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 md:px-10 lg:px-12 pt-8 md:pt-10 lg:pt-12 pb-6">
          <h3 className="text-2xl font-bold text-white">Premium Membership</h3>
          <p className="text-blue-100 text-sm mt-2">Lifetime access to exclusive properties</p>
        </div>

        {/* Card Content */}
        <div className="p-8 md:p-10 lg:p-12">
          {/* Price */}
          <div className="mb-2">
            <div className="text-5xl font-bold text-gray-900">$29</div>
            <p className="text-gray-600 mt-2">One-time payment</p>
          </div>

          {/* Features */}
          <div className="mt-6 mb-6 space-y-3">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 text-sm">Exclusive access to luxury properties before market listing</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 text-sm">Expert agents specializing in high-end real estate</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 text-sm">Comprehensive virtual tours and 3D walkthroughs</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 text-sm">Personalized property matching based on lifestyle preferences</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 text-sm">White-glove concierge service throughout buying/selling process</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 text-sm">In-depth neighborhood and market insights</span>
            </div>
          </div>

          {/* Button */}
          <button 
            onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00?client_reference_id=fb3971ad-fc38-45f8-8734-a89a8d580bf3'}
            className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl mt-8"
          >
            Get Your Website - $29
          </button>

          {/* Trust Badge */}
          <p className="text-center text-gray-500 text-xs mt-6">
            Secure payment • Instant access • 30-day guarantee
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}