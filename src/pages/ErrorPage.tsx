import { Box, Heading, Text } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import NavBar from '../components/NavBar';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={10}>
        <Heading as='h1'>Oops!</Heading>
        <Text fontSize={25}>
          {isRouteErrorResponse(error)
            ? 'This page does not exist'
            : 'An unexpeceted error ocurred.'}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
