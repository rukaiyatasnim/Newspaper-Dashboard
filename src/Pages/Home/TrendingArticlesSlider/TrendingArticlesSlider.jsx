import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const articles = [
    {
        title: "🌿 Govt Approves New Green Policy",
        desc: "Bangladesh's new environmental policy aims to reduce carbon emissions by 45% before 2040. Experts are calling this a big leap toward climate resilience.",
        btn: "Read Full Article",
        link: "/news/green-policy",
        img: "/images/green-policy.jpg"
    },
    {
        title: "💧 Clean Water Tech Expands in Rural Areas",
        desc: "New filtration systems have been installed across 20 villages, providing safe drinking water to over 50,000 residents with low maintenance cost.",
        btn: "Learn More",
        link: "/news/clean-water-expansion",
        img: "/images/clean-water.jpg"
    },
    // ...other articles
];

const TrendingArticlesSlider = () => (
    <div className="w-full mt-6">
        <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4500 }}
            pagination={{ clickable: true }}
            loop
        >
            {articles.map(({ title, desc, btn, link, img }, i) => (
                <SwiperSlide key={i}>
                    <div
                        className="h-[400px] md:h-[500px] flex flex-col justify-center items-center text-center px-6 md:px-16 bg-cover bg-center rounded-lg shadow-md"
                        style={{ backgroundImage: `url(${img})` }}
                    >
                        <div className="bg-green-900 bg-opacity-30 dark:bg-opacity-50 p-6 rounded-lg">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{title}</h2>
                            <p className="text-white max-w-3xl text-base md:text-lg mb-5 leading-relaxed">{desc}</p>
                            <a
                                href={link}
                                className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white px-5 py-2 rounded-full transition"
                            >
                                {btn}
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
);

export default TrendingArticlesSlider;
