'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const [email, setEmail] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // 确保视频加载完成后再显示
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('loadeddata', () => {
        setIsVideoLoaded(true);
      });
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('loadeddata', () => {
          setIsVideoLoaded(true);
        });
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Submitted email:', email);
    // Add actual form handling logic here
    setEmail('');
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* 背景视频 */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-20">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute min-w-full min-h-full object-cover w-auto h-auto ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-1000`}
        >
          <source src="/videos/tennis-background.mp4" type="video/mp4" />
          {/* 可以添加其他格式的视频源以提高兼容性 */}
          {/* <source src="/videos/tennis-background.webm" type="video/webm" /> */}
          您的浏览器不支持视频标签。
        </video>
      </div>
      
      {/* 视频覆盖层，增加对比度使内容更易读 */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-black/70 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-grid-pattern opacity-5 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn text-white">
            <span className="gradient-text">AI-Powered Tennis Analysis</span>
            <br />
            Elevate Your Game
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            Active Vision helps tennis players and coaches unlock insights
            <br className="hidden md:block" />
            with real-time analysis and personalized feedback.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary">
              Free Trial
            </button>
          </form>
          
          <p className="text-sm text-gray-300 mt-4 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            14-day free trial, no credit card required
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero; 