import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

function App() {
  const [showFlowers, setShowFlowers] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showMessage1, setShowMessage1] = useState(false);
  const [showMessage2, setShowMessage2] = useState(false);
  const [showMessage3, setShowMessage3] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);

  useEffect(() => {
    // Show flowers covering entire screen first
    setTimeout(() => setShowFlowers(true), 300);
    
    // Then show content container from middle
    setTimeout(() => setShowContent(true), 2000);
    
    // Sequential message display
    setTimeout(() => setShowMessage1(true), 3000);
    setTimeout(() => setShowMessage2(true), 5000);
    setTimeout(() => setShowMessage3(true), 7000);
    setTimeout(() => setShowPhoto(true), 9000);
  }, []);

  // Create more flowers to cover entire screen
  const flowers = Array.from({ length: 120 }, (_, i) => ({
    id: i,
    emoji: i % 3 === 0 ? '🌻' : i % 3 === 1 ? '🌹' : '🌼',
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 1500,
    size: 30 + Math.random() * 50,
    rotation: Math.random() * 360,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-50 to-pink-100 relative overflow-hidden">
      {/* Full Screen Flowers */}
      {flowers.map((flower) => (
        <div
          key={flower.id}
          className={`absolute transition-all duration-2000 ease-out z-10 ${
            showFlowers ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          } ${
            showContent ? 'opacity-30 scale-75' : ''
          }`}
          style={{
            left: `${flower.left}%`,
            top: `${flower.top}%`,
            fontSize: `${flower.size}px`,
            transitionDelay: `${flower.delay}ms`,
            transform: `rotate(${flower.rotation}deg) ${showFlowers ? 'scale(1)' : 'scale(0)'}`,
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
          }}
        >
          {flower.emoji}
        </div>
      ))}

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-200 rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>

      {/* Main Content - Appears from Middle */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4">
        <div
          className={`transition-all duration-1500 transform ${
            showContent 
              ? 'opacity-100 scale-100 translate-y-0' 
              : 'opacity-0 scale-50 translate-y-10'
          } bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl max-w-2xl mx-auto border border-white/50`}
        >
          <div className="mb-8">
            <Heart className="w-16 h-16 text-red-500 mx-auto animate-pulse" fill="currentColor" />
          </div>

          {/* Message 1 */}
          <div
            className={`transition-all duration-1000 transform ${
              showMessage1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 font-serif text-center">
              <span className="text-yellow-600 drop-shadow-sm">Nana bangaram</span>{' '}
              <span className="text-red-500">sorry</span>{' '}
              <span className="text-blue-600 drop-shadow-sm">cool down</span> 💛
            </h1>
          </div>

          {/* Message 2 */}
          <div
            className={`transition-all duration-1000 transform ${
              showMessage2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed text-center">
              <span className="text-pink-600 font-semibold">Kopam lo kuda bagunav</span>{' '}
              <span className="text-gray-600">but</span>{' '}
              <span className="text-green-600 font-semibold">navuthe inka bagunthav</span> 😊
            </p>
          </div>

          {/* Message 3 */}
          <div
            className={`transition-all duration-1000 transform ${
              showMessage3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-lg md:text-xl text-gray-600 mb-8 italic text-center">
              <span className="text-purple-600 font-medium">Kavalante nuve chusuko</span> 💕
            </p>
          </div>

          {/* Photo Section */}
          <div
            className={`transition-all duration-1000 transform ${
              showPhoto ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-gradient-to-r from-yellow-200 to-pink-200 rounded-2xl p-6 border-4 border-white shadow-inner">
              <div className="w-full rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/src/assets/bangaram.jpg" 
                  alt="Special photo for Aishu" 
                  className="w-full h-auto object-cover rounded-xl border-4 border-white shadow-md"
                  style={{ maxHeight: '400px' }}
                />
              </div>
              <p className="text-center text-pink-600 font-medium mt-4 text-lg">💕 For my beautiful Aishu 💕</p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center space-x-4 mt-8">
            <span className="text-2xl animate-bounce">💛</span>
            <span className="text-2xl animate-bounce delay-100">🌻</span>
            <span className="text-2xl animate-bounce delay-200">🌹</span>
            <span className="text-2xl animate-bounce delay-300">💛</span>
          </div>
        </div>
      </div>

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${5 + i * 12}%`,
              top: `${15 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.7}s`,
              fontSize: '20px',
            }}
          >
            💛
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default App;