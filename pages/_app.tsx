import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <Head>
        <meta name="application-name" content={process.env.NEXT_PUBLIC_APP_NAME} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={process.env.NEXT_PUBLIC_APP_NAME}/>
        <meta name="description" content={process.env.NEXT_PUBLIC_APP_DESCRIPTION} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#920fd4" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#f5f5f5" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={`https://${process.env.NEXT_PUBLIC_APP_DOMAIN}`} />
        <meta name="twitter:title" content={process.env.NEXT_PUBLIC_APP_NAME} />
        <meta name="twitter:description" content={process.env.NEXT_PUBLIC_APP_DESCRIPTION} />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/icons/android-chrome-192x192.png"
        />
        <meta name="twitter:creator" content="@kazerlelutin" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={process.env.NEXT_PUBLIC_APP_NAME} />
        <meta property="og:description" content={process.env.NEXT_PUBLIC_APP_DESCRIPTION} />
        <meta property="og:site_name" content={process.env.NEXT_PUBLIC_APP_NAME}/>
        <meta property="og:url" content={`https://${process.env.NEXT_PUBLIC_APP_DOMAIN}`} />
        <meta
          property="og:image"
          content={`https://${process.env.NEXT_PUBLIC_APP_DOMAIN}/icons/apple-touch-icon.png`}
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
