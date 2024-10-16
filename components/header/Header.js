import {useEffect, useRef, useState} from 'react'
import Link from 'next/link'
import Navigation from '@/header/navigation/Navigation'
import MobileNavigation from '@/header/navigation/MobileNavigation'
import Logo from '@/icons/Logo'
import Langugae from '@/header/Langugae'
import TextLoop from '../herosection/TextLoop'
import Image from 'next/image'
import Logofooter from '../icons/Logofooter'
export default function Header({noImageHeader}) {
    const header = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const [isStick,setIsStick] = useState(false);
    const [scrolled,setScrolled] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const hide = () => setIsOpen(false);
    const show = () => setIsOpen(true);
    const navigation = [
        // { link: '#', text: 'Company' },
        // { link: '#', text: 'Our Expertise' },
        // { link: '#', text: 'Projects' },
        // { link: '#', text: 'NewsRoom' },
        // { link: '#', text: 'Contact' },
        { link: '/about', text: 'About Us' },
        { link: '/services', text: 'Our Expertise' },
        { link: '/projects', text: 'Projects' },
        { link: '/blog', text: 'Newsroom' },
        { link: '/contact', text: 'Contact' },
        { link: '/payment', text: 'Online Payment'},
        { link: '/join-us', text: 'Join Us'}
    ];
    function stickWhenScroll(){
        window.addEventListener("scroll",() => {
            setScrolled(true);
            if(window.scrollY === 0){
                setIsStick(false);
            }else{
                setIsStick(true);
            }
        })
        window.addEventListener("DOMContentLoaded",() => {
            setScrolled(true);
            if(window.scrollY === 0){
                setIsStick(false);
            }else{
                setIsStick(true);
            }
        })
        
    }
    useEffect(() => {
        stickWhenScroll();
        return () => {
            setIsOpen(false);
            setIsStick(false);
        }
    },[])
    return (
        <header ref={header} className={(isOpen ? " h-screen " : "") + (isStick ? " py-2 lg:py-2 " : " py-5 lg:py-2 lg:top-8 ") + (!scrolled ? " lg:animate-from-top" : "") + (noImageHeader ? " sticky lg:fixed" : " fixed") + " bg-transparent top-0 z-50 w-full left-0 bg-opacity-0 overflow-hidden transition-all custom-transition duration-300"}>
        <div className={(isStick ? "h-16 lg:h-16" : "h-0")+ " w-full top-0 fixed pointer-events-none duration-300 transition-all custom-transition shadow-sm bg-white"}></div>
            <nav className="h-full">
                <div className="max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-6xl xl:max-w-7xl mx-auto px-8">
                    <div className="relative flex items-center justify-between h-12 z-10">
                        {/* <div className="flex-1 flex items-stretch justify-between"> */}
                        <div className="flex-1 flex items-stretch justify-between"> 
                            <div className="flex-shrink-0 flex items-center text-center" style={{width: "120px"}}>
                                <Link href="/">
                                    <div className={(
                                            isStick ? 
                                            (isOpen ? "text-white" : "text-green-900") : 
                                            (   isOpen ? ("text-white") : 
                                                (noImageHeader ? " text-green-900" : " text-white")
                                            )
                                        ) 
                                        + " transition-all duration-300 ease-in-out transform"}>
                                        {isStick ? (
                                            <Logofooter />
                                       
                                            ) : (
                                                 
                <div className="text-white-900">
                    {/* <Logo /> */}
               
                                <div className="text-white-900">
                                    <Logo />
                                    <span className="sr-only">Logo</span>
                                </div>
                       
            
                </div>
    

                                            )}
                                        {/* {
                                            (!isStick) && 
                                            <div className='text-center mt-1 overflow-hidden' style={{height: "24px"}}>
                                            <TextLoop />
                                            </div>
                                        } */}
                                       
                                        <span className="sr-only">Logo</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="hidden lg:block sm:ml-auto lg:ml-0 mr-12">
                                <Navigation noImageHeader={noImageHeader} navigation={navigation} isStick={isStick}/>
                            </div>
                            <div className="hidden sm:flex items-center">
                                <Langugae noImageHeader={noImageHeader} isStick={isStick}/>
                            </div>
                            <div className="inset-y-0 right-0 flex items-center lg:hidden">
                                <button type="button" className={(!isStick ? " " : "bg-green-900 inline-flex items-center justify-center p-2 text-white outline-none align-middle h-12 w-12 rounded-full")} aria-controls="mobile-menu" aria-expanded="false" onClick={toggle}>
                                    <span className="sr-only">Open main open</span>
                                    <div className="flex h-[1.4rem] w-[1.4rem] flex-col justify-between">
                                        <span className={(isOpen ? "rotate-45 top-2.5 bg-gray-900" : "rotate-0 top-0 bg-white" ) + " transition-all duration-300 custom-transition relative transform w-full h-0.5 block"}/>
                                        <span className={(isOpen ? "opacity-0" : "opacity-100 bg-white" ) + " transition-all duration-300 custom-transition relative right-[-6px] top-0 w-4 h-0.5 block"}/>
                                        <span className={(isOpen ? "-rotate-45 bottom-2.5 bg-gray-900" : "rotate-0 bottom-0 bg-white" ) + " transition-all duration-300 custom-transition relative transform w-full h-0.5 block"}/>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={(!isOpen && "hidden") + " h-full lg:hidden pt-12"} aria-hidden="true" id="mobile-menu">
                    <div className={(isOpen ? "animate-ping-once" : "animate-ping-once-reverse") + " origin-top-right rounded-full  transform bg-white absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 transition-all pointer-events-none z-0"} style={{height:"1200px",width:"250px"}}></div>
                    <div className="h-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl mx-auto px-8 absolute right-0 z-10">
                        <MobileNavigation isOpen={isOpen} navigation={navigation} hide={hide} show={show} toggle={toggle}/>
                    </div>
                </div>
            </nav>
        </header>
    )
}
