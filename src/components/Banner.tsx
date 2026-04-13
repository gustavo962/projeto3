import styled from 'styled-components'

const Wrapper = styled.section<{ $bg: string }>`
  height: 280px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(${(props) => props.$bg});
  background-size: cover;
  background-position: center;
`

const Content = styled.div`
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 140px;
  padding: 32px 0;
`

const Category = styled.span`
  font-size: 32px;
  font-weight: 100;
`

const Title = styled.h2`
  font-size: 32px;
  font-weight: 900;
`

type Props = {
  image: string
  category: string
  title: string
}

const Banner = ({ image, category, title }: Props) => {
  return (
    <Wrapper $bg={image}>
      <div className="container">
        <Content>
          <Category>{category}</Category>
          <Title>{title}</Title>
        </Content>
      </div>
    </Wrapper>
  )
}

export default Banner