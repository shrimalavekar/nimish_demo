import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { jobTitles } from '../constant/commonConstant';

const JobTitleText: React.FC = () => {
  
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const word = jobTitles[currentWordIndex];
    const interval = setInterval(() => {
      if (currentLetterIndex < word.length) {
        setDisplayedText((prev) => prev + word[currentLetterIndex]);
        setCurrentLetterIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentLetterIndex(0);
          setDisplayedText("");
          setCurrentWordIndex((prev) => (prev + 1) % jobTitles.length);
        }, 1000); // Wait 1 second before moving to the next word
      }
    }, 100); // Adjust the speed of typing here

    return () => clearInterval(interval);
  }, [currentWordIndex, currentLetterIndex]);

  return (
    <Typography variant="body1"   style={{fontSize:"20px"}} >
      {displayedText}
    </Typography>
  );
};

export default JobTitleText;