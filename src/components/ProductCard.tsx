import styled from 'styled-components'
import { MenuItem } from '../types'
import { colors } from '../styles/global'

const Card = styled.article`
  background: ${colors.coral};
  border: 1px solid ${colors.coral};
  padding: 8px;
  color: ${colors.footerBg};
`

const Image = styled.img`
  height: 167px;
  object-fit: cover;
  margin-bottom: 8px;
`

const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
`

const Text = styled.p`
  font-size: 14px;
  line-height: 1.45;
  min-height: 88px;
  margin-bottom: 8px;
`

const Button = styled.button`
  width: 100%;
  background: ${colors.footerBg};
  color: ${colors.coral};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 0;
`

type Props = {
  product: MenuItem
  onOpenModal: (product: MenuItem) => void
}

const ProductCard = ({ product, onOpenModal }: Props) => {
  return (
    <Card>
      <Image src={product.foto} alt={product.nome} />
      <Title>{product.nome}</Title>
      <Text>{product.descricao}</Text>
      <Button onClick={() => onOpenModal(product)}>
        Comprar o produto
      </Button>
    </Card>
  )
}

export default ProductCard