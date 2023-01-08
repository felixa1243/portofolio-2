const Card = (props) => {
    const {title, description, className, image} = props
    return (
        <div className={'flex flex-col gap-5 shadow-md shadow-gray-300 p-8 rounded-lg ' + className} {...props}>
            <h2 className={'text-xl'}>{title}</h2>
            {image && (
                    <img src={image} className={'w-full object-contains object-top rounded-lg'}/>
            )}
            <p>{description}</p>
        </div>
    )
}
export default Card