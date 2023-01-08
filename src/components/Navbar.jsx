const Navbar = () => {
    const navList = [
        {
            url: '#section1',
            text: 'Home'
        },
        {
            url: '#section2',
            text: 'Profile'
        },
        {
            url: '#section3',
            text: 'My Project'
        }
    ]
    return (
        <div
            className={'w-full flex fixed top-0 justify-between items-center px-4 py-2 font-Poppins backdrop-blur-[8px] shadow-sm z-[10] h-[80px]'}>
            <div className={'flex items-center gap-20'}>
                <h1 className={'text-2xl text-orange-400 font-bold'}>Iqbal <span className={'text-lg text-white'}>Network</span>
                </h1>
                <ul role={'list'} className={'flex gap-10 self-end text-white'}>
                    {
                        navList.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a href={item.url}>{item.text}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div>
                <button className={'bg-white px-4 py-2 rounded-full'}>
                    Hire me
                </button>

            </div>
        </div>
    )
}
export default Navbar