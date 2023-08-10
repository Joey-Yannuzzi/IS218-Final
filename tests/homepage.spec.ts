import {test, expect} from '@playwright/test';
const localhost = 'http://localhost:3000/'; //change to whatever localhost is running on your system
const name = "Joey Yannuzzi"; //place your name here

/*
* Homepage
*/

//Main
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

test('name', async ({page}) =>
{
    await page.goto(localhost);
    await page.getByRole('main').getByRole('heading', { name: name }); //checks for name
})

test('description', async ({page}) =>
{
    await page.goto(localhost);
    await page.getByRole('main').getByRole('paragraph'); //checks for description
})

test('learn more', async ({page}) =>
{
    await page.goto(localhost);
    await page.getByRole('main').getByRole('link', { name: 'learn more' }); //checks for link to about page
})

test('my projects', async ({page}) =>
{
    await page.goto(localhost);
    await page.getByRole('main').getByRole('link', { name: 'my projects' }); //checks for link to projects page
})

//Contact
test('contact header', async ({page}) =>
{
    await page.goto(localhost);
    await page.locator('section').getByRole('heading', { name: 'want to contact me?' }); //checks for contact header
})

test('mailchimp image', async ({page}) =>
{
    await page.goto(localhost);
    await page.locator('section').getByRole('img'); //checks for mailchimp image
})

test('contact paragraph', async ({page}) =>
{
    await page.goto(localhost);
    await page.locator('section').getByRole('paragraph', {name: 'Sign up for mailchimp to get in touch'}); //looks for contact paragraph
})

test('email', async ({page}) =>
{
    await page.goto(localhost);
    await page.locator('section').locator('#email'); //looks for email bar
})

test('submit', async ({page}) =>
{
    await page.goto(localhost);
    await page.locator('section').getByRole('button', { name: 'SUBMIT' }); //looks for submit button
})

/*test('test', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.getByRole('heading', { name: 'introducing' }).click();
    await page.getByRole('main').getByRole('img').click();
    await page.getByRole('heading', { name: 'Joey Yannuzzi' }).click();
    await page.getByText('An aspiring student at NJIT studying Game development and design. Learn more bel').click();
    await page.getByRole('link', { name: 'learn more' }).click();
    await page.getByRole('link', { name: 'back to homepage' }).click();
    await page.getByRole('link', { name: 'my projects' }).click();
    await page.getByRole('link', { name: 'back to homepage' }).click();
    await page.getByRole('heading', { name: 'want to contact me?' }).click();
    await page.locator('section').getByRole('img').click();
    await page.getByText('Sign up for mailchimp to get in touch').click();
    await page.locator('#email').click();
    await page.getByRole('button', { name: 'SUBMIT' }).click();
    await page.getByRole('contentinfo').getByRole('link').nth(1).click({
      button: 'right'
    });
    await page.locator('[id="__next"] div').filter({ hasText: 'introducingJoey YannuzziAn aspiring student at NJIT studying Game development an' }).click();
    await page.getByRole('contentinfo').getByRole('link').nth(2).click({
      button: 'right'
    });
    await page.getByRole('link', { name: 'learn more' }).click();
    await page.getByRole('heading', { name: 'about me' }).click();
    await page.getByRole('main').getByRole('img').click();
    await page.getByText('Learn all about what makes me special and what drives me to thrive here').click();
    await page.getByRole('heading', { name: 'journey' }).click();
    await page.locator('section').filter({ hasText: 'journeyPlaceholder text for journey, interests, and skills paragraphs. I don’t k' }).getByRole('paragraph').click();
    await page.getByRole('heading', { name: 'interests' }).click();
    await page.locator('section').filter({ hasText: 'interestsPlaceholder text for journey, interests, and skills paragraphs. I don’t' }).getByRole('paragraph').click();
    await page.getByRole('heading', { name: 'skills' }).click();
    await page.locator('section').filter({ hasText: 'skillsPlaceholder text for journey, interests, and skills paragraphs. I don’t kn' }).getByRole('paragraph').click();
    await page.getByRole('link', { name: 'back to homepage' }).click();
    await page.getByRole('link', { name: 'my projects' }).click();
    await page.getByRole('heading', { name: 'Projects' }).click();
    await page.getByRole('main').getByRole('img').click();
    await page.getByText('Learn more about some important hands-on experiences I’ve had').click();
    await page.getByRole('heading', { name: 'Project 1', exact: true }).click();
    await page.locator('section').filter({ hasText: 'Project 1Place holder for project descriptions.I don’t know if I will fill out t' }).getByRole('paragraph').click();
    await page.getByRole('link', { name: 'project 1' }).click({
      button: 'right'
    });
    await page.getByText('ProjectsLearn more about some important hands-on experiences I’ve hadProject 1Pl').click();
    await page.getByRole('heading', { name: 'Project 2', exact: true }).click();
    await page.locator('section').filter({ hasText: 'Project 2Place holder for project descriptions.I don’t know if I will fill out t' }).getByRole('paragraph').click();
    await page.getByRole('link', { name: 'project 2' }).click({
      button: 'right'
    });
    await page.getByRole('heading', { name: 'Project 3', exact: true }).click();
    await page.locator('section').filter({ hasText: 'Project 3Place holder for project descriptions.I don’t know if I will fill out t' }).getByRole('paragraph').click();
    await page.getByRole('link', { name: 'project 3' }).click({
      button: 'right'
    });
    await page.getByRole('link', { name: 'back to homepage' }).click();
  });*/