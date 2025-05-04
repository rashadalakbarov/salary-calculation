import React from 'react'

import { Divider } from '@mui/material'

interface ResultPageProps {
    tax_salary: number;
    income_tax: number;
    dsmf: number;
    unemployment: number;
    mandatory: number;
    total_salary: number;
}

const ResultPage = ({ tax_salary, income_tax, dsmf, total_salary, mandatory, unemployment }:ResultPageProps) => {
  return (
    <div className="mt-10">
        <Divider />
        
        <div className="grid grid-cols-1 gap-4 space-x-4 mt-7 mb-8">
            <div>
                <span className="font-bold">Vergiyə cəlb olunan məbləğ: </span>
                <span>{tax_salary.toFixed(2)} &#8380;</span>
            </div>
            <div>
                <span className="font-bold">Gəlir vergisi: </span>
                <span>{income_tax.toFixed(2)} &#8380;</span>
            </div>
            <div>
                <span className="font-bold">DSMF ayırmaları: </span>
                <span>{dsmf.toFixed(2)} &#8380;</span>
            </div>
            <div>
                <span className="font-bold">İşsizlikdən sığorta haqqı: </span>
                <span>{unemployment.toFixed(2)} &#8380;</span>
            </div>
            <div>
                <span className="font-bold">İcbari tibbi sığorta haqqı: </span>
                <span>{mandatory.toFixed(2)} &#8380;</span>
            </div>            
        </div>

        <span className="text-white bg-green-600 p-3 rounded">{`"NETT" əməkhaqqı: `} {total_salary.toFixed(2)} &#8380;</span>

        <Divider sx={{marginTop: "32px"}} />
        
        <div className="grid grid-cols-1 gap-4 space-x-4 mt-7 mb-8">
            <div className='flex flex-col'>
                <span className="font-bold">Gəlir vergisi:</span>
                <span>Vergiyə cəlb olunan məbləğ 8 000 manatadək olduqda: 0%</span>
                <span>Vergiyə cəlb olunan məbləğ 8 000 manatdan çox olduqda: Vergiyə cəlb olunan məbləğ * 14%</span>
            </div>

            <div className='flex flex-col'>
                <span className="font-bold">DSMF ayırmaları:</span>
                <span>Əməkhaqqı 200 manatadək olduqda: Sığorta haqqına cəlb edlilən aylıq gəlir * 3%</span>
                <span>Əməkhaqqı 200 manatdan çox olduqda: 6 + (Hesablanan aylıq əməkhaqqı-200) * 10%</span>
            </div>

            <div className='flex flex-col'>
                <span className="font-bold">İşsizlikdən sığorta haqqı:</span>
                <span>Hesablanan aylıq əməkhaqqı * 0.5%</span>
            </div>    

            <div className='flex flex-col'>
                <span className="font-bold">İcbari tibbi sığorta haqqı:</span>
                <span>Əməkhaqqı 8000 manatadək olduqda: Hesablanan aylıq əməkhaqqı*2%</span>
                <span>Əməkhaqqı 8000 manatdan çox olduqda: 160 + (Hesablanan aylıq əməkhaqqı-8000) * 0.5%</span>
            </div>

            <div className='flex flex-col'>
                <span className="font-bold">Yekun ödəniləcək məbləğ:</span>
                <span>Hesablanan əməkhaqqı - Gəlir vergisi - DSMF ayırmaları - İşsizlikdən sığorta haqqı - İcbari tibbi sığorta haqqı</span>
            </div>
        </div>
    </div>
  )
}

export default ResultPage