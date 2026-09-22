"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SpidermanBackground() {
  const canvasRef = useRef(null);
  const [webBursts, setWebBursts] = useState([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  // Web particles and physics loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle nodes for web grid
    const numNodes = Math.min(Math.floor(width / 35), 45);
    const nodes = Array.from({ length: numNodes }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 2 + 1.5,
    }));

    // Mouse position listener
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    // Click to shoot webs
    const handleClick = (e) => {
      const { clientX: x, clientY: y } = e;
      
      // Add web burst visual ripple
      const id = Date.now() + Math.random();
      setWebBursts((prev) => [...prev.slice(-4), { id, x, y }]);
      setTimeout(() => {
        setWebBursts((prev) => prev.filter((b) => b.id !== id));
      }, 900);

      // Add temporary web nodes at click location
      for (let i = 0; i < 8; i++) {
        const angle = (Math.PI * 2 * i) / 8;
        const speed = Math.random() * 3 + 2;
        nodes.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: 2,
          life: 60, // frames to live
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    // Animation Loop
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint spider web grid background overlay lines
      const mouse = mouseRef.current;

      // Update and filter temporary nodes
      for (let i = nodes.length - 1; i >= 0; i--) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        // Bounce on boundaries
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        if (node.life !== undefined) {
          node.life--;
          if (node.life <= 0) {
            nodes.splice(i, 1);
            continue;
          }
        }

        // Draw node dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(220, 38, 38, 0.6)"; // Spider Red glow
        ctx.fill();
      }

      // Draw spider web connecting lines between nodes
      const maxDistance = 150;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.25;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(225, 29, 72, ${alpha})`; // Red web string
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Connect nodes to mouse position (Web shooter interaction)
        const mDx = nodes[i].x - mouse.x;
        const mDy = nodes[i].y - mouse.y;
        const mDist = Math.sqrt(mDx * mDx + mDy * mDy);

        if (mDist < 180) {
          const alpha = (1 - mDist / 180) * 0.45;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`; // Cyan/Blue web thread
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {/* ── Background Glow Orbs ── */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-red-600/30 to-blue-600/20 blur-[140px]"
      />
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 -right-32 h-[550px] w-[550px] rounded-full bg-gradient-to-l from-red-700/25 to-sky-500/20 blur-[150px]"
      />

      {/* ── Interactive Web Canvas ── */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full opacity-70" />

      {/* ── Top Corner Web Vectors ── */}
      <svg
        className="absolute top-0 left-0 w-48 h-48 opacity-25 text-red-500 pointer-events-none"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
      >
        <path d="M0 0 L100 0 L0 100 Z" fill="rgba(220,38,38,0.03)" />
        <line x1="0" y1="0" x2="100" y2="0" />
        <line x1="0" y1="0" x2="0" y2="100" />
        <line x1="0" y1="0" x2="70" y2="70" />
        <path d="M 20 0 Q 20 20 0 20" />
        <path d="M 40 0 Q 40 40 0 40" />
        <path d="M 60 0 Q 60 60 0 60" />
        <path d="M 80 0 Q 80 80 0 80" />
      </svg>
      <svg
        className="absolute top-0 right-0 w-48 h-48 opacity-25 text-red-500 pointer-events-none transform scale-x-[-1]"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
      >
        <path d="M0 0 L100 0 L0 100 Z" fill="rgba(220,38,38,0.03)" />
        <line x1="0" y1="0" x2="100" y2="0" />
        <line x1="0" y1="0" x2="0" y2="100" />
        <line x1="0" y1="0" x2="70" y2="70" />
        <path d="M 20 0 Q 20 20 0 20" />
        <path d="M 40 0 Q 40 40 0 40" />
        <path d="M 60 0 Q 60 60 0 60" />
        <path d="M 80 0 Q 80 80 0 80" />
      </svg>

      {/* ── Web Shot Burst Effects on Click ── */}
      <AnimatePresence>
        {webBursts.map((burst) => (
          <motion.div
            key={burst.id}
            initial={{ scale: 0.2, opacity: 0.9 }}
            animate={{ scale: 2.2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ left: burst.x - 50, top: burst.y - 50 }}
            className="absolute w-25 h-25 pointer-events-none"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full text-sky-400 opacity-80" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="50" cy="50" r="20" strokeDasharray="4 2" />
              <circle cx="50" cy="50" r="40" strokeDasharray="6 3" />
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i * 45 * Math.PI) / 180;
                const x2 = 50 + Math.cos(angle) * 45;
                const y2 = 50 + Math.sin(angle) * 45;
                return <line key={i} x1="50" y1="50" x2={x2} y2={y2} stroke="rgba(225,29,72,0.8)" />;
              })}
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
