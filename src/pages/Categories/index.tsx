import {
  useGetSportsGamesQuery,
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery
} from '../../services/api'
import ProductsList from '../../components/ProductsList'

const Categories = () => {
  const { data: gamesAcao, isLoading: isLoadingAcao } = useGetActionGamesQuery()
  const { data: gamesEsporte, isLoading: isLoadingEsporte } =
    useGetSportsGamesQuery()
  const { data: gamesSimulacao, isLoading: isLoadingSimulacao } =
    useGetSimulationGamesQuery()
  const { data: gamesLuta, isLoading: isLoadingLuta } = useGetFightGamesQuery()
  const { data: gamesRpg, isLoading: isLoadingRpg } = useGetRpgGamesQuery()

  return (
    <>
      <ProductsList
        games={gamesAcao}
        title="Ação"
        background="gray"
        id="action"
        isLoading={isLoadingAcao}
      />
      <ProductsList
        games={gamesEsporte}
        title="Esportes"
        background="black"
        id="sports"
        isLoading={isLoadingEsporte}
      />
      <ProductsList
        games={gamesSimulacao}
        title="Simulação"
        background="gray"
        id="simulation"
        isLoading={isLoadingSimulacao}
      />
      <ProductsList
        games={gamesLuta}
        title="Luta"
        background="black"
        id="fight"
        isLoading={isLoadingLuta}
      />
      <ProductsList
        games={gamesRpg}
        title="RPG"
        background="gray"
        id="rpg"
        isLoading={isLoadingRpg}
      />
    </>
  )
}

export default Categories
