import { Box, Stack } from "@chakra-ui/react"
import * as React from "react"
import Copyright from "./Copyright"
import SocialMediaLinks from "./SocialMediaLinks"

const Footer = () => (
  <Box as="footer" bg="#011e3b" role="contentinfo" mx="auto" maxW="10xl">
    <Stack>
      <Stack align="center" justify="space-between">
        <SocialMediaLinks />
      </Stack>
      <Copyright
        alignSelf={{
          base: "center",
          sm: "start",
        }}
      />
    </Stack>
  </Box>
)

export default Footer
