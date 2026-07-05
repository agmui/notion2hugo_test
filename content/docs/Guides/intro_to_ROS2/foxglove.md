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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOBFQN2X%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCFBG84UiB5pJlHWktk1xkOvVu7JKjXd05uPmA5GDFYgQIhAMlM1U7wF2IS0wZ5ya0baNhX5zJOAZeK4gVN38xdympiKv8DCDIQABoMNjM3NDIzMTgzODA1IgzOdG04HtLWrMg0WGIq3AOzNSCU%2FNUGSmS9KC9qXAKncPbXYo%2F2aodchrN91f5v6TN07VtZod7RVTtcVPtqM9iO2HNej5cUNnVeL8sGHEr%2F5dY3QexHAkmdteHlCTc4cFQirR4%2FeZSjswgicl8EVEBtD3DL3HVIEHfOmnuSoPwp8prHuAA83gEgF94CBA%2BnDw0Uefa97vYKBoIcAxKV5nWOVnZ2annocRsV9jGqVp1SJ5fq8kjmsSyMWWPH05K3H031CJ7AL53Ib1iCzYDqdtIlHji%2FLr8pC%2B1QnA08f%2B4IBjFG6Apd0i7j3c4hUHHFCn3xMNzwXfcaGRySGPEd29pjr8tdEbS15bp17jl0yDBLP6Dud8FwMjDgtnxxnKvnGxfsD9RGWOyNCRKw9scDFUjyJ7VPweIC58PTE%2FpOXo6G3IVg4JAIma1UKSYw1Q7VvvNyRw28z63MtUz3PClZdxSr0%2BwvoNnj5vCRNfWeRET85ceb0sajQWvxYmj0EZPVV4C6hR9Tx867O9ia2LoIRDMGnDZOTRiHaKjwRAfZMINhno4mYRG%2BC3r%2FGDkp04l7ZJEgbCr%2FtEXlh%2BpNF30DojfUngj54oe6j1PrTLXpCyHcfc%2FirTKGNRqQaA5J5xKDqSgWg7xp25HfPXUFEjCc2abSBjqkAQktkb8nyGAECK2HEn29LvyXbrTL3XLjZKEuXS3WXlcz2byFR8agc0hqAUvuogXCigjqWqdXQDOoHd8pPnR%2B21kvVzrKpv5iXVfZkad%2F%2FAIvTxmodR5WzCmkvus47JUswyib15gi%2FMTn0waFb2aW359A7yI3zbumW0i7o5Bk54v9%2Fg58c9a0%2FZqvnrhb2sMxhOCAIq5llXHsiTMn3FWlkAcLH1cn&X-Amz-Signature=27152d9a4db2d775d3bde4ee46127defd12accea6b15fe114c966d60bd0309bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOBFQN2X%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCFBG84UiB5pJlHWktk1xkOvVu7JKjXd05uPmA5GDFYgQIhAMlM1U7wF2IS0wZ5ya0baNhX5zJOAZeK4gVN38xdympiKv8DCDIQABoMNjM3NDIzMTgzODA1IgzOdG04HtLWrMg0WGIq3AOzNSCU%2FNUGSmS9KC9qXAKncPbXYo%2F2aodchrN91f5v6TN07VtZod7RVTtcVPtqM9iO2HNej5cUNnVeL8sGHEr%2F5dY3QexHAkmdteHlCTc4cFQirR4%2FeZSjswgicl8EVEBtD3DL3HVIEHfOmnuSoPwp8prHuAA83gEgF94CBA%2BnDw0Uefa97vYKBoIcAxKV5nWOVnZ2annocRsV9jGqVp1SJ5fq8kjmsSyMWWPH05K3H031CJ7AL53Ib1iCzYDqdtIlHji%2FLr8pC%2B1QnA08f%2B4IBjFG6Apd0i7j3c4hUHHFCn3xMNzwXfcaGRySGPEd29pjr8tdEbS15bp17jl0yDBLP6Dud8FwMjDgtnxxnKvnGxfsD9RGWOyNCRKw9scDFUjyJ7VPweIC58PTE%2FpOXo6G3IVg4JAIma1UKSYw1Q7VvvNyRw28z63MtUz3PClZdxSr0%2BwvoNnj5vCRNfWeRET85ceb0sajQWvxYmj0EZPVV4C6hR9Tx867O9ia2LoIRDMGnDZOTRiHaKjwRAfZMINhno4mYRG%2BC3r%2FGDkp04l7ZJEgbCr%2FtEXlh%2BpNF30DojfUngj54oe6j1PrTLXpCyHcfc%2FirTKGNRqQaA5J5xKDqSgWg7xp25HfPXUFEjCc2abSBjqkAQktkb8nyGAECK2HEn29LvyXbrTL3XLjZKEuXS3WXlcz2byFR8agc0hqAUvuogXCigjqWqdXQDOoHd8pPnR%2B21kvVzrKpv5iXVfZkad%2F%2FAIvTxmodR5WzCmkvus47JUswyib15gi%2FMTn0waFb2aW359A7yI3zbumW0i7o5Bk54v9%2Fg58c9a0%2FZqvnrhb2sMxhOCAIq5llXHsiTMn3FWlkAcLH1cn&X-Amz-Signature=c69990177b3f6cd9ce0e1c8a2d071ee960c7a366683410f53a9e64ccc3fb14e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
