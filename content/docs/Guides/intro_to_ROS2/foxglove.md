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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHFPQXJB%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDB7d%2FnhdCFXm5H8LiOPZflp8fAJd%2BAFHEIFNuMLZxpzQIgbqcq%2BXSVXdzmDoGHJVNv3wvt%2BhctClYPiZMRAoMC%2BNYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDJWsoASUuEErSoRrSrcA7wDrG%2FPAwb03UnCDQFMCK8pE6qT2BczSbnP8uArn31QzjlP0WcLlQ9tHIYFOhfEetVJD5FdiEqUTGPTChSzsnHya6C4ES%2FZQV%2BwD2Tvvpw74g3WuJfWMre%2F944G7HsP074EU9ERT57KmdVRaJvvdGcxGOif0CYQbVYgeRvQ4s9X%2Fg%2FmwNx%2Fu5kdkJ93niKFKsnHJ1ydczADRRu8m4gyee2YdbAXDD%2Byg0iYRz39iCKhZfNOWC9H1v8Qs%2BF5IFMkE8dc%2Bt91kbBXrEbtRMDbc4Prt99kRbA4y2gD0iEZgiTlrdQHLHlhJBzrS2iZ3lbi8T5u2AHhxc2o%2FQtc2A5RQNycv%2Fy97L5QXd6yc22%2BY2pdQVNZZyBEhmw8VGKjDLi7h90EfdWO0LBYykbkGhxlOKJnOSNo7pnNyRGs4i0vsyNcfT6ByC%2BJz7RZ785GXJ8US9KQNOmBH3tquteikUingCQDm6uFu%2FvP04Mm87bq2462zjEP0VPs%2FFK6d3YKeIz7q2k8XhzRyVN8h84CgpbaoPqgrnEedt%2BZI8d0upskXF%2BWYFfIdFrpmiVxl%2F0HIJMnxj8AAo3J%2FQ12ilT19GU3mGPZk%2FJqiqvxXfSbAzEOyvWCPouZ9lIWfxxpsuTrMKv4gMUGOqUBF2kVCflWz8ArPkbaazZuAYg4m4wpJhnfXE1PFqmf6IgxW4Aox2yklw%2B3pVgf8DEOXcHIe2gxQcFJdN1J2Ua0tPMlD4LMfZZU9%2BEHGNJzu%2B80imbdpEGftLXBdiCxNZcMSRRoenYqOS8qlkReViNNfNbyvgOImfQsnj5ushpqi4fG5Ew2o1nN5nESeQSm62jaZIwBm6bwpoEgm%2FEJkxloOvknItlK&X-Amz-Signature=43617b98d84989c21bf05ab80da5790f07073e3f2aa168de2900baf995b5ab29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHFPQXJB%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDB7d%2FnhdCFXm5H8LiOPZflp8fAJd%2BAFHEIFNuMLZxpzQIgbqcq%2BXSVXdzmDoGHJVNv3wvt%2BhctClYPiZMRAoMC%2BNYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDJWsoASUuEErSoRrSrcA7wDrG%2FPAwb03UnCDQFMCK8pE6qT2BczSbnP8uArn31QzjlP0WcLlQ9tHIYFOhfEetVJD5FdiEqUTGPTChSzsnHya6C4ES%2FZQV%2BwD2Tvvpw74g3WuJfWMre%2F944G7HsP074EU9ERT57KmdVRaJvvdGcxGOif0CYQbVYgeRvQ4s9X%2Fg%2FmwNx%2Fu5kdkJ93niKFKsnHJ1ydczADRRu8m4gyee2YdbAXDD%2Byg0iYRz39iCKhZfNOWC9H1v8Qs%2BF5IFMkE8dc%2Bt91kbBXrEbtRMDbc4Prt99kRbA4y2gD0iEZgiTlrdQHLHlhJBzrS2iZ3lbi8T5u2AHhxc2o%2FQtc2A5RQNycv%2Fy97L5QXd6yc22%2BY2pdQVNZZyBEhmw8VGKjDLi7h90EfdWO0LBYykbkGhxlOKJnOSNo7pnNyRGs4i0vsyNcfT6ByC%2BJz7RZ785GXJ8US9KQNOmBH3tquteikUingCQDm6uFu%2FvP04Mm87bq2462zjEP0VPs%2FFK6d3YKeIz7q2k8XhzRyVN8h84CgpbaoPqgrnEedt%2BZI8d0upskXF%2BWYFfIdFrpmiVxl%2F0HIJMnxj8AAo3J%2FQ12ilT19GU3mGPZk%2FJqiqvxXfSbAzEOyvWCPouZ9lIWfxxpsuTrMKv4gMUGOqUBF2kVCflWz8ArPkbaazZuAYg4m4wpJhnfXE1PFqmf6IgxW4Aox2yklw%2B3pVgf8DEOXcHIe2gxQcFJdN1J2Ua0tPMlD4LMfZZU9%2BEHGNJzu%2B80imbdpEGftLXBdiCxNZcMSRRoenYqOS8qlkReViNNfNbyvgOImfQsnj5ushpqi4fG5Ew2o1nN5nESeQSm62jaZIwBm6bwpoEgm%2FEJkxloOvknItlK&X-Amz-Signature=ef0cca307dce3e17e9671322e29699c6aae277d5fe921d22cb332ac5b470d3d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
