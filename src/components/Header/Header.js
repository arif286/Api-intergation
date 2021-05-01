import React from 'react';
import banner from '../../sports-mania-main/Icon/banner3.jpg';
import logo from '../../sports-mania-main/Leauge Logo/image 4.png';

const Header = ({bannerDetails, leagueBanner,leagueLogo,leagueName}) => {

    const bgBanner ={
        homeBanner:{
            backgroundImage: `url(${banner})`,
            backgroundRepeat: 'no-repeat, repeat',
            width: '100%',
            height: '550px',
            backgroundSize: 'cover'
        },
        teamsBanner: {
            backgroundImage: `linear-gradient(#0b7a92a6, #b9352ba8),url(${ leagueBanner || banner})`,
            backgroundRepeat: 'no-repeat, repeat',
            width: '100%',
            height: '550px',
            backgroundSize: 'cover'
        },
        leagueLayer: {
            fontSize: '25px',
            fontWeight: 700,
            width: '120px',
            color: '#3e1051',
            marginLeft: '15px'
        }
        
    }
    let showBanner;
    if (bannerDetails) {
        showBanner = <div style={bgBanner.homeBanner} className='d-flex justify-content-center align-items-center'>
        <h1 style={{color:'white'}}>World Class Supper Leagues</h1>
    </div>
    }
    else {
        showBanner = <div style={bgBanner.teamsBanner} className='d-flex justify-content-center align-items-center'>
            <div className='d-flex justify-content-center align-items-center'>
            <img className="w-25" src={leagueLogo || logo} alt=''/>
            <p className="text-wrap" style={bgBanner.leagueLayer}>{leagueName}</p>
        </div>
    </div>
    }
    return (
        <>
            {showBanner}
        </>
    );
};

export default Header;