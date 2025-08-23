import React from "react";
import DetailComponent from "./_components/DetailComponent";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <DetailComponent slug={slug} />;
}
