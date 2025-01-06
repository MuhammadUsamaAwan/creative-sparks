import { Button, Card, Group, Image, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { IconEye } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import { data } from '../config/data';
import { AnimateIn } from './AnimateIn';

export function ArtSupplies() {
  return (
    <AnimateIn>
      <Stack>
        <Title>Art Supplies</Title>
        <SimpleGrid cols={4}>
          {data.artSupplies.map(artSupply => (
            <Card key={artSupply.name} shadow='sm' padding='lg' radius='md' withBorder className='hover-zoom'>
              <Card.Section>
                <Image src={artSupply.image} height={160} alt='' />
              </Card.Section>
              <Group justify='space-between' mt='md' mb='xs'>
                <Text fw={500}>{artSupply.name}</Text>
                <Text fw={500}>{artSupply.price}</Text>
              </Group>
              <Text size='sm' c='dimmed' mb='md'>
                {artSupply.description}
              </Text>
              <Button
                color='blue'
                fullWidth
                mt='auto'
                radius='md'
                component={Link}
                to={`/art-supplies/${artSupply.id}`}
                leftSection={<IconEye size={14} />}
              >
                View
              </Button>
            </Card>
          ))}
        </SimpleGrid>
      </Stack>
    </AnimateIn>
  );
}
