'use client';

import { useState } from 'react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-2xl font-bold text-gray-900">
            Hydraulic Parking System Demo
          </h3>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
          >
            <i className="ri-close-line text-gray-600 text-xl"></i>
          </button>
        </div>
        
        <div className="p-6">
          <div className="aspect-video bg-gray-900 rounded-lg mb-6 relative overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Hydraulic Parking System Demo"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                What You'll See:
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Complete parking and retrieval process</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Hydraulic lifting mechanisms in action</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Safety features and automated controls</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Space optimization benefits</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                System Benefits:
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Up to 200% space efficiency increase</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Under 2 minutes retrieval time</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Fully automated operation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Enhanced vehicle security</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
              Request Quote
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}