'use client';

import { useState } from 'react';

interface VideoProps {
  bilibili?: string; // B站视频ID
  youtube?: string; // YouTube视频ID
  mp4?: string; // 直接MP4链接
}

const HowItWorks = () => {
  const [videoType, setVideoType] = useState<'bilibili' | 'youtube' | 'mp4'>('bilibili');
  
  // 示例视频ID
  const videos: VideoProps = {
    bilibili: 'BV1VMNNerEby', // B站视频ID示例
    youtube: 'aY2wUt3JSgw', // YouTube视频ID示例
    mp4: '/videos/tennis-demo.mp4' // 本地视频示例
  };

  // 根据选择的视频类型渲染不同的视频播放器
  const renderVideo = () => {
    switch (videoType) {
      case 'bilibili':
        return (
          <iframe 
            src={`//player.bilibili.com/player.html?bvid=${videos.bilibili}&page=1&high_quality=1&danmaku=0`}
            className="w-full h-full absolute top-0 left-0"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        );
      case 'youtube':
        return (
          <iframe 
            src={`https://www.youtube.com/embed/${videos.youtube}`}
            className="w-full h-full absolute top-0 left-0"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        );
      case 'mp4':
        return (
          <video 
            src={videos.mp4} 
            controls 
            className="w-full h-full absolute top-0 left-0 object-cover"
          ></video>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">How It Works</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Active Vision's AI processes your video in real-time to bring you the pro experience
            <br />— no internet required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* 左侧：视频播放区域 */}
          <div className="relative aspect-[16/9] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
            <div className="absolute inset-0">
              {renderVideo()}
            </div>
          </div>

          {/* 右侧：功能展示区域 */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-xl">
            <div className="flex items-center justify-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">Tennis</h3>
            
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Real-time stroke analysis with AI technology</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Detailed performance metrics and improvement suggestions</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Works offline - no internet connection required</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Share your progress with coaches and friends</span>
              </li>
            </ul>

            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <button 
                  onClick={() => setVideoType('bilibili')}
                  className={`px-4 py-2 text-sm font-medium rounded-l-md ${videoType === 'bilibili' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                >
                  Bilibili
                </button>
                <button 
                  onClick={() => setVideoType('youtube')}
                  className={`px-4 py-2 text-sm font-medium ${videoType === 'youtube' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                >
                  YouTube
                </button>
                <button 
                  onClick={() => setVideoType('mp4')}
                  className={`px-4 py-2 text-sm font-medium rounded-r-md ${videoType === 'mp4' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                >
                  Local Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 