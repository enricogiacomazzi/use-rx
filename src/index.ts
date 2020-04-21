import { useState, useEffect } from 'react';
import {Observable} from 'rxjs';


export function useRx<T>(state$: Observable<T>): T {
    const [state, setState] = useState<T>(null);
    useEffect(() => {
        const sub = state$.subscribe(x => {
            console.log('state', x);
            setState(x);
        });

        return () => {
            sub && sub.unsubscribe();
        }
    }, []);

    return state;
}
