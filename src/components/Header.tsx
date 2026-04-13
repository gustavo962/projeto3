import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { colors } from '../styles/global'
import logo from '../assets/logo.png'
import { RootState } from '../store'
import { open } from '../store/reducers/cart'

const Wrapper = styled.header<{ $home?: boolean }>`
  background-color: ${colors.lightBg};
  background-image:
    linear-gradient(rgba(230, 103, 103, 0.05), rgba(230, 103, 103, 0.05)),
    repeating-linear-gradient(
      90deg,
      rgba(230, 103, 103, 0.06) 0px,
      rgba(230, 103, 103, 0.06) 2px,
      transparent 2px,
      transparent 18px
    );
  color: ${colors.coral};
  height: ${({ $home }) => ($home ? '384px' : '186px')};
`

const Inner = styled.div`
  height: 100%;
`

const TopBar = styled.div`
  height: 80px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
    justify-items: center;
    height: auto;
    padding: 20px 0;
  }
`

const Left = styled.div`
  justify-self: start;
  color: ${colors.coral};
  font-size: 18px;
  font-weight: 700;
`

const Center = styled.div`
  justify-self: center;
`

const Right = styled.div`
  justify-self: end;
  color: ${colors.coral};
  font-size: 18px;
  font-weight: 700;

  button {
    background: transparent;
    color: ${colors.coral};
    font-size: 18px;
    font-weight: 700;
  }
`

const Logo = styled(Link)`
  display: block;

  img {
    width: 125px;
    height: auto;
    display: block;
  }
`

const Hero = styled.div`
  height: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const HeroLogo = styled.img`
  width: 125px;
  height: auto;
  margin-bottom: 56px;
`

const Title = styled.h1`
  max-width: 540px;
  color: ${colors.coral};
  font-size: 36px;
  line-height: 1.2;
  font-weight: 900;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 28px;
    padding: 0 16px;
  }
`

type Props = {
  showHero?: boolean
}

const Header = ({ showHero = false }: Props) => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state: RootState) => state.cart.items)

  return (
    <Wrapper $home={showHero}>
      <div className="container">
        <Inner>
          <TopBar>
            <Left>{!showHero && <Link to="/">Restaurantes</Link>}</Left>

            <Center>
              {!showHero && (
                <Logo to="/">
                  <img src={logo} alt="Efood" />
                </Logo>
              )}
            </Center>

            <Right>
              {!showHero && (
                <button type="button" onClick={() => dispatch(open())}>
                  {cartItems.length} produto(s) no carrinho
                </button>
              )}
            </Right>
          </TopBar>

          {showHero && (
            <Hero>
              <HeroLogo src={logo} alt="Efood" />
              <Title>
                Viva experiências gastronômicas no conforto da sua casa
              </Title>
            </Hero>
          )}
        </Inner>
      </div>
    </Wrapper>
  )
}

export default Header