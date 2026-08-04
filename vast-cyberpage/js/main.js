// Simple particle network background
(() => {
  const canvas = document.getElementById('bg');
  const ctx = canvas.getContext('2d');
  let w, h, particles = [];

  function resize(){
    w = canvas.width = innerWidth;
    h = canvas.height = innerHeight;
  }

  class P{constructor(){this.x=Math.random()*w;this.y=Math.random()*h;this.vx=(Math.random()-0.5)*0.6;this.vy=(Math.random()-0.5)*0.6;this.r=1+Math.random()*2}}

  function init(){
    resize();particles = [];const count = Math.max(40, Math.floor((w*h)/30000));
    for(let i=0;i<count;i++) particles.push(new P());
    requestAnimationFrame(loop);
  }

  function loop(){
    ctx.clearRect(0,0,w,h);
    // gradient overlay
    const g = ctx.createLinearGradient(0,0,w,h);
    g.addColorStop(0,'rgba(124,92,255,0.05)');
    g.addColorStop(1,'rgba(0,229,255,0.03)');
    ctx.fillStyle = g; ctx.fillRect(0,0,w,h);

    // draw particles
    for(let p of particles){
      p.x += p.vx; p.y += p.vy;
      if(p.x<0||p.x>w) p.vx *= -1;
      if(p.y<0||p.y>h) p.vy *= -1;
      ctx.beginPath(); ctx.fillStyle='rgba(255,255,255,0.8)'; ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill();
    }

    // connect
    for(let i=0;i<particles.length;i++){
      for(let j=i+1;j<particles.length;j++){
        const a = particles[i], b = particles[j];
        const dx = a.x-b.x, dy = a.y-b.y;
        const d = Math.sqrt(dx*dx+dy*dy);
        if(d<140){
          ctx.strokeStyle = 'rgba(124,92,255,'+ (0.12 - d/1200) +')'; ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
        }
      }
    }

    requestAnimationFrame(loop);
  }

  window.addEventListener('resize', () => { resize(); });
  window.addEventListener('load', init);

  // small DOM updates
  document.addEventListener('DOMContentLoaded', ()=>{
    const y = new Date().getFullYear();
    const el = document.getElementById('year'); if(el) el.textContent = y;
  });
})();
