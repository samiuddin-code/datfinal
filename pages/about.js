import Meta from '@/components/Meta'
import BannerSection from '@/banners/BannerSection';
import HeroSection from '@/herosection/HeroSection'
import ExternalImage from '@/ui/ExternalImage';
import Layout from '@/components/Layout';
import ModalButton from '@/modals/ModalButton';
import fetchData from "@/apiData/resolver";
import Clients from '@/ui/Clients'


export default function About({response}) {
    const [aboutPage, clientsData] = response;
    const {bannerData,datData,profileData,richText,sectionWithImage,seoData,ourMissionVisionHighlight,ourMissionVision,ourTeam} = aboutPage.data
  return (
    <>
    <Layout apiData={response} modalForm={true}>
      <Meta title={seoData.title} keywords={seoData.keywords} description={seoData.description} image={seoData.image} />
      {/* Hero Image section */}
      <HeroSection title={bannerData.highlight} folder="uploads/generalSections" image={bannerData.image} alt={bannerData.highlight} description={bannerData.shortInfo} />
      
      <section className="py-10 lg:py-10">
            <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-7xl mx-auto px-8">
              {/* <div className="flex flex-wrap interactive-element pt-4"> */}
              <div className="flex flex-row interactive-element pt-4">
                  <div className="lg:w-4/12 relative text-xl lg:pt-4 lg:pl-4 mr-8 mb-6">
                      {datData.title}
                  </div>
                  <div className="lg:w-8/12 relative lg:pt-4 lg:pl-4 flex items-center">
                    <div className="w-full">
                     <p className="w-full text-gray-700 text-left text-sm lg:text-base mb-8">
                        {datData.highlight}
                     </p>  
                     <p className="w-full text-gray-700 text-left text-sm lg:text-base mb-8">
                        {datData.shortInfo}
                     </p> 
                    </div>
                  </div>
              </div>
            </div>
      </section>

      <section className="py-10 lg:py-10 bg-white">
        <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-7xl mx-auto px-8">
            <div className="w-full interactive-element top">
                {/* <span className="font-bold uppercase block mb-2 text-sm tracking-widest">#wearedat</span> */}
                <h2 className="mb-16 text-3xl font-semibold capitalize md:text-4xl ">The Board</h2>
            </div>
            {/* <div className="mb-16 interactive-element top">
                <p className="max-w-sm mb-10">{ourMissionVisionHighlight}</p>
            </div> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 last:mb-0 mb-8 gap-x-8 gap-y-8">
                {/* {
                    ourMissionVision.map(item => (
                        <div key={item.title} className="shadow-none bg-white bg-opacity-0 transition-all duration-300 ease-linear h-full interactive-element top">
                            <div className="mb-4 relative h-52 overflow-hidden">
                                <ExternalImage folder="uploads/generalSections" className="transform transition-all duration-300 in-expo hover:scale-125" src={item.image} alt={item.imageAlt} layout="responsive" width={340} height={210} objectFit="cover" />
                            </div>
                            <div className="card-height">
                                <h3 className="mb-4 text-xl font-medium">{item.title}</h3>
                                <span className="text-gray-500 mb-4 text-sm block">{item.highlight}</span>
                                <p className="text-gray-700 text-lg font-medium">{item.shortInfo}</p>
                                {
                                    item.iconOrBlurp &&
                                    <span className="text-gray-500 mt-4 block">– {item.iconOrBlurp}</span>
                                }
                            </div>
                        </div>
                    ))
                } */}

                {
                    profileData && profileData[0] &&
                        <div className="shadow-none bg-white bg-opacity-0 transition-all duration-300 ease-linear h-full interactive-element top">
                            <div className="mb-4 h-96 w-80 relative overflow-hidden">
                            <ExternalImage folder="uploads/generalSections" src={profileData[0].image} layout="responsive" alt={profileData[0].imageAlt} width={300} height={300} objectFit="cover" />
                            </div>
                            <div className="card-height">
                                <h2 className="mb-6 flex text-lg font-normal capitalize">{profileData[0].title}, <span className="font-normal capitalize block text-lg text-gray-500">{profileData[0].iconOrBlurp}</span></h2>
                                <p className="w-full font-normal tracking-wide text-gray-700 text-left text-sm mb-8">{profileData[0].highlight}</p>
                                {/* <p className="text-sm">{profileData[0].shortInfo}</p> */}
                            </div>
                        </div>
                }

                {
                    profileData && profileData[0] &&
                        <div className="shadow-none bg-white bg-opacity-0 transition-all duration-300 ease-linear h-full interactive-element top">
                            <div className="mb-4 h-96 w-80 relative overflow-hidden">
                            <ExternalImage folder="uploads/generalSections" src={profileData[1].image} layout="responsive" alt={profileData[1].imageAlt} width={300} height={300} objectFit="cover" />
                            </div>
                            <div className="card-height">
                                <h2 className="mb-6 flex text-lg font-normal capitalize">{profileData[1].title}, <span className="font-normal capitalize block text-lg text-gray-500">{profileData[1].iconOrBlurp}</span></h2>
                                <p className="w-full font-normal tracking-wide text-gray-700 text-left text-sm mb-8">{profileData[1].highlight}</p>
                                {/* <p className="text-sm">{profileData[0].shortInfo}</p> */}
                            </div>
                        </div>
                }

                {
                    profileData && profileData[0] &&
                        <div className="shadow-none bg-white bg-opacity-0 transition-all duration-300 ease-linear h-full interactive-element top">
                            <div className="mb-4 h-96 w-80 relative overflow-hidden">
                            <ExternalImage folder="uploads/generalSections" src={profileData[0].image} layout="responsive" alt={profileData[0].imageAlt} width={300} height={300} objectFit="cover" />
                            </div>
                            <div className="card-height">
                                <h2 className="mb-6 flex text-lg font-normal capitalize">{profileData[0].title}, <span className="font-normal capitalize block text-lg text-gray-500">{profileData[0].iconOrBlurp}</span></h2>
                                <p className="w-full font-normal tracking-wide text-gray-700 text-left text-sm mb-8">{profileData[0].highlight}</p>
                                {/* <p className="text-sm">{profileData[0].shortInfo}</p> */}
                            </div>
                        </div>
                }
            </div>
        </div>
      </section>

      <section className="py-10 lg:py-10 bg-white">
        <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl mx-auto px-8">
            <div className="w-full interactive-element top">
                <h2 className="mb-16 text-3xl font-semibold capitalize md:text-4xl ">The Team</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 last:mb-0 mb-8 gap-x-8 gap-y-4">

                {
                    ourTeam.map(item => (
                        <div key={item.title} className="shadow-none bg-white bg-opacity-0 transition-all duration-300 ease-linear h-full interactive-element top">
                            <div className="mb-4 h-96 w-70 relative overflow-hidden">
                            <ExternalImage folder="uploads/generalSections" src={item.image} layout="responsive" alt={item.imageAlt} width={300} height={300} objectFit="cover" />
                            </div>
                            <div className="card-height">
                                <h2 className="text-lg font-semibold capitalize">{item.title}</h2>
                                <span className="font-normal capitalize block text-lg text-gray-500">{item.iconOrBlurp}</span>
                                <p className="text-sm mb-6">{item.highlight}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
      </section>

      <Clients data={clientsData.data} />
      
      {/* Profile section */}
      {/* <section className="py-16 lg:py-20">
          <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-8">
          {profileData && profileData[0] &&
              <div className="flex flex-wrap interactive-element pt-4">
                  <div className="lg:w-4/12 relative lg:pt-4 lg:pl-4 mr-8 mb-6">
                        <div className="hidden lg:block h-80 w-80 absolute top-0 left-0">
                            <div className={"card__profile__wrap flex items-center justify-center h-full w-full"}>Image Border</div>
                        </div>
                        <div className="h-80 w-80 relative">
                            <ExternalImage folder="uploads/generalSections" src={profileData[0].image} layout="responsive" alt={profileData[0].imageAlt} width={300} height={300} objectFit="cover" />
                        </div>
                  </div>
                  <div className="lg:w-2/4 relative lg:pt-4 lg:pl-4 flex items-center">
                    <div className="w-full">
                        <span className="font-medium uppercase block mb-2 text-sm text-gray-700">{profileData[0].iconOrBlurp}</span>
                        <h2 className="mb-6 text-lg font-medium capitalize">{profileData[0].title}</h2>
                        <p className="text-sm mb-6">{profileData[0].highlight}</p>
                        <p className="text-sm">{profileData[0].shortInfo}</p>
                    </div>
                  </div>
              </div>
}
              {profileData && profileData[1] &&
              <div className="flex flex-wrap interactive-element pt-16">
                  <div className="lg:w-2/4 relative lg:pt-4 lg:pr-4 flex items-center ml-auto order-2 lg:order-1">
                    <div className="w-full">
                        <span className="font-medium uppercase block mb-2 text-sm text-gray-700">{profileData[1].iconOrBlurp}</span>
                        <h2 className="mb-6 text-lg font-medium capitalize">{profileData[1].title}</h2>
                        <p className="text-sm mb-6">{profileData[1].highlight}</p>
                        <p className="text-sm">{profileData[1].shortInfo}</p>
                    </div>
                  </div>
                  <div className="lg:w-4/12 relative lg:pt-4 lg:pr-4 lg:ml-8 order-1 lg:order-2 mb-6 lg:flex lg:justify-end">
                        <div className="hidden lg:block h-80 w-80 absolute top-0 right-0">
                            <div className={"card__profile__wrap flex items-center justify-center h-full w-full"}>Image Border</div>
                        </div>
                        <div className="h-80 w-80 relative ">
                            <ExternalImage src={profileData[1].image} folder="uploads/generalSections" layout="responsive" alt={profileData[1].imageAlt} width={300} height={300} objectFit="cover" />
                        </div>
                  </div>
              </div>
}

         {profileData && profileData[2] &&
              <div className="flex flex-wrap interactive-element pt-4">
                  <div className="lg:w-4/12 relative lg:pt-4 lg:pl-4 mr-8 mb-6">
                        <div className="hidden lg:block h-80 w-80 absolute top-0 left-0">
                            <div className={"card__profile__wrap flex items-center justify-center h-full w-full"}>Image Border</div>
                        </div>
                        <div className="h-80 w-80 relative">
                            <ExternalImage folder="uploads/generalSections" src={profileData[2].image} layout="responsive" alt={profileData[2].imageAlt} width={300} height={300} objectFit="cover" />
                        </div>
                  </div>
                  <div className="lg:w-2/4 relative lg:pt-4 lg:pl-4 flex items-center">
                    <div className="w-full">
                        <span className="font-medium uppercase block mb-2 text-sm text-gray-700">{profileData[2].iconOrBlurp}</span>
                        <h2 className="mb-6 text-lg font-medium capitalize">{profileData[2].title}</h2>
                        <p className="text-sm mb-6">{profileData[2].highlight}</p>
                        <p className="text-sm">{profileData[2].shortInfo}</p>
                    </div>
                  </div>
              </div>
}
        {
          profileData && profileData[3] &&
            <div className="flex flex-wrap interactive-element pt-16">
                <div className="lg:w-2/4 relative lg:pt-4 lg:pr-4 flex items-center ml-auto order-2 lg:order-1">
                    <div className="w-full">
                        <span className="font-medium uppercase block mb-2 text-sm text-gray-700">{profileData[3].iconOrBlurp}</span>
                        <h2 className="mb-6 text-lg font-medium capitalize">{profileData[3].title}</h2>
                        <p className="text-sm mb-6">{profileData[3].highlight}</p>
                        <p className="text-sm">{profileData[3].shortInfo}</p>
                    </div>
                </div>
                <div className="lg:w-4/12 relative lg:pt-4 lg:pr-4 lg:ml-8 order-1 lg:order-2 mb-6 lg:flex lg:justify-end">
                        <div className="hidden lg:block h-80 w-80 absolute top-0 right-0">
                            <div className={"card__profile__wrap flex items-center justify-center h-full w-full"}>Image Border</div>
                        </div>
                        <div className="h-80 w-80 relative ">
                            <ExternalImage src={profileData[3].image} folder="uploads/generalSections" layout="responsive" alt={profileData[3].imageAlt} width={300} height={300} objectFit="cover" />
                        </div>
                </div>
            </div>
        }
          </div>
      </section>
      banner section */}

      {/* section with image section */}
      <section className="py-16 lg:py-20">
          <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-7xl mx-auto px-8">
                {/* <div className="flex flex-wrap flex-row interactive-element top"> */}
                <div className="flex flex-row interactive-element top">
                    <div className="lg:w-6/12 xl:w-6/12 text-lg order-2 lg:order-1">
                    <div className="w-full interactive-element top">
                        <h2 className="mb-16 text-2xl font-normal capitalize md:text-3xl ">{sectionWithImage[0].title}</h2>
                    </div>
                        <p className='w-full text-gray-700 tracking-wide text-left text-lg mb-8'>{sectionWithImage[0].highlight}</p>
                        <p className='w-full font-normal tracking-wide text-gray-700 text-left text-lg mb-8'>{sectionWithImage[0].shortInfo}</p>
                        <p className='w-full font-normal tracking-wide text-gray-700 text-left text-lg mb-8'>{sectionWithImage[0].content}</p>
                    </div>
                    <div className="lg:w-6/12 xl:w-9/12 lg:pl-16 w-full mb-6 lg:mb-0 order-1 lg:order-2">
                        <div className="relative overflow-hidden">
                            <ExternalImage layout="responsive" className="transition-all transform duration-300 scale-100 hover:scale-125" folder="uploads/generalSections" width={600} height={375} src={sectionWithImage[0].image} alt={sectionWithImage[0].imageAlt}/>
                        </div>
                    </div>
                </div>
          </div>
      </section>

      <section className="py-16 lg:py-20">
          <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-7xl mx-auto px-8">
                {/* <div className="flex flex-row interactive-element top"> */}
                <div className="flex flex-wrap interactive-element top">
                    <div className="w-full lg:w-10/12 text-lg order-2 lg:order-1">
                    <div className="w-full interactive-element top">
                        <h2 className="mb-16 text-2xl font-normal capitalize md:text-3xl ">{sectionWithImage[1].title}</h2>
                    </div>
                        <p className='w-full text-gray-700 tracking-wide text-left text-lg mb-8'>{sectionWithImage[1].highlight}</p>
                    </div>
                </div>
          </div>
      </section>

      {/* <BannerSection content={richText.highlight}/> */}

      {/* Service Section */}
      {/* <section className="py-16 lg:py-20 bg-gray-50" id="mission">
        <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-8">
            <div className="w-full interactive-element top">
                <span className="font-bold uppercase block mb-2 text-sm tracking-widest">#wearedat</span>
                <h2 className="mb-6 text-3xl font-semibold capitalize md:text-4xl ">Our Mission</h2>
            </div>
            <div className="mb-16 interactive-element top">
                <p className="max-w-sm mb-10">{ourMissionVisionHighlight}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 last:mb-0 mb-8 gap-x-8 gap-y-8">
                {
                    ourMissionVision.map(item => (
                        <div key={item.title} className="shadow-none bg-white bg-opacity-0 transition-all duration-300 ease-linear h-full interactive-element top">
                            <div className="mb-4 relative h-52 overflow-hidden">
                                <ExternalImage folder="uploads/generalSections" className="transform transition-all duration-300 in-expo hover:scale-125" src={item.image} alt={item.imageAlt} layout="responsive" width={340} height={210} objectFit="cover" />
                            </div>
                            <div className="card-height">
                                <h3 className="mb-4 text-xl font-medium">{item.title}</h3>
                                <span className="text-gray-500 mb-4 text-sm block">{item.highlight}</span>
                                <p className="text-gray-700 text-lg font-medium">{item.shortInfo}</p>
                                {
                                    item.iconOrBlurp &&
                                    <span className="text-gray-500 mt-4 block">– {item.iconOrBlurp}</span>
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="pt-6 lg:pt-12 interactive-element top">
                <ModalButton btnText="Get in touch" btnClass="bg-white" btnIcon={true}/>
            </div>
        </div>
      </section> */}
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
    /* api endpoints url */
    let datas = [`/aboutUsPage`, `/clients`]
    /* response after resolving promise */
    const response = await fetchData(datas);
    /* if response not resolve move to 404 page */
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {response}, // will be passed to the page component as props
    }
}
