import {types} from "../../../../src/auth";

describe('Tests on types', () => {
    test('should return proper types', () => {
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        });
    });
});