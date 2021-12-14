import { ReactChild, useLayoutEffect, useRef } from "react";
import ReactDOM from "react-dom";

export const Portal = (props: { selector: string; children: ReactChild }) => {
  const { selector, children } = props;

  const element = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    element.current = document.querySelector(selector);
  }, []);

  if (null !== element.current) {
    return ReactDOM.createPortal(children, element.current);
  } else {
    return children;
  }
};
