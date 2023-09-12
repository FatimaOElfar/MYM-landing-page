import React from 'react'
import "./helpus.css"
import {FiPhoneCall} from "react-icons/fi";
import {IoEarthOutline} from "react-icons/io5";
import {MdDesignServices} from "react-icons/md";
import {BiCodeCurly} from "react-icons/bi";
import {TbBrandSpeedtest} from "react-icons/tb";
import {RiMoneyDollarCircleLine} from "react-icons/ri";
import { useTranslation } from 'react-i18next'



function Helpus() {

    const { t, i18n } = useTranslation()

    const helpus = [
        {
            heading: t('helpus-card1-title'),
            description: t('helpus-card1-description'),
            icon: <FiPhoneCall/>,
            number: 1
        },
        {
            heading: t('helpus-card2-title'),
            description: t('helpus-card2-description'),
            icon:<IoEarthOutline/>,
            number: 2
        },
        {
            heading: t('helpus-card3-title'),
            description: t('helpus-card3-description'),
            icon: <MdDesignServices/>,
            number: 3
        },
        {
            heading: t('helpus-card4-title'),
            description: t('helpus-card4-description'),
            icon: <BiCodeCurly/>,
            number : 4
        },
        {
            heading: t('helpus-card5-title'),
            description: t('helpus-card5-description'),
            icon: <TbBrandSpeedtest/>,
            number : 5
        },
        {
            heading: t('helpus-card6-title'),
            description: t('helpus-card6-description'),
            icon: <RiMoneyDollarCircleLine/>,
            number: 6
        },

    ]



    const listItems = helpus.map((item,index)=>(
        <div className='helpus-card bg-white relative rounded-lg overflow-hidden shadow-lg' key={index}>
            <div className='flex justify-between'>
                <span className='helpus-number'>
							{item.number}
						</span>
                <span className='m-3 helpus-icon'>{item.icon}</span>
            </div>
            <div className='m-16 mt-0 mb-4 flex flex-col justify-between'>
                <h3 className=' text-2xl mb-3'>{item.heading}</h3>
                <p className='text-md'>{item.description}</p>
            </div>
        </div>
    ));
  return (
    <div className='helpus_container mt-5' id='Help-us'>
    <h1 className='helpus_heading text-3xl font-bold text-center'>{t('helpus-heading')} <span style={{color: "#FF1013"}}>{t('helpus-span')}</span></h1>
    <p className='helpus_description text-center text-2xl pt-2'>{t('helpus-description')}</p>
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-16 px-12'>
        {listItems}
    </div>
    </div>
  )
}

export default Helpus