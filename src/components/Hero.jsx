import {useContext} from "react";
import {ScrollContext} from "../context/ScrollContext.jsx";
import ParticleComponent from "./ParticleComponent.jsx";
import ButtonGroup, {Button} from "./ButtonGroup.jsx";
import {AiFillPhone, BiDownload, BsGithub, FaLinkedinIn} from "react-icons/all";
import image from '../assets/profilePic.jpg'

const Hero = () => {
    const {scrollContainer} = useContext(ScrollContext)
    return (
        <div className={'w-full h-full flex shadow-2xl'} id={'section1'} ref={scrollContainer}>
            <div className={'flex-1 flex flex-col items-start h-[90%] justify-center bg-sky-900 relative'}>
                <ParticleComponent/>
                <div className={'flex flex-col ml-9'}>
                    <h2 className={'text-5xl font-Poppins text-white font-bold drop-shadow-lg'}>Rajiph iqbal ghandi</h2>
                    <h2 className={'text-white mt-2 drop-shadow-lg'}>
                        Front end developer
                    </h2>
                    <ButtonGroup className={'mt-9 relative z-[9] drop-shadow-lg'}>
                        <Button>
                            <BiDownload className={'h-full'}/>Download cv
                        </Button>
                        <Button onClick={() => {
                            location.assign('https://wa.me/6285927778963')
                        }}>
                            <AiFillPhone/> Call me on whatsapp
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
            <div
                className={`absolute right-0 top-[85px] w-[30%] h-full  flex-1 rounded-l-3xl h-[80%] flex justify-end items-center shadow-lg bg-white p-5`}>
                <div className={'relative w-full h-full rounded-lg'}>
                    <img src={image} alt={'hero image'} className={'rounded-lg'}/>
                    <div className={'flex items-center justify-center self-end mb-5 mr-5 gap-y-5 absolute bottom-0 right-0'}>
                        <table>
                            <tbody>
                            <tr>
                                <td><BsGithub/></td>
                                <td><p>Github</p></td>
                            </tr>
                            <tr>
                                <td><FaLinkedinIn/></td>
                                <td><p>LinkedIn</p></td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero