import * as React from 'react';
import Button from '@mui/material/Button';

interface Props {
    title: string;
}

export default function BasicButtons({ title }: Props) {
  return (
    <Button variant="contained">{ title }</Button>
  );
}
