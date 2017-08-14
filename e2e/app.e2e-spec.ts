import { IComidaSamplePage } from './app.po';

describe('icomida-sample App', () => {
  let page: IComidaSamplePage;

  beforeEach(() => {
    page = new IComidaSamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
