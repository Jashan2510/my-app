export default function Menu({ isOpen, handleActivePage, activePage }) {
  return (
    <div className={`h-screen fixed ease-in-out duration-300 w-screen text-white ${isOpen ? "opacity-100 z-30" : "opacity-0 z-0"}`}>
      <div className={`h-full absolute w-full transition-transform ease-in-out ${isOpen ? "translate-y-0 scale-100 duration-300" : "translate-y-full scale-0 duration-1000"} backdrop-blur-[3px]`}>
      </div>
      <div className={`h-full absolute w-full transition-all ease-in-out duration-700 bg-black/75 ${isOpen ? "translate-y-0 opacity-100 scale-105" : "translate-y-full opacity-0 scale-95"}`}>
      </div>
      <div className={`h-full absolute w-full ease-in-out pt-14 flex flex-col gap-16 items-center justify-center align-middle ${isOpen ? "translate-y-0 scale-100 duration-1000" : "-translate-y-full scale-0 duration-300"}`}>
        <div className="w-fit group" onClick={() => { handleActivePage("home") }}>
          <a href="#" className={`block text-5xl font-bold transition-colors ease-in-out duration-300 ${activePage == "home" ? "font-bold underline text-orange-500" : "font-normal text-white"}`} classNameName>HOME</a>
          <div className={`bg-orange-500 h-[5px] rounded-full w-0 transition-width ease-in-out duration-300 ${activePage == "home" ? "duration-0 w-full" : "group-hover:w-full"}`} classNameName></div>
        </div>
        <div className="w-fit group">
          <a href="./Document 2.pdf" target="_blank" className={`block text-5xl font-normal transition-colors ease-in-out duration-300 text-white`} classNameName>RESUME</a>
          <div className="bg-white h-[5px] rounded-full w-0 transition-width ease-in-out duration-300 group-hover:w-full" classNameName></div>
        </div>
        <div className="w-fit group">
          <a href="mailto:esprincejot@gmail.com" target="_blank" className={`block text-5xl font-bold transition-colors ease-in-out duration-300 ${activePage == "contact" ? "font-bold underline text-orange-500" : "font-normal text-white"}`} classNameName>CONTACT</a>
          <div className={`bg-orange-500 h-[5px] rounded-full w-0 transition-width ease-in-out duration-300 ${activePage == "contact" ? "duration-0 w-full" : "group-hover:w-full"}`} classNameName></div>
        </div>
      </div>
    </div>
  );
}

