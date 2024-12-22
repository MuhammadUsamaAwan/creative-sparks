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
            <Text fw={500}>Home Decor 1</Text>
            <Text fw={500}>1,950 PKR</Text>
          </Group>
          <Text size='sm' c='dimmed' mb='md'>
            Elevate your interiors with our curated home decor collection. Unique, artistic accents to transform your
            house into a gallery-worthy space.
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

        <Card shadow='sm' padding='lg' radius='md' withBorder>
          <Card.Section>
            <Image src={homeDecor2} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Home Decor 2</Text>
            <Text fw={500}>8,500 PKR</Text>
          </Group>
          <Text size='sm' c='dimmed' mb='md'>
            Elevate your interiors with our curated home decor collection. Unique, artistic accents to transform your
            house into a gallery-worthy space.
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

        <Card shadow='sm' padding='lg' radius='md' withBorder>
          <Card.Section>
            <Image src={homeDecor3} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Home Decor 3</Text>
            <Text fw={500}>3,200 PKR</Text>
          </Group>
          <Text size='sm' c='dimmed' mb='md'>
            Elevate your interiors with our curated home decor collection. Unique, artistic accents to transform your
            house into a gallery-worthy space.
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

        <Card shadow='sm' padding='lg' radius='md' withBorder>
          <Card.Section>
            <Image src={homeDecor4} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Home Decor 4</Text>
            <Text fw={500}>12,750 PKR</Text>
          </Group>
          <Text size='sm' c='dimmed' mb='md'>
            Elevate your interiors with our curated home decor collection. Unique, artistic accents to transform your
            house into a gallery-worthy space.
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

        <Card shadow='sm' padding='lg' radius='md' withBorder>
          <Card.Section>
            <Image src={homeDecor5} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Home Decor 5</Text>
            <Text fw={500}>6,450 PKR</Text>
          </Group>
          <Text size='sm' c='dimmed' mb='md'>
            Elevate your interiors with our curated home decor collection. Unique, artistic accents to transform your
            house into a gallery-worthy space.
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

        <Card shadow='sm' padding='lg' radius='md' withBorder>
          <Card.Section>
            <Image src={homeDecor6} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Home Decor 6</Text>
            <Text fw={500}>5,100 PKR</Text>
          </Group>
          <Text size='sm' c='dimmed' mb='md'>
            Elevate your interiors with our curated home decor collection. Unique, artistic accents to transform your
            house into a gallery-worthy space.
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

        <Card shadow='sm' padding='lg' radius='md' withBorder>
          <Card.Section>
            <Image src={homeDecor7} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Home Decor 7</Text>
            <Text fw={500}>2,300 PKR</Text>
          </Group>
          <Text size='sm' c='dimmed' mb='md'>
            Elevate your interiors with our curated home decor collection. Unique, artistic accents to transform your
            house into a gallery-worthy space.
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

        <Card shadow='sm' padding='lg' radius='md' withBorder>
          <Card.Section>
            <Image src={homeDecor8} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Home Decor 8</Text>
            <Text fw={500}>9,800 PKR</Text>
          </Group>
          <Text size='sm' c='dimmed' mb='md'>
            Elevate your interiors with our curated home decor collection. Unique, artistic accents to transform your
            house into a gallery-worthy space.
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

        <Card shadow='sm' padding='lg' radius='md' withBorder>
          <Card.Section>
            <Image src={homeDecor9} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Home Decor 9</Text>
            <Text fw={500}>4,600 PKR</Text>
          </Group>
          <Text size='sm' c='dimmed' mb='md'>
            Elevate your interiors with our curated home decor collection. Unique, artistic accents to transform your
            house into a gallery-worthy space.
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

        <Card shadow='sm' padding='lg' radius='md' withBorder>
          <Card.Section>
            <Image src={homeDecor10} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Home Decor 10</Text>
            <Text fw={500}>14,200 PKR</Text>
          </Group>
          <Text size='sm' c='dimmed' mb='md'>
            Elevate your interiors with our curated home decor collection. Unique, artistic accents to transform your
            house into a gallery-worthy space.
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
      </SimpleGrid>
    </Stack>
  );
}
