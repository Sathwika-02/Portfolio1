
// const Fixedemail = () => {
//   return (
//   <>
//   <div className="flex font-mono text-lg text-textColor items-center gap-10 fixed bottom-40 -right-44 rotate-90 ">
//     <div className="flex" data-aos="fade-down-left" data-aos-duration="800">
//     <a className="font-mono hover:text-primaryColor hover:-translate-x-2 tracking-widest transition transform duration-300 ease-in-out" href="mailto:madarapusathwika9@gmail.com" target="_blank">
//         madarapusathwika9@gmail.com
//     </a>
//     </div>
//     <hr className="border-[2px] rounded-full w-40 text-textColor bg-textColor border-textColor"/>
//   </div>
//   </>
//   )
// }

// export default Fixedemail

const Fixedemail=()=>{
  return <div className="flex md-mx:hidden text-textColor items-center gap-10 fixed bottom-32 -right-48 rotate-90">
      <div className="flex" data-aos-duration="800" data-aos="fade-down-left">
      <a  href="mailto:chandrabhan.work@gmail.com" className="font-mono tracking-wide hover:text-primaryColor hover:-translate-x-1 transition transform duration-300 ease-in-out">
      madarapusathwika9@gmail.com
      </a>
      </div>
      <hr className="border w-40 rounded-full  bg-textColor border-textColor"/>
  </div>
}
export default Fixedemail;