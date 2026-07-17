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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7CIICJX%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFRGskfgQ6rjz%2BnBGZeewaBhdcbiKG89z0V0nGRaFLTHAiAYvweJ2ArL9xmbQBMviosfD4LnBqh444LtA%2Bo3Jri8Uyr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMSnH9t450cSRc0a9yKtwDWBmqBSi3hd4zJbVsstxWj3bgGhapph00DIoLeNIjDdwFrXzZ6eo0Ohg8ZL8vjpFEMpuFpXWNF5a5e2cVtJWcdDzQDr1Fj%2BcpXaliPae8rnD4lDfiCjwY3IWlRFs8kcxKKHl50A6QbEc2hLbCzjVTSDgxFn3PEEn1IHHfif7VjDVl%2BVY5soobez46TPqjmUZQ77p4dTHetuPl5SyQGdGOYYt%2FNM8q43xNh9Drakx%2F6YA8%2FrExdb%2BMB3jS2UbfvwvCn6U%2F6KDeahcDs0bRN8T4%2BV%2B9cszDyNQAEFlWURuD7PKVF0vExiYWazfnh4IvjqYcpBNoJx2D%2F3lva%2FImOkaxfncPDRoiiV%2B8%2B6SyrKDls8V7QpxYVUBwmKMmj88BvkJlO7gMIN2avASX%2B9z5NtUIUfms%2FgLqNz1s0q7wQv6ID6kdyq0jtr0%2BLTkvjKkh%2FaX4sN47DFrNSI34muMpyXDamLYLyc3TxiSFCle0LjbJeq5v15AqBwMiIcN8Z%2FldHVyXpB1rtwGoVl4hFFWpJ%2BfB%2FID%2By1QjknZ9zw8Te3OxwHz1%2BWwjPAcIqHxrvMwQkBwfZFcdfj51TGQSJggZ4xcFkyOCJDcudkidJL2PXZlIQSukMXTfyfPVBwp0r2cwk6bm0gY6pgFnpXuZlA1%2Bh36Us9tMix%2BG6IMkuezAktvJ%2FXQPlCdaJfavO3BQLmzQP%2FYpXzzciW%2BdSnzN8p9ifo6RMPfqGsprFkvdX8NQMs9HtrGQpMLSqqyKzsXjN0uEIduCePTC6C3xr2AdK%2FNnRL7WcWMCvIhtLAjlMLf0gYrmPj81VP%2FRqMTfdMnl8eKgF%2BfNLpqI7Gg224nlT5E0uUFWGZ5NHIi9Ut3PcX%2BC&X-Amz-Signature=4338d84c543714dda34a4108625e5fe9dc6cc86b011889c90a6b712ea4f29428&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7CIICJX%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFRGskfgQ6rjz%2BnBGZeewaBhdcbiKG89z0V0nGRaFLTHAiAYvweJ2ArL9xmbQBMviosfD4LnBqh444LtA%2Bo3Jri8Uyr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMSnH9t450cSRc0a9yKtwDWBmqBSi3hd4zJbVsstxWj3bgGhapph00DIoLeNIjDdwFrXzZ6eo0Ohg8ZL8vjpFEMpuFpXWNF5a5e2cVtJWcdDzQDr1Fj%2BcpXaliPae8rnD4lDfiCjwY3IWlRFs8kcxKKHl50A6QbEc2hLbCzjVTSDgxFn3PEEn1IHHfif7VjDVl%2BVY5soobez46TPqjmUZQ77p4dTHetuPl5SyQGdGOYYt%2FNM8q43xNh9Drakx%2F6YA8%2FrExdb%2BMB3jS2UbfvwvCn6U%2F6KDeahcDs0bRN8T4%2BV%2B9cszDyNQAEFlWURuD7PKVF0vExiYWazfnh4IvjqYcpBNoJx2D%2F3lva%2FImOkaxfncPDRoiiV%2B8%2B6SyrKDls8V7QpxYVUBwmKMmj88BvkJlO7gMIN2avASX%2B9z5NtUIUfms%2FgLqNz1s0q7wQv6ID6kdyq0jtr0%2BLTkvjKkh%2FaX4sN47DFrNSI34muMpyXDamLYLyc3TxiSFCle0LjbJeq5v15AqBwMiIcN8Z%2FldHVyXpB1rtwGoVl4hFFWpJ%2BfB%2FID%2By1QjknZ9zw8Te3OxwHz1%2BWwjPAcIqHxrvMwQkBwfZFcdfj51TGQSJggZ4xcFkyOCJDcudkidJL2PXZlIQSukMXTfyfPVBwp0r2cwk6bm0gY6pgFnpXuZlA1%2Bh36Us9tMix%2BG6IMkuezAktvJ%2FXQPlCdaJfavO3BQLmzQP%2FYpXzzciW%2BdSnzN8p9ifo6RMPfqGsprFkvdX8NQMs9HtrGQpMLSqqyKzsXjN0uEIduCePTC6C3xr2AdK%2FNnRL7WcWMCvIhtLAjlMLf0gYrmPj81VP%2FRqMTfdMnl8eKgF%2BfNLpqI7Gg224nlT5E0uUFWGZ5NHIi9Ut3PcX%2BC&X-Amz-Signature=c083134cb87c21da391db2cbf0cee2dd9a8ed8480a7876d32b8397adf6091cb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
