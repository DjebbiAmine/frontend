import { Suspense, useState, useEffect  } from "react";
import { BrowserRouter as Router, Switch} from "react-router-dom";
import Routes from "./routes/Routes";
import Loading from "./components/Loading/Loading";
import ThemeRoute from "./routes/ThemeRoute/ThemeRoute";


//ok



function App() {


  let routes;

    routes = (
      <Switch>
      {
        Routes?.map((route, index) => {
          return (
            <ThemeRoute
              key={index}
              name={route.name}
              exact={route.exact}
              path={route.path}
              theme={route.theme}
              component={route.component}
            >{route.component}</ThemeRoute>
          )
        })
      }
    </Switch>
       );
      
  return (

    <Suspense fallback={<Loading />}>
      <Router>
      {routes}
      </Router>
    </Suspense>

  );
}

export default App;
