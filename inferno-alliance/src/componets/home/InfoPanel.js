import React from 'react';

const InfoPanel = () => <div class="infoPanel">
    <div class="topSection">
        <div class="introduction">
            <h1>
                About Us
            </h1>
            <p>
            We are a discord syndicate rooted in the Lord of the Rings Online game. We are a bunch of digital pyros
            that span beyond the realm of LotRO where we join up, discuss, and play in many other games and platforms.  <br />
            <br />
            We are not activly looking for new members but you are welcome to join in on the fun :) You can find our discord and enter the party by clicking the logo below below! <br />
            <br />
            <a href="https://discord.gg/eHaXztA" target="_blank"> <img class="infologo" src={require("../../Images/flame-selected.png")} alt="linkedlogo"/> </a>
            </p>
        </div>
        <div class="ImageLotro1">
            <img class="fellowship" src={require("../../Images/ScreenShot00284.jpg")} alt="Inferno Alliance members lotro"/>
        </div>
    </div>
    <div class="bottomSection">
        <img class="infoImg" src={require("../../Images/maxresdefault.jpg")} alt="Paladins Shot"/>
    </div>
</div>

export default InfoPanel;
