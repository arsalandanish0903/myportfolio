import React, { useEffect } from 'react';

function BinaryRain() {
  useEffect(() => {
    const canvas = document.getElementById('binaryCanvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const binary = '01';
    const columns = canvas.width / 20;
    const drops = Array(Math.floor(columns)).fill(1);
    
    function draw() {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#0d9488'; // teal-400 equivalent
      ctx.font = '15px monospace';
      
      drops.forEach((drop, i) => {
        const text = binary.charAt(Math.floor(Math.random() * binary.length));
        ctx.fillText(text, i * 20, drop * 20);
        
        if (drop * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    }
    
    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <canvas id="binaryCanvas" className="absolute inset-0" />
      <div className="relative text-teal-400 text-xl font-mono tracking-widest">
        LOADING CREATIVE MODE...
      </div>
    </div>
  );
}

export default BinaryRain;