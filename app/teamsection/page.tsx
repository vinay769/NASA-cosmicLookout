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
            image: 'data:image/jpeg;base64,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',
            social: {
                linkedin: 'https://www.linkedin.com/in/vinay-chavhan-535b4a244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
                instagram: 'https://www.instagram.com/glock.vin4n',
                github: 'https://github.com/vinay769'
            }
        },
        {
            name: 'Prem Kamble',
            role: 'Frontend Developer',
            bio: 'Creating intuitive and beautiful user experiences is my passion.',
            image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
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
            image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
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
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
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
            image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
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
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
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

