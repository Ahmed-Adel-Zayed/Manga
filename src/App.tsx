
import {Header} from "./components/Header/Header.tsx";
import {Route, Routes} from "react-router-dom";
import AuthPage from "./Pages/Auth/auth.page.tsx";
function App() {

    return (
        <div>
        <Header/>
            <Routes>
                <Route path="/login" element={<AuthPage/>}/>

            </Routes>

        </div>
    )
}

export default App
