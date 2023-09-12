import './technologiesused.css'
import { BiLogoFlutter } from 'react-icons/bi'
import {BiLogoJavascript} from 'react-icons/bi'
import {FaNodeJs} from 'react-icons/fa'
import {FiFigma} from 'react-icons/fi'
import {GiCyberEye} from 'react-icons/gi'
import {BiLogoJava} from 'react-icons/bi'
import { useTranslation } from 'react-i18next'


const TechnologiesUsed = () => {
  const { t, i18n } = useTranslation()

  const technologies = [
    { number: 1, name: 'FrontEnd', icon: <BiLogoJavascript /> },
    { number: 2, name: 'BackEnd', icon: <FaNodeJs /> },
    { number: 3, name: 'Flutter', icon: <BiLogoFlutter /> },
    { number: 4, name: 'UI/UX', icon: <FiFigma /> },
    { number: 5, name: 'CyberSecurity', icon: <GiCyberEye /> },
    { number: 6, name: 'Java', icon: <BiLogoJava /> },
  ];

  return (
    <div className='technologies-used mt-5 py-10 px-10' id='TechnologiesUsed'>
      <div className='container'>
        <h3 className='text-center text-white font-bold text-3xl'>{t('Technologiesused-heading')}</h3>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-16 text-black'>
          {technologies.map((item, index) => (
            <div className='technologies-card bg-white relative rounded-lg overflow-hidden' key={index}>
              <span className='technologies-number'>
                {item.number}
              </span>
              <div className='p-10 pt-0 technologies-name text-4xl font-medium flex justify-center'>
                {item.name}
                <span className='text-4xl mx-2 my-1'>{item.icon}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default TechnologiesUsed