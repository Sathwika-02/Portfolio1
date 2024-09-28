// import { useEffect, useRef, useState } from "react";
// import { Info } from "../User"
// import TypeWriter from "typewriter-effect"
// //@ts-ignore
// import DOTS from "vanta/src/vanta.dots"
// //@ts-ignore
// import TRUNK from "vanta/src/vanta.trunk"
// import { Button, useMatches } from "@mantine/core";
// import ResumeViewer from "./ResumeViewer";
// import { useDisclosure } from "@mantine/hooks";
// import Particles from "./magicui/particles";
// import { NeonGradientCard } from "./magicui/neon-gradient-card";
// const About = () => {
    
//         const [dot, setDot] = useState<any>(null)
//         const [trunk,setTrunk]=useState<any>(null)
//         const [opened, { open, close }] = useDisclosure(false);
//         useEffect(() => {
//           if (!dot) {
//             setDot(DOTS({
//                 el: "#bg",
//                 mouseControls: true,
//                 touchControls: true,
//                 gyroControls: false,
//                 minHeight: 200.00,
//                 minWidth: 200.00,
//                 scale: 1.00,
//                 scaleMobile: 1.00,
//                 color:0x64FFDA,
//                 color2:0x204aff,
//                 backgroundColor:0x0A192F,
//                 size: 2.8,
//                 spacing:20,
//                 showLines: false

//               }))
//           }
//           if(!trunk){
//             setTrunk(TRUNK({
//                 el: "#photo",
//                 mouseControls: true,
//                 touchControls: true,
//                 gyroControls: false,
//                 minHeight: 200.00,
//                 minWidth: 200.00,
//                 scale: 1.00,
//                 scaleMobile: 1.00,
//                 color:0x64FFDA,
//                 backgroundColor:0x112240,
//                 spacing:0,
//                 chaos:4.00
//               }))
//           }
//           return () => {
//             if (dot) dot.destroy()
//                 if(trunk) trunk.destroy()
//           }
//         }, [])
//         const btn =useMatches({
//           xs:'xs',
//           sm:'sm',
//           md:'md',
//           lg:'lg'
//       })
      
//   return (
//     <>
//     <div data-aos="zoom-out-up" data-aos-duration="800" className="flex relative overflow-hidden  items-center justify-around font-mono px-16 sm-mx:px-4 xs-mx:px-2 xs-mx:py-4 h-fit lg-mx:justify-between bs-mx:flex-wrap bs-mx:flex-col-reverse bs-mx:!overflow-visible bs-mx:gap-6 md-mx:px-6" id="About"> 
//     <Particles
//                     className="absolute -z-20 inset-0"
//                     quantity={1000}
//                     ease={80}
//                     vx={.1}
//                     vy={.1}
//                     color="#64FFDA"
//                     refresh
//                 />
//         <div className="ml-20 w-3/5 flex flex-col">
//             <div className="text text-primaryColor text-3xl">Hi,I am</div>
//             <div className="text-white text-[4.25rem] font-extrabold">{Info.name}</div>
//             <div className="text-white text-4xl flex font-semibold"> I'm a &nbsp; <span className="text-primaryColor"><TypeWriter
//             options={{
//                 strings:Info.stack,
//                 autoStart:true,
//                 loop:true,
//             }}
//             /></span></div>
//             <div className="text-textColor text-xl my-8 w-[90%] font-semibold text-justify">{Info.bio}</div>
//             <Button  component="a" href="https://drive.google.com/file/d/1I7BD0irNSxR986gGDllug4SjDYk6Z15S/view?usp=sharing" target="_blank" className="!text-bgColor !w-fit"  size="lg"  variant="filled" color="#64FFDA">Download Resume</Button>
//         </div>
    
  
       
//           <div className="h-fit flex justify-center items-center rounded-full  -ml-40 bs:mr-10 w-fit">
//           <NeonGradientCard className="w-[325px] h-[325px] lg-mx:w-60 lg-mx:h-60 xsm-mx:w-50 xsm-mx:h-50 items-center justify-center text-center">
//                         <img className="w-full  h-full rounded-full "  src="/sathwika (1).jpeg" alt="profile" />
//                     </NeonGradientCard>
//                     </div>
//     </div>
//     <ResumeViewer opened={opened} closed={close}/>
//     </>
//   )
// }

// export default About
import { Info } from "../User";
import Typewriter from "typewriter-effect";
import { Button, useMatches } from "@mantine/core";
import ResumeViewer from "./ResumeViewer";
import { useDisclosure } from "@mantine/hooks";
import { IconDownload } from "@tabler/icons-react";
import Particles from "./magicui/particles";
import { NeonGradientCard } from "./magicui/neon-gradient-card";
import MyImage from '../Images/sathwika (1).jpeg'; 

const About = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const btn =useMatches({
        xs:'xs',
        sm:'sm',
        md:'md',
        lg:'lg'
    })
    return (
        <>
            <div data-aos="zoom-out-up" data-aos-duration="800" className="mt-28 flex relative overflow-hidden justify-around items-center font-mono px-16 py-10 sm-mx:px-4 xs-mx:px-2 xs-mx:py-4 h-fit lg-mx:justify-between bs-mx:!flex-wrap bs-mx:flex-col-reverse bs-mx:!overflow-visible bs-mx:gap-6 md-mx:px-6" id="About">
                <Particles
                    className="absolute -z-20 inset-0"
                    quantity={1000}
                    ease={80}
                    vx={.1}
                    vy={.1}
                    color="#64FFDA"
                    refresh
                />
                <div className="bs:ml-10 bs:w-3/5 flex flex-col lg-mx:gap-3  bs-mx:items-center">
                    <div className="text-primaryColor text-3xl lg-mx:text-2xl xs-mx:text-xl xsm-mx:text-lg">Hi, I am</div>
                    <div className="text-white text-[4.25rem] font-extrabold lg-mx:text-5xl sm-mx:text-4xl xs-mx:text-3xl xsm-mx:text-[27px]">{Info.name}</div>
                    <div className="text-white text-4xl flex font-semibold lg-mx:text-[27px] sm-mx:text-2xl xs-mx:text-xl xsm-mx:text-lg">I'm a&nbsp;<span className="text-primaryColor"><Typewriter options={{ strings: Info.stack, autoStart: true, loop: true, }} /> </span></div>
                    <div className="text-textColor text-xl w-[90%] text-justify my-8 lg-mx:my-0 font-semibold lg-mx:text-base sm-mx:text-sm xs-mx:text-xs">{Info.bio}</div>
                    <div className="xs-mx:w-[90%] flex gap-3 xs-mx:justify-between">
                    <Button  component="a" href="https://drive.google.com/file/d/1I7BD0irNSxR986gGDllug4SjDYk6Z15S/view?usp=sharing" target="_blank" className="!text-bgColor !w-fit"  size="lg"  variant="filled" color="#64FFDA">Download Resume</Button>
                    </div>
                </div>
                
                <div className="h-fit flex justify-center items-center rounded-full bs:mr-10 w-fit">
                    <NeonGradientCard className="w-[325px] h-[325px] lg-mx:w-64 lg-mx:h-64 xsm-mx:w-56 xsm-mx:h-56 items-center justify-center text-center">
                        <img className="w-full  h-full rounded-full" src={MyImage} alt="logo" />
                    </NeonGradientCard>
                </div>
            </div>
            <ResumeViewer opened={opened} close={close} />
        </>
    )
}
export default About;

// import { Info } from "../User";
// import Typewriter from "typewriter-effect";
// import { Button, useMatches } from "@mantine/core";
// import ResumeViewer from "./ResumeViewer";
// import { useDisclosure } from "@mantine/hooks";
// import { IconDownload } from "@tabler/icons-react";
// import Particles from "./magicui/particles";
// import { NeonGradientCard } from "./magicui/neon-gradient-card";
// const About = () => {
//     const [opened, { open, close }] = useDisclosure(false);
//     const btn =useMatches({
//         xs:'xs',
//         sm:'sm',
//         md:'md',
//         lg:'lg'
//     })
//     return (
//         <>
//             <div data-aos="zoom-out-up" data-aos-duration="800" className="px-16 flex relative overflow-hidden justify-around items-center font-mono  py-10 sm-mx:px-4 xs-mx:px-2 xs-mx:py-4 h-fit lg-mx:justify-between bs-mx:flex-wrap bs-mx:flex-col-reverse bs-mx:!overflow-visible bs-mx:gap-6 md-mx:px-6" id="About">
//                 <Particles
//                     className="absolute -z-20 inset-0"
//                     quantity={1000}
//                     ease={80}
//                     vx={.1}
//                     vy={.1}
//                     color="#64FFDA"
//                     refresh
//                 />
//                 <div className="bs:ml-10 bs:w-3/5 flex flex-col lg-mx:gap-3  bs-mx:items-center">
//                     <div className="text-primaryColor text-3xl lg-mx:text-2xl xs-mx:text-xl xsm-mx:text-lg">Hi, I am</div>
//                     <div className="text-white text-[4.25rem] font-extrabold lg-mx:text-5xl sm-mx:text-4xl xs-mx:text-3xl xsm-mx:text-[27px]">{Info.name}</div>
//                     <div className="text-white text-4xl flex font-semibold lg-mx:text-[27px] sm-mx:text-2xl xs-mx:text-xl xsm-mx:text-lg">I'm a&nbsp;<span className="text-primaryColor"><Typewriter options={{ strings: Info.stack, autoStart: true, loop: true, }} /> </span></div>
//                     <div className="text-textColor text-xl w-[90%] text-justify my-8 lg-mx:my-0 font-semibold lg-mx:text-base sm-mx:text-sm xs-mx:text-xs">{Info.bio}</div>
//                     <div className="text-textColor text-xl my-8 w-[90%] font-semibold text-justify">{Info.bio}</div>
//             <Button  component="a" href="https://drive.google.com/file/d/1I7BD0irNSxR986gGDllug4SjDYk6Z15S/view?usp=sharing" target="_blank" className="!text-bgColor !w-fit"  size="lg"  variant="filled" color="#64FFDA">Download Resume</Button>
//       </div>

              
//                 <div className="h-fit flex justify-center items-center rounded-full bs:mr-10 w-fit">
//                     <NeonGradientCard className="w-[325px] h-[325px] lg-mx:w-64 lg-mx:h-64 xsm-mx:w-56 xsm-mx:h-56 items-center justify-center text-center">
//                         <img className="w-full  h-full rounded-full "  src="/sathwika (1).jpeg" alt="profile" />
//                     </NeonGradientCard>
//                 </div> 
//             </div>
//             <ResumeViewer opened={opened} close={close} />
//         </>
//     )
// }
// export default About;