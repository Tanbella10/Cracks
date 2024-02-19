import { useEffect, useState } from 'react';
import axios from 'axios';
import NormaList from '../componets/NormasList'
import Botones  from '../componets/Botones';
import Header from '../componets/header/Header';




function NormaPage() {
    const [normas, setNormas] = useState([]);

    

    useEffect(() => {
        async function fetchNorma() {
            const res = await axios.get('http://127.0.0.1:8000/normas');
            setNormas(res.data)
            console.log(res)
        }
        fetchNorma();
    }, [])

    const allcategories = [...new Set(normas.map(norma => norma.category))]

    console.log("allcat---",allcategories)
    const categories = allcategories
    console.log("vamos---",allcategories)
    const filtercategory =(category)=>{
        if (category === 'All') {
            setNormas(normas)
            return
        }
        const filterNorma = normas.filter(norma => norma.category === category);
        console.log("Tania",filterNorma)
        setNormas(filterNorma)

    }

    
    return(
    <>
        <Header/>
        <Botones categori={allcategories} filtercategory={filtercategory}/>
        <NormaList normas={normas}/>
       

        
    </> 
    );
    
}
export default NormaPage;