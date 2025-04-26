import React from 'react';
import {act, create} from 'react-test-renderer';
import Login from './Login';
import {login} from './actions/login';

describe('Login Page', () => {
  it('Login Page design should be exactly same', () => {
    let tree;
    act(() => {
      tree = create(<Login />).toJSON();
    });
    expect(tree).toMatchSnapshot();
  });
  it('Login Api Should work', async () => {
    expect(await login()).toBeTruthy();
  });
});
