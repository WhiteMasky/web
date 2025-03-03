'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Hero = () => {
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
          
          <div className="flex justify-center animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <a 
              href="/downloads/active-vision.apk"
              className="btn btn-primary inline-flex items-center justify-center px-6 py-3 text-lg"
              download
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 mr-2 inline-block" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.0775-9.4396"/>
              </svg>
              <span>Download for Android</span>
            </a>
          </div>
          
          <p className="text-sm text-gray-300 mt-4 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            Available for Android devices running version 8.0 and above
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero; 