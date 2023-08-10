import {test, expect} from '@playwright/test';
const localhost = 'http://localhost:3000/about'; //change to whatever localhost is running on your system

test('heading', async ({page}) =>
{
    await page.goto(localhost);
    await page.getByRole('main').getByRole('heading'); //checks for heading
})

test('profile image', async ({page}) =>
{
    await page.goto(localhost);
    await page.getByRole('main').getByRole('img'); //checks for profile image
})

test('description', async ({page}) =>
{
    await page.goto(localhost);
    await page.getByRole('main').getByRole('paragraph'); //checks for description
})

test('journey', async ({page}) =>
{
    await page.goto(localhost);
    await page.locator('section').getByRole('heading', {name: 'journey'}); //checks journey heading
})

test('journey description', async ({page}) =>
{
    await page.goto(localhost);
    await page.locator('section').getByRole('paragraph'); //checks for journey description
})

test('interests', async ({page}) =>
{
    await page.goto(localhost);
    await page.locator('section').getByRole('heading', {name: 'interests'}); //checks interests heading
})

test('interests description', async ({page}) =>
{
    await page.goto(localhost);
    await page.locator('section').getByRole('paragraph'); //checks for interests description
})

test('skills', async ({page}) =>
{
    await page.goto(localhost);
    await page.locator('section').getByRole('heading', {name: 'skills'}); //checks skills heading
})

test('skills description', async ({page}) =>
{
    await page.goto(localhost);
    await page.locator('section').getByRole('paragraph'); //checks for skills description
})