import  Image from 'next/image'

import {
  Wrapper,
  Container,
  Title,
  ContainerUsers,
  InfoNumbers,
  InfoText,
  Form,
  Input,
  Button,
  TextDescription,
  ContainerInfos,
  CardInfos,
  ContainerTextInfos,
  TextInfoOne,
  TextInfoTwo,
  Divider,
} from './Home.styles'

import BGImage from '../assets/Images/BGImage.png'
import AppPreviewImg from '../assets/Images/AppPreviewImage.png';
import UsersImg from '../assets/Images/UsersImage.png';
import IconLogo from '../assets/SVGs/IconNLW.svg';
import IconCheck from '../assets/SVGs/IconCheck.svg'

interface HomeProps {
  poolCount: number
}

export default function Home(props: HomeProps) {
  return (
    <Wrapper image={BGImage}>
      <Container>
        <Image 
          src={IconLogo}
          alt='Logo'
          quality={100}
        />
        <Title>
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </Title>
        <ContainerUsers>
          <Image 
            src={UsersImg}
            alt='Avatares'
            quality={100}
          />
          <InfoText>
            <InfoNumbers>+1234</InfoNumbers> pessoas já usaram isso.
          </InfoText>
        </ContainerUsers>
        <Form>
          <Input
            type='text'
            required
            placeholder='Qual o nome do seu bolão?'
          />
          <Button type='submit'>CRIAR MEU BOLÃO</Button>
        </Form>
        <TextDescription>
          Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀
        </TextDescription>
        <ContainerInfos>
          <CardInfos>
            <Image 
              src={IconCheck}
              alt=''
              quality={100}
            />
            <ContainerTextInfos>
              <TextInfoOne>
                +{props.poolCount ?? 0}
              </TextInfoOne>
              <TextInfoTwo>
                Bolões criados
              </TextInfoTwo>
            </ContainerTextInfos>
          </CardInfos>
          <Divider/>
          <CardInfos>
            <Image 
              src={IconCheck}
              alt=''
              quality={100}
            />
            <ContainerTextInfos>
              <TextInfoOne>
                +1234
              </TextInfoOne>
              <TextInfoTwo>
                Palpites enviados
              </TextInfoTwo>
            </ContainerTextInfos>
          </CardInfos>
        </ContainerInfos>
      </Container>
      <Image 
        src={AppPreviewImg}
        alt='Pré visualização do app'
        quality={100}
      />  
    </Wrapper>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/pools/count');
  const data = await response.json()
  return {
    props: {
      poolCount: data.count
    }
  }
}
