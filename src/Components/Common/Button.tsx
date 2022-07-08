import * as React from 'react';
import Button from '@mui/material/Button';

interface Props {
    title: string;
    handleAction: () => void;
}

export default function BasicButtons({ title, handleAction }: Props) {
  return (
    <Button variant="contained" onClick={handleAction}>{ title }</Button>
  );
}
