import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/Header'
import Banner from '../components/Banner'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'
import Modal from '../components/Modal'
import Sidebar from '../components/Sidebar'
import { MenuItem, Restaurant } from '../types'

const ProductsSection = styled.section`
  padding: 56px 0 0;
`

const Grid = styled.div`
  width: 1024px;
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 320px);
  justify-content: space-between;
  row-gap: 32px;

  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

const Status = styled.p`
  text-align: center;
  font-size: 18px;
  padding: 80px 0;
`

const Profile = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null)

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data: Restaurant[]) => {
        const foundRestaurant = data.find((item) => item.id === Number(id)) || null
        setRestaurant(foundRestaurant)
      })
      .catch((error) => {
        console.error('Erro ao carregar restaurante:', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [id])

  if (loading) return <Status>Carregando restaurante...</Status>
  if (!restaurant) return <Status>Restaurante não encontrado.</Status>

  return (
    <>
      <Header />

      <Banner
        image={restaurant.capa}
        category={restaurant.tipo}
        title={restaurant.titulo}
      />

      <ProductsSection>
        <div className="container">
          <Grid>
            {restaurant.cardapio.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                onOpenModal={setSelectedProduct}
              />
            ))}
          </Grid>
        </div>
      </ProductsSection>

      <Footer />

      {selectedProduct && (
        <Modal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      <Sidebar />
    </>
  )
}

export default Profile