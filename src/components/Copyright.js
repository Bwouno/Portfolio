import { Text, Box } from "@chakra-ui/react"
import * as React from "react"

const Copyright = ({ props }) => (
  <Box>
    <Text
      fontSize="sm"
      textAlign="center"
      color="#47596f"
      mb="10px"
      fontWeight="semibold"
      {...props}
    >
      &copy; {new Date().getFullYear()} BWOUNO. TOUS DROITS RÉSERVÉS.
    </Text>
  </Box>
)

export default Copyright
