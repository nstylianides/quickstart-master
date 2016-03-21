/**
 * Created by nstyladmin on 21/3/2016.
 */
import {Injectable} from 'angular2/core';
import {HEROES} from '../mock/heroes.mock';
import {Hero} from '../interfaces/hero';

@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }
    // See the "Take it slow" appendix
    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
                setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
        );
    }
}