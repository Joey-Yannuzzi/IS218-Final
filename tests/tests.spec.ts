import {test, expect} from '@playwright/test';
const localhost = 'http://localhost:3000/';

test('Has Heading', async ({page}) =>
{
    await page.goto(localhost);
    const headerText = await page.textContent('h1');
    await expect(headerText).toContain('Welcome to Next.js!');
})