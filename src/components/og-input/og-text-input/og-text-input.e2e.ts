import { E2EPage, E2EElement, newE2EPage } from "@stencil/core/dist/testing";

describe('og-text-input', () => {
  let page: E2EPage;
  let component: E2EElement;

  beforeEach(async () => {
    page = await newE2EPage();

    await page.setContent('<og-text-input></og-text-input>');
    component = await page.find('og-text-input');
  })

  it('renders', async () => {
    expect(component).toHaveClass('hydrated');
  });

  it('renders disabled state on input element', async () => {
    const input = await page.find('og-text-input >>> textarea');

    component.setProperty('disabled', true);
    await page.waitForChanges();
    expect(input.getAttribute('disabled')).not.toBeNull();

    component.setProperty('disabled', false);
    await page.waitForChanges();
    expect(input.getAttribute('disabled')).toBeNull();
  });

  it('applies value on input element', async () => {
    const input = await page.find('og-text-input >>> textarea');

    component.setProperty('value', 'orgenic-ui');
    await page.waitForChanges();
    expect(await input.getProperty('value')).toEqual('orgenic-ui');
  });

  it('represents components value property according to typed input string', async () => {
    const input = await page.find('og-text-input >>> textarea');
    await input.type('o');
    await input.type('r');
    await input.type('g');
    expect(await component.getProperty('value')).toEqual('org');
  });
});
