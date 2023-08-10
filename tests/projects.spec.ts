import {test, expect} from '@playwright/test';
const localhost = 'http://localhost:3000/projects'; //change to whatever localhost is running on your system

test('heading', async ({page}) =>
{
    await page.goto(localhost);
    await page.getByRole('main').getByRole('heading'); //checks for heading
})

test('file image', async ({page}) =>
{
    await page.goto(localhost);
    await page.getByRole('main').getByRole('img'); //checks for file image
})

test('description', async ({page}) =>
{
    await page.goto(localhost);
    await page.getByRole('main').getByRole('paragraph'); //checks for description
})

test('project 1', async ({page}) =>
{
    await page.goto(localhost);
    await page.locator('section').getByRole('heading'); //checks project 1 heading
})

test('project 1 description', async ({page}) =>
{
    await page.goto(localhost);
    await page.locator('section').getByRole('paragraph'); //checks for project 1 description
})

test('project button 1', async ({page}) =>
{
    await page.goto(localhost);
    await page.locator('section').getByRole('link'); //checks for link to project 1
})

test('project 2', async ({page}) =>
{
    await page.goto(localhost);
    await page.locator('section').getByRole('heading'); //checks project 2 heading
})

test('project 2 description', async ({page}) =>
{
    await page.goto(localhost);
    await page.locator('section').getByRole('paragraph'); //checks for project 2 description
})

test('project button 2', async ({page}) =>
{
    await page.goto(localhost);
    await page.locator('section').getByRole('link'); //checks for link to project 2
})

test('project 3', async ({page}) =>
{
    await page.goto(localhost);
    await page.locator('section').getByRole('heading'); //checks project 3 heading
})

test('project 3 description', async ({page}) =>
{
    await page.goto(localhost);
    await page.locator('section').getByRole('paragraph'); //checks for project 3 description
})

test('project button 3', async ({page}) =>
{
    await page.goto(localhost);
    await page.locator('section').getByRole('link'); //checks for link to project 3
})