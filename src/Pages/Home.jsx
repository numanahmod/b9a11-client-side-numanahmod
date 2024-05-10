import './Home.css'
import 'animate.css';

import slider1 from '/b1.jpg'
import slider2 from '/b2.jpg'
import slider3 from '/b3.jpg'


// import { Helmet } from 'react-helmet-async'
// swiper slider 
import  { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



import { Fade } from 'react-awesome-reveal';

const Home = () => {





    //swiper slider
    const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

    return (
        <div>
          <Fade>
  

            {/* banner */}
           

{/* swiper slider */}
            
<div className='container px-3 py-6 mx-auto'>
<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper m-12"
      >
        <div className='m-12 h-96 animate__animated animate__bounce'>
        
        <SwiperSlide className='relative w-full'><div className="hero min-h-screen" style={{backgroundImage: `url(${slider1})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold"> Remote Job </h1>
      <p className="mb-5">One of our most popular job categories and in-demand skills in the job market right now 💻 Find new and exciting remote full-stack programming and engineering job opportunities below!</p>
      
    </div>
  </div>
</div></SwiperSlide>
        <SwiperSlide className='relative w-full'><div className="hero min-h-screen" style={{backgroundImage: `url(${slider2})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold"> Hybrid WD jobs 
 </h1>
      <p className="mb-5">Are you looking for Hybrid Web Developer jobs near you? 1-Click apply to Hybrid Web Developer jobs. start your career at Hybrid today! </p>
    
    </div>
  </div>
</div></SwiperSlide>
        <SwiperSlide className='relative w-full'><div className="hero min-h-screen" style={{backgroundImage: `url(${slider3})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Part-Time jobs </h1>
      <p className="mb-5">Here you will find more part time web development works. To click on part time web development tab to get the all part time jobs.  </p>
     
    </div>
  </div>
</div></SwiperSlide>
        
        </div>
       
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
</div>


           

            <h1 className='text-center text-3xl font-bold mb-8 animate__animated animate__swing'> Job by category  </h1>
            <p></p>
            {/* <div className='lg:flex lg:grid-cols-3 md:flex md:grid-cols-3 justify-center text-center items-center'>
              <div className=' border-2 w-80 h-60 bg-slate-200 m-6 p-3 shadow-2xl hover:bg-slate-100'>
              <LuPlane className=' text-5xl ml-28 mt-12 mb-5 text-green-600' />
                  <h1 className='font-bold text-xl'>500+ Destinations</h1>
                  <p> We provide transport services  </p>

              </div>
              <div className=' border-2 w-80 h-60 bg-slate-200 m-6 p-3 shadow-2xl hover:bg-slate-100'>
              <GiPriceTag className=' text-5xl ml-28 mt-12 mb-5 text-green-600' />
                  <h1 className='font-bold text-xl'>Best Price Guarantee</h1>
                  <p>You will get here a reasonable price </p>

              </div>
              <div className=' border-2 w-80 h-60 bg-slate-200 m-6 p-3 shadow-2xl hover:bg-slate-100'>
              <MdOutlineContactSupport className=' text-5xl ml-28 mt-12 mb-5 text-green-600' />
                  <h1 className='font-bold text-xl'>Top Notch Support</h1>
                  <p> You will feel a enjoyable trip  </p>

              </div>
              
            </div> */}


            <h1 className='text-center text-3xl font-bold mb-8 animate__animated animate__swing mt-12 '> Extra Section   </h1>
            <p className=' text-center font-bold text-gray-400'> try to make them attractive </p>

           

            </Fade>
        </div>
    );
};

export default Home;