import {Anchor} from "@mantine/core"
import { IconHexagonLetterS } from '@tabler/icons-react';
import Sidebar from "./Sidebar";
import { useMediaQuery } from "@mantine/hooks";
import { em } from "@mantine/core";
import { useEffect, useState } from "react";
const links=["About","Projects","Experience","Skills","Contact"];
const navLinks=(col:Boolean,clicked:any)=>{
    const handleClick=()=>{
        if(clicked) clicked();
    }
    return links.map((link,index)=>{
        return(
            <a key={index} onClick={handleClick} className={`${col?'flex flex-col items-center justify-center':''}text-textColor text-lg hover:text-primaryColor font-mono`} href={`#${link}`}> <span className="text-primaryColor">0{index+1}.</span>{link}</a>
        )
    })
}
const Header=()=>{
    const isMobile = useMediaQuery(`(max-width: ${em(476)})`);
    const [show,setshow]=useState(true);
    const [lastscrollY,setlastscroll]=useState(0);
    const [shadow,setshadow]=useState(false);
    const controlnavbar=()=>{
        if(window.scrollY>lastscrollY && window.scrollY>70) setshow(false);
        else setshow(true);
        if(window.scrollY>70) setshadow(true);
        else setshadow(false);
        setlastscroll(window.scrollY);
    }
    useEffect(()=>{
        window.addEventListener('scroll',controlnavbar);
        return()=>window.removeEventListener('scroll',controlnavbar);
    })
return(
    <>
    <nav className={`flex ${show?"translate-y-0":"-translate-y-28"} ${shadow?"shadow-[0px_10px_30px_-10px_#020c1b]":""} transition-transform duration-500 ease-in-out fixed w-full z-10 bg-bgColor h-[18vh] dm-mono-regular px-10 justify-between items-center`}>
        {/* <h1 className="text-primaryColor">Portfolio</h1> */}
        <IconHexagonLetterS size={60} stroke={1.25} color="#64FFDA"/>
        <div className="md:flex gap-4 md-mx:hidden ml-auto">
         {/* <a className='text-textColor hover:text-primaryColor' href="#about" target="_blank">About</a>
         <a className='text-textColor hover:text-primaryColor' href="#work" target="_blank">Work</a>
         <a  className='text-textColor hover:text-primaryColor' href="#experience" target="_blank">Experience</a>
         <a className='text-textColor hover:text-primaryColor' href="#skills" target="_blank">Skills</a>
         <a className='text-textColor hover:text-primaryColor' href="#contact" target="_blank">Contact</a> */}
         {navLinks(false,null)  }
        </div>
        <Sidebar/>
    </nav>
    </>
)
}
export default Header;
export {navLinks}