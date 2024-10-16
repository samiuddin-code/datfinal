import Link from "next/link";
import { MailusIcon } from "@/icons/UtilIcons";

const MailusButton = ({link,text,classList,icon,external,...rest}) => {
    let btnClass = classList + (icon ? " pr-20" : " pr-8");
    return (
        <>
        {
            external ?
            <div {...rest} rel="noopener noreferrer" target="_blank" className={btnClass + " text-left tracking-widest inline-block text-sm py-5 pl-8 uppercase  leading-4 relative group overflow-x-hidden hover:text-white"}>
                <span className="relative z-10">{text}</span>
                {
                    icon &&
                    <span className="ml-8 absolute right-12 top-1/2 transform -translate-y-1/2 text-xl leading-4 group-hover:right-8 transition-all duration-300 custom-transition z-10">
                        <MailusIcon />
                    </span>
                }
                <span className="w-full h-0 absolute bottom-0 left-0 bg-green-900 custom-transition transition-all duration-300 group-hover:h-full pointer-events-none"></span>
            </div>:
            <Link href={link}>
                <div {...rest} className={btnClass + " text-left tracking-widest inline-block text-sm py-5 pl-8 uppercase leading-4 relative group overflow-x-hidden hover:text-white"}>
                    <span className="relative z-10">{text}</span>
                    {
                        icon &&
                        <span className="ml-8 absolute right-12 top-1/2 transform -translate-y-1/2 text-xl leading-4 group-hover:right-8 transition-all duration-300 custom-transition z-10">
                            <MailusIcon />
                        </span>
                    }
                    <span 
                       className="w-full h-0 absolute bottom-0 left-0 bg-green-900 custom-transition transition-all duration-300 group-hover:h-full pointer-events-none"
                       style={{
                        background: 'linear-gradient(90deg, rgba(10,188,103,1) 0%, rgba(0,97,74,1) 100%)'
                      }}
                       ></span>
                </div>
            </Link>

        }
        </>
    )
}

MailusButton.defaultProps = {
  link: '/',
  classList: 'bg-gray-50 text-gray-900 ',
  text: 'Click here',
  icon: true,
  external:false,
}

export default MailusButton
