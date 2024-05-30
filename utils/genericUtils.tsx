import Router from "next/router";
import firebase from "firebase/app";

export const signOut = async () => {
  await firebase.auth().signOut();
  Router.push("/");
};
