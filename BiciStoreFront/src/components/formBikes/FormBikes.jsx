import { useEffect, useState } from "react";


const FormBikes = ({ addBike, updateBike, currentBike }) => {

    const [bike, setBike] = useState({ title: '', price: '' });

    useEffect(() => {
        if (currentBike) setBike(currentBike);
        else setBike({ title: '', price: '' });
    }, [currentBike]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBike({ ...bike, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!bike.title || bike.price <= 0) {
            alert('Ingresar datos validos');
            return;
        }
        if (bike.id) updateBike(bike);
        else addBike({ ...bike, id: Date.now() });
        setBike({ title: '', price: '' });
    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text" name="title"
                    placeholder="Titulo de Bici"
                    value={bike.title}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Precio"
                    value={bike.price}
                    onChange={handleChange}
                    required
                />
                <button type="submit">{bike.id ? "Actualizar" : "Agregar"}</button>
            </form>
        </>
    );
};

export default FormBikes;