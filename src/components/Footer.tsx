import styled from 'styled-components'
import { colors } from '../styles/global'
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'
import logo from '../assets/logo.png'

const Wrapper = styled.footer`
  background: ${colors.footerBg};
  height: 298px;
  margin-top: 120px;
  display: flex;
  align-items: center;
`

const Content = styled.div`
  width: 100%;
  text-align: center;
  color: ${colors.coral};
`

const Logo = styled.img`
  width: 125px;
  height: auto;
  display: block;
  margin: 0 auto 32px;
`

const Icons = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 80px;
`

const IconCircle = styled.a`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${colors.coral};
  color: ${colors.footerBg};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 12px;
    height: 12px;
  }
`

const Text = styled.p`
  max-width: 480px;
  margin: 0 auto;
  font-size: 10px;
  line-height: 1.4;
`

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <Content>
          <Logo src={logo} alt="Efood" />

          <Icons>
            <IconCircle href="#">
              <FaInstagram />
            </IconCircle>
            <IconCircle href="#">
              <FaFacebookF />
            </IconCircle>
            <IconCircle href="#">
              <FaTwitter />
            </IconCircle>
          </Icons>

          <Text>
            A efood é uma plataforma para divulgação de estabelecimentos,
            responsável pela entrega, contato entre o cliente e o restaurante.
          </Text>
        </Content>
      </div>
    </Wrapper>
  )
}

export default Footer