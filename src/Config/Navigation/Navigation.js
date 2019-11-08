import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Dashboard, Signup, Login, PostRequirement, MyRequest, Notification, PostDetail, MyPosts } from '../../Screens/index'
const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
  Signup: {
    screen: Signup,
  },
  Home: {
    screen: Dashboard,
  },
  PostRequirement: {
    screen: PostRequirement
  },
  Notification: {
    screen: Notification
  },
  MyRequest: {
    screen: MyRequest
  },
  PostDetail: {
    screen: PostDetail
  },
  MyPosts: {
    screen: MyPosts
  }

});

export default createAppContainer(AppNavigator);