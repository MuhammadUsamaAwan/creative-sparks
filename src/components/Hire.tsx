import { Button, Checkbox, SimpleGrid, Stack, TextInput, Title } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { IconBriefcase } from '@tabler/icons-react';

export function Hire() {
  return (
    <form>
      <Stack>
        <Title>Hire Artist</Title>
        <TextInput label='Full Name' placeholder='Enter Full Name' required />
        <TextInput label='Email' placeholder='Enter Email' type='email' required />
        <TextInput label='Phone Number' placeholder='Enter Phone Number' type='tel' required />
        <TextInput label='Event Name' placeholder='Enter Event Name' required />
        <DateInput label='Event Date' placeholder='Enter Event Date' required />
        <TextInput label='Address' placeholder='Enter Address' required />
        <TextInput label='Country' placeholder='Enter Country' required />
        <SimpleGrid cols={3}>
          <TextInput label='City' placeholder='Enter City' required />
          <TextInput label='State' placeholder='Enter State' required />
          <TextInput label='Zip Code' placeholder='Enter Zip Code' required />
        </SimpleGrid>
        <Checkbox label='I have read the terms and conditions' />
        <Button leftSection={<IconBriefcase size={14} />}>Hire Artist</Button>
      </Stack>
    </form>
  );
}
