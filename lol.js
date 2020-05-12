document.addEventListener('DOMContentLoaded', function(){

    var divText = document.getElementById('main-container');
  
    fetch('https://ddragon.leagueoflegends.com/cdn/10.6.1/data/es_MX/champion.json')
      .then(function(respuesta) {
        return respuesta.json();
      })
      .then(function(myJSON) {
        divText.innerHTML = `
        <section id="lol-cards">
            <div id="container">

                <div id="card-node">
                    <div id="card-node-image">
                        <img src="images/Tristana.png" alt="Tristana">
                    </div>
                    <div id="card-node-content">
                      <h2>` + myJSON.data["Tristana"].id + `: ` + myJSON.data["Tristana"].title + `</h2><p>` + myJSON.data["Tristana"].blurb + `</p>
                    </div>
                </div>
                <div id="card-node">
                    <div id="card-node-image">
                        <img src="images/Poppy.jpg" alt="Poppy">
                    </div>
                    <div id="card-node-content">
                      <h2>` + myJSON.data["Poppy"].id + `: ` + myJSON.data["Poppy"].title + `</h2><p>` + myJSON.data["Poppy"].blurb + `</p>
                    </div>
                </div>
                <div id="card-node">
                    <div id="card-node-image">
                        <img src="images/lulu.jpg" alt="Lulu">
                    </div>
                    <div id="card-node-content">
                      <h2>` + myJSON.data["Lulu"].id + `: ` + myJSON.data["Lulu"].title + `</h2><p>` + myJSON.data["Lulu"].blurb + `</p>
                    </div>
                </div>
               
                <div class="clear-float"></div>
            </div>
        </section>`;
      })
  });
  