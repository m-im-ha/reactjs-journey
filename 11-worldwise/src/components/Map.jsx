import { useNavigate, useSearchParams } from 'react-router-dom'
import styles from './Map.module.css'
function Map() {
    const navigator = useNavigate();

    const [searchParams,setSearchParams] = useSearchParams();
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");
    // console.log(lat,lng);

    return (
        <div className={styles.mapContainer} onClick={()=>navigator("form")} >
            <h1>Map</h1>
            <h1>position : {lat},{lng}</h1>
        </div>
    )
}

export default Map

