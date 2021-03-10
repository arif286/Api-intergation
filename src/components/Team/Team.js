import React, { useEffect, useState } from 'react';
import {
    useParams
} from "react-router-dom";
import flag from '../../sports-mania-main/Icon/flag.png';
import football from '../../sports-mania-main/Icon/football.png';
import found from '../../sports-mania-main/Icon/found.png';
import gander from '../../sports-mania-main/Icon/male.png';
import female from '../../sports-mania-main/Photo/female.png';
import male from '../../sports-mania-main/Photo/male.png';
import Header from '../Header/Header';

const Team = () => {
    const teamStyle = {
        media: { marginBottom: 0, color: 'white' },
        widthHeight: { width:'20px', height:'20px'}
    }
    let { teamId } = useParams();
    const [teams, setTeams] = useState({});
    const { strLeague, strGender, strCountry, strSport, dateFirstEvent, strDescriptionEN} = teams;

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${teamId}`
        fetch(url)
        .then(res=> res.json())
            .then(data => {
                setTeams(data.leagues[0])
            console.log(data.leagues[0])})
    }, [teamId]);

    let gender;
    if (strGender === "Male") {
        gender = <img className='w-100 p-3' src={male} alt=''/>
    }
    else {
        gender = <img className='w-100 p-3' src={female} alt=''/>
    }
    return (
      <>
        <Header/>    
        <div className='container mt-3'>
            <div style={{backgroundColor:'cadetblue', borderRadius:'12px'}} className="row">
                 <div className="col-md-6 col-sm-12 p-5">
                    <h2 style={{color:'white'}}>{strLeague}</h2>

                    <div className="d-flex align-items-center py-1">
                        <img  style={teamStyle.widthHeight} src={found} alt='' />
                        <p style={teamStyle.media} className='px-3'>Founded: {dateFirstEvent}</p>
                    </div>

                    <div className="d-flex align-items-center py-1">
                        <img  style={teamStyle.widthHeight} src={flag} alt='' />
                        <p style={teamStyle.media} className='px-3'>country: {strCountry}</p>
                    </div>

                    <div className="d-flex align-items-center py-1">
                        <img  style={teamStyle.widthHeight} src={football} alt='' />
                        <p style={teamStyle.media} className='px-3'>Sport Type: {strSport}</p>
                    </div>

                    <div className="d-flex align-items-center py-1">
                        <img  style={teamStyle.widthHeight} src={gander} alt='' />
                        <p style={teamStyle.media} className='px-3'>Gender: {strGender}</p>
                    </div>
                </div>
                <div style={{ paddingRight:0}} className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                    {gender}
                </div>  
            </div>
            <div className='row mt-3'>
                <div className="col-md-12">
                    <p>{strDescriptionEN}</p>
                </div>
            </div>
        </div>
     </>
    );
};

export default Team;