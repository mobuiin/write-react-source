import {
  useCallback,
  // useMemo,
  useState
} from 'react';
import Button from '../../components/Button';

// 引用自己的useCallback
// import useCallback from './myUseCallback';

import useMemo from './myUseMemo';


function TestCallback () {
  console.log('test-callback');
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const changeCount = () => {
    setCount(count + 1);
  }

  // 用useCallback包裹的函数，只有当监听的数值发生变化的时候，该函数才会执行
  const changeCount2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);


  const changeCount3 = () => {
    setCount3(count3 + 1);
  };

  // useMemo
  const sum = useMemo(() => {
    console.log('useMemo-----');
    let num = 10;
    num = count2 * 10;
    return num;
  }, [count2]);

  return (
    <div>
      <p>TestCallback</p>

      <p>count1: {count}</p>
      <p>count2: {count2}</p>
      <p>count3: {count3}</p>
      <button onClick={changeCount}>{Math.random()}</button>

      <Button onClickBtn={changeCount2}>btn2</Button>

      <Button onClickBtn={changeCount3}>btn3</Button>
      <p>{sum}</p>

    </div>
  )
}

export default TestCallback;