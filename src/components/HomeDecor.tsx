import { Button, Image, SimpleGrid, Stack, Title } from '@mantine/core';
import { IconShoppingCartPlus } from '@tabler/icons-react';
import { useParams } from 'react-router-dom';

import { data } from '../config/data';
import { useCart } from '../hooks/useCart';
import { AnimateIn } from './AnimateIn';

export function HomeDecor() {
  const { addToCart } = useCart();
  const { homeDecorId } = useParams();
  const homeDecor = data.homeDecors.find(homeDecor => homeDecor.id === Number(homeDecorId));

  if (!homeDecor) {
    return <div>Home Decor not found</div>;
  }

  return (
    <AnimateIn>
      <Stack>
        <SimpleGrid cols={2}>
          <Image src={homeDecor.image} alt={homeDecor.name} height={400} radius='md' className='hover-zoom' />
          <Stack>
            <Title order={2}>{homeDecor.name}</Title>
            <Title order={3}>{homeDecor.price}</Title>
            <div>{homeDecor.description}</div>
            <Button
              leftSection={<IconShoppingCartPlus size={14} />}
              onClick={() =>
                addToCart({
                  type: 'homeDecors',
                  id: homeDecor.id,
                })
              }
            >
              Add to cart
            </Button>
          </Stack>
        </SimpleGrid>
      </Stack>
    </AnimateIn>
  );
}
