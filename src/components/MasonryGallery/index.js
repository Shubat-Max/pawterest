import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {mapToArr} from '../../helpers';
import {request10ImagesByCategory} from '../../actions';
import MasonrySlide from './MasonrySlide';
import {relGifURL} from "../../constants/config";


class MasonryGallery extends Component {

    static propTypes = {
        // -> connect
        observableCategory: PropTypes.number.isRequired,
        images: PropTypes.array.isRequired,
        loading: PropTypes.bool.isRequired,
        loaded: PropTypes.bool.isRequired,
        request10ImagesByCategory: PropTypes.func.isRequired
    };

    constructor(props){
        super(props);
        this.galleryEnd = React.createRef();
    };

    componentWillMount() {
        this.props.request10ImagesByCategory(this.props.observableCategory)
    };

    componentDidUpdate() {
        this.scrollToBottom();
    };

    render() {
        return this.getBody();
    };



    getBody = () => {
        return (
            <Fragment>
                <div className={'masonry-gallery'}>
                    {this.getImages()}
                </div>
                {this.getLoadButton()}
            </Fragment>
        )
    };

    getImages = () => {
        const {loading, loaded, images, observableCategory} = this.props;
        if((loaded && !loading) || images){
            return mapToArr(images).filter(image => {
                //filter out all non-current-category images
                //TODO: develop check for multiple categories for one image
                return image.categories[0].id === observableCategory
            }).map(image => {
                return <MasonrySlide  url={image.url} key={image.id}/>
            })
        }else{
            return <div>LOADING</div>
        }
    };

    getLoadButton = () => {
        const {loading, loaded} = this.props;
        if(loaded && !loading){
            return (
                <div className={'loadmore'}>
                    <div
                        className={ 'loadmore__btn' }
                        onClick={ this.onClickHandler }
                        ref={ this.galleryEnd }
                    >
                        LOAD MORE
                    </div>
                </div>
            )
        }else{
            return (
                <div className={'loadmore'}>
                    <div className={ 'loadmore__btn loadmore__loader' }
                         ref={ this.galleryEnd }>
                        <img src={`${relGifURL}/cat_loader.gif`} alt=""/>
                    </div>
                </div>
            )
        }
    };



    onClickHandler = () => {
        this.props.request10ImagesByCategory(this.props.observableCategory);
    };

    scrollToBottom = () => {
        this.galleryEnd.current.scrollIntoView({
            behavior: 'smooth'
        });
    };
}

export default connect(store => {
    return {
        observableCategory: store.settings.observableCategory,
        images: store.images.entities,
        loading: store.images.loading,
        loaded: store.images.loaded
    }
},{
    request10ImagesByCategory
})(MasonryGallery);