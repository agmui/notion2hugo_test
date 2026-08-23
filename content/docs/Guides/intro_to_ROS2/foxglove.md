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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVD2IYTW%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDZQmU1AxS2%2BN4jBEsKGug517vMqInv0jyOEOtCJISEVgIhALDmNNMdqvDf1P0bMu59Or0282MFiI2hTxjh9RRIm2B%2BKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXdAbTA2UyAixxmRgq3AMxkxOFUcv9HasRNJbKh6t1HaGyQMP8uImofxTxcKWeAlQs%2F2U9J%2BuGH7nbZs0lSFlM1HKJ0Z4Z9D5juBkZ3hzQj4SCeAXOLy997X3jyiJmBCnmFjUd5%2FU3f3kRVfAKwFa3naCmIlbRrq6doELPV88c9MtjBYllgBb7Wq8kZOy7LifOAe4ldNQ4UyIDInCOQojWGbk7yMh77YjVgweC%2FgSKKz%2B%2FrzAL4mIA4yB923%2F0brzVLfstvMKFTM9kmQLFTQ5jaqdRd9RcGayldTORoZyW%2F0ZLi%2FtT09IQniwy5BDR6Q08v9vcbiaYjegpVGsP%2BMXmlTs9WmWxX%2F0u4LrzNKNI6ltfuUCmaPjKV5kq4xQ3HHxoUUAL9NiCgc1Ry61X%2BToB6vpyIbutk9qlE9nQE7uKxYyONoRCcga2R6RK8PKoZWBUZ6PDpzYBQdFD%2FCBPMm9sZruyb4GV2B%2FBi1rGrgAU72lIHUEN0H5anqfAhcq%2B8ZVEWDxcPD7otKCEar1FcpOJO60XMN6fYPghach0KIthziDOylrx3YGynERaRzjszTm3Z39HgwrH%2B2DHqfnqb1HuoyyXVQEfzuS4U6k2UdbrW2pw6eBF3GNzCSZqjtouiiXACmIqeIO41qvV%2FDDIhqnUBjqkAWIz6KP7HtY2ZZC237S%2B0jhkGyK3YiOL76dtXBQDbHh0fI13sOdDmDn4R7sBeA3VIlqGt4uRJR3emDwgq5wxKwv8XEtMJpHNWKdOjGfoH%2BokHItbZYD1wpKGQ1ECVdNXXVjDLvJofa4Ulrei4e%2FUThteR8yZT8negvIgbO9sGJe9hNz%2FQEg2tQ%2B4OnO8hTRhM3H1ctMOSGxX7xnLZo9G31ttT%2BlG&X-Amz-Signature=33d5329901db3cc45308f0a0721d765b9e0fbaefba0e460eb05e2e56c2a79008&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVD2IYTW%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDZQmU1AxS2%2BN4jBEsKGug517vMqInv0jyOEOtCJISEVgIhALDmNNMdqvDf1P0bMu59Or0282MFiI2hTxjh9RRIm2B%2BKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXdAbTA2UyAixxmRgq3AMxkxOFUcv9HasRNJbKh6t1HaGyQMP8uImofxTxcKWeAlQs%2F2U9J%2BuGH7nbZs0lSFlM1HKJ0Z4Z9D5juBkZ3hzQj4SCeAXOLy997X3jyiJmBCnmFjUd5%2FU3f3kRVfAKwFa3naCmIlbRrq6doELPV88c9MtjBYllgBb7Wq8kZOy7LifOAe4ldNQ4UyIDInCOQojWGbk7yMh77YjVgweC%2FgSKKz%2B%2FrzAL4mIA4yB923%2F0brzVLfstvMKFTM9kmQLFTQ5jaqdRd9RcGayldTORoZyW%2F0ZLi%2FtT09IQniwy5BDR6Q08v9vcbiaYjegpVGsP%2BMXmlTs9WmWxX%2F0u4LrzNKNI6ltfuUCmaPjKV5kq4xQ3HHxoUUAL9NiCgc1Ry61X%2BToB6vpyIbutk9qlE9nQE7uKxYyONoRCcga2R6RK8PKoZWBUZ6PDpzYBQdFD%2FCBPMm9sZruyb4GV2B%2FBi1rGrgAU72lIHUEN0H5anqfAhcq%2B8ZVEWDxcPD7otKCEar1FcpOJO60XMN6fYPghach0KIthziDOylrx3YGynERaRzjszTm3Z39HgwrH%2B2DHqfnqb1HuoyyXVQEfzuS4U6k2UdbrW2pw6eBF3GNzCSZqjtouiiXACmIqeIO41qvV%2FDDIhqnUBjqkAWIz6KP7HtY2ZZC237S%2B0jhkGyK3YiOL76dtXBQDbHh0fI13sOdDmDn4R7sBeA3VIlqGt4uRJR3emDwgq5wxKwv8XEtMJpHNWKdOjGfoH%2BokHItbZYD1wpKGQ1ECVdNXXVjDLvJofa4Ulrei4e%2FUThteR8yZT8negvIgbO9sGJe9hNz%2FQEg2tQ%2B4OnO8hTRhM3H1ctMOSGxX7xnLZo9G31ttT%2BlG&X-Amz-Signature=f0fca0c7e51ddadd7bf607c385ffcd0b7ecddc6ed63bd9bd99d8540c1b132717&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
