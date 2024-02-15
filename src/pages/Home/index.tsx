import Banner from '../../components/Banner'

import ProductsList from '../../components/ProductsList'
import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: promocoes, isLoading: isLoadingPromocoes } = useGetOnSaleQuery()
  const { data: emBreve, isLoading: isLoadingEmBreve } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductsList
        games={promocoes}
        title="Promoções"
        background="gray"
        id="on-sale"
        isLoading={isLoadingPromocoes}
      />
      <ProductsList
        games={emBreve}
        title="Em Breve"
        background="black"
        id="coming-soon"
        isLoading={isLoadingEmBreve}
      />
    </>
  )
}

export default Home
