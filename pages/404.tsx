import { Hello } from "../components/Hello";
import { Text } from "../components/primitives/Text";

const E404 = () => {
  return (
    <Hello>
      <Text weight={"bold"} align={"center"}>
        404
      </Text>
    </Hello>
  );
};

export default E404;
