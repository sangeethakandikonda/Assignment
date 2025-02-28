

import React, { useState } from 'react';
import OrderCard from './OrderCard';

const OrderList = () => {
    // Hardcoded array of orders
    const ordersData = [
        {
            id: '12345',
            date: '2023-10-01T12:00:00Z',
            totalAmount: 99.99,
            status: 'Shipped',
            details: {
                items: [
                    { name: 'Product 1', quantity: 1 },
                    { name: 'Product 2', quantity: 2 }
                ],
                shippingAddress: '123 Main St, Anytown, USA'
            }
        },
        {
            id: '12346',
            date: '2023-10-02T12:00:00Z',
            totalAmount: 49.99,
            status: 'Processing',
            details: {
                items: [
                    { name: 'Product 3', quantity: 1 }
                ],
                shippingAddress: '456 Elm St, Anytown, USA'
            }
        },
        {
            id: '12347',
            date: '2023-10-03T12:00:00Z',
            totalAmount: 29.99,
            status: 'Delivered',
            details: {
                items: [
                    { name: 'Product 4', quantity: 3 }
                ],
                shippingAddress: '789 Oak St, Anytown, USA'
            }
        }
    ];

    const [orders] = useState(ordersData); // Set orders to the hardcoded data
    const [loading] = useState(false); // Simulate loading state
    const [error] = useState(''); // Simulate error state

    if (loading) {
        return <p>Loading orders...</p>;
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Order List</h2>
            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                orders.map(order => <OrderCard key={order.id} order={order} />)
            )}
        </div>
    );
};

export default OrderList;