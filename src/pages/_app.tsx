import { AppModelProvider } from "../model/AppModelProvider";

export default function App({ Component, pageProps }) {
  return (
    <AppModelProvider>
      <Component {...pageProps} />
    </AppModelProvider>
  );
}
