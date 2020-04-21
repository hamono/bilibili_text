import * as React from 'react';
import Header from './Header';
import Body from "./Body";
import Up from "./Up";
import "./base.scss";
import Foot from './Foot';
import Navigation from './Navigation';
import Picture from './Picture';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TodoList from './Body/Animation/Left/Body/Upcontext/Component/TodoList';
import SignIn from './Body/SignIn';
import SignOn from './Body/SignOn';
import PlayPage from './Body/PlayPage';

export function Bodys() {
  return <div >
    <Picture />
    <Header />
    <Up />
    <Navigation />
    <Body />
    <Foot />
  </div>
}
function defaultTop() {
  return <>
    <Header />
    <Up />
    <TodoList />
    <Foot />
  </>
}
export function signIn() {
  return <>
    <SignIn />
    <Foot />
  </>
}
function signOn() {
  return <>
    <SignOn />
    <Foot />
  </>
}
function playPage(){
  return<>
    <PlayPage />
  </>
}
export default function App() {
  return <BrowserRouter>
      <Switch>
        <Route path="/whachLater/">
          {defaultTop()}
        </Route>
        <Route path="/homepage/">{Bodys()}</Route>
        <Route path="/signIn/">{signIn()}</Route>
        <Route path="/signOn/">{signOn()}</Route>
        <Route path="/playPage/">{playPage()}</Route>
        <Route>
          {Bodys()}
        </Route>
      </Switch>
    </BrowserRouter>
    
}



















