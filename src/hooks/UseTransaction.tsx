import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Transactions {
    id: number,
    title: string,
    amount: number,
    type: string,
    category: string,
    createdAT: Date
}

interface TransactionProviderProps{
    children: ReactNode
}

interface TransactionContextData{
    transactions : Transactions[];
    createTransaction : (transaction : TransactionInput) => Promise<void>; 
}

const TransactionsContext = createContext<TransactionContextData>(
    {} as TransactionContextData
    );

type TransactionInput = Omit<Transactions, 'id' | 'createdAT'>

export function TransactionsProvider({children} : TransactionProviderProps){

    const [transactions, setTransactions] = useState<Transactions[]>([])

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions)
            )
    }, [])

     async function createTransaction(transactionInput : TransactionInput){

         const response = await api.post('transactions', {...transactionInput, createdAT: new Date(),})

         const { transaction } = response.data;

         setTransactions([
             ...transactions, transaction,
            ])
    }

    return(
        <TransactionsContext.Provider value={{ transactions , createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransactions(){
    const context = useContext(TransactionsContext)

    return context;
}
