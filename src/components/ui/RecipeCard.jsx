import {
  Flex,
  Card,
  CardBody,
  Image,
  Box,
  Text,
  Heading,
} from "@chakra-ui/react";
import { Tag } from "./Tag";

export const RecipeCard = ({ recipe, clickFn }) => {
  const filteredHealthLabels = (labels) => {
    const veganLabels = labels.filter((label) => label.includes("Vegan"));
    const vegetarianLabels = labels.filter((label) =>
      label.includes("Vegetarian")
    );
    return veganLabels.concat(vegetarianLabels);
  };

  return (
    <Card
      w="sm"
      bgColor="white"
      borderRadius="xl"
      cursor="pointer"
      overflow="hidden"
      onClick={() => clickFn(recipe)}
    >
      <Box
        maxH="60"
        overflow="hidden"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image src={recipe.recipe.image} w="100%" />
      </Box>

      <CardBody display="flex" flexDir="column" alignItems="center" gap="1">
        <Tag
          text={recipe.recipe.mealType}
          color={"gray.500"}
          variant={"outline"}
        />
        <Heading fontSize="2rem" textAlign="center" m={3}>
          {recipe.recipe.label}
        </Heading>
        <Flex direction="row">
          {filteredHealthLabels(recipe.recipe.healthLabels).map((label) => (
            <Tag
              text={label}
              color={"purple.700"}
              variant={"subtle"}
              key={label}
            />
          ))}
        </Flex>
        <Flex direction="row">
          {recipe.recipe.dietLabels.map((label) => (
            <Tag
              text={label}
              color={"green.400"}
              variant={"subtle"}
              key={label}
            />
          ))}
        </Flex>
        <Text>Dish: {recipe.recipe.dishType}</Text>
        <Text>Cautions:</Text>
        <Flex direction="row" wrap="wrap" justifyContent="center">
          {recipe.recipe.cautions.map((label) => (
            <Tag
              text={label}
              color={"red.400"}
              variant={"subtle"}
              key={label}
            />
          ))}
        </Flex>
      </CardBody>
    </Card>
  );
};
