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
            <Text fw={500}>13,500 PKR</Text>
          </Group>
          <Text size='sm' c='dimmed' mb='md'>
            A medieval-style castle perched atop a hill Stone walls and towers standing tall against the landscape. Warm
            colors and intricate details.
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
            <Image src={painting2} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Landscape with Trees and Water</Text>
            <Text fw={500}>14,000 PKR</Text>
          </Group>
          <Text size='sm' c='dimmed' mb='md'>
            A tranquil landscape painting featuring trees and a body of water, characterized by soft lighting and subtle
            shadows that evoke a sense of serenity.
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
            <Image src={painting3} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Mountain Landscape</Text>
            <Text fw={500}>17,500 PKR</Text>
          </Group>
          <Text size='sm' c='dimmed' mb='md'>
            Mountain landscape with snow-capped peaks and lush greenery, evoking a sense of tranquility and awe.
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
            <Image src={painting4} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Mountain Serenity</Text>
            <Text fw={500}>16,000 PKR</Text>
          </Group>
          <Text size='sm' c='dimmed' mb='md'>
            This captivating landscape painting captures the beauty of nature, with its towering mountains and vibrant
            foliage evoking a sense of awe and wonder.
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
            <Image src={painting5} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Summit Tranquility</Text>
            <Text fw={500}>12,000 PKR</Text>
          </Group>
          <Text size='sm' c='dimmed' mb='md'>
            A tranquil mountainous landscape with lush greenery and a calm body of water, evoking feelings of serenity
            and connection to nature.
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
            <Image src={painting6} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Abstract Art</Text>
            <Text fw={500}>11,500 PKR</Text>
          </Group>
          <Text size='sm' c='dimmed' mb='md'>
            The painting features soft pastel hues in shades of pink, blue, and purple, creating a dreamy and ethereal
            atmosphere.
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
            <Image src={painting7} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Sheep Grazing in the Countryside</Text>
            <Text fw={500}>14,500 PKR</Text>
          </Group>
          <Text size='sm' c='dimmed' mb='md'>
            A tranquil countryside scene with sheep grazing peacefully amidst lush greenery and rolling hills.
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
            <Image src={painting8} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Mystic Stones</Text>
            <Text fw={500}>12,800 PKR</Text>
          </Group>
          <Text size='sm' c='dimmed' mb='md'>
            The artist's use of muted colors and soft brushstrokes adds to the mystical atmosphere, inviting viewers to
            ponder the secrets hidden within.
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
            <Image src={painting9} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>The Battle of Grunwald</Text>
            <Text fw={500}>15,000 PKR</Text>
          </Group>
          <Text size='sm' c='dimmed' mb='md'>
            Depicts a pivotal moment in history where two armies clash on the battlefield. The artwork captures the
            intensity and chaos of war.
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
            <Image src={painting10} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>Santorini</Text>
            <Text fw={500}>13,500 PKR</Text>
          </Group>
          <Text size='sm' c='dimmed' mb='md'>
            Depiction of the Greek island's landscape, characterized by its iconic whitewashed houses and blue-domed
            churches
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
