import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const BEFORE_IMG = "https://media.base44.com/images/public/6a41ea1f6d0b3197a7b62ffc/331ba17b4_generated_2b497e14.png";
const AFTER_IMG = "https://media.base44.com/images/public/6a41ea1f6d0b3197a7b62ffc/1c9bccbf7_generated_b370a833.png";

export default function Transformations() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(5, Math.min(95, x / rect.width * 100));
    setSliderPos(pct);
  };

  const handleMouseDown = () => {isDragging.current = true;};
  const handleMouseUp = () => {isDragging.current = false;};
  const handleMouseMove = (e) => {if (isDragging.current) handleMove(e.clientX);};
  const handleTouchMove = (e) => {handleMove(e.touches[0].clientX);};

  return null;





















































































}
