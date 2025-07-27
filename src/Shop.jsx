import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Shop.css';

export default function Shop() {
    const [search, setSearch] = useState(''); // input string for search
    const [cart, setCart] = useState([]); // array to hold cart items

    // คำนวณราคารวมใน cart
    const total = cart.reduce((sum, b) => sum + b.price, 0);

    const books = [
        { "id": 1, "title": "The Let Them Theory: A Life-Changing Tool That Millions of People Can't Stop Talking About", "author": "Mel Robbins", "image_url": "https://images-na.ssl-images-amazon.com/images/I/91I1KDnK1kL._AC_UL381_SR381,381_.jpg", "price": 11.69 },
        { "id": 2, "title": "Forgotten Home Apothecary : 250 Powerful Remedies at Your Fingertips", "author": "Dr. Nicole Apelian", "image_url": "https://images-na.ssl-images-amazon.com/images/I/91-E86oM2IL._AC_UL381_SR381,381_.jpg", "price": 37 },
        { "id": 3, "title": "Seven Things You Can't Say About China", "author": "Tom Cotton", "image_url": "https://images-na.ssl-images-amazon.com/images/I/81+mN748qkL._AC_UL381_SR381,381_.jpg", "price": 19.58 },
        { "id": 4, "title": "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones", "author": "James Clear", "image_url": "https://images-na.ssl-images-amazon.com/images/I/81ANaVZk5LL._AC_UL381_SR381,381_.jpg", "price": 14.49 },
        { "id": 5, "title": "Sunrise on the Reaping (A Hunger Games Novel) (The Hunger Games)", "author": "Suzanne Collins", "image_url": "https://images-na.ssl-images-amazon.com/images/I/61o5Q8IIq4L._AC_UL254_SR254,254_.jpg", "price": 19.17 },
        { "id": 6, "title": "I Wish Someone Had Told Me . . .: The Best Advice for Building a Great Career and a Meaningful Life", "author": "Dana Perino", "image_url": "https://images-na.ssl-images-amazon.com/images/I/81AOHbxGNfL._AC_UL254_SR254,254_.jpg", "price": 20.30 },
        { "id": 7, "title": "How to Giggle: A Guide to Taking Life Less Seriously", "author": "Hannah Berner", "image_url": "https://images-na.ssl-images-amazon.com/images/I/81rO3vvG1mL._AC_UL254_SR254,254_.jpg", "price": 20.29 },
        { "id": 8, "title": "Strangers in Time: A World War II Novel", "author": "David Baldacci", "image_url": "https://images-na.ssl-images-amazon.com/images/I/816QI0pfuRL._AC_UL254_SR254,254_.jpg", "price": 17.84 }
    ];

    const filteredBooks = books.filter((b) =>
        b.author.toLowerCase().includes(search.toLowerCase())
    );

    const booklist = filteredBooks.map((b) =>
        <div className='book' key={b.id}>
            <img className="b-thumbnail" src={b.image_url} alt={b.title} />
            <div className="book-info">
                <div className='b-title'>{b.title}</div>
                <div className='b-author'>{b.author}</div>
                <div className='b-price'>${b.price.toFixed(2)}</div>
                <button className="add-btn" onClick={() => {
                    setCart([...cart, { title: b.title, price: b.price }]);
                    // Optional: alert can be replaced with a more subtle notification
                    alert(`${b.title} has been added to your cart!`);
                }}>
                    Add to Cart
                </button>
            </div>
        </div>
    );

    return (
        <div className="shop-container">
            {/* --- Sidebar (Left Column) --- */}
            <aside className="sidebar">
                <h2 className="shop-logo">Khod Mew Books</h2>
                <nav className="nav-links">
                    <a href="/" className="nav-link">Home</a>
                    <a href="/products" className="nav-link">Products</a>
                    <a href="/about" className="nav-link">About</a>
                    <a href="/contact" className="nav-link">Contact</a>
                </nav>

                <div className="cart-container">
                    <h3 className="cart-title">Your Cart</h3>
                    <div className="cart-items">
                        {cart.length === 0 ? (
                            <p className="cart-empty">Your cart is empty.</p>
                        ) : (
                            <ol>
                                {cart.map((item, index) =>
                                    <li key={index} className="cart-item">
                                        <span>{item.title}</span>
                                        <span>${item.price.toFixed(2)}</span>
                                    </li>
                                )}
                            </ol>
                        )}
                    </div>
                    <div className="cart-total">
                        <strong>Total: ${total.toFixed(2)}</strong>
                    </div>
                    {cart.length > 0 && (
                        <button className="clear-cart-btn" onClick={() => setCart([])}>
                            Clear Cart
                        </button>
                    )}
                </div>
            </aside>

            {/* --- Main Content (Right Column) --- */}
            <main className="main-content">
                <header className="header">
                    <h1>Welcome to Our Book Shop</h1>
                    <p>Find your next favorite book by searching for an author.</p>
                </header>

                <div className="search-container">
                    <input
                        className="search-input"
                        type="text"
                        placeholder="Search by author name..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </div>

                <div className="book-list">
                    {booklist.length > 0 ? booklist : <p className="no-results">No books found for this author.</p>}
                </div>
            </main>
        </div>
    );
}