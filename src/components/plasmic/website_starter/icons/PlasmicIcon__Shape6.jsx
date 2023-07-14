// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Shape6Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 8"}
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
          "M7.354.031H6.75V0H0v3h4.239a4.515 4.515 0 01-1.533 2.09l.001-.002 2.321 1.965C4.864 7.202 7.5 5.25 7.5 1.5A7.56 7.56 0 007.354.031z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Shape6Icon;
/* prettier-ignore-end */
