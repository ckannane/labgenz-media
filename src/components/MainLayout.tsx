'use client';

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import CreateVideo from './CreateVideo';
import { User, Video, BarChart3, Calendar, Star, HelpCircle, Mail, Zap } from 'lucide-react';

const MainLayout: React.FC = () => {
  const [activeItem, setActiveItem] = useState('create');
  const [activeStep, setActiveStep] = useState(1);

  const handleItemClick = (item: string) => {
    setActiveItem(item);
    if (item === 'create') {
      setActiveStep(1);
    }
  };

  const renderContent = () => {
    switch (activeItem) {
      case 'create':
      case 'ai-slideshow':
      case 'ai-hook-demo':
      case 'greenscreen-memes':
        return <CreateVideo activeStep={activeStep} onStepChange={setActiveStep} videoType={activeItem} />;
      
      case 'profile':
        return <ProfilePage />;
      
      case 'videos':
      case 'my-videos':
        return <VideosPage />;
      
      case 'schedule':
        return <SchedulePage />;
      
      case 'automations':
        return <AutomationsPage />;
      
      case 'explore':
        return <ExplorePage />;
      
      case 'affiliate':
        return <AffiliatePage />;
      
      case 'faq':
        return <FAQPage />;
      
      case 'contact':
        return <ContactPage />;
      
      default:
        return <CreateVideo activeStep={activeStep} onStepChange={setActiveStep} videoType={activeItem} />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Sidebar activeItem={activeItem} onItemClick={handleItemClick} />
      <main className="ml-64 hero-bg">
        <div className="min-h-screen p-4">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

// Placeholder components for other pages
const ProfilePage = () => (
  <div className="max-w-4xl mx-auto p-6">
    <div className="glass-effect rounded-xl p-8 border border-dark-accent/50">
      <div className="flex items-center gap-6 mb-8">
        <div className="w-24 h-24 bg-gradient-to-r from-neon-green to-neon-cyan rounded-xl flex items-center justify-center shadow-lg">
          <User className="text-dark-primary" size={36} />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white">John Doe</h1>
          <p className="text-gray-300 mb-2">Content Creator</p>
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 bg-neon-green/20 text-neon-green rounded-full text-sm">Pro Member</span>
            <span className="text-gray-400 text-sm">Joined March 2024</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-effect rounded-xl p-6 border border-dark-accent/50">
          <h3 className="text-xl font-semibold text-white mb-4">Account Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
              <input className="w-full bg-dark-surface border border-gray-500 rounded-lg p-3 text-white focus:border-neon-green focus:outline-none" defaultValue="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <input className="w-full bg-dark-surface border border-gray-500 rounded-lg p-3 text-white focus:border-neon-green focus:outline-none" defaultValue="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Username</label>
              <input className="w-full bg-dark-surface border border-gray-500 rounded-lg p-3 text-white focus:border-neon-green focus:outline-none" defaultValue="johndoe_creator" />
            </div>
            <button className="w-full py-3 bg-gradient-to-r from-neon-green to-neon-cyan text-dark-primary font-medium rounded-lg hover:scale-105 transition-all duration-200">
              Update Profile
            </button>
          </div>
        </div>
        
        <div className="glass-effect rounded-xl p-6 border border-dark-accent/50">
          <h3 className="text-xl font-semibold text-white mb-4">Statistics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-dark-surface/50 rounded-lg">
              <div>
                <span className="text-gray-300">Videos Created</span>
                <div className="text-2xl font-bold text-neon-green">24</div>
              </div>
              <div className="w-12 h-12 bg-neon-green/20 rounded-lg flex items-center justify-center">
                <Video className="text-neon-green" size={20} />
              </div>
            </div>
            <div className="flex justify-between items-center p-4 bg-dark-surface/50 rounded-lg">
              <div>
                <span className="text-gray-300">Storage Used</span>
                <div className="text-2xl font-bold text-neon-cyan">2.4 GB</div>
              </div>
              <div className="w-12 h-12 bg-neon-cyan/20 rounded-lg flex items-center justify-center">
                <BarChart3 className="text-neon-cyan" size={20} />
              </div>
            </div>
            <div className="flex justify-between items-center p-4 bg-dark-surface/50 rounded-lg">
              <div>
                <span className="text-gray-300">Total Views</span>
                <div className="text-2xl font-bold text-neon-purple">156K</div>
              </div>
              <div className="w-12 h-12 bg-neon-purple/20 rounded-lg flex items-center justify-center">
                <Star className="text-neon-purple" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const VideosPage = () => (
  <div className="max-w-6xl mx-auto p-6">
    <div className="mb-8 glass-effect rounded-xl p-6 border border-dark-accent/50">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text mb-2">My Videos</h1>
          <p className="text-gray-300">Manage and organize your video library</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-neon-green/20 text-neon-green rounded-lg hover:bg-neon-green/30 transition-colors">
            Filter
          </button>
          <button className="px-4 py-2 bg-neon-purple/20 text-neon-purple rounded-lg hover:bg-neon-purple/30 transition-colors">
            Sort
          </button>
        </div>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { id: 1, title: "AI Story: Guardian Angel", type: "AI Slideshow", status: "Completed", views: "2.3K", duration: "3:45" },
        { id: 2, title: "Hook: Mysterious Object", type: "AI Hook + Demo", status: "Processing", views: "1.8K", duration: "2:30" },
        { id: 3, title: "Meme: Reaction Video", type: "Greenscreen Memes", status: "Completed", views: "5.2K", duration: "1:15" },
        { id: 4, title: "Educational: Science Facts", type: "AI Slideshow", status: "Completed", views: "3.1K", duration: "4:20" },
        { id: 5, title: "Horror: Haunted House", type: "AI Hook + Demo", status: "Draft", views: "0", duration: "0:00" },
        { id: 6, title: "Comedy: Daily Life", type: "Greenscreen Memes", status: "Completed", views: "8.7K", duration: "2:45" }
      ].map((video) => (
        <div key={video.id} className="glass-effect rounded-xl p-6 hover:border-neon-green/50 transition-all duration-300 border border-dark-accent/50 group">
          <div className="aspect-video bg-gradient-to-br from-neon-purple/20 to-neon-green/20 rounded-lg mb-4 flex items-center justify-center border border-neon-purple/30 relative overflow-hidden">
            <Video className="text-gray-300 group-hover:text-neon-green transition-colors" size={48} />
            <div className="absolute bottom-2 right-2 bg-dark-primary/80 text-white text-xs px-2 py-1 rounded">
              {video.duration}
            </div>
          </div>
          <h3 className="text-white font-semibold mb-2 group-hover:text-neon-green transition-colors">{video.title}</h3>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs bg-neon-purple/20 text-neon-purple px-2 py-1 rounded">{video.type}</span>
            <span className={`text-xs px-2 py-1 rounded ${
              video.status === 'Completed' ? 'bg-neon-green/20 text-neon-green' :
              video.status === 'Processing' ? 'bg-neon-cyan/20 text-neon-cyan' :
              'bg-gray-500/20 text-gray-400'
            }`}>
              {video.status}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">{video.views} views</span>
            <div className="flex gap-2">
              <button className="text-neon-cyan hover:text-neon-cyan/80 text-sm font-medium bg-neon-cyan/20 px-3 py-1 rounded hover:bg-neon-cyan/30 transition-colors">
                Edit
              </button>
              <button className="text-neon-green hover:text-neon-green/80 text-sm font-medium bg-neon-green/20 px-3 py-1 rounded hover:bg-neon-green/30 transition-colors">
                View
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SchedulePage = () => (
  <div className="max-w-6xl mx-auto p-6">
    <div className="mb-8 glass-effect rounded-xl p-6 border border-dark-accent/50">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-gradient-to-r from-neon-cyan to-neon-green rounded-xl flex items-center justify-center">
          <Calendar className="text-dark-primary" size={28} />
        </div>
        <div>
          <h1 className="text-3xl font-bold gradient-text">Schedule</h1>
          <p className="text-gray-300">Plan and schedule your video content</p>
        </div>
      </div>
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <div className="glass-effect rounded-xl p-6 border border-dark-accent/50">
          <h3 className="text-xl font-semibold text-white mb-4">Content Calendar</h3>
          <div className="grid grid-cols-7 gap-2 mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center text-gray-400 text-sm font-medium p-2">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 35 }, (_, i) => (
              <div key={i} className="aspect-square bg-dark-surface/50 rounded-lg border border-gray-600 hover:border-neon-green/50 transition-colors p-2 text-center text-sm text-gray-400">
                {i % 7 === 0 && i < 28 ? Math.floor(i / 7) + 1 : ''}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="glass-effect rounded-xl p-6 border border-dark-accent/50">
          <h3 className="text-xl font-semibold text-white mb-4">Upcoming Posts</h3>
          <div className="space-y-3">
            {[
              { title: "AI Story Video", platform: "YouTube", time: "2:00 PM", status: "scheduled" },
              { title: "Hook Video", platform: "TikTok", time: "6:00 PM", status: "draft" },
              { title: "Meme Video", platform: "Instagram", time: "8:00 PM", status: "scheduled" }
            ].map((post, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-dark-surface/50 rounded-lg">
                <div>
                  <div className="text-white font-medium">{post.title}</div>
                  <div className="text-gray-400 text-sm">{post.platform} • {post.time}</div>
                </div>
                <span className={`px-2 py-1 rounded text-xs ${
                  post.status === 'scheduled' ? 'bg-neon-green/20 text-neon-green' : 'bg-gray-500/20 text-gray-400'
                }`}>
                  {post.status}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="glass-effect rounded-xl p-6 border border-dark-accent/50">
          <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full p-3 bg-neon-green/20 text-neon-green rounded-lg hover:bg-neon-green/30 transition-colors">
              Schedule New Post
            </button>
            <button className="w-full p-3 bg-neon-purple/20 text-neon-purple rounded-lg hover:bg-neon-purple/30 transition-colors">
              View Analytics
            </button>
            <button className="w-full p-3 bg-neon-cyan/20 text-neon-cyan rounded-lg hover:bg-neon-cyan/30 transition-colors">
              Auto-Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AutomationsPage = () => (
  <div className="max-w-6xl mx-auto p-6">
    <div className="mb-8 glass-effect rounded-xl p-6 border border-dark-accent/50">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-xl flex items-center justify-center">
          <Zap className="text-dark-primary" size={28} />
        </div>
        <div>
          <h1 className="text-3xl font-bold gradient-text">Automations</h1>
          <p className="text-gray-300">Automate your video creation and publishing workflow</p>
        </div>
      </div>
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="glass-effect rounded-xl p-6 border border-dark-accent/50">
        <h3 className="text-xl font-semibold text-white mb-4">Active Automations</h3>
        <div className="space-y-4">
          {[
            { name: "Daily AI Stories", type: "Content Generation", status: "Active", lastRun: "2 hours ago" },
            { name: "Social Media Posting", type: "Publishing", status: "Active", lastRun: "1 day ago" },
            { name: "Video Optimization", type: "Processing", status: "Paused", lastRun: "3 days ago" }
          ].map((automation, i) => (
            <div key={i} className="p-4 bg-dark-surface/50 rounded-lg border border-gray-600">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-white font-medium">{automation.name}</h4>
                  <p className="text-gray-400 text-sm">{automation.type}</p>
                </div>
                <span className={`px-2 py-1 rounded text-xs ${
                  automation.status === 'Active' ? 'bg-neon-green/20 text-neon-green' : 'bg-gray-500/20 text-gray-400'
                }`}>
                  {automation.status}
                </span>
              </div>
              <div className="text-gray-400 text-xs">Last run: {automation.lastRun}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="glass-effect rounded-xl p-6 border border-dark-accent/50">
        <h3 className="text-xl font-semibold text-white mb-4">Create New Automation</h3>
        <div className="space-y-4">
          {[
            { name: "Auto-Generate Content", description: "Create videos from RSS feeds or topics", icon: "🤖" },
            { name: "Bulk Processing", description: "Process multiple videos simultaneously", icon: "⚡" },
            { name: "Smart Scheduling", description: "Optimal posting times based on analytics", icon: "📊" },
            { name: "Cross-Platform Publishing", description: "Publish to multiple platforms automatically", icon: "🌐" }
          ].map((template, i) => (
            <button key={i} className="w-full p-4 bg-dark-surface/50 rounded-lg border border-gray-600 hover:border-neon-purple/50 transition-colors text-left">
              <div className="flex items-center gap-3">
                <div className="text-2xl">{template.icon}</div>
                <div>
                  <h4 className="text-white font-medium">{template.name}</h4>
                  <p className="text-gray-400 text-sm">{template.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ExplorePage = () => (
  <div className="max-w-4xl mx-auto p-6">
    <div className="bg-dark-secondary rounded-lg p-8">
      <div className="flex items-center gap-4 mb-6">
        <BarChart3 className="text-neon-cyan" size={32} />
        <div>
          <h1 className="text-2xl font-bold text-white">Explore</h1>
          <p className="text-gray-400">Discover trending content and inspiration</p>
        </div>
      </div>
      <div className="bg-dark-tertiary rounded-lg p-6">
        <p className="text-gray-300">Explore features coming soon!</p>
      </div>
    </div>
  </div>
);

const AffiliatePage = () => (
  <div className="max-w-4xl mx-auto p-6">
    <div className="bg-dark-secondary rounded-lg p-8">
      <div className="flex items-center gap-4 mb-6">
        <Star className="text-neon-green" size={32} />
        <div>
          <h1 className="text-2xl font-bold text-white">Affiliate Program</h1>
          <p className="text-gray-400">Earn money by referring new users</p>
        </div>
      </div>
      <div className="bg-dark-tertiary rounded-lg p-6">
        <p className="text-gray-300">Affiliate program details coming soon!</p>
      </div>
    </div>
  </div>
);

const FAQPage = () => (
  <div className="max-w-4xl mx-auto p-6">
    <div className="bg-dark-secondary rounded-lg p-8">
      <div className="flex items-center gap-4 mb-6">
        <HelpCircle className="text-neon-purple" size={32} />
        <div>
          <h1 className="text-2xl font-bold text-white">Frequently Asked Questions</h1>
          <p className="text-gray-400">Find answers to common questions</p>
        </div>
      </div>
      <div className="bg-dark-tertiary rounded-lg p-6">
        <p className="text-gray-300">FAQ content coming soon!</p>
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="max-w-4xl mx-auto p-6">
    <div className="bg-dark-secondary rounded-lg p-8">
      <div className="flex items-center gap-4 mb-6">
        <Mail className="text-neon-cyan" size={32} />
        <div>
          <h1 className="text-2xl font-bold text-white">Contact Support</h1>
          <p className="text-gray-400">Get help from our support team</p>
        </div>
      </div>
      <div className="bg-dark-tertiary rounded-lg p-6">
        <p className="text-gray-300">Contact form coming soon!</p>
      </div>
    </div>
  </div>
);

export default MainLayout;
