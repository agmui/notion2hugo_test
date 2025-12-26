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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QODLTOZV%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCmakipN4MrsGDrBg8NYniJ1EO0HKZxpwn4VpO6ynYYJgIgSN7zPfkC86%2B06TEXDKGtV%2FIYTHh8AsFR3VKF5sItPKcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLSzwXt9ypehYkWDFircA905cB6aWp0uDz7N3r8BAgEHSX4gIc5NoMVOYGmduRMZg0jgixV%2B1ixMnNh9mZhiKvo0cx6dsyGHXjkdzQp1JrNI5NvP4H8ZecvA%2BuahwkBOtigWLTeXMVHzyJqKJmdeBe8%2Bhp6Ak9pd%2FDZRCsusQHnjxfVtsN9oDmFsPokelB5kspRzDl1B8uP1DjQ0mXPFZPhFXhcAe1iqY3s7jFbATI5seyh%2BEnoAu1GAn5sHfoZidQdvGvovhfWz2mvtm4yCZOgzDe4T1iuSDgrHrFm0MsI3DMxNK6etWPka27KZDiYv0EkPtCoD7fA6MqhVy0OBt5dDhOdzuIt9LImdn9D4k%2BBMAij1yzEHCyuOOefbgl0iBGIQg2WPM4dhta0S8GpvmivNfvyuwtgR5aPJ3M3aq8cG%2F49%2FGHQcYIVP0LW4cOcsv7EMgeG0OvBSVqNDe3LfP8rCCrLPaiXeaD7bp9Rx4XpFIgbC%2B4XXC%2BSRmcCnyo310l53loHLvjbQdMFLftYEjWDqdPM2rNYCuKjxje%2BcIdmjvpW%2Fxu1Obw3gvepYbJ70ClvV74hX1LMytMRh5iffe1m1ZtADjwrJWa%2BXhpzXnWH8ZDPqR32cPvv%2FclcTmRupb%2FVqit5jVxliO8lMMLyytsoGOqUBQ7TE8%2B5Vj%2Fp6gZAZx5yjzUdWs4zkQU5bfKCXicTGx%2BSIwW9ruEhsWYzUk0Ci7YP0FWrZec%2FDs6hbzyoVFiAstYEzg8vdjNQOj96%2Ftb8hGPy4oY6DEGXo1oA88%2FIhFU2J2S3rAvYDhYW36ZjE1GMeuewKPGntrh4QGZfVHeIjl3VS6BnLWH13744ENHkHhti%2Fj3Q26xd32OA8exGAECvGsKCqXtTE&X-Amz-Signature=24c679312696a617cae5e3a6977d0ea0b80895887b2d97e62b2b04cbf345c28c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QODLTOZV%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCmakipN4MrsGDrBg8NYniJ1EO0HKZxpwn4VpO6ynYYJgIgSN7zPfkC86%2B06TEXDKGtV%2FIYTHh8AsFR3VKF5sItPKcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLSzwXt9ypehYkWDFircA905cB6aWp0uDz7N3r8BAgEHSX4gIc5NoMVOYGmduRMZg0jgixV%2B1ixMnNh9mZhiKvo0cx6dsyGHXjkdzQp1JrNI5NvP4H8ZecvA%2BuahwkBOtigWLTeXMVHzyJqKJmdeBe8%2Bhp6Ak9pd%2FDZRCsusQHnjxfVtsN9oDmFsPokelB5kspRzDl1B8uP1DjQ0mXPFZPhFXhcAe1iqY3s7jFbATI5seyh%2BEnoAu1GAn5sHfoZidQdvGvovhfWz2mvtm4yCZOgzDe4T1iuSDgrHrFm0MsI3DMxNK6etWPka27KZDiYv0EkPtCoD7fA6MqhVy0OBt5dDhOdzuIt9LImdn9D4k%2BBMAij1yzEHCyuOOefbgl0iBGIQg2WPM4dhta0S8GpvmivNfvyuwtgR5aPJ3M3aq8cG%2F49%2FGHQcYIVP0LW4cOcsv7EMgeG0OvBSVqNDe3LfP8rCCrLPaiXeaD7bp9Rx4XpFIgbC%2B4XXC%2BSRmcCnyo310l53loHLvjbQdMFLftYEjWDqdPM2rNYCuKjxje%2BcIdmjvpW%2Fxu1Obw3gvepYbJ70ClvV74hX1LMytMRh5iffe1m1ZtADjwrJWa%2BXhpzXnWH8ZDPqR32cPvv%2FclcTmRupb%2FVqit5jVxliO8lMMLyytsoGOqUBQ7TE8%2B5Vj%2Fp6gZAZx5yjzUdWs4zkQU5bfKCXicTGx%2BSIwW9ruEhsWYzUk0Ci7YP0FWrZec%2FDs6hbzyoVFiAstYEzg8vdjNQOj96%2Ftb8hGPy4oY6DEGXo1oA88%2FIhFU2J2S3rAvYDhYW36ZjE1GMeuewKPGntrh4QGZfVHeIjl3VS6BnLWH13744ENHkHhti%2Fj3Q26xd32OA8exGAECvGsKCqXtTE&X-Amz-Signature=acbab9c96bfd41c03736b3547ad3d58cfc24a61a6f3a0d410f89dadb9ef61137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
