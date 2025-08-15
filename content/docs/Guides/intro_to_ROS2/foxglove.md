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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM2GGDTA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIE9UjgNmgOdNWpmplF7FOft3TsnqaJZ%2Baf%2Fs617X8gReAiBMeJxU9bj0Fsx%2F%2BFcvEDc73tuimJ5MgaZiSIJMUsXYlCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMMRlGT7Xzd6lSGWRIKtwD6DXzGt3lBF%2BjFl651ObADuA8QqcfFWEcpVXRcJ1u1GbyyAjnmr%2FzeuW5gYyWlEUSfACQ4vJBNjHAo%2BC%2FOt8cMG86rJozKU%2Feth996XxHO6droWx7GOkX0lypg7kXNzAvER7SE7zDHatsCPS5e%2F%2BrV5TKeM99%2Bo4wLjUxpLWWUOQFVBarX%2Bz29MQ0YcA5MqlKdoqAqg8m1AbLmnKNyXuac3JHyk98%2FJLOQEQq3Q%2FWrGiPRUSD2MovfmwslYzTih7Yoa2pgktTu%2BBbveuVNVfVNPp7EZO4%2B%2FW%2Bu2Xbe7bKHiftHLnz07h0X21lh%2Fc3MWVJD7UADkc%2F0cZX5l8u6fyNQ8t5VM1nB5cpK7At1kBfkyI71RSuicwuOvp7bj43Tqp73um8Gc01aK%2B5dmAbx8bCyiUZfwVJQeyzQS%2FumPmxYL6eXN%2BAdc5O1UO08mmDhURcTJLx7SLyiOwvZu0UffykAZEOX2XYsAqnJ5OPe5O%2BYtSadQjH9m0CeVTLP62Z9E0iClYU3eQpyXVLbPQue%2BcLFHrk2Kt%2BvEDozoqvn4YG2HG7YBg6jDd%2F%2FBQYg1JWRs73MYiFflkReWxj08zNl31AKUS%2FDPyMxcOwLeclNcaczF0nCwF3hnrjJpieTl4wyaP6xAY6pgHC5ipuNolwteRJ6%2FbIFCckpWktMEh1xta16poFGw3uu55cbaePYaz51dAoZInjQIlDS7cmE6Pudfnc8GE4KihnHmfcMsBqjMSIv0fcEj5Sn4xZt3e0Y6lNdKDH9M1vJ5tsZ5fQgrP4digSu39brRFMAYJU5YjXRLHiDY6ukjWb58xf6BYPttSw4RWM93Wrx1NQ6%2FtCP1hheirzvfNPE0ovMJFIinmk&X-Amz-Signature=21c8907283a6f6f735ef289052f1a4b727a74b1efd283fbba725cba8ee4d7bea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM2GGDTA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIE9UjgNmgOdNWpmplF7FOft3TsnqaJZ%2Baf%2Fs617X8gReAiBMeJxU9bj0Fsx%2F%2BFcvEDc73tuimJ5MgaZiSIJMUsXYlCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMMRlGT7Xzd6lSGWRIKtwD6DXzGt3lBF%2BjFl651ObADuA8QqcfFWEcpVXRcJ1u1GbyyAjnmr%2FzeuW5gYyWlEUSfACQ4vJBNjHAo%2BC%2FOt8cMG86rJozKU%2Feth996XxHO6droWx7GOkX0lypg7kXNzAvER7SE7zDHatsCPS5e%2F%2BrV5TKeM99%2Bo4wLjUxpLWWUOQFVBarX%2Bz29MQ0YcA5MqlKdoqAqg8m1AbLmnKNyXuac3JHyk98%2FJLOQEQq3Q%2FWrGiPRUSD2MovfmwslYzTih7Yoa2pgktTu%2BBbveuVNVfVNPp7EZO4%2B%2FW%2Bu2Xbe7bKHiftHLnz07h0X21lh%2Fc3MWVJD7UADkc%2F0cZX5l8u6fyNQ8t5VM1nB5cpK7At1kBfkyI71RSuicwuOvp7bj43Tqp73um8Gc01aK%2B5dmAbx8bCyiUZfwVJQeyzQS%2FumPmxYL6eXN%2BAdc5O1UO08mmDhURcTJLx7SLyiOwvZu0UffykAZEOX2XYsAqnJ5OPe5O%2BYtSadQjH9m0CeVTLP62Z9E0iClYU3eQpyXVLbPQue%2BcLFHrk2Kt%2BvEDozoqvn4YG2HG7YBg6jDd%2F%2FBQYg1JWRs73MYiFflkReWxj08zNl31AKUS%2FDPyMxcOwLeclNcaczF0nCwF3hnrjJpieTl4wyaP6xAY6pgHC5ipuNolwteRJ6%2FbIFCckpWktMEh1xta16poFGw3uu55cbaePYaz51dAoZInjQIlDS7cmE6Pudfnc8GE4KihnHmfcMsBqjMSIv0fcEj5Sn4xZt3e0Y6lNdKDH9M1vJ5tsZ5fQgrP4digSu39brRFMAYJU5YjXRLHiDY6ukjWb58xf6BYPttSw4RWM93Wrx1NQ6%2FtCP1hheirzvfNPE0ovMJFIinmk&X-Amz-Signature=7a3980471725b903eea72be29b835e8d04ae893c02ec9196ca459756d4ba734b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
