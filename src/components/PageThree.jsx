import "../App.css"

export default function PageThree() {

    return (
        <div id="pageThree" className="h-screen w-screen bg-gradient-to-t from-green-300 to-[#ce4139] justify-center flex items-center">
            <div className="h-[800px] w-[1800px] p-16 bg-[#DFDCD3] shadow-2xl shadow-black flex relative">
                <a href="/#pageTwo">
                    <button className="absolute bottom-5 right-5 text-white bg-black/70 px-4 py-2 rounded-lg z-20 border border-white">
                        <i className="fa-solid fa-chevron-left fa-2xl"></i>
                    </button>
                </a>

                <div className="absolute text-[160px] bottom-6 font-shadows">REELS STRATEGY</div>
                <div className="w-[500px] h-full bg-[#DFDCD3] ">
                    <div className="w-96 bg-black/60 px-10 relative py-4 text-[#DFDCD3] rounded-xl  text-center">
                        <img className="absolute left-4" src="icons/promotion2.png" alt="" />
                        <span>Good design starts with the content.A pretty picture does not really mean anything if there is nothing in it; at that point it is just color. Good design starts with the content.A pretty picture does not really mean anything if there is nothing in it; at that point it is just color.Good design starts with the content.A pretty picture does not really mean anything if there is nothing in it; at that point it is just color. Good design starts with the content.A pretty picture does not really mean anything if there is nothing in it; at that point it is just color.A pretty picture does not really mean anything if there is nothing in it; at that point it is just color.</span>
                    </div>
                </div>
                <div className="w-[600px] h-full bg-[#DFDCD3]">
                    <div className="flex-1 text-6xl flex flex-col">
                        <div className="h-24 flex border-t-2 justify-between border-black/50 items-center">
                            <span>BRAND</span>
                            <span>01</span>
                        </div>
                        <div className="border-t-2 h-24 flex items-center justify-between border-black/50">
                            <span>MAKING</span>
                            <span>02</span>
                        </div>
                        <div className="border-t-2 h-24 flex items-center justify-between border-black/50">
                            <span>STYLES</span>
                            <span>03</span>
                        </div>
                        <div className="border-t-2  border-b-2 justify-between  h-24 flex items-center border-black/50">
                            <span>PROJECT</span>
                            <span>04</span>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex justify-end z-10 ">
                    <img className="w-[500px] object-cover rounded-sm  bg-[#DFDCD3] p-4 border-2 border-black/50 " src="image/bg-40.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}