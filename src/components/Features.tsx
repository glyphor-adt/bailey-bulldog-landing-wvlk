import React from 'react'
import { Zap, Shield, TrendingUp, Heart, PawPrint, Camera } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Unmatched Cuteness Overload',
    description: "Bailey's wrinkly face and adorable snorts will melt your heart instantly. Get ready for endless smiles!",
  },
  {
    icon: Shield,
    title: 'Certified Good Boy (and Nap Enthusiast)',
    description: 'Bailey is a master of naps and cuddles, providing unparalleled comfort and companionship.',
  },
  {
    icon: TrendingUp,
    title: 'Trending on the Cuteness Scale',
    description: 'With his goofy personality and charming demeanor, Bailey is guaranteed to be the star of your social media.',
  },
  {
    icon: Heart,
    title: 'Endless Love and Loyalty',
    description: 'Bailey offers unwavering love and loyalty, making him the perfect companion for life’s adventures.',
  },
  {
    icon: PawPrint,
    title: 'Expert at Snoring and Cuddling',
    description: 'Prepare for symphony of snores and a lifetime of cuddles with this lovable bulldog.',
  },
  {
    icon: Camera,
    title: 'Photogenic Model Material',
    description: 'Bailey is always ready for his close-up, making him the perfect subject for adorable photos and videos.',
  },
]

function Features() {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <feature.icon className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
