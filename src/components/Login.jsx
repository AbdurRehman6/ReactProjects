import {
  Button,
  Container,
  Heading,
  Input,
  Link,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full','96']}
          m={'auto'}
          my={'16'}
        >
          <Heading>Welcome Back</Heading>
          <Input
            placeholder={'Enter your email'}
            type={'email'}
            required
            focusBorderColor={'purple.500'}
          ></Input>

          <Input
            placeholder={'Password'}
            type={'password'}
            required
            focusBorderColor={'purple.500'}
          ></Input>

          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgotpassword'}>Forgot Password</Link>
          </Button>

          <Button colorScheme={'purple'} type={'submit'}>
            Log In
          </Button>

          <Text textAlign={'right'}>
            New User?{' '}
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to={'/signup'}>Sign Up </Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
