'use client';

import { Card, CardContent, CardHeader, CardFooter } from '../ui/card';

interface CardRapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial = true,
}: CardRapperProps) => {
  return <Card className="w-[400px] shadow-md">{children}</Card>;
};
