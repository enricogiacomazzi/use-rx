import React, { useMemo, useRef, useEffect } from 'react';
import {BehaviorSubject, fromEvent, NEVER, Observable} from 'rxjs';
import {useRx} from "./lib";
import {map, startWith, switchMap} from "rxjs/operators";

export const StrLen: React.FC = () => {
    const ref = useRef(null);
    const state$ = useMemo(() => new BehaviorSubject<Observable<string>>(NEVER), []);

    useEffect(() => {
        if(!ref.current) return;
        // @ts-ignore
        state$.next(fromEvent(ref.current, 'keyup'))
    }, []);

    // @ts-ignore
    const state = useRx(state$.pipe(switchMap(x => x), map(x => x.target.value || ''), map(x => x.length)), 0);

    return (
        <div>
            <input type="text" ref={ref} />
            <span>String length: {state}</span>
        </div>
    )
}
