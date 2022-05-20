function _useMemo () {
  // 用于存放定时器id
  let timer = null;
  // 用于存放唯一的key
  let key = -1;
  // 用于存放多个memo，用key作为唯一标识
  let map = new Map();

  // 闭包
  return function (fn, deps) {
    key++;

    timer && clearTimeout(timer);
    // 异步操作，同步走完以后，还原key。当组件重新渲染时，又从0开始叠加，这样才能保证每次重新渲染后memo能对上
    timer = setTimeout(() => key = -1, 100);

    const curKey = key;
    const { deps: lastDeps } = map.get(curKey) || {};

    if (lastDeps) {
      const isChanged = deps.some((item, i) => item !== lastDeps[i]);

      if (isChanged) {
        map.set(curKey, { result: fn(), deps });
        return map.get(curKey).result;
      }
    }
    // useMemo拿的是函数返回的值
    map.set(curKey, { result: fn(), deps });
    return map.get(curKey).result;
  }
}

const useMemo = _useMemo();

export default useMemo;