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
          { id: 'product-demo', name: 'Product Demo', description: 'Showcase your product features' },
          { id: 'app-review', name: 'App Review', description: 'Review and demonstrate mobile apps' },
          { id: 'tutorial', name: 'Quick Tutorial', description: 'Step-by-step tutorial content' },
          { id: 'comparison', name: 'Before vs After', description: 'Show transformations or comparisons' }
        ];
      case 'greenscreen-memes':
        return [
          { id: 'reaction-meme', name: 'Reaction Meme', description: 'React to trending topics' },
          { id: 'storytelling', name: 'Story Time', description: 'Tell engaging stories with visuals' },
          { id: 'comedy-sketch', name: 'Comedy Sketch', description: 'Short funny skits and jokes' },
          { id: 'trending-topic', name: 'Trending Topic', description: 'Jump on current trends' }
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
      'educational': `🎯 Today I'll show you the #1 mistake people make when learning a new skill...

And how to avoid it in just 5 minutes!

👋 Hey everyone! Have you ever started learning something new, felt excited for a week, and then just... stopped?

🤔 Here's the truth: 95% of people fail because they try to learn everything at once.

✅ Instead, do this:
- Pick ONE specific sub-skill
- Practice it for 15 minutes daily
- Master it before moving on

💡 For example: If you want to learn guitar, don't try to learn chords, scales, and songs simultaneously. Just focus on 3 basic chords first.

🚀 This approach works because your brain can actually retain and build upon focused learning.

Try this method for 30 days and watch your progress skyrocket! 📈

Drop a 🔥 if you're ready to try this!`,

      'motivational': `✨ "The only impossible journey is the one you never begin." - Tony Robbins

🌅 Every morning, you have a choice:
- Stay in your comfort zone
- Or step into your growth zone

💪 That dream you've been thinking about? 
That goal you wrote down months ago?
That skill you want to learn?

⏰ TODAY is the day to start.

🎯 Not tomorrow.
Not next week.
Not when you "feel ready."

🔥 Champions aren't made in comfort zones. They're forged in the fire of consistent action.

⚡ Your future self is counting on the decision you make RIGHT NOW.

💫 Stop waiting for permission. Stop waiting for the "perfect moment."

🚀 START TODAY. Take one small step. Then another. Then another.

Your dreams are waiting! 🌟`,

      'facts': `🤯 Mind-Blowing Facts That Will Change How You See the World!

#1: Your brain uses 20% of your body's energy - that's why thinking hard makes you tired! 🧠

#2: Honey never spoils. Archaeologists found 3000-year-old honey that's still edible! 🍯

#3: A single cloud weighs about 1.1 million pounds - the same as 100 elephants! ☁️

#4: Your stomach gets completely new lining every 3-4 days because stomach acid would digest it! 🔄

#5: If you folded a piece of paper 42 times, it would reach the moon! 🌙

#6: Bananas are berries, but strawberries aren't! 🍌🍓

#7: The human brain has 86 billion neurons - more than there are stars in the Milky Way! ⭐

#8: You share 50% of your DNA with bananas! 🧬

Which fact surprised you the most? Drop it in the comments! 👇`,

      'listicle': `🔥 Top 10 Life Hacks That Will Save You Hours Every Day!

#10: Use the 2-minute rule - if it takes less than 2 minutes, do it now! ⏱️

#9: Batch similar tasks together - answer all emails at once, not throughout the day 📧

#8: Use voice messages instead of typing long texts - 3x faster! 🎤

#7: Prep your clothes the night before - never waste morning time deciding what to wear 👔

#6: Use the Pomodoro Technique - 25 minutes focused work, 5 minute break 🍅

#5: Automate bill payments - never waste time or mental energy on due dates 💳

#4: Use grocery pickup/delivery - saves 1+ hours per week 🛒

#3: Learn keyboard shortcuts - can save 2+ hours daily for computer work ⌨️

#2: Time-block your calendar - treat your time like scheduled meetings 📅

#1: Say NO to non-essential requests - protect your time like it's your most valuable asset! 🚫

Which one will you try first? Comment below! 👇`,

      'product-demo': `🚀 This App Will Change How You [Do X] Forever!

👋 Hey everyone! Today I'm testing out this game-changing app that promises to [solve specific problem].

🎯 Here's what I'm looking for:
- Does it actually work?
- Is it worth the money?
- Would I recommend it to you?

⚡ First impressions: The interface is clean and intuitive. Setup took literally 30 seconds.

🔥 The Features:
✅ [Feature 1] - Works flawlessly
✅ [Feature 2] - Exceeded expectations  
✅ [Feature 3] - Game changer!

💰 Pricing: $X/month (but there's a free version!)

🤔 The Verdict:
Pros: [List 2-3 pros]
Cons: [List 1-2 cons]

⭐ Overall Rating: 4.5/5 stars

💡 Perfect for: [Target audience]
❌ Skip if: [Who shouldn't use it]

🔗 Link in bio if you want to try it!

What questions do you have about this app? 👇`,

      'app-review': `📱 I Used This Viral App for 30 Days - Here's My Honest Review

🎯 The Promise: [App name] claims to [main benefit] in just [time frame]

Day 1: Downloaded and set up - First impressions were [positive/negative]

Week 1: Starting to see [specific results]. The [feature] is actually pretty cool!

Week 2: [Specific example of progress/issues]. The [feature] needs work though.

Week 3: Major breakthrough! [Specific achievement]. Finally understanding why people love this.

Week 4: [Final results]. Here's everything I learned...

✅ What Works:
- [Specific feature and why]
- [Specific feature and why]
- [Specific feature and why]

❌ What Doesn't:
- [Specific issue and why]
- [Specific issue and why]

💰 Cost: $X/month (worth it? Keep watching...)

🏆 Final Verdict: [Rating/10]

💡 Best For: [Type of person]
⚠️ Avoid If: [Type of person]

Would you try this app? Let me know! 👇`,

      'tutorial': `🎓 Master This Skill in 5 Minutes! (Complete Beginner Guide)

🎯 What You'll Learn:
- [Skill] basics
- Common mistakes to avoid
- Pro tips that took me years to learn

⚡ Why This Matters:
[Brief explanation of benefits]

🔥 Let's Start:

Step 1: [First step with clear instruction]
💡 Pro Tip: [Helpful tip]

Step 2: [Second step with clear instruction]
⚠️ Common Mistake: [What to avoid]

Step 3: [Third step with clear instruction]
🚀 Advanced Tip: [Next level advice]

Step 4: [Fourth step with clear instruction]
✅ Success Check: [How to know you did it right]

🎯 Practice Challenge:
Try [specific exercise] for the next 7 days

💪 Results You'll See:
- [Specific benefit 1]
- [Specific benefit 2]
- [Specific benefit 3]

🔄 Next Steps: [What to learn next]

Drop a 💯 if this helped you!`,

      'comparison': `⚡ Before vs After: The Transformation That Changed Everything!

🎯 The Challenge: [Specific problem/situation]

❌ BEFORE:
- [Specific problem 1]
- [Specific problem 2]  
- [Specific problem 3]
- [Emotional state/frustration]

💡 The Solution: [What changed]

✅ AFTER:
- [Specific improvement 1]
- [Specific improvement 2]
- [Specific improvement 3]
- [New emotional state/confidence]

⏰ Timeline: This transformation took [time period]

🔥 The Key Changes:
1. [Most important change and why]
2. [Second most important change and why]
3. [Third most important change and why]

💰 Investment: [Time/money cost]
🏆 Results: [Specific measurable outcomes]

🚀 The #1 Thing That Made the Difference:
[Most crucial factor]

💡 Your Turn:
If you're dealing with [similar problem], try [specific advice]

📈 Track your progress and share your results!

What's your biggest challenge right now? 👇`,

      'reaction-meme': `😂 When [Relatable Situation] Happens...

🎭 Me: *Confidently starts [activity]*

🧠 My Brain: "You got this!"

⚡ Reality: [Humorous unexpected outcome]

😅 Also Me: "Why do I keep doing this to myself?"

🤔 Every Single Time:
- Step 1: Feel confident
- Step 2: Start the thing
- Step 3: Immediate regret
- Step 4: Somehow succeed anyway
- Step 5: Forget the struggle and repeat

💭 The Internal Dialogue:
"I'm never doing this again"
*5 minutes later*
"Actually, maybe just one more time..."

🎯 The Cycle:
Confidence → Action → Panic → Success → Amnesia → Repeat

😂 Who else lives this chaotic life?

Tag someone who needs to see this! 👇`,

      'storytelling': `📚 The Day Everything Changed - A True Story

🌅 It started like any ordinary Tuesday...

☕ I was drinking my morning coffee when I got a text that would change everything.

📱 "Check your email. NOW."

🤔 My heart sank. Was it good news? Bad news? I honestly couldn't tell.

💻 I opened my laptop with shaking hands...

📧 The subject line: "Your Application Status"

⏰ For 3 months, I'd been waiting for this moment.

🎯 The email said: [Reveal the news]

😱 I literally screamed! My neighbor probably thought I was being murdered.

🔥 But here's the crazy part...

💡 This wasn't just luck. I'd been preparing for this moment for [time period].

⚡ The secret? [Key lesson learned]

🚀 The lesson: [Broader life lesson]

💪 Today, [current status/achievement]

🎯 The Point: [Motivational message]

✨ Sometimes the best things happen when you least expect them.

What's a moment that changed your life? Share below! 👇`,

      'comedy-sketch': `🎭 When You Try to Be Healthy for Exactly One Day...

🌅 Day 1 - 6 AM:
"I'm going to drink water, eat salad, and exercise!"

☕ Day 1 - 6:05 AM:
"But first, coffee. Coffee is basically water."

🥗 Day 1 - 12 PM:
"This salad is great! I feel amazing!"

🍕 Day 1 - 12:30 PM:
"Well, one slice of pizza won't hurt..."

🏃 Day 1 - 6 PM:
"Time for my evening run!"

🛋️ Day 1 - 6:01 PM:
"Actually, the couch looks really comfortable."

🌙 Day 1 - 10 PM:
"I'll start fresh tomorrow. Today was just practice."

📱 Day 2 - 6 AM:
*Orders DoorDash*

🤷 Day 2 - 6:05 AM:
"Health is a journey, not a destination."

💭 Day 2 - 12 PM:
"I'll be healthy next Monday. Monday is perfect for starting things."

😂 Who else has lived this exact experience?

Tag your partner in (failed) healthy living! 👇`,

      'trending-topic': `🔥 Everyone's Talking About [Current Trend] - Here's My Take

📱 So apparently [trending topic] is everywhere right now...

🤔 At first I thought: "This is just another internet thing"

👀 But then I actually looked into it and...

💡 Here's what's actually happening:
[Explanation of the trend]

🎯 Why It Matters:
[Significance or impact]

📈 The Numbers:
- [Relevant statistic 1]
- [Relevant statistic 2]
- [Relevant statistic 3]

🔥 My Honest Opinion:
[Your take on the trend]

✅ What I Like:
- [Positive aspect 1]
- [Positive aspect 2]

❌ What Concerns Me:
- [Concern 1]
- [Concern 2]

🚀 Where This Goes Next:
[Prediction about future]

💭 The Real Question:
[Thought-provoking question]

🎯 My Advice:
[Practical guidance]

What's your take on this trend? 👇`
    };

    const generatedScript = scripts[template as keyof typeof scripts] || 'Generated script content would appear here...';
    setScriptContent(generatedScript);
    setIsGenerating(false);
  };

  const handleNext = () => {
    if (activeStep < 4) {
      onStepChange(activeStep + 1);
    }
  };

  const handlePrevious = () => {
    if (activeStep > 1) {
      onStepChange(activeStep - 1);
    }
  };

  const steps = [
    { number: 1, name: 'Script', icon: '📝' },
    { number: 2, name: 'Voice', icon: '🎙️' },
    { number: 3, name: 'Background', icon: '🎨' },
    { number: 4, name: 'Finalize', icon: '✨' }
  ];

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
    { id: 'ambient', name: 'Ambient Soundscape', mood: 'Calm', duration: '5:33' }
  ];

  return (
    <div className="min-h-screen bg-black p-2">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <p className="section-subtitle">CREATIVE MIND, CREATIVE WORKS</p>
          <h1 className="section-title">
            {getVideoTypeTitle(videoType)}
          </h1>
          <p className="text-gray-400">
            Follow the steps below to create your video
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`
                  step-indicator
                  ${activeStep >= step.number ? 'active' : ''}
                  ${activeStep > step.number ? 'completed' : ''}
                `}>
                  {step.icon}
                </div>
                <div className="ml-3">
                  <div className={`font-semibold ${activeStep >= step.number ? 'text-white' : 'text-gray-400'}`}>
                    {step.name}
                  </div>
                  <div className="text-sm text-gray-500">Step {step.number}</div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${activeStep > step.number ? 'bg-cyan-400' : 'bg-gray-700'}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="glass-card p-8 mb-8">{/* ${activeStep >= step.number ? 'bg-gradient-to-r from-green-400 to-cyan-400 text-gray-900' : 'bg-gray-700 text-gray-400'} */}
          {/* Step 1: Script */}
          {activeStep === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Create Your Script</h2>
                <p className="text-gray-400">Choose a template or write your own script</p>
              </div>

              {/* Template Selection */}
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

          {/* Step 2: Voice */}
          {activeStep === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Choose Your Voice</h2>
                <p className="text-gray-400">Select a voice that matches your content style</p>
              </div>

              {/* Voice Selection */}
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

              {/* Voice Settings */}
              {selectedVoice && (
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

          {/* Step 3: Background */}
          {activeStep === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Choose Background & Music</h2>
                <p className="text-gray-400">Select visuals and audio to enhance your video</p>
              </div>

              {/* Background Type Selection */}
              <div className="mb-6">
                <h3 className="text-white font-semibold mb-4">Background Type</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {backgroundTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedBackground(type.id)}
                      className={`
                        p-4 rounded-xl border transition-all duration-300 flex items-center gap-3
                        ${selectedBackground === type.id 
                          ? 'bg-gradient-to-r from-green-400/20 to-cyan-400/20 border-green-400' 
                          : 'bg-gray-700/50 border-gray-600 hover:border-gray-500'}
                      `}
                    >
                      <type.icon className="w-5 h-5 text-green-400" />
                      <span className="text-white font-medium">{type.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Background Library */}
              {selectedBackground && (
                <div className="mb-6">
                  <h3 className="text-white font-semibold mb-4">Background Library</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {backgroundLibrary.map((bg) => (
                      <div
                        key={bg.id}
                        className="relative bg-gray-700 rounded-xl p-4 cursor-pointer hover:bg-gray-600 transition-colors group"
                      >
                        <div className="text-4xl mb-2">{bg.thumbnail}</div>
                        <h4 className="text-white font-medium">{bg.name}</h4>
                        <p className="text-gray-400 text-sm capitalize">{bg.type}</p>
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="w-5 h-5 text-green-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Music Selection */}
              <div>
                <h3 className="text-white font-semibold mb-4">Background Music</h3>
                <div className="space-y-2">
                  {musicTracks.map((track) => (
                    <div
                      key={track.id}
                      onClick={() => setSelectedMusic(track.id)}
                      className={`
                        p-3 rounded-lg border cursor-pointer transition-all duration-300 flex items-center justify-between
                        ${selectedMusic === track.id 
                          ? 'bg-gradient-to-r from-green-400/20 to-cyan-400/20 border-green-400' 
                          : 'bg-gray-700/50 border-gray-600 hover:border-gray-500'}
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <Music className="w-5 h-5 text-green-400" />
                        <div>
                          <h4 className="text-white font-medium">{track.name}</h4>
                          <p className="text-gray-400 text-sm">{track.mood} • {track.duration}</p>
                        </div>
                      </div>
                      <button className="text-green-400 hover:text-green-300">
                        <Play className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Finalize */}
          {activeStep === 4 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Finalize Your Video</h2>
                <p className="text-gray-400">Review settings and export your video</p>
              </div>

              {/* Export Settings */}
              <div className="bg-gray-700/30 rounded-xl p-6 mb-6">
                <h3 className="text-white font-semibold mb-4">Export Settings</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">Format</label>
                    <select
                      value={exportSettings.format}
                      onChange={(e) => setExportSettings({...exportSettings, format: e.target.value})}
                      className="w-full bg-gray-600 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                      <option value="mp4">MP4</option>
                      <option value="mov">MOV</option>
                      <option value="avi">AVI</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Quality</label>
                    <select
                      value={exportSettings.quality}
                      onChange={(e) => setExportSettings({...exportSettings, quality: e.target.value})}
                      className="w-full bg-gray-600 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                      <option value="720p">720p HD</option>
                      <option value="1080p">1080p Full HD</option>
                      <option value="4k">4K Ultra HD</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Duration</label>
                    <select
                      value={exportSettings.duration}
                      onChange={(e) => setExportSettings({...exportSettings, duration: e.target.value})}
                      className="w-full bg-gray-600 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                      <option value="30s">30 seconds</option>
                      <option value="60s">60 seconds</option>
                      <option value="90s">90 seconds</option>
                      <option value="120s">2 minutes</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Video Summary */}
              <div className="bg-gray-700/30 rounded-xl p-6 mb-6">
                <h3 className="text-white font-semibold mb-4">Video Summary</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-white">Script: {scriptContent.length} characters</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-white">Voice: {selectedVoice || 'Not selected'}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-white">Background: {selectedBackground || 'Not selected'}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-white">Music: {selectedMusic || 'Not selected'}</span>
                  </div>
                </div>
              </div>

              {/* Preview */}
              <div className="bg-gray-700/30 rounded-xl p-6 mb-6">
                <h3 className="text-white font-semibold mb-4">Preview</h3>
                <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Eye className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-400">Video preview will appear here</p>
                    <button className="mt-4 bg-green-400 text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-green-500 transition-colors">
                      Generate Preview
                    </button>
                  </div>
                </div>
              </div>

              {/* Export Actions */}
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
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
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
            disabled={activeStep === 4}
            className="btn-secondary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {activeStep === 4 ? 'Complete' : 'Next'}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateVideo;
