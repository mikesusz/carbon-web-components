/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit-element';
import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import textNullable from '../../../.storybook/knob-text-nullable';
import ifNonNull from '../../globals/directives/if-non-null';
import { CAROUSEL_SIZE } from './carousel';
import './carousel-item';
import storyDocs from './carousel-story.mdx';

const noop = () => {};

const sizes = {
  'Regular size': null,
  [`Small size (${CAROUSEL_SIZE.SMALL})`]: CAROUSEL_SIZE.SMALL,
  [`XL size (${CAROUSEL_SIZE.EXTRA_LARGE})`]: CAROUSEL_SIZE.EXTRA_LARGE,
};

export const Default = args => {
  const { value, disableSelection, onBeforeSelect = noop, onSelect = noop, size } = args?.['bx-carousel'] ?? {};
  const handleBeforeSelected = (event: CustomEvent) => {
    onBeforeSelect(event);
    if (disableSelection) {
      event.preventDefault();
    }
  };
  return html`
    <bx-carousel
      value="${ifNonNull(value)}"
      @bx-carousel-beingselected="${handleBeforeSelected}"
      @bx-carousel-selected="${onSelect}"
      size="${size}">
      <bx-carousel-item value="all">Option 1</bx-carousel-item>
      <bx-carousel-item value="cloudFoundry" disabled>Option 2</bx-carousel-item>
      <bx-carousel-item value="staging">Option 3</bx-carousel-item>
      <bx-carousel-item value="dea">Option 4</bx-carousel-item>
      <bx-carousel-item value="router">Option 5</bx-carousel-item>
    </bx-carousel>
  `;
};

Default.storyName = 'Default';

export default {
  title: 'Components/Carousel',
  parameters: {
    ...storyDocs.parameters,
    knobs: {
      'bx-carousel': () => ({
        value: textNullable('The value of the selected item (value)', ''),
        size: select('Button size (size)', sizes, null),
        disableSelection: boolean(
          'Disable user-initiated selection change (Call event.preventDefault() in bx-carousel-beingselected event)',
          false
        ),
        onBeforeSelect: action('bx-carousel-beingselected'),
        onSelect: action('bx-carousel-selected'),
      }),
    },
  },
};
