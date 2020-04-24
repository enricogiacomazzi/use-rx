"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useRx(state$, initialState = null) {
    const [state, setState] = react_1.useState(initialState);
    react_1.useEffect(() => {
        const sub = state$.subscribe(setState);
        return () => sub && sub.unsubscribe();
    }, ['state$']);
    return state;
}
exports.useRx = useRx;
