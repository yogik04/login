// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Shape8Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 12"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M3.793 6.088h1.844l.29-1.873H3.792V3.191c0-.778.254-1.468.982-1.468h1.17V.088C5.738.062 5.304 0 4.482 0c-1.715 0-2.72.906-2.72 2.969v1.246H0v1.873h1.763v5.148c.349.053.703.089 1.066.089.328 0 .648-.03.964-.073V6.088z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Shape8Icon;
/* prettier-ignore-end */
