"use client";
import { Box, Text } from "@chakra-ui/react";
import { MdContentCopy } from "react-icons/md";
import { useSession } from "next-auth/react";
import { useToast } from "@chakra-ui/react";

interface AccountProps {
  cvu: string;
  alias: string;
}

export const Account = (props: AccountProps) => {
  const { data: session } = useSession();
  const toast = useToast();
  return (
    <Box
      borderRadius="25px"
      height={{ base: "220px", md: "224px", lg: "246px" }}
      alignItems="baseline"
      borderWidth="1px"
      width={{ base: "354px", md: "511px", lg: "1003px" }}
      padding={"1.5rem"}
      marginBottom={"1rem"}
      bg={"#201F22"}
      textColor={"#ffffff"}
    >
      <Text
        fontWeight="400"
        fontSize={{ base: "14px", md: "14px", lg: "14px" }}
        lineHeight={{ base: "19px", md: "19px", lg: "19px" }}
        marginBottom={"20px"}
      >
        Copiar seu CVU ou alias para adicionar ou transferir valor a partir de
        outra conta
      </Text>
      <Box
        marginTop={"5px"}
        paddingBottom={"10px"}
        borderBottom={"1px solid #CECECE"}
      >
        <Box
          display={"flex"}
          flexDir={"row"}
          justifyContent={"space-between"}
          color={"#C1FD35"}
        >
          <Text
            fontSize={{ base: "20px", md: "20px", lg: "20px" }}
            lineHeight={{
              base: "23.54px",
              md: "23.54px",
              lg: "23.54px",
            }}
            marginBottom={"-10px"}
            padding={"0"}
          >
            CVU
          </Text>
          <MdContentCopy
            size={"26"}
            onClick={() => {
              if (session?.user?.user_info?.cvu) {
                navigator.clipboard.writeText(session?.user?.user_info?.cvu);
              }

              toast({
                title: "Sucesso",
                description: "Código copiado para área de transferência.",
                status: "success",
                duration: 4000,
                isClosable: true,
              });
            }}
            color="#C1FD35"
            cursor={"pointer"}
          />
        </Box>
        <Text
          fontWeight="400"
          fontSize={{ base: "16px", md: "16px", lg: "16px" }}
          lineHeight={{ base: "21.8px", md: "21.8px", lg: "21.8px" }}
        >
          {props.cvu}
        </Text>
      </Box>
      <Box
        marginTop={"5px"}
        paddingBottom={"10px"}
        borderBottom={"1px solid #CECECE"}
      >
        <Box
          display={"flex"}
          flexDir={"row"}
          justifyContent={"space-between"}
          color={"#C1FD35"}
        >
          <Text
            fontSize={{ base: "20px", md: "20px", lg: "20px" }}
            lineHeight={{
              base: "23.54px",
              md: "23.54px",
              lg: "23.54px",
            }}
            marginBottom={"-10px"}
            padding={"0"}
          >
            Alias
          </Text>
          <MdContentCopy
            size={"26"}
            onClick={() => {
              if (session?.user?.user_info?.alias) {
                navigator.clipboard.writeText(session?.user?.user_info?.alias);
              }

              toast({
                title: "Sucesso",
                description: "Alias copiado para área de transferência.",
                status: "success",
                duration: 4000,
                isClosable: true,
              });
            }}
            color="#C1FD35"
            cursor={"pointer"}
          />
        </Box>
        <Text
          fontWeight="400"
          fontSize={{ base: "16px", md: "16px", lg: "16px" }}
          lineHeight={{ base: "21.8px", md: "21.8px", lg: "21.8px" }}
        >
          {props.alias}
        </Text>
      </Box>
    </Box>
  );
};
