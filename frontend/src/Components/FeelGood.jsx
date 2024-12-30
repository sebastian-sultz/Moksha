import { BsFillMusicPlayerFill } from "react-icons/bs";
import { FaPlayCircle } from "react-icons/fa";
import { TbBulbFilled } from "react-icons/tb";
import { Carousel } from "flowbite-react";
import hero from "../assets/Images/Hero.jpg"
import Tips from "./Tips";
import one from "../assets/Images/1.jpg"
import two from "../assets/Images/2.jpg"
import three from "../assets/Images/3.jpg"
import four from "../assets/Images/4.jpg"
import five from "../assets/Images/5.jpg"

const FeelGood = () => {
    return (
        <div className="pt-10">
            <div className="flex justify-between">
                <div className="flex-1 text-center tracking-wide leading-snug text-4xl font-libre text-gray-700 md:text-4xl md:leading-normal lg:text-5xl lg:leading-normal">Feel Good</div>
                <div className="text-right my-auto pe-5">
                    {/* tip heree */}
<Tips/>
                    {/* <TbBulbFilled className="h-14 w-14 fill-yelloww"/> */}
                </div>
            </div>

            <div className="p-7">
            <p className="text-center leading-tight font-normal text-base md:text-lg md:leading-snug md:text-justify">

            <p className='pb-3'>Take a moment to breathe and reconnect with yourself. Here, you’ll find soothing melodies, simple yet powerful mental health tips, and thought-provoking quotes that can help shift your perspective and bring calm to your day. 
                </p>
                <p> It’s a space to pause, reflect, and nurture your inner peace, offering gentle reminders that small acts of self-care can lead to big changes in how we feel. Whether you're seeking comfort, inspiration, or a gentle nudge to keep going, this is your space to unwind and replenish your energy.
                    </p>
                    </p>
                </div>
       




    <div className="h-48 p-5 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={1500} pauseOnHover>
        <img src={one} alt="..." className="rounded-3xl" />
        <img src={two} alt="..." className="rounded-3xl "/>
        <img src={three} alt="..." className="rounded-3xl"/>
        <img src={four} alt="..." className="rounded-3xl"/>
        <img src={five} alt="..." className="rounded-3xl"/>
   
      </Carousel>
      
    </div>



    <div className="flex p-8">
        <div className="justify-start ps-5">
             <BsFillMusicPlayerFill className="h-10 w-10 fill-prim" />

        </div>
        <div className="flex w-full justify-evenly ">

            <FaPlayCircle className="h-10 w-10 fill-prim" />
            <FaPlayCircle className="h-10 w-10 fill-prim" />
            <FaPlayCircle className="h-10 w-10 fill-prim" />
            <FaPlayCircle className="h-10 w-10 fill-prim" />
            <FaPlayCircle className="h-10 w-10 fill-prim" />
            <FaPlayCircle className="h-10 w-10 fill-prim" />


        </div>
    </div>


 
 
        </div>
    )
}

export default FeelGood