import React from "react";
import { Container, VStack, Flex, Text, Image } from "@chakra-ui/react";

interface Category {
    id: number;
    name: string;
    imgUrl: string;
}

interface Props {
    categories: Category[];
}

const SideBar = ({ categories }: Props) => {
    return (
        <div>
            <Container>
                <VStack>
                    {categories.map((category) => (
                        <Flex key={category.id}>
                            <Text>{category.name}</Text>
                            <Image src={category.imgUrl}></Image>
                        </Flex>
                    ))}
                </VStack>
            </Container>
        </div>
    );
};

export default SideBar;
