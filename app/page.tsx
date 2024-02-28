import { Suspense } from "react";
import Loading from "./components/Loading";
import Final from "./components/Final";

export default function Home() {
  return (
    <main className="container m-auto">
      <Suspense fallback={<Loading />}>
        <Final />
      </Suspense>
    </main>
  );
}
