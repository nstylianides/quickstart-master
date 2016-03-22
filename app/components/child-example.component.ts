/**
 * Created by nstyladmin on 22/3/2016.
 */
import {
        Component,
        OnInit,
        OnChanges,
        OnDestroy,
        Input,
        Output,
        SimpleChange
} from 'angular2/core';

import {EventEmitter} from 'angular2/core';

@Component({
    selector: 'childexample-component',
    template: `
        <p>myProp = {{myProp}}</p>
        <p>myOtherProp = {{myOtherProp}}</p>
        <p>myObject = </p>
    `
})

export class ChildExampleComponent implements OnChanges, OnInit, OnDestroy {
    @Input('myProp') myProp: any = 0;
    @Input('myOtherProp') myOtherProp: any = 0;
    @Output('changeObj') changeObj: EventEmitter<any> = new EventEmitter<any>();

    counter: any = 0;

    constructor (){
        this.counter = 0;
        console.log('constructor');
    }

    ngOnInit(){
        console.log('child reborned');
    }

    ngOnChanges(changes: {[propertyName: string]: SimpleChange}){
        this.changeObj.emit({counter: this.counter});
        this.counter++;

        for (let propName in changes) {
            let prop = changes[propName];
            console.log(propName + " " + prop);
        }
    }

    ngOnDestroy(){
        console.log("i am dead");
    }

}
