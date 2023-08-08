import {test, expect} from '@playwright/test';
const localhost = 'http://localhost:3000/'; //change to whatever localhost is running on your system
const name = "Joey Yannuzzi"; //place your name here

test('Has Heading', async ({page}) =>
{
    await page.goto(localhost);
    const headerText = await page.textContent('h1');
    await expect(headerText).toContain(name);
})

test ('contains body', async ({page}) =>
{
    await page.goto(localhost);
    const body = await page.textContent('p');
    await expect(body).toBeDefined();
})

test ('check about link', async ({page}) =>
{
    await page.goto(localhost);
    const link = await page.textContent('h3');
    await expect(link).toContain("learn more");
})

test ('check projects link', async ({page}) =>
{
    await page.goto(localhost);
    const link = await page.textContent('h3');
    await expect(link).toContain("my projects");
})

test ('check email section', async ({page}) =>
{
    await page.goto(localhost);
    const head = await page.textContent('h2');
    await expect(head).toBeDefined();
})

test ('check form', async ({page}) =>
{
    await page.goto(localhost);
    const form = await page.textContent('form');
    await expect(form).toBeDefined();
})