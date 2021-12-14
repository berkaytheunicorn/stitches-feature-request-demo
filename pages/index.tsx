import React from "react";

import type { NextPage } from "next";

import { useWorld } from "@doubco/world/lib/react";
import { Meta } from "components/primitives/Meta";
import { Text } from "../components/primitives/Text";
import { Hello } from "../components/Hello";

const Home: NextPage = () => {
  const { t } = useWorld();
  return (
    <>
      <Meta title="Hello World" />
      <Hello>
        <Text weight={"bold"} align={"center"}>
          {t("hello")}
        </Text>
      </Hello>
    </>
  );
};

export default Home;
