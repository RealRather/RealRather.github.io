import styled from 'styled-components';

const ContainerWrapper = styled.div`
    margin: 30px auto 30px;
    padding: 0;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    max-width: 740px;
`;

const Container = styled(ContainerWrapper)`
   margin: 0 auto 50px;
   max-width: 350px;
`;

const Header = styled.p`
    margin: 10px 0 10px;
    padding: 5px;
    font-size: 18px;
    align-self: center;
    text-align: center;
    box-sizing: border-box;
    width: 100%;
`;

const TitleContainer = styled.div`
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    font-size: 15px;
    font-weight: bold;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
    min-width: 70px;
    width: 100%;
`;

const Title = styled.p`
    margin: 0;
    padding: 5px;
    max-width: 150px;
    width: 100%;
`;

const TextRow = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
`;

const Text = styled.p`
    margin: 0;
    padding: 5px;
    font-size: 13px;
    box-sizing: border-box;
    max-width: 150px;
    width: 100%;
    color: ${props => (props.isRedColor ? `#ff0000` : `#000`)};
`;

export {
    Container,
    ContainerWrapper,
    Header,
    TitleContainer,
    Title,
    TextRow,
    Text
};
