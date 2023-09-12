import { IoEarthOutline } from "react-icons/io5";
import { BiCodeCurly } from "react-icons/bi";
import iphone from '../assets/iphone.png'
import { FaEarthAfrica } from "react-icons/fa6";
import { TbDeviceMobileCode } from "react-icons/tb";
import { useTranslation } from 'react-i18next'


import "./aboutus.css"
function Aboutus() {
    const { t, i18n } = useTranslation()


  return (
    <div id='AboutUs' className='aboutus-container my-10' >
      <h1 className='aboutus-heading text-5xl font-bold mb-5'>{t('aboutus-Heading')}</h1>
      <h3 className='aboutus-subtitle text-3xl mb-2'>{t('aboutus-title')}</h3>
      <p className='aboutus-description w-fit text-2xl font-normal'>
        {t('aboutus-description')}
      </p>
      <div className='imageDev w-[100%] mt-[20px] grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  text-center gap-10 '>
        <div className='helpus-card bg-white relative rounded-lg overflow-hidden shadow-lg pb-5 h-fit'>
          <div className='flex justify-between'>
            <span className='helpus-number'>1</span>
            <span className='m-3 helpus-icon'>
              <TbDeviceMobileCode />
            </span>
          </div>
          <div className='mx-16 flex flex-col justify-between'>
            <h3 className='text-2xl mb-0'>10+</h3>
            <p className='text-md'>{t('aboutus-card1')}</p>
          </div>
        </div>
        <div className='iphoneimage'>
          <img src={iphone} alt="iphone-image" className='iphone1 w-full' />

        </div>
        <div className='helpus-card bg-white relative rounded-lg overflow-hidden shadow-lg pb-5 h-fit'>
          <div className='flex justify-between'>
            <span className='helpus-number'>2</span>
            <span className='m-3 helpus-icon'>
              <FaEarthAfrica />
            </span>
          </div>
          <div className='mx-16 my-0 flex flex-col justify-between'>
            <h3 className='text-2xl dark:text-black'>13+</h3>
            <p className='text-md'>{t('aboutus-card2')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}


// </div>

export default Aboutus