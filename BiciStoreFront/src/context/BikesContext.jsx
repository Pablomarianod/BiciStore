import React, { createContext, useContext, useEffect, useState } from "react";

// Crear contexto
const BikesContext = createContext();

// Hook personalizado apra acceder al contexto
export const useBikes = () => useContext(BikesContext);

// Proveedor del contexto(seria el bikesContext de abajo)
export const BikeProvider = ({ children }) => {
    const [bikes, setBikes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBikes = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products");
                if (!res.ok) throw new Error("Error al cargar productos");
                const data = await res.json();
                setBikes(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchBikes();
    }, []);

    // CRUD

    // GET

    // POST
    const addBike = (bike) => setBikes([...bikes, bike]);

    // PUT
    const updateBike = (updatedBike) => {
        setBikes(
            bikes.map((bike) =>
                bike.id === updatedBike.id ? updatedBike : bike
            )
        );
    };

    // DELETE

    const deleteBike = (id) => {
        setBikes(bikes.filter((bike) => bike.id !== id));
    };

    return(
        <BikesContext.Provider
        value ={{
            bikes, loading, error, addBike, updateBike, deleteBike,
        }}>
            {children}
        </BikesContext.Provider>
    );
    
};