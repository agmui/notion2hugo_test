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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNLSLHLS%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAHfE%2BlLTvNYCspxPa%2F7x6DYt2DqPPRyAokbtr0qqX6AiEA4OH0zfmJH3iblAGIOBT5WohQEm0gqZasv8nX9YlYLPcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJGK5FrTtcdfwOpmyrcAyFWp3OBWHnlJyFK%2BLHl7Nk7bycPTZZGuGE5qwHlwUDel5IlSCk%2ByvgWV5Qn7q7XCNpburkfqRblaWfMpX%2F%2FEaE1p9XpoTQ2hrG7%2Fcsokm58BxiwXWfgVsItmLvxidUjubFCCYhR9pprGUv0DFSQ8DKr7SM5rAaXcZcinSFhJo9xRmuvab4Y0dTEx8LJNyRLGXgqEbnuvTGPaHrHeNyw7QrVOO6zkYlc%2FFovDbiXbVeamYzNHQxNk5cN%2Ff6iJ2jiLriC8o6xNYHwXt3U7cZGLwk9utSZdbDzD3GKu1QUx3CB1FEo3BFL0txU4Y4y8WUEjD%2F5GgViMyCzreSWWkZyzTKW3tsNgWm4E43eu735dHB9U0OZUxpTdn5dNUqnLWgc01qrOrnLlvs1xnw5l17NGlkDYCzDiAFWFpZaritI4HGSbbvkTq4njda3a4YNtZgF0IosqkSjO%2BoY2bpmRRmOMIujhLyqCr6ejDVtpICb84RMw15XOn%2B8GuDjaoNDIgc5CfngDkiLwmt5Lh8GXXI0GI7gFVyRaZBksepRgZ4n%2BIfNUXwBGQSqD1l6h8oEMRVPDDZYklXurpDMmKD7w3P%2BEr9XT1aOSPfd9fLhZTWXVUSwKS9qBqIRt4XQWdiBMPeggtIGOqUBX6E%2F5rkJtAMtvhfzf0Z6OxpqRJ2adnm3iw%2FX2muUzLFUxrk7BsLPynW7QN3tc7rd7XvVxSx13xdPJoSQxzKjzkx%2FCqzl3ib1n7p8oC8%2BSx0E%2FqkYd%2FnqQRCxUelY97nuOKwXqU9JAQhadLwbwN3buwtCKhRzd0etRVY%2FEPNkT71rI%2F0WFPPVyIom6MksmFAriOFXlYMODYFBqpg5%2FfTnluXzAqRP&X-Amz-Signature=cef1896a86ef4d2e85da04c7d31067cc30761ae4f6b7fb12e218cc6699d90489&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNLSLHLS%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAHfE%2BlLTvNYCspxPa%2F7x6DYt2DqPPRyAokbtr0qqX6AiEA4OH0zfmJH3iblAGIOBT5WohQEm0gqZasv8nX9YlYLPcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJGK5FrTtcdfwOpmyrcAyFWp3OBWHnlJyFK%2BLHl7Nk7bycPTZZGuGE5qwHlwUDel5IlSCk%2ByvgWV5Qn7q7XCNpburkfqRblaWfMpX%2F%2FEaE1p9XpoTQ2hrG7%2Fcsokm58BxiwXWfgVsItmLvxidUjubFCCYhR9pprGUv0DFSQ8DKr7SM5rAaXcZcinSFhJo9xRmuvab4Y0dTEx8LJNyRLGXgqEbnuvTGPaHrHeNyw7QrVOO6zkYlc%2FFovDbiXbVeamYzNHQxNk5cN%2Ff6iJ2jiLriC8o6xNYHwXt3U7cZGLwk9utSZdbDzD3GKu1QUx3CB1FEo3BFL0txU4Y4y8WUEjD%2F5GgViMyCzreSWWkZyzTKW3tsNgWm4E43eu735dHB9U0OZUxpTdn5dNUqnLWgc01qrOrnLlvs1xnw5l17NGlkDYCzDiAFWFpZaritI4HGSbbvkTq4njda3a4YNtZgF0IosqkSjO%2BoY2bpmRRmOMIujhLyqCr6ejDVtpICb84RMw15XOn%2B8GuDjaoNDIgc5CfngDkiLwmt5Lh8GXXI0GI7gFVyRaZBksepRgZ4n%2BIfNUXwBGQSqD1l6h8oEMRVPDDZYklXurpDMmKD7w3P%2BEr9XT1aOSPfd9fLhZTWXVUSwKS9qBqIRt4XQWdiBMPeggtIGOqUBX6E%2F5rkJtAMtvhfzf0Z6OxpqRJ2adnm3iw%2FX2muUzLFUxrk7BsLPynW7QN3tc7rd7XvVxSx13xdPJoSQxzKjzkx%2FCqzl3ib1n7p8oC8%2BSx0E%2FqkYd%2FnqQRCxUelY97nuOKwXqU9JAQhadLwbwN3buwtCKhRzd0etRVY%2FEPNkT71rI%2F0WFPPVyIom6MksmFAriOFXlYMODYFBqpg5%2FfTnluXzAqRP&X-Amz-Signature=316ccd1b6ccea484c0e14e6043324d628a8a05a4bb5bb77747341939549abd2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
