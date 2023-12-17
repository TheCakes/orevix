import { memo, SVGProps } from 'react';

const Ellipse7Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1562 1562' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M488.53 361.684C474.835 342.042 467.988 332.221 470.404 321.475C472.82 310.728 482.604 305.131 502.171 293.936C589.893 243.748 689.854 218.044 791.518 220.024C893.182 222.004 992.067 251.58 1077.77 305.145C1096.88 317.093 1106.44 323.068 1108.44 333.9C1110.43 344.732 1103.21 354.279 1088.76 373.373L946.105 561.891C932.789 579.487 926.132 588.285 917.644 590.444C909.156 592.603 897.118 587.157 873.042 576.265C845.492 563.802 815.544 556.966 784.968 556.371C754.392 555.775 724.2 561.44 696.186 572.821C671.704 582.767 659.463 587.74 651.066 585.252C642.668 582.765 636.358 573.714 623.738 555.613L488.53 361.684Z'
      fill='url(#paint0_linear_8_254)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_8_254'
        x1={1108.6}
        y1={337.154}
        x2={459.964}
        y2={320.502}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#00D1FF' />
        <stop offset={1} stopColor='#0029FF' />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(Ellipse7Icon);
export { Memo as Ellipse7Icon };
