import { OgIconButton } from "./og-icon-button";

it('emits clicked event', async () => {
  const button = new OgIconButton();

  const emitter  = {
    emit: (): CustomEvent<MouseEvent> => { return null; }
  };
  const spy = jest.spyOn(emitter, 'emit');
  button.clicked = emitter;
  button.handleClick({ } as any);
  expect(spy).toHaveBeenCalled();
});
