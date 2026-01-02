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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5DHOIHL%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCICUJv9FtqmkMbp5v1UuRy4V7GaL5KPpwerAgn7vQ5FQTAiEAuxt6QyYu7Dzkv%2FCbTyeeDRWk66YPwnqU%2FoNmFgUg9bkqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASEJmRDpYvW8ph5jCrcA9dwMOEgNO6UZsgz0%2FX4jsbvZJvSfaBaXYYXCuvoxZ5LM8G2v6rUdYD7SAMe2ZHEIHQnnssceb5u%2BUgJrvVvkGPntSoE3YzLSltzMS1z%2F7z85biRUPTFpKbMy2a54DHy5FmzIUZMxxmBnjYF9bGFg9Licc%2FlX7cQR3RTIB8asworITK85bCe0webiopJKCopJIOAt87ri%2BuBMMJ7CAaTwLxBxnFDF4oIve2AEJ4HlbI3hZk5bsaXg6epQgBdEPfQU8rp81YybnuuJBIFYKf%2BwTxT9MRKzl499cK5a38M5oSh4XdOkpwyaMEPhc%2BiCeyEuJz2ymiVhFqY0N%2F6j7ESKC5lo4DOMecodrlkiajVBYzvN8c7E00EPLxIt4VQliHSiRZe%2FemDLW7fjLFVTWj7CgTPbV1ZK1IyAI%2Fz8yWv8bf8%2FNKnOTl5caqC1K2DeQ0Vt3f7aiCF6mww9hjWEfAtX%2F3jmrY8DcOKQ8YJKCyGuMO8rUY669y559E1rCSTR27nuSa97SQouPMWUqPK12wVV%2BToz9d2D%2BnRrGcamqi3%2Fv7DGXvCD67uEfRktTwUCko5bnA194sxc69KEgP6%2BSK%2Bhcan%2BMqKBvO%2FB74aGd%2F3rv3kcb2YJ3ZoDEaIVfsZMJi93MoGOqUBtbk57fPCYKuarXsdhE94%2BA914Pzqk83A42e27i9dtEATqq5FGJ7Zb1KgTmfJ6CCBiYnwrF9S%2BBCcWUSujig2LZlSb3fTubf7azyMgDr%2BCAzznFYNnIftMkdrNPeo4VrzhibinhQHRgNEHg6l6FFiDFuhpDo6h%2F30QcFFotKFGBHuGhVvitZ%2FIpRcnyKD7z3BOtfzy0yQnQRIx6CcHYC4yrVxBZlV&X-Amz-Signature=e67c86f5ad7a68db0601b0865598c511721fe568f3aaef7a273f59a3d8b783c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5DHOIHL%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCICUJv9FtqmkMbp5v1UuRy4V7GaL5KPpwerAgn7vQ5FQTAiEAuxt6QyYu7Dzkv%2FCbTyeeDRWk66YPwnqU%2FoNmFgUg9bkqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASEJmRDpYvW8ph5jCrcA9dwMOEgNO6UZsgz0%2FX4jsbvZJvSfaBaXYYXCuvoxZ5LM8G2v6rUdYD7SAMe2ZHEIHQnnssceb5u%2BUgJrvVvkGPntSoE3YzLSltzMS1z%2F7z85biRUPTFpKbMy2a54DHy5FmzIUZMxxmBnjYF9bGFg9Licc%2FlX7cQR3RTIB8asworITK85bCe0webiopJKCopJIOAt87ri%2BuBMMJ7CAaTwLxBxnFDF4oIve2AEJ4HlbI3hZk5bsaXg6epQgBdEPfQU8rp81YybnuuJBIFYKf%2BwTxT9MRKzl499cK5a38M5oSh4XdOkpwyaMEPhc%2BiCeyEuJz2ymiVhFqY0N%2F6j7ESKC5lo4DOMecodrlkiajVBYzvN8c7E00EPLxIt4VQliHSiRZe%2FemDLW7fjLFVTWj7CgTPbV1ZK1IyAI%2Fz8yWv8bf8%2FNKnOTl5caqC1K2DeQ0Vt3f7aiCF6mww9hjWEfAtX%2F3jmrY8DcOKQ8YJKCyGuMO8rUY669y559E1rCSTR27nuSa97SQouPMWUqPK12wVV%2BToz9d2D%2BnRrGcamqi3%2Fv7DGXvCD67uEfRktTwUCko5bnA194sxc69KEgP6%2BSK%2Bhcan%2BMqKBvO%2FB74aGd%2F3rv3kcb2YJ3ZoDEaIVfsZMJi93MoGOqUBtbk57fPCYKuarXsdhE94%2BA914Pzqk83A42e27i9dtEATqq5FGJ7Zb1KgTmfJ6CCBiYnwrF9S%2BBCcWUSujig2LZlSb3fTubf7azyMgDr%2BCAzznFYNnIftMkdrNPeo4VrzhibinhQHRgNEHg6l6FFiDFuhpDo6h%2F30QcFFotKFGBHuGhVvitZ%2FIpRcnyKD7z3BOtfzy0yQnQRIx6CcHYC4yrVxBZlV&X-Amz-Signature=cc203d3a6b084ded7980bdccc89963605aab9b76ef684c3bea5651aa23fd0591&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
