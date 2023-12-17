import { memo, SVGProps } from 'react';

const Ellipse3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1199 1199' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M863.64 863.639C880.638 880.638 889.137 889.137 900.348 888.475C911.558 887.813 918.434 879.088 932.185 861.638C956.194 831.172 975.957 797.49 990.861 761.507C1012.16 710.091 1023.12 654.983 1023.12 599.33C1023.12 543.677 1012.16 488.569 990.861 437.152C969.564 385.736 938.347 339.017 898.995 299.665C859.642 260.312 812.924 229.096 761.507 207.799C710.091 186.501 654.983 175.54 599.33 175.54C543.677 175.54 488.569 186.501 437.152 207.799C401.17 222.703 367.488 242.465 337.022 266.475C319.572 280.226 310.847 287.102 310.185 298.312C309.523 309.523 318.022 318.022 335.02 335.02L429.125 429.125C444.474 444.474 452.149 452.149 460.56 453.258C468.971 454.367 480.661 447.624 504.041 434.137C511.215 429.999 518.666 426.324 526.35 423.141C549.487 413.557 574.286 408.624 599.33 408.624C624.374 408.624 649.172 413.557 672.31 423.141C695.447 432.725 716.47 446.772 734.179 464.481C751.888 482.189 765.935 503.213 775.519 526.35C785.103 549.487 790.036 574.286 790.036 599.33C790.036 624.374 785.103 649.172 775.519 672.31C772.336 679.994 768.661 687.445 764.523 694.619C751.036 717.999 744.293 729.689 745.402 738.1C746.511 746.511 754.185 754.185 769.534 769.534L863.64 863.639Z'
      fill='url(#paint0_linear_8_253)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_8_253'
        x1={898.995}
        y1={898.995}
        x2={299.537}
        y2={299.665}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0000' />
        <stop offset={0.510417} stopColor='#E200D9' />
        <stop offset={1} stopColor='#5200FF' />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(Ellipse3Icon);
export { Memo as Ellipse3Icon };
