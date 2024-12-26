import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import newYorkImage from "./images/image3.png";
import Murudeshwara from "./images/image1.png";
import Mongrvoo from "./images/image2.png";
import mahabaleshwar from "./images/image4.png";
import yana from "./images/image5.png";
import Honnavar from "./images/image6.png";
import "./App.css";
import PlaceCard from "./components/PlaceCard";
import NewYorkDetails from "./pages/NewYorkDetails";
import PlaceDetails1 from "./pages/place_details1";
import PlaceDetails2 from "./pages/place_details2";
import PlaceDetails3 from "./pages/place_details3";
import PlaceDetails4 from "./pages/place_details4";

function App() {
  const places = [
    {
      name: "Mahabaleshwar",
      description: "Srikshetra Gokarna is one of the places in India. The Father of the universe Parashiva is in the form of Athmalinga.",
      image: mahabaleshwar,
      link: "/place-details4",
    },
    {
      name: "Yana Cave",
      description: "Yana caves is one of the finest creations of nature, located in Kumta in the Uttara Kannada district of Karnataka.",
      image: yana,
      link: "/place-details3",
    },
    {
      name: "Murudeshwara",
      description: "Shiva Temple with Chalukya built in the Dravidian style of architecture with an awesome Shiva statue famous in karnataka.",
      image: Murudeshwara,
      link: "/place-details2",
    },
    {
      name: "Honnavar Boating",
      description: "Boating in Honnavar is an adventurous experience in the backwaters of the Sharavati River famous in Karnataka.",
      image: Honnavar,
      link: "/place-details1",
    },
    {
      name: "Mongrvoo Forest",
      description: "The Sharavathi Mangrove Boardwalk, known as Kandla Vana, is a well-paved wooden walkway in the mangrove forest.",
      image: Mongrvoo,
      link: "/place-details2",
    },
    {
      name: "Dharmasthala",
      description: "Dharmasthala Manjunatha Swami is a remarkable example of communal, religious, and cultural harmony.",
      image: newYorkImage,
      link: "/new-york-details",
    },
  ];

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="App-navbar">
            <ul className="navbar-menu">
              <li><a href="/">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <h1>Tourism Website</h1>
          <p>Explore the places I have visited!</p>
        </header>
       
        <main className="App-main">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <div className="carousel">
                    {places.map((place, index) => (
                      <PlaceCard key={index} place={place} />
                    ))}
                  </div>
                  <section id="about">
                    <h2>About</h2>
                    <p>Welcome to my tourism website, where I share details about amazing destinations I've visited.
                    <br>
                    </br><br>
                    </br>
<br>
</br>
                    Mangrove Forest (Sharavathi Mangrove Boardwalk)
                    <br>
</br>
Nestled in the serene backwaters of Karnataka, the Sharavathi Mangrove Boardwalk offers visitors a unique and tranquil experience. Known locally as Kandla Vana, this wooden walkway meanders through dense mangrove forests, allowing visitors to immerse themselves in the rich biodiversity of the region. The chirping of exotic birds, the gentle rustle of leaves, and the occasional splash of fish create a harmonious symphony of nature. Perfect for nature lovers, photographers, and adventure enthusiasts, the boardwalk also highlights the ecological significance of mangroves as protectors of coastlines and nurturers of marine life. A visit here is both an educational and refreshing escape into the heart of nature.

<br>
</br><br>
</br>
Mahabaleshwar Temple (Gokarna)
<br>
</br>
The Mahabaleshwar Temple in Gokarna, Karnataka, is a sacred destination renowned for its religious significance and architectural splendor. Dedicated to Lord Shiva, the temple houses the revered Atma-Linga, attracting pilgrims from across the globe. Its Dravidian-style architecture features intricately carved granite sculptures and sanctified courtyards, evoking a deep sense of spirituality. Surrounded by lush greenery and nestled near pristine beaches, the temple offers a blend of divinity and natural beauty. Mythologically, the temple holds a special place in the Ramayana, making it a must-visit for those seeking a spiritual connection and historical intrigue.
<br>
</br><br>
</br>
Murudeshwara Temple
<br>
</br>
The Murudeshwara Temple, located along the pristine shores of the Arabian Sea in Karnataka, is a magnificent tribute to Lord Shiva. Home to the world's second-tallest Shiva statue, this iconic temple is an architectural masterpiece that seamlessly blends religious devotion with artistic grandeur. Towering over the temple complex is a 20-story Gopura (gateway), which offers panoramic views of the ocean and surrounding hills. The temple is steeped in mythology, tracing its origins to the legend of the Atma-Linga. Visitors can marvel at the intricate carvings, participate in spiritual rituals, or simply soak in the serenity of the tranquil surroundings. The temple's coastal setting makes it an unforgettable experience for both pilgrims and tourists.
<br>
</br><br>
</br>
Dharmasthala
<br>
</br>
Dharmasthala is a unique destination that exemplifies the harmonious coexistence of diverse cultures and religions. Located in the Dakshina Kannada district of Karnataka, this temple town is renowned for the Sri Manjunatha Swamy Temple, dedicated to Lord Shiva. What sets Dharmasthala apart is its ethos of charity and community service, upheld by the Jain Heggade family, who manage the temple while maintaining its Hindu traditions. Pilgrims and visitors are treated to a spiritually uplifting experience, enhanced by the temple’s free food offerings and peaceful ambiance. Dharmasthala also features attractions like the Bahubali statue, symbolizing Jain values of peace and renunciation. It is a must-visit for anyone seeking spiritual enlightenment and cultural insights.
<br>
</br><br>
</br>
Yana Caves
<br>
</br>
The Yana Caves, located amidst the dense forests of the Western Ghats in Karnataka, are a natural wonder that captivates adventure seekers and nature enthusiasts alike. These towering black limestone rock formations, known as Bhairaveshwara Shikhara and Mohini Shikhara, rise dramatically against the lush green backdrop. Apart from their striking appearance, the caves are steeped in mythology, believed to be the site where Lord Vishnu vanquished the demon Bhasmasura. The trek to the caves through verdant forests is an adventure in itself, offering glimpses of rare flora and fauna. Visitors can explore the caves, marvel at the unique rock formations, and immerse themselves in the tranquil beauty of nature.
<br>
</br><br>
</br>
Honnavar Boating
<br>
</br>
The picturesque town of Honnavar in Karnataka is a paradise for boating enthusiasts. Nestled at the confluence of the Sharavati River and the Arabian Sea, Honnavar offers breathtaking backwater cruises that provide a front-row seat to the region’s natural beauty. Glide through serene waters surrounded by lush greenery, mangroves, and small islands. The experience is elevated by the sight of migratory birds and the cool, gentle breeze. Whether you opt for a traditional boat ride or a modern cruise, Honnavar’s boating adventures are perfect for families, couples, and solo travelers looking for a peaceful yet exhilarating journey through one of Karnataka’s hidden gems.

These descriptions can enrich your tourism website by providing engaging and detailed insights into each destination, enticing visitors to explore and experience the beauty of Karnataka!

                    </p>
                  </section>
                  <section id="contact">
                    <h2>Contact Details</h2>
                    <p>Email: contact@example.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                  </section>
                </div>
              }
            />
            <Route path="/new-york-details" element={<NewYorkDetails />} />
            <Route path="/place-details1" element={<PlaceDetails1 />} />
            <Route path="/place-details2" element={<PlaceDetails2 />} />
            <Route path="/place-details3" element={<PlaceDetails3 />} />
            <Route path="/place-details4" element={<PlaceDetails4 />} />
          </Routes>
        </main>
        <footer className="App-footer">© 2024 Tourism Website</footer>
      </div>
    </Router>
  );
}

export default App;
