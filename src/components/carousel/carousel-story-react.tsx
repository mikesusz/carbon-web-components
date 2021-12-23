/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
// Below path will be there when an application installs `carbon-web-components` package.
// In our dev env, we auto-generate the file and re-map below path to to point to the generated file.
// @ts-ignore
import BXCarousel from 'carbon-web-components/es/components-react/carousel/carousel';
// @ts-ignore
import BXCarouselItem from 'carbon-web-components/es/components-react/carousel/carousel-item';
import { Default as baseDefault } from './carousel-story';

export { default } from './carousel-story';

export const Default = args => {
  const { value, disableSelection, onBeforeSelect, onSelect, size } = args?.['bx-carousel'];
  const handleBeforeSelected = (event: CustomEvent) => {
    onBeforeSelect(event);
    if (disableSelection) {
      event.preventDefault();
    }
  };
  return (
    <BXCarousel value={value} onBeforeSelect={handleBeforeSelected} onSelect={onSelect} size={size}>
      <BXCarouselItem value="all">Option 1</BXCarouselItem>
      <BXCarouselItem value="cloudFoundry" disabled>
        Option 2
      </BXCarouselItem>
      <BXCarouselItem value="staging">Option 3</BXCarouselItem>
      <BXCarouselItem value="dea">Option 4</BXCarouselItem>
      <BXCarouselItem value="router">Option 5</BXCarouselItem>
    </BXCarousel>
  );
};

Object.assign(Default, baseDefault);
