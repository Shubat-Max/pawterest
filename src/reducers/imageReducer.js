import { Record, OrderedMap } from 'immutable';
import {
    LOAD_IMAGES,
    START,
    SUCCESS,
    FAILED
} from '../constants/types';
import { arrToMap } from "../helpers";

const ImageRecord = Record({
    id: null,
    breeds: [],
    categories: [],
    url: null,
    width: null,
    height: null
});

const ReducerState = Record({
    entities: new OrderedMap(arrToMap([], ImageRecord)),
    loading: false,
    loaded: false
});

const defaultState = new ReducerState();

export default (state = defaultState, action) => {
    const { type, payload } = action;

    switch(type){
        case  LOAD_IMAGES + START:
            return state
                .set('loading', true)
                .set('loaded', false);

        case  LOAD_IMAGES + SUCCESS:
            return state
                .update('entities', entities => entities.merge(arrToMap(payload.response.data, ImageRecord)))
                .set('loading', false)
                .set('loaded', true);

        case  LOAD_IMAGES + FAILED:
            return state
                .set('loading', false)
                .set('loaded', false);

        default:
            return state;
    }
}