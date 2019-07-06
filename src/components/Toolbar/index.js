import React, {Component} from 'react';

class Toolbar extends Component {
    render() {
        return (
            <div className={'toolbar'}>
                <div className={'toolbar--item toolbar--search'}>Search</div>
                <div className={'toolbar--item toolbar--tags'}>Tags</div>
                <div className={'toolbar--item toolbar--profile'}>Profile</div>
                <div className={'toolbar--item toolbar--tools'}>Tools</div>
            </div>
        );
    }
}

export default Toolbar;