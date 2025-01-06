import { Button, Image, SimpleGrid, Stack, Title } from '@mantine/core';
import { IconShoppingCartPlus } from '@tabler/icons-react';
import { useParams } from 'react-router-dom';

import { data } from '../config/data';
import { useCart } from '../hooks/useCart';
import { AnimateIn } from './AnimateIn';

export function ArtSupply() {
  const { addToCart } = useCart();
  const { artSupplyId } = useParams();
  const artSupply = data.artSupplies.find(artSupply => artSupply.id === Number(artSupplyId));

  if (!artSupply) {
    return <div>ArtSupply not found</div>;
  }

  return (
    <AnimateIn>
      <Stack>
        <SimpleGrid cols={2}>
          <Image src={artSupply.image} alt={artSupply.name} height={400} radius='md' className='hover-zoom' />
          <Stack>
            <Title order={2}>{artSupply.name}</Title>
            <Title order={3}>{artSupply.price}</Title>
            <div>{artSupply.description}</div>
            <Button
              leftSection={<IconShoppingCartPlus size={14} />}
              onClick={() =>
                addToCart({
                  type: 'artSupplies',
                  id: artSupply.id,
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
