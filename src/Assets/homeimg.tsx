import * as React from "react";
function Homeimg(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={561} height={628} fill="none" {...props}>
      <path fill="url(#prefix__pattern0)" d="M0 0h561v628H0z" />
      <defs>
        <pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#prefix__image0_3_6"
            transform="matrix(.00049 0 0 .00044 0 -.046)"
          />
        </pattern>
        <image
          id="prefix__image0_3_6"
          width={2044}
          height={2500}
        />
      </defs>
    </svg>
  );
}
const MemoHomeimg = React.memo(Homeimg);
export default MemoHomeimg;