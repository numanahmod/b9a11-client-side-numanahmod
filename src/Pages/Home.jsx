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

import TabCategory from '../Components/TabCategory';
import { useLoaderData } from 'react-router-dom';

const Home = () => {


  const jobs = useLoaderData();

  console.log(jobs);





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


           

            <div>
            <h1 className='text-center text-3xl font-bold mb-8 animate__animated animate__swing'> Job by category  </h1>
            <p className='text-center'>Find out your desire work from here. Click your job category tab to get your job</p>
              <TabCategory jobs= {jobs}/> 

            </div>
            


                {/* Extra section 1 */}
            
            <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
    <h1 className='text-center text-3xl font-bold mb-8 animate__animated animate__swing mt-12 '> Our Portfolio   </h1>
            <p className=' text-center font-bold text-gray-400'> Have ha look at our Portfolio section  </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div>
                <img className="object-cover w-full rounded-lg h-96 "
                    src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
                    alt=""/>
                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Best website
                    collections</h2>
                <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Website</p>
            </div>

            <div>
                <img className="object-cover w-full rounded-lg h-96 "
                    src="https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    alt=""/>
                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Block of Ui kit
                    collections</h2>
                <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Ui kit</p>
            </div>

            <div>
                <img className="object-cover w-full rounded-lg h-96 "
                    src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt=""/>
                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Ton’s of mobile mockup
                </h2>
                <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Mockups</p>
            </div>
        </div>
    </div>
             </section>

             

             {/* Extra section 2  */}

             <section className="bg-white dark:bg-gray-900">
    <div className="max-w-6xl px-6 py-10 mx-auto">
        <p className="text-xl font-medium text-blue-500 text-center">Testimonials</p>

        <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white text-center">
            What our clients saying
        </h1>

        <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div className="absolute w-full bg-blue-600 -z-10 md:h-96 rounded-2xl"></div>
            
            <div className="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                <img className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="client photo" />
                
                <div className="mt-2 md:mx-6">
                    <div>
                        <p className="text-xl font-medium tracking-tight text-white">Ema Watson</p>
                        <p className="text-blue-200 ">Web frontend developer </p>
                    </div>

                    <p className="mt-4 text-lg leading-relaxed text-white md:text-xl"> “I have got many works from this site. From my junior level i am connecting in this site. It helps me a lot. I will recommand  the junior web developers to connect with this site. it will be so helpful for you”.</p>
                    
                    <div className="flex items-center justify-between mt-6 md:justify-start">
                        <button title="left arrow" className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button title="right arrow" className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    </div>
</section>




           

            </Fade>
        </div>
    );
};

export default Home;