import React, { useState } from "react";
import axios from "axios";
import { Box, Button, Input, Select, VStack } from "@chakra-ui/react";

import { accounts, budgets } from "../constants";

function AddTransaction() {
  const [state, setState] = useState({
    title: "",
    amount: "",
    budget: "",
    account: "",
    type: "Expense",
  });

  const { title, amount, budget, account, type } = state;

  const onSubmit = async (e) => {
    e.preventDefault();

    const isNumber = Boolean(Number(amount));

    if (!isNumber) {
      return alert("Amount invalid");
    }
    const realAmount = type === "Expense" ? "-" + amount : amount;

    const proceed = confirm(
      `Confirm?\n\nType: ${type}\nTitle: ${title}\nAmount: ${amount}\nBudget: ${budget}\nAccount: ${account}`
    );

    if (proceed) {
      const { data } = await axios.post("/api/add", {
        ...state,
        amount: realAmount,
      });
      alert(data?.msg);
    }
  };

  const onChange = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  return (
    <Box p="4" maxW="md" mx="auto">
      <VStack as="form" onSubmit={onSubmit}>
        <Select required name="type" value={type} onChange={onChange}>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </Select>
        <Input
          required
          name="title"
          placeholder="Title"
          value={title}
          onChange={onChange}
        />
        <Input
          required
          name="amount"
          placeholder="Amount"
          value={amount}
          onChange={onChange}
        />
        <Select
          required
          name="budget"
          placeholder="Budget"
          value={budget}
          onChange={onChange}
        >
          {budgets.map((b, i) => (
            <option key={i} value={b}>
              {b}
            </option>
          ))}
        </Select>
        <Select
          required
          name="account"
          placeholder="Account"
          value={account}
          onChange={onChange}
        >
          {accounts.map((a, i) => (
            <option key={i} value={a}>
              {a}
            </option>
          ))}
        </Select>
        <Button type="submit" w="full">
          Submit
        </Button>
      </VStack>
    </Box>
  );
}

export default AddTransaction;
