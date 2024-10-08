export function Hero() {
    return (
        <div
            id="hero"
            className="hero-section h-screen bg-fixed bg-center bg-cover"
            style={{
                backgroundImage: "url('./public/hero-section2.webp')",
            }}
        >
            <div className="bg-black bg-opacity-50 p-10 flex flex-col justify-center items-center h-screen rounded-md text-center">
                <h1 className="text-5xl md:text-7xl font-bold">Welcome to My Portfolio</h1>
                <p className="my-4 text-xl md:text-2xl">Senior Full Stack Developer</p>
                <div className="flex space-x-4 mb-6 md:mb-0">
                    <a href="https://github.com/Shaked-Aharon" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.2c-3.34.73-4.04-1.63-4.04-1.63-.55-1.41-1.34-1.78-1.34-1.78-1.09-.75.08-.74.08-.74 1.21.08 1.84 1.25 1.84 1.25 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.48-1.33-5.48-5.9 0-1.3.47-2.36 1.25-3.2-.13-.31-.54-1.54.12-3.2 0 0 1.02-.33 3.34 1.26.97-.27 2.02-.4 3.06-.4 1.04 0 2.09.14 3.06.4 2.31-1.6 3.34-1.26 3.34-1.26.66 1.66.25 2.89.12 3.2.78.84 1.25 1.9 1.25 3.2 0 4.58-2.81 5.59-5.48 5.89.43.37.82 1.09.82 2.21v3.28c0 .32.22.7.83.58A12.015 12.015 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/shaked-aharon/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zm-11 19H5v-9h3v9zm-1.5-10.5C4.67 8.5 4 7.83 4 7s.67-1.5 1.5-1.5S7 6.17 7 7s-.67 1.5-1.5 1.5zM20 19h-3v-4.5c0-1.12-.9-2-2-2s-2 .88-2 2V19h-3v-9h3v1.16c.79-.59 1.82-.96 2.94-.96 2.21 0 4.06 1.72 4.06 4v4.8z" />
                        </svg>
                    </a>
                    {/* Add more social media links as needed */}
                </div>
            </div>
        </div>
    )
}