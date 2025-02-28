// components/OrderDetails.js

import React from 'react';
import SupportChat from './SupportChat';

const OrderDetails = ({ order }) => {
    return (
        <div className="p-4 border rounded shadow">
            <h2 className="text-2xl font-bold">Order ID: {order.id}</h2>
            <p>Date: {new Date(order.date).toLocaleDateString()}</p>
            <p>Total Amount: ${order.totalAmount.toFixed(2)}</p>
            <p>Status: {order.status}</p>
            <h3 className="font-semibold mt-4">Order Items:</h3>
            <ul>
                {order.details.items.map((item, index) => (
                    <li key={index}>
                        {item.name} (x{item.quantity})
                    </li>
                ))}
            </ul>
            <h3 className="font-semibold mt-4">Shipping Address:</h3>
            <p>{order.details.shippingAddress}</p>
            {/* Add the SupportChat component and pass the order ID */}
            <SupportChat orderId={order.id} />
        </div>
    );
};

export default OrderDetails;