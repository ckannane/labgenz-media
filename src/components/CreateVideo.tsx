'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Download, Share2, Eye, Wand2, Mic, Volume2, Music, Image, Video, Sparkles, Check } from 'lucide-react';

interface CreateVideoProps {
  activeStep: number;
  onStepChange: (step: number) => void;
  videoType: string;
}

const CreateVideo: React.FC<CreateVideoProps> = ({ activeStep, onStepChange, videoType }) => {
  const [scriptContent, setScriptContent] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState('');
  const [voiceSpeed, setVoiceSpeed] = useState(1);
  const [selectedBackground, setSelectedBackground] = useState('');
  const [selectedMusic, setSelectedMusic] = useState('');
  const [exportSettings, setExportSettings] = useState({
    format: 'mp4',
    quality: '1080p',
    duration: '60s'
  });

  // New state for enhanced workflows
  const [selectedDemoStrategy, setSelectedDemoStrategy] = useState('');
  const [selectedContentType, setSelectedContentType] = useState('');
  const [viralElements, setViralElements] = useState<string[]>([]);

  const getVideoTypeTitle = (type: string) => {
    switch (type) {
      case 'ai-slideshow':
        return 'AI Slideshow';
      case 'ai-hook-demo':
        return 'AI Hook + Demo';
      case 'greenscreen-memes':
        return 'Greenscreen Memes';
      default:
        return 'Create Video';
    }
  };

  const getTemplates = (type: string) => {
    switch (type) {
      case 'ai-slideshow':
        return [
          { id: 'educational', name: 'Educational Content', description: 'Perfect for tutorials and how-to videos' },
          { id: 'motivational', name: 'Motivational Quote', description: 'Inspiring quotes with engaging visuals' },
          { id: 'facts', name: 'Fun Facts', description: 'Interesting facts with eye-catching slides' },
          { id: 'listicle', name: 'Top 10 List', description: 'Countdown-style content that hooks viewers' }
        ];
      case 'ai-hook-demo':
        return [
          { id: 'problem-solution', name: 'Problem → Solution', description: 'Start with pain point, reveal solution' },
          { id: 'curiosity-gap', name: 'Curiosity Gap', description: 'Create intrigue, promise revelation' },
          { id: 'controversy', name: 'Controversial Take', description: 'Bold statement that sparks debate' },
          { id: 'social-proof', name: 'Social Proof', description: 'Use numbers and testimonials' },
          { id: 'before-after', name: 'Before vs After', description: 'Dramatic transformation reveals' },
          { id: 'secret-reveal', name: 'Secret Method', description: 'Reveal exclusive techniques or hacks' }
        ];
      case 'greenscreen-memes':
        return [
          { id: 'pov-meme', name: 'POV Meme', description: 'Point of view relatable scenarios' },
          { id: 'when-you', name: 'When You...', description: 'Relatable "when you" moments' },
          { id: 'me-explaining', name: 'Me Explaining', description: 'Explaining complex topics dramatically' },
          { id: 'conspiracy', name: 'Conspiracy Theory', description: 'Dramatic conspiracy explanations' },
          { id: 'toxic-trait', name: 'Toxic Trait', description: 'Self-aware personality quirks' },
          { id: 'life-hack', name: 'Life Hack Reveal', description: 'Mind-blowing life tips' },
          { id: 'plot-twist', name: 'Plot Twist', description: 'Unexpected story reveals' },
          { id: 'gen-z-humor', name: 'Gen Z Humor', description: 'Current generation-specific jokes' }
        ];
      default:
        return [
          { id: 'general', name: 'General Video', description: 'Create any type of video content' }
        ];
    }
  };

  const generateScript = async (template: string) => {
    setIsGenerating(true);
    
    // Simulate AI script generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const scripts = {
      // AI Slideshow scripts
      'educational': `🎯 Today I'll show you the #1 mistake people make when learning a new skill...`,
      'motivational': `✨ "The only impossible journey is the one you never begin." - Tony Robbins`,
      'facts': `🤯 Mind-Blowing Facts That Will Change How You See the World!`,
      'listicle': `🔥 Top 10 Life Hacks That Will Save You Hours Every Day!`,
      
      // AI Hook + Demo scripts (viral-focused)
      'problem-solution': `🚨 STOP! If you're struggling with [problem], this will change everything in the next 60 seconds...`,
      'before-after': `😱 I was broke 6 months ago. This ONE thing changed my life. Here's the proof...`,
      'secret-reveal': `🤫 Billionaires don't want you to know this secret. Here's what they do differently...`,
      'challenge-accepted': `💪 I challenged myself to [do X] for 30 days. The results will shock you...`,
      'viral-trend': `🔥 Everyone's doing [trend] wrong. Here's the RIGHT way that actually works...`,
      'controversy': `🚫 Unpopular opinion: [controversial statement]. Let me prove why I'm right...`,
      
      // Greenscreen Meme scripts (Gen Z/trending focused)
      'pov-meme': `POV: You're trying to explain to your parents why you need the new iPhone...`,
      'when-you': `When you accidentally open your front camera but you're actually looking good today...`,
      'me-explaining': `Me explaining to my bank account why I NEED this $200 skincare routine...`,
      'conspiracy': `Conspiracy theory: Companies make chargers break on purpose and here's why...`,
      'toxic-trait': `My toxic trait is thinking I can wake up at 5am after going to bed at 2am...`,
      'life-hack': `This life hack will save you $1000+ per year and nobody talks about it...`,
      'plot-twist': `Plot twist: The quiet kid in class was actually the main character all along...`,
      'gen-z-humor': `The way I gaslight myself into thinking I'll be productive tomorrow...`
    };

    const generatedScript = scripts[template as keyof typeof scripts] || 'Generated script content would appear here...';
    setScriptContent(generatedScript);
    setIsGenerating(false);
  };

  const handleNext = () => {
    const maxSteps = videoType === 'greenscreen-memes' ? 3 : 4;
    if (activeStep < maxSteps) {
      onStepChange(activeStep + 1);
    }
  };

  const handlePrevious = () => {
    if (activeStep > 1) {
      onStepChange(activeStep - 1);
    }
  };

  const toggleViralElement = (element: string) => {
    setViralElements(prev => 
      prev.includes(element) 
        ? prev.filter(e => e !== element)
        : [...prev, element]
    );
  };

  // Get steps based on video type
  const getSteps = () => {
    if (videoType === 'greenscreen-memes') {
      return [
        { number: 1, name: 'Meme Template', icon: '😂' },
        { number: 2, name: 'Effects & Text', icon: '✨' },
        { number: 3, name: 'Finalize', icon: '🔥' }
      ];
    } else if (videoType === 'ai-hook-demo') {
      return [
        { number: 1, name: 'Hook Script', icon: '🎯' },
        { number: 2, name: 'Demo Content', icon: '🎬' },
        { number: 3, name: 'Voice & Audio', icon: '🎙️' },
        { number: 4, name: 'Finalize', icon: '✨' }
      ];
    } else {
      return [
        { number: 1, name: 'Script', icon: '📝' },
        { number: 2, name: 'Voice', icon: '🎙️' },
        { number: 3, name: 'Background', icon: '🎨' },
        { number: 4, name: 'Finalize', icon: '✨' }
      ];
    }
  };
  
  const steps = getSteps();

  const voices = [
    { id: 'david', name: 'David', accent: 'US English', gender: 'Male', description: 'Professional, clear' },
    { id: 'sarah', name: 'Sarah', accent: 'US English', gender: 'Female', description: 'Warm, friendly' },
    { id: 'james', name: 'James', accent: 'UK English', gender: 'Male', description: 'Sophisticated, deep' },
    { id: 'emma', name: 'Emma', accent: 'UK English', gender: 'Female', description: 'Elegant, crisp' },
    { id: 'alex', name: 'Alex', accent: 'Australian', gender: 'Male', description: 'Casual, upbeat' },
    { id: 'sophia', name: 'Sophia', accent: 'Canadian', gender: 'Female', description: 'Gentle, trustworthy' }
  ];

  const backgroundTypes = [
    { id: 'video', name: 'Video Background', icon: Video },
    { id: 'image', name: 'Image Background', icon: Image },
    { id: 'generated', name: 'AI Generated', icon: Sparkles }
  ];

  const backgroundLibrary = [
    { id: 'office', name: 'Modern Office', type: 'video', thumbnail: '🏢' },
    { id: 'nature', name: 'Nature Scene', type: 'video', thumbnail: '🌲' },
    { id: 'city', name: 'City Skyline', type: 'video', thumbnail: '🌆' },
    { id: 'abstract', name: 'Abstract Motion', type: 'video', thumbnail: '🎨' },
    { id: 'tech', name: 'Tech Pattern', type: 'image', thumbnail: '💻' },
    { id: 'minimal', name: 'Minimal Clean', type: 'image', thumbnail: '⚪' }
  ];

  const musicTracks = [
    { id: 'upbeat', name: 'Upbeat Pop', mood: 'Energetic', duration: '3:24' },
    { id: 'corporate', name: 'Corporate Inspiration', mood: 'Professional', duration: '2:45' },
    { id: 'chill', name: 'Chill Electronic', mood: 'Relaxed', duration: '4:12' },
    { id: 'dramatic', name: 'Dramatic Orchestral', mood: 'Intense', duration: '3:58' },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">{getVideoTypeTitle(videoType)}</h1>
        <p className="text-gray-400">Create engaging content with our AI-powered tools</p>
      </div>

      {/* Stepper */}
      <div className="glass-card p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300
                ${activeStep === step.number 
                  ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-gray-900 shadow-lg shadow-cyan-400/30' 
                  : activeStep > step.number 
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-700 text-gray-400'
                }
              `}>
                {activeStep > step.number ? <Check className="w-5 h-5" /> : step.icon}
              </div>
              
              <div className="ml-3 hidden md:block">
                <p className={`text-sm font-medium ${activeStep === step.number ? 'text-cyan-400' : 'text-white'}`}>
                  {step.name}
                </p>
                <p className="text-xs text-gray-500">Step {step.number}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className={`
                  w-16 h-1 mx-4 rounded transition-all duration-300
                  ${activeStep > step.number ? 'bg-green-500' : 'bg-gray-700'}
                `} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="glass-card p-8 mb-8">
        <div className="min-h-[500px]">
          {/* Step 1: Script, Template, or Hook Strategy */}
          {activeStep === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {videoType === 'greenscreen-memes' ? 'Choose Your Approach' : 
                   videoType === 'ai-hook-demo' ? 'Hook Creation Strategy' : 'Create Your Script'}
                </h2>
                <p className="text-gray-400">
                  {videoType === 'greenscreen-memes' 
                    ? 'Use our viral templates or upload your own video'
                    : videoType === 'ai-hook-demo'
                    ? 'Get all the elements you need for a viral hook'
                    : 'Choose a template or write your own script'}
                </p>
              </div>

              {videoType === 'greenscreen-memes' ? (
                // Greenscreen Memes: Template vs Custom Video Choice
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Template Option */}
                    <div className="glass-card p-6 border-2 border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-purple-500/10">
                      <div className="text-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-2xl">🎭</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Use Viral Templates</h3>
                        <p className="text-gray-300 text-sm">Choose from trending meme formats with proven viral potential</p>
                      </div>
                      <button 
                        onClick={() => setSelectedContentType('template')}
                        className={`w-full btn-secondary ${selectedContentType === 'template' ? 'highlighted' : ''}`}
                      >
                        Browse Templates
                      </button>
                    </div>

                    {/* Custom Video Option */}
                    <div className="glass-card p-6 border-2 border-green-500/30 bg-gradient-to-br from-green-500/10 to-cyan-500/10">
                      <div className="text-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-2xl">🎥</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Upload Your Video</h3>
                        <p className="text-gray-300 text-sm">Use your own footage and add greenscreen effects</p>
                      </div>
                      <button 
                        onClick={() => setSelectedContentType('custom')}
                        className={`w-full btn-secondary ${selectedContentType === 'custom' ? 'highlighted' : ''}`}
                      >
                        Upload Video
                      </button>
                    </div>
                  </div>

                  {/* Template Selection (if template option chosen) */}
                  {selectedContentType === 'template' && (
                    <>
                      <h3 className="text-white font-semibold mb-4">🔥 Viral Meme Templates</h3>
                      <div className="services-grid">
                        {getTemplates(videoType).map((template) => (
                          <div
                            key={template.id}
                            onClick={() => setSelectedTemplate(template.id)}
                            className={`
                              service-card cursor-pointer
                              ${selectedTemplate === template.id ? 'highlighted' : ''}
                            `}
                          >
                            <h3 className="text-white font-semibold mb-1">{template.name}</h3>
                            <p className="text-gray-400 text-sm">{template.description}</p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {/* Custom Video Upload (if custom option chosen) */}
                  {selectedContentType === 'custom' && (
                    <div className="space-y-6">
                      <h3 className="text-white font-semibold mb-4">📹 Upload Your Video</h3>
                      <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-gray-500 transition-colors">
                        <div className="text-4xl mb-3">🎬</div>
                        <p className="text-white mb-2 font-medium">Drag & drop your video here</p>
                        <p className="text-gray-400 text-sm mb-4">We'll automatically detect the background for greenscreen effects</p>
                        <button className="bg-gradient-to-r from-green-400 to-cyan-400 text-gray-900 px-6 py-2 rounded-lg font-medium hover:from-green-500 hover:to-cyan-500 transition-all duration-300">
                          Browse Files
                        </button>
                        <p className="text-gray-500 text-sm mt-4">Supports MP4, MOV, AVI (max 500MB)</p>
                      </div>
                      
                      <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                        <h4 className="text-green-400 font-medium mb-2">💡 Pro Tips for Best Results:</h4>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Use a solid colored background (green/blue works best)</li>
                          <li>• Ensure good lighting and minimal shadows</li>
                          <li>• Keep yourself centered in the frame</li>
                          <li>• Record in landscape mode for better compatibility</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </>
              ) : videoType === 'ai-hook-demo' ? (
                // AI Hook + Demo: Complete Hook Elements
                <>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Hook Strategy */}
                    <div className="glass-card p-6 text-center">
                      <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <span className="text-red-400 text-xl">🎯</span>
                      </div>
                      <h3 className="text-white font-semibold mb-2">Hook Strategy</h3>
                      <p className="text-gray-400 text-sm">Proven frameworks that grab attention</p>
                    </div>

                    {/* Script Templates */}
                    <div className="glass-card p-6 text-center">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <span className="text-purple-400 text-xl">📝</span>
                      </div>
                      <h3 className="text-white font-semibold mb-2">Script Templates</h3>
                      <p className="text-gray-400 text-sm">High-converting script structures</p>
                    </div>

                    {/* Visual Elements */}
                    <div className="glass-card p-6 text-center">
                      <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <span className="text-cyan-400 text-xl">🎨</span>
                      </div>
                      <h3 className="text-white font-semibold mb-2">Visual Elements</h3>
                      <p className="text-gray-400 text-sm">Graphics, transitions, and effects</p>
                    </div>
                  </div>

                  {/* Hook Strategy Selection */}
                  <div className="mb-8">
                    <h3 className="text-white font-semibold mb-4">🎯 Choose Your Hook Strategy</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {getTemplates(videoType).map((strategy) => (
                        <div
                          key={strategy.id}
                          onClick={() => setSelectedTemplate(strategy.id)}
                          className={`
                            service-card cursor-pointer
                            ${selectedTemplate === strategy.id ? 'highlighted' : ''}
                          `}
                        >
                          <h4 className="text-white font-semibold mb-2">{strategy.name}</h4>
                          <p className="text-gray-400 text-sm mb-3">{strategy.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Complete Hook Elements Kit */}
                  {selectedTemplate && (
                    <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-lg p-6 border border-purple-500/20">
                      <h3 className="text-white font-semibold mb-4">🚀 Your Complete Hook Kit</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                          <div className="text-2xl mb-2">📋</div>
                          <h4 className="text-white font-medium text-sm">Script Framework</h4>
                          <p className="text-gray-400 text-xs">Ready-to-use templates</p>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                          <div className="text-2xl mb-2">🎬</div>
                          <h4 className="text-white font-medium text-sm">Visual Templates</h4>
                          <p className="text-gray-400 text-xs">Eye-catching graphics</p>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                          <div className="text-2xl mb-2">🎵</div>
                          <h4 className="text-white font-medium text-sm">Hook Music</h4>
                          <p className="text-gray-400 text-xs">Attention-grabbing audio</p>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                          <div className="text-2xl mb-2">📊</div>
                          <h4 className="text-white font-medium text-sm">Analytics Setup</h4>
                          <p className="text-gray-400 text-xs">Performance tracking</p>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                // Regular AI Slideshow Template Selection
                <>
                  <div className="services-grid">
                    {getTemplates(videoType).map((template) => (
                      <div
                        key={template.id}
                        onClick={() => setSelectedTemplate(template.id)}
                        className={`
                          service-card cursor-pointer
                          ${selectedTemplate === template.id ? 'highlighted' : ''}
                        `}
                      >
                        <h3 className="text-white font-semibold mb-1">{template.name}</h3>
                        <p className="text-gray-400 text-sm">{template.description}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Generate Script Button */}
              {selectedTemplate && (
                <div className="text-center mb-6">
                  <button
                    onClick={() => generateScript(selectedTemplate)}
                    disabled={isGenerating}
                    className="btn-secondary flex items-center gap-2 mx-auto"
                  >
                    <Wand2 className="w-5 h-5" />
                    {isGenerating ? 'Generating...' : 'Generate AI Script'}
                  </button>
                </div>
              )}

              {/* Script Editor */}
              <div className="space-y-4">
                <label className="block text-white font-semibold">Your Script</label>
                <textarea
                  value={scriptContent}
                  onChange={(e) => setScriptContent(e.target.value)}
                  placeholder="Write your script here or use the AI generator above..."
                  className="form-textarea w-full h-64 resize-none"
                />
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>{scriptContent.length} characters</span>
                  <span>Estimated duration: ~{Math.ceil(scriptContent.length / 200)} min</span>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Voice, Demo Content, or Effects & Text */}
          {activeStep === 2 && (
            <div className="space-y-6">
              {videoType === 'greenscreen-memes' ? (
                // Effects & Text content for greenscreen memes
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-white mb-2">Effects & Text</h2>
                    <p className="text-gray-400">Add visual effects, text overlays, and trending elements</p>
                  </div>

                  {/* Trending Background Effects */}
                  <div className="mb-8">
                    <h3 className="text-white font-semibold mb-4">🔥 Trending Backgrounds</h3>
                    <div className="services-grid">
                      <div className="service-card cursor-pointer highlighted">
                        <h3 className="text-white font-semibold mb-1">🌌 Galaxy Vibe</h3>
                        <p className="text-gray-400 text-sm">Cosmic space aesthetic • Viral on TikTok</p>
                      </div>
                      <div className="service-card cursor-pointer">
                        <h3 className="text-white font-semibold mb-1">🏢 Liminal Spaces</h3>
                        <p className="text-gray-400 text-sm">Eerie empty places • Horror aesthetic</p>
                      </div>
                      <div className="service-card cursor-pointer">
                        <h3 className="text-white font-semibold mb-1">🎮 PS2 Graphics</h3>
                        <p className="text-gray-400 text-sm">Retro gaming nostalgia • Gen Z favorite</p>
                      </div>
                      <div className="service-card cursor-pointer">
                        <h3 className="text-white font-semibold mb-1">🌊 Aesthetic Waves</h3>
                        <p className="text-gray-400 text-sm">Vaporwave vibes • Chill content</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Text Overlays */}
                  <div className="bg-gray-900/50 rounded-lg p-6 mb-6">
                    <h3 className="text-white font-semibold mb-4">💬 Text & Captions</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-white font-medium mb-2">Hook Text (First 3 seconds)</label>
                        <input
                          type="text"
                          placeholder="POV: When you realize..."
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:border-cyan-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2">Main Message</label>
                        <input
                          type="text"
                          placeholder="That awkward moment when..."
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:border-cyan-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2">Call to Action</label>
                        <input
                          type="text"
                          placeholder="Follow for more relatable content 💀"
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:border-cyan-500 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </>
              ) : videoType === 'ai-hook-demo' ? (
                // Demo Content Builder for AI Hook + Demo
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-white mb-2">Demo Content Builder</h2>
                    <p className="text-gray-400">Create compelling product demonstrations and social proof</p>
                  </div>

                  {/* Demo Type Selection */}
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3">Select Demo Type</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { id: 'screen-demo', icon: '📱', title: 'Screen Demo', desc: 'App/software walkthrough' },
                        { id: 'product-showcase', icon: '📦', title: 'Product Demo', desc: 'Physical product features' },
                        { id: 'results-proof', icon: '📈', title: 'Results Demo', desc: 'Before/after comparisons' }
                      ].map((demo) => (
                        <button
                          key={demo.id}
                          onClick={() => setSelectedDemoStrategy(demo.id)}
                          className={`p-4 rounded-xl border transition-all duration-300 flex flex-col items-center gap-2 ${
                            selectedDemoStrategy === demo.id 
                              ? 'bg-gradient-to-r from-purple-400/20 to-cyan-400/20 border-purple-400' 
                              : 'bg-gray-700/50 border-gray-600 hover:border-gray-500'
                          }`}
                        >
                          <div className="text-2xl">{demo.icon}</div>
                          <span className="text-white font-medium">{demo.title}</span>
                          <span className="text-gray-400 text-sm text-center">{demo.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Demo Upload */}
                  <div className="bg-gray-900/50 rounded-lg p-6 mb-6">
                    <h4 className="text-white font-medium mb-3">📁 Upload Your Demo Assets</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border-2 border-dashed border-gray-600 rounded-lg p-4 text-center hover:border-gray-500 transition-colors">
                        <div className="text-2xl mb-2">🎥</div>
                        <p className="text-gray-300 text-sm mb-2">Demo Video/Screen Recording</p>
                        <button className="bg-gradient-to-r from-purple-400 to-cyan-400 text-gray-900 px-4 py-1 rounded text-sm font-medium">
                          Upload Video
                        </button>
                      </div>
                      <div className="border-2 border-dashed border-gray-600 rounded-lg p-4 text-center hover:border-gray-500 transition-colors">
                        <div className="text-2xl mb-2">📊</div>
                        <p className="text-gray-300 text-sm mb-2">Charts/Results/Screenshots</p>
                        <button className="bg-gradient-to-r from-purple-400 to-cyan-400 text-gray-900 px-4 py-1 rounded text-sm font-medium">
                          Upload Images
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                // Regular Voice Selection for AI Slideshow
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-white mb-2">Choose Your Voice</h2>
                    <p className="text-gray-400">Select a voice that matches your content style</p>
                  </div>

                  <div className="services-grid">
                    {voices.map((voice) => (
                      <div
                        key={voice.id}
                        onClick={() => setSelectedVoice(voice.id)}
                        className={`
                          service-card cursor-pointer
                          ${selectedVoice === voice.id ? 'highlighted' : ''}
                        `}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-white font-semibold">{voice.name}</h3>
                          <button className="text-cyan-400 hover:text-cyan-300">
                            <Play className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-gray-400 text-sm mb-1">{voice.accent} • {voice.gender}</p>
                        <p className="text-gray-500 text-sm">{voice.description}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Voice Settings */}
              {selectedVoice && videoType !== 'ai-hook-demo' && (
                <div className="glass-card p-6 space-y-4">
                  <h3 className="text-white font-semibold mb-4">Voice Settings</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Speed: {voiceSpeed}x
                      </label>
                      <input
                        type="range"
                        min="0.5"
                        max="2"
                        step="0.1"
                        value={voiceSpeed}
                        onChange={(e) => setVoiceSpeed(parseFloat(e.target.value))}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-gray-400 mt-1">
                        <span>Slower</span>
                        <span>Faster</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <button className="btn-secondary flex items-center gap-2">
                        <Volume2 className="w-4 h-4" />
                        Preview Voice
                      </button>
                      <button className="btn-primary flex items-center gap-2">
                        <Mic className="w-4 h-4" />
                        Record Custom
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Background or Voice & Audio for AI Hook + Demo */}
          {activeStep === 3 && (
            <div className="space-y-6">
              {videoType === 'greenscreen-memes' ? (
                // Finalize for greenscreen memes
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-white mb-2">Finalize Your Meme</h2>
                    <p className="text-gray-400">Review and export your viral content</p>
                  </div>

                  <div className="bg-gray-900/50 rounded-lg p-6 text-center">
                    <div className="text-4xl mb-4">🎬</div>
                    <h3 className="text-white font-semibold mb-2">Video Preview</h3>
                    <p className="text-gray-400 mb-4">Your meme is ready for the world!</p>
                    
                    <div className="flex gap-4 justify-center">
                      <button className="bg-gradient-to-r from-green-400 to-cyan-400 text-gray-900 px-6 py-3 rounded-xl font-semibold hover:from-green-500 hover:to-cyan-500 transition-all duration-300 flex items-center gap-2">
                        <Download className="w-5 h-5" />
                        Export Video
                      </button>
                      <button className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors flex items-center gap-2">
                        <Share2 className="w-5 h-5" />
                        Share
                      </button>
                    </div>
                  </div>
                </>
              ) : videoType === 'ai-hook-demo' ? (
                // Voice & Audio for AI Hook + Demo
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-white mb-2">Voice & Audio</h2>
                    <p className="text-gray-400">Perfect your hook's audio for maximum impact</p>
                  </div>

                  {/* Voice Selection */}
                  <div className="mb-8">
                    <h3 className="text-white font-semibold mb-4">🎙️ Choose Your Voice</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {voices.slice(0, 4).map((voice) => (
                        <div
                          key={voice.id}
                          onClick={() => setSelectedVoice(voice.id)}
                          className={`
                            p-4 rounded-xl border transition-all duration-300 cursor-pointer
                            ${selectedVoice === voice.id 
                              ? 'bg-gradient-to-r from-purple-400/20 to-cyan-400/20 border-purple-400' 
                              : 'bg-gray-700/50 border-gray-600 hover:border-gray-500'
                            }
                          `}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-white font-medium">{voice.name}</h4>
                              <p className="text-gray-400 text-sm">{voice.accent} • {voice.description}</p>
                            </div>
                            <button className="text-cyan-400 hover:text-cyan-300">
                              <Play className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hook-Specific Music */}
                  <div className="mb-8">
                    <h3 className="text-white font-semibold mb-4">🎵 Hook Music Selection</h3>
                    <div className="space-y-4">
                      <div
                        onClick={() => setSelectedMusic('urgency-builder')}
                        className={`
                          p-4 rounded-lg border transition-all duration-300 cursor-pointer flex items-center justify-between
                          ${selectedMusic === 'urgency-builder' 
                            ? 'bg-gradient-to-r from-red-400/20 to-orange-400/20 border-red-400' 
                            : 'bg-gray-700/50 border-gray-600 hover:border-gray-500'
                          }
                        `}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                            <Music className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium">Urgency Builder</h4>
                            <p className="text-gray-400 text-sm">Creates tension • Perfect for problem hooks</p>
                          </div>
                        </div>
                        <button className="text-green-400 hover:text-green-300">
                          <Play className="w-4 h-4" />
                        </button>
                      </div>

                      <div
                        onClick={() => setSelectedMusic('success-energy')}
                        className={`
                          p-4 rounded-lg border transition-all duration-300 cursor-pointer flex items-center justify-between
                          ${selectedMusic === 'success-energy' 
                            ? 'bg-gradient-to-r from-green-400/20 to-cyan-400/20 border-green-400' 
                            : 'bg-gray-700/50 border-gray-600 hover:border-gray-500'
                          }
                        `}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center">
                            <Music className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium">Success Energy</h4>
                            <p className="text-gray-400 text-sm">Uplifting vibes • Great for solution reveals</p>
                          </div>
                        </div>
                        <button className="text-green-400 hover:text-green-300">
                          <Play className="w-4 h-4" />
                        </button>
                      </div>

                      <div
                        onClick={() => setSelectedMusic('trust-building')}
                        className={`
                          p-4 rounded-lg border transition-all duration-300 cursor-pointer flex items-center justify-between
                          ${selectedMusic === 'trust-building' 
                            ? 'bg-gradient-to-r from-blue-400/20 to-purple-400/20 border-blue-400' 
                            : 'bg-gray-700/50 border-gray-600 hover:border-gray-500'
                          }
                        `}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                            <Music className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium">Trust Building</h4>
                            <p className="text-gray-400 text-sm">Professional tone • Perfect for authority</p>
                          </div>
                        </div>
                        <button className="text-green-400 hover:text-green-300">
                          <Play className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Voice Settings */}
                  {selectedVoice && (
                    <div className="bg-gray-900/50 rounded-lg p-6">
                      <h3 className="text-white font-semibold mb-4">🎛️ Audio Settings</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-white font-medium mb-2">
                            Speed: {voiceSpeed}x
                          </label>
                          <input
                            type="range"
                            min="0.5"
                            max="2"
                            step="0.1"
                            value={voiceSpeed}
                            onChange={(e) => setVoiceSpeed(parseFloat(e.target.value))}
                            className="w-full"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                // Background Selection for AI Slideshow
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-white mb-2">Choose Background</h2>
                    <p className="text-gray-400">Select visuals that complement your content</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-white font-semibold mb-4">Background Type</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {backgroundTypes.map((type) => (
                          <button
                            key={type.id}
                            onClick={() => setSelectedBackground(type.id)}
                            className={`
                              p-4 rounded-xl border transition-all duration-300 flex flex-col items-center gap-2
                              ${selectedBackground === type.id 
                                ? 'bg-gradient-to-r from-purple-400/20 to-cyan-400/20 border-purple-400' 
                                : 'bg-gray-700/50 border-gray-600 hover:border-gray-500'
                              }
                            `}
                          >
                            <type.icon className="w-8 h-8 text-cyan-400" />
                            <span className="text-white font-medium">{type.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {selectedBackground && (
                      <div>
                        <h3 className="text-white font-semibold mb-4">Choose Background</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {backgroundLibrary.map((bg) => (
                            <div key={bg.id} className="service-card cursor-pointer text-center">
                              <div className="text-4xl mb-2">{bg.thumbnail}</div>
                              <h4 className="text-white font-medium text-sm">{bg.name}</h4>
                              <span className="text-gray-400 text-xs">{bg.type}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          )}

          {/* Step 4: Finalize (for AI Slideshow and AI Hook + Demo) */}
          {activeStep === 4 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Finalize Your Video</h2>
                <p className="text-gray-400">Review settings and export your content</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Export Settings */}
                <div className="bg-gray-900/50 rounded-lg p-6">
                  <h3 className="text-white font-semibold mb-4">Export Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-white font-medium mb-2">Format</label>
                      <select 
                        value={exportSettings.format}
                        onChange={(e) => setExportSettings({...exportSettings, format: e.target.value})}
                        className="form-select w-full"
                      >
                        <option value="mp4">MP4 (Recommended)</option>
                        <option value="mov">MOV</option>
                        <option value="avi">AVI</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Quality</label>
                      <select 
                        value={exportSettings.quality}
                        onChange={(e) => setExportSettings({...exportSettings, quality: e.target.value})}
                        className="form-select w-full"
                      >
                        <option value="1080p">1080p (HD)</option>
                        <option value="720p">720p</option>
                        <option value="4k">4K (Ultra HD)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Duration</label>
                      <select 
                        value={exportSettings.duration}
                        onChange={(e) => setExportSettings({...exportSettings, duration: e.target.value})}
                        className="form-select w-full"
                      >
                        <option value="15s">15 seconds</option>
                        <option value="30s">30 seconds</option>
                        <option value="60s">60 seconds</option>
                        <option value="custom">Custom</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Video Preview */}
                <div className="bg-gray-900/50 rounded-lg p-6 text-center">
                  <h3 className="text-white font-semibold mb-4">Preview</h3>
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-4 flex items-center justify-center border border-gray-700">
                    <div className="text-6xl opacity-60">🎬</div>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">Your video preview will appear here</p>
                  <button className="btn-secondary flex items-center gap-2 mx-auto">
                    <Eye className="w-4 h-4" />
                    Preview Video
                  </button>
                </div>
              </div>

              {/* Export Actions */}
              <div className="text-center">
                <div className="flex gap-4 justify-center">
                  <button className="bg-gradient-to-r from-green-400 to-cyan-400 text-gray-900 px-8 py-3 rounded-xl font-semibold hover:from-green-500 hover:to-cyan-500 transition-all duration-300 flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Export Video
                  </button>
                  <button className="bg-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors flex items-center gap-2">
                    <Share2 className="w-5 h-5" />
                    Share to Social Media
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-700">
          <button
            onClick={handlePrevious}
            disabled={activeStep === 1}
            className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>
          
          <div className="text-gray-400">
            Step {activeStep} of {steps.length}
          </div>
          
          <button
            onClick={handleNext}
            disabled={activeStep === steps.length}
            className="btn-secondary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {activeStep === steps.length ? 'Complete' : 'Next'}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateVideo;
