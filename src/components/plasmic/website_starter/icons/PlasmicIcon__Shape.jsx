// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ShapeIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 11"}
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
          "M16 5.5S13 0 8 0 0 5.5 0 5.5 3 11 8 11s8-5.5 8-5.5zm-14.827 0c.484.735 1.04 1.42 1.66 2.043C4.12 8.832 5.88 10 8 10c2.12 0 3.879-1.168 5.168-2.457a13.13 13.13 0 001.66-2.043 13.13 13.13 0 00-1.66-2.043C11.879 2.168 10.119 1 8 1 5.88 1 4.121 2.168 2.832 3.457A13.133 13.133 0 001.172 5.5h.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ShapeIcon;
/* prettier-ignore-end */
