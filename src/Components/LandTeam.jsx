import Data from "../data.json";
import { FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./LandTeam.css";
import { Navigation, Pagination } from "swiper/modules";
import { useTranslation } from 'react-i18next'


const LandTeam = () => {
  const { t, i18n } = useTranslation();

  const [images, setImage] = useState(Data);
  const [filter, setFilter] = useState("all");
  const HandelJobfilter = (job) => {
    setFilter(job);
  };
  const filteredImages =
    filter === "all" ? images : images.filter((image) => image.job === filter);

  return (
    <div className="  content w-full p-0 m-0 justify-center " id="Team">
      <div className="container-Landing">
        <div className="head">
          <h2 className="text-center pt-20 text-4xl font-bold">
            {t("Team-heading")}
          </h2>
        </div>
        <div className=" button pt-8 text-center">
          <ul className=" list flex flex-wrap justify-center">
            <li className="p-3 rounded-lg">
              <button
                onClick={() => HandelJobfilter("all")}
                className="border  p-2 text-center w-32 bg-white text-text-color
                  rounded-lg font-custom transition duration-300 ease-in-out transform 
                  "
              >
                {" "}
                {t("land-Team-All")}
              </button>
            </li>
            <li className="p-3 rounded-lg">
              <button
                onClick={() => HandelJobfilter("Frontend")}
                className="border p-2 text-center w-32 bg-background-color text-text-color
                 rounded-lg  font-custom transition duration-300 ease-in-out transform  "
              >
                {" "}
                {t("land-Team-Web")}
              </button>
            </li>
            <li className="p-3 rounded-lg">
              <button
                onClick={() => HandelJobfilter("Flutter")}
                className="border  p-2 text-center w-40 text-[14px] bg-background-color text-text-color rounded-lg font-custom transition duration-300 ease-in-out transform "
              >
                {t("land-Team-Flutter")}
              </button>
            </li>
            <li className="p-3 rounded-lg">
              <button
                onClick={() => HandelJobfilter("UI-UX")}
                className="border p-2 text-center w-32 text-[#9D9D9D] rounded-lg text-[14px] font-custom transition duration-300 ease-in-out transform hover:bg-color "
              >
                {" "}
                {t("land-Team-UX-UI")}
              </button>
            </li>
            <li className="p-3 rounded-lg">
              <button
                onClick={() => HandelJobfilter("Owner")}
                className="border  p-2 text-center w-32 bg-background-color text-text-color rounded-lg font-custom transition duration-300 ease-in-out transform hover:bg-color "
              >
                {" "}
                {t("land-Team-Manager")}
              </button>
            </li>
            <li className="p-3 rounded-lg">
              <button
                onClick={() => HandelJobfilter("Back-End")}
                className="border  p-2 text-center w-32 bg-background-color text-text-color rounded-lg  font-custom transition duration-300 ease-in-out transform "
              >
                {t("land-Team-Backend")}
              </button>
            </li>
          </ul>
        </div>

        <div className="landteam-container m-10">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
              clickable: true,
              type: "progressbar",

            }}
            // modules={[]}
            navigation={true}
            modules={[Pagination, Navigation]}
            breakpoints={{
              // Set different settings for different screen sizes
              768: {
                slidesPerView: 2, // Show two cards at a time on tablets
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 4, // Show four cards at a time on larger screens
                spaceBetween: 20
              }
            }}
            className="mySwiper"
          >
            {filteredImages.map((data) => (
              <SwiperSlide key={data.id}>
                <div className="bg-white rounded-lg shadow-md p-4  flex flex-col items-center justify-center">
                  <img
                    src={data.link}
                    alt=""
                    className="w-full h-full object-cover mb-4 rounded-xl"
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-black">{data.Name}</h3>
                    <p className="text-gray-600 mb-4"> {data.job}</p>
                    <div className="flex space-x-2 justify-center">
                      <a
                        href={data.Linked}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2"
                      >
                        <FaLinkedin className="h-7 w-7 rounded-full text-[#37ABDE] bg-[#fff]" />
                      </a>
                      <a
                        href={data.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 "
                      >
                        <FaGithub className="h-7 w-7 rounded-full text-[#37ABDE] bg-[#fff]" />
                      </a>
                      <a href="" target="_blank" rel="noopener noreferrer"
                        className="px-2"
                      >
                        <FaBehance className="h-7 w-7 rounded-full text-[#37ABDE] bg-[#fff]" />

                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default LandTeam;
