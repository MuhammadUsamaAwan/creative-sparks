import {
  ActionIcon,
  AppShell,
  Burger,
  Group,
  Input,
  NavLink,
  ScrollArea,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconBrush,
  IconCamera,
  IconHeart,
  IconHome,
  IconLibraryPhoto,
  IconPaint,
  IconSearch,
  IconShoppingBag,
  IconShoppingCart,
  IconUser,
  IconUsers,
  IconWallpaper,
} from '@tabler/icons-react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

export function Layout() {
  const [opened, { toggle }] = useDisclosure();
  const { colorScheme } = useMantineColorScheme({});
  const theme = useMantineTheme();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding='md'
    >
      <AppShell.Header bg={colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]}>
        <Group h='100%' px='md'>
          <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
          <Group justify='space-between' style={{ flex: 1 }}>
            <Title order={3}>
              <Link
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
                to='/'
              >
                <img src='/logo.png' alt='logo' width={34} />
                Creative Spark
              </Link>
            </Title>
            <Group gap={8}>
              <Input size='sm' placeholder='Search...' leftSection={<IconSearch size={14} />} />
              <ActionIcon variant='subtle' color='gray'>
                <IconUser size={22} />
              </ActionIcon>
              <ActionIcon variant='subtle' color='gray'>
                <IconHeart size={22} />
              </ActionIcon>
              <ActionIcon variant='subtle' color='gray'>
                <IconShoppingCart size={22} />
              </ActionIcon>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p='md' bg={colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]}>
        <AppShell.Section grow mb='md' component={ScrollArea}>
          <NavLink
            to='/'
            label='Home'
            active={'/' === pathname}
            leftSection={<IconHome size={16} />}
            component={Link}
          />
          <NavLink
            to='/shop'
            label='Shop'
            active={'/shop' === pathname}
            leftSection={<IconShoppingBag size={16} />}
            component={Link}
            opened
            onClick={() => navigate('/shop')}
          >
            <NavLink
              to='/paintings'
              label='Paintings'
              active={'/paintings' === pathname}
              leftSection={<IconLibraryPhoto size={16} />}
              component={Link}
            />
            <NavLink
              to='/prints'
              label='Prints'
              active={'/prints' === pathname}
              leftSection={<IconPaint size={16} />}
              component={Link}
            />
            <NavLink
              to='/home-decor'
              label='Home Decor'
              active={'/home-decor' === pathname}
              leftSection={<IconWallpaper size={16} />}
              component={Link}
            />
            <NavLink
              to='/art-supplies'
              label='Art Supplies'
              active={'/art-supplies' === pathname}
              leftSection={<IconBrush size={16} />}
              component={Link}
            />
          </NavLink>
          <NavLink
            to='/artists'
            label='Artists'
            active={'/artists' === pathname}
            leftSection={<IconUsers size={16} />}
            component={Link}
          />
          <NavLink
            to='/exhibition-schedule'
            label='Exhibition Schedule'
            active={'/exhibition-schedule' === pathname}
            leftSection={<IconCamera size={16} />}
            component={Link}
          />
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
