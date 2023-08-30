import { useState, useEffect } from "react";


const filtroInfo = (cd) => {
    return cd.name.toLowerCase();
};



const MiApi = () => {
    const [info, setInfo] = useState([]);
    const consultarApi = async () => {
        const url = "https://digimon-api.vercel.app/api/digimon";
        const response = await fetch(url);
        const json = await response.json();
        const jsonSort = json.sort((a, b) => a.name.localeCompare(b.name)
        );
        setInfo(jsonSort);
    };

    useEffect(() => {
        consultarApi();
    }, []);

    return (
        <>
            {info.filter(filtroInfo).map((cd, index) => (
                <div key={index} className="divApiInfo">
                    <img src={cd.img} alt="picture" />
                    <h1>Nombre: {cd.name}</h1>
                    <h2>Nivel: {cd.level}</h2>
                </div>
            ))}
        </>
    );
}
export default MiApi;
