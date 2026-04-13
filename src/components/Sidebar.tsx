import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { colors } from '../styles/global'
import { RootState } from '../store'
import { close, remove } from '../store/reducers/cart'

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: ${colors.darkOverlay};
  z-index: 25;
`

const Panel = styled.aside`
  position: absolute;
  top: 0;
  right: 0;
  width: 360px;
  min-height: 100vh;
  background: ${colors.coral};
  padding: 32px 8px 16px;
  color: ${colors.footerBg};
`

const CartItem = styled.li`
  background: ${colors.footerBg};
  color: ${colors.coral};
  padding: 8px;
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 8px;
  margin-bottom: 16px;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  h4 {
    font-size: 18px;
    margin-bottom: 8px;
  }

  span {
    font-size: 14px;
  }
`

const RemoveButton = styled.button`
  position: absolute;
  right: 8px;
  bottom: 8px;
  background: transparent;
  color: ${colors.coral};
  font-size: 12px;
`

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 700;
  margin: 24px 0 16px;
`

const EmptyMessage = styled.p`
  font-size: 14px;
  line-height: 1.5;
`

const Sidebar = () => {
  const dispatch = useDispatch()
  const { isOpen, items } = useSelector((state: RootState) => state.cart)

  if (!isOpen) return null

  const totalPrice = items.reduce((acc, item) => acc + item.preco, 0)

  return (
    <Overlay onClick={() => dispatch(close())}>
      <Panel onClick={(e) => e.stopPropagation()}>
        {items.length === 0 ? (
          <EmptyMessage>Seu carrinho está vazio.</EmptyMessage>
        ) : (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h4>{item.nome}</h4>
                    <span>R$ {item.preco.toFixed(2)}</span>
                  </div>
                  <RemoveButton onClick={() => dispatch(remove(item.id))}>
                    remover
                  </RemoveButton>
                </CartItem>
              ))}
            </ul>

            <Total>
              <span>Valor total</span>
              <span>R$ {totalPrice.toFixed(2)}</span>
            </Total>
          </>
        )}
      </Panel>
    </Overlay>
  )
}

export default Sidebar