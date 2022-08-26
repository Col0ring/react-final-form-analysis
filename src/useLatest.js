// @flow
import React from "react";
// 将 value 转化为 ref 的值，减少 effect 依赖
export default function useLatest<T>(value: T): { +current: T } {
  const ref = React.useRef(value);

  React.useEffect(() => {
    ref.current = value;
  });

  return ref;
}
