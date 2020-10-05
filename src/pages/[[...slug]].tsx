import Head from "next/head";
import { MessageFormContainer } from "../components/container/MessageFormContainer";

export default function Page() {
  return (
    <div>
      <Head>
        <title>Title</title>
      </Head>

      <main>
        <MessageFormContainer />
      </main>
    </div>
  );
}
