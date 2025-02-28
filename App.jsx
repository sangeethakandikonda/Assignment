import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import NewOrder from './NewOrder'; // Import the NewOrder component
import OrderPage from './OrderPage'; // Import the OrderPage component

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new-order" element={<NewOrder />} />
                <Route path="/order/:id" element={<OrderPage />} /> {/* Example for order details */}
            </Routes>
        </Router>
    );
};

export default App;