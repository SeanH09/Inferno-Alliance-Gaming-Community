import React from 'react';

//figure out how to revolve between states

class SlideShow extends React.Component{
    constructor(){
        super()
        this.state = {
            SlideShowImage: <div class="SlideShow">
                
                <img class="CoverPhoto" src={require('../../Images/CoverPhoto.jpg')} alt="Inferno Alliance Cover photo"/>        
            </div>
        } 
    }

    SecondImage(){
        this.setState({
            SlideShowImage: <div class="SlideShow">
                <img class="CoverPhoto" src={require('../../Images/ScreenShot00348_zpsb877108c.jpg')} alt="Inferno Alliance Cover photo"/>
            </div>
        }) 
    }

    ThirdImage(){
        this.setState({
            SlideShowImage: <div class="SlideShow">
                <img class="CoverPhoto" src={require('../../Images/hanzonoob.png')} alt="Inferno Alliance Cover photo"/>
            </div>
        })
    }

    FourthImage(){
        this.setState({
            SlideShowImage: <div class="SlideShow">
                <img class="CoverPhoto" src={require('../../Images/lord-of-the-rings-mordor-mount-doom-eye-of-sauron.jpg')} alt="Inferno Alliance Cover photo"/>
            </div>
        })
    }

    render(){
        return <div> {this.state.SlideShowImage} </div>
    }
}

export default SlideShow;