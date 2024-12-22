import { Button, Card, Group, Image, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { IconShoppingCartPlus } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import artSupplies1 from '~/assets/images/art-supplies1.jpg';
import artSupplies2 from '~/assets/images/art-supplies2.jpg';
import artSupplies3 from '~/assets/images/art-supplies3.jpg';
import artSupplies4 from '~/assets/images/art-supplies4.jpg';
import artSupplies5 from '~/assets/images/art-supplies5.jpg';
import artSupplies6 from '~/assets/images/art-supplies6.jpg';
import artSupplies7 from '~/assets/images/art-supplies7.jpg';
import artSupplies8 from '~/assets/images/art-supplies8.jpg';
import artSupplies9 from '~/assets/images/art-supplies9.jpg';
import artSupplies10 from '~/assets/images/art-supplies10.jpg';

export function ArtSupplies() {
  return (
    <Stack>
      <Title>Art Supplies</Title>
      <SimpleGrid cols={4}>
        <Card shadow='sm' padding='lg' radius='md' withBorder>
          <Card.Section>
            <Image src={artSupplies1} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Castle on the Hill</Text>
            <Text fw={500}>46.99$</Text>
          </Group>
          <Text size='sm' c='dimmed'>
            A medieval-style castle perched atop a hill Stone walls and towers standing tall against the landscape Warm
            colors and intricate details evoke a sense of grandeur and history
          </Text>
          <Button
            color='blue'
            fullWidth
            mt='md'
            radius='md'
            component={Link}
            to='/buy'
            leftSection={<IconShoppingCartPlus size={14} />}
          >
            Buy
          </Button>
        </Card>

        <Card shadow='sm' padding='lg' radius='md' withBorder>
          <Card.Section>
            <Image src={artSupplies2} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Art Supplies</Text>
            <Text fw={500}>46.99$</Text>
          </Group>
          <Text size='sm' c='dimmed'>
            Unleash your inner artist with premium art supplies. From brushes to canvases, find everything you need to
            create your next masterpiece.
          </Text>
          <Button
            color='blue'
            fullWidth
            mt='md'
            radius='md'
            component={Link}
            to='/buy'
            leftSection={<IconShoppingCartPlus size={14} />}
          >
            Buy
          </Button>
        </Card>

        <Card shadow='sm' padding='lg' radius='md' withBorder>
          <Card.Section>
            <Image src={artSupplies3} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Art Supplies</Text>
            <Text fw={500}>46.99$</Text>
          </Group>
          <Text size='sm' c='dimmed'>
            Unleash your inner artist with premium art supplies. From brushes to canvases, find everything you need to
            create your next masterpiece.
          </Text>
          <Button
            color='blue'
            fullWidth
            mt='md'
            radius='md'
            component={Link}
            to='/buy'
            leftSection={<IconShoppingCartPlus size={14} />}
          >
            Buy
          </Button>
        </Card>

        <Card shadow='sm' padding='lg' radius='md' withBorder>
          <Card.Section>
            <Image src={artSupplies4} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Art Supplies</Text>
            <Text fw={500}>46.99$</Text>
          </Group>
          <Text size='sm' c='dimmed'>
            Unleash your inner artist with premium art supplies. From brushes to canvases, find everything you need to
            create your next masterpiece.
          </Text>
          <Button
            color='blue'
            fullWidth
            mt='md'
            radius='md'
            component={Link}
            to='/buy'
            leftSection={<IconShoppingCartPlus size={14} />}
          >
            Buy
          </Button>
        </Card>

        <Card shadow='sm' padding='lg' radius='md' withBorder>
          <Card.Section>
            <Image src={artSupplies5} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Art Supplies</Text>
            <Text fw={500}>46.99$</Text>
          </Group>
          <Text size='sm' c='dimmed'>
            Unleash your inner artist with premium art supplies. From brushes to canvases, find everything you need to
            create your next masterpiece.
          </Text>
          <Button
            color='blue'
            fullWidth
            mt='md'
            radius='md'
            component={Link}
            to='/buy'
            leftSection={<IconShoppingCartPlus size={14} />}
          >
            Buy
          </Button>
        </Card>

        <Card shadow='sm' padding='lg' radius='md' withBorder>
          <Card.Section>
            <Image src={artSupplies6} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Art Supplies</Text>
            <Text fw={500}>46.99$</Text>
          </Group>
          <Text size='sm' c='dimmed'>
            Unleash your inner artist with premium art supplies. From brushes to canvases, find everything you need to
            create your next masterpiece.
          </Text>
          <Button
            color='blue'
            fullWidth
            mt='md'
            radius='md'
            component={Link}
            to='/buy'
            leftSection={<IconShoppingCartPlus size={14} />}
          >
            Buy
          </Button>
        </Card>

        <Card shadow='sm' padding='lg' radius='md' withBorder>
          <Card.Section>
            <Image src={artSupplies7} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Art Supplies</Text>
            <Text fw={500}>46.99$</Text>
          </Group>
          <Text size='sm' c='dimmed'>
            Unleash your inner artist with premium art supplies. From brushes to canvases, find everything you need to
            create your next masterpiece.
          </Text>
          <Button
            color='blue'
            fullWidth
            mt='md'
            radius='md'
            component={Link}
            to='/buy'
            leftSection={<IconShoppingCartPlus size={14} />}
          >
            Buy
          </Button>
        </Card>

        <Card shadow='sm' padding='lg' radius='md' withBorder>
          <Card.Section>
            <Image src={artSupplies8} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Art Supplies</Text>
            <Text fw={500}>46.99$</Text>
          </Group>
          <Text size='sm' c='dimmed'>
            Unleash your inner artist with premium art supplies. From brushes to canvases, find everything you need to
            create your next masterpiece.
          </Text>
          <Button
            color='blue'
            fullWidth
            mt='md'
            radius='md'
            component={Link}
            to='/buy'
            leftSection={<IconShoppingCartPlus size={14} />}
          >
            Buy
          </Button>
        </Card>

        <Card shadow='sm' padding='lg' radius='md' withBorder>
          <Card.Section>
            <Image src={artSupplies9} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Art Supplies</Text>
            <Text fw={500}>46.99$</Text>
          </Group>
          <Text size='sm' c='dimmed'>
            Unleash your inner artist with premium art supplies. From brushes to canvases, find everything you need to
            create your next masterpiece.
          </Text>
          <Button
            color='blue'
            fullWidth
            mt='md'
            radius='md'
            component={Link}
            to='/buy'
            leftSection={<IconShoppingCartPlus size={14} />}
          >
            Buy
          </Button>
        </Card>

        <Card shadow='sm' padding='lg' radius='md' withBorder>
          <Card.Section>
            <Image src={artSupplies10} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Art Supplies</Text>
            <Text fw={500}>46.99$</Text>
          </Group>
          <Text size='sm' c='dimmed'>
            Unleash your inner artist with premium art supplies. From brushes to canvases, find everything you need to
            create your next masterpiece.
          </Text>
          <Button
            color='blue'
            fullWidth
            mt='md'
            radius='md'
            component={Link}
            to='/buy'
            leftSection={<IconShoppingCartPlus size={14} />}
          >
            Buy
          </Button>
        </Card>
      </SimpleGrid>
    </Stack>
  );
}
