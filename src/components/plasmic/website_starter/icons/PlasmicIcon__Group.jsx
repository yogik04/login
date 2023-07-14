// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function GroupIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 124 102"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2 2h13.652a4.95 4.95 0 014.735 3.513L41.76 75.9a4.95 4.95 0 004.734 3.514H94.65a4.95 4.95 0 004.796-3.736l8.623-34.022a4.949 4.949 0 014.797-3.736h8.521"
        }
        stroke={"currentColor"}
        strokeWidth={"3.756"}
        strokeLinecap={"round"}
      ></path>

      <path
        d={
          "M72.593 21.743a1.854 1.854 0 00-2.624 0l-11.81 11.824a1.86 1.86 0 000 2.627c.725.726 1.9.726 2.624 0l10.498-10.51 10.498 10.51c.725.726 1.9.726 2.624 0a1.86 1.86 0 000-2.627l-11.81-11.824zm.544 35.995V23.057h-3.712v34.681h3.712z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M58.29 99.851a5.57 5.57 0 005.568-5.574 5.57 5.57 0 00-5.567-5.573 5.57 5.57 0 00-5.567 5.573 5.57 5.57 0 005.567 5.574zm27.218 0a5.57 5.57 0 005.568-5.574 5.57 5.57 0 00-5.567-5.573 5.57 5.57 0 00-5.568 5.573 5.57 5.57 0 005.567 5.574z"
        }
        stroke={"currentColor"}
        strokeWidth={"3.005"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
