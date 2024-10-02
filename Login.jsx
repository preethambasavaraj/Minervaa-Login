import { useState } from 'react';

import loginImg from '../assets/login.jpg'

const LoginModal = () => {
    document.title = "Login";
    const [category, setCategory] = useState('Student'); // Default to Student
    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
        setUserID('');
        setPassword('');
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!userID || !password) {
            setError('Both fields are required.');
            return;
        }

        console.log(`Logging in as ${category}:`, { userID, password });
    };

    const handleForgotPassword = () => {
        console.log('Redirecting to password recovery page...');
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className='sm:block h-screen w-screen'>
                <img className='h-full w-full object-cover' src={loginImg} alt="" />
                
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-xl font-bold  text-center mb-6">Login</h2>

                {/* Category Toggle */}
                <div className="flex justify-center mb-4">
                    <button
                        onClick={() => handleCategoryChange('Student')}
                        className={`px-4 py-2 transition duration-300 ease-in-out ${category === 'Student' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                            }`}
                    >
                        Student
                    </button>
                    <button
                        onClick={() => handleCategoryChange('Instructor')}
                        className={`px-4 py-2 transition duration-300 ease-in-out ${category === 'Instructor' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                            }`}
                    >
                        Instructor
                    </button>
                    <button
                        onClick={() => handleCategoryChange('School')}
                        className={`px-4 py-2 transition duration-300 ease-in-out ${category === 'School' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                            }`}
                    >
                        School
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    {/* ID Field */}
                    <div className="mb-4">
                        <label className="block mb-1">
                            {category} ID
                        </label>
                        <input
                            type="text"
                            value={userID}
                            onChange={(e) => setUserID(e.target.value)}
                            className="w-full border border-gray-300 p-2 rounded"
                            placeholder={`Enter your ${category} ID`}
                        />
                    </div>

                    {/* Password Field */}
                    <div className="mb-4">
                        <label className="block mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-gray-300 p-2 rounded"
                            placeholder="Enter your password"
                        />
                        <div className="text-right mt-2">
                            <button
                                type="button"
                                onClick={handleForgotPassword}
                                className="text-blue-500 hover:underline"
                            >
                                Forgot Password?
                            </button>
                        </div>
                    </div>

                    {/* Error Message */}
                    {error && <p className="text-red-500 mb-4">{error}</p>}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;
