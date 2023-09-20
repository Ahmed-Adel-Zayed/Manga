
export function Login() {
    return (
        <div>
            <div className="flex justify-center items-center bg-base-100">
                <div className="bg-base-100 p-12 rounded shadow-lg w-[400px]">
                    <h2 className="text-3xl mb-8 text-center">تسجيل الدخول</h2>
                    <form>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2">البريد الألكتروني</label>
                            <input type="email" id="email" className="w-full px-4 py-3 border rounded"/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2">كلمة المرور</label>
                            <input type="password" id="password" className="w-full px-4 py-3 border rounded"/>
                        </div>
        
                        <button type="submit"
                                className="w-full py-3 bg-primary text-white rounded hover:bg-primary-dark">
                          تسجيل الدخول
                        </button>
                    </form>
                    <p className="text-center mt-4">
                       ليس لديك حساب؟
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login;
