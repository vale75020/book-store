import React from 'react';


const Navbar = () => {
    return (
        
        <div className="navbar">
            <a title="Titre du lien" href="http://localhost:3000/"><i className="fa fa-fw fa-home"></i></a>
            <a title="Titre du lien" href="http://localhost:3000/login">Login</a>
            <a title="Titre du lien" href="http://localhost:3000/register">Register</a>
 		</div>
        
    );
};

export default Navbar;