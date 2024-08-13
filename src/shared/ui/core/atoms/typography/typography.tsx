import { ReactNode } from 'react';
import './index.scss'

export type TTypography = {
  variant?: TTypographyVariants,
  type?: 'light' | 'medium' | 'bold',
  children: ReactNode,
  style?: React.CSSProperties,
  className?: string,
}

type TTypographyVariants =
  'title-h1' |
  'subtitle' |
  'tiny'

export const Typography = ({
  type = 'light',
  variant = 'subtitle',
  children,
  style,
  className
}: TTypography) => {
  return (
    <p
      className={`typography typography_${type} typography_${variant} ` + className}
      style={style}
    >
      {children}
    </p>
  );
};
