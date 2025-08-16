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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJCEJUAM%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCICeZr26iP1bquyGkvWEWK3fJl7JFJx1fhdbTjYjqlOwkAiEA5IX6j9pkhjZ0zvvZkJtKPhmThJhxsbqu9xQoPlxXhbcq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDB6OhNAYpcSkq238%2ByrcA2brjEmoaU38avIQxuRCAWZ4xIcvta0YTNEw4RHfDaFc7GBGIX1sKTIwNlLHFrDMP0DQrTIgWPIqfej%2BKsyc5gkNvFVPnIo3iLDh12R577H%2BnHhqkIGgtF%2FcAjeA2PNC4RP7Je7WolBSXD225CV9T3xRa%2BTOlBvwRsk4UMO3BqRP7ipuH6CYprVwbV9F4vNsyOTyDpizJyXlKyL2V7Tmbf0h1UuYR2QAHtKvxE5KK7q8vpjSxfkHe7qYY7WgsVnB%2FmYj75FV3b6svRbnDjEDK9KiYxf%2BwTHHEl0qyMab2MSlJ%2BOkSPAC6uCSAfq%2B8IY57lqMGinCy3Pus2K0e7hKn%2B3et6qhDEOCXUpz%2F8nAjLG733HPHa%2Bu7QjSeepUyA0WFg%2FsBppgfdNDV%2F5UIFpGnoU%2B4cu2MP%2Fc1oMMRKM6IDAGfV9uLyZr1wpOKaekiBq38VnSJVHIHJjxHXZRvvDAmU8Puk94SOQdPNQ9VI07aOpNgtD%2BJ8RYM4N4KS7Ua5qcrsqQed7IGuZw%2BYkWre7A98ZhlWGpwbMXX%2FhmTrUGwUC9UyElBtMfWzvD3a4KlT3tKyn6JGpFbVj4Kg1A3aFxp%2B34AgkJiXgWcGdR%2B8ekMjJMuVQCMi2TPwh1YDFiMNiKgMUGOqUBNs79taShGLXBDw04DwS9Yg27Vy2V3ymOyPxTbd4bZzWQnvSE0GTD4mANo4ATlijqwxXDRyva3tYZXHTbG5bQFn138GrFildHCSodlDmA%2FS8F7RURNLRdSxRlta8TqGIEDDAHO11A0BCDzWSpe%2FX6t5SG%2FKD%2FflqNzQtRy%2ByOtZlqBm97e9l7RGIdf22%2FzEHxPUpQrOWUpK42c9S6FRTZ7WXNytrj&X-Amz-Signature=77d7e5d9e492387703eb8d7435bd68c170c5ba3200c41f1fde7b51ea7c0458bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJCEJUAM%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCICeZr26iP1bquyGkvWEWK3fJl7JFJx1fhdbTjYjqlOwkAiEA5IX6j9pkhjZ0zvvZkJtKPhmThJhxsbqu9xQoPlxXhbcq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDB6OhNAYpcSkq238%2ByrcA2brjEmoaU38avIQxuRCAWZ4xIcvta0YTNEw4RHfDaFc7GBGIX1sKTIwNlLHFrDMP0DQrTIgWPIqfej%2BKsyc5gkNvFVPnIo3iLDh12R577H%2BnHhqkIGgtF%2FcAjeA2PNC4RP7Je7WolBSXD225CV9T3xRa%2BTOlBvwRsk4UMO3BqRP7ipuH6CYprVwbV9F4vNsyOTyDpizJyXlKyL2V7Tmbf0h1UuYR2QAHtKvxE5KK7q8vpjSxfkHe7qYY7WgsVnB%2FmYj75FV3b6svRbnDjEDK9KiYxf%2BwTHHEl0qyMab2MSlJ%2BOkSPAC6uCSAfq%2B8IY57lqMGinCy3Pus2K0e7hKn%2B3et6qhDEOCXUpz%2F8nAjLG733HPHa%2Bu7QjSeepUyA0WFg%2FsBppgfdNDV%2F5UIFpGnoU%2B4cu2MP%2Fc1oMMRKM6IDAGfV9uLyZr1wpOKaekiBq38VnSJVHIHJjxHXZRvvDAmU8Puk94SOQdPNQ9VI07aOpNgtD%2BJ8RYM4N4KS7Ua5qcrsqQed7IGuZw%2BYkWre7A98ZhlWGpwbMXX%2FhmTrUGwUC9UyElBtMfWzvD3a4KlT3tKyn6JGpFbVj4Kg1A3aFxp%2B34AgkJiXgWcGdR%2B8ekMjJMuVQCMi2TPwh1YDFiMNiKgMUGOqUBNs79taShGLXBDw04DwS9Yg27Vy2V3ymOyPxTbd4bZzWQnvSE0GTD4mANo4ATlijqwxXDRyva3tYZXHTbG5bQFn138GrFildHCSodlDmA%2FS8F7RURNLRdSxRlta8TqGIEDDAHO11A0BCDzWSpe%2FX6t5SG%2FKD%2FflqNzQtRy%2ByOtZlqBm97e9l7RGIdf22%2FzEHxPUpQrOWUpK42c9S6FRTZ7WXNytrj&X-Amz-Signature=948e14dd12c98c5039263431c2bca42cff484661c0be6adabf1ef6261b99c7cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
