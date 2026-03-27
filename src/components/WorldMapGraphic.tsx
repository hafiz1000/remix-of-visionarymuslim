const WorldMapGraphic = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto my-12">
      <svg
        viewBox="0 0 1000 500"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Realistic world map continents */}
        <g fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" opacity="0.5">
          {/* Europe */}
          <path d="M 420 120 L 440 115 L 460 120 L 475 130 L 485 125 L 495 130 L 490 145 L 475 150 L 460 145 L 450 155 L 435 150 L 425 140 Z" />
          
          {/* UK */}
          <path d="M 410 110 L 420 105 L 425 115 L 418 125 L 408 120 Z" />
          
          {/* Turkey/Middle East */}
          <path d="M 520 150 L 545 145 L 560 155 L 555 165 L 540 170 L 525 165 Z" />
          
          {/* Pakistan/South Asia */}
          <path d="M 610 170 L 630 165 L 645 175 L 650 190 L 635 200 L 620 195 L 610 185 Z" />
          
          {/* Asia */}
          <path d="M 660 140 L 720 135 L 780 150 L 820 160 L 840 175 L 850 200 L 830 220 L 780 225 L 730 215 L 680 190 L 665 170 Z" />
          
          {/* Africa */}
          <path d="M 480 200 L 520 195 L 560 210 L 580 240 L 590 280 L 580 320 L 550 350 L 510 360 L 480 350 L 460 320 L 455 280 L 465 240 Z" />
          
          {/* North America */}
          <path d="M 120 100 L 180 90 L 240 100 L 280 130 L 290 170 L 270 210 L 230 240 L 180 250 L 140 240 L 110 210 L 100 170 L 105 130 Z" />
          
          {/* South America */}
          <path d="M 260 270 L 290 265 L 310 280 L 320 310 L 315 350 L 300 390 L 270 410 L 245 405 L 230 380 L 235 340 L 245 300 Z" />
          
          {/* Australia */}
          <path d="M 750 320 L 810 315 L 860 330 L 880 360 L 870 390 L 830 405 L 780 400 L 745 380 L 740 350 Z" />
        </g>
      </svg>

      {/* Glowing dots on specific countries */}
      <div className="absolute inset-0">
        {/* Pakistan */}
        <div
          className="absolute w-3 h-3 rounded-full bg-primary animate-pulse-glow"
          style={{ top: '37%', left: '63%', animationDelay: '0s' }}
        />
        
        {/* Turkey */}
        <div
          className="absolute w-3 h-3 rounded-full bg-primary animate-pulse-glow"
          style={{ top: '31%', left: '54%', animationDelay: '0.5s' }}
        />
        
        {/* UK */}
        <div
          className="absolute w-3 h-3 rounded-full bg-primary animate-pulse-glow"
          style={{ top: '23%', left: '41.5%', animationDelay: '1s' }}
        />
      </div>

      <p className="text-center mt-6 text-sm text-muted-foreground italic">
        The message is spreading across the world, Alhamdulillah
      </p>
    </div>
  );
};

export default WorldMapGraphic;
