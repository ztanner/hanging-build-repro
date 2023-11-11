export default function Page() {
  return <div>hello</div>;
}

export async function generateStaticParams() {
  return [
    {
      first: "1",
      second: "1231",
      third: "123141",
      fourth: "123133",
    },
  ];
}
