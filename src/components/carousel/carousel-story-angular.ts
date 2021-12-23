/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';
import baseStory, { Default as baseDefault } from './carousel-story';

export const Default = args => ({
  template: `
    <bx-carousel
      [value]="value"
      (bx-carousel-beingselected)="handleBeforeSelect($event)"
      (bx-carousel-selected)="handleAfterSelect($event)"
      [size]="size"
    >
      <bx-carousel-item value="all">Option 1</bx-carousel-item>
      <bx-carousel-item value="cloudFoundry" disabled>Option 2</bx-carousel-item>
      <bx-carousel-item value="staging">Option 3</bx-carousel-item>
      <bx-carousel-item value="dea">Option 4</bx-carousel-item>
      <bx-carousel-item value="router">Option 5</bx-carousel-item>
    </bx-carousel>
  `,
  props: (({ disableSelection, onBeforeSelect, onSelect, ...rest }) => {
    const handleBeforeSelect = (event: CustomEvent) => {
      onBeforeSelect(event);
      if (disableSelection) {
        event.preventDefault();
      }
    };
    return {
      ...rest,
      handleBeforeSelect,
      handleAfterSelect: onSelect,
    };
  })(args?.['bx-carousel']),
});

Object.assign(Default, baseDefault);

export default Object.assign(baseStory, {
  decorators: [
    moduleMetadata({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
  ],
});
