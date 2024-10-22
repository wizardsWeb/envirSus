import React from "react";
import Iframely from "../../components/Socials/Social";

const SocialPosts = () => {
  return (
    <div className="dark:bg-black">
      <div className="w-full flex flex-col justify-center items-center py-5">
        <h1 className="text-4xl font-bold dark:text-white">
          Don't Take Our Word for it.
        </h1>
        <h2 className="text-4xl font-bold text-blue-600">
          Trust Our Customers
        </h2>
      </div>
      <div className="w-full m-2 columns-3">
        <Iframely url="https://x.com/4biddnKnowledge/status/1845743720596943274" />
        <Iframely url="https://x.com/cpsavesoil/status/1845419301131714804" />
        <Iframely url="https://in.pinterest.com/pin/16325617394188355/" />
        <Iframely url="https://in.pinterest.com/pin/1055599904816431/" />
        <Iframely url="https://x.com/cpsavesoil/status/1845419301131714804" />
        <Iframely url="https://in.pinterest.com/pin/281543724182525/" />
      </div>
    </div>
  );
};

export default SocialPosts;
