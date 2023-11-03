

import "./HomePage.scss"

import menuBg from "../assets/menu-ng.jpg";

const HomePage = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home-section">
          <div className="home-text">
            <h1>Welcome to {`rzzzy's`} site</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia eos eaque labore, aliquam sunt quia, minima quidem quibusdam id, quod repudiandae? Provident aliquam possimus voluptatem sed, dignissimos non sunt incidunt quo voluptas minus quae libero aut consequatur accusantium, deleniti dolore, nisi labore velit laborum cumque repudiandae sint officia. Amet, veritatis eius? Mollitia eum excepturi cum ratione hic ab. Enim dicta nesciunt porro atque quasi consequatur adipisci corrupti vitae expedita excepturi labore sed, eos ducimus doloribus mollitia voluptate veritatis, voluptatum nemo repellat. Maxime impedit nobis atque quod ea asperiores et facilis nam perspiciatis animi. Voluptatum quam beatae nulla, nesciunt sapiente incidunt!
            </p>
          </div>
          <img src={menuBg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default HomePage