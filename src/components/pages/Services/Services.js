import React from 'react';
import HeroSection from '../../HeroSection'
import { homeObjOne} from './Data';
import Pricing from '../../Pricing';

export default function Services() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjOne} />
    </>
  );
}