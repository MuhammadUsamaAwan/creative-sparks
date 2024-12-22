import { Button, Card, Group, Image, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { IconBriefcase } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import artist1 from '~/assets/images/artist1.jpg';
import artist2 from '~/assets/images/artist2.jpg';
import artist3 from '~/assets/images/artist3.jpg';
import artist4 from '~/assets/images/artist4.jpg';
import artist5 from '~/assets/images/artist5.jpg';
import artist6 from '~/assets/images/artist6.jpg';

export function Artists() {
  return (
    <Stack>
      <Title>Artists</Title>
      <SimpleGrid cols={4}>
        <Card shadow='sm' padding='lg' radius='md' withBorder>
          <Card.Section>
            <Image src={artist1} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={600}>Ahmed Raza</Text>
          </Group>
          <Group gap='xs'>
            <Text size='sm' fw={500}>
              Specialization:
            </Text>
            <Text size='sm' c='dimmed' fw={500}>
              Abstract Painting
            </Text>
          </Group>
          <Group gap='xs'>
            <Text size='sm' fw={500}>
              Art Pieces Sold:
            </Text>
            <Text size='sm' c='dimmed' fw={500}>
              120
            </Text>
          </Group>
          <Group gap='xs'>
            <Text size='sm' fw={500}>
              Event Charges (PKR):
            </Text>
            <Text size='sm' c='dimmed' fw={500}>
              250,000
            </Text>
          </Group>
          <Button
            color='blue'
            fullWidth
            mt='md'
            radius='md'
            component={Link}
            to='/hire'
            leftSection={<IconBriefcase size={14} />}
          >
            Hire
          </Button>
        </Card>

        <Card shadow='sm' padding='lg' radius='md' withBorder>
          <Card.Section>
            <Image src={artist2} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={600}>Ali Zafar</Text>
          </Group>
          <Group gap='xs'>
            <Text size='sm' fw={500}>
              Specialization:
            </Text>
            <Text size='sm' c='dimmed' fw={500}>
              Calligraphy
            </Text>
          </Group>
          <Group gap='xs'>
            <Text size='sm' fw={500}>
              Art Pieces Sold:
            </Text>
            <Text size='sm' c='dimmed' fw={500}>
              90
            </Text>
          </Group>
          <Group gap='xs'>
            <Text size='sm' fw={500}>
              Event Charges (PKR):
            </Text>
            <Text size='sm' c='dimmed' fw={500}>
              180,000
            </Text>
          </Group>
          <Button
            color='blue'
            fullWidth
            mt='md'
            radius='md'
            component={Link}
            to='/hire'
            leftSection={<IconBriefcase size={14} />}
          >
            Hire
          </Button>
        </Card>

        <Card shadow='sm' padding='lg' radius='md' withBorder>
          <Card.Section>
            <Image src={artist3} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={600}>Ayesha Khan</Text>
          </Group>
          <Group gap='xs'>
            <Text size='sm' fw={500}>
              Specialization:
            </Text>
            <Text size='sm' c='dimmed' fw={500}>
              Landscape Painting
            </Text>
          </Group>
          <Group gap='xs'>
            <Text size='sm' fw={500}>
              Art Pieces Sold:
            </Text>
            <Text size='sm' c='dimmed' fw={500}>
              140
            </Text>
          </Group>
          <Group gap='xs'>
            <Text size='sm' fw={500}>
              Event Charges (PKR):
            </Text>
            <Text size='sm' c='dimmed' fw={500}>
              200,000
            </Text>
          </Group>
          <Button
            color='blue'
            fullWidth
            mt='md'
            radius='md'
            component={Link}
            to='/hire'
            leftSection={<IconBriefcase size={14} />}
          >
            Hire
          </Button>
        </Card>

        <Card shadow='sm' padding='lg' radius='md' withBorder>
          <Card.Section>
            <Image src={artist4} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={600}>Hassan Javed</Text>
          </Group>
          <Group gap='xs'>
            <Text size='sm' fw={500}>
              Specialization:
            </Text>
            <Text size='sm' c='dimmed' fw={500}>
              Sculpting
            </Text>
          </Group>
          <Group gap='xs'>
            <Text size='sm' fw={500}>
              Art Pieces Sold:
            </Text>
            <Text size='sm' c='dimmed' fw={500}>
              50
            </Text>
          </Group>
          <Group gap='xs'>
            <Text size='sm' fw={500}>
              Event Charges (PKR):
            </Text>
            <Text size='sm' c='dimmed' fw={500}>
              300,000
            </Text>
          </Group>
          <Button
            color='blue'
            fullWidth
            mt='md'
            radius='md'
            component={Link}
            to='/hire'
            leftSection={<IconBriefcase size={14} />}
          >
            Hire
          </Button>
        </Card>

        <Card shadow='sm' padding='lg' radius='md' withBorder>
          <Card.Section>
            <Image src={artist5} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={600}>Fatima Naqvi</Text>
          </Group>
          <Group gap='xs'>
            <Text size='sm' fw={500}>
              Specialization:
            </Text>
            <Text size='sm' c='dimmed' fw={500}>
              Digital Art
            </Text>
          </Group>
          <Group gap='xs'>
            <Text size='sm' fw={500}>
              Art Pieces Sold:
            </Text>
            <Text size='sm' c='dimmed' fw={500}>
              80
            </Text>
          </Group>
          <Group gap='xs'>
            <Text size='sm' fw={500}>
              Event Charges (PKR):
            </Text>
            <Text size='sm' c='dimmed' fw={500}>
              220,000
            </Text>
          </Group>
          <Button
            color='blue'
            fullWidth
            mt='md'
            radius='md'
            component={Link}
            to='/hire'
            leftSection={<IconBriefcase size={14} />}
          >
            Hire
          </Button>
        </Card>

        <Card shadow='sm' padding='lg' radius='md' withBorder>
          <Card.Section>
            <Image src={artist6} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={600}>Sana Ahmed</Text>
          </Group>
          <Group gap='xs'>
            <Text size='sm' fw={500}>
              Specialization:
            </Text>
            <Text size='sm' c='dimmed' fw={500}>
              Portraiture
            </Text>
          </Group>
          <Group gap='xs'>
            <Text size='sm' fw={500}>
              Art Pieces Sold:
            </Text>
            <Text size='sm' c='dimmed' fw={500}>
              100
            </Text>
          </Group>
          <Group gap='xs'>
            <Text size='sm' fw={500}>
              Event Charges (PKR):
            </Text>
            <Text size='sm' c='dimmed' fw={500}>
              220,000
            </Text>
          </Group>
          <Button
            color='blue'
            fullWidth
            mt='md'
            radius='md'
            component={Link}
            to='/hire'
            leftSection={<IconBriefcase size={14} />}
          >
            Hire
          </Button>
        </Card>
      </SimpleGrid>
    </Stack>
  );
}
