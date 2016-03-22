/**
 * Created by nstyladmin on 21/3/2016.
 */
import { Component }       from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HeroService }     from '../services/hero.service';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent} from './hero-detail.component';
import { ParentChildComponent} from './parent-child.component';


@RouteConfig([
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    }
    ,
    {
        path: '/parentchild',
        name: 'ParentChild',
        component: ParentChildComponent
    }])



@Component({
    selector: 'my-app',
    templateUrl:"app/templates/myapp.html",
    directives: [ROUTER_DIRECTIVES],
    styleUrls: ["app/styles/app.component.css"],
    providers:
        [
            ROUTER_PROVIDERS,
            HeroService
        ]
})


export class AppComponent {
    title = 'Tour of Heroes';
}

