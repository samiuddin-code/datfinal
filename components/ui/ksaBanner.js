import { useEffect, useRef } from 'react';
import Image from 'next/image';

const KsaBanner = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const scrollTop = window.scrollY;
                const containerHeight = containerRef.current.clientHeight;
                const offset = Math.min(100, (scrollTop / containerHeight) * 100);
                containerRef.current.style.setProperty('--scroll-offset', `${offset}%`);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="relative">
            {/* <h2 className="font-normal mb-6 text-3xl capitalize md:text-4xl font-neuehaas text-center max-w-two-lines">
                Experts in Engineering Consulting & Design Solutions.
            </h2> */}
            <div className={`relative w-full aspect-w-16 aspect-h-9 imageContainer`} ref={containerRef}>
                <Image
                    src="/featured1.webp"
                    alt="Banner"
                    layout="responsive"
                    width={1920}
                    height={1200}
                />
                {/* <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl w-full absolute transform -translate-x-1/2 -translate-y-1/3 left-1/2 z-20 lg:pt-20 top-20">
                    <h2 className={`topLeftHeading font-normal text-3xl capitalize md:text-4xl font-neuehaas text-white`}>
                        A Modern Townhouse design in KSA
                    </h2>
                </div> 
                <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl w-full absolute transform -translate-x-1/2 -translate-y-1/4 top-2/3 left-1/2 z-20 lg:pt-28 bottom-0">  
                    <h2 className={`font-normal text-3xl capitalize md:text-4xl font-neuehaas text-white`}>
                        Townhouse Lara Community, 
                    </h2>
                    <h3 className={`font-normal text-lg capitalize md:text-xl font-neuehaas text-white`}>
                        Mohammadiya, KSA
                    </h3>
                </div> */}

<div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl w-full absolute transform -translate-x-1/2 -translate-y-1/3 left-1/2 z-20 top-8 lg:top-20 sm:top-8">
    <h2 className="topLeftHeading font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl font-neuehaas text-white">
        A Modern Townhouse design in KSA
    </h2>
</div>

                {/* <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl w-full absolute transform -translate-x-1/2 -translate-y-1/4 top-2/3 left-1/2 z-20 lg:pt-28 bottom-0"> */}
                <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl w-full absolute transform -translate-x-1/2 -translate-y-1/4 left-1/2 z-20 lg:pt-28 bottom-0">
                    <h2 className={`font-normal text-lg sm:text-xl pl-2 md:pl-4 md:text-2xl lg:text-3xl font-neuehaas text-white`}>
                        Townhouse Lara Community,
                    </h2>
                    <h3 className={`font-normal text-sm sm:text-base pl-2 md:pl-4 md:text-lg lg:text-xl font-neuehaas text-white`}>
                        Mohammadiya, KSA
                    </h3>
                </div>

                <div className="overlay"></div>
            </div>

            <div className={`relative w-full aspect-w-16 aspect-h-9 imageContainer`} ref={containerRef}>
                <Image
                    src="/featured2.webp"
                    alt="Banner"
                    layout="responsive"
                    width={1920}
                    height={1200}
                />
                <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl w-full absolute transform -translate-x-1/2 -translate-y-1/3 left-1/2 z-20 top-8 lg:top-20 sm:top-8">
                    <h2 className={`topLeftHeading font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl font-neuehaas text-white`}>
                      Simplicity Redefined: <br />A Versatile Modern Villa Design
                    </h2>
                </div> 
                {/* <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl w-full absolute transform -translate-x-1/2 -translate-y-1/4 top-2/3 left-1/2 z-20 lg:pt-28 bottom-0">   */}
                <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl w-full absolute transform -translate-x-1/2 -translate-y-1/4 left-1/2 z-20 lg:pt-28 bottom-0">  
                <h2 className={`font-normal text-lg sm:text-xl pl-2 md:pl-4 md:text-2xl lg:text-3xl font-neuehaas text-white`}>
                       White Pearl Villa, 
                    </h2>
                    <h3 className={`font-normal text-sm sm:text-base pl-2 md:pl-4 md:text-lg lg:text-xl font-neuehaas text-white`}>
                       Pearl Jumeirah, Dubai
                    </h3>
                </div>
                <div className="overlay"></div>
            </div>

            <div className={`relative w-full aspect-w-16 aspect-h-9 imageContainer`} ref={containerRef}>
                <Image
                    src="/featured3.webp"
                    alt="Banner"
                    layout="responsive"
                    width={1920}
                    height={1200}
                />
                <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl w-full absolute transform -translate-x-1/2 -translate-y-1/3 left-1/2 z-20 top-8 lg:top-20 sm:top-8">
                    <h2 className={`topLeftHeading font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl font-neuehaas text-white`}>
                    A luxury private mansion in a modern design
                    </h2>
                </div> 
                {/* <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl w-full absolute transform -translate-x-1/2 -translate-y-1/4 top-2/3 left-1/2 z-20 lg:pt-28 bottom-0">   */}
                <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl w-full absolute transform -translate-x-1/2 -translate-y-1/4 left-1/2 z-20 lg:pt-28 bottom-0">  
                <h2 className={`font-normal text-lg sm:text-xl pl-2 md:pl-4 md:text-2xl lg:text-3xl font-neuehaas text-white`}>
                       Private Mansion, 
                    </h2>
                    <h3 className={`font-normal text-sm sm:text-base pl-2 md:pl-4 md:text-lg lg:text-xl font-neuehaas text-white`}>
                        District One
                    </h3>
                </div>
                <div className="overlay"></div>
            </div>
        </section>
    );
};

export default KsaBanner;
