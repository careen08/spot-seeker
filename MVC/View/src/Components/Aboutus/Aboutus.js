import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './Aboutus.css';

class Aboutus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageData: null,
      error: null,
      loading: true // Initialize loading state to true
    };
  }

  componentDidMount() {
    const { pageId = 'aboutus' } = this.props;
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
        <Header />
        <div className="content2">
          <div className="about-container">
            <h1>About <span style={{ color: '#BDDE80' }}>Us!</span></h1>
            {pageData.fields.map(field => (
              <div key={field.title} className="form-field5">
                <h4>{field.title}</h4>
                <p>{field.text}</p>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Aboutus;
