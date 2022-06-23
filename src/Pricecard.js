import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function Pricecard({data}){
    return <div className="col-lg-4">
    <div className="card mb-5 mb-lg-0">
      <div className="card-body">
        <h5 className="card-title text-muted text-uppercase text-center">{data.title}</h5>
        <hr/>
        <h6 className="card-price text-center">{data.price}<span className="period">/month</span></h6>
        <ul className="fa-ul">
          {
            data.features.map((list)=>{
              return <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                  </span>
                  {list.name}</li> 
            })
          }

        </ul>
        <div className="d-grid">
          <a href="#" className="btn btn-primary text-uppercase">{data.bname}</a>
        </div>
      </div>
    </div>
    </div>
    
 
}
  

export default Pricecard;