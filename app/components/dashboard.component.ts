/**
 * Created by nstyladmin on 21/3/2016.
 */
import { Component, OnInit } from 'angular2/core';
import { Hero } from '../interfaces/hero';
import { HeroService } from '../services/hero.service';
import { Router } from 'angular2/router';

/**
 *
 */
@Component({
    selector: 'my-dashboard',
    templateUrl: "app/templates/dashboard.html",
    styleUrls: ["app/styles/dashboard.css"]
})

/**
 *
 */
export class DashboardComponent {
    /**
     *
     * @type {Array}
     */
    heroes: Hero[] = [];

    /**
     *
     * @param _heroService
     */
    constructor(
        private _heroService: HeroService,
        private _router: Router
        ){
    }

    /**
     *
     * @param hero
     */
    gotoDetail(hero: Hero) {
        let link = ['HeroDetail', { id: hero.id }];
        this._router.navigate(link);
    }

    /**
     *
     */
    ngOnInit() {
        this._heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1,5));
    }


}