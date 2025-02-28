// pages/OrderPage.js

import React from 'react';
import OrderDetails from './OrderDetails';

const OrderPage = () => {
    const order = {
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
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Order Details</h1>
            <OrderDetails order={order} />
        </div>
    );
};

export default OrderPage;