/**
 * Created by nstyladmin on 21/3/2016.
 */
import {Injectable} from 'angular2/core';
import {HEROES} from '../mock/heroes.mock';
import {Hero} from '../interfaces/hero';

@Injectable()
export class HeroService {

    /**
     *
     * @returns {any}
     */
    getHeroes() {
        return Promise.resolve(HEROES);
    }

    /**
     *
     * @returns {PromiseConstructor|Promise<Hero[]>}
     */
    // See the "Take it slow" appendix
    getHeroesSlowly() {
        /*
        return new Promise<Hero[]>(resolve =>
                setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
        );*/
    }

    /**
     *
     * @param id
     * @returns {any}
     */
    getHero(id: number) {
        ///*
        return Promise.resolve(HEROES).then(
                heroes => heroes.filter(hero => hero.id === id)[0]
        );//*/
        //return HEROES;
    }
}