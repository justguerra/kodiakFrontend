import { KodiakAngularPage } from './app.po';

describe('kodiak-angular App', () => {
  let page: KodiakAngularPage;

  beforeEach(() => {
    page = new KodiakAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
