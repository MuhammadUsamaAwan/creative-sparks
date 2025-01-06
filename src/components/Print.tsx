import { Button, Image, SimpleGrid, Stack, Title } from '@mantine/core';
import { IconShoppingCartPlus } from '@tabler/icons-react';
import { useParams } from 'react-router-dom';

import { data } from '../config/data';
import { useCart } from '../hooks/useCart';
import { AnimateIn } from './AnimateIn';

export function Print() {
  const { addToCart } = useCart();
  const { printId } = useParams();
  const print = data.prints.find(print => print.id === Number(printId));

  if (!print) {
    return <div>Print not found</div>;
  }

  return (
    <AnimateIn>
      <Stack>
        <SimpleGrid cols={2}>
          <Image src={print.image} alt={print.name} height={400} radius='md' className='hover-zoom' />
          <Stack>
            <Title order={2}>{print.name}</Title>
            <Title order={3}>{print.price}</Title>
            <div>{print.description}</div>
            <Button
              leftSection={<IconShoppingCartPlus size={14} />}
              onClick={() =>
                addToCart({
                  type: 'prints',
                  id: print.id,
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
