import React, { useState, useEffect } from 'react';

const Account = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        password: '',
        city: '',
        state: '',
        zip: '',
    });

    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUserInfo = localStorage.getItem('userInfo');
        if (storedUserInfo) {
            setUser(JSON.parse(storedUserInfo));
        }
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Save user info to localStorage
        localStorage.setItem('userInfo', JSON.stringify(formData));

        // Update the user state to re-render the component
        setUser(formData);

        // Optionally, reset the form if needed
        setFormData({
            firstName: '',
            lastName: '',
            password: '',
            city: '',
            state: '',
            zip: '',
        });
    };

    // Render the user details if they exist
    if (user) {
        return (
            <div className="flex items-center justify-center h-full bg-gray-100 p-4">
                <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-center mb-4">User Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="text-sm font-medium text-gray-500">First Name</label>
                            <div className="text-lg font-semibold">{user.firstName}</div>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-500">Last Name</label>
                            <div className="text-lg font-semibold">{user.lastName}</div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="text-sm font-medium text-gray-500">City</label>
                        <div className="font-medium">{user.city}</div>
                    </div>
                    <div className="mb-4">
                        <label className="text-sm font-medium text-gray-500">State</label>
                        <div className="font-medium">{user.state}</div>
                    </div>
                    <div className="mb-4">
                        <label className="text-sm font-medium text-gray-500">ZIP Code</label>
                        <div className="font-medium">{user.zip}</div>
                    </div>
                </div>
            </div>
        );
    }

    // Render the form if no user info exists
    return (
        <div className="flex items-center justify-center h-full py-5 px-2">
            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="firstName">
                            First Name
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder="abc"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastName">
                            Last Name
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="lastName"
                            name="lastName"
                            type="text"
                            placeholder="xyz"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="password"
                            name="password"
                            type="password"
                            placeholder="******************"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="city">
                            City
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="city"
                            name="city"
                            type="text"
                            placeholder="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="state">
                            State
                        </label>
                        <div className="relative">
                            <select
                                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="state"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select a country</option>
                                <option>India</option>
                                {/* <option>Missouri</option>
                                <option>Texas</option> */}
                            </select>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="zip">
                            Zip
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="zip"
                            name="zip"
                            type="text"
                            placeholder="90210"
                            value={formData.zip}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Account;
