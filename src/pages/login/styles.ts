import styled from "@emotion/styled";

const Wrapper = styled.main `
    background-color: var(--primary-color-dark);
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
`

const Main = styled.div`
    min-width: 30.4375rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 1.25rem;
`

const Header = styled.header`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-weight: 700;
        font-size: 4rem;
    }

    p {
        color: var(--white);
        font-weight: 400;
        font-size: 1.25rem;
    }

`
const Form = styled.form`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        color: var(--white);
        font-weight: 400;
        font-size: 1.25rem;
    }

`

export default { Wrapper, Main, Header, Form }