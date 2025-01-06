import { Select, Stack, Title } from '@mantine/core';

import { AnimateIn } from './AnimateIn';

export function Settings() {
  return (
    <AnimateIn>
      <Stack>
        <Title>Settings</Title>
        <Select
          label='Change Language'
          defaultValue='English'
          placeholder='Select language'
          data={['English', 'Spanish', 'French', 'German', 'Russian', 'Urdu']}
        />
      </Stack>
    </AnimateIn>
  );
}
