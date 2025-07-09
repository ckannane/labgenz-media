'use client';

import React, { useState } from 'react';
import { 
  Monitor, 
  User, 
  Video, 
  Calendar, 
  Zap, 
  Search, 
  Star, 
  HelpCircle, 
  Mail,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Play,
  Image
} from 'lucide-react';

interface SidebarProps {
  activeItem: string;
  onItemClick: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem, onItemClick }) => {
  const [createExpanded, setCreateExpanded] = useState(true);

  const mainItems = [
    { id: 'create', label: 'Create', icon: Monitor },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'videos', label: 'Videos', icon: Video },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'automations', label: 'Automations', icon: Zap },
    { id: 'explore', label: 'Explore', icon: Search },
    { id: 'affiliate', label: 'Affiliate', icon: Star },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const createSubItems = [
    { 
      id: 'ai-slideshow', 
      label: 'AI Slideshow', 
      icon: Sparkles,
      description: 'Create engaging slideshows with AI-generated content'
    },
    { 
      id: 'ai-hook-demo', 
      label: 'AI Hook + Demo', 
      icon: Play,
      description: 'Build compelling product demonstrations'
    },
    { 
      id: 'greenscreen-memes', 
      label: 'Greenscreen Memes', 
      icon: Image,
      description: 'Generate viral meme content'
    },
  ];

  const handleItemClick = (itemId: string) => {
    if (itemId === 'create') {
      setCreateExpanded(!createExpanded);
    }
    onItemClick(itemId);
  };

  return (
    <div className="sidebar w-64 h-screen fixed left-0 top-0 z-50 p-4">
      <div className="h-full flex flex-col">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold gradient-text">LABGENZ</h1>
          <p className="text-sm text-gray-400 uppercase tracking-wider">MEDIA</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2">
          {mainItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id || 
                           (item.id === 'create' && ['ai-slideshow', 'ai-hook-demo', 'greenscreen-memes'].includes(activeItem));
            
            return (
              <div key={item.id}>
                <button
                  onClick={() => handleItemClick(item.id)}
                  className={`
                    sidebar-item w-full flex items-center gap-3 text-left
                    ${isActive ? 'active' : ''}
                  `}
                >
                  <Icon className="minimal-icon" />
                  <span className="font-medium">{item.label}</span>
                  {item.id === 'create' && (
                    <div className="ml-auto">
                      {createExpanded ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </div>
                  )}
                </button>

                {/* Create Submenu */}
                {item.id === 'create' && createExpanded && (
                  <div className="ml-6 mt-3 space-y-2">
                    {createSubItems.map((subItem) => {
                      const SubIcon = subItem.icon;
                      const isSubActive = activeItem === subItem.id;
                      
                      return (
                        <button
                          key={subItem.id}
                          onClick={() => onItemClick(subItem.id)}
                          className={`
                            w-full p-3 rounded-lg border transition-all duration-300 text-left
                            ${isSubActive 
                              ? 'service-card highlighted' 
                              : 'service-card'
                            }
                          `}
                        >
                          <div className="flex items-start gap-3">
                            <SubIcon className="minimal-icon mt-1" />
                            <div>
                              <h4 className="text-white font-medium text-sm">{subItem.label}</h4>
                              <p className="text-gray-400 text-xs mt-1">{subItem.description}</p>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="mt-auto pt-4 border-t border-gray-700">
          <div className="text-center">
            <p className="text-xs text-gray-400">Version 1.0.0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
