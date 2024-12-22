import { Button, Checkbox, SimpleGrid, Stack, TextInput, Title } from '@mantine/core';

export function Buy() {
  return (
    <form>
      <Stack>
        <Title>Checkout</Title>
        <TextInput label='Full Name' placeholder='Enter Full Name' required />
        <TextInput label='Email' placeholder='Enter Email' type='email' required />
        <TextInput label='Phone Number' placeholder='Enter Phone Number' type='tel' required />
        <TextInput label='Address' placeholder='Enter Address' required />
        <TextInput label='Country' placeholder='Enter Country' required />
        <SimpleGrid cols={3}>
          <TextInput label='City' placeholder='Enter City' required />
          <TextInput label='State' placeholder='Enter State' required />
          <TextInput label='Zip Code' placeholder='Enter Zip Code' required />
        </SimpleGrid>
        <Checkbox label='I have read the terms and conditions' />
        <Button>Place Order</Button>
      </Stack>
    </form>
  );
}
