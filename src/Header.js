import React from "react";

export default class Header extends React.Component {
   constructor() {
      super();
      this.state =  { data:  [] };
  	}

  headerPages() {pages() {
    for (const page of pages.pages) {
      if (page[kind]) {
        if (page.name == current) {
          <li class="nav-item active">
            <a class="nav-link" href="{page.path}">
              {page.name} <span class="sr-only">(current)</span>
            </a>
          </li>;
        } else {
          <li class="nav-item">
            <a class="nav-link" href="{page.path}">
              {page.name}
            </a>
          </li>;
        }
      }
    }
     }
	}
		
	 	render(){
		  	return 
      (<nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <     a class="navbar-brand" href="#">
          <img src="/static/svg/kitcoin-k.svg" class="abs" alt="Kitcoin logo" />
          <img
             src="/static/svg/kitcoin-rng.svg"
             id="loading-ring"
            
          
          
        

  <     button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          
          aria-label="Toggle navigation"
        
          <span class="navbar-toggler-icon"></span>
  <     /button>
  <     div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
             or (var page of pages.pages""
             ""
            == current) {
      <li class="nav-item active">
        <a class="nav-link" href="{page.path}"
          >{page.name} <span class="sr-only">(current)</span></a
             >
      </li>
      } else {
      <li class="nav    -item"
    > 
        <a class="nav-link" href="{page.path}">{page.name}</a>
      </li>
      }}}
    </ul>
  </div>
</nav>)

		}
}