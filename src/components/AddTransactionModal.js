import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function AddTransactionModal() {
  function openModal() {
    prompt("Enter transaction");
  }

  return (
    <>
      <div className="fixed bottom-0 mx-auto mb-16 flex w-full items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Add Transaction
        </button>
      </div>
    </>
  );
}
