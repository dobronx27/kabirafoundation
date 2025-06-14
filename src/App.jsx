


import React, { useState } from 'react';
import { Upload, FileText, Video, Menu, X, ArrowRight, BookOpen, Users, Trophy, Globe } from 'lucide-react';

const KabiraFoundation = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const FlipCard = ({ type, icon: Icon, title, isActive, onClick, position }) => (
    <div 
      className={`fixed z-50 cursor-pointer group ${
        position === 'left' ? 'left-6' : 'right-6'
      } top-1/2 transform -translate-y-1/2 floating-animation`}
      onClick={onClick}
    >
      <div className={`relative transition-all duration-700 ease-out ${
        isActive ? 'w-80 h-16' : 'w-16 h-16 hover:w-64'
      }`}>
        <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden">
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-amber-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          {/* Content Container */}
          <div className="relative z-10 h-full flex items-center px-4">
            {/* Icon Container */}
            <div className="flex-shrink-0 relative">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                <Icon className="w-4 h-4 text-white transition-all duration-300 icon-spin" />
              </div>
              {/* Pulse Ring */}
              <div className="absolute inset-0 rounded-lg border border-orange-400/0 group-hover:border-orange-400/60 transition-all duration-500 animate-pulse-ring"></div>
            </div>
            
            {/* Expandable Content */}
            <div className={`ml-3 transition-all duration-700 overflow-hidden ${
              isActive ? 'opacity-100 w-auto' : 'opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto'
            }`}>
              <div className="whitespace-nowrap">
                <h3 className="text-slate-100 font-semibold text-sm tracking-wide">
                  Upload {type === 'pdf' ? 'Document' : 'Video'}
                </h3>
                <p className="text-slate-400 text-xs font-medium">
                  {type === 'pdf' ? 'Share PDFs & Files' : 'Share Video Content'}
                </p>
              </div>
            </div>
            
            {/* Active Indicator */}
            {isActive && (
              <div className="ml-auto flex-shrink-0">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              </div>
            )}
          </div>
          
          {/* Interactive Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
        </div>
        
        {/* Tooltip */}
        <div className={`absolute ${position === 'left' ? 'left-full ml-4' : 'right-full mr-4'} top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
          'group-hover:opacity-100 group-hover:translate-x-0 opacity-0 ' + (position === 'left' ? '-translate-x-2' : 'translate-x-2')
        }`}>
          <div className="bg-slate-800/95 backdrop-blur-sm px-3 py-2 rounded-lg border border-slate-600/50 shadow-xl">
            <div className="text-slate-200 text-xs font-medium whitespace-nowrap">
              Click to {isActive ? 'close' : 'upload'} {type}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const UploadModal = ({ isOpen, onClose, type }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-60 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6">
        <div 
          className={`bg-slate-900/95 backdrop-blur-lg rounded-3xl shadow-2xl max-w-lg w-full transform transition-all duration-300 border border-slate-700/50 ${
            isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                {type === 'pdf' ? <FileText className="w-6 h-6 mr-3 text-orange-500" /> : <Video className="w-6 h-6 mr-3 text-orange-500" />}
                <h3 className="text-2xl font-bold text-slate-100 tracking-tight">Upload {type === 'pdf' ? 'PDF' : 'Video'}</h3>
              </div>
              <button onClick={onClose} className="text-slate-400 hover:text-slate-200 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="border-2 border-dashed border-slate-600 rounded-2xl p-12 text-center hover:border-orange-500/50 transition-colors bg-gradient-to-br from-slate-800/50 to-slate-700/50">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                <Upload className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-100">Drop your {type === 'pdf' ? 'PDF' : 'video'} here</h4>
              <p className="text-slate-400 mb-6">or click to browse from your device</p>
              <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Choose File
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Kabira Foundation
            </h1>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Courses', 'Faculty', 'Contact'].map((item) => (
                <a key={item} href="#" className="text-slate-300 hover:text-white font-medium transition-colors relative group tracking-wide">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden text-white p-2 hover:bg-slate-800 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
          <div className="fixed top-0 right-0 h-full w-64 bg-slate-900 border-l border-slate-800 p-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-white font-bold text-lg">Menu</h2>
              <button onClick={() => setIsMenuOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="space-y-4">
              {['Home', 'About', 'Courses', 'Faculty', 'Contact'].map((item) => (
                <a key={item} href="#" className="block text-slate-300 hover:text-orange-400 font-medium py-2">
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-600/5"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            Empowering
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Education
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Transform your future through innovative learning experiences designed for the modern professional
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
              Begin Your Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-slate-200 font-semibold rounded-xl border border-slate-700 hover:bg-slate-700/50 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Why Choose Kabira Foundation</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Experience education that adapts to your needs and accelerates your success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: BookOpen, 
                title: "Expert Learning", 
                desc: "World-class curriculum designed by industry leaders and academic experts",
                color: "from-blue-500 to-blue-600"
              },
              { 
                icon: Users, 
                title: "Flexible Study", 
                desc: "Learn at your own pace with personalized guidance and 24/7 support",
                color: "from-emerald-500 to-emerald-600"
              },
              { 
                icon: Trophy, 
                title: "Global Recognition", 
                desc: "Internationally recognized certifications valued by employers worldwide",
                color: "from-purple-500 to-purple-600"
              }
            ].map((item, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group hover:bg-slate-800/70">
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{item.title}</h3>
                <p className="text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700/50">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Impact in Numbers</h2>
              <p className="text-slate-400">Join a community of achievers making a difference worldwide</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "15K+", label: "Active Students", icon: Users },
                { number: "800+", label: "Courses Available", icon: BookOpen },
                { number: "95%", label: "Success Rate", icon: Trophy },
                { number: "50+", label: "Countries Reached", icon: Globe }
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-slate-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-slate-300 mb-12 font-medium">
            Join thousands of learners who are already advancing their careers with us
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-orange-500/50 transition-colors">
              <div className="text-slate-200 font-semibold mb-2">Email Us</div>
              <div className="text-orange-400 font-medium">info@kabirafoundation.edu</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-orange-500/50 transition-colors">
              <div className="text-slate-200 font-semibold mb-2">Call Us</div>
              <div className="text-orange-400 font-medium">+1 (555) 123-4567</div>
            </div>
          </div>
          <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 mb-4 md:mb-0">
              © 2025 Kabira Foundation. Empowering minds, building futures.
            </div>
            <div className="flex space-x-6 text-slate-400">
              <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Upload Cards */}
      <FlipCard
        type="pdf"
        icon={FileText}
        title="PDF"
        isActive={activeTab === 'pdf'}
        onClick={() => setActiveTab(activeTab === 'pdf' ? null : 'pdf')}
        position="left"
      />
      
      <FlipCard
        type="video"
        icon={Video}
        title="Video"
        isActive={activeTab === 'video'}
        onClick={() => setActiveTab(activeTab === 'video' ? null : 'video')}
        position="right"
      />

      {/* Upload Modals */}
      <UploadModal
        isOpen={activeTab === 'pdf'}
        onClose={() => setActiveTab(null)}
        type="pdf"
      />
      
      <UploadModal
        isOpen={activeTab === 'video'}
        onClose={() => setActiveTab(null)}
        type="video"
      />

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .floating-animation {
          animation: floatSideways 6s ease-in-out infinite;
        }
        
        @keyframes floatSideways {
          0%, 100% {
            transform: translateY(-50%) translateX(0px);
          }
          50% {
            transform: translateY(-50%) translateX(6px);
          }
        }
        
        .icon-spin {
          transition: transform 0.6s ease-in-out;
        }
        
        .group:hover .icon-spin {
          transform: rotate(360deg);
        }
        
        .animate-pulse-ring {
          animation: pulseRing 3s ease-in-out infinite;
        }
        
        @keyframes pulseRing {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.4;
          }
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #0f172a;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #475569;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #64748b;
        }
      `}</style>
    </div>
  );
};

export default KabiraFoundation;
