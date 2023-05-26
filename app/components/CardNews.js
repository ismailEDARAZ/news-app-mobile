import React from 'react'
import { Box, Center, AspectRatio, Image, Heading, Stack, Text, HStack, Pressable, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';

export default function CardNews({item}) {
  const navigation = useNavigation();
  const urlImage = item.image_url ? item.image_url : "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg";
  //console.log(item)
  return (
      <Box alignItems="center" marginBottom={10}>
        <Box rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{borderColor: "coolGray.600",backgroundColor: "gray.700"}} _web={{shadow: 2,borderWidth: 0}} _light={{backgroundColor: "gray.50"}}>
          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image source={{ uri: urlImage}} alt="image" />
            </AspectRatio>
            <Center bg="violet.500" _dark={{bg: "violet.400"}} _text={{color: "warmGray.50",fontWeight: "700",fontSize: "xs"}} position="absolute" bottom="0" px="3" py="1.5">
              {item.category.map((cat)=> (cat))}
            </Center>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                {item.title}
              </Heading>
              <Text fontSize="xs" _light={{color: "violet.500"}} _dark={{color: "violet.400"}} fontWeight="500" ml="-0.5" mt="-1">
                {item.description}
              </Text>
            </Stack>
            <HStack alignItems="center" space={4} justifyContent="space-between">
              <HStack alignItems="center">
                <Text color="coolGray.600" _dark={{color: "warmGray.200"}} fontWeight="400">
                  {item.pubDate}
                </Text>
              </HStack>
            </HStack>

            <HStack alignItems="center" space={4} justifyContent="space-between">
              <HStack alignItems="center">
              <Button onPress={() => navigation.navigate("Detail", {item: item})}>Voir</Button>
              </HStack>
            </HStack>
          </Stack>
        </Box>
      </Box>
  )
}