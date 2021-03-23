import { Actions, ActionTypes } from './actions';
import { State, initalState } from './state';

export function featureReducer(state = initalState, action: Actions): State{
    switch (action.type){
        case ActionTypes.LOAD_REQUEST:
            return{
                ...state,
                loading: true,
                error: ''
            };

        case ActionTypes.LOAD_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                loading: false,
                error: ''
            };

        case ActionTypes.LOAD_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload.error
            };
            default: return state;
    }
}
