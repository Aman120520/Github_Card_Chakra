import React, { useState } from 'react';
import { Box, Input, Button, Flex, Heading, Text } from '@chakra-ui/react';

const GitHubCard = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      });
  };

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      background="linear-gradient(45deg, #232526, #414345)"
      color="white"
    >
      <Heading as="h1" size="4x4" textAlign="center" fontSize={38} fontWeight={1200} mb="8">
        GitHub Card
      </Heading>
      <Box
        bg="rgba(0, 0, 0, 0.7)"
        p="10"
        borderRadius="lg"
        boxShadow="lg"
        margin={100}
        textAlign="center"
        w="350px"
      >
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={handleChange}
            mb="2"
          />
          <Button type="submit" colorScheme="teal">
            Show GitHub Info
          </Button>
        </form>
        {userData && (
          <>
            <img
              src={userData.avatar_url}
              alt={`${username}'s Avatar`}
              width="100"
              height="100"
              style={{ borderRadius: '50%' }}
              className="avatar"
            />
            <Heading as="h2" size="lg" mt="2">
              {userData.name}
            </Heading>
            <Text>@{userData.login}</Text>
            <Text>Public Repos: {userData.public_repos}</Text>
            <Text>Public Gists: {userData.public_gists}</Text>
            <Text>Profile Created At: {new Date(userData.created_at).toLocaleDateString()}</Text>
          </>
        )}
      </Box>
    </Flex>
  );
};

export default GitHubCard;
