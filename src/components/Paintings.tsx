import { Button, Card, Group, Image, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { IconShoppingCartPlus } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import painting1 from '~/assets/images/painting1.jpg';
import painting2 from '~/assets/images/painting2.jpg';
import painting3 from '~/assets/images/painting3.jpg';
import painting4 from '~/assets/images/painting4.jpg';
import painting5 from '~/assets/images/painting5.jpg';
import painting6 from '~/assets/images/painting6.jpg';
import painting7 from '~/assets/images/painting7.jpg';
import painting8 from '~/assets/images/painting8.jpg';
import painting9 from '~/assets/images/painting9.jpg';
import painting10 from '~/assets/images/painting10.jpg';

export function Paintings() {
  return (
    <Stack>
      <Title>Paintings</Title>
      <SimpleGrid cols={4}>
        <Card shadow='sm' padding='lg' radius='md' withBorder>
          <Card.Section>
            <Image src={painting1} height={160} alt='' />
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
            <Image src={painting2} height={160} alt='' />
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
            <Image src={painting3} height={160} alt='' />
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
            <Image src={painting4} height={160} alt='' />
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
            <Image src={painting5} height={160} alt='' />
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
            <Image src={painting6} height={160} alt='' />
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
            <Image src={painting7} height={160} alt='' />
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
            <Image src={painting8} height={160} alt='' />
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
            <Image src={painting9} height={160} alt='' />
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
            <Image src={painting10} height={160} alt='' />
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
