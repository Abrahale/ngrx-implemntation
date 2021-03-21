import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserStoreModule } from './user-store/user-store.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    exports: [],
    declarations: [],
    imports: [
        CommonModule,
        UserStoreModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
    ]
})

export class NgrxImplementationStore{}
