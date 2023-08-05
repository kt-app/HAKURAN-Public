
import React, { useRef, useState } from 'react'
import {
  OrbitControls,
  useGLTF,
  GradientTexture,
  Points, PointMaterial
  , SpotLight, useDepthBuffer
} from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber'


import { Vector3 } from 'three'


import * as random from 'maath/random/dist/maath-random.esm'

import '@splidejs/react-splide/css';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';





// ---code---










const C306 = () => {
  return (
    <div style={{ position: 'relative' }}>
      <BGCAN />



      <Screen />

      <Contents306 />
    </div>
  );
};

export default C306;