// @flow
import React from "react";

// 监听值的改变，其实就是简单的 previous 值的记录
export default function useWhenValueChanges(
  value: any,
  callback: () => void,
  isEqual: (any, any) => boolean = (a, b) => a === b,
) {
  const previous = React.useRef(value);
  React.useEffect(() => {
    if (!isEqual(value, previous.current)) {
      callback();
      previous.current = value;
    }
  });
}
