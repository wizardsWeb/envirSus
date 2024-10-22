import React, { useEffect, useState } from "react";

const KEY = "cbb88f335e1ddf9e63e7e7";

export default function Iframely(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [html, setHtml] = useState({
    __html: "<div />",
  });

  useEffect(() => {
    if (true) {
      fetch(
        `https://iframe.ly/api/oembed?url=${encodeURIComponent(
          props.url
        )}&api_key=cbb88f335e1ddf9e63e7e7`
      )
        .then((res) => res.json())
        .then(
          (res) => {
            setIsLoaded(true);
            const string = res.html;

            if (res.html) {
              setHtml({ __html: res.html });
            } else if (res.error) {
              setError({ code: res.error, message: res.message });
            }
          },
          (error) => {
            console.log(error);

            setIsLoaded(true);
            setError(error);
          }
        );
    } else {
      setError({ code: 400, message: "Provide url attribute for the element" });
    }
  }, []);

  useEffect((props) => {
    window.iframely && window.iframely.load();
  });

  if (error) {
    return (
      <div>
        Error: {error.code} - {error.message}
      </div>
    );
  } else if (!isLoaded) {
    return <div>Loading…</div>;
  } else {
    return (
      <div
        className="mb-2 rounded-xl shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] transition-all hover:shadow-[0_8px_14px_0_rgba(0,0,0,0.2)]"
        dangerouslySetInnerHTML={html}
      />
    );
  }
}
