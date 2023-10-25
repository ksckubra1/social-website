import "../App.css"
export default function PageOne() {
    return (
        <div className="h-screen w-screen bg-gradient-to-t from-green-300 to-[#ce4139] justify-center flex items-center">
            <div className="h-[800px] w-[1800px] bg-white shadow-2xl shadow-black flex flex-col relative">
                <a href="/#pageTwo">
                    <button className="absolute bottom-5 right-5 text-white bg-black/70 px-4 py-2 rounded-lg z-20 border border-white">
                        <i className="fa-solid fa-chevron-right fa-2xl"></i>
                    </button>
                </a>
                <div className="flex-1 flex flex-col relative">
                    <div className="px-44 w-full z-10  bg-[#d8d0d0]  justify-between absolute flex">
                        <button className="text-black">MENU</button>
                        <button className="text-black">MENU</button>
                        <button className="text-black">MENU</button>
                        <button className="text-black">MENU</button>
                    </div>
                    <div className="flex-1 bg-black font text-[#d8d0d0]  text-[200px] flex items-center justify-center relative">
                        <div className="absolute rounded-lg inline-flex -rotate-40 top-[105px] text-white left-40 border border-white p-1">
                            <div className="bg-[#d8d0d0] m-1 h-40 w-4"></div>
                        </div>
                        <div className="absolute rounded-lg inline-flex -rotate-40 top-[105px] text-white right-40 border border-white p-1">
                            <div className="bg-[#d8d0d0]  m-1 h-40 w-4"></div>
                        </div>
                        SOCIAL GUIDE</div>
                    <div className="absolute flex w-full text-[#FCDCDF] bottom-[66px] justify-between px-52">
                        <div className="">MEDIA ARTIST</div>
                        <div className="">HIGH INTERACTION AND WIDE SOCIAL NETWORK</div>
                        <div className="">GOOD DESİGN </div>
                        <div className="">OF CONTENT</div>
                    </div>
                </div>
                <div className="flex-1 flex">
                    <div className="h-[450px] w-2/4 bg-red-400 overflow-hidden">
                        <img className="w-full border-r-4 border-black" src="image/bg-14.jpg" alt="" />
                    </div>
                    <div className="h-[450px] w-2/4 bg-red-400 overflow-hidden">
                        <img className="h-full w-full border-l-4 border-black object-cover" src="image/bg-6.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div >
    )
}