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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYLY2NDV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHyLyPTHvwhStZxwAsmPaWCX1fsrBkhnwhJSUipknlrMCIQC1G%2BcQ9%2BHCpcNySJfOHf%2BPd9iMXGnWnSj382ivbUd1dSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM5qgwoYXOpCl4OvdXKtwDYxB0MWuZxYA9RnFV8WDxW2bZq6EDu7dZUXVYnmG0FeaFlyHMrzQvHA6UFWXcDoNJ6eQTuCBR7z36dI3ozmiL2eOI%2F%2F81w4iG7aerKUifMHGFJArqMVW2LWqzhX3T6nne9A%2BrKo2K2DEvRwwgqde9TaxSmI7wo1jcif%2BJmoi2%2B9R3l8I3QVJaEEVVOMQmDHImdXv%2FoVUi8Dp7VkF9NPe1DqyInCpfBmu7Ms9D4PgN5IPlwjvy%2Fq%2B%2BF3BY3Utf63987qp9l6Ipsy6HgErURmNXId66nL8MO61Y2OTJ6E0zvPC1moLDdfBh%2FJmzwA5VRgwo62P8%2FClReg%2F6gKn2Ys%2FVMnE%2F4%2B%2BwOdDdU5Fg2%2BW5RKbWfLat8%2BDjtlsRd8Z0mZyuniTTY4ay%2F9B6zl1um6EN5tvAAXp49vem0FKKqbcipnQPcCscQyoLTlAVphtVe7aKDGemGtHcV9D%2BRU6k1AAVRTm5goJi%2B0BGI%2BReufiDzJpdGrI1liN3tsz%2BJoqhKPotsUY770kt9zJSBA6FbYSFnTlXbtPZ1GzInlP8Zfn%2FBoQ1A7ObgyrJqnCg%2BPD25CpPQ6UbtoHfsk1u9dEW%2FrHAsRKHAgKBzI3gEBhOhzsDd6L9T2p41kcNxXyQ8Vkw0on2xAY6pgE%2FHEE5IvMVjKuiT3sd1PUVABDyOSZQsssBuTy42kBQT8wpwF1vs33QZ6HjEzaRRUScX8ALw52iFjafWqEeBdXMBzU0i6YELkI90THp%2F%2FDGFex4azgUb3oxmAPI7sopyXhS4vwmXyuaVuEcvFTZRswRZ%2FO7EWG6utqnKabh0MfjM4s6iK1T6ibjeKaoaLWjSV1KPSsOcyS7F9QK1bMS5HepPw5msXEt&X-Amz-Signature=728b0e9a34a5f6fefc8b958fbbf9b95198bce6badadc0b455fdc9a0ebf403342&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYLY2NDV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHyLyPTHvwhStZxwAsmPaWCX1fsrBkhnwhJSUipknlrMCIQC1G%2BcQ9%2BHCpcNySJfOHf%2BPd9iMXGnWnSj382ivbUd1dSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM5qgwoYXOpCl4OvdXKtwDYxB0MWuZxYA9RnFV8WDxW2bZq6EDu7dZUXVYnmG0FeaFlyHMrzQvHA6UFWXcDoNJ6eQTuCBR7z36dI3ozmiL2eOI%2F%2F81w4iG7aerKUifMHGFJArqMVW2LWqzhX3T6nne9A%2BrKo2K2DEvRwwgqde9TaxSmI7wo1jcif%2BJmoi2%2B9R3l8I3QVJaEEVVOMQmDHImdXv%2FoVUi8Dp7VkF9NPe1DqyInCpfBmu7Ms9D4PgN5IPlwjvy%2Fq%2B%2BF3BY3Utf63987qp9l6Ipsy6HgErURmNXId66nL8MO61Y2OTJ6E0zvPC1moLDdfBh%2FJmzwA5VRgwo62P8%2FClReg%2F6gKn2Ys%2FVMnE%2F4%2B%2BwOdDdU5Fg2%2BW5RKbWfLat8%2BDjtlsRd8Z0mZyuniTTY4ay%2F9B6zl1um6EN5tvAAXp49vem0FKKqbcipnQPcCscQyoLTlAVphtVe7aKDGemGtHcV9D%2BRU6k1AAVRTm5goJi%2B0BGI%2BReufiDzJpdGrI1liN3tsz%2BJoqhKPotsUY770kt9zJSBA6FbYSFnTlXbtPZ1GzInlP8Zfn%2FBoQ1A7ObgyrJqnCg%2BPD25CpPQ6UbtoHfsk1u9dEW%2FrHAsRKHAgKBzI3gEBhOhzsDd6L9T2p41kcNxXyQ8Vkw0on2xAY6pgE%2FHEE5IvMVjKuiT3sd1PUVABDyOSZQsssBuTy42kBQT8wpwF1vs33QZ6HjEzaRRUScX8ALw52iFjafWqEeBdXMBzU0i6YELkI90THp%2F%2FDGFex4azgUb3oxmAPI7sopyXhS4vwmXyuaVuEcvFTZRswRZ%2FO7EWG6utqnKabh0MfjM4s6iK1T6ibjeKaoaLWjSV1KPSsOcyS7F9QK1bMS5HepPw5msXEt&X-Amz-Signature=558867475a33e916a355f13d2a914b8d1d452f0841491a7c6d96fdd78ecb0c3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
