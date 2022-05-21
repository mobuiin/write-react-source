import update from "../..";

function _useState () {
  // 与useMemo一样，用key作为唯一标识
  let key = 0;
  // 存储多个state
  let stateMap = new Map();
  let timer = null;

  return function (initState) {
    const curKey = key;
    const state = stateMap.has(curKey) ? stateMap.get(curKey) : initState;
    const setState = (newState) => {
      stateMap.set(curKey, newState);
      key = 0;
      timer && clearInterval(timer);
      timer = setTimeout(update);;
    }
    key++;
    return [state, setState]
  }
}

const useState = _useState();

export default useState;