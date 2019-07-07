import React, {Component} from 'react';
import PropTypes from 'prop-types';



class MasonrySlide extends Component {

    static propTypes = {
        // -> params
        url: PropTypes.string.isRequired
    };



    render() {
        return (
            <div className={'masonry-slide'}>
                <div className={'masonry-slide--wrapper'}>
                    <img src={this.props.url} alt=""/>
                    <div className={'masonry-slide--tools'}>
                        <div className={'masonry-slide--tools--profile'}>
                            <img src="https://randomuser.me/api/portraits/men/40.jpg" alt="" className={'masonry-slide--tools--profile-img'}/>
                            <span className={'masonry-slide--tools--profile-title'}>John Moe</span>
                        </div>
                        <div className={'masonry-slide--tools--more'}><span /></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MasonrySlide;