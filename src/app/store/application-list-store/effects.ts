import { Injectable } from '@angular/core';
import * as featureActions from './actions';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
// import {of} from 'rxjs';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';

@Injectable()
export class ApplicationListEffects{
    constructor(private action$: Actions){}
    loadData$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType<featureActions.LoadRequestAction>(
            featureActions.ActionTypes.LOAD_REQUEST
        ),
        switchMap(() =>
            this.getApplication()
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

    getApplication(): Observable<any>{
        console.log('Get APplications running is the issue here');
        return of([
            {
            id: '1001',
            name: 'Application 1',
        },
        {
            id: '1002',
            name: 'Application 2',
        },
    ]
        );
    }
}

