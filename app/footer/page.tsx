'use client'

import React from "react"

export default function Footer() {
    return (
        <>

            <footer className="footer footer-center bg-gray-800 text-white p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className="text-1xl font-bold mb-8 text-center animate-pulse text-blue-400">CosmicLookout</span></p>
                </aside>
            </footer>
        </>
    );
}

