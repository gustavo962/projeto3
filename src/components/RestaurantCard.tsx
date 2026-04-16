import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Restaurant } from '../types'
import { colors } from '../styles/global'

const Card = styled.article`
  width: 472px;
  background: ${colors.white};
  border: 1px solid ${colors.coral};

  @media (max-width: 1050px) {
    width: 100%;
  }
`

const ImageWrap = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 217px;
    object-fit: cover;
    display: block;
  }
`

const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

const Tag = styled.span`
  background: ${colors.coral};
  color: ${colors.footerBg};
  font-size: 12px;
  font-weight: 700;
  padding: 6px 8px;
`

const Content = styled.div`
  padding: 8px;
  color: ${colors.coral};
`

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  h3 {
    font-size: 18px;
    font-weight: 700;
  }

  span {
    font-size: 18px;
    font-weight: 700;
  }
`

const Description = styled.p`
  font-size: 14px;
  line-height: 1.5;
  min-height: 88px;
  margin-bottom: 16px;
`

const Button = styled(Link)`
  display: inline-block;
  background: ${colors.coral};
  color: ${colors.footerBg};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
`

type Props = {
  restaurant: Restaurant
}

const RestaurantCard = ({ restaurant }: Props) => {
  return (
    <Card>
      <ImageWrap>
        <img src={restaurant.capa} alt={restaurant.titulo} />

        <Tags>
          {restaurant.destacado && <Tag>Destaque da semana</Tag>}
          <Tag>{restaurant.tipo}</Tag>
        </Tags>
      </ImageWrap>

      <Content>
        <Head>
          <h3>{restaurant.titulo}</h3>
          <span>{restaurant.avaliacao} ★</span>
        </Head>

        <Description>{restaurant.descricao}</Description>

        <Button to={`/perfil/${restaurant.id}`}>Saiba mais</Button>
      </Content>
    </Card>
  )
}

export default RestaurantCard