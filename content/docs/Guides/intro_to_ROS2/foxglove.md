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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR5AEATF%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDYe8ZgGmmFWbn9uz0t6MVMMidKDpNdD1ZI3tFXf5RfxwIhAPb186ilssZMUPYf4G0xJs9d5bh2H4Z2NwgWtXasrmxnKv8DCCAQABoMNjM3NDIzMTgzODA1IgxQkvEC5FqsoHfkCUYq3AMAnevVN7d8gWBSyt2RhAe8Nuy31LStQJ3FOIWV5gBAeCi6OZz7RKAvunCxrykC1QvhewzIEMA8zzvxbb9SaA4nBxGW7%2Banl40kyjonYQYzqufpOdV64ZRTuVtQ7XX2frCcDIBlULPEWqOQDLEjcbxR1Yy01cJcNJrWDCIiZTUw859rOTUI32L8VvnXbd0GS8Urbo4HOHCvviN3eqgtYGBaqM%2Fo020GC9R6iMFkl6A0F1OlxLvJ%2Bz150uxXKHLNh%2BibxIMad3%2BBAec%2Fc7vjp%2Fi3cXTOdeCiToCgZDybvhnROgJx8SVwugZ8XGcxO%2BQxHZQJ09vuedu3xtRk5j1%2FYgSR0vZloHO9hh%2BRqlLyNtEnzcjb9BjiFxct1GxKBkBjivWGZBotDjGY9xcXPZKugKWmAMJqfdBnp53KL%2B3YEh72ALTZPQJGKCCpXxroPd7g%2BNuRcTx3dTZijgI3BNw5de%2B3Bzycjw6iRgkuvWWLqResMwqQ3tXvaMY15JQwi8BYhi3cZG2eHKJjwrnMwIu4knQTKA3cs%2BvukAX%2BhfdUto3x%2B%2BgYTlkvWZ%2FLyITYJ4Cl3RJEX7vsF%2FdQLpZbQJG6pl3HGrXU6sooBGbT4fBV44xCVY6r8B%2FNON4Q8AJrUzCk%2BpTIBjqkAQhwr6Stt2DKgaW05fpGz6tsImHKgpbRlv74ZAA1DzNzo%2Boe4rTwHsekUreWqSHEuc1ZiDwL1E3YIBjQIMVZXmLB4q3NH0v5KSEW70zhJfDPp7kBJGsE36RtPhL1t0B6kVaGmDsPkvWhhs7IxYPH80Ur0CUU22kQXbOkDldBNWkDFdZV2BGBRE3QPEN48ByFo3D7tSntwwbX1vomwGFaFVqe%2Bwyl&X-Amz-Signature=8c060ed47e0a743f094fc2ba68d7e2d5790495e3996a3b71bb7ba75d7eb3a793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR5AEATF%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDYe8ZgGmmFWbn9uz0t6MVMMidKDpNdD1ZI3tFXf5RfxwIhAPb186ilssZMUPYf4G0xJs9d5bh2H4Z2NwgWtXasrmxnKv8DCCAQABoMNjM3NDIzMTgzODA1IgxQkvEC5FqsoHfkCUYq3AMAnevVN7d8gWBSyt2RhAe8Nuy31LStQJ3FOIWV5gBAeCi6OZz7RKAvunCxrykC1QvhewzIEMA8zzvxbb9SaA4nBxGW7%2Banl40kyjonYQYzqufpOdV64ZRTuVtQ7XX2frCcDIBlULPEWqOQDLEjcbxR1Yy01cJcNJrWDCIiZTUw859rOTUI32L8VvnXbd0GS8Urbo4HOHCvviN3eqgtYGBaqM%2Fo020GC9R6iMFkl6A0F1OlxLvJ%2Bz150uxXKHLNh%2BibxIMad3%2BBAec%2Fc7vjp%2Fi3cXTOdeCiToCgZDybvhnROgJx8SVwugZ8XGcxO%2BQxHZQJ09vuedu3xtRk5j1%2FYgSR0vZloHO9hh%2BRqlLyNtEnzcjb9BjiFxct1GxKBkBjivWGZBotDjGY9xcXPZKugKWmAMJqfdBnp53KL%2B3YEh72ALTZPQJGKCCpXxroPd7g%2BNuRcTx3dTZijgI3BNw5de%2B3Bzycjw6iRgkuvWWLqResMwqQ3tXvaMY15JQwi8BYhi3cZG2eHKJjwrnMwIu4knQTKA3cs%2BvukAX%2BhfdUto3x%2B%2BgYTlkvWZ%2FLyITYJ4Cl3RJEX7vsF%2FdQLpZbQJG6pl3HGrXU6sooBGbT4fBV44xCVY6r8B%2FNON4Q8AJrUzCk%2BpTIBjqkAQhwr6Stt2DKgaW05fpGz6tsImHKgpbRlv74ZAA1DzNzo%2Boe4rTwHsekUreWqSHEuc1ZiDwL1E3YIBjQIMVZXmLB4q3NH0v5KSEW70zhJfDPp7kBJGsE36RtPhL1t0B6kVaGmDsPkvWhhs7IxYPH80Ur0CUU22kQXbOkDldBNWkDFdZV2BGBRE3QPEN48ByFo3D7tSntwwbX1vomwGFaFVqe%2Bwyl&X-Amz-Signature=6d4b7dab18e64be2e8f2365604d69af55655b5a4cb6d9e84ae89951b468f0798&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
