import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, InfoIcon } from '@chakra-ui/icons';
import logo from './../../Assets/logo.png';
import { Link as ReachLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'; // Import the FaHome icon from react-icons/fa

export default function BetterNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg="#5A3E8D" // Dark purple color
        px={4}
        borderBottom="1px solid"
        borderColor="gray.700"
        position="sticky"  // Make the navbar sticky
        top={0}             // Stick to the top of the viewport
        zIndex={1}          // Ensure it stays above other content
      >
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            bg="transparent"
            _hover={{
              bg: 'transparent',
            }}
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems="center">
            <Avatar size="sm" src={logo} w={10} h={10} />
            <HStack ml="auto" as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
              <ReachLink
                px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: 'none' }}
                to="/"
              >
                <HStack>
                  <FaHome color="white" /> {/* Set icon color to white */}
                  <Text fontWeight="bold" color="white">Home</Text> {/* Set text color to white */}
                </HStack>
              </ReachLink>
              <ReachLink
                px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: 'none' }}
                to="/about"
              >
                <HStack>
                  <InfoIcon color="white" /> {/* Set icon color to white */}
                  <Text fontWeight="bold" color="white">About</Text> {/* Set text color to white */}
                </HStack>
              </ReachLink>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as="nav" spacing={4}>
              <ReachLink
                px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: 'none' }}
                to="/"
              >
                <HStack>
                  <FaHome color="white" /> {/* Set icon color to white */}
                  <Text fontWeight="bold" color="white">Home</Text> {/* Set text color to white */}
                </HStack>
              </ReachLink>
              <ReachLink
                px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: 'none' }}
                to="/about"
              >
                <HStack>
                  <InfoIcon color="white" /> {/* Set icon color to white */}
                  <Text fontWeight="bold" color="white">About</Text> {/* Set text color to white */}
                </HStack>
              </ReachLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
