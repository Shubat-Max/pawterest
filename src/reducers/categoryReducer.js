import { Record, OrderedMap } from 'immutable';
import { LOAD_CATEGORIES,START,SUCCESS,FAILED } from '../constants/types';
import { arrToMap } from "../helpers";

const CategoryRecord = Record({
    id: null,
    name: null
});

const ReducerState = Record({
    entities: new OrderedMap(arrToMap([], CategoryRecord)),
    loading: false,
    loaded: false
});

const defaultState = new ReducerState();

export default (state = defaultState, action) => {
    const {type, payload} = action;

    switch(type){
        case  LOAD_CATEGORIES + START:
            return state
                .set('loading', true)
                .set('loaded', false);

        case  LOAD_CATEGORIES + SUCCESS:
            return state.update('entities', entities => entities.merge(arrToMap(payload.response.data, CategoryRecord)))
                .set('loading', false)
                .set('loaded', true);

        case  LOAD_CATEGORIES + FAILED:
            return state
                .set('loading', false)
                .set('loaded', false);
        default:
            return state;
    }
}