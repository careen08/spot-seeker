import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { IoSearchOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import './Explore.css';

class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageData: null,
      error: null,
      loading: true 
    };
  }

  componentDidMount() {
    const { pageId = 'explore' } = this.props;
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

    const displayedFields = pageData.fields;

    return (
      <>
        <Header />
        <div className="explorer-container">
          <div className="sidemenu">
            <input id='searchEX' type='search' placeholder={pageData.searchbar} />
            <div className="sugg">
              {displayedFields.map(field => (
                <div key={field.id}>
                  <a target="_blank" href='#'>
                    <img src={field.imgUrl} alt={field.name} />
                    <MdFavoriteBorder className="save-icon" />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className='filter'>

          </div>
          <div className="map-placeholder">
            <img src={`${process.env.PUBLIC_URL}/Image/googlemap.png`} alt="Map" className="map-image" />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Explore;
