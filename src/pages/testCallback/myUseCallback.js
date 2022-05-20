function _useCallback () {
  // 记录最近一次的函数与依赖项
  let lastFn, lastDeps;
  return function (fn, deps) {
    if (lastDeps) {
      // 筛选依赖项是否发生改变
      const isChanged = deps.some((item, i) => {
        return item !== lastDeps[i]
      });
      if (isChanged) {
        lastFn = fn;
        lastDeps = deps;
      }
      return lastFn;
    }
    lastFn = fn;
    lastDeps = deps;
    return lastFn;
  }
}


const useCallback = _useCallback();

export default useCallback;