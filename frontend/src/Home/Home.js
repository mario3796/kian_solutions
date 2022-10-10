import Carousel from 'react-bootstrap/Carousel';

const Home = () => (
  <Carousel style={{ width: '55%', margin: 'auto' }}>
    <Carousel.Item>
      <img
        src={window.location.origin + '/images/team-building.png'}
        className="d-block w-100"
        alt=""
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        src={window.location.origin + '/images/AdobeStock.jpg'}
        className="d-block w-100"
        alt=""
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        src={window.location.origin + '/images/workplace.png'}
        className="d-block w-100"
        alt=""
      />
    </Carousel.Item>
  </Carousel>
);

export default Home;
