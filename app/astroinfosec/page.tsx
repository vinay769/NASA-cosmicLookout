'use client'
import { useState, useEffect } from 'react'


export default function Astroinfosec() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const solarsystem = [


        {
            name: 'Mercury',
            type: 'Terrestrial Planet',
            info: 'The closest planet to the sun, Mercury is a small, rocky world with a heavily cratered surface. It has no atmosphere to speak of, making it extremely hot during the day and freezing cold at night',
            image: 'https://images.unsplash.com/photo-1614724723656-457e78e0b50b?q=80&w=2017&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

        },
        {
            name: 'Venus',
            type: 'Terrestrial Planet',
            info: 'Often called Earths twin, Venus is a similar size and composition. However, its atmosphere is incredibly dense, trapping heat and making it the hottest planet in our solar system',
            image: 'https://images.unsplash.com/photo-1614726365723-498aa67c5f7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTh8fHxlbnwwfHx8fHw%3D',

        },
        {
            name: 'Earth',
            type: 'Terrestrial Planet',
            info: 'Our home planet, Earth is the only known planet to support life. It has a unique atmosphere that protects us from harmful radiation and provides the conditions necessary for water to exist in liquid form.',
            image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NXx8fGVufDB8fHx8fA%3D%3D',

        },
        {
            name: 'Mars',
            type: 'Terrestrial Planet',
            info: 'The Red Planet, Mars is a cold, barren world with a thin atmosphere. It has polar ice caps and evidence of ancient water flow, suggesting that it may have once been habitable.',
            image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8fA%3D%3D',

        },
        {
            name: 'Jupiter',
            type: 'Gas Giants',
            info: 'The largest planet in our solar system, Jupiter is a gas giant composed primarily of hydrogen and helium. It has a Great Red Spot, a massive storm that has been raging for centuries.',
            image: 'https://media.istockphoto.com/id/1667562661/photo/planet-jupiter.jpg?s=2048x2048&w=is&k=20&c=BiFXVqjbOGNxZCiEM-eF00Jd0DjubBJpGNDGmuQh9Fc=',

        },
        {
            name: 'Saturn',
            type: 'Gas Giants',
            info: ' Known for its iconic rings, Saturn is another gas giant with a similar composition to Jupiter. Its rings are made up of billions of icy particles.',
            image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhbmV0fGVufDB8fDB8fHww',

        },
        {
            name: 'Uranus',
            type: 'Gas Giants',
            info: 'An ice giant, Uranus is tilted on its side, causing its seasons to be extreme. It has a faint ring system and several moons. ',
            image: 'https://images.unsplash.com/photo-1614732484003-ef9881555dc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D',

        },
        {
            name: 'Neptune',
            type: 'Gas Giants',
            info: 'The farthest planet from the sun, Neptune is a deep blue color due to methane in its atmosphere. It has strong winds and a Great Dark Spot, a storm similar to Jupiters Great Red Spot. ',
            image: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGxhbmV0fGVufDB8fDB8fHww',

        },

    ];

    const asetroidlist = [
        {
            name: '433 Eros',
            type: 'S-type',
            size: '16.8 km',
            info: 'This asteroid is one of the largest near-Earth asteroids and has been visited by spacecraft.'
        },
        {
            name: '99942 Apophis',
            type: 'S-type',
            size: '370 m',
            info: ' This asteroid made headlines in 2004 when it was briefly considered to have a high chance of impacting Earth. While the risk has since been downgraded, it remains an object of interest.'
        },
        {
            name: '101955 Bennu',
            type: 'C-type',
            size: '510 m',
            info: 'This asteroid is a potential impactor and has been the target of NASAs OSIRIS-REx mission.'
        },
        {
            name: '2009 FD',
            type: 'S-type',
            size: '130-280 m',
            info: 'This asteroid is relatively small but has a high chance of impacting Earth in the future.'
        },
        {
            name: '65778 Dymoke',
            type: 'M-type',
            size: '1.5 km',
            info: 'This asteroid is one of the largest near-Earth asteroids and has a potential impact risk.'
        },
        {
            name: '2010 RF12',
            type: 'S-type',
            size: '30-70 m',
            info: 'This asteroid is small but has a high chance of impacting Earth in the future.'
        },
        {
            name: '2008 TC3',
            type: 'S-type',
            size: '3-5 meters',
            info: 'This asteroid is notable for being the first one to be discovered and tracked before it impacted Earth in 2008.'
        },
        {
            name: '2014 AA',
            type: 'S-type',
            size: '2-5 meters',
            info: 'This asteroid is also notable for being discovered and tracked before it impacted Earth in 2014.'
        },
        {
            name: '2019 MO',
            type: 'S-type',
            size: '4-6 meters',
            info: 'This asteroid is the smallest known object to have impacted Earth in recorded history.'
        },
        {
            name: '2023 CX1',
            type: 'S-type',
            size: '1-2 meters',
            info: 'This asteroid is notable for being the first one to be discovered and tracked before it impacted Earth in 2023.'
        },
    ];

    const cometlist = [
        {
            name: 'C/2023 P1 (Nishimura)',

            info: ' This long-period comet was discovered in August 2023 and is expected to make its closest approach to Earth in September 2023. It is currently visible in the morning sky.',
        },
        {
            name: 'C/2020 F3 (NEOWISE)',

            info: ' This comet was one of the brightest comets of 2020 and was visible to the naked eye. It has a long, tail and is currently in the outer solar system.',
        },
        {
            name: 'C/1996 B2 (Hyakutake)',

            info: 'This comet was discovered in 1996 and made a close approach to Earth in 1997. It was one of the brightest comets of the 20th century.',
        },
        {
            name: 'C/1995 O1 (Hale-Bopp)',

            info: 'This comet was discovered in 1995 and made a close approach to Earth in 1997. It was visible to the naked eye for many months.',
        },
        {
            name: 'C/1965 S1 (Ikeya-Seki)',

            info: ' This comet was discovered in 1965 and made a close approach to Earth in 1966. It was one of the brightest comets ever recorded.',
        },
        {
            name: 'C/1882 R1 (Great September Comet)',

            info: ' This comet was discovered in 1882 and made a close approach to Earth in 1882. It was one of the brightest comets of the 19th century.',
        },
        {
            name: 'C/1858 L1 (Donati)',

            info: 'This comet was discovered in 1858 and made a close approach to Earth in 1858. It was a very bright comet with a long tail.',
        },
        {
            name: 'C/1811 F1 (Great Comet of 1811)',

            info: ' This comet was discovered in 1811 and made a close approach to Earth in 1811. It was one of the longest-observed comets in history.',
        },
        {
            name: 'C/1744 K1 (Klinkenberg-Schaub)',

            info: 'This comet was discovered in 1744 and made a close approach to Earth in 1744. It was a very bright comet.',
        },
        {
            name: 'C/1729 P1 (Chéseaux)',

            info: 'This comet was discovered in 1729 and made a close approach to Earth in 1729. It was a very bright comet with a long tail.',
        },

    ];

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


                <main className="text-center">
                    <h1 className="text-5xl font-bold mb-20 text-center animate-pulse text-blue-400">
                        Our Solar System: A Planetary Overview
                    </h1>
                    <h2>Solar System Planets are the eight celestial bodies that orbit the Sun.
                        <br />
                        Each planet has its unique characteristics, from the extreme temperatures of Mercury and Venus to the giant storms of Jupiter and Saturn. The study of these planets helps us understand the formation and evolution of our solar system and the possibility of life beyond Earth.</h2>

                </main>

                <section id="planets" className="my-24">

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {solarsystem.map((member, index) => (
                            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-64 object-cover object-center"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                                    <p className="text-indigo-400 mb-4">Type : {member.type}</p>
                                    <p className="text-gray-300 mb-4">{member.info}</p>
                                    <div className="flex justify-center space-x-4">

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <main className="text-center">
                    <h1 className="text-5xl font-bold mb-20 text-center animate-pulse text-blue-200">
                        Top 10 Near-Earth Asteroids
                    </h1>
                    <h2>Near-Earth Asteroids (NEAs) are celestial bodies that orbit the Sun and pass within a certain distance of Earth. These objects can pose a potential threat to our planet, and their study is crucial for understanding and mitigating potential risks</h2>

                </main>

                <section id="planets" className="my-24">

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                        {asetroidlist.map((member, index) => (
                            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                                    <p className="text-indigo-400 mb-4">Type : {member.type}</p>
                                    <p className="text-gray-300 mb-4">Size : {member.size}</p>
                                    <p className="text-gray-300 mb-4">{member.info}</p>
                                    <div className="flex justify-center space-x-4">

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <main className="text-center">
                    <h1 className="text-5xl font-bold mb-20 text-center animate-pulse text-blue-400">
                        Top 10 Near-Earth Comets
                    </h1>
                    <h2>Near-Earth Comets (NECs) are comets that pass within 1.3 astronomical units (AU) of Earth's orbit. These celestial bodies are composed of ice, dust, and gas, and they often have long tails when they approach the Sun.</h2>


                </main>

                <section id="planets" className="my-24">

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                        {asetroidlist.map((member, index) => (
                            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                                    <p className="text-indigo-400 mb-4">{member.info}</p>
                                    <div className="flex justify-center space-x-4">

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>


            </div>

            {/* Floating space objects */}
            <div className="absolute top-1 left-1/4 w-16 h-16 bg-purple-500 rounded-full opacity-50 animate-float" />
            <div className="absolute bottom-1/4 right-1 w-24 h-24 bg-blue-500 rounded-full opacity-30 animate-float animation-delay-1000" />
            <div className="absolute top-3/4 right-100 w-12 h-12 bg-red-500 rounded-full opacity-40 animate-float animation-delay-2000" />

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