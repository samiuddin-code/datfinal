import React, { useState } from "react";
import Image from 'next/image';
import useIsMobile from '@/ui/useIsMobile';

const HomeTabs = () => {
    const [activeTab, setActiveTab] = useState("design");
    const isMobile = useIsMobile();

    const tabs = [
        {
            id: "design",
            label: "Design",
            content: "From sleek urban landscapes to serene retreats, our portfolio showcases a diverse array of designs that breathe life into spaces.",
            image: "/edv-slide.webp",
        },
        {
            id: "manage",
            label: "Manage",
            content: "Our expertise has shown results in the UAE, especially in Dubai, Abu Dhabi, and Sharjah.",
            image: "/dji-slide2.webp",
        },
        {
            id: "build",
            label: "Build",
            content: "Our Architects and Engineers specialize in Building and Villa Design, furthermore, competent in Architectural, Structural, Construction, MEP, Project Management, BIM, and Interior Design. ",
            image: "/edv-slide.webp",
        }
    ];

    // Get the data for the active tab
    const activeTabData = tabs.find(tab => tab.id === activeTab) || tabs[0];

    return (
            
        <section className="relative w-full">
        {isMobile ? (
            <>
            
            <div className="w-full pb-10">
            <div className="z-10 flex pt-4 px-4">
            <div className="w-full flex flex-row justify-between gap-4 ">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-2 py-2 font-normal text-xl transition-colors ${
                            activeTab === tab.id ? 'border-b-4 border-gray-700 text-gray-900' : ' text-gray-900'
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div> 
            </div>
          
            <div className="w-full relative text-gray-900 text-sm pt-10 pb-10 rounded-lg shadow-lg m-auto px-4">
              {activeTabData.content}
            </div>

            <div className="relative inset-0 z-0">
            <Image
                src={activeTabData.image}
                alt="Background Image"
                layout="responsive"
                width={1920}
                height={600}
                objectFit="cover"
                quality={100}
            />
            </div>
            </div>
            </>
            ) : (
            <>
            <div className="relative w-full h-screen">
            <div className="absolute inset-0 z-0 ">
                <Image
                    src={activeTabData.image}
                    alt="Background Image"
                    layout="responsive"
                    width={1920}
                    height={600}
                    objectFit="cover"
                    quality={100}
                />
            </div>
        
            <div className="relative z-10 flex pt-8">
    <div className="w-1/2 m-auto">
        {/* Card container for buttons */}
        <div className="flex flex-row justify-between gap-2  bg-transparent  bg-white rounded-full opacity-80 shadow-lg">
            {tabs.map(tab => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={` font-normal text-xl rounded-full z-1000 p-3.5 transition-transform duration-300 transform hover:scale-105  ${
                        activeTab === tab.id
                            ? ' bg-green-900 text-white  backdrop-blur-xl border border-solid border-cyan-950 '
                            : 'bg-transparent text-gray-900 shadow-2xl '
                    }`}
                    style={{
                        width: '35%', // Adjusted width
                        textAlign: 'center',
                    }}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    </div>
</div>


            <div className="w-2/3 relative text-white text-2xl pt-20 rounded-lg shadow-lg m-auto">
                {activeTabData.content}
            </div>

            </div>
            </>
            )}
            </section>
    );
};

export default HomeTabs;
