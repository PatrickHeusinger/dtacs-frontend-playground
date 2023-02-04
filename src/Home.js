import React from "react";
import {Box, Image, Stack, Title} from "@mantine/core";
import Logo from './dt_logo_xl.png';

export default function Home(){
    return (
        <Box pt={160} sx={{display:'flex', justifyContent:'center' }}>
            <Stack sx={{display:'flex', justifyContent:'center',alignItems:'center'}}>
                <Title sx={{color:'#1883AD',fontSize:'64px'}}>Frontend Development Playground</Title>
                <Image pt={40} width={300} src={Logo} />
            </Stack>

        </Box>
    )
}