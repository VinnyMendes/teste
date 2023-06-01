import React, { useState, useRef } from "react";
import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Button,
} from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { HiPencil } from "react-icons/hi";
import { FormProfileForm, TypeFormProfileForm } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";

interface DataProps {
  user_id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  dni: number;
}

export const Data = (props: DataProps) => {
  const [show, setShow] = useState(false);
  const handleClickShow = () => setShow(!show);

  const methods = useForm<TypeFormProfileForm>({
    resolver: zodResolver(FormProfileForm),
    mode: "onChange",
  });

  return (
    <Box
      height={{ base: "371px", md: "277px", lg: "277px" }}
      alignItems="baseline"
      width={{ base: "354px", md: "511px", lg: "1003px" }}
      padding={"0rem 1rem 0rem 1rem"}
      marginTop={"1rem"}
      bg={"#ffffff"}
      boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
      borderRadius={"10px"}
    >
      <Text
        fontWeight="700"
        fontSize={"20px"}
        lineHeight={"23px"}
        py={{ base: "1rem", md: "0.5rem", lg: "0.5rem" }}
        borderBottom={"1px solid #CECECE"}
      >
        Seus dados
      </Text>
      <FormProvider {...methods}>
        <FormControl
          display={{ base: "", md: "flex", lg: "flex" }}
          alignItems={"center"}
          whiteSpace={"nowrap"}
        >
          <FormLabel
            fontSize={{ base: "16px", md: "16px", lg: "16px" }}
            lineHeight={{
              base: "21.79px",
              md: "21.79px",
              lg: "21.79px",
            }}
            marginBottom={"-10px"}
            padding={"0"}
          >
            Email
          </FormLabel>
          <Input variant="flushed" value={props.email} isReadOnly />
        </FormControl>
        <FormControl
          marginTop={"5px"}
          display={{ base: "", md: "flex", lg: "flex" }}
          alignItems={"center"}
          whiteSpace={"nowrap"}
        >
          <FormLabel
            fontSize={{ base: "16px", md: "16px", lg: "16px" }}
            lineHeight={{
              base: "21.79px",
              md: "21.79px",
              lg: "21.79px",
            }}
            marginBottom={"-10px"}
            padding={"0"}
          >
            Nome e sobrenome
          </FormLabel>
          <InputGroup>
            <Input
              variant="flushed"
              placeholder={`${props.firstname} ${props.lastname}`}
            />
            <InputRightElement>
              <HiPencil />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl
          marginTop={"5px"}
          display={{ base: "", md: "flex", lg: "flex" }}
          alignItems={"center"}
          whiteSpace={"nowrap"}
        >
          <FormLabel
            fontSize={{ base: "16px", md: "16px", lg: "16px" }}
            lineHeight={{
              base: "21.79px",
              md: "21.79px",
              lg: "21.79px",
            }}
            marginBottom={"-10px"}
            padding={"0"}
          >
            CPF
          </FormLabel>
          <InputGroup>
            <Input variant="flushed" placeholder={String(props.dni)} />
            <InputRightElement>
              <HiPencil />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl
          marginTop={"5px"}
          display={{ base: "", md: "flex", lg: "flex" }}
          alignItems={"center"}
          whiteSpace={"nowrap"}
        >
          <FormLabel
            fontSize={{ base: "16px", md: "16px", lg: "16px" }}
            lineHeight={{
              base: "21.79px",
              md: "21.79px",
              lg: "21.79px",
            }}
            marginBottom={"-10px"}
            padding={"0"}
          >
            Telefone
          </FormLabel>
          <InputGroup>
            <Input variant="flushed" placeholder={props.phone} />
            <InputRightElement>
              <HiPencil cursor={"pointer"} />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl
          marginTop={"5px"}
          display={{ base: "", md: "flex", lg: "flex" }}
          alignItems={"center"}
          whiteSpace={"nowrap"}
        >
          <FormLabel
            fontSize={{ base: "16px", md: "16px", lg: "16px" }}
            lineHeight={{
              base: "21.79px",
              md: "21.79px",
              lg: "21.79px",
            }}
            marginBottom={"-10px"}
            padding={"0"}
          >
            Senha de acesso
          </FormLabel>
          <InputGroup>
            <InputLeftElement>
              <Button h="1.75rem" size="sm" onClick={handleClickShow}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputLeftElement>
            <Input
              variant="flushed"
              value="123456"
              type={show ? "text" : "password"}
              marginLeft={"6px"}
            />
            <InputRightElement>
              <HiPencil cursor={"pointer"} />
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </FormProvider>
    </Box>
  );
};
