import { WebinarPage } from './app.po';

describe('webinar App', function() {
  let page: WebinarPage;

  beforeEach(() => {
    page = new WebinarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
