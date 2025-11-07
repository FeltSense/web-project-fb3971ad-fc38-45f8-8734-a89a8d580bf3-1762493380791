export default function Hero() {
  return (
    <section className="relative min-h-screen bg-prestige-noir overflow-hidden">
  {/* Geometric Background Pattern */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute top-0 left-0 w-96 h-96 border border-prestige-gold rotate-45 transform -translate-x-48 -translate-y-48"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 border border-prestige-gold rotate-45 transform translate-x-48 translate-y-48"></div>
    <div className="absolute top-1/2 left-1/2 w-64 h-64 border border-prestige-gold rotate-45 transform -translate-x-32 -translate-y-32"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-24 md:py-32">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Content Side */}
      <div className="space-y-8 animate-fade-in">
        {/* Prestige Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-prestige-gold/10 border border-prestige-gold/30 rounded-full backdrop-blur-sm">
          <svg className="w-5 h-5 text-prestige-gold" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-prestige-champagne font-medium text-sm tracking-wide">LUXURY REAL ESTATE SPECIALISTS</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl">
          Where Architectural
          <span className="block mt-2 text-prestige-gold">Excellence Meets</span>
          <span className="block mt-2">Timeless Luxury</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl lg:text-2xl text-prestige-champagne/80 max-w-2xl leading-relaxed">
          Discover extraordinary properties curated for the most discerning clientele. Access exclusive listings before they reach the market.
        </p>

        {/* Value Props */}
        <div className="space-y-4 pt-4">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-prestige-gold/20 flex items-center justify-center mt-1">
              <svg className="w-4 h-4 text-prestige-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-prestige-champagne/70 text-base md:text-lg">Exclusive pre-market access to luxury properties worldwide</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-prestige-gold/20 flex items-center justify-center mt-1">
              <svg className="w-4 h-4 text-prestige-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-prestige-champagne/70 text-base md:text-lg">Elite agents with decades of high-end real estate expertise</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-prestige-gold/20 flex items-center justify-center mt-1">
              <svg className="w-4 h-4 text-prestige-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-prestige-champagne/70 text-base md:text-lg">Immersive 3D virtual tours and architectural walkthroughs</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="group px-8 py-4 bg-prestige-gold hover:bg-prestige-gold/90 text-prestige-noir text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
            Schedule Private Viewing
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <button className="px-8 py-4 border-2 border-prestige-champagne/30 text-prestige-champagne text-lg font-semibold rounded-lg hover:bg-prestige-champagne/10 hover:border-prestige-champagne/50 backdrop-blur-sm transition-all duration-300">
            Explore Portfolio
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 md:gap-12 pt-12 md:pt-16 border-t border-prestige-gold/20">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-prestige-gold mb-2">$2.8B+</div>
            <div className="text-sm md:text-base text-prestige-champagne/60">Properties Sold</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-prestige-gold mb-2">450+</div>
            <div className="text-sm md:text-base text-prestige-champagne/60">Luxury Estates</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-prestige-gold mb-2">98%</div>
            <div className="text-sm md:text-base text-prestige-champagne/60">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Image Side */}
      <div className="relative lg:h-[700px] animate-fade-in" style={{ animationDelay: '200ms' }}>
        {/* Main Image */}
        <div className="relative h-[500px] lg:h-full rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&h=900&fit=crop"
            alt="Luxury modern mansion with infinity pool at sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-prestige-noir/60 via-transparent to-transparent"></div>
          
          {/* Floating Property Card */}
          <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-prestige-noir mb-1">Beverly Hills Estate</h3>
                <p className="text-sm text-gray-600">Los Angeles, California</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-prestige-gold">$24.5M</div>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-600 pt-3 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>8 Beds</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>12,500 sq ft</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>View Tour</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="hidden lg:block absolute -top-8 -right-8 w-32 h-32 border-2 border-prestige-gold/30 rounded-full"></div>
        <div className="hidden lg:block absolute -bottom-8 -left-8 w-24 h-24 bg-prestige-gold/10 backdrop-blur-sm rounded-lg transform rotate-12"></div>
      </div>
    </div>
  </div>

  {/* Bottom Gradient Fade */}
  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-prestige-noir to-transparent"></div>
</section>
  );
}