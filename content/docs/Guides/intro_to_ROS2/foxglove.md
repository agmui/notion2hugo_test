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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JPXAMQE%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhYwDtQnN9Srv%2F4Key%2BO%2FaD9rlGZw4zFpUg%2B6cTXu6UAiBMqO2ESJgH2BbOUdPKlBjs2ZYUcQjSBBYIJ9UA33QtbiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxCTfsoLdJ8sEIqt2KtwDK7QRwT5BT6rLA3WbHGoMBtLrjkBjX8Vv%2F%2B6YWR0kS8tLq1hDRH5d%2BZoTy3KKDVJjAmMLFIrgnTU9udRcddYtqgrt6yYKFdkVMJFTyXY1mWiuq63yytKXrDqKbnvcYGOXMHARlnQMWkVDFH%2Ff77Fv3C%2FASdxRKlM1ihU3SRMzFUlV6nGc%2F4tbju1ohLBBpnyoBfLjoMQScZ9DqAqlyxWlg4zKK9j7pHWzlhcahWUezgC%2F0aq7FIMmS7g5auoy9KFpZjJFln2czenPXzXEhWFeZ95CbRx9VsnFRJ1oXjWP6Gjy4Uq5yowfPjQ5%2FbiBZLJ%2BwltBrj8zB7hVHrHLoUpKcD%2FMfQSmqVKtlKvIS5w4iCS2CgnVPh5b9750AqhnWoLJsm00M83T7MGjeCpVynMob0KEluGHc%2BXLuN8TVjIqD7auxO8ZeaCAUApPG9lF5x8zarndc8GmxS%2BUWL9w0KVo9niaGi7mTGvIRY5sAtTrlVZ1dMjiZoYzPUePbdtpzEAt0Pt5d8RyGLN4VpTlAKQ4h0pmfUs%2BmJt%2FxNnpQzcT3B9YE3fHWFwboF87zL6Saa4%2FrfDczZbZX4EeFI5%2BaqxKDnzRHh92ofnCjEWzZXbhN5zxZ35CtDUzgjikNQkwsLbB0gY6pgE%2BS05d3J4Joy8yvP0FgBTaWQTxjkOv1WYW2zStVa5RMujR5tm6enXDJsA2PdgnBjPyV1Bda9yTvw9FAskVKcm1zeMrZ%2BrEgMPn4FNFM%2Fi07lp5%2Bxcmc3%2B7QgPJDdJ84N3aOrsxABaSwaAQsjiiRwePBBXMrevSrkEMxlBfarLyz8bqwMCEptymk8Hoz9CBDjCSREHAJErZhPcg8b8R0sf0QdCtKFac&X-Amz-Signature=32c942cd540621d538a9eed582301af5f724b00f4e9126b1feaf2aec0f015fe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JPXAMQE%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhYwDtQnN9Srv%2F4Key%2BO%2FaD9rlGZw4zFpUg%2B6cTXu6UAiBMqO2ESJgH2BbOUdPKlBjs2ZYUcQjSBBYIJ9UA33QtbiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxCTfsoLdJ8sEIqt2KtwDK7QRwT5BT6rLA3WbHGoMBtLrjkBjX8Vv%2F%2B6YWR0kS8tLq1hDRH5d%2BZoTy3KKDVJjAmMLFIrgnTU9udRcddYtqgrt6yYKFdkVMJFTyXY1mWiuq63yytKXrDqKbnvcYGOXMHARlnQMWkVDFH%2Ff77Fv3C%2FASdxRKlM1ihU3SRMzFUlV6nGc%2F4tbju1ohLBBpnyoBfLjoMQScZ9DqAqlyxWlg4zKK9j7pHWzlhcahWUezgC%2F0aq7FIMmS7g5auoy9KFpZjJFln2czenPXzXEhWFeZ95CbRx9VsnFRJ1oXjWP6Gjy4Uq5yowfPjQ5%2FbiBZLJ%2BwltBrj8zB7hVHrHLoUpKcD%2FMfQSmqVKtlKvIS5w4iCS2CgnVPh5b9750AqhnWoLJsm00M83T7MGjeCpVynMob0KEluGHc%2BXLuN8TVjIqD7auxO8ZeaCAUApPG9lF5x8zarndc8GmxS%2BUWL9w0KVo9niaGi7mTGvIRY5sAtTrlVZ1dMjiZoYzPUePbdtpzEAt0Pt5d8RyGLN4VpTlAKQ4h0pmfUs%2BmJt%2FxNnpQzcT3B9YE3fHWFwboF87zL6Saa4%2FrfDczZbZX4EeFI5%2BaqxKDnzRHh92ofnCjEWzZXbhN5zxZ35CtDUzgjikNQkwsLbB0gY6pgE%2BS05d3J4Joy8yvP0FgBTaWQTxjkOv1WYW2zStVa5RMujR5tm6enXDJsA2PdgnBjPyV1Bda9yTvw9FAskVKcm1zeMrZ%2BrEgMPn4FNFM%2Fi07lp5%2Bxcmc3%2B7QgPJDdJ84N3aOrsxABaSwaAQsjiiRwePBBXMrevSrkEMxlBfarLyz8bqwMCEptymk8Hoz9CBDjCSREHAJErZhPcg8b8R0sf0QdCtKFac&X-Amz-Signature=e6814c04392a31e7dc40eb9d2758b7f40c32e642cada61f83bb7e9d47d25083a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
