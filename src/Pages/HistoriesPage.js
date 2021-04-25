import React, { useEffect } from "react";
import "./HistoriesPage.css";
import { useSelector, useDispatch } from "react-redux";
import ListHistories from "../Components/ListHistories";
import { fetchTransactions } from "../Store/Action/transactionAction";

export default function HistoriesPage() {
  const dispatch = useDispatch();
  const { transactions, isLoadingTransaction } = useSelector(
    (state) => state.transactionReducer
  );

  useEffect(() => {
    dispatch(fetchTransactions());
  }, []);

  return (
    <div className="histories-page">
      <ListHistories transactions={transactions} isLoadingTransaction = {isLoadingTransaction} />
    </div>
  );
}
