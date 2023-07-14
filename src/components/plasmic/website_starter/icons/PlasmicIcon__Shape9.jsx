// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Shape9Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 16"}
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
          "M11.064 8.321c-.007-1.29.576-2.264 1.758-2.98-.661-.946-1.66-1.467-2.978-1.569-1.248-.098-2.612.728-3.112.728-.527 0-1.736-.693-2.686-.693C2.085 3.84 0 5.372 0 8.49c0 .921.169 1.873.506 2.855.45 1.29 2.074 4.454 3.769 4.401.886-.02 1.512-.629 2.665-.629 1.118 0 1.698.63 2.686.63 1.708-.025 3.178-2.9 3.607-4.195-2.292-1.079-2.17-3.164-2.17-3.23zM9.074 2.55c.96-1.14.872-2.176.844-2.549C9.07.05 8.089.577 7.53 1.227c-.615.696-.977 1.557-.9 2.528.918.07 1.755-.401 2.444-1.206z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Shape9Icon;
/* prettier-ignore-end */
