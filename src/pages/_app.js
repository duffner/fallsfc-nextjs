import "@/styles/globals.css";

import { PrismicPreview } from "@prismicio/next";

import { repositoryName } from "@/prismicio";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* TODO: Remove the following element once you have read the documentation. */}
      {process.env.NODE_ENV === "development" && (
        <div
          style={{
            background: "#5163ba",
            padding: "1rem",
            textAlign: "center",
            fontSize: "0.85rem",
            color: "#fff",
          }}
        >
          <p>
            <strong>👋 Welcome to the new Sheboygan Falls FC Website!</strong>{" "}
            <a
              href="/registration"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "underline" }}
            >
              Learn About Getting Started
            </a>
          </p>
        </div>
      )}
      <Component {...pageProps} />
      <PrismicPreview repositoryName={repositoryName} />
    </>
  );
}
