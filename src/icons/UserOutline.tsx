import React, { forwardRef } from "react";
export interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
}
const UserOutline = forwardRef(({ size = 24, ...props }: Props, ref: any) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      ref={ref}
      width={size}
      height={size}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  );
});
export default UserOutline;
