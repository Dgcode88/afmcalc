import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // State management for carbon usage and calculated savings
  // -- The cornerstone of fiscal transformation begins with accurate measurement
  const [carbonUsage, setCarbonUsage] = useState('');
  const [annualSavings, setAnnualSavings] = useState(0);
  const [isValid, setIsValid] = useState(true);
  
  // Constants that define the financial opportunity
  // -- In the realm of municipal decision-making, precision is paramount
  const SAVINGS_RATE = 100; // $100 savings per ton of green carbon
  
  // Calculate savings whenever carbon usage changes
  // -- The moment of revelation: when numbers transform into opportunity
  useEffect(() => {
    if (carbonUsage && !isNaN(carbonUsage) && carbonUsage > 0) {
      setAnnualSavings(carbonUsage * SAVINGS_RATE);
      setIsValid(true);
    } else if (carbonUsage === '') {
      setAnnualSavings(0);
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [carbonUsage]);

  // Handle input changes with validation
  // -- Every keystroke brings you closer to fiscal enlightenment
  const handleInputChange = (e) => {
    setCarbonUsage(e.target.value);
  };

  // Format currency for display
  // -- Presenting financial opportunity with clarity and impact
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Green Carbon Savings Calculator</h1>
        <p className="tagline">Where Fiscal Brilliance Meets Environmental Innovation</p>
      </header>
      
      <main className="calculator-container">
        <div className="calculator-card">
          <div className="calculator-header">
            <h2>Municipal Savings Estimator</h2>
            <p>Discover how Afmericatech's revolutionary green carbon transforms environmental leadership into tangible annual savings.</p>
          </div>
          
          <div className="input-section">
            <label htmlFor="carbon-input">Annual Conventional Carbon Usage (tons):</label>
            <div className="input-wrapper">
              <input
                id="carbon-input"
                type="number"
                value={carbonUsage}
                onChange={handleInputChange}
                placeholder="Enter tons of carbon"
                className={!isValid ? 'invalid' : ''}
              />
              {!isValid && <p className="error-message">Please enter a valid number</p>}
            </div>
          </div>
          
          <div className="results-section">
            <div className="result-item">
              <h3>Potential Annual Savings:</h3>
              <div className="savings-display">
                {formatCurrency(annualSavings)}
              </div>
              <p className="savings-rate">at ${SAVINGS_RATE} savings per ton</p>
            </div>
          </div>
          
          <div className="cta-section">
            <p>Transform your municipality's environmental impact while delivering measurable fiscal benefits to your constituents.</p>
            <button className="cta-button">Request Consultation</button>
          </div>
        </div>
        
        <div className="benefits-card">
          <h3>The Afmericatech Advantage</h3>
          <ul>
            <li><span>Financial Prudence</span> - Redirect savings to essential municipal services</li>
            <li><span>Environmental Leadership</span> - Position your municipality at the forefront of sustainability</li>
            <li><span>Measurable Impact</span> - Track and report tangible environmental and financial outcomes</li>
            <li><span>Simplified Transition</span> - Our experts ensure a seamless implementation process</li>
          </ul>
        </div>
      </main>
      
      <footer className="app-footer">
        <p>© {new Date().getFullYear()} Afmericatech Green Carbon Solutions. Empowering municipal innovation.</p>
      </footer>
    </div>
  );
}

export default App;
