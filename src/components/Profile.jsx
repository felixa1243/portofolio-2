import profile from '../assets/profilePic.jpg'

const Profile = () => {
    return (
        <div
            className={'w-full h-full bg-gray-100 flex flex-col items-start p-8 font-Poppins shadow-lg  relative z-[9]'}
            id={'section2'}>
            <h2 className={'self-center text-gray-500 text-2xl'}>Profile</h2>
            <div className={'w-full flex gap-10 mt-8 xs:flex-col'}>
                <div className={'bg-white p-8 flex-grow rounded-md shadow-md h-full flex shadow-gray-300'}>
                    <table className={'w-full table-auto border-spacing-0'}>
                        <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>Rajiph iqbal ghandi</td>
                        </tr>
                        <tr>
                            <td>Last education:</td>
                            <td>Smk negeri 1 garut</td>
                        </tr>
                        <tr>
                            <td>Name:</td>
                            <td>Rajiph iqbal ghandi</td>
                        </tr>
                        <tr>
                            <td>Last education:</td>
                            <td>Smk negeri 1 garut</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className={'w-[100px] rounded-lg'}>
                        <img src={profile} className={'w-[200px] xs:h-[100px] content-contains'}
                             alt={'profile pic'}/>
                    </div>
                </div>
                <div className={'bg-white p-4 flex-grow rounded-tl-xl rounded-br-xl shadow-lg'}>

                </div>
            </div>
        </div>
    )
}
export default Profile