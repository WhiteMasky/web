'use client';

import { useState } from 'react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const plans = [
    {
      name: "Basic",
      description: "Perfect for recreational players",
      monthlyPrice: 9.99,
      annualPrice: 7.99,
      features: [
        "Basic stroke analysis",
        "5 match recordings per month",
        "Performance tracking",
        "Email support",
        "1 user"
      ],
      cta: "Start Free Trial",
      highlighted: false
    },
    {
      name: "Pro",
      description: "For serious players and coaches",
      monthlyPrice: 19.99,
      annualPrice: 15.99,
      features: [
        "Advanced stroke analysis",
        "Unlimited match recordings",
        "Opponent analysis",
        "Personalized training plans",
        "Priority support",
        "Up to 5 users",
        "Video sharing",
        "Data export"
      ],
      cta: "Start Free Trial",
      highlighted: true
    },
    {
      name: "Elite",
      description: "For clubs and academies",
      monthlyPrice: 39.99,
      annualPrice: 31.99,
      features: [
        "All Pro features",
        "Team management",
        "Advanced statistics",
        "Coach-player collaboration",
        "Dedicated account manager",
        "Unlimited users",
        "API access",
        "Custom branding",
        "SLA guarantee"
      ],
      cta: "Contact Sales",
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Simple, Transparent Pricing</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Choose the plan that best fits your needs. All plans include a 14-day free trial.
          </p>
          
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-4 ${isAnnual ? 'text-gray-500' : 'font-semibold'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-300 dark:bg-gray-700"
            >
              <span className="sr-only">Toggle billing cycle</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  isAnnual ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-4 ${isAnnual ? 'font-semibold' : 'text-gray-500'}`}>
              Annual <span className="text-green-500 text-sm font-normal">Save 20%</span>
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden ${
                plan.highlighted
                  ? 'bg-white dark:bg-gray-800 shadow-xl ring-2 ring-primary'
                  : 'bg-white dark:bg-gray-800 shadow-lg'
              }`}
            >
              {plan.highlighted && (
                <div className="bg-primary text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">${isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                  <span className="text-gray-600 dark:text-gray-400">/month</span>
                  {isAnnual && (
                    <div className="text-sm text-gray-500 mt-1">Billed annually</div>
                  )}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 rounded-lg font-medium ${
                    plan.highlighted
                      ? 'bg-primary text-white hover:bg-blue-700'
                      : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                  } transition-colors`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto text-center mt-16">
          <h3 className="text-xl font-semibold mb-4">Need a custom solution?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We offer tailored solutions for tennis clubs, academies, and professional teams.
          </p>
          <button className="btn btn-outline">Contact our sales team</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 