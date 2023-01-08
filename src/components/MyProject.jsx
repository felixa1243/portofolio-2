import Card from "./Card.jsx";
import image from '../assets/react-cart.png'

const MyProject = () => {
    const Projects = [
        {
            title: 'React',
            image,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio eaque eligendi pariatur repellendus sed sunt? Aperiam beatae commodi debitis distinctio dolore eos error facilis illo, nesciunt odit perspiciatis recusandae repellat!',
            link: 'https://cartsubmission-rajiph.vercel.app/'
        },
        {
            title: 'React',
            image,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio eaque eligendi pariatur repellendus sed sunt? Aperiam beatae commodi debitis distinctio dolore eos error facilis illo, nesciunt odit perspiciatis recusandae repellat!',
            link: 'https://cartsubmission-rajiph.vercel.app/'
        },
        {
            title: 'React',
            image,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio eaque eligendi pariatur repellendus sed sunt? Aperiam beatae commodi debitis distinctio dolore eos error facilis illo, nesciunt odit perspiciatis recusandae repellat!',
            link: 'https://cartsubmission-rajiph.vercel.app/'
        },

    ]
    return (
        <div
            className={'w-full h-screen bg-white flex flex-col items-start p-8 font-Poppins shadow-lg  relative z-[9]'}
            id={'section3'}
        >
            <div className={'w-full flex gap-10 mt-8 xs:flex-col'}>
                <div className={'p-8 flex-grow rounded-md h-full grid grid-cols-3 gap-5 xs:grid-cols-1'}>
                    {Projects.map((item, index) => {
                        return (
                            <a href={item.link} key={index}>
                                <Card title={item.title} description={item.description} image={item.image} key={index}/>
                            </a>
                        )
                    })}
                </div>
                <div className={'absolute top-[-50px] right-5 bg-white p-8 rounded-lg shadow-lg hover:bg-gray-300 hover:cursor-pointer'}>
                    <p>My project</p>
                </div>
            </div>
        </div>
    )
}
export default MyProject