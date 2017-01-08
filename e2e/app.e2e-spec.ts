import { ObservableReproPage } from './app.po';

describe('observable-repro App', function() {
  let page: ObservableReproPage;

  beforeEach(() => {
    page = new ObservableReproPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
