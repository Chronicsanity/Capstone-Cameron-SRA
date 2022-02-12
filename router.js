export default <Router history={hashHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={home}/>
    <Route path="demo" component={sign_up}/>
  </Route>
</Router>