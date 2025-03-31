import { Input } from "@chakra-ui/react";

export const TextInput = ({ onChange, ...props }) => (
  <Input
    variant="outline"
    onChange={onChange}
    {...props}
    m={4}
    css={{ "--focus-color": "lime" }}
    w={{ sm: "100%", lg: "50%" }}
  />
);
