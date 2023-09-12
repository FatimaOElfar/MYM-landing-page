import Navbar from "../navbar/Navbar"
import './headar.css'
import { useTranslation } from 'react-i18next'
import Saly from "../../assets/Saly-19.png"
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter} from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";


const Header = () => {
    const { t, i18n } = useTranslation()

    return (
        <div className='header h-full overflow-hidden'>
            <Navbar />
            <div className='flex container mx-5  space-around'>
                <div className='header-text text-white mx-5'>
                    <h1 className="sm:text-4xl md:text-5xl font-bold text-white">
                        {t('Header-title')}<span className='text-[#FF1013] p-1'>{t('Header-span1')}</span> {t('Header-span2')}
                    </h1>
                    <h5 className='my-4 text-2xl'>{t('Header-description')}</h5>
                    {/* <button><a rel='noreferrer' href="https://wa.me/qr/2PUHCENU7QALF1" target="_blank">{t('button')}</a></button> */}
                    <a rel='noreferrer' href="https://wa.me/201126765371" target="_blank"><button>{t('button')}</button></a>
                </div>
                <div className='header-image'>
                     <img className='' src={Saly} alt='image'/>
                </div>
            </div>
            <div className="Header-footer rounded-t-[30px]" >
                    {/* <img src={HeaderFrame} style={{width:"100%" ,marginTop:"-6rem"}} alt="" /> */}
                <div className="Header-footer-container">
                    <div>
                    <h3>{t('Header-Footer-heading')}</h3>
                    <p>{t('Header-Footer-description')}</p>
                    </div>
                    <div>
                        <h4>{t('Header-Footer-heading2')}</h4>
                        <div className="HeaderFooter_icons">
                            <div className="icon"><FaLinkedin/></div>
                            <div className="icon"><FiYoutube/></div>
                            <div className="icon"><FaInstagram/></div>
                            <div className="icon"><FaTwitter/></div>
                            <div className="icon"><FaFacebook/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header