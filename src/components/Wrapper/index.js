import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types'
import {connect} from "react-redux";

import FixedMainMenu from '../FixedMainMenu';
import Categories from '../Categories';
import MasonryGallery from '../MasonryGallery';



class Wrapper extends Component {

    static propTypes = {
        observableCategory: PropTypes.number
    };

    render() {
        return (
            <div className={'wrapper'}>
                <div className={'content'}>

                    {this.getContent()}

                </div>

                <FixedMainMenu />

            </div>
        );
    }

    getContent = () => {
        if(this.props.observableCategory !== null){
            return (
                <Fragment>
                    <Categories />
                    <MasonryGallery />
                </Fragment>
            )
        } else {
            return <Categories />
        }
    }
}

export default connect(store => {
    return {
        observableCategory: store.settings.observableCategory
    }
})(Wrapper);