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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY6RHTKG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDpVWBcgDIsAHnqsaqY1FEPE6sMccax3uXd9svgDe5v1gIgFcs8pOaR7T%2FqVokLltOa7zqaMmkwI6WyH9lmCCeGau8q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDvXPxP1bfHRrvVb3ircAxv4Cobum1ySP%2FSq5OmN4KNl0oiBnk2DRl0n%2BwdyssYyJWyH8J4uQnoJZ7YkF5ktekN3P6HMjQlYOMu1NG%2Bqa5S0A%2B7vX0HzV3mOfxDwQCY4KfOSPODnDVMBiHVqA%2BIvWiWJd18XQjdIsG%2BbDLhxOKPEQvpH%2B0lFGFKd1VAnw9TlKXTsDTwHWHiI0aBuwzf4UozmsI8mrkVD0A3dCkYvuJZpTCORhOMiWzPlRz4WFJ60FfBKOlCVQm4ECGhX1B0XZ1UfC246FnTMkwZ756TY3rUIqoE2sz5LjTzwNNCPLv7NjN4jtJYCPKtpCpb2fAzwcXjFywxUqtLbT0pkjrzjsDjtQel6GCKRPgZdnfGhf3zKy4FU2yXYgRYCbXnqlmuOtHqsfc5Q3i1mHYgg3YExRDNAZLe4%2F8g5qRWXtea%2FaJ3AvIPYtvOjacoROazh%2BFFslyEmdM2xW7y2xlUS8e1Jk4v10FsLEINCf3jZjx3HTitluGOWVOMdAQAlpO0bRO%2FdEAQpNVT9xKDr%2FXPvDP0pG4uUGFaKHKc7e0hRGKfRCCKtLMLTXWbvV%2Bcix4WI5Uy6%2FGucU%2FbCbyo9E9lm3SCwJsgc%2BXdVtwwX9CSD%2FUqANJHTt8%2F3ovtWnIOGN%2BCoMPOj%2BsQGOqUBGI8%2BdDFucdp48cmL6L0DBHlK2ZDxONwTtnU5L2Cd%2BLdWdSfuP4JKsFgPSqqYsfY4J11aCyToG6Og8W5aBixqs2wrhrM87GaSYW5l4kFWo%2FeECHHR2NJUTKFNUpXENtWfIwnl4XtQ8HoS7sFox%2B5JGoL%2F18eGfSU2weUbZi6lWtnoKGMmN0Hz4A4RSRAlmLtnA8905ZQEV9bxX288eAM85TCjh%2BUO&X-Amz-Signature=6d1609aa15ab0854e94173d8d1a971f57eedbcd8d49cc538d642d7aa60852eb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Foxglove is similar to rviz however one of its biggest feature is its ability to connect over the internet.

This is nice for wireless robotics setups but still need a rviz visualization.

You are also able to record and play back sensor data and visualize it in foxglove.

## Using foxglove

First make sure you know the ip of your robot.

<details>
      <summary>How to get robot ip:</summary>
      To find the robot’s ip run on the robot computer:
  </details>

For now I recommend using your phone’s hotspot to connect between the computer and robot.

<details>
      <summary>how to connect robot jetson/rasberry pi to hotspot</summary>
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY6RHTKG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDpVWBcgDIsAHnqsaqY1FEPE6sMccax3uXd9svgDe5v1gIgFcs8pOaR7T%2FqVokLltOa7zqaMmkwI6WyH9lmCCeGau8q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDvXPxP1bfHRrvVb3ircAxv4Cobum1ySP%2FSq5OmN4KNl0oiBnk2DRl0n%2BwdyssYyJWyH8J4uQnoJZ7YkF5ktekN3P6HMjQlYOMu1NG%2Bqa5S0A%2B7vX0HzV3mOfxDwQCY4KfOSPODnDVMBiHVqA%2BIvWiWJd18XQjdIsG%2BbDLhxOKPEQvpH%2B0lFGFKd1VAnw9TlKXTsDTwHWHiI0aBuwzf4UozmsI8mrkVD0A3dCkYvuJZpTCORhOMiWzPlRz4WFJ60FfBKOlCVQm4ECGhX1B0XZ1UfC246FnTMkwZ756TY3rUIqoE2sz5LjTzwNNCPLv7NjN4jtJYCPKtpCpb2fAzwcXjFywxUqtLbT0pkjrzjsDjtQel6GCKRPgZdnfGhf3zKy4FU2yXYgRYCbXnqlmuOtHqsfc5Q3i1mHYgg3YExRDNAZLe4%2F8g5qRWXtea%2FaJ3AvIPYtvOjacoROazh%2BFFslyEmdM2xW7y2xlUS8e1Jk4v10FsLEINCf3jZjx3HTitluGOWVOMdAQAlpO0bRO%2FdEAQpNVT9xKDr%2FXPvDP0pG4uUGFaKHKc7e0hRGKfRCCKtLMLTXWbvV%2Bcix4WI5Uy6%2FGucU%2FbCbyo9E9lm3SCwJsgc%2BXdVtwwX9CSD%2FUqANJHTt8%2F3ovtWnIOGN%2BCoMPOj%2BsQGOqUBGI8%2BdDFucdp48cmL6L0DBHlK2ZDxONwTtnU5L2Cd%2BLdWdSfuP4JKsFgPSqqYsfY4J11aCyToG6Og8W5aBixqs2wrhrM87GaSYW5l4kFWo%2FeECHHR2NJUTKFNUpXENtWfIwnl4XtQ8HoS7sFox%2B5JGoL%2F18eGfSU2weUbZi6lWtnoKGMmN0Hz4A4RSRAlmLtnA8905ZQEV9bxX288eAM85TCjh%2BUO&X-Amz-Signature=637057cca78bedb1e976d09037a413a5c9390218dccf268e644fa0eae9dba0bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
