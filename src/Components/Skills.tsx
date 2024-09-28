import { SkillInfo } from "../User"

import Skillcard from "./Skillcard"
const Skills = () => {
  return (
   <>
   <div className="px-16 mx-20 my-10 font-mono" id="bg">
   <h1 className="text-4xl mb-5 font-bold text-center text-white"><span className="text-primaryColor">03.&nbsp;</span>Skills</h1>
   <div className="flex flex-wrap justify-around md-mx:justify-between sm-mx:justify-center gap-4 md-mx:gap-2">
            {
                SkillInfo.map((skill:any, index:number)=><Skillcard key={index} title={skill.title} skills={skill.skills} />)
            }
            </div>
   </div>
   </>
  )
}

export default Skills