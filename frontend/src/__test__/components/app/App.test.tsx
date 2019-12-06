import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, ShallowWrapper } from "enzyme"

import App from '../../../components/app';
import { AuthenticationState } from '../../../types';

const loginStub = (): void => {  }
const mockAuth: AuthenticationState = {
  auth_token: "foo",
  is_refreshing: false,
  refresh_token: "bar"
}

describe("App Component", () => {
  let wrapper: ShallowWrapper
  const div = document.createElement('div');
  beforeEach(() => {
    wrapper = shallow(<App auth={mockAuth} login={loginStub} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
    ReactDOM.unmountComponentAtNode(div)
  });

  it('renders without crashing', () => {
    ReactDOM.unmountComponentAtNode(div);
  });
})

