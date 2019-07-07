import React, {Component} from 'react';
import {relIconURL} from "../../constants/config";

// For DEV purposes only
const homeUrl = window.location.hostname === 'localhost' ? "/" : "https://shubat-max.github.io/pawterest/";

class FixedMainMenu extends Component {

    static propTypes = {};



    render() {
        return (
            <div className={'menu'}>

                { this.getLongMenu() }

                { this.getShortMenu() }

             </div>
        );
    };



    getLongMenu = () => {
        return (
            <div className={'fullmenu'}>
                <div className={'fullmenu--top'}>
                    <a href={homeUrl}>
                        <div><span className={'fullmenu-item'}>Pawterest</span></div>
                    </a>
                </div>

                <div className={'fullmenu--middle'}>
                    <div><span className={'fullmenu-item'}>My Feed</span></div>
                    <div><span className={'fullmenu-item'}>My Collection</span></div>
                    <div><span className={'fullmenu-item'}>Feed Preferences</span></div>
                    <div className={'fullmenu--middle--drag'}><span /></div>
                </div>
                <div className={'fullmenu--bottom'}>
                    <div><span className={'fullmenu-item'}>Source Code</span></div>
                    <div><span className={'fullmenu-item'}>GitHub</span></div>
                </div>
            </div>
        )
    };

    getShortMenu = () => {
        return (
            <div className={'mainmenu'}>
                <div className={'mainmenu--top'}>
                    <a href={homeUrl}>
                        <div><img src={`${relIconURL}/paw-print.png`} alt="Pawterest Logo" className={'logo'}/></div>
                    </a>
                </div>

                <div className={'mainmenu--middle'}>
                    <div><img src={`${relIconURL}/house-white.png`} alt="White house"/></div>
                    <div><img src={`${relIconURL}/folder-white.png`} alt="White folder"/></div>
                    <div><img src={`${relIconURL}/cog-white.png`} alt="White cog"/></div>
                </div>

                <div className={'mainmenu--bottom'}>
                    <a href="https://github.com/Shubat-Max/pawterest" target="_blank" rel="noopener noreferrer">
                        <div><img src={`${relIconURL}/html-coding.png`} alt="Project Repository & Source Code"/></div>
                    </a>
                    <a href="https://github.com/Shubat-Max" target="_blank" rel="noopener noreferrer">
                        <div><img src={`${relIconURL}/github-logo.png`} alt="GitHub Account"/></div>
                    </a>
                </div>
            </div>
        )
    };
}

export default FixedMainMenu;