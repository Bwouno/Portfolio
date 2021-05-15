import * as React from "react"
import Layout from "../components/layout"
import {
  Box,
  Text,
  Image as ChakraImage,
  Center,
  Divider,
} from "@chakra-ui/react"
import banniere from "../images/banniere.png"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <ChakraImage
      width="178vh"
      height="75vh"
      display={{ base: "none", lg: "block" }}
      objectFit="cover"
      src={banniere}
    />
    <Box position="absolute" top="15em">
      <Text
        color="#f8f8f2"
        fontFamily="poppins, sans sherif"
        fontSize="100px"
        lineHeight="90px"
        paddingLeft="1em"
        fontWeight="bold"
      >
        <Text color="#39506b">HOARAU</Text>
        BRUNO
      </Text>
      <Center
        height="10px"
        bg="#39506b"
        borderRadius="10px"
        marginLeft="4em"
        marginTop="2em"
      >
        <Divider orientation="vertical" />
      </Center>
      <Text
        color="white"
        fontSize="25px"
        fontWeight="medium"
        textAlign="center"
        marginLeft="2em"
        marginTop="1em"
        lineHeight="1em"
      >
        Concepteur développeur d'application
        <br /> -
        <br />
        Designer
      </Text>
    </Box>
  </Layout>
)

export default IndexPage
