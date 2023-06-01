"use client";
import { Template } from "@/components/Template";
import { TemplateGrid } from "@/components/Template/TemplateGrid";
import { Flex, Box, Text } from "@chakra-ui/react";
import { DefaultButton } from "@/components/Button";
import { HiArrowRight } from "react-icons/hi";
import { FormProfileForm, TypeFormProfileForm } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useGetUser } from "@/query/use-get-user";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Data } from "./components/Data";
import { Account } from "./components/Account";

export default function Home() {
  const { push } = useRouter();

  const methods = useForm<TypeFormProfileForm>({
    resolver: zodResolver(FormProfileForm),
    mode: "onChange",
  });

  const { data: session } = useSession();

  const { data } = useGetUser({
    user_id: session?.user?.user_data?.id ?? 0,
    cvu: session?.user?.user_info?.cvu ?? 0,
    alias: session?.user?.user_info?.alias ?? 0,
  });

  return (
    <Template shouldShowUser variant="secondary">
      <TemplateGrid>
        <Flex
          position={"relative"}
          w="100%"
          h="100%"
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          paddingBottom={"10px"}
          bg={"#EEEAEA"}
        >
          <Box alignItems={"start"}>
            <Text
              fontWeight="600"
              fontSize={{ base: "16px", md: "16px", lg: "16px" }}
              lineHeight={{ base: "16px", md: "16px", lg: "16px" }}
              py={"1rem"}
              textDecoration={"underline"}
              display={"flex"}
              flexDir={"row"}
              color={"#201F22"}
            >
              <HiArrowRight /> Perfil
            </Text>
          </Box>
          {data && (
            <Data
              key={data.dni}
              user_id={data.dni}
              firstname={data.firstname}
              lastname={data.lastname}
              email={data.email}
              phone={data.phone}
              dni={data.dni}
            />
          )}

          <Box display={"flex"} flexDir={"column"}>
            <DefaultButton
              variant="home2"
              label="Administrar meios de pagamento ->"
              h={"67px"}
              margin={"1rem 0rem 1rem 0rem"}
              borderRadius={"10px"}
              onClick={() => push("/dashboard/cards")}
            />
            <Account
              cvu={session?.user?.user_info?.cvu ?? ""}
              alias={session?.user?.user_info?.alias ?? ""}
            />
          </Box>
        </Flex>
      </TemplateGrid>
    </Template>
  );
}
