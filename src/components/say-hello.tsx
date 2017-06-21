
import * as React from 'react';
import { cloud } from 'fh-js-sdk';

interface SayHelloState {
  // these represent the internal state of the component
  input: string,
  cloudResponse: string
}

interface SayHelloProps {
  // this will be passed as an attribute when the component is used elsewhere
  cloudRoute: string
}

export default class SayHello extends React.Component<SayHelloProps, SayHelloState> {
  constructor () {
    super();

    this.state = {
      input: '',
      cloudResponse: ''
    };
  }

  onCloudSuccess (res: any) {
    this.setState({
      cloudResponse: res.msg
    });
  }

  onCloudFailure (msg: any, err: any) {
    alert(`Cloud call failed with error - ${msg}. Error data - ${JSON.stringify(err)}`);
  }

  sayHello () {
    const params = {
      // use the passed in route to make a call to the cloud
      path: this.props.cloudRoute,
      // pass the string input by a user to the cloud call
      data: { hello: this.state.input },
      method: 'post'
    };

    cloud(
      params,
      this.onCloudSuccess.bind(this),
      this.onCloudFailure
    );
  }

  onInputChange (e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      input: e.target.value
    });
  }

  render () {
    return (
      <div id='count'>
        <div id='formWrapper'>
          <p id='description'>
            This is a basic Javascript App that can take in your name, send it to a cloud app and display the response.
          </p>
          <br/>

          <div className='input-div'>
            <input
              onChange={(e) => this.onInputChange(e)}
              type='text'
              className='input-text'
              placeholder='Enter your name here...'
            />
          </div>

          <br/>

          <button onClick={() => this.sayHello()} type='button' className='say-hello-button'>
            Say Hello From The Cloud
          </button>

          <div id='cloudResponse' className='cloudResponse'>
            {this.state.cloudResponse}
          </div>
        </div>
      </div>
    );
  }
}
