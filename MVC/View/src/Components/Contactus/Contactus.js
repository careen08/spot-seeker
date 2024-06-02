import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './Contactus.css';

class Contactus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageData: null,
      error: null,
      loading: false  
    };
  }

  componentDidMount() {
    const { pageId = 'contactus' } = this.props;
    this.fetchPageData(pageId);
  }

  fetchPageData = async (pageId) => {
    this.setState({ loading: true }); 
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
      this.setState({ pageData: data, loading: false });  
    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({ error, loading: false });  
    }
  };

  render() {
    const { pageData, error, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (!pageData) {
      return <div>Page not found</div>;
    }

    const displayedFields = pageData.fields.filter(field => field.id === "name" || field.id === "email" || field.id === "message");
    const buttonText = pageData.fields.find(field => field.type === "button")?.buttonText;

    return (
      <>
        <Header />
        <div className="content">
          <div className="contact-container">
            <form>
              <h1>Lets Get in <span style={{ color: '#BDDE80' }}>Touch!</span></h1>
              <h4>{pageData.subtitle}</h4>
              {displayedFields.map(field => (
                <div key={field.id} className="form-field4">
                  <label></label>
                  {field.type === "textarea" ? (
                    <textarea id={field.id} name={field.id} placeholder={field.label} ></textarea>
                  ) : (
                    <input type={field.type} id={field.id} name={field.id} placeholder={field.label} />
                  )}
                </div>
              ))}
              {buttonText && <button type="submit">{buttonText}</button>}
            </form>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Contactus;
