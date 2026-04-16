import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RestaurantCard from '../components/RestaurantCard'
import { Restaurant } from '../types'

const Section = styled.section`
  padding: 80px 0 0;
`

const Grid = styled.div`
  width: 1024px;
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 472px);
  justify-content: space-between;
  row-gap: 48px;

  @media (max-width: 1050px) {
    grid-template-columns: 1fr;
    gap: 24px;
    width: 100%;
  }
`

const Status = styled.p`
  text-align: center;
  font-size: 18px;
  padding: 80px 0;
`

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data: Restaurant[]) => {
        setRestaurants(data)
      })
      .catch((error) => {
        console.error('Erro ao carregar restaurantes:', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <>
      <Header showHero />

      <Section>
        <div className="container">
          {loading ? (
            <Status>Carregando restaurantes...</Status>
          ) : (
            <Grid>
              {restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </Grid>
          )}
        </div>
      </Section>

      <Footer />
    </>
  )
}

export default Home