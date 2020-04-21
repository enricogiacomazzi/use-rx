"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useRx(state$) {
    const [state, setState] = react_1.useState(null);
    react_1.useEffect(() => {
        const sub = state$.subscribe(x => {
            console.log('state', x);
            setState(x);
        });
        return () => {
            sub && sub.unsubscribe();
        };
    }, []);
    return state;
}
exports.useRx = useRx;
