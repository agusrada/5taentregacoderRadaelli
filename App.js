import TabNavigator from "./src/navigation/TabNavigator";
import { Provider } from "react-redux";
import store from './src/store/index'


export default function App() {

  
  return (
    <Provider store={store}>
      <TabNavigator />
    </Provider>

  );
}

