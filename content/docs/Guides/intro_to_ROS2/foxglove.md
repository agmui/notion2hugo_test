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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637FW2SI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T221000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5sW23eqSLsJ3sX%2F1uX8G5sixMrJofUE7JHA9lWnz6aQIhAI%2BOHF%2BeBj32r%2BxKMgBDZ%2BKskPSO5gISPrpgJESZlWYCKv8DCDcQABoMNjM3NDIzMTgzODA1IgyrWggDCYbFBJegu6oq3ANZE8Zj7xH%2B3%2FsrBN%2F6pv8bYckgsPXFrGtKwa98xlpOfoU1LGB7xaxBQmCNBezR4q7qE1X40H%2BqiveVOUUq2qRQFVWBNRR1u0TyQavKDbOs%2FUTD2ByoFPjOS0mXC6SHHQu3Ii4ny3CVizjenQD%2Bkxz1HfI5WvG0VU9gtaF8iXXu4epwhZykS3yqmSpiwK%2FzDQYCjCugeHLycjr3%2B3MCBP%2FK83P0ndBBX9LUyr8CE96v94tJhO6oiffeA137ubwLRfEnJQw%2BUn2W7UcUoWfrDFYd8eBCGcZTk3Mlfczz8cOpJm1yHXLrLCnt69iRpsZjHcgLuw0uRYK43Lu42kuEIHWyxQCbsJo%2Fwf8o3IegOPtVipImoXnqa4udwoL66BAUm%2BljdX52%2FTOrJkpUaAni%2Bc2QVmzr9ltsQi6lZJfBBdtYR5R%2FL7WsL50jdpg2OdutbhOr%2FdYj2%2FmTonOH9qeoqMPTfIHIkTR70aLaxlSv3bOkQv6axfMVtAEALlzFeaSyOrzT8WLmyiK15dfXoiIG807%2BjUwJ9%2B9ga%2F%2Bl6CPB98c6zjICuad0zLO6CP3CghNNxFCaXd%2FR2%2FRaaGdgAXsb3oxJ38mPNSK3VJVCWcbLCj%2BlWhumyL3xUjHUxN7PADCJj%2FTEBjqkAUcQCiNp9HalFYrPALRLOxIScv4vOGwA92IZ%2FOr45sluSCU6mfMecYSi%2Bzsv8o62G5N5UGC20pSEOIANVpsHySctnoeVnL67SwCFKhI9yGoswbMAaeWlAKy887bLt7aGJpNB6rLsF2IY5T9FA1hd3%2B2QyuXVodJmj9v%2BM8lvf348UIpCMkSaCjk3NpX56HAO1c26RiESUsPWyanwZIhNISnZdHz1&X-Amz-Signature=adebbdd2ee076dfc3f89d3b02e500210632c19b8965c3c8b135a80db5a8cce76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637FW2SI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T221000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5sW23eqSLsJ3sX%2F1uX8G5sixMrJofUE7JHA9lWnz6aQIhAI%2BOHF%2BeBj32r%2BxKMgBDZ%2BKskPSO5gISPrpgJESZlWYCKv8DCDcQABoMNjM3NDIzMTgzODA1IgyrWggDCYbFBJegu6oq3ANZE8Zj7xH%2B3%2FsrBN%2F6pv8bYckgsPXFrGtKwa98xlpOfoU1LGB7xaxBQmCNBezR4q7qE1X40H%2BqiveVOUUq2qRQFVWBNRR1u0TyQavKDbOs%2FUTD2ByoFPjOS0mXC6SHHQu3Ii4ny3CVizjenQD%2Bkxz1HfI5WvG0VU9gtaF8iXXu4epwhZykS3yqmSpiwK%2FzDQYCjCugeHLycjr3%2B3MCBP%2FK83P0ndBBX9LUyr8CE96v94tJhO6oiffeA137ubwLRfEnJQw%2BUn2W7UcUoWfrDFYd8eBCGcZTk3Mlfczz8cOpJm1yHXLrLCnt69iRpsZjHcgLuw0uRYK43Lu42kuEIHWyxQCbsJo%2Fwf8o3IegOPtVipImoXnqa4udwoL66BAUm%2BljdX52%2FTOrJkpUaAni%2Bc2QVmzr9ltsQi6lZJfBBdtYR5R%2FL7WsL50jdpg2OdutbhOr%2FdYj2%2FmTonOH9qeoqMPTfIHIkTR70aLaxlSv3bOkQv6axfMVtAEALlzFeaSyOrzT8WLmyiK15dfXoiIG807%2BjUwJ9%2B9ga%2F%2Bl6CPB98c6zjICuad0zLO6CP3CghNNxFCaXd%2FR2%2FRaaGdgAXsb3oxJ38mPNSK3VJVCWcbLCj%2BlWhumyL3xUjHUxN7PADCJj%2FTEBjqkAUcQCiNp9HalFYrPALRLOxIScv4vOGwA92IZ%2FOr45sluSCU6mfMecYSi%2Bzsv8o62G5N5UGC20pSEOIANVpsHySctnoeVnL67SwCFKhI9yGoswbMAaeWlAKy887bLt7aGJpNB6rLsF2IY5T9FA1hd3%2B2QyuXVodJmj9v%2BM8lvf348UIpCMkSaCjk3NpX56HAO1c26RiESUsPWyanwZIhNISnZdHz1&X-Amz-Signature=b5f4a652a9ab16c3969de27a7ce439ff074cda9c0a8c43f0a432f711a68e0e8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
