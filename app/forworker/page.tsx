import React from 'react'

import { Breadcrumbs, Typography } from '@mui/material'
import Link from '@mui/material/Link';
import TabsContent from '@/components/TabsContent';

const WorkerPage = () => {
  return (
    <>
        <h1 className="mx-auto mt-4 mb-6 text-2xl">Muzdlu işçilər üçün</h1>
        <Breadcrumbs aria-label="breadcrumb" className="mb-3">
            <Link underline="hover" color="inherit" href="/">
                Əməkhaqqından tutulmaların hesablanması
            </Link>
            <Typography sx={{ color: 'text.primary' }}>Muzdlu işçilər üçün</Typography>
        </Breadcrumbs>
        <TabsContent/>
    </>
  )
}

export default WorkerPage