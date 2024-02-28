import Image from "next/image";
import { Suspense } from "react";
import Loading from "./components/Loading";
import Final from "./components/Final";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <Final />
    </Suspense>
  );
}
