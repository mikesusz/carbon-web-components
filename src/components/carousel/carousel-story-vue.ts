/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import createVueBindingsFromProps from '../../../.storybook/vue/create-vue-bindings-from-props';
import { Default as baseDefault } from './carousel-story';

export { default } from './carousel-story';

export const Default = args => {
  const props = (({ onBeforeSelect, onSelect, ...rest }) => {
    function handleBeforeSelect(this: any, event: CustomEvent) {
      onBeforeSelect(event);
      // NOTE: Using class property ref instead of closure ref (from `original`)
      // because updating event handlers via Storybook Vue `methods` (upon knob update) does not seem to work
      if (this.disableSelection) {
        event.preventDefault();
      }
    }
    return {
      ...rest,
      handleBeforeSelect,
      handleAfterSelect: onSelect,
    };
  })(args?.['bx-carousel']);
  return {
    template: `
      <bx-carousel
        :value="value"
        @bx-carousel-beingselected="handleBeforeSelect"
        @bx-carousel-selected="handleAfterSelect"
        :size="size"
      >
        <bx-carousel-item value="all">Option 1</bx-carousel-item>
        <bx-carousel-item value="cloudFoundry" disabled>Option 2</bx-carousel-item>
        <bx-carousel-item value="staging">Option 3</bx-carousel-item>
        <bx-carousel-item value="dea">Option 4</bx-carousel-item>
        <bx-carousel-item value="router">Option 5</bx-carousel-item>
      </bx-carousel>
    `,
    ...createVueBindingsFromProps(props),
  };
};

Object.assign(Default, baseDefault);
