import React, { useState} from 'react';
import { FaRegEyeSlash, FaRegEye, FaExclamationCircle } from 'react-icons/fa';
import { MdVerifiedUser } from 'react-icons/md';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        role: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState('');
    const [passwordFocused, setPasswordFocused] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'phone' && !/^\d*$/.test(value)) {
            toast.error('Phone number must contain only digits', {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                icon: <FaExclamationCircle style={{ color: "#ff4d4f" }} />,
                style: {
                    backgroundColor: "#fff",
                    color: "#000",
                    fontSize: "16px",
                    fontFamily: "Arial, sans-serif",
                    border: "1px solid #ff4d4f",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
                },
                bodyClassName: {
                    fontFamily: "Arial, sans-serif"
                },
                progressStyle: {
                    backgroundColor: "#ff4d4f"
                },
                className: 'toast-animate'
            });
            return;
        }

        setFormData({
            ...formData,
            [name]: value
        });

        if (name === 'password') {
            validatePassword(value);
        }
    };

    const validatePassword = (password) => {
        let strength = 'Weak';
        if (password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)) {
            strength = 'Strong';
        } else if (password.length >= 6) {
            strength = 'Moderate';
        }
        setPasswordStrength(strength);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { firstName, lastName, email, phone, password, confirmPassword, role } = formData;

        if (!firstName || !lastName || !email || !phone || !password || !confirmPassword || !role) {
            toast.error('Please fill in all the fields', {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                icon: <FaExclamationCircle style={{ color: "#ff4d4f" }} />,
                style: {
                    backgroundColor: "#fff",
                    color: "#000",
                    fontSize: "16px",
                    fontFamily: "Arial, sans-serif",
                    border: "1px solid #ff4d4f",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
                },
                bodyClassName: {
                    fontFamily: "Arial, sans-serif"
                },
                progressStyle: {
                    backgroundColor: "#ff4d4f"
                },
                className: 'toast-animate'
            });
            return;
        }

        if (password !== confirmPassword) {
            toast.error('Passwords do not match', {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                icon: <FaExclamationCircle style={{ color: "#ff4d4f" }} />,
                style: {
                    backgroundColor: "#fff",
                    color: "#000",
                    fontSize: "16px",
                    fontFamily: "Arial, sans-serif",
                    border: "1px solid #ff4d4f",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
                },
                bodyClassName: {
                    fontFamily: "Arial, sans-serif"
                },
                progressStyle: {
                    backgroundColor: "#ff4d4f"
                },
                className: 'toast-animate'
            });
            return;
        }

        if (password.length < 8 || password.length > 16 || !/[A-Z]/.test(password) || !/[0-9]/.test(password) || !/[^A-Za-z0-9]/.test(password)) {
            toast.error('Password does not meet the requirements', {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                icon: <FaExclamationCircle style={{ color: "#ff4d4f" }} />,
                style: {
                    backgroundColor: "#fff",
                    color: "#000",
                    fontSize: "16px",
                    fontFamily: "Arial, sans-serif",
                    border: "1px solid #ff4d4f",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
                },
                bodyClassName: {
                    fontFamily: "Arial, sans-serif"
                },
                progressStyle: {
                    backgroundColor: "#ff4d4f"
                },
                className: 'toast-animate'
            });
            return;
        }

    };

    return (
        <div className="flex h-screen relative overflow-hidden">
            <img src="/assets/images/lotus.svg" className="absolute right-0 bottom-0 w-50 h-100 z-50" alt="Lotus" />
            <div className="w-2/5 relative">
                <img src='/assets/images/register.png' alt="Step 1"
                    className="absolute left-0 bottom-0 z-10 w-full h-full object-cover" />
            </div>
            <div className="w-3/5 relative flex flex-col justify-around pl-24 overflow-auto">
                <div className='flex mt-4 space-x-2'>
                    <img src="/assets/images/line.svg" alt="line" />
                    <h6 className='font-cairo text-2xl text-[#168B70]'>
                        Register
                    </h6>
                </div>
                <form className='flex flex-col justify-between' onSubmit={handleSubmit}>
                    <h2 className='mb-6 mt-4 text-3xl font-cocogoosebold text-[#3A3937]'>Ready to get matched?</h2>
                    <label className='mb-1 font-cairo text-2xl'>Please share your information with us so we</label>
                    <label className='mb-4 font-cairo text-2xl'>can contact you
                        once we find your match</label>

                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="mt-2 p-2 border rounded-full font-cairo w-96 h-10 border-1 border-gray-500 pl-6 my-2 py-2"
                        placeholder="First Name"
                    />
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="mt-2 p-2 border rounded-full font-cairo w-96 h-10 border-1 border-gray-500 pl-6 my-2 py-2"
                        placeholder="Last Name"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2 p-2 border rounded-full font-cairo w-96 h-10 border-1 border-gray-500 pl-6 my-2 py-2"
                        placeholder="Email"
                    />
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-2 p-2 border rounded-full font-cairo w-96 h-10 border-1 border-gray-500 pl-6 my-2 py-2"
                        placeholder="Phone Number"
                    />
                    <div className="relative w-96">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            onFocus={() => setPasswordFocused(true)}
                            onBlur={() => setPasswordFocused(false)}
                            className="mt-2 p-2 border rounded-full font-cairo w-full h-10 border-1 border-gray-500 pl-6 pr-12 my-2 py-2"
                            placeholder="Password"
                        />
                        <div
                            className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaRegEyeSlash className="text-[#168B70]" /> : <FaRegEye className="text-[#168B70]" />}
                        </div>
                    </div>
                    {passwordFocused && (
                        <>
                            <div className="h-1 w-96 rounded-full bg-gray-300 mt-2">
                                <div
                                    className={`h-full rounded-full ${passwordStrength === 'Strong' ? 'bg-green-500' : passwordStrength === 'Moderate' ? 'bg-yellow-500' : 'bg-red-500'}`}
                                    style={{ width: `${passwordStrength === 'Strong' ? '100%' : passwordStrength === 'Moderate' ? '50%' : '25%'}` }}
                                ></div>
                            </div>
                            <ul className="mt-2 text-gray-500 text-sm list-disc pl-5">
                                <li>Starts with a capital letter</li>
                                <li>Contains at least one special character</li>
                                <li>Contains at least one number</li>
                                <li>Minimum length 8 characters and maximum 16 characters</li>
                            </ul>
                        </>
                    )}
                    <div className="relative w-96">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={`mt-2 p-2 border rounded-full font-cairo w-full h-10 border-1 ${formData.password === formData.confirmPassword && formData.confirmPassword ? 'border-[#168B70] text-[#168B70]' : 'border-gray-500'} pl-6 pr-12 my-2 py-2`}
                            placeholder="Confirm Password"
                        />
                        <div
                            className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? <FaRegEyeSlash className="text-[#168B70]" /> : <FaRegEye className="text-[#168B70]" />}
                        </div>
                        {formData.password === formData.confirmPassword && formData.confirmPassword && (
                            <MdVerifiedUser className="absolute right-10 top-4 text-[#168B70]" />
                        )}
                    </div>
                    <div className="mt-4">
                        <label className="font-cairo text-2xl">Role:</label>
                        <div className="flex space-x-4 mt-2">
                            {['individual', 'hr', 'landlord', 'agent'].map(role => (
                                <label key={role} className={`flex items-center cursor-pointer ${formData.role === role ? 'text-[#168B70]' : 'text-gray-400'}`}>
                                    <input
                                        type="radio"
                                        name="role"
                                        value={role}
                                        onChange={handleChange}
                                        checked={formData.role === role}
                                        className="mr-2"
                                    />
                                    {role.charAt(0).toUpperCase() + role.slice(1)}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-start mt-4 space-x-3">
                        <button
                            type="submit"
                            className="text-white font-cocogoose btn z-50 mb-28 bg-[#168B70] rounded-full w-40 h-14 mt-10 align border-1 my-2 py-2 transition duration-300 ease-in-out transform hover:bg-green-700 hover:scale-105 shadow-lg"
                        >
                            Sign Up
                        </button>
                        <button
                            type="button"
                            className="text-[#168B70] font-cocogoose btn z-50 mb-28 bg-white rounded-full border-[#168B70] w-40 h-14 mt-10 align border-2 my-2 py-2 transition duration-300 ease-in-out transform hover:bg-green-100 hover:scale-105 shadow-lg"
                        >
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
