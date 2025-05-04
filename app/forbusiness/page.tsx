import React from 'react'

import { Breadcrumbs, Typography } from '@mui/material'
import Link from '@mui/material/Link';

const BusinessPage = () => {
  return (
    <>
        <h1 className="mx-auto mt-4 mb-6 text-2xl">İşə götürənlər üçün</h1>
        <Breadcrumbs aria-label="breadcrumb" className="mb-3">
            <Link underline="hover" color="inherit" href="/">
                Əməkhaqqından tutulmaların hesablanması
            </Link>
            <Typography sx={{ color: 'text.primary' }}>İşə götürənlər üçün</Typography>
        </Breadcrumbs>

        <div className="mt-10">
            content
        </div>
    </>
  )
}

export default BusinessPage