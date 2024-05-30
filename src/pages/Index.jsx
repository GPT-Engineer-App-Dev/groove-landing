import { Container, VStack, Heading, Text, Button, HStack, Box, Image, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl">
            The Rocking Band
          </Heading>
          <Text fontSize="xl">Join us on our epic tour across the globe!</Text>
          <Button colorScheme="blue" mt={4}>
            Learn More
          </Button>
        </Box>

        <Box>
          <Image src="https://images.unsplash.com/photo-1474692295473-66ba4d54e0d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYmFuZCUyMHBlcmZvcm1pbmclMjBsaXZlfGVufDB8fHx8MTcxNzA3ODcyM3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Rock Band Performing Live" borderRadius="md" />
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="lg">
            Upcoming Tour Dates
          </Heading>
          <VStack spacing={4} mt={4}>
            <Box>
              <Text fontSize="md">New York, NY - Madison Square Garden - July 20, 2023</Text>
              <Button colorScheme="teal" mt={2}>
                Buy Tickets
              </Button>
            </Box>
            <Box>
              <Text fontSize="md">Los Angeles, CA - Hollywood Bowl - August 15, 2023</Text>
              <Button colorScheme="teal" mt={2}>
                Buy Tickets
              </Button>
            </Box>
            <Box>
              <Text fontSize="md">Chicago, IL - United Center - September 10, 2023</Text>
              <Button colorScheme="teal" mt={2}>
                Buy Tickets
              </Button>
            </Box>
          </VStack>
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="lg">
            Follow Us
          </Heading>
          <HStack spacing={4} justify="center" mt={4}>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
            <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
          </HStack>
          <Button colorScheme="green" mt={4}>
            Subscribe
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
