import React from "react";
import Pill from "./Pill";

function TransactionItem() {
  return (
    <div className="flex items-center justify-between border-t-[1px] bg-white p-4">
      <div className="flex flex-col justify-between space-y-1">
        <p className="text-sm text-slate-800">Lunch Nasi Goreng Ayam</p>
        <div className="flex items-center space-x-1">
          <p className="text-xs text-slate-500">12/01/2023</p>
          <Pill>Shopping</Pill>
          <Pill>PB Visa</Pill>
        </div>
      </div>
      <p className="font-semibold text-red-400">- RM100.00</p>
    </div>
  );
}

export default TransactionItem;
