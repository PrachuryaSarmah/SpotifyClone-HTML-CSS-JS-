const showAllButton = document.getElementById("showAllButton");
showAllButton.addEventListener("click", addMoreItems);

let showAllClicked= false;
let count =0;

function addMoreItems() {
    
    if (showAllClicked)return;
    const additionalItemsContainer = document.getElementById("additionalItemsContainer");

    const newItem1 = `
    <div class="item">
        <img src="./images/Viva Latino.jpg" />
        <div class="play">
        <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" class="Svg-sc-ytk21e-0 haNxPq"><path
         d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
        </div>
    <h4>Viva Latino</h4>
    <p>Bunny is on top of the Hottest 50!</p>
    </div>
    `;

    const newItem2 = `
    <div class="item">
        <img src="./images/Mega Hit Mix.jpg" />
        <div class="play">
        <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" class="Svg-sc-ytk21e-0 haNxPq"><path
         d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
        </div>
    <h4>Mega Hit Mix</h4>
    <p>Good Bunny is on top of the Hottest 50!</p>
    </div>
    `;
    const newItem3 = `
    <div class="item">
        <img src="./images/All Out 80s.jpg" />
        <div class="play">
        <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" class="Svg-sc-ytk21e-0 haNxPq"><path
         d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
        </div>
    <h4>All out 80s</h4>
    <p> Bunny is on top of the Hottest 50!</p>
    </div>
    `;

    additionalItemsContainer.innerHTML = newItem1 + newItem2 + newItem3 ;
    showAllClicked=true;
    count++;
}


function clearItems() {
    if (count==0)return;
    const additionalItemsContainer = document.getElementById("additionalItemsContainer");

    while (additionalItemsContainer.firstChild) {
        additionalItemsContainer.removeChild(additionalItemsContainer.firstChild);
    }

    showAllClicked = false; 
}


function goToShowItems (){
    if(count==0)return;
    if(showAllClicked== false)addMoreItems();
}

document.addEventListener("DOMContentLoaded", function () {
    const showAllButton = document.getElementById("showAllButton");
    showAllButton.addEventListener("click", addMoreItems);

    const backButton = document.querySelector(".back-button");
    backButton.addEventListener("click", clearItems);
    
    const forwardButton = document.querySelector(".forward-button");
    forwardButton.addEventListener("click", goToShowItems);
});
