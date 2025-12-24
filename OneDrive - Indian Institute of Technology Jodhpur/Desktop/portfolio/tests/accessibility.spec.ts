import { test, expect } from '@playwright/test';
import { injectAxe, checkA11y } from '@axe-core/playwright';

const CANDIDATES = [
  'http://localhost:4028',
  'http://localhost:3000',
  'http://127.0.0.1:4028',
  'http://127.0.0.1:3000',
];

async function findBase(page: any) {
  for (const url of CANDIDATES) {
    // try a few times because dev server might be starting
    for (let i = 0; i < 6; i++) {
      try {
        const resp = await page.goto(url + '/', { waitUntil: 'domcontentloaded', timeout: 5000 });
        if (resp && resp.status && resp.status() < 500) return url;
      } catch (e) {
        // wait and retry
        await new Promise((r) => setTimeout(r, 1000));
      }
    }
  }
  throw new Error('No running local dev server found on tested ports.');
}

test.describe('Accessibility', () => {
  test('homepage should have no critical/serious a11y violations', async ({ page }) => {
    const base = await findBase(page);
    console.log('Testing site at', base);
    await page.goto(base + '/', { waitUntil: 'networkidle' });

    await injectAxe(page);
    const results = await checkA11y(page, undefined, {
      detailedReport: true,
      detailedReportOptions: { html: true },
    });

    const violations = results.violations || [];
    if (violations.length) {
      console.log('Accessibility violations found:');
      for (const v of violations) {
        console.log(`${v.id} — ${v.impact} — ${v.help}`);
        for (const node of v.nodes) {
          console.log('  Selector:', node.target.join(', '));
        }
      }
    }

    const severe = violations.filter((v: any) => v.impact === 'critical' || v.impact === 'serious');
    expect(severe.length).toBe(0);
  });
});
