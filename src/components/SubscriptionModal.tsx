'use client';

import React, { useState } from 'react';
import { X, Check, CreditCard, Smartphone, DollarSign, Star, Zap, Video, Clock, Users, Shield } from 'lucide-react';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPlan?: string;
}

const SubscriptionModal: React.FC<SubscriptionModalProps> = ({ isOpen, onClose, currentPlan = 'basic' }) => {
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(currentPlan);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: 9,
      originalPrice: 15,
      description: 'Perfect for getting started',
      features: [
        'Up to 5 videos per month',
        'AI Slideshow creation',
        'Basic voice synthesis',
        'Standard video quality',
        'Email support',
        '1GB storage'
      ],
      limitations: [
        'No AI Hook + Demo',
        'No Greenscreen Memes',
        'No automation features'
      ],
      color: 'gray',
      popular: false
    },
    {
      id: 'regular',
      name: 'Regular',
      price: 19,
      originalPrice: 29,
      description: 'Most popular for content creators',
      features: [
        'Up to 25 videos per month',
        'All video types (Slideshow, Hook+Demo, Memes)',
        'Premium voice synthesis',
        'HD video quality',
        'Priority email support',
        'Basic automation',
        '10GB storage',
        'Social media scheduling'
      ],
      limitations: [
        'Limited automation workflows',
        'No custom branding'
      ],
      color: 'cyan',
      popular: true
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 39,
      originalPrice: 59,
      description: 'For professional creators and businesses',
      features: [
        'Unlimited videos',
        'All video types + premium templates',
        'Custom voice cloning',
        '4K video quality',
        '24/7 priority support',
        'Advanced automation workflows',
        'Custom branding & watermarks',
        'Unlimited storage',
        'Analytics dashboard',
        'Team collaboration',
        'API access'
      ],
      limitations: [],
      color: 'purple',
      popular: false
    }
  ];

  const paymentMethods = [
    { id: 'card', name: 'Credit/Debit Card', icon: CreditCard, description: 'Visa, Mastercard, American Express' },
    { id: 'paypal', name: 'PayPal', icon: DollarSign, description: 'Pay with your PayPal account' },
    { id: 'apple', name: 'Apple Pay', icon: Smartphone, description: 'Quick payment with Touch ID' }
  ];

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setStep(3);
    }, 2000);
  };

  const handleComplete = () => {
    onClose();
    // Reset modal state
    setTimeout(() => {
      setStep(1);
      setSelectedPlan(currentPlan);
      setPaymentMethod('card');
    }, 300);
  };

  if (!isOpen) return null;

  const selectedPlanData = plans.find(plan => plan.id === selectedPlan);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="glass-card max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-700/50">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Subscription Management</h2>
            <p className="text-gray-400 text-sm sm:text-base">Step {step} of 3</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4 border-b border-gray-700/50">
          <div className="flex items-center">
            {[1, 2, 3].map((stepNumber) => (
              <React.Fragment key={stepNumber}>
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors
                  ${step >= stepNumber 
                    ? 'bg-cyan-500 text-black' 
                    : 'bg-gray-700 text-gray-400'
                  }
                `}>
                  {step > stepNumber ? <Check className="w-4 h-4" /> : stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`
                    flex-1 h-2 mx-3 rounded-full transition-colors
                    ${step > stepNumber ? 'bg-cyan-500' : 'bg-gray-700'}
                  `} />
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm">
            <span className={step >= 1 ? 'text-cyan-400' : 'text-gray-400'}>Choose Plan</span>
            <span className={step >= 2 ? 'text-cyan-400' : 'text-gray-400'}>Payment</span>
            <span className={step >= 3 ? 'text-cyan-400' : 'text-gray-400'}>Complete</span>
          </div>
        </div>

        {/* Step Content */}
        <div className="p-6">
          {/* Step 1: Plan Selection */}
          {step === 1 && (
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Choose Your Plan</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`
                      relative p-6 rounded-lg border transition-all duration-300 cursor-pointer
                      ${selectedPlan === plan.id
                        ? 'border-cyan-500 bg-cyan-500/10 shadow-lg shadow-cyan-500/20'
                        : 'border-gray-700/50 bg-gray-900/50 hover:border-gray-600'
                      }
                    `}
                    onClick={() => handlePlanSelect(plan.id)}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-cyan-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                          MOST POPULAR
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
                      <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-3xl font-bold text-white">${plan.price}</span>
                        <span className="text-gray-400">/month</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-gray-500 line-through">${plan.originalPrice}</span>
                        <span className="text-green-400 text-sm font-medium">
                          Save ${plan.originalPrice - plan.price}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                      {plan.limitations.map((limitation, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <X className="w-4 h-4 text-gray-500 flex-shrink-0" />
                          <span className="text-gray-500 text-sm">{limitation}</span>
                        </div>
                      ))}
                    </div>

                    {selectedPlan === plan.id && (
                      <div className="absolute top-4 right-4">
                        <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-black" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Payment Method */}
          {step === 2 && selectedPlanData && (
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Payment Information</h3>
              
              {/* Order Summary */}
              <div className="bg-gray-900/50 rounded-lg p-6 mb-6 border border-gray-700/50">
                <h4 className="text-white font-semibold mb-4">Order Summary</h4>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300">{selectedPlanData.name} Plan (Monthly)</span>
                  <span className="text-white font-semibold">${selectedPlanData.price}.00</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300">Discount</span>
                  <span className="text-green-400">-${selectedPlanData.originalPrice - selectedPlanData.price}.00</span>
                </div>
                <div className="border-t border-gray-700/50 pt-2 mt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold">Total</span>
                    <span className="text-cyan-400 font-bold text-lg">${selectedPlanData.price}.00/month</span>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-4">Choose Payment Method</h4>
                <div className="space-y-3">
                  {paymentMethods.map((method) => {
                    const Icon = method.icon;
                    return (
                      <button
                        key={method.id}
                        onClick={() => setPaymentMethod(method.id)}
                        className={`
                          w-full p-4 rounded-lg border transition-all duration-300 text-left
                          ${paymentMethod === method.id
                            ? 'border-cyan-500 bg-cyan-500/10'
                            : 'border-gray-700/50 bg-gray-900/50 hover:border-gray-600'
                          }
                        `}
                      >
                        <div className="flex items-center gap-4">
                          <Icon className="w-6 h-6 text-cyan-400" />
                          <div className="flex-1">
                            <div className="text-white font-medium">{method.name}</div>
                            <div className="text-gray-400 text-sm">{method.description}</div>
                          </div>
                          {paymentMethod === method.id && (
                            <Check className="w-5 h-5 text-cyan-400" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Payment Form */}
              {paymentMethod === 'card' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Card Number</label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="form-input w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Cardholder Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="form-input w-full"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Expiry Date</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="form-input w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        className="form-input w-full"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Completion */}
          {step === 3 && selectedPlanData && (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Payment Successful!</h3>
              <p className="text-gray-400 mb-6">
                Welcome to the {selectedPlanData.name} plan! Your subscription is now active.
              </p>
              
              <div className="bg-gray-900/50 rounded-lg p-6 mb-6 text-left max-w-md mx-auto border border-gray-700/50">
                <h4 className="text-white font-semibold mb-4">Subscription Details</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Plan:</span>
                    <span className="text-white">{selectedPlanData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Price:</span>
                    <span className="text-white">${selectedPlanData.price}/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Next Billing:</span>
                    <span className="text-white">Aug 9, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Status:</span>
                    <span className="text-green-400">Active</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm mb-6">
                A confirmation email has been sent to your registered email address.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700/50 p-6 flex justify-between">
          <button
            onClick={step === 1 ? onClose : handleBack}
            className="btn-primary"
            disabled={isProcessing}
          >
            {step === 1 ? 'Cancel' : 'Back'}
          </button>
          
          <div className="flex gap-3">
            {step === 1 && (
              <button
                onClick={handleNext}
                className="btn-secondary"
              >
                Continue with {selectedPlanData?.name}
              </button>
            )}
            
            {step === 2 && (
              <button
                onClick={handlePayment}
                disabled={isProcessing}
                className="btn-secondary"
              >
                {isProcessing ? 'Processing...' : `Pay $${selectedPlanData?.price}`}
              </button>
            )}
            
            {step === 3 && (
              <button
                onClick={handleComplete}
                className="btn-secondary"
              >
                Get Started
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionModal;
