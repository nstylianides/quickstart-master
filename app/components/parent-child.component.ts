/**
 * Created by nstyladmin on 22/3/2016.
 */
import { Component } from 'angular2/core';
import {ParentExampleComponent} from './parent-example.component';

@Component({
    selector: 'parent-child-component',
    templateUrl: "app/templates/parent-child-communication.html",
    directives: [ParentExampleComponent]
})

export class ParentChildComponent{

}