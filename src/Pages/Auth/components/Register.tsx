import {useState} from 'react';

export function Register() {
    const [isSignIn, setIsSignIn] = useState(true);
    const toggleForm = () => {
        setIsSignIn(prev => !prev);
    }

    const currentYear = new Date().getFullYear();
    const years = Array.from({length: currentYear - 1960 + 1}, (_, index) => currentYear - index);

    return (
        <div>
            <div className="flex justify-center items-center bg-base-100">
                <div className="bg-base-100 p-12 rounded shadow-lg w-[400px]">
                    <h2 className="text-3xl mb-8 text-center">{isSignIn ? 'تسجيل الدخول' : 'إنشاء حساب'}</h2>
                    <form>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2">البريد الألكتروني</label>
                            <input type="email" id="email" className="w-full px-4 py-3 border rounded"/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2">كلمة المرور</label>
                            <input type="password" id="password" className="w-full px-4 py-3 border rounded"/>
                        </div>
                        
                            <div className="mb-6">
                                <label htmlFor="confirmPassword" className="block mb-2">تأكيد كلمة المرور</label>
                                <input type="password" id="confirmPassword"
                                       className="w-full px-4 py-3 border rounded"/>
                            </div>
                        
                       
                            <div className="flex mb-6">
                                <div className="w-1/3">
                                    <label htmlFor="year" className="block mb-2">السنة</label>
                                    <select id="year" className="w-full px-4 py-2 border rounded">
                                        {years.map((year) => (
                                            <option key={year} value={year}>{year}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="w-1/3 ml-2">
                                    <label htmlFor="month" className="block mb-2">الشهر</label>
                                    <select id="month" className="w-full px-4 py-2 border rounded">
                                        {[...Array(12)].map((_, index) => (
                                            <option key={index + 1} value={index + 1}>{index + 1}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="w-1/3 ml-2">
                                    <label htmlFor="day" className="block mb-2">اليوم</label>
                                    <select id="day" className="w-full px-4 py-2 border rounded">
                                        {[...Array(31)].map((_, index) => (
                                            <option key={index + 1} value={index + 1}>{index + 1}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                    
                        <button type="submit" className="w-full py-3 bg-primary text-white rounded hover:bg-primary-dark">
                            إنشاء حساب
                        </button>
                    </form>
                    <p className="text-center mt-4">
                        {isSignIn ? 'ليس لديك حساب؟' : 'لديك حساب بالفعل؟'}
                        <span className="text-primary cursor-pointer" onClick={toggleForm}>
                            {isSignIn ? ' إنشاء حساب' : ' تسجيل الدخول'}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register;
