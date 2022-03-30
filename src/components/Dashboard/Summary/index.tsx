import { Container } from "./styles";
import incomeIMG from "../../../assets/income.svg";
import outcomeIMG from "../../../assets/outcome.svg";
import totalIMG from "../../../assets/total.svg";
import { useTransactions } from "../../../hooks/UseTransaction";

export function Summary()
{
    const { transactions } = useTransactions();

    const sumarry = transactions.reduce((acc, transactions) => {
        if( transactions.type == 'deposit'){     
             acc.deposits += transactions.amount;
             acc.total += transactions.amount;
        }
        else{
            acc.withdraws += transactions.amount;
            acc.total -= transactions.amount;
        }

        return acc;
    },{
        deposits: 0,
        withdraws:0,
        total: 0,
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeIMG} alt="Entradas" />
                </header>
                <strong>
                    {
                    new Intl.NumberFormat(
                        'pt-BR', {
                                style:'currency', 
                                currency:'BRL'
                        }).format(sumarry.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeIMG} alt="Saidas" />
                </header>
                <strong>-
                    {
                    new Intl.NumberFormat(
                        'pt-BR', {
                                style:'currency', 
                                currency:'BRL'
                        }).format(sumarry.withdraws)}
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalIMG} alt="Total" />
                </header>
                <strong>
                    {
                    new Intl.NumberFormat(
                        'pt-BR', {
                                style:'currency', 
                                currency:'BRL'
                        }).format(sumarry.total)}
                </strong>
            </div>
        </Container>
    );
}