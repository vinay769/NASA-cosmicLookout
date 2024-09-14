'use client'




import React, { useState, useEffect } from 'react'



export default function About() {

  const [isVisible, setIsVisible] = useState(false)




  useEffect(() => {

    setIsVisible(true)

  }, [])




  const handleButtonClick = () => {

    window.scrollTo({ top: 0, behavior: 'smooth' });

  };




  return (

    <div className="min-h-screen bg-black text-white p-8 relative overflow-hidden">

      {/* Starry background */}

      <div className="absolute inset-0 overflow-hidden">

        {[...Array(100)].map((_, i) => (

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




      <div className="max-w-4xl mx-auto relative z-10 my-20">

        <h1 className="text-6xl font-bold mb-8 text-center animate-pulse text-blue-400">

          Exploring the Cosmos with Team HyperSpace Hackers

        </h1>




        <div className="flex flex-col md:flex-row items-center mb-12">

          <div className="w-64 h-64 rounded-full overflow-hidden mb-8 md:mb-0 md:mr-8 animate-spin-slow">




            <img

              src='https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NXx8fGVufDB8fHx8fA%3D%3D'

              alt="Space Mission"

              className="w-full h-full object-cover"

            />

          </div>

          <div className="flex-1">

            <p className="text-lg mb-4 animate-fade-in">

              Embark on a journey to the near earth objects(NEOs) with our cutting-edge space exploration program.

              We're the one with all essential information about the solar system ,

              pushing the boundaries of human knowledge.

            </p>

            <p className="text-lg animate-fade-in delay-300">

              Our team of brilliant engineers, and astrophysicist are here to help you to provide the near earth objects exploration.

            </p>

          </div>

        </div>




        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-opacity-70">

            <h2 className="text-2xl font-semibold mb-4 text-blue-300">Our Missions</h2>

            <ul className="list-disc list-inside space-y-2">

              <li className="animate-slide-in" style={{ animationDelay: '100ms' }}>Explore distant Objects </li>

              <li className="animate-slide-in" style={{ animationDelay: '200ms' }}>Study the Asteroids</li>

              <li className="animate-slide-in" style={{ animationDelay: '300ms' }}>Search for Hazardous Asteroidss</li>

            </ul>

          </div>




          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-opacity-70">

            <h2 className="text-2xl font-semibold mb-4 text-blue-300">Tools used</h2>

            <ul className="list-disc list-inside space-y-2">

              <li className="animate-slide-in" style={{ animationDelay: '500ms' }}>Next JS</li>

              <li className="animate-slide-in" style={{ animationDelay: '600ms' }}>NASA open APIs</li>

              <li className="animate-slide-in" style={{ animationDelay: '700ms' }}>Google Gemini</li>




            </ul>

          </div>

        </div>




        {/* Animated space objects */}

        <div className="absolute top-20 right-20 w-16 h-16 bg-yellow-300 rounded-full opacity-75 animate-float" />

        <div className="absolute bottom-20 left-20 w-8 h-8 bg-red-500 rounded-full opacity-75 animate-float-reverse" />

        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-purple-500 rounded-full opacity-50 animate-pulse" />

        <div className="absolute top-50 right-80 w-16 h-16 bg-yellow-300 rounded-full opacity-75 animate-float" />

      </div>




      {/* Call-to-action button */}

      <div className="text-center mt-12">

        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-110 animate-bounce" onClick={handleButtonClick}>

          Explore...🚀

        </button>

      </div>




      <style jsx>{`

        @keyframes twinkle {

          0%, 100% { opacity: 0; }

          50% { opacity: 1; }

        }

        @keyframes float {

          0%, 100% { transform: translateY(0); }

          50% { transform: translateY(-20px); }

        }

        @keyframes float-reverse {

          0%, 100% { transform: translateY(0); }

          50% { transform: translateY(20px); }

        }

        .animate-spin-slow {

          animation: spin 20s linear infinite;

        }

        .animate-fade-in {

          opacity: 0;

          animation: fadeIn 1s forwards;

        }

        .animate-slide-in {

          opacity: 0;

          transform: translateX(-20px);

          animation: slideIn 0.5s forwards;

        }

        @keyframes spin {

          from { transform: rotate(0deg); }

          to { transform: rotate(360deg); }

        }

        @keyframes fadeIn {

          to { opacity: 1; }

        }

        @keyframes slideIn {

          to { opacity: 1; transform: translateX(0); }

        }

        .animate-float {

          animation: float 10s infinite ease-in-out;

        }

        .animate-float-reverse {

          animation: float-reverse 8s infinite ease-in-out;

        }

      `}</style>

    </div>

  )

}
