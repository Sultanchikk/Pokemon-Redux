import React from 'react';
import './Footer.css';

// MUI Icons
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';

function Footer() {
  return (
    <div className="Foot">
      <div className="Footer">
        <div className="title">
          <p>Подпишитесь на нас!</p>
        </div>
        <div className="contacts">
          <a href="https://youtu.be/besuhAY4h70">
            <InstagramIcon sx={{ color: '#ffffff' }} />
          </a>
          <a href="https://youtu.be/kFv3476YVbU">
            <FacebookIcon sx={{ color: '#ffffff' }} />
          </a>
          <a href="https://youtu.be/JbXtfdkkRxg">
            <TelegramIcon sx={{ color: '#ffffff' }} />
          </a>
          <a href="https://youtu.be/LiqIQ5He7_4">
            <YouTubeIcon sx={{ color: '#ffffff' }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
