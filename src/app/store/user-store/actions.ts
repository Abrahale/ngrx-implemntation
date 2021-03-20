import { Action } from '@ngrx/store';

export enum ActionTypes{
    LOAD_REQUEST = '[User] Load Request',
    LOAD_SUCCESS = '[User] Load Success',
    LOAD_FAILURE = '[User] Load Failure'
}

export class LoadRequestAction implements Action{
    readonly type = ActionTypes.LOAD_REQUEST;
    constructor(public payload:any){}
}

export class LoadSuccessAction implements Action{
    readonly type = ActionTypes.LOAD_SUCCESS;
    constructor(public payload: {data:any}){}
}

export class LoadFailureAction implements Action{
    readonly type = ActionTypes.LOAD_FAILURE;
    constructor( public payload: {error : string}){}
}

export type Actions = LoadRequestAction | LoadSuccessAction | LoadFailureAction;