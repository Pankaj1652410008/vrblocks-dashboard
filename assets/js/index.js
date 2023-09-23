function copyText(element) {
    var $copyText = document.getElementById(element).innerText;
    var button = document.getElementById(element + '-button');
   
    navigator.clipboard.writeText($copyText).then(function() {
      var originalText = button.innerText;
      button.innerText = 'Copied!';
     
      setTimeout(function(){
        button.innerText = originalText;
        }, 5000);
    }, function() {
      button.style.cssText = "background-color: var(--red);";
      button.innerText = 'Error';
    });
   

  }

  var modal  = document.getElementById("exampleModal");
  var input = document.getElementById('text-value');
  function referralModal(){
    //input.focus();
    // input.select();
    // input.setSelectionRange(0,9999);
    if(modal.style.display == "none"){
      modal.style.display = "block";
    }
    else{
      modal.style.display = "block"
      modal.style.opacity= "1";
      modal.style.backdropFilter = " brightness(0.5)";
    }
    input.select();
  }
  function closeModal(){
    modal.style.display = "none";
  }
  ////////////////////////////////////////
  var affilite  = document.getElementById("exampleModal4");
  function affiliteRewardModal(){
    if(affilite.style.display == "none"){
      affilite.style.display = "block";
    }
    else{
      affilite.style.display = "block"
      affilite.style.opacity= "1";
      affilite.style.backdropFilter = " brightness(0.5)";
    }
  }
  function affilitecloseModal(){
    affilite.style.display = "none";
  }
  ////////////////////////////////////////////////
  var YourUpline  = document.getElementById("exampleModal5");
  function yourUplinedModal(){
    if(YourUpline.style.display == "none"){
      YourUpline.style.display = "block";
    }
    else{
      YourUpline.style.display = "block"
      YourUpline.style.opacity= "1";
      YourUpline.style.backdropFilter = " brightness(0.5)";
    }
  }
  function yourUplinecloseModal(){
    YourUpline.style.display = "none";
  }
  ///////////////////////////////////////////
  var stake  = document.getElementById("exampleModal2");
  function stakeModal(){
    if(stake.style.display == "none"){
        stake.style.display = "block";
    }
    else{
        stake.style.display = "block"
        stake.style.opacity= "1";
        stake.style.backdropFilter = " brightness(0.5)";
    }
  }
  function stakeCloseModal(){
    stake.style.display = "none";
  }
  ///////////////////////////////////////////
  var unStake  = document.getElementById("exampleModal3");
  function unstakeModal(){
    if(unStake.style.display == "none"){
        unStake.style.display = "block";
    }
    else{
        unStake.style.display = "block"
        unStake.style.opacity= "1";
        unStake.style.backdropFilter = " brightness(0.5)";
    }
  }
  function unStakeCloseModal(){
    unStake.style.display = "none";
  }

  // (async () => {
  //   await loadColorUpdater(tsParticles);
  //   await loadCircleShape(tsParticles);
  //   await loadBaseMover(tsParticles);
  //   await loadSizeUpdater(tsParticles);
  //   await loadOpacityUpdater(tsParticles);
  //   await loadOutModesUpdater(tsParticles);
  
  //   await tsParticles.load("tsparticles", {
  //     fpsLimit: 120,
  //     background: {
  //       color: "#000"
  //     },
  //     particles: {
  //       color: { value: "#ffffff" },
  //       move: {
  //         direction: "none",
  //         enable: true,
  //         outModes: "out",
  //         random: false,
  //         speed: 2,
  //         straight: false
  //       },
  //       number: { density: { enable: true, area: 800 }, value: 80 },
  //       opacity: {
  //         value: 0.5
  //       },
  //       shape: {
  //         type: "circle"
  //       },
  //       size: {
  //         value: { min: 1, max: 5 }
  //       }
  //     }
  //   });
  // })();

  function copyText() {
    // Get the text field
    var copyText = document.getElementById("copyValue");
    
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    
    // Alert the copied text
    swal("Copy", "success", {
      button: false});
    // alert("Copied Referral: " + copyText.value);
    swal({
      icon: "success",
      button: false,
      text: "COPY REFERRAL",
      timer: 1000,
      });
    
  }

  document.getElementById('connect-button').addEventListener('click', event => {
    let account;
    ethereum.request({method: 'eth_requestAccounts'}).then(accounts => {
      account = accounts[0];
      console.log(account);
  
    });
  });


  // function spinHide(){
  //   setTimeOut(() => {
     
  //     document.getElementById('spinner').style.display = "inline-block"
  //   }, 2000);
  
  // }

  function spinHide(){
    var spin = document.getElementById('spinner');
    setTimeout(() => {
      spin.style.display = "inline-block"
    }, 000);
    clearTimeout(() => {
      spin.style.display = "none"
    }, 2000);
   

    
  
   
  
  }
 
  