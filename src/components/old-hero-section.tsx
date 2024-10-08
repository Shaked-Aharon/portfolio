export function OldHeroSection(){
    return (
        <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
            <div className="absolute w-full h-full bg-opacity-50 flex items-center justify-center">
              {/* Central Tower */}
              <div className="bg-blue-600 p-4 rounded-lg shadow-lg transform scale-125 animate-pulse">
                <div className="h-64 w-16 bg-gradient-to-t from-blue-800 to-blue-400 animate-pulse"></div>
              </div>

              {/* Floating Code Screens */}
              <div className="absolute flex space-x-8 mt-20">
                <div className="w-48 h-32 bg-gray-800 rounded shadow-lg animate-fade-in transform translate-y-6">
                  <div className="p-4 text-xs text-green-400">
                    <pre>{`<div>Code snippet 1...</div>`}</pre>
                  </div>
                </div>
                <div className="w-48 h-32 bg-gray-800 rounded shadow-lg animate-fade-in transform -translate-y-6">
                  <div className="p-4 text-xs text-green-400">
                    <pre>{`<div>Code snippet 2...</div>`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Senior Full Stack Developer</h1>
          <p className="text-lg md:text-2xl mb-8">Creating futuristic tech solutions with modern tools</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Contact Me
          </button>
        </div>
      </div>
    )
}