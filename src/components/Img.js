import { memo } from "react";
import { IcCrypto } from "../assets/IcCrypto";

const Img = () => (
  <div className="p-5 lg:p-10 order-last sm:order-first">
    <IcCrypto />
  </div>
);

const ImgMemo = memo(Img);
export { ImgMemo as Img };
