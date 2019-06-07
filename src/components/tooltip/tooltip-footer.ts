import settings from 'carbon-components/es/globals/js/settings';
import { html, customElement, LitElement } from 'lit-element';
import styles from './tooltip.scss';

const { prefix } = settings;

/**
 * Tooltip footer.
 */
@customElement(`${prefix}-tooltip-footer` as any)
class BXTooltipFooter extends LitElement {
  render() {
    return html`
      <slot></slot>
    `;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default BXTooltipFooter;