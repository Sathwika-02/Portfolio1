import React, { useEffect, useState } from 'react'
import Header from './Header'
import Fixedemail from './Fixedemail'
import Fixedsocial from './Fixedsocial'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Experience from './Experience'
import Contact from './Contact'
import Footer from './Footer'
import { Loader } from './Loader'
import { Toaster } from "react-hot-toast";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
        setLoading(false);
    }, 3000) 
}, [])
  return (
    <div className={` focus-visible:[&_button]:!outline-none min-h-[100dvh] ${loading?"flex":""} items-center overflow-hidden justify-center`}>
{   loading!==true?<>
    <Toaster/>
    <Header/>
    <About/>
    <Projects/>
    <Skills/>
    <Experience/>
    <Contact/>
    <Footer/>
    <Fixedemail/>
    <Fixedsocial/>
    </>:
        <Loader/>}
    </div>
   
  )
}

export default HomePage