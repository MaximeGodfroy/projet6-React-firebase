//import flatsList from '../../datas/flatsList.json'
import { useLocation } from 'react-router-dom';
import styles from './FlatsSheets.module.css'
import Slideshow from '../../components/Slideshow';
import FlatDetails from '../../components/FlatDetails';
import FlatsCollapses from '../../components/FlatsCollapses';
import { useFetch } from "../../utils/hooks"
import styled, { keyframes } from 'styled-components'
import ErrorMessage from '../../components/ErrorMessage';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  padding: 10px;
  border: 6px solid #FF6060;
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
  margin-bottom: 20px;
  ${(props) => 
  props.$isCenter &&
`align-self: center;
margin-top: 20px;`}
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export default function FlatsSheets() {
    const sampleLocation = useLocation();
    const { data, isLoading, error } = useFetch(`https://kasa-a1ddf-default-rtdb.europe-west1.firebasedatabase.app/data.json`);
    const flatsList = data?.info;

    if(error) {
        return <span>Il y a un problème</span>
    }

    return (
        <>
            {isLoading ? (<LoaderWrapper>
          <Loader />
        </LoaderWrapper>) : flatsList.some((flat) => sampleLocation.pathname.endsWith(flat.id)) ? (flatsList.map((flat) => sampleLocation.pathname.endsWith(flat.id) &&
                <section key={flat.id} className={styles.flatSheet}>
                    <Slideshow title={flat.title} pictures={flat.pictures} />
                    <FlatDetails title={flat.title} location={flat.location} tags={flat.tags} hostName={flat.host.name} hostPicture={flat.host.picture} rating={flat.rating}/>
                    <FlatsCollapses description={flat.description} equipments={flat.equipments} />
                </section>)) : (<ErrorMessage />)
                
            }

        </>
    )
}