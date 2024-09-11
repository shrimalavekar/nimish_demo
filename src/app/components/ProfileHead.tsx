import React from 'react';
import { Box, Avatar } from '@mui/material';
import Image from 'next/image';
import backrounImg from '../assets/Group 61@2x.png'; // Adjust the path accordingly
import { profileDetails } from '../constant/commonConstant';
import profileImg from '../assets/profileImg.png'; // Import the image

const ProfileHead: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "18%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderBottom: "1px solid #707070",
          background: "#25272c",
        }}
      >
  <div
          style={{
            position: 'absolute',
            top: '70px',
            left: '65px',
            width: '150px',
            height: '150px',
            border: '3px solid white',
            borderRadius: '10px',
            zIndex: 100,
            overflow: 'hidden',
          }}
        >
          <Image
            src={profileImg}
            alt="avatar"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Box>
      <div
        style={{
          position: 'absolute',
          top: '-50px',
          width: '100%',
          zIndex: 10,
          height: '250px',
          objectFit: 'cover',
        }}
      >
        <Image
          src={backrounImg}
          alt="background"
          layout="fill"
          objectFit="cover"
          style={{
            position: 'absolute',
            width: '100%',
            left: '0px',
            top: '-23px',
            right: '0',
            bottom: '0',
            objectFit: 'cover',
            color: 'transparent',
          }}
        />
      </div>
    </>
  );
};

export default ProfileHead;