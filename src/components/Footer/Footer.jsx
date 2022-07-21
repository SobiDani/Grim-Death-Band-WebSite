import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div>
        <ul className='footer'>
            <li><p>GrimDeath 2022®</p></li>
            <li><a href="https://www.instagram.com/grimdeathwoe/"><img src='https://cdn-icons-png.flaticon.com/128/174/174855.png' alt='instagramLogo' ></img></a></li>
            <li><a href="https://www.youtube.com/channel/UCc0rdInCLne247-VQUJw4YA"><img src='https://cdn-icons-png.flaticon.com/128/174/174883.png' alt='youtubeLogo' ></img></a></li>
            <li><a href="https://open.spotify.com/artist/3M9oFj9bipIQQTJrKfnOlF?si=kd2rGev0Sh61-yse_mVOug"><img src='https://cdn-icons-png.flaticon.com/512/174/174872.png' alt='spotifyLogo' ></img></a></li>
            <li><a href="mailto:grimdeathwoe@gmail.com"><img src='https://cdn-icons-png.flaticon.com/128/3515/3515399.png' alt='emailLogo' ></img></a></li>
        </ul>
    </div>
  )
}

export default Footer