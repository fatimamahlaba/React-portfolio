import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../components/Project.css";

const Project = () => {

  let data =[
    {
      id: 1,
      imgSrc: 'https://i.postimg.cc/mZQLDkLM/BMI.png',

    },
    {
      id: 2,
      imgSrc: 'https://i.postimg.cc/C1pyTCf2/POS.png',

    },
    {
      id: 3,
      imgSrc: 'https://i.postimg.cc/bNN7hwsq/Reaction-timer.png',

    },
    {
      id: 4,
      imgSrc: 'https://i.postimg.cc/pL51WhxM/Urban-roots.png',

    },
    {
      id: 5,
      imgSrc: 'https://i.postimg.cc/W31G4Crq/Vue-calculator.png',

    },
    {
      id: 6,
      imgSrc: 'https://i.postimg.cc/rstt0kps/Vue-to-do.png',

    },
    {
      id: 7,
      imgSrc: 'https://i.postimg.cc/SRpDxDyB/Stopwatch.png',

    },
    {
      id: 8,
      imgSrc: 'https://i.postimg.cc/nrcBpY0k/image.png',

    },
    {
      id: 8,
      imgSrc: 'https://i.postimg.cc/jj7G4y6Z/portfolio.png',

    },
   ]

   const [model, setModel] = useState(false);
   const [tempimgSrc, setTempImgSrc] = useState('')
   const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
   }

  return (
    <div>
      <Navbar />
      <div className={model? "model open" : "model"}>
        <img src={tempimgSrc} />
      </div>
      <div className='project'>
        {data.map((item, index) => {
          return(
          <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
          <img src={item.imgSrc} style={{width: '100%'}} />
          </div>
          )
        })}
      </div>
      <Footer />
    </div>
  )
}

export default Project
