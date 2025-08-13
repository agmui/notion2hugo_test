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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ6LDZPZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvw9%2BPeWV8GINFBPhixPTXpsDE8eNUIUwkmem%2BI8Sh9gIhALLgcao7I9T6btLfd%2FhQMLh6ZYYbp5sZbF6J1f01wHFVKv8DCCYQABoMNjM3NDIzMTgzODA1IgykLZWJKM47aJCQJP4q3ANOPURxnLx2GGw9vPrnN46sD5o6w%2BrVMGCZXqPpe8oTdeFgVttCGE0FQGcSnkDIwygwstU7m%2B502uqqZ3scS9EJxyX4jewAHGOppeM32adINlfeya8T33K3lFnevzoJV9euIjtTt0WdQr6cnE77SK4G4mu7FPd8GhMnazKpmO0oSJsV0Ad8TaoiL3i52jDEbuBt2u49QE0JVKdblvGsAIlItPqfMxId1ZCNtDvU6WO5kH5TjuoleMz0lUMKDvHxQJHxYBU2Roh2cls2CHNFrYUsH46gmOjrvPnq3Svlc6zjCBVpfqokxy8PfF0yw0YHAK5aJyeDfz0Wc6RGS6r4LyYkEhllWM6mqKZaxLCsK40bAb3zOX7di%2B3CumVVNBnEn49l8ldAMRjd5R7%2BhVpdSvfZ2%2Fnsm0p%2FOG%2FKH2ZLRIyu%2FxpNcXFuDLhi9Wk6HSBo3VD2aGUhlOxOJ9UFv%2FXpTZKzMKQF4HBeGvTwnyUEXaEdk44I6zKARx3OQHyWf1y8g9H1JT7dHjeASXTwFYg6G599q8KgFFZwO5wVG1ebJ8ZZMOVJdCSf5CsTbClT4bkdjtLuyOKo4qJmbszN5etk4RWnZ956M2ZMpycxaYf7mlNh0pw%2B%2BKHB89pj89f%2BgTDcqvDEBjqkAaKVtjuz4C43%2BmhL6v5YdkZtVmeIY6VuGWTKtKRCMx3F8aSKj2Gv6CbgUni9KFchJk0UHFuNhDOOxLkvP4LcQpUvdEvWmddqsVP%2FpaPFafZa%2FPJQ0A1%2FEQz1B8Wv9r%2BOMn8MJQOIVCXe96RrBTpRmaC3IbtSEnJHiOpsLXjSPbmEXeTGfyWkUWBvg8MaCDuFYRMwhWJNS1q19oCz532ecPNln4Ia&X-Amz-Signature=5230912271f20ea944e246e8650c4c0744e2ada0999db4193a0107e834b7e125&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ6LDZPZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvw9%2BPeWV8GINFBPhixPTXpsDE8eNUIUwkmem%2BI8Sh9gIhALLgcao7I9T6btLfd%2FhQMLh6ZYYbp5sZbF6J1f01wHFVKv8DCCYQABoMNjM3NDIzMTgzODA1IgykLZWJKM47aJCQJP4q3ANOPURxnLx2GGw9vPrnN46sD5o6w%2BrVMGCZXqPpe8oTdeFgVttCGE0FQGcSnkDIwygwstU7m%2B502uqqZ3scS9EJxyX4jewAHGOppeM32adINlfeya8T33K3lFnevzoJV9euIjtTt0WdQr6cnE77SK4G4mu7FPd8GhMnazKpmO0oSJsV0Ad8TaoiL3i52jDEbuBt2u49QE0JVKdblvGsAIlItPqfMxId1ZCNtDvU6WO5kH5TjuoleMz0lUMKDvHxQJHxYBU2Roh2cls2CHNFrYUsH46gmOjrvPnq3Svlc6zjCBVpfqokxy8PfF0yw0YHAK5aJyeDfz0Wc6RGS6r4LyYkEhllWM6mqKZaxLCsK40bAb3zOX7di%2B3CumVVNBnEn49l8ldAMRjd5R7%2BhVpdSvfZ2%2Fnsm0p%2FOG%2FKH2ZLRIyu%2FxpNcXFuDLhi9Wk6HSBo3VD2aGUhlOxOJ9UFv%2FXpTZKzMKQF4HBeGvTwnyUEXaEdk44I6zKARx3OQHyWf1y8g9H1JT7dHjeASXTwFYg6G599q8KgFFZwO5wVG1ebJ8ZZMOVJdCSf5CsTbClT4bkdjtLuyOKo4qJmbszN5etk4RWnZ956M2ZMpycxaYf7mlNh0pw%2B%2BKHB89pj89f%2BgTDcqvDEBjqkAaKVtjuz4C43%2BmhL6v5YdkZtVmeIY6VuGWTKtKRCMx3F8aSKj2Gv6CbgUni9KFchJk0UHFuNhDOOxLkvP4LcQpUvdEvWmddqsVP%2FpaPFafZa%2FPJQ0A1%2FEQz1B8Wv9r%2BOMn8MJQOIVCXe96RrBTpRmaC3IbtSEnJHiOpsLXjSPbmEXeTGfyWkUWBvg8MaCDuFYRMwhWJNS1q19oCz532ecPNln4Ia&X-Amz-Signature=dad8e28d4caf1be4c20d62179df35277bb178f503750857149963926277ec49d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
