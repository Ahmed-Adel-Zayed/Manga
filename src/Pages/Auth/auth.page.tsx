import Login from "./Login/Login.tsx";

export function AuthPage() {
    return (
        <div className="min-h-[calc(100vh-4rem)] flex justify-center items-center">
            <h1>AuthPage</h1>
            <Login/>
        </div>
    )
}

export default AuthPage;
