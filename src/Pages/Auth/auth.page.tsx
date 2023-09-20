import { Outlet } from "react-router-dom";
export function AuthPage() {
    return (
        <div className="min-h-[calc(100vh-4rem)] flex justify-center items-center">
            <div className="flex rounded-box overflow-hidden border-2 border-primary w-full max-w-4xl">
                <div className="min-h-full font-marhey flex justify-center items-center text-6xl text-primary-content flex-col font-marchy w-full bg-primary">
                        استمع في موقعنا 
                        
                        <h1 className="mt-12">يوتوبيا</h1>
                </div>
            <Outlet/>
            </div>
        </div>
    )
}

export default AuthPage;
