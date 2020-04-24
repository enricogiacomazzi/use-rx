import React, { useMemo, useRef, useEffect } from 'react';
import {ajax} from 'rxjs/ajax';
import {Observable, NEVER, Subject} from 'rxjs';
import {useRx} from "./lib";
import {map, switchMap} from "rxjs/operators";

export const Ajax: React.FC = () => {


    const click$ = useMemo(() => new Subject<number>(), []);
    const req$ = click$.pipe(
        map(x => `https://swapi.dev/api/people/${x}/`),
        switchMap(x => ajax.get(x)),
        map(x => x.response),
        map(({name, height, mass, hair_color}) => [name, height, mass, hair_color]));

    const res = useRx(req$, null);

    return (
        <div>
            <button onClick={() => click$.next(1)}>Luke</button>
            <button onClick={() => click$.next(2)}>C-3PO</button>
            <button onClick={() => click$.next(3)}>R2-D2</button>
            {res ? (
                <ul>
                    {res.map((x, i) => <li key={i}>{x}</li>)}
                </ul>
            ): null}
        </div>
    )
}
