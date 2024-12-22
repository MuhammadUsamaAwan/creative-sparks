import { Button, Card, Group, Image, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { IconShoppingCartPlus } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import print1 from '~/assets/images/print1.jpg';
import print2 from '~/assets/images/print2.jpg';
import print3 from '~/assets/images/print3.jpg';
import print4 from '~/assets/images/print4.jpg';
import print5 from '~/assets/images/print5.jpg';
import print6 from '~/assets/images/print6.jpg';
import print7 from '~/assets/images/print7.jpg';
import print8 from '~/assets/images/print8.jpg';
import print9 from '~/assets/images/print9.jpg';
import print10 from '~/assets/images/print10.jpg';

export function Prints() {
  return (
    <Stack>
      <Title>Prints</Title>
      <SimpleGrid cols={4}>
        <Card shadow='sm' padding='lg' radius='md' withBorder>
          <Card.Section>
            <Image src={print1} height={160} alt='' />
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
            <Image src={print2} height={160} alt='' />
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
            <Image src={print3} height={160} alt='' />
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
            <Image src={print4} height={160} alt='' />
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
            <Image src={print5} height={160} alt='' />
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
            <Image src={print6} height={160} alt='' />
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
            <Image src={print7} height={160} alt='' />
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
            <Image src={print8} height={160} alt='' />
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
            <Image src={print9} height={160} alt='' />
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
            <Image src={print10} height={160} alt='' />
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
