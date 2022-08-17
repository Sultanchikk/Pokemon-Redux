import React, { useState } from 'react';
import './DropDowns.css';

// Components MUI
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

// Icons MUI
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// Colors MUI

function DropDowns({ sortByPopularity }) {
  const [isActive, setIsActive] = useState(false);
  const [isActived, setIsActived] = useState(false);

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="dropdowns d-flex flex-column">
      <div className="first-dropdown">
        <h3 className="first-dropdown-btn">Поколение</h3>
        <KeyboardArrowUpIcon sx={{ cursor: 'pointer', ml: '2px' }} onClick={(e) => setIsActive(!isActive)} />
      </div>
      {isActive && (
        <div className="dropdown-content">
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}>
              <FormControlLabel
                sx={{ mt: '-50px', mb: '-10px' }}
                value="1-e"
                control={
                  <Radio
                  onClick={() => sortByPopularity('type')}
                    sx={{
                      '&.Mui-checked': { color: '#000000' },
                      '& .MuiSvgIcon-root': { fontSize: 28 },
                    }}
                  />
                }
                label="1-e"
              />
              <FormControlLabel
                sx={{ mb: '-10px' }}
                value="2-e"
                control={
                  <Radio
                  onClick={() => sortByPopularity('type')}
                    sx={{
                      '&.Mui-checked': { color: '#000000' },
                      '& .MuiSvgIcon-root': { fontSize: 28 },
                    }}
                  />
                }
                label="2-e"
              />
              <FormControlLabel
                sx={{ mb: '-10px' }}
                value="3-e"
                control={
                  <Radio
                  onClick={() => sortByPopularity('type')}
                    sx={{
                      '&.Mui-checked': { color: '#000000' },
                      '& .MuiSvgIcon-root': { fontSize: 28 },
                    }}
                  />
                }
                label="3-e"
              />
              <FormControlLabel
                sx={{ mb: '-10px' }}
                value="4-e"
                control={
                  <Radio
                    onClick={() => sortByPopularity('type')}
                    sx={{
                      '&.Mui-checked': { color: '#000000' },
                      '& .MuiSvgIcon-root': { fontSize: 28 },
                    }}
                  />
                }
                label="4-e"
              />
              <FormControlLabel
                sx={{ mb: '-10px' }}
                value="5-e"
                control={
                  <Radio
                    onClick={() => sortByPopularity('type')}
                    sx={{
                      '&.Mui-checked': { color: '#000000' },
                      '& .MuiSvgIcon-root': { fontSize: 28 },
                    }}
                  />
                }
                label="5-e"
              />
              <FormControlLabel
                sx={{ mb: '-10px' }}
                value="6-e"
                control={
                  <Radio
                    onClick={() => sortByPopularity('type')}
                    sx={{
                      '&.Mui-checked': { color: '#000000' },
                      '& .MuiSvgIcon-root': { fontSize: 28 },
                    }}
                  />
                }
                label="6-e"
              />
              <FormControlLabel
                sx={{ mb: '-10px' }}
                value="7-e"
                control={
                  <Radio
                    onClick={() => sortByPopularity('type')}
                    sx={{
                      '&.Mui-checked': { color: '#000000' },
                      '& .MuiSvgIcon-root': { fontSize: 28 },
                    }}
                  />
                }
                label="7-e"
              />
              <FormControlLabel
                sx={{ mb: '-10px' }}
                value="8-e"
                control={
                  <Radio
                    onClick={() => sortByPopularity('type')}
                    sx={{
                      '&.Mui-checked': { color: '#000000' },
                      '& .MuiSvgIcon-root': { fontSize: 28 },
                    }}
                  />
                }
                label="8-e"
              />
              <FormControlLabel
                sx={{ mb: '-30px' }}
                value="9-e и новее"
                control={
                  <Radio
                    onClick={() => sortByPopularity('type')}
                    sx={{
                      '&.Mui-checked': { color: '#000000' },
                      '& .MuiSvgIcon-root': { fontSize: 28 },
                    }}
                  />
                }
                label="9-e и новее"
              />
            </RadioGroup>
          </FormControl>
        </div>
      )}
      <div className="second-dropdown">
        <h3 className="second-dropdown-btn">Тип</h3>
        <KeyboardArrowUpIcon sx={{ cursor: 'pointer', ml: '11px' }} onClick={(e) => setIsActived(!isActived)} />
      </div>
      {isActived && (
        <div className="dropdown-content flex-column d-flex">
          <FormControlLabel
            sx={{ mt: '-40px' }}
            value="1-e"
            control={
              <Checkbox
                onClick={() => sortByPopularity('type')}
                sx={{
                  '&.Mui-checked': { color: '#000000' },
                  '& .MuiSvgIcon-root': { fontSize: 28 },
                }}
              />
            }
            label="1-e"
          />
          <FormControlLabel
            sx={{ mb: '-30px' }}
            value="2-e"
            control={
              <Checkbox
                onClick={() => sortByPopularity('type')}
                sx={{
                  '&.Mui-checked': { color: '#000000' },
                  '& .MuiSvgIcon-root': { fontSize: 28 },
                }}
              />
            }
            label="2-e"
          />
        </div>
      )}
      <div className="third-dropdown">
        <h3 className="third-dropdown-btn">Физические</h3>
        <KeyboardArrowUpIcon sx={{ cursor: 'pointer', mr: '2px' }} />
      </div>
      <div className="fourth-dropdown">
        <h3 className="fourth-dropdown-btn">Специалные</h3>
        <KeyboardArrowUpIcon sx={{ cursor: 'pointer' }} />
      </div>
    </div>
  );
}

export default DropDowns;
