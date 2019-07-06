import axios from 'axios';
import {
    LOAD_CATEGORIES,
    LOAD_IMAGES,
    START,
    SUCCESS,
    FAILED, CHANGE_OBSERVABLE_CATEGORY
} from '../constants/types';

const APIUrl = 'https://api.thecatapi.com/v1';

export function requestCategories(){
    return dispatch => {
        dispatch({
            type: LOAD_CATEGORIES + START
        });

        axios.get(`${APIUrl}/categories`)
            .then(response => {
                dispatch({
                    type: LOAD_CATEGORIES + SUCCESS,
                    payload: { response }
                });
                dispatch({
                    type: CHANGE_OBSERVABLE_CATEGORY,
                    payload: { id: response.data[0].id }
                });
            })
            .catch(error => dispatch({
                type: LOAD_CATEGORIES + FAILED,
                payload: { error }
            }))
    }
}

export function request10ImagesByCategory(id){
    return dispatch => {
        dispatch({
            type: LOAD_IMAGES + START,
            payload: { id }
        });

        axios.get(`${APIUrl}/images/search?limit=10&category_ids=${id}`)
            .then(response => dispatch({
                type: LOAD_IMAGES + SUCCESS,
                payload: { response }
            }))
            .catch(error => dispatch({
                type: LOAD_IMAGES + FAILED,
                payload: { error }
            }))
    };
}

export function changeObservableCategory(id){
    return dispatch => {
        dispatch({
            type: CHANGE_OBSERVABLE_CATEGORY,
            payload: { id }
        })
    }
}