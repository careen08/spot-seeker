import React, { Component } from 'react';
import Footer from '../../Components/Footer/Footer'; 
import "./Register.css"; 

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageData: null,
      error: null,
      loading: true // Initialize loading state to true
    };
  }

  componentDidMount() {
    const { pageId = 'register' } = this.props;
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

    return (
      <>
        <div className="square">
          <div className="register-container">
            <h1>Create an Account</h1>
            <p>Already have an account? <a href="/login">Sign In</a></p>

            <form className="register-form">
              {pageData.fields.map(field => (
                field.type !== 'button' && (
                  <div key={field.id} className="form-field">
                    <label>{field.label}</label>
                    <input type={field.type} id={field.id} name={field.id} />
                  </div>
                )
              ))}

              <p>Use 8 or more characters with a mix of letters, numbers & symbols</p>

              <div className="button-container">
                <a href="/login">
                  <button type="button">
                    {pageData.fields.find(field => field.type === 'button').buttonText}
                  </button>
                </a>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Register;
