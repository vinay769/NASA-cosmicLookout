

'use client';

import { useState, useEffect } from 'react';

interface NasaApiResponse {
  near_earth_objects: {
    [date: string]: {
      id: string;
      absolute_magnitude_h: string;

      estimated_diameter: {
        kilometers: {
          estimated_diameter_min: string;
          estimated_diameter_max: string;
        }
      }
      name: string;
    }[];
  };
}




const apiUrl = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=5canjlfbQBWS4roNJ9hvMLEB5c8QTIomDmKbqp5f';

const Page = () => {
  const [data, setData] = useState<NasaApiResponse | null>(null);

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(apiUrl);
      const data: NasaApiResponse = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (

    <>
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
          <h1 className="text-5xl font-bold mb-8 text-center text-blue-400">
            Dive deep in Nasa Open Asteroids - NeoWs <span className="text-5xl font-bold mb-8 text-center animate-pulse text-blue-400">API</span>
          </h1>
          <p>NeoWs (Near Earth Object Web Service) is a RESTful web service for near earth Asteroid information. With NeoWs a user can: search for Asteroids based on their closest approach date to Earth, lookup a specific Asteroid with its NASA JPL small body id, as well as browse the overall data-set.</p>
          <section >


            {data && (
              <ol>
                <div className="bg-gray-800 p-10 mt-20 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-100">
                  {data.near_earth_objects['2015-09-07'].map(item => (

                    <li key={item.id}> <h3 className="text-xl font-semibold mb-2"> 🪨☄️ Asteroid Name : {item.name}</h3> <p className="text-indigo-400 mb-4">Absolute Magnitude : {item.absolute_magnitude_h}</p> <p className="text-gray-300 mb-4">Estimeted Kilometers Max : {item.estimated_diameter.kilometers.estimated_diameter_max} </p><p className="text-gray-300 mb-4">Estimeted Kilometers Min : {item.estimated_diameter.kilometers.estimated_diameter_min} </p> </li>

                  ))}
                </div>
              </ol>
            )}






          </section>



        </div>



        <style jsx>{`
      @keyframes twinkle {
        0%, 100% { opacity: 0; }
        50% { opacity: 1; }
      }`}</style>
      </div>
    </>);
};

export default Page;


























// // import { useLoader } from '@react-three/fiber';
// // import { useRef } from 'react';
// // import { Mesh, TextureLoader } from 'three';

// // const Earth = () => {
// //   const earth = useRef<Mesh>(null!);
// //   const earthTexture = useLoader(TextureLoader, './gltf_embedded_2.jpeg');
// //   const Amsterdam = {
// //     city: 'Amsterdam',
// //     lat: 52.377956,
// //     lng: 4.89707,
// //   };

// //   const Rome = {
// //     city: 'Rome',
// //     lat: 41.9028,
// //     lng: 12.4964,
// //   };

// //   const Ottawa = {
// //     city: 'Ottawa',
// //     lat: 45.4215,
// //     lng: -75.6972,
// //   };

// //   const Sydney = {
// //     city: 'Sydney',
// //     lat: -33.8688,
// //     lng: 151.2093,
// //   };

// //   return (
// //     <mesh
// //       ref={earth}
// //       rotation={[0, -Math.PI / 2, 0]}
// //     // onDoubleClick={(e) => {
// //     //   drawMarker(Rome);
// //     //   drawMarker(Ottawa);
// //     //   drawMarker(Amsterdam);
// //     //   drawMarker(Sydney);
// //     // }}
// //     >
// //       <sphereGeometry args={[3, 32, 32]}></sphereGeometry>
// //       <meshPhongMaterial map={earthTexture}></meshPhongMaterial>
// //     </mesh>
// //   );
// // };

// // export default Earth;