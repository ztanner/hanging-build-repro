type LayoutProps = {
  children: React.ReactNode;
  params: { first: string };
};

export default function RootLayout({ children }: LayoutProps) {
  return <>{children}</>;
}

export function generateStaticParams() {
  return [{ first: "a" }];
}
