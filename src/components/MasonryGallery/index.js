import React, {Component, Fragment} from 'react';
import {request10ImagesByCategory} from "../../actions";
import {connect} from "react-redux";
import {mapToArr} from "../../helpers";

class MasonryGallery extends Component {
    constructor(props){
        super(props);
        this.galleryEnd = React.createRef();
    }

    componentWillMount() {
        this.props.request10ImagesByCategory(this.props.observableCategory)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.scrollToBottom();
    }

    render() {
        return this.getBody();
    }



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
                return image.categories[0].id === observableCategory
            }).map(image => {
                return (
                    <div className={'masonry-gallery--item'} key={image.id}>
                        <img src={image.url} alt=""/>
                    </div>
                )
            })
        }else{
            return <div>LOADING</div>
        }
    };

    getLoadButton = () => {
        const {loading, loaded} = this.props;
        if(loaded && !loading){
            return (
                <div className={'loadmore--block'}>
                    <div
                        className={ 'loadmore--btn' }
                        onClick={ this.onClickHandler }
                        ref={ this.galleryEnd }
                    >
                        LOAD MORE
                    </div>
                </div>
            )
        }else{
            return (
                <div className={'loadmore--block'}>
                    <div className={ 'loadmore--btn loadmore--loader' }
                         ref={ this.galleryEnd }>
                        <img src="./assets/image/gif/cat_loader.gif" alt=""/>
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