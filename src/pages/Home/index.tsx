import { FormEvent, useState } from 'react';
import  Image from 'next/image';
import { api } from '../../lib/axios';

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

import BGImage from '../../assets/Images/BGImage.png'
import AppPreviewImg from '../../assets/Images/AppPreviewImage.png';
import UsersImg from '../../assets/Images/UsersImage.png';
import IconLogo from '../../assets/SVGs/IconNLW.svg';
import IconCheck from '../../assets/SVGs/IconCheck.svg'

interface HomeProps {
  poolCount: number;
  guessCount: number;
  userCount: number;
}

export default function Home(props: HomeProps) {
  const [getPoolTitle, setPoolTitle] = useState<string>("");

  async function Createpool(event: FormEvent){
    event.preventDefault()

    try {
      const response = await api.post('/pools/create',{
        title: getPoolTitle
      })

      const { code } = response.data

      await navigator.clipboard.writeText(code)
      alert('Bolão criado com sucesso! O código foi copiado para a área de tranferência!')
      setPoolTitle('')

    } catch(err) {
      console.log(err)
      alert('Falha ao criar o bolão! Fala com o Pedro!')
    }

  }

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
            <InfoNumbers>+{props.userCount ?? 0}</InfoNumbers> pessoas já usaram isso.
          </InfoText>
        </ContainerUsers>
        <Form
          onSubmit={Createpool}
        >
          <Input
            type='text'
            required
            placeholder='Qual o nome do seu bolão?'
            onChange={event => setPoolTitle(event.target.value)}
            value={getPoolTitle}
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
                +{props.guessCount ?? 0}
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

export async function getServerSideProps() {
  const [poolCountResponse, guessCountResponse, userCountResponse] =  await Promise.all([
    api.get('pools/count'),
    api.get('guesses/count'),
    api.get('users/count'),
  ])
  console.log(userCountResponse.data)

  return {
    props: {
      poolCount: poolCountResponse.data.count,
      guessCount: guessCountResponse.data.count,
      userCount: userCountResponse.data.count
    }
  }
}
