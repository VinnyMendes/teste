"use client";
import { Divider, Flex, HStack, Text, useToast } from "@chakra-ui/react";
import { BsCircleFill } from "react-icons/bs";
import { useDeleteCard } from "@/query/use-mutate-delete-card";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface CardInfoProps {
  card_id: number;
  card_number: number;
}

export const CardInfo = (props: CardInfoProps) => {
  const mutateDeleteCard = useDeleteCard();
  const { data } = useSession();
  const toast = useToast();
  const router = useRouter();

  const deleteCard = async (card_id: number) => {
    try {
      if (data?.user?.user_info?.id) {
        await mutateDeleteCard.mutateAsync({
          account_id: data.user.user_info.id,
          card_id,
        });
        toast({
          title: "Sucesso",
          description: "Cartão excluído.",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        router.refresh();
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <>
      <HStack spacing={"16px"} w="100%" align={"center"} justifyContent={"space-between"} fontSize={{ base: "14px", sm: "16px" }}>
        <Flex gap={4} align="center" justifyContent="center" py={"1.5rem"}>
          <BsCircleFill fontSize={"2em"} color="#C1FD35" />
          <Text>Termina em {String(props.card_number).slice(-4)}</Text>
        </Flex>
        <Text
          onClick={() => {
            deleteCard(props.card_id);
          }}
          fontWeight="700"
          cursor={"pointer"}
          _hover={{ borderBottom: "1px solid black" }}
        >
          Eliminar
        </Text>
      </HStack>
      <Divider borderBottomColor={"blackAlpha.600"} />
    </>
  );
};
