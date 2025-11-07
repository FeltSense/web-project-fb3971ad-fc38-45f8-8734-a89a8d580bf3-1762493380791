export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-prestige-marble via-white to-prestige-champagne/20">
  <div className="max-w-7xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-16 md:mb-20">
      <div className="inline-block mb-4">
        <span className="text-prestige-gold text-sm font-semibold tracking-[0.2em] uppercase">Client Testimonials</span>
      </div>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-prestige-noir mb-6">
        Trusted by <span className="text-prestige-gold font-normal">Discerning Clients</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Discover why luxury homeowners choose Prestige Properties for their most important real estate decisions
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
      {/* Testimonial 1 */}
      <div className="bg-white p-8 md:p-10 lg:p-12 rounded-xl border border-prestige-gold/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group">
        <div className="flex items-center mb-4">
          <Image 
            src="https://cdn.pixabay.com/photo/2021/06/11/12/26/woman-6328478_1280.jpg" 
            alt="Sarah Mitchell"
            width={64}
            height={64}
            className="w-16 h-16 rounded-full object-cover border-2 border-prestige-gold/30"
          />
          <div className="ml-4">
            <div className="flex text-prestige-gold text-lg mb-1">
              ⭐⭐⭐⭐⭐
            </div>
          </div>
        </div>
        
        <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 italic">
          "Sold our $4.2M penthouse in just 18 days—well above asking price. Their marketing strategy with professional staging and drone photography attracted serious buyers immediately. The negotiation expertise saved us over $150K in closing costs."
        </blockquote>
        
        <div className="pt-6 border-t border-gray-100">
          <div className="font-semibold text-prestige-noir text-lg">Sarah Mitchell</div>
          <div className="text-sm text-gray-600 mt-1">Tech Executive</div>
          <div className="text-sm text-prestige-gold/80 mt-1">Pacific Heights, San Francisco</div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white p-8 md:p-10 lg:p-12 rounded-xl border border-prestige-gold/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group">
        <div className="flex items-center mb-4">
          <Image 
            src="https://cdn.pixabay.com/photo/2019/11/03/05/09/man-4598381_1280.jpg" 
            alt="James Chen"
            width={64}
            height={64}
            className="w-16 h-16 rounded-full object-cover border-2 border-prestige-gold/30"
          />
          <div className="ml-4">
            <div className="flex text-prestige-gold text-lg mb-1">
              ⭐⭐⭐⭐⭐
            </div>
          </div>
        </div>
        
        <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 italic">
          "Found our dream waterfront estate after viewing only 3 properties. Their deep market knowledge and exclusive off-market listings saved us months of searching. The due diligence team uncovered issues that saved us $200K in future repairs."
        </blockquote>
        
        <div className="pt-6 border-t border-gray-100">
          <div className="font-semibold text-prestige-noir text-lg">James Chen</div>
          <div className="text-sm text-gray-600 mt-1">Investment Banker</div>
          <div className="text-sm text-prestige-gold/80 mt-1">Bellevue, Washington</div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white p-8 md:p-10 lg:p-12 rounded-xl border border-prestige-gold/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group">
        <div className="flex items-center mb-4">
          <Image 
            src="https://cdn.pixabay.com/photo/2021/01/04/10/37/woman-5887532_1280.jpg" 
            alt="Victoria Ashford"
            width={64}
            height={64}
            className="w-16 h-16 rounded-full object-cover border-2 border-prestige-gold/30"
          />
          <div className="ml-4">
            <div className="flex text-prestige-gold text-lg mb-1">
              ⭐⭐⭐⭐⭐
            </div>
          </div>
        </div>
        
        <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 italic">
          "Managed our international property portfolio seamlessly across three countries. Their white-glove concierge service handled everything from renovations to tenant screening. Generated 22% higher rental yields than our previous management company."
        </blockquote>
        
        <div className="pt-6 border-t border-gray-100">
          <div className="font-semibold text-prestige-noir text-lg">Victoria Ashford</div>
          <div className="text-sm text-gray-600 mt-1">Entrepreneur</div>
          <div className="text-sm text-prestige-gold/80 mt-1">London & New York</div>
        </div>
      </div>

      {/* Testimonial 4 */}
      <div className="bg-white p-8 md:p-10 lg:p-12 rounded-xl border border-prestige-gold/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group">
        <div className="flex items-center mb-4">
          <Image 
            src="https://cdn.pixabay.com/photo/2020/09/18/19/27/laptop-5582775_1280.jpg" 
            alt="Michael Rodriguez"
            width={64}
            height={64}
            className="w-16 h-16 rounded-full object-cover border-2 border-prestige-gold/30"
          />
          <div className="ml-4">
            <div className="flex text-prestige-gold text-lg mb-1">
              ⭐⭐⭐⭐⭐
            </div>
          </div>
        </div>
        
        <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 italic">
          "Acquired a historic $6.8M mansion with complex zoning requirements. Their legal team navigated preservation regulations and secured permits for our renovation in record time. The investment has already appreciated 18% in two years."
        </blockquote>
        
        <div className="pt-6 border-t border-gray-100">
          <div className="font-semibold text-prestige-noir text-lg">Michael Rodriguez</div>
          <div className="text-sm text-gray-600 mt-1">Private Equity Partner</div>
          <div className="text-sm text-prestige-gold/80 mt-1">Georgetown, Washington DC</div>
        </div>
      </div>

      {/* Testimonial 5 */}
      <div className="bg-white p-8 md:p-10 lg:p-12 rounded-xl border border-prestige-gold/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group">
        <div className="flex items-center mb-4">
          <Image 
            src="https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_1280.jpg" 
            alt="Amanda Foster"
            width={64}
            height={64}
            className="w-16 h-16 rounded-full object-cover border-2 border-prestige-gold/30"
          />
          <div className="ml-4">
            <div className="flex text-prestige-gold text-lg mb-1">
              ⭐⭐⭐⭐⭐
            </div>
          </div>
        </div>
        
        <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 italic">
          "Relocated from London to Miami with zero stress. They coordinated international movers, school enrollment for our children, and found us a beachfront villa that checked every box. Their local connections made settling in effortless."
        </blockquote>
        
        <div className="pt-6 border-t border-gray-100">
          <div className="font-semibold text-prestige-noir text-lg">Amanda Foster</div>
          <div className="text-sm text-gray-600 mt-1">Fashion Designer</div>
          <div className="text-sm text-prestige-gold/80 mt-1">Miami Beach, Florida</div>
        </div>
      </div>

      {/* Testimonial 6 */}
      <div className="bg-white p-8 md:p-10 lg:p-12 rounded-xl border border-prestige-gold/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group">
        <div className="flex items-center mb-4">
          <Image 
            src="https://cdn.pixabay.com/photo/2021/07/14/17/32/manager-6466713_1280.jpg" 
            alt="David Park"
            width={64}
            height={64}
            className="w-16 h-16 rounded-full object-cover border-2 border-prestige-gold/30"
          />
          <div className="ml-4">
            <div className="flex text-prestige-gold text-lg mb-1">
              ⭐⭐⭐⭐⭐
            </div>
          </div>
        </div>
        
        <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 italic">
          "Built a custom $9.5M smart home from the ground up. Their architect partnerships and project management delivered on time and 5% under budget. The integrated technology systems are exactly what we envisioned—truly a masterpiece."
        </blockquote>
        
        <div className="pt-6 border-t border-gray-100">
          <div className="font-semibold text-prestige-noir text-lg">David Park</div>
          <div className="text-sm text-gray-600 mt-1">Software Founder</div>
          <div className="text-sm text-prestige-gold/80 mt-1">Atherton, California</div>
        </div>
      </div>
    </div>

    {/* Trust Indicators */}
    <div className="mt-20 pt-16 border-t border-prestige-gold/20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-4xl md:text-5xl font-display text-prestige-gold mb-2">$2.4B+</div>
          <div className="text-sm text-gray-600 uppercase tracking-wider">Total Sales Volume</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-display text-prestige-gold mb-2">850+</div>
          <div className="text-sm text-gray-600 uppercase tracking-wider">Luxury Properties Sold</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-display text-prestige-gold mb-2">98%</div>
          <div className="text-sm text-gray-600 uppercase tracking-wider">Client Satisfaction</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-display text-prestige-gold mb-2">25</div>
          <div className="text-sm text-gray-600 uppercase tracking-wider">Years Excellence</div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}