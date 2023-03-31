import { Link } from "react-router-dom"
import styles from './Card.module.css'
//import flatsList from '../../datas/flatsList.json'
import { useFetch } from "../../utils/hooks"
import styled, { keyframes } from 'styled-components'

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

export default function Card() {
    const { data, isLoading, error } = useFetch(`https://kasa-a1ddf-default-rtdb.europe-west1.firebasedatabase.app/data.json`);
    const flatsList = data?.info;

    if(error) {
        return <span>Il y a un problème</span>
    }


    return (
        <>
        { isLoading ? (<LoaderWrapper>
          <Loader />
        </LoaderWrapper>) : 
          (<div className={styles.cardContainer}>
            {flatsList.map((flat) => (
                <Link to={`/projet6-React-firebase/flat/${flat.id}`}
                    key={flat.id}
                    title={flat.title}
                    picture={flat.cover}
                    className={styles.link}
                ><div className={styles.card}>
                        <img src={flat.cover} alt={flat.title} /> <p className={styles.p}>{flat.title}</p>
                    </div>
                </Link>
            ))}
        </div>)  
        }
        </>
        
        
    )
}