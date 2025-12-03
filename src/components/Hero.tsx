import React from 'react'

function Hero() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white rounded-3xl shadow-2xl">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">Meet Bailey: The English Bulldog Who Will Steal Your Heart</h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto text-center leading-relaxed mb-8">
          Prepare for an overload of cuteness! Bailey is a sweet, wrinkly, and utterly charming English Bulldog ready to brighten your day.
          Discover his adorable adventures and learn how he can bring joy to your life.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#learn-more" className="bg-primary hover:bg-blue-700 px-8 py-4 rounded-xl text-lg shadow-xl transition-all duration-300">Learn More About Bailey</a>
          {/* <a href="#adopt" className="border-2 border-gray-300 hover:border-blue-500 px-6 py-3 rounded-xl text-lg transition-all duration-300">Adopt Bailey (Hypothetically!)</a> */}
        </div>

        <div className="mt-12">
          <img
            src="https://images.unsplash.com/photo-1598550879263-94caaa99599c?w=800&h=600"
            alt="Bailey the Bulldog"
            className="rounded-2xl mx-auto shadow-xl"
            aria-label="Bailey the Bulldog"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
