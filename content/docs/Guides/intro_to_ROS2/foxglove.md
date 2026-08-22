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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C4SJ6WX%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtJtDKKsfr%2BsEwR4anqwo7aY2HY9m2rzcw2TQr%2BjnFBAiA1eiTxr3ppGbf5cRBE9rcUiqSIZPWX3CEPA%2BGzM%2B1BGiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2hfsM4umBqf3aQXKKtwDzYilZ294xc4vcw4nfTEl%2BLDlY8uiV0W2oQBxbTMtMh7hNvoxP9j0FP0qrj8HIgZPF%2BbFa3SLL1Lc8fCpqXfOX%2BmBTgw26UfSTF5dx6xRouZjgjwQJvqxcFMh78A76H2hoglN3G3fvLLhPnzRbf0vRqTq1uTXzRPZzNI27YzaJYPdrOVC6ZDokhiGf3fSGCzO6eebUOb5JVhKVhrwH6WobEC6FwXSMZ6bLVyP0WL9wKQrlf1wGO7c%2BfAUuEzwSHN5ksF%2BmYoSrU2RgvBR8tZr6hybjfeaY3VUxT2%2FftDOD%2B5t70E%2BhyTqw8IicEJv0iP%2F9%2BwOu%2FAMc3fqNRs3vBYO5k2830H8I0duVrcmKxwYYDI91FsigXYLOTXDbFSnqsUcCDjB1dXS63sFhZZBUVPh8i7hNj5ySLt1fbB34q7%2Bs2VWppmrV1%2FK4fpcLMlW5DAtVzkw4sYvBK5vFBmEK1mfh%2BEnuAimo78NohmuOgk%2F2HNhT7KGdfmbXmjWrUpYrCCOfjTFW6CvtcYlvxYQwaIJ%2B6sL8v9ajUgmyDeAkB%2F6EYRbwbClopKcWIHeyjl47LFVgotTWARlaJL4m25POgYDawv9ovy0K2PLeiw8YRA1pGnhSNzvzal7CsVxx68wz8Kj1AY6pgF%2BwWQtR8V%2BylZBV7BJLtMH0fbm7vzYMuIpe3ykrD3r5xIIID%2F9aQPoJ0XMRmt7Wfzw9yQ9MdGHF9Fp8b%2FBUdk70%2BROrQF%2FgHFKE0z8f8q2qGnjQ9SMgDLh3s32FJut3%2F2eKhvKpagRg917J3RRffwfvcwsIFiQ2c5kHw0qTh4fNiQ3XURlc4ss0N4vGV8Pz%2Bw%2FowdSe99jRLU9jlVqiVtiDGj0tPSx&X-Amz-Signature=3574a263e457c2de5111e3ae469b0be71df0cda764ef0eec543810cdac09f682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C4SJ6WX%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtJtDKKsfr%2BsEwR4anqwo7aY2HY9m2rzcw2TQr%2BjnFBAiA1eiTxr3ppGbf5cRBE9rcUiqSIZPWX3CEPA%2BGzM%2B1BGiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2hfsM4umBqf3aQXKKtwDzYilZ294xc4vcw4nfTEl%2BLDlY8uiV0W2oQBxbTMtMh7hNvoxP9j0FP0qrj8HIgZPF%2BbFa3SLL1Lc8fCpqXfOX%2BmBTgw26UfSTF5dx6xRouZjgjwQJvqxcFMh78A76H2hoglN3G3fvLLhPnzRbf0vRqTq1uTXzRPZzNI27YzaJYPdrOVC6ZDokhiGf3fSGCzO6eebUOb5JVhKVhrwH6WobEC6FwXSMZ6bLVyP0WL9wKQrlf1wGO7c%2BfAUuEzwSHN5ksF%2BmYoSrU2RgvBR8tZr6hybjfeaY3VUxT2%2FftDOD%2B5t70E%2BhyTqw8IicEJv0iP%2F9%2BwOu%2FAMc3fqNRs3vBYO5k2830H8I0duVrcmKxwYYDI91FsigXYLOTXDbFSnqsUcCDjB1dXS63sFhZZBUVPh8i7hNj5ySLt1fbB34q7%2Bs2VWppmrV1%2FK4fpcLMlW5DAtVzkw4sYvBK5vFBmEK1mfh%2BEnuAimo78NohmuOgk%2F2HNhT7KGdfmbXmjWrUpYrCCOfjTFW6CvtcYlvxYQwaIJ%2B6sL8v9ajUgmyDeAkB%2F6EYRbwbClopKcWIHeyjl47LFVgotTWARlaJL4m25POgYDawv9ovy0K2PLeiw8YRA1pGnhSNzvzal7CsVxx68wz8Kj1AY6pgF%2BwWQtR8V%2BylZBV7BJLtMH0fbm7vzYMuIpe3ykrD3r5xIIID%2F9aQPoJ0XMRmt7Wfzw9yQ9MdGHF9Fp8b%2FBUdk70%2BROrQF%2FgHFKE0z8f8q2qGnjQ9SMgDLh3s32FJut3%2F2eKhvKpagRg917J3RRffwfvcwsIFiQ2c5kHw0qTh4fNiQ3XURlc4ss0N4vGV8Pz%2Bw%2FowdSe99jRLU9jlVqiVtiDGj0tPSx&X-Amz-Signature=55334ab17154c0a3a07420d065dd2fb853e3deec045dae6bba169356fa8de61e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
