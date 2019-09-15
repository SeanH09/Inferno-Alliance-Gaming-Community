import React from 'react';

const navbar = () => <nav class="navbar navbar-dark bg-dark"> 
    <ul>
        <li> <img src={require('../flame.png')}  width="40" height="40" alt="logo inferno"/> </li>
        <li> <p> Inferno Alliance </p></li>
        <li> <p> 
            <div class="line"> </div>
            <div class="line"> </div>
            <div class="line"> </div>
        </p> </li>
    </ul>

    <ul id="NavItems">
        <li> <p> Games </p> </li>
        <li> <p> Community </p> </li>
        <li> <p> Contact Us </p></li>
    </ul>
</nav>

export default navbar;