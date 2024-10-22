import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Section5() {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".slide"); // Select all slides

    // GSAP animation for horizontal scrolling
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1), // Move each slide horizontally
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true, // Pin the container during scroll
        scrub: 1, // Smooth scrubbing
        snap: 1 / (sections.length - 1), // Snap to sections
        end: () => "+=" + containerRef.current.offsetWidth, // End based on container width
      },
    });

    // Cleanup function to kill all ScrollTrigger instances on unmount
    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <div ref={containerRef} className="flex overflow-hidden h-screen w-screen">
      <div className="slide h-screen w-screen flex-shrink-0">
        <div
          className="relative h-screen w-full"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1565803974275-dccd2f933cbb?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="h-full flex items-center justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 lg:max-w-6xl max-w-xl mx-auto font-sans">
              <div className="card bg-purple-100 bg-opacity-[0.8] rounded-lg p-8">
                <h3 className="text-lg font-bold text-green-800 mb-4">
                  Discover Eco-Friendly Activities
                </h3>
                <p className="text-sm text-gray-600">
                  Explore a variety of sustainable initiatives that contribute
                  to a healthier planet. Find activities that match your
                  interests and location, making it easy to get involved.
                </p>
                <ul className="text-gray-600 list-disc mt-4 space-y-2 pl-4">
                  <li className="text-sm">Diverse categories to choose from</li>
                  <li className="text-sm">Local initiatives and events</li>
                  <li className="text-sm">
                    User-friendly search and filter options
                  </li>
                </ul>
                <a
                  href="javascript:void(0);"
                  className="inline-block px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-lg mt-6"
                >
                  Start Exploring
                </a>
              </div>
              <div className="card bg-purple-100 bg-opacity-[0.8] rounded-lg p-8">
                <h3 className="text-lg font-bold text-green-800 mb-4">
                  Track Your Impact
                </h3>
                <p className="text-sm text-gray-600">
                  Monitor your contributions and visualize your sustainability
                  journey. Stay motivated by seeing how your actions contribute
                  to a greener world.
                </p>
                <ul className="text-gray-600 list-disc mt-4 space-y-2 pl-4">
                  <li className="text-sm">Real-time progress tracking</li>
                  <li className="text-sm">Interactive charts and graphs</li>
                  <li className="text-sm">Celebrate your milestones</li>
                </ul>
                <a
                  href="javascript:void(0);"
                  className="inline-block px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-lg mt-6"
                >
                  View My Progress
                </a>
              </div>
              <div className="card bg-purple-100 bg-opacity-[0.8] rounded-lg p-8">
                <h3 className="text-lg font-bold text-green-800 mb-4">
                  Join Our Community
                </h3>
                <p className="text-sm text-gray-600">
                  Become part of a vibrant community dedicated to environmental
                  sustainability. Share your journey, connect with like-minded
                  individuals, and participate in events.
                </p>
                <ul className="text-gray-600 list-disc mt-4 space-y-2 pl-4">
                  <li className="text-sm">Engage with fellow eco-warriors</li>
                  <li className="text-sm">Receive updates on local events</li>
                  <li className="text-sm">
                    Collaborate on sustainability projects
                  </li>
                </ul>
                <a
                  href="javascript:void(0);"
                  className="inline-block px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white text-sm font-semibold rounded-lg mt-6"
                >
                  Join Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="slide h-screen w-screen flex-shrink-0">
        <div
          className="relative h-screen w-full"
          style={{
            backgroundImage:
              "url(https://plus.unsplash.com/premium_photo-1683140538884-07fb31428ca6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D )",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="h-full flex items-center justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 lg:max-w-6xl max-w-xl mx-auto font-sans">
              <div className="card bg-purple-100 bg-opacity-[0.8] rounded-lg p-8">
                <h3 className="text-lg font-bold text-green-800 mb-4">
                  Discover Eco-Friendly Activities
                </h3>
                <p className="text-sm text-gray-600">
                  Explore a variety of sustainable initiatives that contribute
                  to a healthier planet. Find activities that match your
                  interests and location, making it easy to get involved.
                </p>
                <ul className="text-gray-600 list-disc mt-4 space-y-2 pl-4">
                  <li className="text-sm">Diverse categories to choose from</li>
                  <li className="text-sm">Local initiatives and events</li>
                  <li className="text-sm">
                    User-friendly search and filter options
                  </li>
                </ul>
                <a
                  href="javascript:void(0);"
                  className="inline-block px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-lg mt-6"
                >
                  Start Exploring
                </a>
              </div>
              <div className="card bg-purple-100 bg-opacity-[0.8] rounded-lg p-8">
                <h3 className="text-lg font-bold text-green-800 mb-4">
                  Track Your Impact
                </h3>
                <p className="text-sm text-gray-600">
                  Monitor your contributions and visualize your sustainability
                  journey. Stay motivated by seeing how your actions contribute
                  to a greener world.
                </p>
                <ul className="text-gray-600 list-disc mt-4 space-y-2 pl-4">
                  <li className="text-sm">Real-time progress tracking</li>
                  <li className="text-sm">Interactive charts and graphs</li>
                  <li className="text-sm">Celebrate your milestones</li>
                </ul>
                <a
                  href="javascript:void(0);"
                  className="inline-block px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-lg mt-6"
                >
                  View My Progress
                </a>
              </div>
              <div className="card bg-purple-100 bg-opacity-[0.8] rounded-lg p-8">
                <h3 className="text-lg font-bold text-green-800 mb-4">
                  Join Our Community
                </h3>
                <p className="text-sm text-gray-600">
                  Become part of a vibrant community dedicated to environmental
                  sustainability. Share your journey, connect with like-minded
                  individuals, and participate in events.
                </p>
                <ul className="text-gray-600 list-disc mt-4 space-y-2 pl-4">
                  <li className="text-sm">Engage with fellow eco-warriors</li>
                  <li className="text-sm">Receive updates on local events</li>
                  <li className="text-sm">
                    Collaborate on sustainability projects
                  </li>
                </ul>
                <a
                  href="javascript:void(0);"
                  className="inline-block px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white text-sm font-semibold rounded-lg mt-6"
                >
                  Join Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slide flex justify-center items-center h-screen w-screen flex-shrink-0">
        <div
          className="relative h-screen w-full"
          style={{
            backgroundImage:
              "url(https://plus.unsplash.com/premium_photo-1722054521002-57f97595d54e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="h-full flex items-center justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 lg:max-w-6xl max-w-xl mx-auto font-sans">
              <div className="card bg-purple-100 bg-opacity-[0.8] rounded-lg p-8">
                <h3 className="text-lg font-bold text-green-800 mb-4">
                  Discover Eco-Friendly Activities
                </h3>
                <p className="text-sm text-gray-600">
                  Explore a variety of sustainable initiatives that contribute
                  to a healthier planet. Find activities that match your
                  interests and location, making it easy to get involved.
                </p>
                <ul className="text-gray-600 list-disc mt-4 space-y-2 pl-4">
                  <li className="text-sm">Diverse categories to choose from</li>
                  <li className="text-sm">Local initiatives and events</li>
                  <li className="text-sm">
                    User-friendly search and filter options
                  </li>
                </ul>
                <a
                  href="javascript:void(0);"
                  className="inline-block px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-lg mt-6"
                >
                  Start Exploring
                </a>
              </div>
              <div className="card bg-purple-100 bg-opacity-[0.8] rounded-lg p-8">
                <h3 className="text-lg font-bold text-green-800 mb-4">
                  Track Your Impact
                </h3>
                <p className="text-sm text-gray-600">
                  Monitor your contributions and visualize your sustainability
                  journey. Stay motivated by seeing how your actions contribute
                  to a greener world.
                </p>
                <ul className="text-gray-600 list-disc mt-4 space-y-2 pl-4">
                  <li className="text-sm">Real-time progress tracking</li>
                  <li className="text-sm">Interactive charts and graphs</li>
                  <li className="text-sm">Celebrate your milestones</li>
                </ul>
                <a
                  href="javascript:void(0);"
                  className="inline-block px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-lg mt-6"
                >
                  View My Progress
                </a>
              </div>
              <div className="card bg-purple-100 bg-opacity-[0.8] rounded-lg p-8">
                <h3 className="text-lg font-bold text-green-800 mb-4">
                  Join Our Community
                </h3>
                <p className="text-sm text-gray-600">
                  Become part of a vibrant community dedicated to environmental
                  sustainability. Share your journey, connect with like-minded
                  individuals, and participate in events.
                </p>
                <ul className="text-gray-600 list-disc mt-4 space-y-2 pl-4">
                  <li className="text-sm">Engage with fellow eco-warriors</li>
                  <li className="text-sm">Receive updates on local events</li>
                  <li className="text-sm">
                    Collaborate on sustainability projects
                  </li>
                </ul>
                <a
                  href="javascript:void(0);"
                  className="inline-block px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white text-sm font-semibold rounded-lg mt-6"
                >
                  Join Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;
