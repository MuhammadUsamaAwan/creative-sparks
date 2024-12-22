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
            <Text fw={500}>Print 1</Text>
            <Text fw={500}>1,250 PKR</Text>
          </Group>
          <Text size='sm' c='dimmed' mb='md'>
            Explore stunning art prints that blend affordability with beauty. Choose from a variety of styles to add
            character and charm to any room.
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
            <Image src={print2} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Print 2</Text>
            <Text fw={500}>3,500 PKR</Text>
          </Group>
          <Text size='sm' c='dimmed' mb='md'>
            Explore stunning art prints that blend affordability with beauty. Choose from a variety of styles to add
            character and charm to any room.
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
            <Image src={print3} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Print 3</Text>
            <Text fw={500}>7,800 PKR</Text>
          </Group>
          <Text size='sm' c='dimmed' mb='md'>
            Explore stunning art prints that blend affordability with beauty. Choose from a variety of styles to add
            character and charm to any room.
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
            <Image src={print4} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Print 4</Text>
            <Text fw={500}>15,000 PKR</Text>
          </Group>
          <Text size='sm' c='dimmed' mb='md'>
            Explore stunning art prints that blend affordability with beauty. Choose from a variety of styles to add
            character and charm to any room.
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
            <Image src={print5} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Print 5</Text>
            <Text fw={500}>6,750 PKR</Text>
          </Group>
          <Text size='sm' c='dimmed' mb='md'>
            Explore stunning art prints that blend affordability with beauty. Choose from a variety of styles to add
            character and charm to any room.
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
            <Image src={print6} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Print 6</Text>
            <Text fw={500}>4,200 PKR</Text>
          </Group>
          <Text size='sm' c='dimmed' mb='md'>
            Explore stunning art prints that blend affordability with beauty. Choose from a variety of styles to add
            character and charm to any room.
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
            <Image src={print7} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Print 7</Text>
            <Text fw={500}>800 PKR</Text>
          </Group>
          <Text size='sm' c='dimmed' mb='md'>
            Explore stunning art prints that blend affordability with beauty. Choose from a variety of styles to add
            character and charm to any room.
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
            <Image src={print8} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Print 8</Text>
            <Text fw={500}>10,400 PKR</Text>
          </Group>
          <Text size='sm' c='dimmed' mb='md'>
            Explore stunning art prints that blend affordability with beauty. Choose from a variety of styles to add
            character and charm to any room.
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
            <Image src={print9} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Print 9</Text>
            <Text fw={500}>5,999 PKR</Text>
          </Group>
          <Text size='sm' c='dimmed' mb='md'>
            Explore stunning art prints that blend affordability with beauty. Choose from a variety of styles to add
            character and charm to any room.
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
            <Image src={print10} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Print 10</Text>
            <Text fw={500}>2,650 PKR</Text>
          </Group>
          <Text size='sm' c='dimmed' mb='md'>
            Explore stunning art prints that blend affordability with beauty. Choose from a variety of styles to add
            character and charm to any room.
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
