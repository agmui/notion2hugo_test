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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVA77NRB%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdVwg6Fefa3mZsWG2FdvgJsOR6JFWtUuXw2O%2Fcd0%2FADgIgR1bN%2FPVaI4CBxhd1X7eKrkrQTkUjwMIGOUBBZA9GSnIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDF9rKmnag0lCnoDmCyrcA4%2FlKyPnfSRtrSFJvIo5Nu3Maj6eV49WoFa5i5tCGeCbmC3mlsBMaPwKC3hfmj8IE7K%2BdTBL7k0GKXTxUIY2BIg%2BwdY9fx4SiYRs1Hp43KUFZ2RmDqVZGY0Eaa4RiRZb3uLZ8ckVMqIUvrgUOtFuxVKoS1kNG1wmBMRARDmnoS%2BRUMHNxOHQJRrvTQDDGwT3mmZB1ttJfCM0qo3IRhsYZd1RP83pkAl3jXuBHkb%2BQ70%2BcILuzGPuVbuY%2BCUzRlUbt1WsOKwzx%2FxdzONQdQrEfXLOPuR3c5cGDm2f07ATBXOn30n5yp3zpNELHhmSdvupmIHlPGzwarGBli3qJ9qeCVJCYeGmmr6zvh%2BtDGZ7bBYadk1qxL%2F2Ju8%2FYcIyUSuSCNoyD%2FRimR6rnCfv2Sb0rYyguOlkNglAY1%2BNeiSP%2Fa%2FqHo6TgjAXjI0nHllWpxpcvZ%2BJsqXNfJ9O9s37u4usHh%2FbatPIRaM%2Bi7MbCDceEVSIrkfwIvNMyNZSqMk%2BDyHjiVJC8t29eS%2BIgn07ZCVdxE6vJAiHkd1uuaPe3Z351dr9Rn2yM4%2Frz0T1Mp2vWVF2MGAZmrSgQN%2FiZrNVBFFVHL%2BlY7w0juF9FbVSMktQeOBozPGFTkumzxJeHfNUMPLLztQGOqUB4H9vLJIseu2X86cwpuSyNzlF141VTyon%2FZm6ofcDwX3qAtxOcsx8YyFXKaPz8COmX0Eb8lUqwuHUKzm35quBNtV3ubrH35XJ7yKPFSOr1ANN2hCUQaP0pX2zmvQvvGYpKxfT9lCnujD3Coe3HooC6JLtx8Np2WrQam8hmLjLr8Ib%2B40P5y4I4Bvf5BHjjjxKvQQFL5QQ92SVSYQ0mbIvoZzMania&X-Amz-Signature=ad9840e52e21b5422ae7f8507fce491bb9c6568377fd949036dc25493597c44c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVA77NRB%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdVwg6Fefa3mZsWG2FdvgJsOR6JFWtUuXw2O%2Fcd0%2FADgIgR1bN%2FPVaI4CBxhd1X7eKrkrQTkUjwMIGOUBBZA9GSnIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDF9rKmnag0lCnoDmCyrcA4%2FlKyPnfSRtrSFJvIo5Nu3Maj6eV49WoFa5i5tCGeCbmC3mlsBMaPwKC3hfmj8IE7K%2BdTBL7k0GKXTxUIY2BIg%2BwdY9fx4SiYRs1Hp43KUFZ2RmDqVZGY0Eaa4RiRZb3uLZ8ckVMqIUvrgUOtFuxVKoS1kNG1wmBMRARDmnoS%2BRUMHNxOHQJRrvTQDDGwT3mmZB1ttJfCM0qo3IRhsYZd1RP83pkAl3jXuBHkb%2BQ70%2BcILuzGPuVbuY%2BCUzRlUbt1WsOKwzx%2FxdzONQdQrEfXLOPuR3c5cGDm2f07ATBXOn30n5yp3zpNELHhmSdvupmIHlPGzwarGBli3qJ9qeCVJCYeGmmr6zvh%2BtDGZ7bBYadk1qxL%2F2Ju8%2FYcIyUSuSCNoyD%2FRimR6rnCfv2Sb0rYyguOlkNglAY1%2BNeiSP%2Fa%2FqHo6TgjAXjI0nHllWpxpcvZ%2BJsqXNfJ9O9s37u4usHh%2FbatPIRaM%2Bi7MbCDceEVSIrkfwIvNMyNZSqMk%2BDyHjiVJC8t29eS%2BIgn07ZCVdxE6vJAiHkd1uuaPe3Z351dr9Rn2yM4%2Frz0T1Mp2vWVF2MGAZmrSgQN%2FiZrNVBFFVHL%2BlY7w0juF9FbVSMktQeOBozPGFTkumzxJeHfNUMPLLztQGOqUB4H9vLJIseu2X86cwpuSyNzlF141VTyon%2FZm6ofcDwX3qAtxOcsx8YyFXKaPz8COmX0Eb8lUqwuHUKzm35quBNtV3ubrH35XJ7yKPFSOr1ANN2hCUQaP0pX2zmvQvvGYpKxfT9lCnujD3Coe3HooC6JLtx8Np2WrQam8hmLjLr8Ib%2B40P5y4I4Bvf5BHjjjxKvQQFL5QQ92SVSYQ0mbIvoZzMania&X-Amz-Signature=a56e52fbf669b9067e6e57b94f72191ec22494484eb85fa0619de1e7a247664d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
