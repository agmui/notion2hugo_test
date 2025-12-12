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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647FJHMGZ%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCohN4UbPPGZgPhClMWR58IIFwJT2w0hGJaL2b1zXef4wIgBex8m2yZDCfbAPogOMx3dagdkX8nySMUxGwjNqqmQc4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2F%2BrLbh7eIXZKTGTCrcA6dpAcOIvR2i%2FgYsqaN01980%2Br4fMmncyVF19%2BzJZqqDseEhuY1KBVATrLUZF03EYExT0MyfznuYNYd9fvLM72Pmfiw8x8MYm0OkAGGwn1wOtz9AaN6relwMg6ER056%2FMsb6gXwaQMWWQgQB0%2F%2FYANNmsoVDlKrt73Thkm9ywq3Ix3%2F0l9wT5wchqXGfL6rvqLBj%2FI%2BjPI96n138BC77GBsHwwh6c23ane5hcv%2B1Eon42jx7drX2Uu54HqaPL%2BOzTp4caL7%2FdEGD8Xsas1qRjdGYUzhgCg8Za601HH0pDbv736X8dDA8waZ%2F4%2FDcNo6g0efoIVaLgrMsw0Tbbb7i%2B5Q2ZjwQTYsMPhTO6Knou6rXz1Y8YRU53TAoGryRf0LPiRPCGhyOS6ByzjXVCWT3T6qszV65yjhM%2B%2B3o9ZHeM94llq4oab5gd97EbWRjo%2Bp8nX%2BcZL8CYeN%2Btqej%2FwjzARM8RpTo28GynSFPirchaL1YIBe81mBA6Ldt7OaRfdfGkmLuAWK6YeYGbVJggXZ2s2HzgeXFAAp5hFRbVJw%2FsR0UWdTTIH%2Fi7Gnm6QuTA15YdTnkrN67rBtiY9BpS%2FRBDxHZ7fim7fQqYHOovAI%2BTOD2SH2yFtzpZr00MzgCMO7U7ckGOqUBLN%2FmzV2l%2Bcg5FEJZBxxNSMbBABKeU7s6IJDEEWX%2B2IA2b7ddO2YWmSn2L7dWRMzzz%2F3CSm2AjbNqEvzb8fzuF6syhpuyA5eFQTKseDynfKZzE5%2B%2BogYlDeSJDltgeW6%2BtC2gXaTji755U%2FWW0L9BE%2FNeclnQ8C0gwXfoLL3Q%2Bz1%2F4OT4LOw07EPnVHaAyw7UoH1Td9FnqOs5QNz3pIeCXyg0R8d%2F&X-Amz-Signature=fe7153c8c1325ec60f8cdab51d507c32c01ed56f15745d6fe384f7e1ea2c4ec4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647FJHMGZ%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCohN4UbPPGZgPhClMWR58IIFwJT2w0hGJaL2b1zXef4wIgBex8m2yZDCfbAPogOMx3dagdkX8nySMUxGwjNqqmQc4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2F%2BrLbh7eIXZKTGTCrcA6dpAcOIvR2i%2FgYsqaN01980%2Br4fMmncyVF19%2BzJZqqDseEhuY1KBVATrLUZF03EYExT0MyfznuYNYd9fvLM72Pmfiw8x8MYm0OkAGGwn1wOtz9AaN6relwMg6ER056%2FMsb6gXwaQMWWQgQB0%2F%2FYANNmsoVDlKrt73Thkm9ywq3Ix3%2F0l9wT5wchqXGfL6rvqLBj%2FI%2BjPI96n138BC77GBsHwwh6c23ane5hcv%2B1Eon42jx7drX2Uu54HqaPL%2BOzTp4caL7%2FdEGD8Xsas1qRjdGYUzhgCg8Za601HH0pDbv736X8dDA8waZ%2F4%2FDcNo6g0efoIVaLgrMsw0Tbbb7i%2B5Q2ZjwQTYsMPhTO6Knou6rXz1Y8YRU53TAoGryRf0LPiRPCGhyOS6ByzjXVCWT3T6qszV65yjhM%2B%2B3o9ZHeM94llq4oab5gd97EbWRjo%2Bp8nX%2BcZL8CYeN%2Btqej%2FwjzARM8RpTo28GynSFPirchaL1YIBe81mBA6Ldt7OaRfdfGkmLuAWK6YeYGbVJggXZ2s2HzgeXFAAp5hFRbVJw%2FsR0UWdTTIH%2Fi7Gnm6QuTA15YdTnkrN67rBtiY9BpS%2FRBDxHZ7fim7fQqYHOovAI%2BTOD2SH2yFtzpZr00MzgCMO7U7ckGOqUBLN%2FmzV2l%2Bcg5FEJZBxxNSMbBABKeU7s6IJDEEWX%2B2IA2b7ddO2YWmSn2L7dWRMzzz%2F3CSm2AjbNqEvzb8fzuF6syhpuyA5eFQTKseDynfKZzE5%2B%2BogYlDeSJDltgeW6%2BtC2gXaTji755U%2FWW0L9BE%2FNeclnQ8C0gwXfoLL3Q%2Bz1%2F4OT4LOw07EPnVHaAyw7UoH1Td9FnqOs5QNz3pIeCXyg0R8d%2F&X-Amz-Signature=36e13357c66d13bfaec7d4e1347f199c211ec7b8cd6f8c3f599fbc74ee845af6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
