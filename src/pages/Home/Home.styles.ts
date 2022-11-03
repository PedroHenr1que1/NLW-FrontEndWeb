import styled from 'styled-components';

interface Props {
  image: any;
}

export const Wrapper = styled.div<Props>`
    background-image: url(${props => props.image.src});
    background-repeat: round;
    display: flex;
    max-width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    gap: 112px;
`;

export const Container = styled.div`
    width: 490px;
`;

export const Title = styled.h1`
    font-family: "Roboto";
    font-size: 48px;
    font-weight: bold;
    line-height: 1.25;
    color: #FFFFFF;
    width: 490px;
    margin-top: 60px;
`;

export const ContainerUsers = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 40px;
`;

export const InfoNumbers = styled.span`
    color: #129E57;
    font-family: "Roboto";
    font-size: 22px;
    font-weight: bold;
`;

export const InfoText = styled.strong`
    color: #E1E1E6;
    font-family: "Roboto";
    font-size: 22px;
    font-weight: bold;
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    margin-top: 40px;
    gap: 8px;
`;

export const Input = styled.input`
    display: flex;
    flex: 1;
    padding: 16px 24px;
    border-radius: 4px;
    border-color: #323238;
    border-width: 2px;
    ::placeholder{
        color: #C4C4CC;
    }
    background-color: #202024;
`;

export const Button = styled.button`
    font-family: "Roboto";
    font-size: 14px;
    font-weight: bold;
    color: #09090A;
    background-color: #F7DD43;
    padding: 16px 24px;
    border-radius: 4px;
    :hover{
        background-color: #E5CD3D;
    }
    cursor: pointer;
`;

export const TextDescription = styled.p`
    font-family: "Roboto";
    font-size: 14px;
    line-height: 1.65;
    color: #8D8D99;
    margin-top: 16px;
`;

export const ContainerInfos = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 40px;
    margin-top: 40px;
    border-top: 2px solid #323238;
    color: #E1E1E6;
`;

export const CardInfos = styled.div`
    display: flex;
    gap: 24px;
    align-items: center;
`;

export const ContainerTextInfos = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TextInfoOne = styled.span`
    font-family: "Roboto";
    font-size: 24px;
    line-height: 1.40;
    font-weight: bold;
`;

export const TextInfoTwo = styled.span`
    font-family: "Roboto";
    font-size: 16px;
    line-height: 1.60;
`;

export const Divider = styled.div`
    background-color: #323238;
    width: 1px;
    height: 8vh;
`;