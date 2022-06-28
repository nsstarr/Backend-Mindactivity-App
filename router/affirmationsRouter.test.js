import app from '../app.js'
import request from 'supertest'
import {test, expect, describe} from '@jest/globals'
import {pool} from '../db/index.js'


// beforeAll/afterAll currently not closing the test after it's complete.


describe("GET affirmations", function() {
    test("Get request (status code: 200) and check that header is json", async function(){
        const response = await request(app).get("/v1/mindactivity");
        expect(response.statusCode).toEqual(200);
        expect(response.headers["content-type"]).toMatch(/json/);
    })

    test("GET request responds with correct body structure", async function(){
        const response = await request(app).get("/v1/mindactivity");
        const actual = response.body;
        const expected = {
            success: true,
            payload: expect.arrayContaining([
                {
                    id: expect.any(Number),
                    content: expect.any(String)
                }
            ])
        };

        expect(actual).toEqual(expected);
    })

    test("GET request with specific ID and correct body structure", async function(){
        const response = await request(app).get("/v1/mindactivity/4");
        const actual = response.body;
        const expected = {
            success: true,
            payload: [{
                id: 4,
                content: expect.any(String)
            }]
        };
        expect(actual).toEqual(expected);
    })
})

  afterAll(async () => {
    await pool.end()
});
