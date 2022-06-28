import app from '../app.js'
import request from 'supertest'
import {test, expect, describe} from '@jest/globals'
import {pool} from '../db/index.js'

describe("GET blogs", function() {
    test("Get request (status code: 200) and check that header is json", async function(){
        const response = await request(app).get("/v1/blogs");
        expect(response.statusCode).toEqual(200);
        expect(response.headers["content-type"]).toMatch(/json/);
    })

    test("GET request responds with correct body structure", async function(){
        const response = await request(app).get("/v1/blogs");
        const actual = response.body;
        const expected = {
            success: true,
            payload: expect.arrayContaining([
                {
                    id: expect.any(Number),
                    title: expect.any(String),
                    author: expect.any(String),
                    dateposted: expect.any(String),
                    content: expect.any(String),
                    imagesrc: expect.any(String),
                    imagealt: expect.any(String)
                }
            ])
        };

        expect(actual).toEqual(expected);
    })
})

afterAll(async () => {
    await pool.end()
});

