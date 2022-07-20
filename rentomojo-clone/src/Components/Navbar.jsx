import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
  Input,
} from "@chakra-ui/react";
import LocationMenu from "./LocationMenu";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function WithSubnavigation() {
  return (
    <Box
      margin="auto"
      border={"1px solid red"}
      // position="sticky"
      // top={0}
      background-color="transparent"
      overflow="hidden"
      // width="100%"
      position="sticky"
      // position="-webkit-sticky"
      top={0}
      width="100%"
    >
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        width={"90%"}
        margin="auto"
        // margin="10px 10px 5px 20px"
        gap="10px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        flexDirection="row"
        justifyContent={"space-between"}
        border={"1px solid red"}
        padding="10px"
      >
        {/* <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        ></Flex> */}
        <Link to="/">
          <Box cursor="pointer">
            {/* <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}> */}
            <img
              src="https://s3-us-west-2.amazonaws.com/cbi-image-service-prd/modified/34e7cf10-932f-495d-aa1f-d76577d50be4.png"
              // src="https://cdn.tradetracker.net/in/campaign_image_rectangle/31144.png"
              alt=""
              width="300px"
              overflow="hidden"
            />
          </Box>
        </Link>
        <Box>
          <LocationMenu />
        </Box>
        <Box>
          <Input
            placeholder="Search for products"
            border="1px solid red"
            type="search"
            width={"700px"}
            padding="20px"
            margin={"auto"}
            autoComplete="on"
            borderRadius={"10px"}
          />
        </Box>
        <Link to="/cart">
          <Flex alignItems={"center"} gap="10px" cursor="pointer">
            <BsCart2 size={"20px"} />
            <Text>Cart</Text>
          </Flex>
        </Link>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Link to="/login">
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"red"}
              href={"#"}
              border="1px solid red"
              borderRadius={"8px"}
              _hover={{
                bg: "white",
                color: "red",
              }}
            >
              LOGIN/SIGNUP
            </Button>
          </Link>
        </Stack>
      </Flex>
      {/* </Flex> */}
    </Box>
  );
}
