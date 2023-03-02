import Head from "next/head";
import AddTransactionModal from "../components/AddTransactionModal";
import TransactionItem from "../components/TransactionItem";

export default function Home() {
  return (
    <div className="relative h-[100vh] bg-slate-100">
      <Head>
        <title>Sampul</title>
        <meta name="description" content="Expense tracker app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex border-b-[1px] bg-white p-4">
        <p className="text-slate-900">👋 Hello Afrie</p>
      </div>
      <div className="flex flex-col bg-slate-100 pb-32">
        <p className="px-4 pt-4 pb-1 font-bold">Latest Transactions</p>
        {[
          1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2,
          3, 2, 1, 2, 3,
        ].map((n) => (
          <TransactionItem />
        ))}
      </div>
      <AddTransactionModal />
      <div className="fixed bottom-0 flex w-full justify-evenly border-t-[1px] bg-white px-4">
        <button className="w-full p-4">Budgets</button>
        <button className="w-full p-4">Transactions</button>
        <button className="w-full p-4">Accounts</button>
      </div>
    </div>
  );
}
