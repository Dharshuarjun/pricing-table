import './App.css';
import Pricecard from "./Pricecard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let priceCard=[
    {
      title:"FREE",
     price:"$0",
    features:[
      {
        name:" 10 Users included ", 
      },
      {
        name:" 2GB of Storage ",        
      },
      {
        name:" Email support ",       
      },
      {
        name:" Help center access ",       
      },
      
    ],
    bname:"Sign up for free",
  },
  {
    title:"PRO",
   price:"$15",
  features:[
    {
      name:"20 Users included",     
    },
    {
      name:" 10GB of Storage",     
    },
    {
      name:" Priority email support ",      
    },
    {
      name:" Help center access ",     
    }
    
  ],
  bname:"Get Started",
},

{
  title:"Enterprise",
 price:"$29",
 features:[
  {
    name:" 30 Users included ",   
  },
  {
    name:" 15 GB of Storage ",    
  },
  {
    name:" Phone and email support ",    
  },
  {
    name:" Help center access ",    
  }, 
],
bname:"Contact Us",
}
  ]
  return ( <section className="pricing py-5">
     <div className="container">
     < div className="Navbar">
      <ul>
      <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
        <li className="p-2 text-dark">Features</li>
        <li className="p-2 text-dark">Enterprise</li>
        <li className="p-2 text-dark">Support</li>
        <li className="p-2 text-dark">pricing</li>
        <li class="btn btn-outline-primary" href="#">Sign up</li>
        </ul>
        </div>
      
      </div>
      <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 class="display-4">Pricing</h1>
      <p class="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
    </div>
   
  <div className="container">
    <div className="row"> 
    {
      priceCard.map((card)=>{
        return <Pricecard data={card}></Pricecard>
     
      })
    }
    
    </div>
       </div>
    <div class="row">
          <div class="col-12 col-md">
            <small class="d-block mb-3 text-muted">© 2017-2018</small>
          </div>

          <div class="col-6 col-md">
            <h5>Features</h5>
            <ul class="list-unstyled text-small">
              <li class="text-muted" href="#">Cool stuff</li>
              <li class="text-muted" href="#">Random feature</li>
              <li class="text-muted" href="#">Team feature</li>
              <li class="text-muted" href="#">Stuff for developers</li>
              <li class="text-muted" href="#">Another one</li>
              <li class="text-muted" href="#">Last time</li>
            </ul>
          </div>

          <div class="col-6 col-md">
            <h5>Resources</h5>
            <ul class="list-unstyled text-small">
              <li class="text-muted" href="#">Resource</li>
              <li class="text-muted" href="#">Resource name</li>
              <li class="text-muted" href="#">Another resource</li>
              <li class="text-muted" href="#">Final resource</li>
            </ul>
          </div>

          <div class="col-6 col-md">
            <h5>About</h5>
            <ul class="list-unstyled text-small">
              <li class="text-muted" href="#">Team</li>
              <li class="text-muted" href="#">Locations</li>
              <li class="text-muted" href="#">Privacy</li>
              <li class="text-muted" href="#">Terms</li>
            </ul>
          </div>
        </div>
        </section>
    
  );
}

export default App;
