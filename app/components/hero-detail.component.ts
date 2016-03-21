/**
 * Created by nstyladmin on 21/3/2016.
 */
import {Component} from 'angular2/core';
import {Hero} from '../interfaces/hero';

@Component({
    selector: 'my-hero-detail',
    templateUrl:"app/templates/hero-detail.html",
    inputs: ['hero']
})
export class HeroDetailComponent {
    hero: Hero;
}