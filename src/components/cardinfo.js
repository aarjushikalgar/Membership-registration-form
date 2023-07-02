import React from 'react'

export default function Cardinfo(props) {
  return (
    <div>  
        <div class="card mb-3" style={{width: '540px'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{props.userinfo.name}</h5>
        <p class="card-text">
            Email : {
                props.userinfo.email
            }
              </p>
              <p class="card-text">
            mobileumber : {
                props.userinfo.mobileNumber
            }
              </p>
           
        <p class="card-text">
            Address : {
                  props.userinfo.address
            }
        </p>
      
        <p class="card-text"><small class="text-body-secondary"></small></p>
      </div>
    </div>
  </div>
</div>
     
    </div>
  )
}