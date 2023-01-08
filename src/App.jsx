import AppView from "./View/AppView.jsx";
import './assets/style.css'
import Navbar from "./components/Navbar.jsx";
import Profile from "./components/Profile.jsx";
import MyProject from "./components/MyProject.jsx";
import Footer from "./components/Footer.jsx";
import {FaReact, RxFramerLogo, SiTailwindcss} from "react-icons/all.js";
import Hero from "./components/Hero.jsx";

function App() {
    const stacks = [{
        logo: FaReact, text: 'React'
    }, {
        logo: SiTailwindcss, text: 'Tailwind css'
    },{logo:RxFramerLogo,text:'Framer motions'}]
    return (<div className={'max-w-screen h-screen scroll'}>
            <AppView>
                <Navbar/>
                <Hero/>
                <Profile/>
                <MyProject/>
                <Footer>
                    <div
                        className={'text-white mt-9 flex flex-col w-full justify-center items-center text-gray-400 p-5'}>
                        <h2 className={'text-2xl'}>Created by:</h2>
                        <div className={'flex w-full justify-center gap-10 mt-8'}>
                            {stacks.map((item, index) => {
                                return (<div className={'flex flex-col justify-center items-center'} key={index}>
                                        <item.logo className={'text-5xl'}/>
                                        <p className={'text-2xl'}>{item.text}</p>
                                    </div>)
                            })}
                        </div>
                    </div>
                </Footer>
            </AppView>
        </div>)
}

export default App