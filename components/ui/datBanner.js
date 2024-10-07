import Image from 'next/image';
import { useState } from 'react';

const DatBanner = () => {
    const [imageSrc, setImageSrc] = useState('/defaultbanner.webp')

    return (
        <section className="pt-8 lg:pt-12">
            <h2 className="font-normal z-10 mb-6 text-3xl capitalize md:text-xl lg:text-4xl font-neuehaas text-center max-w-two-lines">
                Experts in Engineering Consulting & Design Solutions.
            </h2>
            <div
                className="relative w-full aspect-w-16 aspect-h-9"
                onMouseEnter={() => setImageSrc('/defaultcolorbanner.webp')}
                onMouseLeave={() => setImageSrc('/defaultbanner.webp')}
            >
                <Image
                    src={imageSrc}
                    alt="Banner"
                    layout="responsive"
                    width={1920}
                    height={1000}
                    className="transition-opacity duration-300"
                />
            </div>
            
        </section>
    );
};

export default DatBanner;
