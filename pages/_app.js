// import { StyledEngineProvider } from "@mui/material";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    // <>
    //   <StyledEngineProvider injectFirst>
    //     <Component {...pageProps} />
    //   </StyledEngineProvider>
    // </>

    <>
      <Head>
        <title>Login | PrivateDelights</title>
        <meta name="description" content="Login to PrivateDelights" />
      </Head>

      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
