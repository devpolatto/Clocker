import { 
  Container, 
  Box, 
  Input, 
  Button, 
  Text,
  FormControl,
  FormLabel
} from '@chakra-ui/react';

import { Logo } from '../components/Logo';

export default function Home() {
  return (
    <Container p={4} centerContent>
      <Logo/> 
      <Box>
        <Text>Crie sua agenda compartilhada</Text>
      </Box>
    </Container>
  )
}
