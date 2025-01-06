import { Button, Image, SimpleGrid, Stack, Title } from '@mantine/core';
import { IconShoppingCartPlus } from '@tabler/icons-react';
import { useParams } from 'react-router-dom';

import { data } from '../config/data';
import { useCart } from '../hooks/useCart';
import { AnimateIn } from './AnimateIn';

export function Painting() {
  const { addToCart } = useCart();
  const { paintingId } = useParams();
  const painting = data.paintings.find(painting => painting.id === Number(paintingId));

  if (!painting) {
    return <div>Painting not found</div>;
  }

  return (
    <AnimateIn>
      <Stack>
        <SimpleGrid cols={2}>
          <Image src={painting.image} alt={painting.name} height={400} radius='md' className='hover-zoom' />
          <Stack>
            <Title order={2}>{painting.name}</Title>
            <Title order={3}>{painting.price}</Title>
            <div>{painting.description}</div>
            <Button
              leftSection={<IconShoppingCartPlus size={14} />}
              onClick={() =>
                addToCart({
                  type: 'paintings',
                  id: painting.id,
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
