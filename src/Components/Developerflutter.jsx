import {PiBracketsCurly }from 'react-icons/pi';
import {TbBrandSpeedtest} from "react-icons/tb";
import {TbDevicesStar} from 'react-icons/tb'
import iphone2 from '../assets/iphone2.png'
import {FaEarthAfrica} from "react-icons/fa6";
import {TbDeviceMobileCode} from "react-icons/tb";
import { t } from 'i18next';
import { useTranslation } from 'react-i18next'


const Developerflutter = () => {

  const { t, i18n } = useTranslation()

  return (
    <div className='mt-5'>
      <div className=' text-center  '>
        <h1 className='text-[#000000] text-4xl font-bold '>{t('DeveloperFlutter')} <span className='text-[#FF1013]' >{t('DeveloperFlutter-span')}</span></h1>
        <p className='text-[gray] text-2xl pt-2 m-auto max-w-2xl md:px-2'>{t('DeveloperFlutter-description')}</p>
      </div>
      <div className='imageDev w-[80%] m-auto mt-[20px] grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] text-center gap-10 '>
       <div className='left flex flex-col mt-[30px]'>
       <div className='helpus-card mb-[16px] bg-white relative rounded-lg overflow-hidden shadow-lg pb-5 h-fit'>
                    <div className='flex justify-between'>
                    <span className='helpus-number'>1</span>
                        <span className='m-3 helpus-icon'>
                            <PiBracketsCurly/>
                        </span>
                    </div>
                    <div className='mx-16 flex flex-col justify-between'>
                        <h3 className='text-2xl mb-0'>{t('DeveloperFlutter-card1-title')}</h3>
                        <p className='text-md'>{t('DeveloperFlutter-card1-description')}</p>
                    </div>
                </div>
                <div className='helpus-card bg-white relative rounded-lg overflow-hidden shadow-lg pb-5 h-fit'>
                    <div className='flex justify-between'>
                    <span className='helpus-number'>2</span>
                        <span className='m-3 helpus-icon'>
                            <TbDeviceMobileCode/>
                        </span>
                    </div>
                    <div className='mx-16 flex flex-col justify-between'>
                        <h3 className='text-2xl mb-0'>{t('DeveloperFlutter-card2-title')}</h3>
                        <p className='text-md'>{t('DeveloperFlutter-card2-description')}</p>
                    </div>
                </div>
       </div>
                
       <div className='iphoneimage'>
        <img src={iphone2} alt="iphone-image" className='w-full mt-32' />
       </div>
       <div className='left flex flex-col mt-[30px]'>
       <div className='helpus-card mb-[16px] bg-white relative rounded-lg overflow-hidden shadow-lg pb-5 h-fit'>
                    <div className='flex justify-between'>
                    <span className='helpus-number'>3</span>
                        <span className='m-3 helpus-icon'>                          
                            <TbDevicesStar/>
                        </span>
                    </div>
                    <div className='mx-10 flex flex-col justify-between'>
                        <h3 className=' text-2xl mb-0'>{t('DeveloperFlutter-card3-title')}</h3>
                        <p className='text-md'>{t('DeveloperFlutter-card3-description')}</p>
                    </div>
                </div>
                <div className='helpus-card bg-white relative rounded-lg overflow-hidden shadow-lg pb-5 h-fit'>
                    <div className='flex justify-between'>
                    <span className='helpus-number'>4</span>
                        <span className='m-3 helpus-icon'>
                            <TbBrandSpeedtest/>
                        </span>
                    </div>
                    <div className='mx-16 flex flex-col justify-between'>
                        <h3 className=' text-2xl mb-0'>{t('DeveloperFlutter-card4-title')}</h3>
                        <p className='text-md'>{t('DeveloperFlutter-card4-description')}</p>
                    </div>
                </div>
       </div>
      </div>
    </div>
  )
}

export default Developerflutter


