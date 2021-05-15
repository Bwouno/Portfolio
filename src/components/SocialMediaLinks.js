import { ButtonGroup, IconButton } from "@chakra-ui/react"
import * as React from "react"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

const SocialMediaLinks = ({ props }) => (
  <ButtonGroup variant="ghost" color="#47596f" marginTop="1em" {...props}>
    <IconButton
      as="a"
      href="https://www.linkedin.com/in/bruno-hoarau-concepteur-d%C3%A9veloppeur-d%E2%80%99application-web-et-mobile-893066137/"
      target="_blanck"
      aria-label="LinkedIn"
      icon={<FaLinkedin fontSize="30px" />}
    />
    <IconButton
      as="a"
      href="https://github.com/Bwouno"
      target="_blanck"
      aria-label="GitHub"
      icon={<FaGithub fontSize="30px" />}
    />
    <IconButton
      as="a"
      href="https://www.instagram.com/bwouno"
      target="_blanck"
      aria-label="Instagram"
      icon={<FaInstagram fontSize="30px" />}
    />
  </ButtonGroup>
)

export default SocialMediaLinks
