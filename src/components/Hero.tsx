import { Box, Button, Image, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';

import heroImage from '../assets/svgs/hero.svg';

export function Hero() {
  return (
    <SimpleGrid cols={2}>
      <Stack mt={200}>
        <Title>Buy Art!</Title>
        <Title order={2}>A Haven for Art Enthusiasts</Title>
        <Text>
          Welcome to "Creative Spark", where creativity comes alive! Immerse yourself in a vibrant world of colors,
          forms, and expressions that celebrate the boundless beauty of art. Whether you’re a seasoned artist, an
          aspiring creator, or simply a lover of all things artistic, our space is designed to inspire and connect.
          Explore stunning galleries, discover unique techniques, and join a thriving community that shares your passion
          for self-expression. Let your imagination soar and make this your haven for artistic exploration!
        </Text>
        <div>
          <Button leftSection={<IconArrowRight size={14} />}>Shop Now</Button>
        </div>
      </Stack>
      <Box mt={100}>
        <Image src={heroImage} alt='creative spark' h={500} fit='contain' />
      </Box>
    </SimpleGrid>
  );
}