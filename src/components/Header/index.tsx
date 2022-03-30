import logo from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps{
    onOpenNewTransictionModal : () => void;
}

export function Header({onOpenNewTransictionModal} : HeaderProps){

    return (
        <Container>
            <Content>
                <img src={logo} alt="YFmoney" />
                <button type="button" onClick={onOpenNewTransictionModal}>New Transaction</button>
            </Content>
        </Container>
    )
}