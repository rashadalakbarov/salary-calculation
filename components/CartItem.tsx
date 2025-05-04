'use client';

import { Card, CardActionArea, Typography } from '@mui/material';
import Link from 'next/link';

interface CardItemProps {
  title: string;
  imageUrl: string;
  slug: string;
}

const CardItem = ({ title, imageUrl, slug }: CardItemProps) => {
  return (
    <Link href={slug}>
      <Card className="w-full h-100 relative overflow-hidden cursor-pointer group">
        <CardActionArea className="h-full">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="absolute inset-0 flex items-end p-4">
            <Typography variant="h6" className="text-white font-bold z-10">
              {title}
            </Typography>
          </div>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default CardItem;
