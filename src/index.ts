import {useState, useEffect, useMemo} from 'react';
import {BehaviorSubject, NEVER, Observable} from 'rxjs';
import {switchMap} from "rxjs/operators";

export function useRx<T>(state$: Observable<T>, initialState: T): T {
    const [state, setState] = useState<T>(initialState);
    const states$: BehaviorSubject<Observable<T>> = useMemo(() => new BehaviorSubject<Observable<T>>(NEVER), []);

    useEffect(() => {
        states$.next(state$);
    }, ['state$']);

    useEffect(() => {
        const sub = states$.pipe(switchMap(x => x)).subscribe(setState);
        return () => sub && sub.unsubscribe();
    }, []);

    return state;
}
