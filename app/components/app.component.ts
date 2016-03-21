import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Hero} from '../interfaces/hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from '../services/hero.service';


@Component({
    selector: 'my-app',
    templateUrl:"app/templates/myApp.html",
    styleUrls:['app/styles/myapp.css'],
    directives: [HeroDetailComponent],
    providers: [HeroService]
})

export class AppComponent implements OnInit{

    /**
     * Component Title
     * @type {string}
     */
    public title = 'Tour of Heroes';

    /**
     *
     */
    selectedHero: Hero;

    /**
     *
     * @type Hero{{}[]}
     */
    heroes = [{}];


    /**
     * CTOR
     * @param _heroService
     */
    constructor(private _heroService: HeroService) {

    }

    /**
     *
     * @param hero
     */
    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    /**
     *
     */
    getHeroes() {
        this._heroService.getHeroes()
            .then(
                heroes => this.heroes = heroes
            );
    }

    /**
     *
     */
    ngOnInit() {
        this.getHeroes();
    }
}
