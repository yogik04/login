// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Shape2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 7"}
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
          "M3.5 1a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM0 3.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Shape2Icon;
/* prettier-ignore-end */
