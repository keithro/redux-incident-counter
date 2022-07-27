import { useSelector } from 'react-redux';
import { increment, decrement, set } from './actions';
import { SetCounter } from './SetCounter';
import { useActions } from './actions';

export const Counter = () => {
  const incident = 'Incident';
  const count = useSelector((state) => state.count);
  const actions = useActions({ increment, decrement, set });

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        {/* Using new, bound action creators */}
        <button onClick={() => actions.increment()}>Increment</button>
        <button onClick={() => actions.set(0)}>Reset</button>
        <button onClick={() => actions.decrement()}>Decrement</button>
      </section>
      <SetCounter />
    </main>
  );
};

export default Counter;
