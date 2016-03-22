/**
 * Created by nstyladmin on 22/3/2016.
 */
import {
        Component,
        OnDestroy,
        OnInit
} from 'angular2/core';

import {
    ChildExampleComponent
} from './child-example.component';

@Component({
    selector: 'parent-example-component',
    template: `
        <button (click)="myclick()">Change MyComponent</button>
        internal name: {{obj.name}}
        <childexample-component [myProp]="value" [myOtherProp]="ovalue" (changeObj)="onchangeobj($event)"></childexample-component>
        `,
    directives: [ChildExampleComponent]
})

/*
*         <childexample-component [my-prop]="value" [my-other-prop]="ovalue"  ></childexample-component>

 * */
/**
 *
 */
export class ParentExampleComponent implements OnInit, OnDestroy {
    value = 0;
    ovalue = 0;
    obj = {name:"george"}

    public myclick(){
        this.value = this.value + 1;
        //this.ovalue = this.ovalue + 2;

    }
    onchangeobj(h){
        console.log(h);
    }

    ngOnInit(){
        console.log("parent reborned");
    }

    ngOnDestroy(){
        console.log("parent died");
    }

}