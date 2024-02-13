import React from "react";
import { Input, Switch, Flex } from "@chakra-ui/react";

const NavBar = () => {
    return (
        <Flex>
            <Input variant="filled" placeholder="search" />
            <Switch colorScheme="teal" size="lg" />
        </Flex>
    );
};

export default NavBar;
