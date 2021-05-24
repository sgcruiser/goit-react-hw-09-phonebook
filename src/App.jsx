import { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import { authOperations } from './redux/auth';
import routes from './routes';
import Container from './components/Container';
import AppBar from './components/AppBar/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Loader from './components/Loader';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "Home_view" */),
);
const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "Register_view" */),
);
const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "Login_view" */),
);
const PhonebookView = lazy(() =>
  import('./views/PhonebookView' /* webpackChunkName: "Phonebook_view" */),
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />

        <Suspense
          fallback={
            <div>
              <p>One moment, loading...</p>
              <Loader />
            </div>
          }
        >
          <Switch>
            <PublicRoute exact path={routes.home} component={HomeView} />

            <PublicRoute
              path={routes.register}
              restricted
              redirectTo={routes.contacts}
              component={RegisterView}
            />

            <PublicRoute
              path={routes.login}
              restricted
              redirectTo={routes.contacts}
              component={LoginView}
            />

            <PrivateRoute
              path={routes.contacts}
              redirectTo={routes.login}
              component={PhonebookView}
            />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
