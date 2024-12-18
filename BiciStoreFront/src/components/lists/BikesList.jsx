import React from "react";

const BikeList = ({ bikes, setCurrentBike, deleteBike }) => {
    return (
        <>
            <ul>
                {bikes.map((bike) => (
                    <li key={bike.id}>
                        {bike.name} - ${bike.price}
                        <button onClick={() => setCurrentBike(bike)}> Editar </button>
                        <button onClick={() => deleteBike(bike.id)}> Eliminar </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default BikeList;