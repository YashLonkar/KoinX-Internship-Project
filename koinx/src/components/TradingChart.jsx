import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    const existingScript = document.getElementById('tradingview-widget-script');

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.id = 'tradingview-widget-script';

      script.onload = () => {
        console.log('TradingView script loaded successfully.');

        // Add a slight delay before attempting to initialize the widget
        setTimeout(() => {
          if (window.TradingView) {
            const widget = new window.TradingView.widget(/* configuration options */);
            widget.init();
            console.log('TradingView widget initialized successfully.');
          } else {
            console.error('window.TradingView is undefined after script load.');
          }
        }, 100);
      };

      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BITSTAMP:BTCUSD",
          "interval": "D",
          "timezone": "Asia/Kolkata",
          "theme": "light",
          "style": "2",
          "locale": "en",
          "enable_publishing": false,
          "backgroundColor": "rgba(255, 255, 255, 1)",
          "gridColor": "rgba(255, 255, 255, 0.06)",
          "hide_top_toolbar": true,
          "withdateranges": true,
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;

      container.current.appendChild(script);
    }
  }, []);


  const widgetStyle = {
    width: "100%",
    border: "none",
    padding: "0",
    boxSizing: "border-box", // Add box-sizing property
  };

  return (
    <div class="h-[36rem] border-none" ref={container} >
      <div className="tradingview-widget-container__widget" style={widgetStyle}></div>
      <div className="tradingview-widget-copyright">
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
