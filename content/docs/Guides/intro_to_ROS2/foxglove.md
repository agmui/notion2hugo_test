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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G7XCENR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbAvij%2FOO%2Bxxzrs1391WfJCCmy1gaAFCnsYIDEa8ySxwIgSln2RvXswQ0luwtYcpITr8X4WqbXLGQq3qG0o2jA%2FLMq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDMDOotu%2Bn%2BY17cfXACrcA9kMr2qlVYyeKI2RMs5%2FzKy0xPzuCVIQSf9kE2esbW27kAMkPlG7taAWKphyvCaGbo81BZs3D%2BIAWy4Hbao1nFjIKYAXlKaEzR1c%2F7Hgtcsphy3dfYbFjITGt1ShhxH2tigEQyBt4m5L2N%2BIJbAqvTzJnwfrlc3lC3jwquLMTvMEZBiI5EWdeittKAr9QvkuMJC4AR26lxO4E3TAa6X0kO3LUukE3ZPaNY27MBPG25NTDGGfoNenfKdXtKYRo2ZmnPGsGUFTFOozaxUzAZmjp1L3P6EqTxB1PUTpoJ6dZo3tN2W2ZpfEfwuEtCY4%2B59ndABsx1cA8%2FWF49F8C5M2AoXMKOKSHwyyrRl9DDEzNESMOpquEaY82cmPrtMBkyYKxXH8BFgWtIt1bb8k3INb4krEf%2BpgItu2o9A6%2FFVHEQvv8%2Biex2LYeOJoarHF8SxMJZDbez9NAmwHRNrhFYVbKaE7iFZTvZRnXbDXy%2FBTJMIKrzakEQr6RItTCB9VzyCZGRsqCyYuFr3s3kNd%2B8Lkl3gqr02SMewP9Uw4YCmrncKNH8COcdHOE53%2FSSStBkA44DT36Bo9z2M1zlozMb%2BbChp9UE4btltPrG9vs%2BYfacyiIkr2x5i2pJ4ojHRLMJTq88QGOqUBMHz4PWXJzLzmk3rPWgjIK84hF0YxGlofxrhFSH4WV0%2FrTb40Qa14wEqrPhZ7WR1lbUjWPdPaPOjElXQd%2B7dmKLEQ7FCZmPFVdHy%2FQl6yhicRpNOr7%2FDdUxt37mWchKXmKoEl%2BgqC6cCsDWcXLj6hEUljwggMm8kQEVOMyexFgd3g1cGcDZftFjOD1%2Bt9Fx6N8DmtHSxYhDa29YtmDCXcjI6DT%2BHo&X-Amz-Signature=0ae726923191b7617813d91c2f14878db73aa98594ef5eed9dff710a154cec3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G7XCENR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbAvij%2FOO%2Bxxzrs1391WfJCCmy1gaAFCnsYIDEa8ySxwIgSln2RvXswQ0luwtYcpITr8X4WqbXLGQq3qG0o2jA%2FLMq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDMDOotu%2Bn%2BY17cfXACrcA9kMr2qlVYyeKI2RMs5%2FzKy0xPzuCVIQSf9kE2esbW27kAMkPlG7taAWKphyvCaGbo81BZs3D%2BIAWy4Hbao1nFjIKYAXlKaEzR1c%2F7Hgtcsphy3dfYbFjITGt1ShhxH2tigEQyBt4m5L2N%2BIJbAqvTzJnwfrlc3lC3jwquLMTvMEZBiI5EWdeittKAr9QvkuMJC4AR26lxO4E3TAa6X0kO3LUukE3ZPaNY27MBPG25NTDGGfoNenfKdXtKYRo2ZmnPGsGUFTFOozaxUzAZmjp1L3P6EqTxB1PUTpoJ6dZo3tN2W2ZpfEfwuEtCY4%2B59ndABsx1cA8%2FWF49F8C5M2AoXMKOKSHwyyrRl9DDEzNESMOpquEaY82cmPrtMBkyYKxXH8BFgWtIt1bb8k3INb4krEf%2BpgItu2o9A6%2FFVHEQvv8%2Biex2LYeOJoarHF8SxMJZDbez9NAmwHRNrhFYVbKaE7iFZTvZRnXbDXy%2FBTJMIKrzakEQr6RItTCB9VzyCZGRsqCyYuFr3s3kNd%2B8Lkl3gqr02SMewP9Uw4YCmrncKNH8COcdHOE53%2FSSStBkA44DT36Bo9z2M1zlozMb%2BbChp9UE4btltPrG9vs%2BYfacyiIkr2x5i2pJ4ojHRLMJTq88QGOqUBMHz4PWXJzLzmk3rPWgjIK84hF0YxGlofxrhFSH4WV0%2FrTb40Qa14wEqrPhZ7WR1lbUjWPdPaPOjElXQd%2B7dmKLEQ7FCZmPFVdHy%2FQl6yhicRpNOr7%2FDdUxt37mWchKXmKoEl%2BgqC6cCsDWcXLj6hEUljwggMm8kQEVOMyexFgd3g1cGcDZftFjOD1%2Bt9Fx6N8DmtHSxYhDa29YtmDCXcjI6DT%2BHo&X-Amz-Signature=7ef66043c93e4b83abc7d622910f5148df0a4e315488ed02ba39052d12db778c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
