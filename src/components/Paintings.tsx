import { Button, Card, Group, Image, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { IconShoppingCartPlus } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import { data } from '../config/data';

export function Paintings() {
  return (
    <Stack>
      <Title>Paintings</Title>
      <SimpleGrid cols={4}>
        {data.paintings.map(painting => (
          <Card key={painting.name} shadow='sm' padding='lg' radius='md' withBorder className='hover-zoom'>
            <Card.Section>
              <Image src={painting.image} height={160} alt='' />
            </Card.Section>
            <Group justify='space-between' mt='md' mb='xs'>
              <Text fw={500}>{painting.name}</Text>
              <Text fw={500}>{painting.price}</Text>
            </Group>
            <Text size='sm' c='dimmed' mb='md'>
              {painting.description}
            </Text>
            <Button
              color='blue'
              fullWidth
              mt='auto'
              radius='md'
              component={Link}
              to='/buy'
              leftSection={<IconShoppingCartPlus size={14} />}
            >
              Buy
            </Button>
          </Card>
        ))}
      </SimpleGrid>
    </Stack>
  );
}
