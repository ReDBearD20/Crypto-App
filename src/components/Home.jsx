import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import coinsrc from "../assets/coin.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <motion.div
        style={{ height: "80vh" }}
        animate={{ translateY: "20px" }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          src={coinsrc}
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          /*filter={"grayscale(10)"}*/
        />
      </motion.div>

      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"-10"}
      >
        Xcrypto
      </Text>
    </Box>
  );
};

export default Home;
