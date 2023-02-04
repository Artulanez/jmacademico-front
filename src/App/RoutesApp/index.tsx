import {
    Route,
    BrowserRouter,
    Routes    
} from "react-router-dom"
import { Home, Login } from "../Pages";


export const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Routes>                    
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />                
            </Routes>            
            
        </BrowserRouter>
    )
}