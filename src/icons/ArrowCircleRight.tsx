import React, { forwardRef } from "react";
export interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
}
const ArrowCircleRight = forwardRef(
  ({ size = 24, ...props }: Props, ref: any) => {
    return (
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        ref={ref}
        width={size}
        height={size}
        {...props}
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);
export default ArrowCircleRight;
