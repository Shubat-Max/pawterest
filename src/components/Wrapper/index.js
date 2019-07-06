import React, {Component, Fragment} from 'react';

import MainMenu from '../MainMenu';
import Categories from '../Categories';
import MasonryGallery from '../MasonryGallery';
import {connect} from "react-redux";



class Wrapper extends Component {
    render() {
        return (
            <div className={'wrapper'}>
                <div className={'content'}>
                    {this.getBody()}
                </div>
                <MainMenu />
            </div>
        );
    }

    getBody = () => {
        if(this.props.observableCategory === null){
            return <Categories />
        } else {
            return (
                <Fragment>
                    <Categories />
                    <MasonryGallery />
                </Fragment>
            )
        }

    }
}

export default connect(store => {
    return {
        observableCategory: store.settings.observableCategory
    }
})(Wrapper);