import {
  Button,
  Container,
  Heading,
  Input,
  Link,
  VStack,
  Text,
  Avatar,
} from '@chakra-ui/react';
import React from 'react';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'4'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading alignSelf={'center'}>VIDEO HUB</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'} />

          <Input
            placeholder={'Name'}
            type={'text'}
            required
            focusBorderColor={'purple.500'}
          ></Input>

          <Input
            placeholder={'Enter your email'}
            type={'email'}
            required
            focusBorderColor={'purple.500'}
          ></Input>

          <Input
            placeholder={'Create Password'}
            type={'password'}
            required
            focusBorderColor={'purple.500'}
          ></Input>

          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgotpassword'}>Forgot Password</Link>
          </Button>

          <Button colorScheme={'purple'} type={'submit'}>
            Sign Up
          </Button>

          <Text textAlign={'right'}>
            Already Signed Up?{' '}
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to={'/login'}>Log In </Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
