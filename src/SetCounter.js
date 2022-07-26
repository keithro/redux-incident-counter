import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { set } from './actions';

export const SetCounter = () => {
  // Getting and updating count from our store
  const countFromStore = useSelector((state) => state.count);
  // setting count's initial value to our count from strore
  const [count, setCount] = useState(countFromStore);
  const dispatch = useDispatch();
  // Updating the count state every time our store is updated (keeping it up-to-date)
  useEffect(() => {
    setCount(countFromStore);
  }, [countFromStore]);

  return (
    <section className="controls">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(set(count));
        }}
      >
        <label htmlFor="set-to">Set Count</label>
        <input
          id="set-to"
          type="number"
          value={count}
          onChange={(event) => setCount(event.target.value)}
        />
        <input type="submit" />
      </form>
    </section>
  );
};
