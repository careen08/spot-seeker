import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { IoSearchOutline } from "react-icons/io5";
import './LandingPage.css';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageData: null,
      error: null,
      loading: true // Initialize loading state to true
    };
  }

  componentDidMount() {
    const { pageId = 'landingpage' } = this.props;
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

    const displayedFields = pageData.fields;

    return (
      <>
        <Header />
        <div className="wrap">
          <div className="landing-container">
            <form>
              <h1>{pageData.title}</h1>
              <div className='searchcont'>
                <input id="search" type="search" placeholder={pageData.searchbar} />
                <IoSearchOutline id="search-icon" />
              </div>
              
              <div className="gallery">
                {displayedFields.map(field => (
                  <div key={field.id} className="gallery-item">
                    <a target="_blank" href='/#'>
                      <img src={field.imgUrl} alt={field.label} />
                    </a>
                    <label className="label-bottom-left">{field.label}</label>
                  </div>
                ))}
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default LandingPage;
