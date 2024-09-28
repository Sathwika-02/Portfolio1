import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage';
import { createTheme, MantineProvider } from '@mantine/core';
import "@mantine/core/styles.css"
import { pdfjs } from 'react-pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();
// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
function App() {
  useEffect(()=>{
    AOS.init();
  },[]);
  const theme = createTheme({
    breakpoints: {
      'xs': '320px',
      'sm': '476px',
      'md': '640px',
      'bs': '768px',
      'lg': '900px',
      'xl': '1024',
      '2xl': '1280',
    },
  });
  return (
    <MantineProvider theme={theme} withGlobalClasses>
      <HomePage/>
    </MantineProvider>
    // <HomePage/>
  );
}

export default App;
