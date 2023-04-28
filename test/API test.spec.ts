import { test, expect } from '@playwright/test';

test.describe('Login Flow', () => {
    test.only('Should be able to login', async ({ request, baseURL }) => {
        const login = await request.post('/baseURL/api/v2/admin/authentication-token', {
            data: {
                "email": "api@example.com",
                "password": "sylius-api"
            }
        });

        const loginResponse = await login.json();

        console.log(loginResponse);

        expect(login.ok()).toBeTruthy();
        expect(login.status()).toBe(200);
        expect(loginResponse).toHaveProperty('token');

    });
    test('Should not be able to login', async ({ request, baseURL }) => {
        const login = await request.post('/baseURL/api/v2/admin/authentication-token', {
            data: {
                "email": "wrong-email@example.com",
                "password": "wrong-password"
            }
        });

        const loginResponse = await login.json();

        console.log(loginResponse);

        expect(login.ok()).toBeFalsy();
        expect(login.status()).toBe(401);
        expect(loginResponse).toHaveProperty('message');

    });
});
