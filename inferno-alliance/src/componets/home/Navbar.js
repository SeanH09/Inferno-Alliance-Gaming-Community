import React, {Component} from './node_modules/react';

class navbar extends React.Component {
    constructor(){
        super()
        this.state = {
            dropdownNav: <nav class="navbar"> 
            <ul>
                <li> <img src={require('../flame.png')}  width="40" height="40" alt="logo inferno"/> </li>
                <li> <p> Inferno Alliance </p></li>
                <li>
                    <div class="buttonContainer" onClick={() => this.DropNav()}>
                        <p> 
                            <div class="line"> </div>
                            <div class="line"> </div>
                            <div class="line"> </div>
                        </p>
                    </div> 
                </li>
            </ul>

            <ul>
                <li> <p> Games </p> </li>
                <li> <p> Community </p> </li>
                <li> <p> Contact Us </p></li>
            </ul>
        </nav>
        }
    }

    DropNav(){
        this.setState({
            dropdownNav: <nav> 
                <div class="navbarDropped">
                <ul>
                  <li> <img src={require('../flame.png')}  width="40" height="40" alt="logo inferno"/> </li>
                  <li> <p> Inferno Alliance </p></li>
                  <li>
                        <div class="buttonContainer" onClick={() => this.RetractNav()}>
                          <p> 
                                <div class="line"> </div>
                                <div class="line"> </div>
                                <div class="line"> </div>
                            </p>
                        </div> 
                    </li>
                </ul>
                </div>
                <div class="navItems">
                    <ul>
                        <li> <p> Games </p> </li>
                        <li> <p> Community </p> </li>
                        <li> <p> Contact Us </p></li>
                    </ul>
                </div>
        </nav>
        })
    }

    RetractNav(){
        this.setState({
            dropdownNav: <nav class="navbar"> 
            <ul>
            <li> <img src={require('../flame.png')}  width="40" height="40" alt="logo inferno"/> </li>
            <li> <p> Inferno Alliance </p></li>
            <li>
                <div class="buttonContainer" onClick={() => this.DropNav()}>
                    <p> 
                        <div class="line"> </div>
                        <div class="line"> </div>
                        <div class="line"> </div>
                    </p>
                </div> 
            </li>
        </ul>

        <ul id="NavItems">
            <li> <p> Games </p> </li>
            <li> <p> Community </p> </li>
            <li> <p> Contact Us </p></li>
        </ul>
    </nav>})
    }

    render(){
        return <div>{this.state.dropdownNav}</div>
        
    }
} 

export default navbar;