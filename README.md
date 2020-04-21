# Use RX

React custom hook that return a state carried by an observable managing subscription and unsubscription.

### usage:

``` typescript jsx
import { useRx } from 'use-rx';
import { interval } from 'rxjs';

export const Counter: React.FC = () => {
  const state = useRx(interval(300));
  return (<h1>{state}</h1>)
} ;

```
