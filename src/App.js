import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";
import ParentComponent from "./components/ParentComponent";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import FragmentComp from "./components/FragmentComp";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import Counter from "./components/Counter";
import CompC from "./components/CompC";
import { UserProvider } from "./components/userContext";
import PostList from "./components/Post/PostList";
import PostForm from "./components/Post/PostForm";

function App() {
  return (
    // <Provider store={store}>
      <div className="App">
        <PostForm />
        {/* <PostList /> */}


        {/* <UserProvider value="ZikaZaki"> */}
          {/* <CompC /> */}
        {/* </UserProvider> */}

       {/* <Counter>
        {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
       </Counter>

       <Counter>
        {(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
       </Counter> */}

        {/* <ClickCounterTwo />
        <HoverCounterTwo /> */}

        {/* <User render={(isLoggedIn) => isLoggedIn ? 'ZikaZaki' : 'Guest'} /> */}
        {/* <ClickCounter name='ZikaZaki' /> */}
        {/* <HoverCounter name='ZikaZaki'/> */}
        {/* <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Superman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary> */}
        {/* <PortalDemo /> */}
        {/* <FRParentInput /> */}
        {/* <FocusInput /> */}
        {/* <RefsDemo /> */}
        {/* <ParentComp /> */}
        {/* <FragmentComp /> */}
        {/* <Table /> */}
        {/* <LifecycleA /> */}
        {/* <ParentComponent /> */}
        {/* <Form /> */}
        {/* <UserContainer /> */}
        {/* <ItemContainer cake />
        <ItemContainer />
        <HooksCakeContainer/>
        <CakeContainer />
        <IceCreamContainer />
        <NewCakeContainer /> */}
      </div>
    // </Provider>
  );
}

export default App;
