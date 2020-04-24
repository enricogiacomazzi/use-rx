import { useState, useEffect } from 'react';
import { Observable } from 'rxjs';

export function useRx<T>(state$: Observable<T>, initialState: T): T {
    const [state, setState] = useState<T>(initialState);
    useEffect(() => {
        console.log('render');
        if(!state$) {
            return;
        }

        const sub = state$.subscribe(x => {
            setState(x);
        });
        return () => sub && sub.unsubscribe();
    }, ['state$']);

    return state;
}
