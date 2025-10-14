import styled from 'styled-components';

export const LabelText = styled.span`
    max-width: 60px;
    width: 100%;
    display: inline-block;
    padding-bottom: 10px;
`;

export const Formfield = styled.form`
    width: 600px;
    height: 450px;
    margin: 50px auto;
    background-color: hsl(50, 60%, 54%);
    border: 1px groove rgb(122, 137, 14);
    border-radius: 20px;
    box-shadow: 25px black;
    overflow-x: auto;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Fieldset = styled.fieldset`
    border:none;
    text-align: center;
`;

export const Legend = styled.h2`
    font-size: 2em;
    text-align: center;
    padding-top: 30px;
`;

export const Value = styled.span`
padding-right: 10px;

`;

export const Calcule = styled.button`
    width: 100px;
    border: none;
    font-size: medium;
    background-color: blue;
    display: flex;
    justify-content: center;
    text-align: center;
    color: aliceblue;
    padding: 10px;

    &:hover {background-color: rgb(49, 49, 253);};

    &:active { background-color: rgb(89, 89, 237);};
`;