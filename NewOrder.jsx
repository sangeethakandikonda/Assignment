import React, { useState } from 'react';

const NewOrder = () => {
    const [availableItems, setAvailableItems] = useState([
        { id: 1, name: 'Item 1', price: 10.00 },
        { id: 2, name: 'Item 2', price: 15.00 },
        { id: 3, name: 'Item 3', price: 20.00 },
    ]);
    const [cart, setCart] = useState([]);
    const [error, setError] = useState('');
    const [newItemName, setNewItemName] = useState('');
    const [newItemPrice, setNewItemPrice] = useState('');

    const addToCart = (item) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            setCart(cart.map(cartItem =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            ));
        } else {
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const handleQuantityChange = (id, quantity) => {
        if (quantity < 1) return;
        setCart(cart.map(item =>
            item.id === id ? { ...item, quantity } : item
        ));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cart.length === 0) {
            setError('Please add items to the cart before submitting.');
            return;
        }
        setError('');
        console.log('Order submitted:', cart);
        setCart([]);
    };

    const handleNewItemSubmit = () => {
        if (!newItemName || !newItemPrice || isNaN(newItemPrice) || newItemPrice <= 0) {
            setError('Please enter a valid item name and price.');
            return;
        }
        const newItem = {
            id: availableItems.length + 1,
            name: newItemName,
            price: parseFloat(newItemPrice)
        };
        setAvailableItems([...availableItems, newItem]);
        setNewItemName('');
        setNewItemPrice('');
        setError('');
    };

    const removeAvailableItem = (id) => {
        setAvailableItems(availableItems.filter(item => item.id !== id));
    };

    const handleDragStart = (event, item) => {
        event.dataTransfer.setData("item", JSON.stringify(item));
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const item = JSON.parse(event.dataTransfer.getData("item"));
        addToCart(item);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    return (
        <div className="flex flex-wrap p-4">
            <div className="w-1/3 p-4 border" onDrop={handleDrop} onDragOver={handleDragOver}>
                <h2 className="text-xl font-bold">Cart Items</h2>
                {cart.length === 0 ? (
                    <p>No items in the cart.</p>
                ) : (
                    cart.map(item => (
                        <div key={item.id} className="flex justify-between items-center mb-2">
                            <span>{item.name} (x{item.quantity})</span>
                            <div>
                                <input 
                                    type="number" 
                                    value={item.quantity} 
                                    min="1" 
                                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                    className="w-16 border rounded"
                                />
                                <button 
                                    onClick={() => removeFromCart(item.id)} 
                                    className="ml-2 text-red-500 hover:underline"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))
                )}
                <h3 className="font-bold mt-4">Order Summary:</h3>
                <p>Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
            </div>

            <div className="w-1/3 p-4 border">
                <h2 className="text-xl font-bold">Add New Item</h2>
                <input type="text" placeholder="Item Name" value={newItemName} onChange={(e) => setNewItemName(e.target.value)} className="border p-2 mb-2 w-full" />
                <input type="number" placeholder="Item Price" value={newItemPrice} onChange={(e) => setNewItemPrice(e.target.value)} className="border p-2 mb-2 w-full" />
                <button onClick={handleNewItemSubmit} className="bg-blue-500 text-white p-2 w-full">Add Item</button>
            </div>

            <div className="w-1/3 p-4 border">
                <h2 className="text-xl font-bold">Available Items</h2>
                {availableItems.length === 0 ? (
                    <p>No available items.</p>
                ) : (
                    availableItems.map(item => (
                        <div key={item.id} draggable onDragStart={(event) => handleDragStart(event, item)} className="flex justify-between p-2 border mb-2 cursor-pointer">
                            <span>{item.name} - ${item.price.toFixed(2)}</span>
                            <div>
                                <button onClick={() => addToCart(item)} className="mr-2 text-green-500 hover:underline">Add</button>
                                <button onClick={() => removeAvailableItem(item.id)} className="text-red-500 hover:underline">Delete</button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {error && <p className="text-red-500 w-full text-center mt-4">{error}</p>}
            <button onClick={handleSubmit} className="mt-4 bg-green-500 text-white p-2 rounded w-full">
                Submit Order
            </button>
        </div>
    );
};

export default NewOrder;
