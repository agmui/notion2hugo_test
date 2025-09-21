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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKOPKRYX%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnDPIC%2FfcdSuHGAiTo5SUXqG2Jbba%2BzArIZVtBH3IQ8gIgPFKxP9dTplKs4niBmrefi5xKhyVOV%2FcJTLX1LWFInhkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTs7wnZEiwBD8AxlSrcA5smSA1sCo1Vg%2FOoUOEYIJ7WhQr1ie3ajkNiUCJ2wpGJWnK%2BdvntvBih11J7BIFf36JbNBuiIBcqUyKdL5eSocZujQu%2FVPEMVtThi6%2BxevfhDNj6vNnPSB6pQK%2BdAroFyG7j38rFKIO4MyG9uM9fPx1N%2BoK9G7N0eo2WbMFFjsR4dqKeoehVhS9KuvdV8f8AsuEvgX%2Fpfj61cv3vY%2F06AcaDbTXE6mYFppIwFkHMKS6LXF55K8gLIfV8g3EMflS2aSDIXZwDDvgAKtztpUT0%2B2eqIqpiuNTnjSuXf%2FnFt2p9UoKemXamkMTSqWe8BGEdKwuYHvuhraqvRHmIYM%2B%2B22ERcsGDMCx52nM490qnYuiXHQtTbMJwtSRPa9U9pOyhTkUU16esXp%2BnUPrQ5y9lkwviLlWb%2BWPXMaJv6npJsCetffohqfycW%2FogFp6ip4cjy3SVBMek3R0%2FINNp21TR44AiCzLhn2jIvqYMJWhiTObEPf3RoWE4We%2FUi6bjw39%2BSSh1w8VcOUtzgxaKR0NH3P0k%2F3s%2Bdk9AHLA%2FpdSG%2Fy9ZOpHt5YvtnzXQ0W6xAttm6Sja1vsBvVGHNRK9ghr8XfBFu2R%2BkQQWhB6Nu8HfskKwPYprqpKTyFPox8XPMI2fvcYGOqUBty%2FrO%2BUJtOZRhxxTQdq%2B1IYOLKReK8J0JQLJs%2BgpRgl8Ta5iUGFef4qxNvoHbqxcGxHCrN1rDZo8Z%2FpbrSjCAnib9AoqzcFe%2Fol688iXO2s22EPHX8dovban2MwhXjJNPQGVtUHLDs0aU3sS%2Bh%2FJPdkPYasV%2F%2FqsWdQ2UIG5ybdFguY45XCBJ6py2j9t86hNip%2Ft739wjgsv%2Bdf0um1W3HW8Vkin&X-Amz-Signature=653b736cb2dde0ab3068e063ecb4596754ffa18f1c64baa08f8492fc74069333&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKOPKRYX%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnDPIC%2FfcdSuHGAiTo5SUXqG2Jbba%2BzArIZVtBH3IQ8gIgPFKxP9dTplKs4niBmrefi5xKhyVOV%2FcJTLX1LWFInhkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTs7wnZEiwBD8AxlSrcA5smSA1sCo1Vg%2FOoUOEYIJ7WhQr1ie3ajkNiUCJ2wpGJWnK%2BdvntvBih11J7BIFf36JbNBuiIBcqUyKdL5eSocZujQu%2FVPEMVtThi6%2BxevfhDNj6vNnPSB6pQK%2BdAroFyG7j38rFKIO4MyG9uM9fPx1N%2BoK9G7N0eo2WbMFFjsR4dqKeoehVhS9KuvdV8f8AsuEvgX%2Fpfj61cv3vY%2F06AcaDbTXE6mYFppIwFkHMKS6LXF55K8gLIfV8g3EMflS2aSDIXZwDDvgAKtztpUT0%2B2eqIqpiuNTnjSuXf%2FnFt2p9UoKemXamkMTSqWe8BGEdKwuYHvuhraqvRHmIYM%2B%2B22ERcsGDMCx52nM490qnYuiXHQtTbMJwtSRPa9U9pOyhTkUU16esXp%2BnUPrQ5y9lkwviLlWb%2BWPXMaJv6npJsCetffohqfycW%2FogFp6ip4cjy3SVBMek3R0%2FINNp21TR44AiCzLhn2jIvqYMJWhiTObEPf3RoWE4We%2FUi6bjw39%2BSSh1w8VcOUtzgxaKR0NH3P0k%2F3s%2Bdk9AHLA%2FpdSG%2Fy9ZOpHt5YvtnzXQ0W6xAttm6Sja1vsBvVGHNRK9ghr8XfBFu2R%2BkQQWhB6Nu8HfskKwPYprqpKTyFPox8XPMI2fvcYGOqUBty%2FrO%2BUJtOZRhxxTQdq%2B1IYOLKReK8J0JQLJs%2BgpRgl8Ta5iUGFef4qxNvoHbqxcGxHCrN1rDZo8Z%2FpbrSjCAnib9AoqzcFe%2Fol688iXO2s22EPHX8dovban2MwhXjJNPQGVtUHLDs0aU3sS%2Bh%2FJPdkPYasV%2F%2FqsWdQ2UIG5ybdFguY45XCBJ6py2j9t86hNip%2Ft739wjgsv%2Bdf0um1W3HW8Vkin&X-Amz-Signature=685642365f5ee178c9e261cee2b52ec7a11b8b73a593f14f6dd6e6c372c1d43a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
