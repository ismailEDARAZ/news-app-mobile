import React from 'react'
import { Box, Center, AspectRatio, Image, Heading, Stack, Text, HStack, ScrollView, View } from 'native-base';

export default function NewsDetailsPage({ route, navigation }) {
  const { item } = route.params;
  const urlImage = item.image_url ? item.image_url : "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg";
  console.log('Detail', item)
  return (
    <ScrollView margin={3}>
      <View>
        <AspectRatio w="100%" ratio={16 / 9} marginBottom={8}>
          <Image source={{ uri: urlImage}} alt="image" borderRadius={5} />
        </AspectRatio>

        <View display='flex' flexDirection='row' justifyContent="space-between">
          <Text fontSize={18}> {item.category.map((cat)=> (cat))}</Text>
          <Text> {item.pubDate}</Text>
        </View>

        <Heading size="md" ml="-1" marginTop={5}>{item.title}</Heading>

        <Text marginTop={5} marginBottom={10}> {item.content}</Text>

      </View>
    </ScrollView>
  )
}