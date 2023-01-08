import {createContext, useMemo, useRef} from "react";

export const ScrollContext = createContext(null)
export const SmoothScrollProvider = (props) => {
    const scrollContainer = useRef(null)
    const handleClick = (e) => () => {
        e.preventDefault()
        const target = e.target.getAttribute('href')
        const targetElement = document.querySelector(target)
        const scrollDistance = targetElement.getBoundingClientRect().top - scrollContainer.current.getBoundingClientRect().top
        const scrollDuration = 500
        const scrollStep = scrollDistance / (scrollDuration / 15)
        let scrollInterval = setInterval(() => {
            if (scrollContainer.current.scrollTop + scrollContainer.current.offsetHeight < targetElement.offsetTop) {
                scrollContainer.current.scrollTop += scrollStep
            } else {
                clearInterval(scrollInterval)
            }
        }, 15)
    }
    const value = useMemo(() => ({scrollContainer, handleClick}), [scrollContainer])
    return (
        <ScrollContext.Provider value={value}>
            {props.children}
        </ScrollContext.Provider>
    )
}