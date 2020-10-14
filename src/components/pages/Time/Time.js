import React from 'react';
import HeroSection from '../../HeroSection'
import { homeObjTwo} from './Data';

export default function Time() {
  return (
    <>
      <HeroSection {...homeObjTwo} />
    </>
  );
}