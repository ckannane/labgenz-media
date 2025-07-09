'use client';

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import CreateVideo from './CreateVideo';
import { User, Video, BarChart3, Calendar, Star, HelpCircle, Mail, Zap, Sparkles } from 'lucide-react';

const MainLayout: React.FC = () => {
  const [activeItem, setActiveItem] = useState('profile');
  const [activeStep, setActiveStep] = useState(1);

  const handleItemClick = (item: string) => {
    setActiveItem(item);
    // Reset to step 1 when switching between video creation modes
    if (['create', 'ai-slideshow', 'ai-hook-demo', 'greenscreen-memes'].includes(item)) {
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
    <div className="mb-8">
      <p className="section-subtitle">USER PROFILE</p>
      <h1 className="section-title">Profile Settings</h1>
      <p className="text-gray-400">Manage your account information and preferences</p>
    </div>

    <div className="glass-card p-8 mb-8">
      <div className="flex items-center gap-6 mb-8">
        <div className="w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-cyan-500/30">
          <User className="text-cyan-400" size={36} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">John Doe</h2>
          <p className="text-gray-300 mb-2">Content Creator</p>
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/30">
              Pro Member
            </span>
            <span className="text-gray-400 text-sm">Joined March 2024</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white mb-4">Account Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-white font-medium mb-2">Full Name</label>
              <input 
                className="form-input w-full" 
                defaultValue="John Doe" 
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">Email Address</label>
              <input 
                className="form-input w-full" 
                defaultValue="john@example.com" 
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">Username</label>
              <input 
                className="form-input w-full" 
                defaultValue="johndoe_creator" 
                placeholder="Choose a username"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">Bio</label>
              <textarea 
                className="form-textarea w-full" 
                rows={3}
                placeholder="Tell us about yourself..."
              />
            </div>
            <button className="btn-secondary w-full">
              Update Profile
            </button>
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white mb-4">Account Statistics</h3>
          <div className="services-grid">
            <div className="service-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Videos Created</p>
                  <h4 className="text-2xl font-bold text-white">24</h4>
                </div>
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Video className="text-cyan-400" size={20} />
                </div>
              </div>
            </div>
            <div className="service-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Storage Used</p>
                  <h4 className="text-2xl font-bold text-white">2.4 GB</h4>
                </div>
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <BarChart3 className="text-purple-400" size={20} />
                </div>
              </div>
            </div>
            <div className="service-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Views</p>
                  <h4 className="text-2xl font-bold text-white">156K</h4>
                </div>
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Star className="text-green-400" size={20} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="service-card">
            <h4 className="text-white font-semibold mb-4">Subscription Details</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Plan</span>
                <span className="text-white font-medium">Pro Monthly</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Next Billing</span>
                <span className="text-white font-medium">Aug 9, 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Status</span>
                <span className="text-cyan-400 font-medium">Active</span>
              </div>
            </div>
            <button className="btn-primary w-full mt-4">
              Manage Subscription
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const VideosPage = () => (
  <div className="max-w-6xl mx-auto p-6">
    <div className="mb-8">
      <p className="section-subtitle">CONTENT LIBRARY</p>
      <h1 className="section-title">My Videos</h1>
      <p className="text-gray-400">Manage and organize your video content</p>
    </div>

    <div className="glass-card p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-white font-medium">Total Videos:</span>
            <span className="text-cyan-400 font-bold">24</span>
          </div>
          <div className="w-px h-6 bg-gray-600"></div>
          <div className="flex items-center gap-2">
            <span className="text-white font-medium">Total Views:</span>
            <span className="text-cyan-400 font-bold">156K</span>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="btn-primary">
            <span>Filter</span>
          </button>
          <button className="btn-primary">
            <span>Sort</span>
          </button>
          <button className="btn-secondary">
            <span>New Video</span>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { 
            id: 1, 
            title: "AI Story: Guardian Angel", 
            type: "AI Slideshow", 
            status: "Published", 
            views: "2.3K", 
            duration: "3:45",
            thumbnail: "📖",
            color: "cyan"
          },
          { 
            id: 2, 
            title: "Hook: Mysterious Object", 
            type: "AI Hook + Demo", 
            status: "Processing", 
            views: "1.8K", 
            duration: "2:30",
            thumbnail: "🎯",
            color: "purple"
          },
          { 
            id: 3, 
            title: "Meme: Reaction Video", 
            type: "Greenscreen Memes", 
            status: "Published", 
            views: "5.2K", 
            duration: "1:15",
            thumbnail: "😂",
            color: "green"
          },
          { 
            id: 4, 
            title: "Educational: Science Facts", 
            type: "AI Slideshow", 
            status: "Published", 
            views: "3.1K", 
            duration: "4:20",
            thumbnail: "🧪",
            color: "cyan"
          },
          { 
            id: 5, 
            title: "Horror: Haunted House", 
            type: "AI Hook + Demo", 
            status: "Draft", 
            views: "0", 
            duration: "0:00",
            thumbnail: "👻",
            color: "purple"
          },
          { 
            id: 6, 
            title: "Comedy: Daily Life", 
            type: "Greenscreen Memes", 
            status: "Published", 
            views: "8.7K", 
            duration: "2:45",
            thumbnail: "🎭",
            color: "green"
          }
        ].map((video) => (
          <div key={video.id} className="service-card group cursor-pointer">
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-4 flex items-center justify-center border border-gray-700 relative overflow-hidden">
              <div className="text-4xl opacity-60">{video.thumbnail}</div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center border border-cyan-500/30">
                  <Video className="text-cyan-400" size={20} />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                {video.duration}
              </div>
            </div>
            
            <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
              {video.title}
            </h3>
            
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-xs px-2 py-1 rounded border ${
                video.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' :
                video.color === 'purple' ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' :
                'bg-green-500/20 text-green-400 border-green-500/30'
              }`}>
                {video.type}
              </span>
              <span className={`text-xs px-2 py-1 rounded border ${
                video.status === 'Published' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                video.status === 'Processing' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                'bg-gray-500/20 text-gray-400 border-gray-500/30'
              }`}>
                {video.status}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">{video.views} views</span>
              <div className="flex gap-2">
                <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium bg-cyan-500/20 px-3 py-1 rounded border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors">
                  Edit
                </button>
                <button className="text-purple-400 hover:text-purple-300 text-sm font-medium bg-purple-500/20 px-3 py-1 rounded border border-purple-500/30 hover:bg-purple-500/30 transition-colors">
                  Share
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SchedulePage = () => (
  <div className="max-w-6xl mx-auto p-6">
    <div className="mb-8">
      <p className="section-subtitle">PLAN YOUR CONTENT</p>
      <h1 className="section-title">Schedule</h1>
      <p className="text-gray-400">Plan and schedule your video content across platforms</p>
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <div className="glass-card p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">Content Calendar</h3>
            <button className="btn-secondary">
              <Calendar className="w-4 h-4 mr-2" />
              Add Post
            </button>
          </div>
          
          {/* Calendar Header */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center text-gray-400 text-sm font-medium p-2">
                {day}
              </div>
            ))}
          </div>
          
          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 35 }, (_, i) => {
              const dayNum = i < 31 ? i + 1 : '';
              const hasPost = [3, 7, 12, 18, 22, 26].includes(i + 1);
              
              return (
                <div key={i} className={`
                  aspect-square rounded-lg border transition-all duration-300 p-2 text-center text-sm cursor-pointer
                  ${hasPost 
                    ? 'service-card highlighted' 
                    : 'service-card'
                  }
                `}>
                  <div className="text-white font-medium">{dayNum}</div>
                  {hasPost && (
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mx-auto mt-1"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="glass-card p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="service-card flex items-center gap-3 hover:highlighted transition-all">
              <Calendar className="minimal-icon" />
              <span className="text-white font-medium">Schedule Post</span>
            </button>
            <button className="service-card flex items-center gap-3 hover:highlighted transition-all">
              <BarChart3 className="minimal-icon" />
              <span className="text-white font-medium">Analytics</span>
            </button>
            <button className="service-card flex items-center gap-3 hover:highlighted transition-all">
              <Zap className="minimal-icon" />
              <span className="text-white font-medium">Automation</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        {/* Upcoming Posts */}
        <div className="glass-card p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Upcoming Posts</h3>
          <div className="space-y-3">
            {[
              { title: "AI Slideshow: Top 10 Facts", platform: "YouTube", time: "2:00 PM", date: "Today", status: "scheduled" },
              { title: "Hook Video: Product Demo", platform: "TikTok", time: "6:00 PM", date: "Today", status: "draft" },
              { title: "Greenscreen Meme", platform: "Instagram", time: "10:00 AM", date: "Tomorrow", status: "scheduled" },
              { title: "Educational Content", platform: "YouTube", time: "3:00 PM", date: "Jan 12", status: "draft" }
            ].map((post, index) => (
              <div key={index} className="service-card">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-medium text-sm">{post.title}</h4>
                  <span className={`px-2 py-1 rounded text-xs ${
                    post.status === 'scheduled' 
                      ? 'bg-cyan-400/20 text-cyan-400' 
                      : 'bg-gray-600/50 text-gray-400'
                  }`}>
                    {post.status}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{post.platform}</span>
                  <span>{post.date} • {post.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Platform Stats */}
        <div className="glass-card p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Platform Overview</h3>
          <div className="space-y-4">
            {[
              { platform: "YouTube", scheduled: 5, published: 12, color: "text-red-400" },
              { platform: "TikTok", scheduled: 8, published: 24, color: "text-pink-400" },
              { platform: "Instagram", scheduled: 3, published: 18, color: "text-purple-400" },
              { platform: "Twitter", scheduled: 2, published: 31, color: "text-blue-400" }
            ].map((stat, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${stat.color.replace('text-', 'bg-')}`}></div>
                  <span className="text-white font-medium">{stat.platform}</span>
                </div>
                <div className="text-sm text-gray-400">
                  {stat.scheduled} scheduled • {stat.published} published
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Best Times */}
        <div className="glass-card p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Best Posting Times</h3>
          <div className="space-y-3">
            {[
              { time: "2:00 PM", platform: "YouTube", engagement: "High" },
              { time: "6:00 PM", platform: "TikTok", engagement: "Peak" },
              { time: "10:00 AM", platform: "Instagram", engagement: "High" },
              { time: "8:00 AM", platform: "Twitter", engagement: "Medium" }
            ].map((time, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                <div>
                  <span className="text-white font-medium">{time.time}</span>
                  <span className="text-gray-400 text-sm ml-2">{time.platform}</span>
                </div>
                <span className={`px-2 py-1 rounded text-xs ${
                  time.engagement === 'Peak' 
                    ? 'bg-cyan-400/20 text-cyan-400' 
                    : time.engagement === 'High'
                    ? 'bg-green-400/20 text-green-400'
                    : 'bg-gray-600/50 text-gray-400'
                }`}>
                  {time.engagement}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AutomationsPage = () => (
  <div className="max-w-6xl mx-auto p-6">
    <div className="mb-8">
      <p className="section-subtitle">WORKFLOW AUTOMATION</p>
      <h1 className="section-title">Automations</h1>
      <p className="text-gray-400">Automate your video creation and publishing workflow</p>
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="glass-card p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
              <Zap className="text-green-400" size={20} />
            </div>
            <h3 className="text-xl font-semibold text-white">Active Automations</h3>
          </div>
          <div className="space-y-4">
            {[
              { 
                name: "Daily AI Stories", 
                type: "Content Generation", 
                status: "Active", 
                lastRun: "2 hours ago",
                icon: "🤖",
                color: "green"
              },
              { 
                name: "Social Media Posting", 
                type: "Publishing", 
                status: "Active", 
                lastRun: "1 day ago",
                icon: "📱",
                color: "cyan"
              },
              { 
                name: "Video Optimization", 
                type: "Processing", 
                status: "Paused", 
                lastRun: "3 days ago",
                icon: "⚡",
                color: "gray"
              }
            ].map((automation, i) => (
              <div key={i} className="service-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl">{automation.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium">{automation.name}</h4>
                    <p className="text-gray-400 text-sm">{automation.type}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                    automation.status === 'Active' ? 'bg-green-500/20 text-green-400 border-green-500/30' : 
                    'bg-gray-500/20 text-gray-400 border-gray-500/30'
                  }`}>
                    {automation.status}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-xs">Last run: {automation.lastRun}</span>
                  <div className="flex gap-2">
                    <button className="text-cyan-400 hover:text-cyan-300 text-sm bg-cyan-500/20 px-3 py-1 rounded border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors">
                      Edit
                    </button>
                    <button className={`text-sm px-3 py-1 rounded border transition-colors ${
                      automation.status === 'Active' 
                        ? 'text-yellow-400 hover:text-yellow-300 bg-yellow-500/20 border-yellow-500/30 hover:bg-yellow-500/30'
                        : 'text-green-400 hover:text-green-300 bg-green-500/20 border-green-500/30 hover:bg-green-500/30'
                    }`}>
                      {automation.status === 'Active' ? 'Pause' : 'Start'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="glass-card p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <BarChart3 className="text-purple-400" size={20} />
            </div>
            <h3 className="text-xl font-semibold text-white">Automation Stats</h3>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Videos Auto-Created</p>
                  <h4 className="text-2xl font-bold text-white">156</h4>
                </div>
                <div className="text-2xl">🎬</div>
              </div>
            </div>
            <div className="service-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Time Saved</p>
                  <h4 className="text-2xl font-bold text-white">48h</h4>
                </div>
                <div className="text-2xl">⏱️</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="glass-card p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
              <Sparkles className="text-cyan-400" size={20} />
            </div>
            <h3 className="text-xl font-semibold text-white">Create New Automation</h3>
          </div>
          <div className="space-y-4">
            {[
              { 
                name: "Auto-Generate Content", 
                description: "Create videos from RSS feeds or trending topics", 
                icon: "🤖",
                popular: true
              },
              { 
                name: "Bulk Processing", 
                description: "Process multiple videos simultaneously", 
                icon: "⚡",
                popular: false
              },
              { 
                name: "Smart Scheduling", 
                description: "Optimal posting times based on analytics", 
                icon: "📊",
                popular: true
              },
              { 
                name: "Cross-Platform Publishing", 
                description: "Publish to multiple platforms automatically", 
                icon: "🌐",
                popular: false
              }
            ].map((template, i) => (
              <button key={i} className="service-card w-full text-left hover:scale-105 transition-transform">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{template.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-white font-medium">{template.name}</h4>
                      {template.popular && (
                        <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded border border-yellow-500/30">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">{template.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        <div className="glass-card p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="btn-secondary w-full">
              Create Custom Automation
            </button>
            <button className="btn-primary w-full">
              Import Automation Template
            </button>
            <button className="btn-primary w-full">
              View Automation Logs
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ExplorePage = () => (
  <div className="max-w-6xl mx-auto p-6">
    <div className="mb-8">
      <p className="section-subtitle">DISCOVER & INSPIRE</p>
      <h1 className="section-title">Explore</h1>
      <p className="text-gray-400">Discover trending content, templates, and creative inspiration</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Main Content */}
      <div className="lg:col-span-3 space-y-6">
        {/* Trending Templates */}
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Trending Templates</h2>
            <button className="btn-primary">View All</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { 
                title: "Viral Facts Template", 
                type: "AI Slideshow", 
                views: "2.4M", 
                category: "Educational",
                thumbnail: "📊"
              },
              { 
                title: "Product Hook Demo", 
                type: "AI Hook + Demo", 
                views: "1.8M", 
                category: "Marketing",
                thumbnail: "🚀"
              },
              { 
                title: "Meme Reaction Video", 
                type: "Greenscreen Memes", 
                views: "3.2M", 
                category: "Entertainment",
                thumbnail: "😂"
              },
              { 
                title: "Motivational Quotes", 
                type: "AI Slideshow", 
                views: "1.5M", 
                category: "Inspiration",
                thumbnail: "✨"
              },
              { 
                title: "App Review Format", 
                type: "AI Hook + Demo", 
                views: "900K", 
                category: "Tech",
                thumbnail: "📱"
              },
              { 
                title: "Trending Audio Meme", 
                type: "Greenscreen Memes", 
                views: "2.7M", 
                category: "Viral",
                thumbnail: "🎵"
              }
            ].map((template, index) => (
              <div key={index} className="service-card cursor-pointer hover:highlighted transition-all">
                <div className="text-3xl mb-3 text-center">{template.thumbnail}</div>
                <h3 className="text-white font-medium text-sm mb-2">{template.title}</h3>
                <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                  <span>{template.type}</span>
                  <span>{template.views} views</span>
                </div>
                <span className="px-2 py-1 rounded text-xs bg-cyan-400/20 text-cyan-400">
                  {template.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Content */}
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Featured Content</h2>
            <button className="btn-primary">Browse All</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "10 Viral Video Ideas That Always Work",
                author: "Content Creator Pro",
                readTime: "5 min read",
                category: "Strategy",
                thumbnail: "💡"
              },
              {
                title: "How to Hook Viewers in the First 3 Seconds",
                author: "Viral Academy",
                readTime: "7 min read",
                category: "Tips",
                thumbnail: "🎯"
              },
              {
                title: "The Psychology of Viral Content",
                author: "Media Insights",
                readTime: "8 min read",
                category: "Psychology",
                thumbnail: "🧠"
              },
              {
                title: "Best Posting Times for Maximum Reach",
                author: "Analytics Team",
                readTime: "4 min read",
                category: "Analytics",
                thumbnail: "📈"
              }
            ].map((article, index) => (
              <div key={index} className="service-card cursor-pointer hover:highlighted transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">{article.thumbnail}</div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium mb-2">{article.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                      <span>{article.author}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <span className="px-2 py-1 rounded text-xs bg-cyan-400/20 text-cyan-400">
                      {article.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Hashtags */}
        <div className="glass-card p-6">
          <h2 className="text-xl font-semibold text-white mb-6">Trending Hashtags</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "#viral", "#trending", "#contentcreator", "#ai", "#faceless",
              "#youtube", "#tiktok", "#automation", "#socialmedia", "#growth",
              "#marketing", "#viral2025", "#contentmarketing", "#digitalmarketing"
            ].map((hashtag, index) => (
              <button key={index} className="px-4 py-2 rounded-full bg-gray-800/50 text-cyan-400 text-sm hover:bg-cyan-400/20 transition-colors">
                {hashtag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        {/* Trending Now */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Trending Now</h3>
          <div className="space-y-3">
            {[
              { rank: 1, topic: "AI Generated Content", posts: "2.3K" },
              { rank: 2, topic: "Faceless YouTube", posts: "1.8K" },
              { rank: 3, topic: "Viral Hooks", posts: "1.5K" },
              { rank: 4, topic: "Automation Tools", posts: "1.2K" },
              { rank: 5, topic: "Content Strategy", posts: "980" }
            ].map((trend, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg">
                <div className="w-8 h-8 bg-cyan-400 text-black rounded-full flex items-center justify-center text-sm font-bold">
                  {trend.rank}
                </div>
                <div className="flex-1">
                  <div className="text-white font-medium text-sm">{trend.topic}</div>
                  <div className="text-gray-400 text-xs">{trend.posts} posts</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Community Stats</h3>
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">50K+</div>
              <div className="text-gray-400 text-sm">Active Creators</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">2.5M+</div>
              <div className="text-gray-400 text-sm">Videos Created</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">15M+</div>
              <div className="text-gray-400 text-sm">Total Views</div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Browse Categories</h3>
          <div className="space-y-2">
            {[
              { name: "Educational", count: "1.2K" },
              { name: "Entertainment", count: "2.8K" },
              { name: "Marketing", count: "950" },
              { name: "Technology", count: "750" },
              { name: "Lifestyle", count: "1.1K" },
              { name: "Business", count: "680" }
            ].map((category, index) => (
              <button key={index} className="w-full flex items-center justify-between p-3 rounded-lg bg-gray-800/30 hover:bg-cyan-400/20 transition-colors text-left">
                <span className="text-white font-medium">{category.name}</span>
                <span className="text-gray-400 text-sm">{category.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Creator Spotlight */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Creator Spotlight</h3>
          <div className="space-y-3">
            {[
              { name: "Alex Creator", followers: "125K", specialty: "AI Content" },
              { name: "Sarah Viral", followers: "89K", specialty: "Hooks" },
              { name: "Tech Mike", followers: "156K", specialty: "Reviews" }
            ].map((creator, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center text-black font-bold">
                  {creator.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <div className="text-white font-medium text-sm">{creator.name}</div>
                  <div className="text-gray-400 text-xs">{creator.followers} • {creator.specialty}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AffiliatePage = () => {
  const [referralCode, setReferralCode] = useState('LABGENZ_USER123');
  const [copied, setCopied] = useState(false);

  const copyReferralCode = () => {
    navigator.clipboard.writeText(`https://labgenz.com/ref/${referralCode}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const stats = [
    { label: 'Total Referrals', value: '12', icon: '👥' },
    { label: 'Active Users', value: '8', icon: '✅' },
    { label: 'Total Earnings', value: '$284', icon: '💰' },
    { label: 'This Month', value: '$89', icon: '📈' },
  ];

  const commissionTiers = [
    { users: '1-10', rate: '20%', bonus: '$5 per user' },
    { users: '11-25', rate: '25%', bonus: '$10 per user' },
    { users: '26-50', rate: '30%', bonus: '$15 per user' },
    { users: '50+', rate: '35%', bonus: '$20 per user' },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="service-card">
        <div className="flex items-center gap-4 mb-8">
          <Star className="text-green-400" size={32} />
          <div>
            <h1 className="text-3xl font-bold text-white">Affiliate Program</h1>
            <p className="text-gray-400">Earn money by referring new users to LABGENZ Media</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-900/50 rounded-lg p-4 border border-gray-700/50">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{stat.icon}</span>
                <div>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Referral Link */}
        <div className="bg-cyan-500/10 rounded-lg p-6 border border-cyan-500/20 mb-8">
          <h3 className="text-white font-semibold mb-4">Your Referral Link</h3>
          <div className="flex gap-3">
            <input
              type="text"
              value={`https://labgenz.com/ref/${referralCode}`}
              readOnly
              className="flex-1 bg-gray-900/50 border border-gray-700/50 rounded-lg px-4 py-2 text-white"
            />
            <button
              onClick={copyReferralCode}
              className="btn-secondary px-6"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>

        {/* Commission Tiers */}
        <div className="mb-8">
          <h3 className="text-white font-semibold mb-4">Commission Tiers</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-900/50 rounded-lg">
              <thead>
                <tr className="border-b border-gray-700/50">
                  <th className="text-left p-4 text-cyan-400">Referred Users</th>
                  <th className="text-left p-4 text-cyan-400">Commission Rate</th>
                  <th className="text-left p-4 text-cyan-400">Signup Bonus</th>
                </tr>
              </thead>
              <tbody>
                {commissionTiers.map((tier, index) => (
                  <tr key={index} className="border-b border-gray-700/50 last:border-0">
                    <td className="p-4 text-white">{tier.users}</td>
                    <td className="p-4 text-green-400 font-semibold">{tier.rate}</td>
                    <td className="p-4 text-green-400 font-semibold">{tier.bonus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* How It Works */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700/50">
            <div className="text-cyan-400 text-2xl mb-4">1️⃣</div>
            <h4 className="text-white font-semibold mb-2">Share Your Link</h4>
            <p className="text-gray-400 text-sm">Share your unique referral link with friends, family, and your audience.</p>
          </div>
          <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700/50">
            <div className="text-cyan-400 text-2xl mb-4">2️⃣</div>
            <h4 className="text-white font-semibold mb-2">They Sign Up</h4>
            <p className="text-gray-400 text-sm">When someone signs up using your link, you earn a signup bonus.</p>
          </div>
          <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700/50">
            <div className="text-cyan-400 text-2xl mb-4">3️⃣</div>
            <h4 className="text-white font-semibold mb-2">Earn Commissions</h4>
            <p className="text-gray-400 text-sm">Get recurring commissions from their subscription payments.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <h3 className="text-white font-semibold mb-2">Ready to start earning?</h3>
          <p className="text-gray-400 mb-4">Join thousands of creators already earning with our affiliate program.</p>
          <button className="btn-primary">
            Start Promoting Now
          </button>
        </div>
      </div>
    </div>
  );
};

const FAQPage = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqItems = [
    {
      question: "How do I create my first video?",
      answer: "Click on 'Create' in the sidebar and choose your preferred video type (AI Slideshow, AI Hook + Demo, or Greenscreen Memes). Follow the 4-step process: Script → Voice → Background → Finalize."
    },
    {
      question: "What video types are available?",
      answer: "We offer three main video types: AI Slideshow (perfect for educational content), AI Hook + Demo (great for product demonstrations), and Greenscreen Memes (ideal for viral content creation)."
    },
    {
      question: "How does the AI script generation work?",
      answer: "Our AI analyzes your topic and generates engaging scripts based on proven templates. You can customize the tone, length, and style to match your brand voice."
    },
    {
      question: "Can I use my own voice?",
      answer: "Yes! You can record your own voice, upload audio files, or use our AI voice generation with multiple voice options and languages."
    },
    {
      question: "What background options are available?",
      answer: "Choose from our stock video library, upload your own footage, use AI-generated backgrounds, or create custom scenes with our built-in editor."
    },
    {
      question: "How do I schedule my videos?",
      answer: "Use the Schedule section to plan your content calendar, set posting times, and automatically publish to your connected social media platforms."
    },
    {
      question: "What platforms can I publish to?",
      answer: "Currently supports YouTube, TikTok, Instagram, Facebook, Twitter, and LinkedIn. More platforms are being added regularly."
    },
    {
      question: "Is there a limit on video length?",
      answer: "Video length depends on your plan: Free (up to 60 seconds), Pro (up to 10 minutes), Enterprise (unlimited). Check your plan details in Profile."
    },
    {
      question: "How do I access my created videos?",
      answer: "All your videos are stored in the 'Videos' section where you can view, edit, download, or share them directly to social platforms."
    },
    {
      question: "What's included in the automation features?",
      answer: "Set up automated posting schedules, bulk video generation, template workflows, and AI-powered content suggestions based on trending topics."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="service-card">
        <div className="flex items-center gap-4 mb-8">
          <HelpCircle className="text-cyan-400" size={32} />
          <div>
            <h1 className="text-3xl font-bold text-white">Frequently Asked Questions</h1>
            <p className="text-gray-400">Find answers to common questions about LABGENZ Media</p>
          </div>
        </div>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-gray-900/50 rounded-lg border border-gray-700/50 overflow-hidden">
              <button
                onClick={() => setOpenItem(openItem === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
              >
                <h3 className="text-white font-medium">{item.question}</h3>
                <div className={`text-cyan-400 transition-transform duration-200 ${openItem === index ? 'rotate-180' : ''}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </div>
              </button>
              {openItem === index && (
                <div className="px-6 pb-4 border-t border-gray-700/50">
                  <p className="text-gray-300 leading-relaxed pt-4">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
          <h3 className="text-white font-semibold mb-2">Still have questions?</h3>
          <p className="text-gray-400 mb-4">Can't find what you're looking for? Our support team is here to help.</p>
          <button className="btn-primary">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    priority: 'normal'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '', priority: 'normal' });
    }, 1500);
  };

  const supportOptions = [
    {
      title: 'Technical Support',
      description: 'Issues with video creation, bugs, or platform errors',
      icon: '🔧',
      response: 'Within 2 hours'
    },
    {
      title: 'Billing & Payments',
      description: 'Questions about subscriptions, refunds, or billing',
      icon: '💳',
      response: 'Within 1 hour'
    },
    {
      title: 'Feature Requests',
      description: 'Suggestions for new features or improvements',
      icon: '💡',
      response: 'Within 24 hours'
    },
    {
      title: 'General Inquiry',
      description: 'Other questions or feedback about our service',
      icon: '💬',
      response: 'Within 4 hours'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="service-card">
        <div className="flex items-center gap-4 mb-8">
          <Mail className="text-cyan-400" size={32} />
          <div>
            <h1 className="text-3xl font-bold text-white">Contact Support</h1>
            <p className="text-gray-400">Get help from our support team - we're here to help 24/7</p>
          </div>
        </div>

        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {supportOptions.map((option, index) => (
            <div key={index} className="bg-gray-900/50 rounded-lg p-4 border border-gray-700/50">
              <div className="flex items-start gap-3">
                <span className="text-2xl">{option.icon}</span>
                <div>
                  <h3 className="text-white font-semibold">{option.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{option.description}</p>
                  <span className="text-cyan-400 text-xs">Response time: {option.response}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <h3 className="text-white font-semibold mb-4">Send us a message</h3>
            
            {submitted ? (
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 text-center">
                <div className="text-green-400 text-4xl mb-4">✓</div>
                <h4 className="text-white font-semibold mb-2">Message Sent Successfully!</h4>
                <p className="text-gray-400">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-900/50 border border-gray-700/50 rounded-lg px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-900/50 border border-gray-700/50 rounded-lg px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-900/50 border border-gray-700/50 rounded-lg px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Priority</label>
                    <select
                      name="priority"
                      value={formData.priority}
                      onChange={handleInputChange}
                      className="w-full bg-gray-900/50 border border-gray-700/50 rounded-lg px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
                    >
                      <option value="low">Low</option>
                      <option value="normal">Normal</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full bg-gray-900/50 border border-gray-700/50 rounded-lg px-4 py-2 text-white focus:border-cyan-500 focus:outline-none resize-none"
                    placeholder="Please describe your issue or question in detail..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-semibold mb-4">Other ways to reach us</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-cyan-400" size={20} />
                  <div>
                    <p className="text-white">Email Support</p>
                    <p className="text-gray-400 text-sm">support@labgenz.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <svg className="text-cyan-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <div>
                    <p className="text-white">Live Chat</p>
                    <p className="text-gray-400 text-sm">Available 24/7</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <svg className="text-cyan-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                  <div>
                    <p className="text-white">Knowledge Base</p>
                    <p className="text-gray-400 text-sm">Self-service help articles</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/20">
              <h4 className="text-white font-semibold mb-2">Need faster support?</h4>
              <p className="text-gray-400 text-sm mb-3">Upgrade to Pro for priority support with guaranteed response times.</p>
              <button className="btn-secondary text-sm">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
