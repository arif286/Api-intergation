import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SoccerLeague from '../SoccerLeague/SoccerLeague';

const Home = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England'
        fetch(url)
        .then(res=>res.json())
        .then(data =>setLeagues(data.countrys.slice(0,15)))
        
    }, []);
    console.log(leagues)
    return (
        <>
            <Header/>
            <div className='container mt-5'>
                <div className="row row-cols-1 row-cols-md-3 row-cols-sm-1">
                    {
                    leagues.map((league) => <SoccerLeague league={league} id={league.idLeague}/>)
                    }
                </div>
            </div>
        </>
    );
};

export default Home;