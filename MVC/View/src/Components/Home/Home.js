import React, { Component } from 'react';
import './Home.css';
import Footer from '../../Components/Footer/Footer';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageData: null,
      error: null,
      loading: true // Initialize loading state to true
    };
  }

  componentDidMount() {
    const { pageId = 'home' } = this.props;
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
        <div className="main">
          <video src={`${process.env.PUBLIC_URL}/Image/home video.mp4`} autoPlay loop muted />
        </div>
        <div className="home_containor">
          <h1>{pageData.title}</h1>
          <a href="/login">{pageData.button1}</a>
          <a href="/landingpage"><i>{pageData.button2}</i></a>
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
