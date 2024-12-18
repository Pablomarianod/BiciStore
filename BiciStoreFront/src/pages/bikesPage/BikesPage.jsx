import { useState } from "react";
import FormBikes from "../../components/formBikes/FormBikes";
import { useBikes } from "../../context/BikesContext";
import BikeList from "../../components/lists/BikesList";

const BikesPages = () => {

    const { bikes, loading, error, addBike, updateBike, deleteBike } = useBikes();
    const [currentBike, setCurrentBike] = useState(null);

    if (loading) return <p>Cargando productos...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <>
            <h2>Aqui se Muestran todas las Bicicletas:</h2>
            <FormBikes
                addBike={addBike}
                updateBike={updateBike}
                currentBike={currentBike}
            />
            <BikeList
                bikes={bikes}
                setCurrentBike={setCurrentBike}
                deleteBike={deleteBike}
            />
        </>
    );
};

export default BikesPages;