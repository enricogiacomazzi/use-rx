import React, {useEffect, useMemo, useState} from "react";
import {useRx} from "./lib";
import {interval, merge, Subject, throwError} from "rxjs";
import {mapTo, scan, share, switchMap, tap} from "rxjs/operators";


export const Counter: React.FC = () => {
    const up$ = useMemo(() => new Subject(), []);
    const down$ = useMemo(() => new Subject(), []);

    const tmp = merge(
        up$.pipe(mapTo(1)),
        down$.pipe(mapTo(-1))
    ).pipe(
        scan((a, x) => a + x, 0)
    );

    const state = useRx(tmp, 0);

    return (
        <div>
            <h4 >{state}</h4>
            <button onClick={() => up$.next()}>Up</button>
            <button onClick={() => down$.next()}>Down</button>
        </div>
    )
}
