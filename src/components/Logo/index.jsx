import Image from 'next/image'

import { useColorMode } from "@chakra-ui/react"

import logoDark from '../../../public/Logo-dark.svg';
import logoLight from '../../../public/Logo-light.svg';

export const Logo = () => {

    const { colorMode } = useColorMode()

    return(
        <Image src={colorMode === 'dark'
            ? logoDark
            : logoLight
        } alt="logo"/>
    )
}