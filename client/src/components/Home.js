import React from 'react';
import Discover from './Discover';

export default function Home({ isLoggedIn }) {
    return (
        <div className="home-container">
          
                <h2>Welcome to Court Finder</h2>
                <p>
                    Court Finder is your ultimate destination to discover, add, and review local basketball courts. Whether you're 
                    looking to play a quick game or find new spots, we have it all covered for you!
                </p>
       
            {isLoggedIn && <Discover />}
        </div>
    );
}