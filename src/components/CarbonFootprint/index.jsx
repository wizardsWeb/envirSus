import React, { useEffect } from 'react';

function CarbonFootprint() {
  useEffect(() => {
    // Function to update the button href and background color inside the iframe
    const updateIframeContent = () => {
      const iframe = document.getElementById("cc-calculator");
      if (iframe) {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        
        // Change the button href
        const button = iframeDoc.querySelector(".btn.btn-info.btn-lg.btn-block.desktop");
        if (button) {
          button.href = "https://www.google.com"; // Change href to google.com
        }
      }
    };

    // Run the update function after 3 seconds
    const timer = setTimeout(updateIframeContent, 3000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      id="widget_goes_here" 
    >
      <iframe
        src="https://tnc-coolclimate-calculator-ui.firebaseapp.com?utm_source=nature.org&utm_medium=iframe&utm_campaign=carboncalculator"
        id="cc-calculator"
        frameBorder="0"
        scrolling="no"
        style={{ 
          width: "1px", 
          minWidth: "100%", 
          overflow: "hidden", 
          height: "1367px", 
           // Set the background color of the iframe itself
        }}
        title="Carbon Calculator"
      ></iframe>
    </div>
  );
};

export default CarbonFootprint;
