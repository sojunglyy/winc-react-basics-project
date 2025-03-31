import {
  Center,
  Card,
  Box,
  CardBody,
  Image,
  Button,
  Flex,
  Text,
  Heading,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Tag } from "../components/ui/Tag";

export const RecipePage = ({ selectedRecipe, clickFn }) => {
  const recipe = selectedRecipe.recipe;
  return (
    <Center h="100%" bgColor="blue.100">
      <Card bgColor="white" w={900} h="90%" m={3}>
        <Box h="3rem" alignContent="center">
          <Button
            size="sm"
            w="fit-content"
            onClick={() => clickFn()}
            variant="ghost"
            m={1}
          >
            back
          </Button>
        </Box>
        <Box overflow="hidden" maxH="60">
          <Image src={recipe.image} minW="100%"></Image>
        </Box>
        <CardBody>
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
            gap="6"
          >
            <GridItem>
              <Tag
                text={recipe.mealType}
                color={"gray.500"}
                variant={"outline"}
              />
              <Heading mt={2} mb={5}>
                {recipe.label}
              </Heading>
              <Text>Dish type: {recipe.dishType}</Text>
              <Text>Total cooking time: {recipe.totalTime} Minutes</Text>
              <Text>Servings: {recipe.yield}</Text>
              <Text fontWeight="semibold" mt={5} mb={2}>
                Ingredients
              </Text>
              {recipe.ingredientLines.map((ingredient) => (
                <Text key={ingredient}>{ingredient}</Text>
              ))}
            </GridItem>
            <GridItem>
              <Box mb={3}>
                <Text mb={2}>Health Labels:</Text>
                {recipe.healthLabels.map((label) => (
                  <Tag
                    text={label}
                    color={"purple.700"}
                    variant={"subtle"}
                    key={label}
                  />
                ))}
              </Box>
              <Box mb={3}>
                <Text mb={2}>Diet Labels:</Text>
                {recipe.dietLabels.map((label) => (
                  <Tag
                    text={label}
                    color={"green.400"}
                    variant={"subtle"}
                    key={label}
                  />
                ))}
              </Box>
              <Box mb={3}>
                <Text mb={2}>Cautions:</Text>
                {recipe.cautions.map((label) => (
                  <Tag
                    text={label}
                    color={"red.400"}
                    variant={"subtle"}
                    key={label}
                  />
                ))}
              </Box>
              <Box mb={3}>
                <Text fontWeight="semibold" mb={2}>
                  Total nutrients:
                </Text>
                <Flex direction="row" wrap="wrap" gap={5}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    {Number(recipe.totalNutrients.ENERC_KCAL.quantity).toFixed(
                      2
                    )}{" "}
                    {recipe.totalNutrients.ENERC_KCAL.unit}
                    <Text fontSize="sm" textTransform="uppercase">
                      calories
                    </Text>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    {Number(recipe.totalNutrients.PROCNT.quantity).toFixed(2)}{" "}
                    {recipe.totalNutrients.PROCNT.unit}
                    <Text fontSize="sm" textTransform="uppercase">
                      {recipe.totalNutrients.PROCNT.label}
                    </Text>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    {Number(recipe.totalNutrients.FAT.quantity).toFixed(2)}{" "}
                    {recipe.totalNutrients.FAT.unit}
                    <Text fontSize="sm" textTransform="uppercase">
                      {recipe.totalNutrients.FAT.label}
                    </Text>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    {Number(recipe.totalNutrients.CHOCDF.quantity).toFixed(2)}{" "}
                    {recipe.totalNutrients.CHOCDF.unit}
                    <Text fontSize="sm" textTransform="uppercase">
                      {recipe.totalNutrients.CHOCDF.label}
                    </Text>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    {Number(recipe.totalNutrients.CHOLE.quantity).toFixed(2)}{" "}
                    {recipe.totalNutrients.CHOLE.unit}
                    <Text fontSize="sm" textTransform="uppercase">
                      {recipe.totalNutrients.CHOLE.label}
                    </Text>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    {Number(recipe.totalNutrients.NA.quantity).toFixed(2)}{" "}
                    {recipe.totalNutrients.NA.unit}
                    <Text fontSize="sm" textTransform="uppercase">
                      {recipe.totalNutrients.NA.label}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </GridItem>
          </Grid>
        </CardBody>
      </Card>
    </Center>
  );
};
