import React from 'react';
import { Link } from 'react-router-dom';
import OrderList from './OrderList';
import SupportChat from './SupportChat';

const Home = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-3xl text-center">
                {/* Title */}
                <h1 className="text-4xl font-bold mb-6 text-gray-800">Order Management System</h1>

                {/* New Order Button */}
                <div className="mb-6">
                    <Link to="/new-order">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                            Create New Order
                        </button>
                    </Link>
                </div>

                {/* Order List Section */}
                <div className="mb-6 text-left">
                    <OrderList />
                </div>

                {/* Support Chat Section */}
                <SupportChat orderId="N/A" />
            </div>
        </div>
    );
};

export default Home;
