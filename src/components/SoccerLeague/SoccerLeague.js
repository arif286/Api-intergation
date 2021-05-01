import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from "react-router-dom";
import badge from '../../sports-mania-main/Leauge Logo/image 4.png';

const SoccerLeague = (props) => {
 
    let history = useHistory();

    const handleClick = (teamId) => {
        history.push(`/team/${teamId}`);
    }
    const {strBadge, strLeague, strSport,idLeague} = props.league
    return (
       
        <div className="col mb-4">
            <div className="card shadow  h-100">
                <div className="d-flex justify-content-center">
                    <img src={strBadge || badge} className="card-img-top w-50" alt=""/>
                </div>
                <div className="card-body text-center">
                    <h6 className="card-title">{strLeague}</h6>
                    <p className="card-text">Sports type: {strSport}</p>
                    <button style={{backgroundColor:'#009688'}} onClick={() => {handleClick(idLeague)}} className="btn btn-primary">Explore <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
            </div>
        </div>
    );
};

export default SoccerLeague;