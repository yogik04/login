// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function LockIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15.833 9.167H4.167c-.92 0-1.667.746-1.667 1.666v5.834c0 .92.746 1.666 1.667 1.666h11.666c.92 0 1.667-.746 1.667-1.666v-5.834c0-.92-.746-1.666-1.667-1.666zm-10 0V5.833a4.167 4.167 0 018.334 0v3.334"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LockIcon;
/* prettier-ignore-end */
