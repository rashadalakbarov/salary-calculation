import React from 'react'
import { Button, FormControlLabel, ListSubheader, Radio, RadioGroup, TextField } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ResultPage from './Result';

const GrossNett = () => {
    const [salary, setSalary] = React.useState('');
    const [error, setError] = React.useState(false);

    const [work, setWork] = React.useState('');
    const [concessionalType, setConcessionalType] = React.useState('unconcessional');
    const [benefit, setBenefit] = React.useState('');
    const [resultData, setResultData] = React.useState<{
        tax_salary: number;
        income_tax: number;
        dsmf: number;
        unemployment: number;
        mandatory: number;
        total_salary: number;
      } | null>(null);

    
    const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        // Regex: sadəcə rəqəm və nöqtə/vergül (istəyə bağlı)
        const isValid = /^[0-9]*\.?[0-9]*$/.test(value);

        if (!isValid && value !== '') {
            setError(true);
        } else {
            setError(false);
        }

        setSalary(value);
    };


    const handleCalculate = () => {

        if (!error && salary.trim() !== '' && !isNaN(Number(salary))) {

            if(work == 'concessional') {
                const salaryNumber = parseFloat(salary);

                const tax_salary_value = salaryNumber;            
                const income_tax_value = tax_salary_value < 200 ? 0 : tax_salary_value < 2500 ? (tax_salary_value - 200) * 0.14 : 350 + (tax_salary_value - 2500) * 0.25 ; 
                const dsmf_value = tax_salary_value * 0.03;
                const unemployment_value = tax_salary_value * 0.005;
                const mandatory_value = tax_salary_value <= 8000 ?  tax_salary_value * 0.02 : 160 + (tax_salary_value - 8000) * 0.005;
                const total_salary_value = tax_salary_value - income_tax_value - dsmf_value - unemployment_value - mandatory_value;

                const result = {
                    tax_salary: tax_salary_value,
                    income_tax: income_tax_value,
                    dsmf: dsmf_value,
                    unemployment: unemployment_value,
                    mandatory: mandatory_value,
                    total_salary: total_salary_value
                };
    
                setResultData(result);
            } else {
                const salaryNumber = parseFloat(salary);

                const tax_salary_value = salaryNumber;            
                const income_tax_value = tax_salary_value <= 8000 ? 0 : (tax_salary_value - 8000) * 0.14;
                const dsmf_value = tax_salary_value <= 200 ?  tax_salary_value * 0.03 : 6 + (tax_salary_value - 200) * 0.1;
                const unemployment_value = tax_salary_value * 0.005;
                const mandatory_value = tax_salary_value <= 8000 ?  tax_salary_value * 0.02 : 160 + (tax_salary_value - 8000) * 0.005;
                const total_salary_value = tax_salary_value - income_tax_value - dsmf_value - unemployment_value - mandatory_value;

                const result = {
                    tax_salary: tax_salary_value,
                    income_tax: income_tax_value,
                    dsmf: dsmf_value,
                    unemployment: unemployment_value,
                    mandatory: mandatory_value,
                    total_salary: total_salary_value
                };
    
                setResultData(result);
            }
            
        } else {
            console.warn('Xəta: Məlumatları düzgün daxil edin');
            setResultData(null);
        }

    };

  return (
    <>
        <div className="grid grid-cols-1 sm:grid-cols-2 space-y-2 gap-10">
            <TextField id="standard-basic" label={`"GROSS" aylıq əməkhaqqı:`} variant="standard" fullWidth value={salary} onChange={handleSalaryChange} error={error} helperText={error ? 'Zəhmət olmasa yalnız rəqəm daxil edin.' : ''} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />

            <FormControl fullWidth variant='standard'>
                <InputLabel id="work-category-select-label">İş kateqoriyası:</InputLabel>
                <Select labelId="work-category-select-label" id="work-category-select" value={work} label="Work Area" onChange={(e) => setWork(e.target.value)} >
                    <MenuItem value={'concessional'}> Dövlət və neft sektoru</MenuItem>
                    <MenuItem value={'unconcessional'}>Qeyri-dövlət və qeyri-neft sektoru</MenuItem>
                </Select>
            </FormControl>      
            
            <div>
                <FormControl>
                    <RadioGroup row defaultValue="unconcessional" value={concessionalType} onChange={(e) => setConcessionalType(e.target.value)}>
                        <FormControlLabel value="unconcessional" control={<Radio />} label="Güzəştsiz" />
                        <FormControlLabel value="concessional" control={<Radio />} label="Güzəştli" />
                    </RadioGroup>
                </FormControl>
            </div>
        </div>

        { concessionalType === "concessional" && (
                <FormControl fullWidth variant='standard' sx={{marginTop: "20px"}}>
                    <InputLabel htmlFor="grouped-select">Güzəşti seçin</InputLabel>
                    <Select id="grouped-select" value={benefit} onChange={(e) => setBenefit(e.target.value)}>
                        <MenuItem value="">
                            <em>Heç biri</em>
                        </MenuItem>
                        <ListSubheader>Category 1</ListSubheader>
                        <MenuItem value={1}>Option 1</MenuItem>
                        <MenuItem value={2}>Option 2</MenuItem>

                        <ListSubheader>Category 2</ListSubheader>
                        <MenuItem value={3}>Option 3</MenuItem>
                        <MenuItem value={4}>Option 4</MenuItem>
                    </Select>
                </FormControl> 
            )
        }

        <Button variant="outlined" sx={{ marginTop: '20px' }} onClick={handleCalculate}>Hesabla</Button>

        {resultData !== null && <ResultPage {...resultData} />}
    </>
  )
}

export default GrossNett