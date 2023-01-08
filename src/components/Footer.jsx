const Footer = ({children}) => {
    return (
        <div className={'bg-gray-100 h-80 w-full relative z-[9] flex flex-col justify-center items-center border-top-[1px] border'}>
            {children}
        </div>
    )
}
export default Footer