import React from "react"
import { Box, Image } from "@chakra-ui/react"
import Logo from "../images/Logo-bwouno.png"

export default function LogoHeader(props) {
  return (
    <Box {...props}>
      <Image marginBottom="0" src={Logo} />
    </Box>
  )
}
