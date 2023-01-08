import {SmoothScrollProvider} from "../context/ScrollContext";

const AppView = ({children}) => {
    return (
        <SmoothScrollProvider>
            {children}
        </SmoothScrollProvider>
    )
}
export default AppView