---
sys:
  pageId: "231da3bc-6297-8065-bc7c-f8407c2f1ec6"
  createdTime: "2025-07-15T23:35:00.000Z"
  lastEditedTime: "2025-08-11T17:27:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/foxglove.md"
title: "foxglove"
date: "2025-08-11T17:27:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 158
toc: false
icon: ""
---

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CYOWK3L%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4nSVAnHgbex4ijLXk9Zx0ZXR5J9G4fCpbhZOSzoc9wAiEAob%2F%2B6D3KkwbFoCZEuIs3tAMeakPM%2B8lWvVZiZ8THrLUq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDKfwcQ5dzVbFfSWy6SrcAxsLc1VRFaz3CvJVBE6snS7X2UiPxHRHqYwnyHh1MtBOYg89y%2BqAh8FSW93BUr2c4W2T70%2FjYDZIp8sUVZYzLzsFNLHI%2BHHp%2BtnAC6bYycnYWaBzdnV6POvUEh3tyly1KCAdNNBHdsQ2w55pI5ty13UVlcVg8G4gydfhNFbs4Te0bsgPmxOBkcUQzmwt5BoQ5c3WjDCHqnNo%2F1dy0isRSCBpull3Wzr68QmZaSbYl%2FsZPmsTnqmfoNIJ86LVgL6L0Hert9vRqjyyS8TfKCJ2SSe3qO6acE%2FJJP1kK1WH2tpd0KGIobgnhC0uJBCVwSXdx7EHcTAhOg89KB2sBFF1s%2ByPCe5WCw0Wi8aFMgHF4jgpy%2FWybPsZqh0XOHPrHklj3%2BJH0W0dQxZgWAgVheRr2%2F30Oj%2B8fAvTJkf7QZXNY3OyF9GWCDgjOk7ck2lU600pQAqJYgIouw5DjEiC26Cd1LtfWVei9%2FlinKBOHloBtXXQBrSar2jFnBeoqBCdtbjKzIqZSVw4lAag8rhc%2B0P7dqOuYoevStVETXMoZ%2Far3yVbCTHxdRFWDvExSaSxCbmJ0eklIy%2Fj2kBnCx0MUnFheCoPN1j%2BXl031nA3%2FrPwkTNppjS90rYZZnG%2F%2B5lDMJ3LgsoGOqUBe0yCniDaW2FFU1HHHE833r4%2BfESldcYw%2BZvXZmzRvaHj436WO6nNjtglLg33CsxsdePhMSSqUhAGQKeK6Sli7tvlcxIvMbe1p1LpBcPUOkHGJQq7iAvsJX2UnjR4%2Btt8nbvFFVWd6p%2B9hcC4U4XaXuQ0KYm8HNhUUIUDC8OsZoZkUWhmV%2BY9nz%2BflgW5K7iu8K4Bq2GXzaKvjn5zYozUWsER8BxR&X-Amz-Signature=7ef9fb6df8003652a0f7dd012211bc77d0fb4afe35e30908742b55709a8fdf7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Foxglove is similar to rviz however one of its biggest feature is its ability to connect over the internet.

This is nice for wireless robotics setups but still need a rviz visualization.

You are also able to record and play back sensor data and visualize it in foxglove.

## Using foxglove

First make sure you know the ip of your robot.

<details>
  <summary>{{< markdownify >}}How to get robot ip:{{< /markdownify >}}</summary>
  
To find the robot’s ip run on the robot computer:

```bash
ifconfig
```

To test if your laptop can “_see_” the robot’s computer you can run:

```bash
ping <your robot's ip>
```

If there is no response then it could be a problem with your IT department or you are on a different WiFi.

</details>



For now I recommend using your phone’s hotspot to connect between the computer and robot.

<details>
  <summary>{{< markdownify >}}how to connect robot jetson/rasberry pi to hotspot{{< /markdownify >}}</summary>
  
TODO link ssh guide

</details>



A more permanent solution is to use [talescale](https://tailscale.com/)

Next follow the [**official foxglove guide**](https://docs.foxglove.dev/docs/getting-started/frameworks/ros2) and then come back to this guide

When you get to the section that says `localhost` you can replace it with the robot’s ip

Once you are able to manually start the foxglove node on your robot you can add this line to your launch file to automatically start it:

```bash
ros_bridge_server = ExecuteProcess(cmd="ros2 launch rosbridge_server rosbridge_websocket_launch.xml".split(' '), output='screen')
```

## Setting up visualizations

It is worthwhile to look though the different types of [panels that foxglove offers](https://docs.foxglove.dev/docs/visualization/panels). However, to just view the scanned map you just need to add a 3D panel.

Look though the list of topics on the left to find the `Laser scan` and `Grid Map` and enable them to view them. The way to add them into the view is similar to rviz. It is recommended to play around and find what else can be viewed.

## publish goal pose

There is also a way to publish a goal pose just like in rviz near the top right of the 3D panel

You can change the topic it publishes too in the settings tab

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CYOWK3L%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4nSVAnHgbex4ijLXk9Zx0ZXR5J9G4fCpbhZOSzoc9wAiEAob%2F%2B6D3KkwbFoCZEuIs3tAMeakPM%2B8lWvVZiZ8THrLUq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDKfwcQ5dzVbFfSWy6SrcAxsLc1VRFaz3CvJVBE6snS7X2UiPxHRHqYwnyHh1MtBOYg89y%2BqAh8FSW93BUr2c4W2T70%2FjYDZIp8sUVZYzLzsFNLHI%2BHHp%2BtnAC6bYycnYWaBzdnV6POvUEh3tyly1KCAdNNBHdsQ2w55pI5ty13UVlcVg8G4gydfhNFbs4Te0bsgPmxOBkcUQzmwt5BoQ5c3WjDCHqnNo%2F1dy0isRSCBpull3Wzr68QmZaSbYl%2FsZPmsTnqmfoNIJ86LVgL6L0Hert9vRqjyyS8TfKCJ2SSe3qO6acE%2FJJP1kK1WH2tpd0KGIobgnhC0uJBCVwSXdx7EHcTAhOg89KB2sBFF1s%2ByPCe5WCw0Wi8aFMgHF4jgpy%2FWybPsZqh0XOHPrHklj3%2BJH0W0dQxZgWAgVheRr2%2F30Oj%2B8fAvTJkf7QZXNY3OyF9GWCDgjOk7ck2lU600pQAqJYgIouw5DjEiC26Cd1LtfWVei9%2FlinKBOHloBtXXQBrSar2jFnBeoqBCdtbjKzIqZSVw4lAag8rhc%2B0P7dqOuYoevStVETXMoZ%2Far3yVbCTHxdRFWDvExSaSxCbmJ0eklIy%2Fj2kBnCx0MUnFheCoPN1j%2BXl031nA3%2FrPwkTNppjS90rYZZnG%2F%2B5lDMJ3LgsoGOqUBe0yCniDaW2FFU1HHHE833r4%2BfESldcYw%2BZvXZmzRvaHj436WO6nNjtglLg33CsxsdePhMSSqUhAGQKeK6Sli7tvlcxIvMbe1p1LpBcPUOkHGJQq7iAvsJX2UnjR4%2Btt8nbvFFVWd6p%2B9hcC4U4XaXuQ0KYm8HNhUUIUDC8OsZoZkUWhmV%2BY9nz%2BflgW5K7iu8K4Bq2GXzaKvjn5zYozUWsER8BxR&X-Amz-Signature=3a38d98096e51d1ec442a616801e9aee0251226b564b9030596b812f37e50880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
