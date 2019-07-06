import { Record } from 'immutable';
import { CHANGE_OBSERVABLE_CATEGORY } from '../constants/types';



const ReducerState = Record({
    observableCategory: null,
});

const defaultState = new ReducerState();

export default (state = defaultState, action) => {
    const {type, payload} = action;

    switch(type){
        case  CHANGE_OBSERVABLE_CATEGORY:
            return state
                .set('observableCategory', payload.id);
        default:
            return state;
    }
}