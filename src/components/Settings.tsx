import { Select, Stack, Title } from '@mantine/core';

export function Settings() {
  return (
    <Stack>
      <Title>Settings</Title>
      <Select
        label='Change Language'
        defaultValue='English'
        placeholder='Select language'
        data={['English', 'Spanish', 'French', 'German', 'Russian', 'Urdu']}
      />
    </Stack>
  );
}
