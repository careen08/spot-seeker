import React, { Component } from 'react';
import "./Login.css";
import Footer from '../../Components/Footer/Footer';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageData: null,
      error: null,
      loading: true // Initialize loading state to true
    };
  }

  componentDidMount() {
    const { pageId = 'login' } = this.props;
    this.fetchPageData(pageId);
  }

  fetchPageData = async (pageId) => {
    try {
      const response = await fetch('http://localhost:3001/pages/page', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ pageId })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      this.setState({ pageData: data, loading: false }); // Set loading to false after fetching data
    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({ error, loading: false }); // Set loading to false if there's an error
    }
  };

  render() {
    const { pageData, error, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>; // Display loading indicator if data is being fetched
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (!pageData) {
      return <div>Page not found</div>;
    }

    const displayedFields = pageData.fields.filter(field => field.id === "email" || field.id === "password");
    const checkboxText = pageData.fields.find(field => field.type === "checkbox")?.checkboxText;
    const button = pageData.fields.find(field => field.type === "button");
    const text = pageData.fields.filter(field => field.id === "forgot" || field.id === "noAccount" || field.id === "continue");

    return (
      <>
        <div className="square2">
          <div className="login-container">
            <form>
              <h1>Login</h1>
              {displayedFields.map(field => (
                <div key={field.id} className="field1">
                  <label>{field.label}</label>
                  <input type={field.type} id={field.id} name={field.id} />
                </div>
              ))}
              <div className="field2">
                <input type="checkbox" id="checkbox" name="checkbox" />
                <label type="check">{checkboxText}</label>
              </div>
              <a href="/landingpage" type="submit" id={button.id}>{button.buttonText}</a>
            </form>
            {text.map(field => (
              <div key={field.id} className="field3">
                <a id={field.id} href="/register">{field.text} </a>
              </div>
            ))}
            <div className="icons">
              <a><FcGoogle /> <FaApple /></a>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Login;
