import { Button, Card, Group, Image, SimpleGrid, Space, Stack, Text, Title } from '@mantine/core';
import { IconUsersPlus } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import exhibition1 from '~/assets/images/exhibition1.jpg';
import exhibition2 from '~/assets/images/exhibition2.jpg';
import exhibition3 from '~/assets/images/exhibition3.jpg';
import exhibition4 from '~/assets/images/exhibition4.jpg';
import exhibition5 from '~/assets/images/exhibition5.jpg';
import exhibition6 from '~/assets/images/exhibition6.jpg';

export function ExhibitionSchedule() {
  return (
    <Stack>
      <Title>Exhibition Schedule</Title>
      <SimpleGrid cols={4}>
        <Card shadow='sm' padding='lg' radius='md' withBorder>
          <Card.Section>
            <Image src={exhibition1} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={600}>Color Stories</Text>
          </Group>
          <Group gap='xs'>
            <Text size='sm' fw={500}>
              Date:
            </Text>
            <Text size='sm' c='dimmed' fw={500}>
              December 10, 2024
            </Text>
          </Group>
          <Group gap='xs'>
            <Text size='sm' fw={500}>
              Timings:
            </Text>
            <Text size='sm' c='dimmed' fw={500}>
              10:00 AM - 5:00 PM
            </Text>
          </Group>
          <Group gap='xs'>
            <Text size='sm' fw={500}>
              Location:
            </Text>
            <Text size='sm' c='dimmed' fw={500}>
              The Abassi Art Gallery, Rawalpindi
            </Text>
          </Group>
          <Space mt='md' />
          <Button
            color='blue'
            fullWidth
            mt='auto'
            radius='md'
            component={Link}
            to='/join-exhibition'
            leftSection={<IconUsersPlus size={14} />}
          >
            Join
          </Button>
        </Card>

        <Card shadow='sm' padding='lg' radius='md' withBorder>
          <Card.Section>
            <Image src={exhibition2} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={600}>Beyond the Canvas</Text>
          </Group>
          <Group gap='xs'>
            <Text size='sm' fw={500}>
              Date:
            </Text>
            <Text size='sm' c='dimmed' fw={500}>
              February 1, 2025
            </Text>
          </Group>
          <Group gap='xs'>
            <Text size='sm' fw={500}>
              Timings:
            </Text>
            <Text size='sm' c='dimmed' fw={500}>
              11:00 AM - 6:00 PM
            </Text>
          </Group>
          <Group gap='xs'>
            <Text size='sm' fw={500}>
              Location:
            </Text>
            <Text size='sm' c='dimmed' fw={500}>
              Canvas Gallery, Lahore
            </Text>
          </Group>
          <Space mt='md' />
          <Button
            color='blue'
            fullWidth
            mt='auto'
            radius='md'
            component={Link}
            to='/join-exhibition'
            leftSection={<IconUsersPlus size={14} />}
          >
            Join
          </Button>
        </Card>

        <Card shadow='sm' padding='lg' radius='md' withBorder>
          <Card.Section>
            <Image src={exhibition3} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={600}>In Plain Sight</Text>
          </Group>
          <Group gap='xs'>
            <Text size='sm' fw={500}>
              Date:
            </Text>
            <Text size='sm' c='dimmed' fw={500}>
              March 15, 2025
            </Text>
          </Group>
          <Group gap='xs'>
            <Text size='sm' fw={500}>
              Timings:
            </Text>
            <Text size='sm' c='dimmed' fw={500}>
              9:00 AM - 4:00 PM
            </Text>
          </Group>
          <Group gap='xs'>
            <Text size='sm' fw={500}>
              Location:
            </Text>
            <Text size='sm' c='dimmed' fw={500}>
              ArtChowk Gallery, Karachi
            </Text>
          </Group>
          <Space mt='md' />
          <Button
            color='blue'
            fullWidth
            mt='auto'
            radius='md'
            component={Link}
            to='/join-exhibition'
            leftSection={<IconUsersPlus size={14} />}
          >
            Join
          </Button>
        </Card>

        <Card shadow='sm' padding='lg' radius='md' withBorder>
          <Card.Section>
            <Image src={exhibition4} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={600}>Captured Moments</Text>
          </Group>
          <Group gap='xs'>
            <Text size='sm' fw={500}>
              Date:
            </Text>
            <Text size='sm' c='dimmed' fw={500}>
              April 5, 2025
            </Text>
          </Group>
          <Group gap='xs'>
            <Text size='sm' fw={500}>
              Timings:
            </Text>
            <Text size='sm' c='dimmed' fw={500}>
              10:30 AM - 6:00 PM
            </Text>
          </Group>
          <Group gap='xs'>
            <Text size='sm' fw={500}>
              Location:
            </Text>
            <Text size='sm' c='dimmed' fw={500}>
              Alhamra Art Gallery, Lahore
            </Text>
          </Group>
          <Space mt='md' />
          <Button
            color='blue'
            fullWidth
            mt='auto'
            radius='md'
            component={Link}
            to='/join-exhibition'
            leftSection={<IconUsersPlus size={14} />}
          >
            Join
          </Button>
        </Card>

        <Card shadow='sm' padding='lg' radius='md' withBorder>
          <Card.Section>
            <Image src={exhibition5} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={600}>Art in Motion</Text>
          </Group>
          <Group gap='xs'>
            <Text size='sm' fw={500}>
              Date:
            </Text>
            <Text size='sm' c='dimmed' fw={500}>
              December 5, 2024
            </Text>
          </Group>
          <Group gap='xs'>
            <Text size='sm' fw={500}>
              Timings:
            </Text>
            <Text size='sm' c='dimmed' fw={500}>
              12:00 PM - 7:00 PM
            </Text>
          </Group>
          <Group gap='xs'>
            <Text size='sm' fw={500}>
              Location:
            </Text>
            <Text size='sm' c='dimmed' fw={500}>
              National Art Gallery, Islamabad
            </Text>
          </Group>
          <Space mt='md' />
          <Button
            color='blue'
            fullWidth
            mt='auto'
            radius='md'
            component={Link}
            to='/join-exhibition'
            leftSection={<IconUsersPlus size={14} />}
          >
            Join
          </Button>
        </Card>

        <Card shadow='sm' padding='lg' radius='md' withBorder>
          <Card.Section>
            <Image src={exhibition6} height={160} alt='' />
          </Card.Section>
          <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={600}>Artful Realms</Text>
          </Group>
          <Group gap='xs'>
            <Text size='sm' fw={500}>
              Date:
            </Text>
            <Text size='sm' c='dimmed' fw={500}>
              May 15, 2025
            </Text>
          </Group>
          <Group gap='xs'>
            <Text size='sm' fw={500}>
              Timings:
            </Text>
            <Text size='sm' c='dimmed' fw={500}>
              12:00 AM - 7:00 PM
            </Text>
          </Group>
          <Group gap='xs'>
            <Text size='sm' fw={500}>
              Location:
            </Text>
            <Text size='sm' c='dimmed' fw={500}>
              Echoes of Infinite, Lahore
            </Text>
          </Group>
          <Space mt='md' />
          <Button
            color='blue'
            fullWidth
            mt='auto'
            radius='md'
            component={Link}
            to='/join-exhibition'
            leftSection={<IconUsersPlus size={14} />}
          >
            Join
          </Button>
        </Card>
      </SimpleGrid>
    </Stack>
  );
}
