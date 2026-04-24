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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AFKAMAK%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2Bu5mzex8UdjD6MZ4ARRSvQvSmzwqZr%2F1Upb6ZZioyfAiAnbdgFa4zKzrpuTjSAeE190IeECX%2F339aOOacC4E2Xiyr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMIRHcW4Zq7DQSPzciKtwDRL0QSb%2FYn3L1UvGXvsDLVMDz645HbYjKgY%2FTIV1a0Me9UTPtRuwIAMsYA1%2FAA36jbVmjRA7KMpnEaQQyIJtcWlkK1%2BEgNwVVLxn%2FqZO1DIks8FSVP5LoRbCGJihxKTiys8Z6GBmzGvseAWbhOmDMD6UoHKzqtxksuI6w%2BOdnGaxR8owSf8Bygl6Gdr4VromOJy3h3JByQfi26m4kqDIm%2BRR18EIyU7XZK5un9AYSpeJRp%2BvhNUsxS0H0bxLhp%2B8em8BdHg6joEhzzuzE52k8OcCpm2UJzexhIOH5loYf3osYrYJtXtHjf2XQCnfQDMCBZ%2Be9Z7Zpsf%2BG5goYSwhWD1C1ELGiwltNS8Ydy0NE4PKkrVRrC8XMjWt8Xwck70nfTA2eG3f9%2BWJkax%2FmBizrJVnDSI586Ro%2BKcbdrBSkPdOfcMAOkQBRQLJJk%2BWhH%2BHTMAI%2BO8YPssxPbWRlETTT46OPugzFLJMER91DP69dBXqBCppWwcI%2BVocNdLBxTXMoB71HCde2WnuzCdU%2BgrIqwpDcXSCMTDRHjLvDWMvDhTh2Ko%2B3fPIZCa%2FfE4gb44AnFGK0v7SKYIE6oMc1GBxD3ih9y0VpY8IuOQtFMvQ9w9%2BlXu1nZfDOBLsXJ9QwtIuqzwY6pgEdWqR6w86TyMbQ4gtJKZq46eFE%2Be16gHzpUnYyw%2FehvAtQgPvVCZidanmdmKVSBT%2BKa4tABJkjzjev%2BY96yDXmBwl1c34wJrGss%2F2x0shoDueO1iqh4qfY3t56MaDPt74Xi3YNFuxoKxk2HVGhyR%2Bhbr4iZ6gCyMZvPTQzGkFFUUYiVVOXTC%2FWkyfzvh4gDXSdkzvreW333%2F3%2FTOwBWKemwAcaglsF&X-Amz-Signature=385f4a8283e0143cdf132647406a9bdf67d0660ee62d971c3b79dab92150253d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AFKAMAK%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2Bu5mzex8UdjD6MZ4ARRSvQvSmzwqZr%2F1Upb6ZZioyfAiAnbdgFa4zKzrpuTjSAeE190IeECX%2F339aOOacC4E2Xiyr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMIRHcW4Zq7DQSPzciKtwDRL0QSb%2FYn3L1UvGXvsDLVMDz645HbYjKgY%2FTIV1a0Me9UTPtRuwIAMsYA1%2FAA36jbVmjRA7KMpnEaQQyIJtcWlkK1%2BEgNwVVLxn%2FqZO1DIks8FSVP5LoRbCGJihxKTiys8Z6GBmzGvseAWbhOmDMD6UoHKzqtxksuI6w%2BOdnGaxR8owSf8Bygl6Gdr4VromOJy3h3JByQfi26m4kqDIm%2BRR18EIyU7XZK5un9AYSpeJRp%2BvhNUsxS0H0bxLhp%2B8em8BdHg6joEhzzuzE52k8OcCpm2UJzexhIOH5loYf3osYrYJtXtHjf2XQCnfQDMCBZ%2Be9Z7Zpsf%2BG5goYSwhWD1C1ELGiwltNS8Ydy0NE4PKkrVRrC8XMjWt8Xwck70nfTA2eG3f9%2BWJkax%2FmBizrJVnDSI586Ro%2BKcbdrBSkPdOfcMAOkQBRQLJJk%2BWhH%2BHTMAI%2BO8YPssxPbWRlETTT46OPugzFLJMER91DP69dBXqBCppWwcI%2BVocNdLBxTXMoB71HCde2WnuzCdU%2BgrIqwpDcXSCMTDRHjLvDWMvDhTh2Ko%2B3fPIZCa%2FfE4gb44AnFGK0v7SKYIE6oMc1GBxD3ih9y0VpY8IuOQtFMvQ9w9%2BlXu1nZfDOBLsXJ9QwtIuqzwY6pgEdWqR6w86TyMbQ4gtJKZq46eFE%2Be16gHzpUnYyw%2FehvAtQgPvVCZidanmdmKVSBT%2BKa4tABJkjzjev%2BY96yDXmBwl1c34wJrGss%2F2x0shoDueO1iqh4qfY3t56MaDPt74Xi3YNFuxoKxk2HVGhyR%2Bhbr4iZ6gCyMZvPTQzGkFFUUYiVVOXTC%2FWkyfzvh4gDXSdkzvreW333%2F3%2FTOwBWKemwAcaglsF&X-Amz-Signature=16ded583c1c6aeb09ba01ea314da7fb0cbf474157d5a187bac15fb7aa2de8438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
