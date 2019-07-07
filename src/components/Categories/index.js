import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {mapToArr} from "../../helpers";
import {
    requestCategories,
    changeObservableCategory,
    request10ImagesByCategory
} from '../../actions';


class Categories extends Component {

    static propTypes = {
        // -> connect
        categories: PropTypes.array.isRequired,
        loading: PropTypes.bool.isRequired,
        loaded: PropTypes.bool.isRequired,
        images: PropTypes.array.isRequired,
        observableCategory: PropTypes.number.isRequired,
        requestCategories: PropTypes.func.isRequired,
        changeObservableCategory: PropTypes.func.isRequired,
        request10ImagesByCategory: PropTypes.func.isRequired
    };



    componentDidMount() {
        this.props.requestCategories();
    };

    render() {
        return this.getBody();
    };



    getBody = () => {
        const {loaded, loading, categories, observableCategory} = this.props;

        if(loaded && !loading && categories.size !== 0 && observableCategory !== null ){
            return (
                <div className={'category--block'}>
                    {this.getCategories()}
                </div>
            )
        }else{
            return null;
        }
    };

    getCategories = () => {
        const { categories, observableCategory } = this.props;

        return mapToArr(categories).sort((a,b) => {
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 1;
            return 0;
        }).map(category => {
            return (
                <div className={'category--item--outline'} key={category.id} onClick={() => this.onClickHandler(category.id)}>
                    <div className={`category--item--content${observableCategory === category.id ? "--active":""}`}>
                        {category.name}
                    </div>
                </div>
            )
        })
    };



    onClickHandler = id => {
        this.props.changeObservableCategory(id);
        if(!mapToArr(this.props.images).filter(image => image.categories[0].id === id).length){
            this.props.request10ImagesByCategory(id);
        }
    };
}

export default connect(store => {
    return {
        categories: store.categories.entities,
        loading: store.categories.loading,
        loaded: store.categories.loaded,
        images: store.images.entities,
        observableCategory: store.settings.observableCategory
    }
},{
    requestCategories,
    changeObservableCategory,
    request10ImagesByCategory
})(Categories);