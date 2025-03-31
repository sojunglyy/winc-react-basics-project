import { Center, Heading } from "@chakra-ui/react";
import { data } from "../utils/data";
import { TextInput } from "../components/ui/TextInput";
import { RecipeList } from "../components/RecipeList";
import { useState } from "react";

export const RecipeListPage = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const matchedRecipes = data.hits.filter((item) => {
    return item.recipe.label.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <Center flexDir="column" p={4} bgColor="blue.100">
      <Heading m={8} fontSize="40">
        Your Recipe App
      </Heading>
      <TextInput onChange={handleChange} />
      <RecipeList clickFn={clickFn} recipes={matchedRecipes} />
    </Center>
  );
};
