import { authReducer, types } from "../../../src/auth";

describe("Tests on authReducer", () => {
  test("should return default state", () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test("should login and authenticate user ", () => {
    const action = {
      type: types.login,
      payload: { name: "Pedro Pascal", id: "1" }
    }

    const state = authReducer({logged: false}, action);
    expect(state).toEqual({
      ...state, logged: true, user: action.payload,
    })
  });

  test("should logout and clear the user", () => {
    const action = {type: types.logout}
    
    const initialState = {logged: true,
      user: { name: "Pedro Pascal", id: "1" }
    };
    
    const newState = authReducer(initialState, action);
    
    expect(newState).toEqual({ logged: false })
  });
});
