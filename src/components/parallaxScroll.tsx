"use client";
import { ParallaxScrollSecond } from "../components/ui/parallax-scroll-2";

export function ParallaxScroll() {
  return <ParallaxScrollSecond images={images} />;
}

const images = [
  "https://images.unsplash.com/photo-1495385794356-15371f348c31?q=80&w=2770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1689327920821-bbeebd80f6ce?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1568306281824-7afe898030d1?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1596993100471-c3905dafa78e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=2772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1601762603339-fd61e28b698a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1515511624704-b8916dcc30ea?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fHNvbGlkJTIwY2xvdGhlcyUyMGZhc2hpb24lMjBtZW58ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1508216310976-c518daae0cdc?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fHNvbGlkJTIwY2xvdGhlcyUyMGZhc2hpb24lMjBtZW58ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1562151270-c7d22ceb586a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxzb2xpZCUyMGNsb3RoZXMlMjBmYXNoaW9uJTIwbWVufGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1563045848-6fc8a43f32d1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fHNvbGlkJTIwY2xvdGhlcyUyMGZhc2hpb24lMjBtZW58ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1554033842-d4f5ad6b1863?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHxzb2xpZCUyMGNsb3RoZXMlMjBmYXNoaW9uJTIwbWVufGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1532675432006-329c6fed7045?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUwfHxzb2xpZCUyMGNsb3RoZXMlMjBmYXNoaW9uJTIwbWVufGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1681880974453-300e16e1561c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU3fHxzb2xpZCUyMGNsb3RoZXMlMjBmYXNoaW9uJTIwbWVufGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1542381335-c78825c1598b?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1530884814558-1e316305211a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAyfHxzb2xpZCUyMGNsb3RoZXMlMjBmYXNoaW9uJTIwbWVufGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=2772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1601762603339-fd61e28b698a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1562151270-c7d22ceb586a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxzb2xpZCUyMGNsb3RoZXMlMjBmYXNoaW9uJTIwbWVufGVufDB8fDB8fHww",

];
