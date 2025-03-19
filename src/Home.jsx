import React, { useEffect } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import AOS from 'aos'; // Install with: npm install aos
import 'aos/dist/aos.css';

const fashionProducts = [
  {
    id: 1,
    name: "Classic Denim Jacket",
    price: "$59.99",
    image: "https://imgs.search.brave.com/Rxtz_dA_0i1MkuFtnhGJqlk6BcPkt6RoGB5XYnbur_c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFZV3ZFTW9XZEwu/anBn"
  },
  {
    id: 2,
    name: "Floral Summer Dress",
    price: "$45.99",
    image: "https://imgs.search.brave.com/MRjfz_ypoCBpdBeVq66_yBK2HOHtLntzB8ikHshctTw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODE2NDVjcUFDNUwu/anBn"
  },
  {
    id: 3,
    name: "Casual Cotton T-Shirt",
    price: "$19.99",
    image: "https://imgs.search.brave.com/UFgTIDdkvlyNYobnukM07oGLMsR3alwYlnLSibIoHR4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/c3RhdGljZGouY29t/L2Y5YjEyYTUzZWQ2/NWRlMGEyYTViYTRh/ZTBlYzMxM2MyXzc1/MHguanBlZw"
  },
  {
    id: 4,
    name: "Slim Fit Chinos",
    price: "$39.99",
    image: "https://imgs.search.brave.com/Flt7drcH2J1c2At-hkyW9C_Kanh99fME4wV000CTiQI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wZXJr/Y2xvdGhpbmcuY29t/L2Nkbi9zaG9wL2Zp/bGVzLzZfMTg2Nzc4/ZDEtYWE4MC00YTFj/LTlmOGItOWI1YjNi/ZjhhZDY2LmpwZz92/PTE2OTQ0MTU5NTYm/d2lkdGg9MTAwMA"
  },
  {
    id: 5,
    name: "Leather Ankle Boots",
    price: "$79.99",
    image: "https://imgs.search.brave.com/ZPDsPKI_bWNJwVWMHSOEKLY8q6zpAPB0Idq6mtng6AI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hdGl0/bGFubGVhdGhlci5j/b20vY2RuL3Nob3Av/cHJvZHVjdHMvYnJv/d24tbGVhdGhlci12/aWN0b3JpYW4tYW5r/bGUtYm9vdHMtMzkx/MjgxLmpwZz92PTE3/NDA0ODgxNjEmd2lk/dGg9NTMz"
  },
  {
    id: 6,
    name: "Sports Hoodie",
    price: "$49.99",
    image: "https://imgs.search.brave.com/N6Ni4ZamUYz27y6t8RiT-Z8oQbsdBICJ03QOC2rtSsM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdG9y/ZS5iYXJzdG9vbHNw/b3J0cy5jb20vY2Ru/L3Nob3AvZmlsZXMv/VW5kZXJ3b29kMTkt/Q2FyaGFydHQtTmF2/eS5qcGc_dj0xNzM2/ODkxNTg1JndpZHRo/PTU3Ng"
  },
  {
    id: 7,
    name: "High-Waisted Jeans",
    price: "$54.99",
    image: "https://imgs.search.brave.com/uTPlS00mg20BHP-4Rxbuc48aHuWWNlnoNPD6CDQVOmQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b25ldGVhc3Bvb24u/Y29tL2Nkbi9zaG9w/L2ZpbGVzLzI0NjQ1/X1BJTktIQVpFX1NU/QU5EQVJEXzAyXzBj/NmMxN2JjLThhOTEt/NGQ0Zi1hZWRkLTZk/ODkwYzcwYjE4OS5q/cGc_dj0xNjk5NTk2/NDQzJndpZHRoPTYw/MA"
  },
  {
    id: 8,
    name: "Formal Blazer",
    price: "$89.99",
    image: "https://imgs.search.brave.com/R61FzwZyNnWvgnse_ROcL6h6WISq_VHdAGXDTEHBVl8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFOMEQ5Z3pSSUwu/anBn"
  },
  {
    id: 9,
    name: "Knitted Wool Sweater",
    price: "$42.99",
    image: "https://imgs.search.brave.com/isCcZLkxvOPMWoV98gCFFbpSRKE3eubbRdfCbttOyAE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/OTFOSkJpSXpmelMu/anBn"
  },
  {
    id: 10,
    name: "Casual Sneakers",
    price: "$64.99",
    image: "https://imgs.search.brave.com/m15Dvh9XeG41B1VlZXjkHeQ74BzK-nfdKCnyHgj-2YI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFJS3dOcnAzMkwu/anBn"
  },
  {
    id: 11,
    name: "Silk Evening Gown",
    price: "$120.99",
    image: "https://imgs.search.brave.com/NLYpYIe3rWb1khh2VWFPcQYlY8A4M8UzaLRMbtWhGic/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFXWStPTjRtTkwu/anBn"
  },
  {
    id: 12,
    name: "Leather Belt",
    price: "$25.99",
    image: "https://imgs.search.brave.com/AMmc8gmMfId7FysZwkc_qsNiz0hW7yoWUq4CMb9iyzc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzg1LzExLzc4/LzM2MF9GXzI4NTEx/NzgzOV9BZ0F0UDNJ/ZzdLTnROUjEwQWdw/eFNtVWRoaHM3THYx/TC5qcGc"
  }
];

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const scrollToProducts = () => {
    document.getElementById('products-section').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className='background'>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content" data-aos="fade-up">
          <h1>Welcome to E-Commerce</h1>
          <p>Discover the latest trends in fashion</p>
          <button 
            className="explore-btn"
            onClick={scrollToProducts}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Explore Products
          </button>
        </div>
      </div>

      {/* Products Section */}
      <div id="products-section" className="container my-5">
        <h2 className="section-title" data-aos="fade-up">Featured Fashion</h2>
        <div className="row g-4">
          {fashionProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="col-md-3"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="price">{product.price}</p>
                  <button className="shop-now-btn">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
