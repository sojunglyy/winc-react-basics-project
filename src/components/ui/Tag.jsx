import { Text, Tag as CTag } from "@chakra-ui/react";

export const Tag = ({ text, color, variant }) => {
  return (
    <CTag
      size="sm"
      variant={variant}
      color={color}
      textTransform="uppercase"
      m={1}
    >
      <Text fontSize="xs">{text}</Text>
    </CTag>
  );
};
