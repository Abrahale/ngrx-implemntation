import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { featureReducer} from './reducer';
import { ApplicationListEffects } from './effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature('application-list', featureReducer),
        EffectsModule.forFeature([ApplicationListEffects])
    ],
    providers: [ApplicationListEffects]
})
export class ApplicationListStoreModule{}
