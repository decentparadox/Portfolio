import React, { useEffect, useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { lgLayout, mdLayout, smLayout } from '../../lib/bento-layouts.tsx';

const ResponsiveGridLayout = WidthProvider(Responsive, { measureBeforeMount: true });

const BentoGrid: React.FC = () => {
  const [rowHeight, setRowHeight] = useState(280)
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleWidthChange = (width: number) => {
    if (width <= 500) {
        setRowHeight(158)
    } else if (width <= 1100) {
        setRowHeight(180)
    } else {
        setRowHeight(280)
    }
}

const handleDragStart = (element: HTMLElement) => {
  if (timeoutRef.current) {
    clearTimeout(timeoutRef.current);
  }

  document.querySelectorAll('.react-grid-item').forEach((item) => {
    (item as HTMLElement).style.zIndex = '1';
  });

  element.style.zIndex = '10';
};

const handleDragStop = (element: HTMLElement) => {
  timeoutRef.current = setTimeout(() => {
    if (element instanceof HTMLElement) {
      element.style.zIndex = '1';
    }
  }, 500);
};
useEffect(() => {
  return () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
}, []);


  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={{lg: lgLayout, md: mdLayout, sm: smLayout}}
      breakpoints={{lg: 1099, md: 800, sm: 375}}
      cols={{lg: 4, md: 4, sm: 2}}
      rowHeight={rowHeight}
      isBounded
      onWidthChange={handleWidthChange}
      margin={[16, 16]}

    >
      <div key="intro" >Intro content</div>
      <div key="about-ctfs">About CTFs content</div>
      <div key="image-1">Image 1 content</div>
      <div key="discord">Discord</div>
      <div key="latest-post">Latest Post</div>
      <div key="image-2">Image 2 content</div>
      <div key="contributions">Contributions</div>
      <div key="spotify">Spotify</div>
      <div key="github">Github</div>
      <div key="tech">Tech</div>  
      <div key="twitter">Twitter</div>
      {/* Add more grid items here */}
    </ResponsiveGridLayout>
  );
};

export default BentoGrid;