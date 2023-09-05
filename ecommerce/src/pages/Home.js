import React from 'react'
import Layout from '../components/Layout/Layout'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Banner1 from "../Assets/Asset 1.png";
import Banner2 from "../Assets/Asset 2.png";
import useFetch from "../Data/Data";
import "./style/Home.css";


const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  const category = useFetch("https://api.escuelajs.co/api/v1/categories");
  console.log(category);

  return (
    <Layout>
        <div className='home'>
            <Carousel responsive={responsive} arrows={false} autoPlay={true} autoPlaySpeed={2000} infinite={true}>
              <img src={Banner1} alt='banner1' width={"100%"}/>
              <img src={Banner2} alt='banner2' width={"100%"}/>
            </Carousel>
            <div className='cate-container'>
            {
              category.slice(0,5).map((item,index)=>{
                return(
                  <div className='category' key={item.name}>
                    <img src={item.image} />
                    <p>{item.name}</p>
                  </div>
                )
              })
            }
            </div>
        </div>
    </Layout>
  )
}

export default Home
