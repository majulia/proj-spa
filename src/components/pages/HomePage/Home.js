import React from 'react';
import HeroSection from '../../HeroSection'
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour} from './Data';
import Pricing from '../../Pricing';

export default function HomePage() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Pricing />
      <HeroSection {...homeObjFour} />

    </>
  );
}