'use client'

import React, { useState, useEffect } from 'react'

import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';


export default function Team() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const teamMembers = [
        {
            name: 'Vinay Chavhan',
            role: 'Frontend Developer',
            bio: 'Passionate about crafting elegant code and solving complex problems.',
            image: "/vinay.jpg",
            social: {
                linkedin: 'https://www.linkedin.com/in/vinay-chavhan-535b4a244/',
                instagram: 'https://www.instagram.com/glock.vin4n',
                github: 'https://github.com/vinay769'
            }
        },
        {
            name: 'Prem Kamble',
            role: 'Frontend Developer',
            bio: 'Creating intuitive and beautiful user experiences is my passion.',
            image: '/prem.jpeg',
            social: {
                linkedin: 'https://www.linkedin.com/in/prem-kamble',
                instagram: 'https://instagram.com/pr3msig',
                github: 'https://github.com/pr3m-kamble'
            }
        },
        {
            name: 'Velavan',
            role: 'UI/UX Designer',
            bio: 'Bringing teams together to deliver outstanding results on time.',
            image: '/boyuser.jpeg',
            social: {
                linkedin: '#',
                instagram: '#',
                github: '#'
            }
        },
        {
            name: 'Krish',
            role: 'Frontend Developer',
            bio: 'Driving growth through innovative digital marketing strategies.',
            image: '/boyuser.jpeg',
            social: {
                linkedin: '#',
                instagram: '#',
                github: '#'
            }
        },
        {
            name: 'Tunir',
            role: 'Astrophyscist',
            bio: 'Driving growth through innovative digital marketing strategies.',
            image: '/boyuser.jpeg',
            social: {
                linkedin: '#',
                instagram: '#',
                github: '#'
            }
        },
        {
            name: 'Swarnaduti',
            role: 'Backend Developer',
            bio: 'Driving growth through innovative digital marketing strategies.',
            image: '/girluser.jpeg',
            social: {
                linkedin: '#',
                instagram: '#',
                github: '#'
            }
        }
    ];


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

            <div className="max-w-4xl mx-auto relative z-10">
                <h1 className="text-6xl font-bold mb-8 text-center animate-pulse text-blue-400">
                    Meet Our Crew
                </h1>





                {/* Animated space objects */}
                <div className="absolute top-10 right-20 w-16 h-16 bg-yellow-300 rounded-full opacity-75 animate-float" />
                <div className="absolute bottom-50 left-80 w-8 h-8 bg-red-500 rounded-full opacity-75 animate-float-reverse" />
                <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-purple-500 rounded-full opacity-50 animate-pulse" />
                <div className="absolute top-70 right-100 w-16 h-16 bg-yellow-300 rounded-full opacity-75 animate-float" />
                <section className="bg-gray-800 bg-opacity-50 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-opacity-70">
                    <div className="max-w-10xl mx-auto">

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-64 object-cover object-center"
                                    />
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                                        <p className="text-indigo-400 mb-4">{member.role}</p>
                                        <p className="text-gray-300 mb-4">{member.bio}</p>
                                        <div className="flex justify-center space-x-4">
                                            <a href={member.social.linkedin} className="text-gray-400 hover:text-white transition-colors duration-300">
                                                <FaLinkedin size={24} />
                                            </a>
                                            <a href={member.social.instagram} className="text-gray-400 hover:text-white transition-colors duration-300">
                                                <FaInstagram size={24} />
                                            </a>
                                            <a href={member.social.github} className="text-gray-400 hover:text-white transition-colors duration-300">
                                                <FaGithub size={24} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

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

