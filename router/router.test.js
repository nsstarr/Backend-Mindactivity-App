import app from '../app.js'
import request from 'supertest'
import {test, expect} from '@jest/globals'



describe('Get /mindactivity', function () {
    it('send request to /affirmations/0',async function() {
            await request(app)
            .get('/affirmations')
            .expect(200)
            .expect(async (res) => {
                const expected = {success: true, payload: expect.any(Object)};
                
                const actual = res.body
                
                expect(actual).toStrictEqual(expected);
                
        })
    })
});