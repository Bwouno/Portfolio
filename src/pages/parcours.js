import * as React from "react"
import { graphql } from "gatsby"
import {
  Box,
  Text,
  Heading,
  Flex,
  Container as ChakraContainer,
  Image as ChakraImage,
  TabList,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react"
import Bwouno from "../images/bwouno.jpg"
import Carrefour from "../images/avant/carrefour.png"
import American from "../images/avant/american-car.png"
import Cilaos from "../images/avant/cilaos-logo.png"
import ElRancho from "../images/avant/elrancho.png"
import Hilton from "../images/avant/hilton.png"
import Rochecotte from "../images/avant/rochecotte.png"
import Wild from "../images/apres/wild.png"
import Citya from "../images/apres/CITYA.png"
import April from "../images/apres/april.png"
import Web2vi from "../images/apres/web2vi.png"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Parcours = () => {
  return (
    <Layout>
      <Seo title="/parcours" />
      <ChakraContainer maxWidth="10xl" bg="#0a2a47">
        <Flex
          pt={6}
          pb="85px"
          position="relative"
          alignItems="center"
          minHeight={{ base: "400px", lg: "550px" }}
        >
          <ChakraImage
            position="absolute"
            bottom="0rem"
            left={{ base: "45%", xl: "45%" }}
            height="100%"
            display={{ base: "none", lg: "block" }}
            src={Bwouno}
          />

          <Box
            maxWidth="2xl"
            position="relative"
            paddingBottom={3}
            paddingLeft={6}
            color="white"
          >
            <Heading
              as="h1"
              lineHeight="48px"
              fontFamily="poppins, sans sherif"
            >
              HOARAU Bruno
            </Heading>
            <Text fontSize="lg" mb={6} fontWeight="semibold">
              Concepteur développeur d'application web et mobile
            </Text>
            <Text fontSize="lg" mb={12}>
              Autonome, volontaire et persévérant, mon caractère me permet de
              m'adapter et d'évoluer très facilement dans des environnements
              inconnus.
              <br />
              Passionné par mon métier, je reste à l'affut des dernières
              tendances et
              <br /> technologies utilisées.
            </Text>
          </Box>
        </Flex>
      </ChakraContainer>
      <ChakraContainer maxWidth="10xl" bg="#001e3b">
        <Tabs isFitted variant="enclosed-colored" size="lg">
          <Box position="relative">
            <ChakraContainer maxWidth="6xl">
              <TabList paddingTop="5em">
                <Tab
                  fontSize="2xl"
                  fontWeight={600}
                  py={6}
                  color="white"
                  border="none"
                  bg="#011e3b"
                  _selected={{
                    color: "white",
                    bg: "#0a2a47",
                    boxShadow: "none",
                  }}
                >
                  Depuis le DEV
                </Tab>
                <Tab
                  fontSize="2xl"
                  fontWeight={600}
                  py={6}
                  color="white"
                  border="none"
                  bg="#011e3b"
                  _selected={{
                    color: "white",
                    bg: "#0a2a47",
                    boxShadow: "none",
                  }}
                >
                  Avant le DEV
                </Tab>
              </TabList>
            </ChakraContainer>
          </Box>
          <TabPanels>
            <TabPanel p={0}>
              <Box bg="#0a2a47">
                <ChakraContainer
                  width={{ base: null, lg: "90%" }}
                  maxWidth="8xl"
                  py={20}
                >
                  <SimpleGrid
                    columns={{
                      base: 1,
                      md: 2,
                      lg: 3,
                    }}
                    spacing={{
                      base: 6,
                      lg: 20,
                    }}
                  >
                    <ChakraContainer
                      position="relative"
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      marginBottom={8}
                    >
                      <Stack direction="row">
                        <ChakraImage
                          w="40%"
                          objectFit="cover"
                          position="absolute"
                          right="8em"
                          top="78px"
                          src={Wild}
                          alt="logo societé"
                        />
                      </Stack>

                      <Box
                        marginTop="58px"
                        borderRadius="lg"
                        padding={5}
                        pt="80px"
                        bg="white"
                      >
                        <Text fontSize="xl" fontWeight={600} mb={2} mt={8}>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </Text>
                        <Text
                          marginTop={4}
                          fontSize="sm"
                          letterSpacing="1"
                          color="#000"
                        >
                          <b>Septembre-2019 / Février-2020</b> -<br />
                          Développeur web | Bac +2 |<br /> ReactJS/NodeJS
                        </Text>
                      </Box>
                    </ChakraContainer>
                    <ChakraContainer
                      position="relative"
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      marginBottom={8}
                    >
                      <Stack direction="row">
                        <ChakraImage
                          w="90px"
                          objectFit="cover"
                          position="absolute"
                          right="11em"
                          top="67px"
                          src={Citya}
                          alt="logo societé"
                        />
                      </Stack>

                      <Box
                        marginTop="58px"
                        borderRadius="lg"
                        padding={5}
                        pt="80px"
                        bg="white"
                      >
                        <Text fontSize="xl" fontWeight={600} mb={2} mt={8}>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </Text>
                        <Text
                          marginTop={4}
                          fontSize="sm"
                          letterSpacing="1"
                          color="#000"
                        >
                          <b>Février-2020 / Juin-2020</b> -<br />
                          Développeur web | Stage |<br /> ReactJS/Symphony-PHP
                        </Text>
                      </Box>
                    </ChakraContainer>
                    <ChakraContainer
                      position="relative"
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      marginBottom={8}
                    >
                      <Stack direction="row">
                        <ChakraImage
                          w="105px"
                          objectFit="cover"
                          position="absolute"
                          right="10em"
                          top="65px"
                          src={April}
                          alt="logo societé"
                        />
                      </Stack>

                      <Box
                        marginTop="58px"
                        borderRadius="lg"
                        padding={5}
                        pt="80px"
                        bg="white"
                      >
                        <Text fontSize="xl" fontWeight={600} mb={2} mt={8}>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </Text>
                        <Text
                          marginTop={4}
                          fontSize="sm"
                          letterSpacing="1"
                          color="#000"
                        >
                          <b>Juin-2020 / Août-2020</b> -<br />
                          Développeur web junior | CDD | ReactJS/PHP/NodeJS
                        </Text>
                      </Box>
                    </ChakraContainer>
                    <ChakraContainer
                      position="relative"
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      marginBottom={8}
                    >
                      <Stack direction="row">
                        <ChakraImage
                          w="40%"
                          objectFit="cover"
                          position="absolute"
                          right="8em"
                          top="28px"
                          src={Wild}
                          alt="logo societé"
                        />
                      </Stack>

                      <Box borderRadius="lg" padding={5} pt="80px" bg="white">
                        <Text fontSize="xl" fontWeight={600} mb={2} mt={8}>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </Text>
                        <Text
                          marginTop={4}
                          fontSize="sm"
                          letterSpacing="1"
                          color="#000"
                        >
                          <b>Depuis Novembre-2020</b> -<br />
                          Concepteur Développeur d'application | Bac +4 |
                          ReactJS/NodeJS/React-Native
                        </Text>
                      </Box>
                    </ChakraContainer>
                    <ChakraContainer
                      position="relative"
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      marginBottom={8}
                    >
                      <Stack direction="row">
                        <ChakraImage
                          w="220px"
                          objectFit="cover"
                          position="absolute"
                          right="7em"
                          top="20px"
                          src={Web2vi}
                          alt="logo societé"
                        />
                      </Stack>

                      <Box borderRadius="lg" padding={5} pt="80px" bg="white">
                        <Text fontSize="xl" fontWeight={600} mb={2} mt={8}>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </Text>
                        <Text
                          marginTop={4}
                          fontSize="sm"
                          letterSpacing="1"
                          color="#000"
                        >
                          <b>Depuis Octobre-2020</b> -<br />
                          Concepteur Développeur d'application | Alternance |
                          ReactJS/NodeJS/Gatsby/Chakra-ui
                        </Text>
                      </Box>
                    </ChakraContainer>
                  </SimpleGrid>
                </ChakraContainer>
              </Box>
            </TabPanel>
            <TabPanel p={0}>
              <Box bg="#0a2a47">
                <ChakraContainer
                  width={{ base: null, lg: "90%" }}
                  maxWidth="8xl"
                  py={20}
                >
                  <SimpleGrid
                    columns={{
                      base: 1,
                      xl: 3,
                    }}
                    spacing={12}
                  >
                    <ChakraContainer
                      position="relative"
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      marginBottom={8}
                    >
                      <Stack direction="row">
                        <ChakraImage
                          w="45%"
                          objectFit="cover"
                          position="absolute"
                          right="8em"
                          top="60px"
                          borderRadius="20em"
                          src={Carrefour}
                          alt="logo societé"
                        />
                      </Stack>

                      <Box
                        marginTop="58px"
                        borderRadius="lg"
                        padding={5}
                        pt="80px"
                        bg="white"
                      >
                        <Text fontSize="xl" fontWeight={600} mb={2} mt={8}>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </Text>
                        <Text
                          marginTop={4}
                          fontSize="sm"
                          letterSpacing="1"
                          color="#000"
                        >
                          <b>Juin-2009 / Juin-2020</b> -<br /> Employé
                          polyvalent | Niveau 2 | Fruit et Légumes
                        </Text>
                      </Box>
                    </ChakraContainer>
                    <ChakraContainer
                      position="relative"
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      marginBottom={8}
                    >
                      <Stack direction="row">
                        <ChakraImage
                          w="110px"
                          objectFit="cover"
                          position="absolute"
                          right="10em"
                          top="67px"
                          src={American}
                          alt="logo societé"
                        />
                      </Stack>

                      <Box
                        marginTop="58px"
                        borderRadius="lg"
                        padding={5}
                        pt="80px"
                        bg="white"
                      >
                        <Text fontSize="xl" fontWeight={600} mb={2} mt={8}>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </Text>
                        <Text
                          marginTop={4}
                          fontSize="sm"
                          letterSpacing="1"
                          color="#000"
                        >
                          <b>Juin-2009 / Juin-2020</b> -<br /> Employé
                          polyvalent | Niveau 2 | Fruit et Légumes
                        </Text>
                      </Box>
                    </ChakraContainer>
                    <ChakraContainer
                      position="relative"
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      marginBottom={8}
                    >
                      <Stack direction="row">
                        <ChakraImage
                          w="172px"
                          objectFit="cover"
                          position="absolute"
                          right="7em"
                          top="79px"
                          src={Cilaos}
                          alt="logo societé"
                        />
                      </Stack>

                      <Box
                        marginTop="58px"
                        borderRadius="lg"
                        padding={5}
                        pt="80px"
                        bg="white"
                      >
                        <Text fontSize="xl" fontWeight={600} mb={2} mt={8}>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </Text>
                        <Text
                          marginTop={4}
                          fontSize="sm"
                          letterSpacing="1"
                          color="#000"
                        >
                          <b>Juin-2009 / Juin-2020</b> -<br /> Employé
                          polyvalent | Niveau 2 | Fruit et Légumes
                        </Text>
                      </Box>
                    </ChakraContainer>
                    <ChakraContainer
                      position="relative"
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      marginBottom={8}
                    >
                      <Stack direction="row">
                        <ChakraImage
                          w="110px"
                          objectFit="cover"
                          position="absolute"
                          right="10em"
                          top="14px"
                          src={ElRancho}
                          alt="logo societé"
                        />
                      </Stack>

                      <Box borderRadius="lg" padding={5} pt="80px" bg="white">
                        <Text fontSize="xl" fontWeight={600} mb={2} mt={8}>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </Text>
                        <Text
                          marginTop={4}
                          fontSize="sm"
                          letterSpacing="1"
                          color="#000"
                        >
                          <b>Juin-2009 / Juin-2020</b> -<br /> Employé
                          polyvalent | Niveau 2 | Fruit et Légumes
                        </Text>
                      </Box>
                    </ChakraContainer>
                    <ChakraContainer
                      position="relative"
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      marginBottom={8}
                    >
                      <Stack direction="row">
                        <ChakraImage
                          w="125px"
                          objectFit="cover"
                          position="absolute"
                          right="9em"
                          top="0px"
                          src={Hilton}
                          alt="logo societé"
                        />
                      </Stack>

                      <Box borderRadius="lg" padding={5} pt="80px" bg="white">
                        <Text fontSize="xl" fontWeight={600} mb={2} mt={8}>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </Text>
                        <Text
                          marginTop={4}
                          fontSize="sm"
                          letterSpacing="1"
                          color="#000"
                        >
                          <b>Juin-2009 / Juin-2020</b> -<br /> Employé
                          polyvalent | Niveau 2 | Fruit et Légumes
                        </Text>
                      </Box>
                    </ChakraContainer>
                    <ChakraContainer
                      position="relative"
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      marginBottom={8}
                    >
                      <Stack direction="row">
                        <ChakraImage
                          w="205px"
                          objectFit="cover"
                          position="absolute"
                          right="6em"
                          top="0px"
                          src={Rochecotte}
                          alt="logo societé"
                        />
                      </Stack>

                      <Box borderRadius="lg" padding={5} pt="80px" bg="white">
                        <Text fontSize="xl" fontWeight={600} mb={2} mt={8}>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </Text>
                        <Text
                          marginTop={4}
                          fontSize="sm"
                          letterSpacing="1"
                          color="#000"
                        >
                          <b>Juin-2009 / Juin-2020</b> -<br /> Employé
                          polyvalent | Niveau 2 | Fruit et Légumes
                        </Text>
                      </Box>
                    </ChakraContainer>
                  </SimpleGrid>
                </ChakraContainer>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </ChakraContainer>
    </Layout>
  )
}

export const query = graphql`
  query ParcoursQuery {
    allAvantDevJson {
      nodes {
        id
        image
        periode
        text
      }
    }
    allApresDevJson {
      nodes {
        id
        image
        periode
        text
      }
    }
  }
`

export default Parcours
