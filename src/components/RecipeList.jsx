import { Flex } from "@chakra-ui/react";
import { RecipeCard } from "./ui/RecipeCard";

export const RecipeList = ({ clickFn, recipes }) => {
  return (
    <Flex
      gap="6"
      display="flex"
      direction="row"
      wrap="wrap"
      mt={6}
      justifyContent="space-around"
    >
      {recipes.map((item) => (
        <RecipeCard clickFn={clickFn} recipe={item} key={item.recipe.label} />
      ))}
    </Flex>
  );
};
