// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Shape5Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 6"}
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
          "M6.677 5.98a7.465 7.465 0 005.028-1.947L9.384 2.068a4.466 4.466 0 01-2.707.912A4.498 4.498 0 012.446 0L0 1.884A7.494 7.494 0 006.677 5.98z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Shape5Icon;
/* prettier-ignore-end */
