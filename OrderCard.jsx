import React, { useState } from 'react';
const OrderCard = ({ order }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="border p-4 mb-4 rounded shadow">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="font-bold">Order ID: {order.id}</h3>
                    <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                    <p>Total Amount: ${order.totalAmount.toFixed(2)}</p>
                    <p>Status: {order.status}</p>
                </div>
                <button onClick={toggleExpand} className="text-blue-500">
                    {isExpanded ? 'Hide Details' : 'Show Details'}
                </button>
            </div>
            {isExpanded && (
                <div className="mt-4">
                    <h4 className="font-semibold">Order Details:</h4>
                    <pre>{JSON.stringify(order.details, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default OrderCard;