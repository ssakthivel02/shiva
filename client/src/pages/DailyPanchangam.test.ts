import { describe, expect, it, vi, afterEach } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { createElement } from 'react';
import DailyPanchangam from './DailyPanchangam';

afterEach(() => vi.restoreAllMocks());

describe('Tamil Panchangam page', () => {
  it('renders a Tamil pending notice without publishing unverified times', () => {
    const html = renderToStaticMarkup(createElement(DailyPanchangam));
    expect(html).toContain('இன்றைய தமிழ் பஞ்சாங்கம்');
    expect(html).toContain('தகவல் சரிபார்ப்பு நடைபெறுகிறது');
    expect(html).toContain('உறுதிப்படுத்தப்படாத சுபநேரங்களை');
    expect(html).not.toContain('சரிபார்க்கப்பட்ட பஞ்சாங்கம்');
  });
});
