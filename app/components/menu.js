

export default function Menu({isOpen,handleActivePage,activePage}) {
  return (
    <div className={` h-screen fixed ease-in-out  duration-300 w-screen text-white ${isOpen ?"opacity-100 z-30":"opacity-0 z-0"}`}>
    <div className={` h-full absolute w-full ease-in-out  ${ isOpen ?" translate-y-0 scale-100 duration-300":" translate-y-full scale-0 duration-1000"} backdrop-blur-[3px] `}>
    </div>
    <div className={` h-full absolute w-full ease-in-out duration-700 bg-black/75 ${ isOpen ?" translate-y-0 opacity-100":" translate-y-full opacity-0"} `}>
    </div>
    <div className={` h-full absolute w-full ease-in-out pt-14 flex flex-col gap-16 items-center justify-center align-middle  ${ isOpen ?" translate-y-0 scale-100 duration-1000":" -translate-y-full scale-0 duration-300"}`}>
        <div className=" w-fit group" onClick={()=>{handleActivePage("home")}}>
       <a href="#" className={`block text-5xl font-bold ease-in-out duration-300 ${activePage =="home" ?"font-bold underline" :"font-normal"}`}>HOME</a>
       <div className={` bg-white h-[5px] rounded-full w-0 ease-in-out duration-300  ${activePage =="home" ?" duration-0" :" group-hover:w-full"}`}></div>
        </div>
        <div className=" w-fit group">
       <a href="./Document 2.pdf" target="_blank" className={`block text-5xl font-normal ease-in-out duration-300`}>RESUME</a>
       <div className=" bg-white h-[5px] rounded-full w-0 ease-in-out duration-300 group-hover:w-full"></div>
        </div>
        <div className=" w-fit group">
       <a href="mailto:esprincejot@gmail.com" target="_blank" className={`block text-5xl font-bold ease-in-out duration-300 ${activePage =="contact" ?"font-bold underline" :"font-normal"}`}>CONTACT</a>
       <div className={` bg-white h-[5px] rounded-full w-0 ease-in-out duration-300  ${activePage =="contact" ?" duration-0" :" group-hover:w-full"}`}></div>
        </div>

    </div>
    </div>
  );
}
