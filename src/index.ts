import { useState, useEffect } from 'react';
import {Observable} from 'rxjs';


export function useRx<T>(state$: Observable<T>, initialState: T = null): T {
    const [state, setState] = useState<T>(initialState);
    useEffect(() => {
        const sub = state$.subscribe(setState, e => {throw new Error(e)}, () => sub && sub.unsubscribe());
        return () => sub && sub.unsubscribe();
    }, [state$]);

    return state;
}
