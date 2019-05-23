import React from 'react';


const Navbar = () => {
    return (
        
        <div className="navbar">
            <a title="Titre du lien" href="http://localhost:3000/">Home</a>
            <a title="Titre du lien" href="http://localhost:3000/login">Login</a>
            <a title="Titre du lien" href="http://localhost:3000/register">Register</a>
            <a title="Titre du lien" href="http://localhost:3000/cart">Cart</a>
        </div>
        
    );
};

export default Navbar;