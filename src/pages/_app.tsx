import "src/lib/tailwind.css";
import type { AppProps } from "next/app";
import { MantineProvider, createEmotionCache } from "@mantine/core";

const appendCache = createEmotionCache({ key: "mantine", prepend: false });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      emotionCache={appendCache}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
