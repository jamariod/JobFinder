const mergeWithGoogleButton = document.getElementById("mergeWithGoogle");
const mergeWithFacebookButton = document.getElementById("mergeWithFacebook");
const mergeWithTwitterButton = document.getElementById("mergeWithTwitter");
const successModal = document.querySelector(".success");
const failureModal = document.querySelector(".failure");
const back = document.getElementById("back");

const auth = firebase.auth();

const twitterProvider = new firebase.auth.TwitterAuthProvider();

const mergeWithTwitter = () => {
  const user = auth.currentUser;

  user
    .linkWithPopup(twitterProvider)
    .then(() => {
      console.log("Linked With Twitter Successfully!");
    })
    .catch(error => {
      console.error(error);
    });
};

mergeWithTwitterButton.addEventListener("click", mergeWithTwitter);

//Go to profile page
back.addEventListener("click", () => {
  window.location.assign("../profile");
});
