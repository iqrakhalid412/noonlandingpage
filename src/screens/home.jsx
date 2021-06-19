import React from "react";
import Header from "../components/header";
function Home() {
    return (
        <div classNameName="App">
    <Header/> 


{/* ///Carousals */}
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://k.nooncdn.com/cms/pages/20210608/c9e6fa9298e2f1f9b553e9479c6db6e0/en_slider-01.gif" className="d-block w-100" alt="Pic1"/>
      </div>
      <div className="carousel-item">
        <img src="https://k.nooncdn.com/mon/1623848431147-ckpzhfgh7026krvr0s2ag81zu.png" className="d-block w-100" alt="Pic2"/>
      </div>
      <div className="carousel-item">
        <img src="https://k.nooncdn.com/cms/pages/20210606/89aac846becdcf1e4a69bd069f694e8f/en_slider-01.png" className="d-block w-100" alt="Pic3"/>
      </div>
      
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>




{/* ///picture in circle */}


<div class="container">
  <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
    <div class="col">
<div   class = "imground"  class="p-3 border bg-light card"></div>
  <img src="https://k.nooncdn.com/cms/pages/20210221/ae2478a48279107858fc26b6a9c50957/en_mb-cat-module-04.png" class="card-img-top" alt="1"/>
  
</div>


<div class="col">
<div   class = "imground"  class="p-3 border bg-light card"></div>
  <img  src="https://k.nooncdn.com/cms/pages/20210111/ae012d15d62d518e36a1e8065cc6765b/en_mb-cat-module-01.png" class="card-img-top" alt="1"/>
  
</div>



<div class="col">
<div   class = "imground"     class="p-3 border bg-light card"></div>
  <img     src="https://k.nooncdn.com/cms/pages/20200817/6888e84c801b736fca132f7bf92bbb69/en_mb-cat-module-03.png" class="card-img-top" alt="1"/>
  
</div>




<div class="col">
<div   class = "imground"     class="p-3 border bg-light card"></div>
  <img        src="https://k.nooncdn.com/cms/pages/20210221/ae2478a48279107858fc26b6a9c50957/en_mb-cat-module-02.png" class="card-img-top" alt="1"/>
  
</div>



<div class="col">
<div   class = "imground"     class="p-3 border bg-light card"></div>
  <img        src="https://k.nooncdn.com/cms/pages/20210222/c8b83d6125fb687ba8b4db8c81ca9d4b/en_mb-cat-module-05.png" class="card-img-top" alt="1"/>
  
</div>
</div>
</div>






{/* card */}
<h1 class="trending">Trending Deals</h1>


<div class="container">
  <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
    <div class="col">
<div class="p-3 border bg-light card"></div>
  <img src="https://z.nooncdn.com/products/tr:n-t_240/v1620143582/N36633451A_1.jpg" class="card-img-top" alt="1"/>
  <div class="card-body">
    <h5 class="card-title">Samsung</h5>
    <p class="card-text">40 inch 4k samsung.</p>
    <h6 class="card-text">AED 21990</h6>
    <span><strike>AED 3699</strike>40%Off</span>
    <h6 class="card-text">Arives:</h6>
    <span>Tommorrow June-19</span>
  </div>
</div>


<div class="col">
<div class="p-3 border bg-light card"></div>
  <img src="https://z.nooncdn.com/products/tr:n-t_240/v1603870447/N41442670A_1.jpg" class="card-img-top" alt="1"/>
  <div class="card-body">
    <h5 class="card-title">Oculus Quest 2</h5>
    <p class="card-text">Advance Head Set</p>
    <h6 class="card-text">AED 1799.00</h6>
    <span><strike>AED 2400</strike>25%Off</span>
    <h6 class="card-text">Arives:</h6>
    <span>Tommorrow June-19</span>
  </div>
</div>



<div class="col">
<div class="p-3 border bg-light card"></div>
  <img src="https://z.nooncdn.com/products/tr:n-t_240/v1537004783/N17076595A_1.jpg" class="card-img-top" alt="1"/>
  <div class="card-body">
    <h5 class="card-title">hp 27-inch full</h5>
    <p class="card-text">HD Monitor White.</p>
    <h6 class="card-text">AED 63699.00</h6>
    <span><strike>AED 73699</strike>20%Off</span>
    <h6 class="card-text">Arives:</h6>
    <span>Tommorrow June-19</span>
  </div>
</div>




<div class="col">
<div class="p-3 border bg-light card"></div>
  <img src="https://z.nooncdn.com/products/tr:n-t_240/v1605898679/N40559284A_1.jpg" class="card-img-top" alt="1"/>
  <div class="card-body">
    <h5 class="card-title">Apple watch</h5>
    <p class="card-text">Series 6-44mm</p>
    <h6 class="card-text">AED 87656.00</h6>
    <span><strike>AED 96576</strike>45%Off</span>
    <h6 class="card-text">Arives:</h6>
    <span>Tommorrow June-19</span>
  </div>
</div>



<div class="col">
<div class="p-3 border bg-light card"></div>
  <img src="https://z.nooncdn.com/products/tr:n-t_240/v1615355292/N45047130A_1.jpg" class="card-img-top" alt="1"/>
  <div class="card-body">
    <h5 class="card-title">Hp</h5>
    <p class="card-text">Chrome Book Laptop</p>
    <h6 class="card-text">AED 10877</h6>
    <span><strike>AED 23249</strike>40%Off</span>
    <h6 class="card-text">Arives:</h6>
    <span>Tommorrow June-19</span>
  </div>
</div>

</div>
</div>






{/* ///Carousals */}
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://k.nooncdn.com/cms/pages/20201119/57979b83d4326de2e60fa7a0d8441674/en_strip-05.png" className="d-block w-100" alt="Pic1"/>
      </div>
      <div className="carousel-item">
        <img src="https://k.nooncdn.com/cms/pages/20201221/f19e4ee7506d329c3bfd131126812272/en_strip-01.png" className="d-block w-100" alt="Pic2"/>
      </div>
      <div className="carousel-item">
        <img src="https://k.nooncdn.com/cms/pages/20201119/57979b83d4326de2e60fa7a0d8441674/en_strip-04.png" className="d-block w-100" alt="Pic3"/>
      </div>
      
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>



{/* card */}
<div id="color">

{/* 1st big */}
<div class="container">
  <div class="row row-cols-3 row-cols-lg-2 g-2 g-lg-3">
    <div class="col">
<div class="p-3 px-6 border bg-light card"></div>
  <img id= "pic" src="https://k.nooncdn.com/cms/pages/20210221/ae2478a48279107858fc26b6a9c50957/en_cat-module-14.png" class="card-img-top" alt="1"/>
  
</div>




{/* 2nd */}

    <div class="col">
<div class="p-6 px-6 border bg-light card"></div>
  <img  class="smallimg" src="https://k.nooncdn.com/cms/pages/20200817/6888e84c801b736fca132f7bf92bbb69/en_cat-module-19.png" class="card-img-top" alt="1"/>
  

</div>



{/* 3rd */}


    <div class="col">
<div class="p-6 px-6 border bg-light card"></div>
  <img  class="smallimg" src="https://k.nooncdn.com/cms/pages/20200817/6888e84c801b736fca132f7bf92bbb69/en_cat-module-24.png" class="card-img-top" alt="1"/>
  

</div>



<div class="col">
<div class="p-6 px-6 border bg-light card"></div>
  <img  class="smallimg" src="https://k.nooncdn.com/cms/pages/20200817/6888e84c801b736fca132f7bf92bbb69/en_cat-module-29.png" class="card-img-top" alt="1"/>
  

</div>






</div>
</div>








{/* color */}
</div>









</div>



    );
}

export default Home;