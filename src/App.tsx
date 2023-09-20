
import {Header} from "./components/Header/Header.tsx";
import {Route, Routes} from "react-router-dom";
import AuthPage from "./Pages/Auth/auth.page.tsx";
import Login from "./Pages/Auth/components/Login.tsx";
import Register from "./Pages/Auth/components/Register.tsx";
function App() {

    return (
        <div>
        <Header/>
            <Routes>
                <Route path="/auth" element={<AuthPage/>}>
                    <Route  index path="login" element={<Login/>}/>
                    <Route path="register" element={ <Register/>}/>
                </Route>

            </Routes>

        </div>
    )
}

export default App
