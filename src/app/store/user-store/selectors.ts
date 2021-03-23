import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import {State} from './state';
export const getData = (state: State): any => state.data;
export const getError = (state: State): any => state.error;
export const getLoading = (state: State): boolean => state.loading;
