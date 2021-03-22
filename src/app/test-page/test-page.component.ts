import { NgrxImplementationStore } from './../store/store.module';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserStoreActions } from '../store';

@Component({
  selector: 'ab-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {

  constructor(private store: Store<NgrxImplementationStore>) { }

  ngOnInit(): void {
    this.store.dispatch(new UserStoreActions.LoadRequestAction({}));
  }

}
