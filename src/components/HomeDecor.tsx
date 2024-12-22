import { Button, Card, Group, Image, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { IconShoppingCartPlus } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import homeDecor1 from '~/assets/images/home-decor1.jpg';
import homeDecor2 from '~/assets/images/home-decor2.jpg';
import homeDecor3 from '~/assets/images/home-decor3.jpg';
import homeDecor4 from '~/assets/images/home-decor4.jpg';
import homeDecor5 from '~/assets/images/home-decor5.jpg';
import homeDecor6 from '~/assets/images/home-decor6.jpg';
import homeDecor7 from '~/assets/images/home-decor7.jpg';
import homeDecor8 from '~/assets/images/home-decor8.jpg';
import homeDecor9 from '~/assets/images/home-decor9.jpg';
import homeDecor10 from '~/assets/images/home-decor10.jpg';

export function HomeDecor() {
  return (
    <Stack>
      <Title>Home Decor</Title>
      <SimpleGrid cols={4}>
        <Card shadow='sm' padding='lg' radius='md' withBorder>
          <Card.Section>
            <Image src={homeDecor1} height={160} alt='' />
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
            <Image src={homeDecor2} height={160} alt='' />
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
            <Image src={homeDecor3} height={160} alt='' />
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
            <Image src={homeDecor4} height={160} alt='' />
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
            <Image src={homeDecor5} height={160} alt='' />
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
            <Image src={homeDecor6} height={160} alt='' />
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
            <Image src={homeDecor7} height={160} alt='' />
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
            <Image src={homeDecor8} height={160} alt='' />
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
            <Image src={homeDecor9} height={160} alt='' />
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
            <Image src={homeDecor10} height={160} alt='' />
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
