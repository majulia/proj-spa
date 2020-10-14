import React from 'react';
import HeroSection from '../../HeroSection'
import { homeObjThree} from './Data';

export default function Login() {
  return (
    <>
      <HeroSection {...homeObjThree} />
    </>
  );
}