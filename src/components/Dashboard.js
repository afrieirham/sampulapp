import {
  Box,
  Flex,
  Select,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import Head from "next/head";
import useSWR from "swr";
import { round } from "lodash";
import { useEffect, useState } from "react";
import { accounts, budgets } from "../constants";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Dashboard() {
  const [view, setView] = useState("budget");
  const [source, setSource] = useState(budgets);

  const { data, isLoading } = useSWR("/api/read", fetcher);

  useEffect(() => {
    if (view === "budget") {
      setSource(budgets);
    } else {
      setSource(accounts);
    }
  }, [view]);

  if (isLoading) {
    return "Loading...";
  }

  const getAmount = (account) => {
    const search = (r) => r?.[view]?.toLowerCase() === account.toLowerCase();
    const selected = data?.values?.filter(search);
    const balance = selected?.reduce((acc, curr) => acc + curr.amount, 0);
    return round(balance, 2);
  };

  const nettWorth = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "MYR",
  }).format(Number(data?.values?.reduce((acc, curr) => acc + curr.amount, 0)));

  return (
    <Box p="4" maxW="md" mx="auto">
      <Head>
        <title>Sampul</title>
        <meta name="description" content="Expense tracker app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        w="full"
      >
        <Text>{nettWorth}</Text>
        <Select onChange={(e) => setView(e.target.value)} mt="2">
          <option value="budget">Budget</option>
          <option value="account">Account</option>
        </Select>
        <Table variant="striped" mt="4" mb="16">
          <Thead>
            <Tr>
              <Th textTransform="uppercase">{view}</Th>
              <Th isNumeric>Amount</Th>
            </Tr>
          </Thead>
          <Tbody>
            {source.map((b, i) => {
              const amount = getAmount(b);
              return (
                <Tr key={i}>
                  <Td>{b}</Td>
                  <Td color={amount < 0 ? "red.500" : "black"} isNumeric>
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "MYR",
                    }).format(amount)}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Flex>
    </Box>
  );
}
