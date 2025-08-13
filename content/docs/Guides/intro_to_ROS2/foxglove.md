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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UHTP323%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3VcWh1Ecr5d3E4G3ItCiW0t9q4W2wZrVQELa4Ekgm6AiEAupf2Qb8lrP08ENPisHi5eixrtVkrxnByzR6hhXSmZqQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDEML%2BGqNhPnMjWjnJCrcA2CCiq0Kb93xTvLlqPpyGI9EKoISFeNRgtS11X5GJpOILVDoSdSlQ4VBTRZE77o%2BCaeue4Uz2HqDfW1vMQGpjGx%2Bp98uVXgEGvXM6OMi%2FybOs9FHfqR4eKAmeF9Bk4U0lSVGmqrRgGSteuPDl0tuJ0Gd2yx7Qh%2F98glXoODOrffA6qX%2BaxwWjIrPicH4I%2Buj29SQWNdbX%2BpaKRH5CUXfKETASYNzOZPMS7Mf0oAhCNlAGDIEeUjDZRMpBRVvYVAPx0q0HrTrz27z0l5u5TOg0FkLysFBqePrXt53DERdmQco8MSPXRSRGyz4ivZKICh6IPCuw9x4UzhdliNimVZrefubh45QSSf%2FE1V6aoS6GETZwKTCTD1dv6uOgHgAPcO4733o00%2FHeAFHzEU6xWstQWpDkAoHq73h3Bjl%2B8C5dZfnt1rRQmVs3ghBLnHnJYuBacj%2BN9fZkR8bAbaU9N7m%2Fi1vtifdrO7G5hMmRfeptcXehqG5rwd7M%2FP4Npq%2Fwg19XkMiB%2BkRlqG7FjfRudCimjkJ14fEwIULxQrtiO%2FDDBv5ccFG9JsCo46CJnKdPaE3S6eXCss%2Fh%2FJRpjb2dp5SfFsvi%2F7xWgpgmWPzzL%2Fr0m0Tv7dGCbBZIjE9Wx2iMOqF8MQGOqUBTJYaTwZnssDFJCxEV3CuFiqcX6z1HeAm2zBDU7zQmI%2FP%2F36FHYjZdUKc0Q1wE194wAjQUwODmFk9aKIfaZxwWeISFft%2Frta0iY2%2BiGiHGs6H%2BOrHP72NDb9hcVb%2B90wDte1XNRjzoD0MaVl%2BcmT5quJL3s80KBlYJ8jHk8Z87v3A2rYx%2BPfEobVyWIkEMK5FkpHah6xZjSxHHjse44oQPURnGzds&X-Amz-Signature=3c9bb718e1f7c81b751e22f008f27c6973e541e44966d83084570e9cc77b1d3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UHTP323%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3VcWh1Ecr5d3E4G3ItCiW0t9q4W2wZrVQELa4Ekgm6AiEAupf2Qb8lrP08ENPisHi5eixrtVkrxnByzR6hhXSmZqQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDEML%2BGqNhPnMjWjnJCrcA2CCiq0Kb93xTvLlqPpyGI9EKoISFeNRgtS11X5GJpOILVDoSdSlQ4VBTRZE77o%2BCaeue4Uz2HqDfW1vMQGpjGx%2Bp98uVXgEGvXM6OMi%2FybOs9FHfqR4eKAmeF9Bk4U0lSVGmqrRgGSteuPDl0tuJ0Gd2yx7Qh%2F98glXoODOrffA6qX%2BaxwWjIrPicH4I%2Buj29SQWNdbX%2BpaKRH5CUXfKETASYNzOZPMS7Mf0oAhCNlAGDIEeUjDZRMpBRVvYVAPx0q0HrTrz27z0l5u5TOg0FkLysFBqePrXt53DERdmQco8MSPXRSRGyz4ivZKICh6IPCuw9x4UzhdliNimVZrefubh45QSSf%2FE1V6aoS6GETZwKTCTD1dv6uOgHgAPcO4733o00%2FHeAFHzEU6xWstQWpDkAoHq73h3Bjl%2B8C5dZfnt1rRQmVs3ghBLnHnJYuBacj%2BN9fZkR8bAbaU9N7m%2Fi1vtifdrO7G5hMmRfeptcXehqG5rwd7M%2FP4Npq%2Fwg19XkMiB%2BkRlqG7FjfRudCimjkJ14fEwIULxQrtiO%2FDDBv5ccFG9JsCo46CJnKdPaE3S6eXCss%2Fh%2FJRpjb2dp5SfFsvi%2F7xWgpgmWPzzL%2Fr0m0Tv7dGCbBZIjE9Wx2iMOqF8MQGOqUBTJYaTwZnssDFJCxEV3CuFiqcX6z1HeAm2zBDU7zQmI%2FP%2F36FHYjZdUKc0Q1wE194wAjQUwODmFk9aKIfaZxwWeISFft%2Frta0iY2%2BiGiHGs6H%2BOrHP72NDb9hcVb%2B90wDte1XNRjzoD0MaVl%2BcmT5quJL3s80KBlYJ8jHk8Z87v3A2rYx%2BPfEobVyWIkEMK5FkpHah6xZjSxHHjse44oQPURnGzds&X-Amz-Signature=e785df565e52263256c7a02fe85a545c429539a51b14ff7bf0a7cc2c3a0d10b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
