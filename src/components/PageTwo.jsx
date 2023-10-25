
export default function PageTwo() {

    return (
        <div id="pageTwo" className="h-screen w-screen bg-gradient-to-t from-green-300 to-[#ce4139] justify-center flex items-center">
            <div className="h-[800px] w-[1800px] bg-white shadow-2xl shadow-black flex relative">
                <a href="/#">
                    <button className="absolute bottom-5 right-20 text-white bg-black/70 px-4 py-2 rounded-lg z-20 border border-white">
                        <i className="fa-solid fa-chevron-left fa-2xl"></i>
                    </button>
                </a>
                <a href="/#pageThree">
                    <button className="absolute bottom-5 right-5 text-white bg-black/70 px-4 py-2 rounded-lg z-20 border border-white">
                        <i className=" fa-solid fa-chevron-right fa-2xl"></i>
                    </button>
                </a>
                <div className="w-1/3 bg-[#DFDCD3] flex flex-col justify-center items-center gap-10">
                    <div className="text-5xl font-serif text-black">POST & STORIES</div>
                    <div className="bg-black/60 px-10 py-4 text-[#DFDCD3] rounded-xl w-80 text-lg text-center font-serif relative">
                        <img className="absolute left-4" src="icons/promotion2.png" alt="" />
                        <span> Good design starts with the content.A pretty picture does not really mean anything if there is nothing in it; at that point it is just color.</span>
                    </div>
                </div>
                <div className="w-2/3 flex flex-col">
                    <div className="flex-1 flex">
                        <div className="flex-1 h-[600px] overflow-hidden bg-orange-300  border-l-2 border-black">
                            <img className="h-full w-full object-cover" src="image/bg-41.jpg" alt="" />
                        </div>
                        <div className="flex-1 bg-[#DFDCD3] text-6xl flex flex-col border-l-2 border-black/70">
                            <div className=" pl-14 h-24 flex items-center">BRAND</div>
                            <div className="border-t-4 h-24 flex items-center border-black/70 pl-14">PROJECT</div>
                            <div className="border-t-4 h-24 flex items-center border-black/70 pl-14">CLIENT</div>
                            <div className="border-t-4 h-24 flex items-center border-black/70 pl-14">BUSINESS</div>
                            <div className="border-t-4 h-24 flex items-center border-black/70 pl-14">TECHNICAL</div>
                            <div className="border-t-4 h-24 flex items-center border-black/70 pl-14">GRAPHIC</div>
                        </div>
                    </div>
                    <div className="h-52 bg-[#121212] text-[#cec5c5b9] text-sm w-[1200px] p-6 flex justify-center font-serif items-center">GOOD DESIGN STARTS WITH THE CONTENT. A PRETTY PICTURE DOES REALY MEAN IF THERE IS NOTHING IN IT. AT THET POINT IT IS JUST COLOR KEEP WORKING AT EVERY DRAFT. DONT WORRY ABOUT THE NOS OR I DONT LİKE THATS BECAUSE EVENRUALLY YOU WILL FIND THE ANSWER.IT ONLY TAKES ONE VERSION THET THE CLIENT LIKES TO BE SUCCESSFUL.GOOD DESIGN STARTS WITH THE CONTENT. A PRETTY PICTURE DOES REALY MEAN IF THERE IS NOTHING IN IT. AT THET POINT IT IS JUST COLOR KEEP WORKING AT EVERY DRAFT. DONT WORRY ABOUT THE NOS OR I DONT LİKE THATS BECAUSE EVENRUALLY YOU WILL FIND THE ANSWER.IT ONLY TAKES ONE VERSION THET THE CLIENT LIKES TO BE SUCCESSFUL.</div>
                </div>
                <div className="bg-[#DFDCD3] border-l-2 relative w-10 border-black/70 flex px-10">
                    <div className="-rotate-90 text-xl bottom-32 w-40 -left-10 absolute">GOOD DESIGN</div>
                    <div className="-rotate-90 text-xl top-32 w-56 -left-[70px] absolute">SIMPLE TYPOGRAPY</div>
                </div>
            </div>
        </div>
    )
}