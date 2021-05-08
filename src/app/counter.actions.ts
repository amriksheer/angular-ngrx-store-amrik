//step-01
//npm install ngrx ,
//npm install @ngrx/store --save
//https://ngrx.io/guide/store
//step-01  create action
import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
