import React from "react"
export default function Detail() {

  return (
    <div>Detail</div>
  );
}

export async function getServerSideProps(context: any) {
  const { query = {} } = context;

  return {
    props: {
      result: {},
    },
  };
}
