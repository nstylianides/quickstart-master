/**
 * Created by nstyladmin on 21/3/2016.
 */
import {Component, OnInit } from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Hero} from '../interfaces/hero';
import { HeroService } from '../services/hero.service';


@Component({
    selector: 'my-hero-detail',
    templateUrl:"app/templates/hero-detail.html",
    styleUrls: ["app/styles/hero-details.css"],
    inputs: ['hero']
})
export class HeroDetailComponent implements OnInit{
    /**
     *
     */
    hero: Hero;

    /**
     *
     * @param _heroService
     * @param _routeParams
     */
    constructor(
        private _heroService: HeroService,
        private _routeParams: RouteParams) {
    }

    /**
     *
     */
    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id)
            .then(hero => this.hero = hero);
    }

    /**
     *
     */
    goBack() {
        window.history.back();
    }
}