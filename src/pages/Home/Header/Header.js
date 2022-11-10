import React from 'react';

const Header = () => {
    return (
        <div className=' pt-11 text-center'>
            <div className="carousel w-full rounded-md">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.pinimg.com/736x/15/76/0c/15760c78377cf4de5e19d1ae211f691f.jpg" alt='' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/blogmnBLpfLNc4d-ELwnUVJpjDpjvuyN1Ru-.jpg" alt='' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right
                       -5 top-1/2">
                       <a href="#slide1" className="btn btn-circle">❮</a>
                       <a href="#slide3" className="btn btn-circle">❯</a>
                   </div>
               </div>
               <div id="slide3" className="carousel-item relative w-full">
                   <img src="https://sgp1.digitaloceanspaces.com/cosmosgroup/news/1878484_Saint%20Martins%20Island%20Bangladesh.jpg" alt='' className="w-full" />
                   <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                       <a href="#slide2" className="btn btn-circle">❮</a>
                       <a href="#slide1" className="btn btn-circle">❯</a>
                   </div>
               </div>
           </div> 
       </div>
   );
};

export default Header;

