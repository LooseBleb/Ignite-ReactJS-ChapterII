import styled from "styled-components";
import { darken, transparentize } from 'polished'

export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border: 0.1rem solid #D7D7D7;
        border-radius: 0.30rem;
        background: #E7E9EE;
        font-weight: 400;
        font-size: 1rem;

        &::placeholder{
            color: var(--text-body);
        }

        & + input{
            margin-top: 1rem;
        }

        &:hover{
            border: 0.1rem solid black;
        }

        &:focus{
            border: 1rem;
        }
    }

    button[type="submit"]{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;

        transition: filter 0.2;

        &:hover{
            filter:  brightness(0.9);
        }
    }
`;

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;       
`;


interface RadioBoxProps{
    isActive : boolean;
    activeColor: 'green' | 'red'
};

const colors= {
    green:'#33cc95',
    red: '#e52e40'
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid #D7D7D7;
    background: ${(props) => props.isActive 
    ? transparentize(0.9, colors[props.activeColor])
    : 'transparent'};
    border-radius: 0.25rem;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: border-color 0.2;

    &:hover{
        border-color: ${darken(0.1, '#d7d7d7')};
    }

    img{
        width: 1.5rem;
    }

    span{
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title);
    }
`

