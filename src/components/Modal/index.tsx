import ReactModal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './style';
import incomeIMG from "../../assets/income.svg";
import outcomeIMG from "../../assets/outcome.svg";
import './style.ts';
import closeIMG from "../../assets/close.svg";
import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/UseTransaction';


ReactModal.setAppElement('#root');

interface ModalProps {
    isOpen: boolean,
    onRequestClose: () => void;
}

export function Modal({ isOpen, onRequestClose }: ModalProps) {

    const { createTransaction } = useTransactions()

    const [type, setType] = useState('deposit')
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')

    async function handleCreateNewTransaction(event : FormEvent)
    {
        event.preventDefault();

        await createTransaction({
            title,
            amount, 
            type,
            category, 
        })

        setTitle('')
        setType('deposit')
        setCategory('')
        setAmount(0)
        onRequestClose()
    
    }

    return (
        <ReactModal
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            <button 
                type='button' 
                onClick={onRequestClose} 
                className="react-modal-close"
            >
                <img src={closeIMG} alt="Fechar"/>
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>
                    <input placeholder='Título' value={title} onChange={event => setTitle(event.target.value)} />
                    <input type="number" placeholder='Valor' value={amount} onChange={event => setAmount(Number(event.target.value))} />                 
                        <TransactionTypeContainer>
                            <RadioBox 
                                type='button' 
                                onClick={() => {setType('deposit')}}
                                isActive={type == 'deposit'}
                                activeColor="green"
                            >
                                <img src={incomeIMG} alt="Entrada"/>
                                <span>Entrada</span>
                            </RadioBox>
                            <RadioBox 
                                type='button' 
                                onClick={() => {setType('withdraw')}}
                                isActive={type == 'withdraw'}
                                activeColor="red"
                            >
                                <img src={outcomeIMG} alt="Saída" />
                                <span>Saída</span>
                            </RadioBox>
                        </TransactionTypeContainer>
                    <input placeholder='Categoria' value={category} onChange={event => setCategory(event.target.value)} />
                    <button type="submit">Cadastrar</button>
            </Container>
        </ReactModal>
    )
}