import { Injectable } from '@angular/core';
import * as featureActions from './actions';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
// import {of} from 'rxjs';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';

@Injectable()
export class UserEffects{
    constructor(private action$: Actions){}
    loadData$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType<featureActions.LoadRequestAction>(
            featureActions.ActionTypes.LOAD_REQUEST
        ),
        switchMap(() =>
            this.getUser()
            .pipe(
                map(
                   data =>
                    new featureActions.LoadSuccessAction({data})
                ),
                catchError(error =>
                   of(new featureActions.LoadFailureAction({error}))
                )
            )
        )
    )
    );

    getUser(): Observable<any>{
        return of({
            name: 'Abrahale',
            surname: 'Kiros',
            email: 'abrahalekiros@gmail.com',
            aka: 'Ab_Kiros'
        });
    }
}

