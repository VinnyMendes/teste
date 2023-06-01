import { api } from "@/libs/axios";
import { useQuery } from "react-query";

export interface Account {
  alias: string;
  available_amount: number;
  cvu: string;
  id: number;
  user_id: number;
}

interface Params {
  user_id: number;
}

async function getAccount(params: Params): Promise<Account> {
  const { data } = await api.get<Account>(`/api/account/${params.user_id}`);

  return data;
}

export function useGetAccount(params: Params) {
  return useQuery(["getAccount", params], () => getAccount(params), {
    refetchOnWindowFocus: false,
  });
}
