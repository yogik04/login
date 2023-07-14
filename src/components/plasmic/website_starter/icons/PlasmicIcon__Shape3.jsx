// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Shape3Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 15"}
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
          "M14.854 6.031h-.604V6H7.5v3h4.239A4.498 4.498 0 013 7.5 4.5 4.5 0 017.5 3c1.147 0 2.19.433 2.985 1.14l2.122-2.122A7.465 7.465 0 007.5 0a7.5 7.5 0 107.354 6.031z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Shape3Icon;
/* prettier-ignore-end */
