import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

type Props = {
  animationPath: string;
};

const GreetingLottie = ({ animationPath }: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div style={{ width: "100%", height: "400px" }} />;
  }

  // 클라이언트 사이드에서만 Lottie 로드
  const Lottie = require("react-lottie").default;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: animationPath,
  };

  return (
    <div onClick={() => null}>
      {/* @ts-ignore */}
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default GreetingLottie;
