'use client'
import { useState, useEffect } from 'react'

import { Box, StarIcon, Eclipse, Satellite } from 'lucide-react'

export default function Landingpage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Twinkling stars background */}
      <div className="absolute inset-0">
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              animation: `twinkle ${Math.random() * 5 + 5}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <Satellite className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold">CosmicLookout</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#features" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#features" className="hover:text-blue-400 transition-colors">Planets</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Team</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>

          </div>

        </nav>

        <main className="text-center">
          <h1 className="text-5xl font-bold mb-20 text-center animate-pulse text-blue-400">
            Explore the Cosmos with CosmicLookout
          </h1>
          <p className="text-xl md:text-2xl mb-12 mt-10 animate-fade-in animation-delay-200">
            Discover the beauty and danger of near-Earth objects on a journey through our solar system and beyond.
          </p>

        </main>

        <section id="features" className="my-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Get Info Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Eclipse, title: "Observetion", description: "Cosmic Close-Ups: Our Near-Earth Neighbors." },
              { icon: StarIcon, title: "Asteroids Discovery", description: "A Journey Through Our Solar System and Beyond." },
              { icon: Box, title: "Real Visuals", description: "Design and simulate space exploration." }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 p-6 rounded-lg text-center transform transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${(index + 4) * 200}ms` }}>
                <feature.icon className="h-12 w-12 mx-auto mb-4 text-blue-400" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>


      </div>

      {/* Floating space objects */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-purple-500 rounded-full opacity-50 animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-500 rounded-full opacity-30 animate-float animation-delay-1000" />
      <div className="absolute top-3/4 right-1/3 w-12 h-12 bg-red-500 rounded-full opacity-40 animate-float animation-delay-2000" />

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 1s forwards;
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        .animation-delay-2000 {
          animation-delay: 2000ms;
        }
        .animate-float {
          animation: float 6s infinite ease-in-out;
        }
      `}</style>
    </div>
  )
}