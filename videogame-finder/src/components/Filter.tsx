import React from "react";
import { Container, Heading, VStack, Select } from "@chakra-ui/react";

interface Props {}

const Filter = () => {
    return (
        <div>
            <VStack>
                <Heading></Heading>
                <Container>
                    <Select></Select>
                    <Select></Select>
                </Container>
            </VStack>
        </div>
    );
};

export default Filter;
