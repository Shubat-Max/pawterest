import React, {Component} from 'react';

class MainMenu extends Component {
    render() {
        return (
            <div className={'mainmenu'}>
                <div className={'mainmenu--top'}>
                    <a href="/">
                        <div><img src="./assets/image/icon/paw-print.png" alt="Pawterest Logo" className={'logo'}/></div>
                    </a>
                </div>

                <div className={'mainmenu--middle'}>
                    <div><img src="./assets/image/icon/house-white.png" alt="White house" title="My Feed (Under construction)"/></div>
                    <div><img src="./assets/image/icon/folder-white.png" alt="White folder" title="My Collection (Under construction)"/></div>
                    <div><img src="./assets/image/icon/cog-white.png" alt="White cog" title="Feed Settings (Under construction)"/></div>
                </div>
                <div className={'mainmenu--bottom'}>
                    <a href="https://github.com/Shubat-Max/pawterest" target="_blank" rel="noopener noreferrer"><div><img src="./assets/image/icon/html-coding.png" alt="Project Repository & Source Code" title="Project Repository & Source Code"/></div></a>
                    <a href="https://github.com/Shubat-Max" target="_blank" rel="noopener noreferrer"><div><img src="./assets/image/icon/github-logo.png" alt="GitHub Account" title="GitHub Account"/></div></a>
                </div>

            </div>
        );
    }
}

export default MainMenu;