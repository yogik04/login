// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Shape4Icon(props) {
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
          "M0 4.01l2.464 1.806A4.498 4.498 0 016.635 3c1.147 0 2.191.433 2.986 1.14l2.121-2.122A7.465 7.465 0 006.635 0 7.496 7.496 0 000 4.01z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Shape4Icon;
/* prettier-ignore-end */
