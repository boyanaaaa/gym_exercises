import React from 'react'
import { Box } from '@mui/material';
import BodyPart from './BodyPart';


function HorizontalScrollBar({ data, bodyPart, setBodyPart }) {
  return (
    <div>
        {data.map((item) => 
        <Box 
            key={item.id || item} 
            temId={item.id || item} 
            title={item.id || item} 
            m =" 0 40px"
            >
            <BodyPart item={item} bodyPart={bodyPart} setBodypart={setBodyPart} />
        </Box>
        )}

    </div>
  )
}

export default HorizontalScrollBar