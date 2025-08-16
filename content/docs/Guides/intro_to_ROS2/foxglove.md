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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EEDLFBQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCKrpcZkPvr85lusXesgwwA%2B63G19avsTCsjSbfiHqo1gIhAM78MZLY0ELFmYS0TpqPqEo5HTwTT6qYjEgGcXMpZVJ0Kv8DCGcQABoMNjM3NDIzMTgzODA1IgydcjIaxmDgGo55Uu8q3AOE%2B7F4La%2BUdxIsHTwBINjC4WjLjWqpA0vQstriQ458Ni9f8xbipdvGMRx0Ex6gYSWZH1aXfm9m3MIAMR%2FeEGp0%2BJ%2FaPhxdf7BiR42QMiJE4NfOu6q0PcvIumDQrNdB7khG7MgBG69Bd2GUy07oFdX29TrwMx7Mfe7VVfn1p19t2E21zkmDLawzs4184S86leqkkugH2QHcTMnIA4rjpYmKpueWe79wiuuR9z4dKuaWzcXy5BGYaEPr4U0jzJI5QvaC%2BvAEZcVcomMXSRp3LGWFP9J4wgdBrO3aqj%2Fk0C8B255jc2NYsqJIZIg3Q%2FUc2n%2FzG8rLuEWFvy76rJQnwJFoXmb6YNVMMZb3Jbz4%2FztGtOJk98T0JKZwqho2C7GnWh9HpwMw2GnQ53FX%2B3xFtDt0v9jUasWOaSD3Yz9IGzAz06fX%2FnMIG79fPCoBrQSXdWqLwBJ1QzjpSxKn3f5VCszz3rU2bBLetEaPtIm4Uv2TvbPJX%2FK86UisQXny%2Fkqj1StYl%2F2opszWjtl6CSnENwqSpfwkvhzhb9dcbcFJPj1tu1bLYaK2Qi4jyzratZzQOGyxG8NbBMPHNUyezydjbnV36%2FJFk5Q%2BBkinnaCdb9n7e5S4z7AmkReWNrjWizDX2P7EBjqkARrpp4Sr3kXQ7AvqommF%2BpiqBs2%2BgrbWujN2Zv3%2Fwx2P%2BUvMIrFFaUN9UPXTDLlbWdM03m6mkvJboteqcSHf9ThyaMyfBvgm4oBKlSj2NrRbVzKjul9lgg8OVmZ9BMtwuFhmrFlxp0EjZOE6aH5YC5IozplY3I3X%2F8jKbGidoWUsZClgiHy3CGCY2KZYUjUZ0UPvFDaQ3vPUG2qhTa%2FDY71eh1l8&X-Amz-Signature=14521279766f4ba50a6ea1b8adf10858bdfa26113c0aa5b896634aaf45f1376d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EEDLFBQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCKrpcZkPvr85lusXesgwwA%2B63G19avsTCsjSbfiHqo1gIhAM78MZLY0ELFmYS0TpqPqEo5HTwTT6qYjEgGcXMpZVJ0Kv8DCGcQABoMNjM3NDIzMTgzODA1IgydcjIaxmDgGo55Uu8q3AOE%2B7F4La%2BUdxIsHTwBINjC4WjLjWqpA0vQstriQ458Ni9f8xbipdvGMRx0Ex6gYSWZH1aXfm9m3MIAMR%2FeEGp0%2BJ%2FaPhxdf7BiR42QMiJE4NfOu6q0PcvIumDQrNdB7khG7MgBG69Bd2GUy07oFdX29TrwMx7Mfe7VVfn1p19t2E21zkmDLawzs4184S86leqkkugH2QHcTMnIA4rjpYmKpueWe79wiuuR9z4dKuaWzcXy5BGYaEPr4U0jzJI5QvaC%2BvAEZcVcomMXSRp3LGWFP9J4wgdBrO3aqj%2Fk0C8B255jc2NYsqJIZIg3Q%2FUc2n%2FzG8rLuEWFvy76rJQnwJFoXmb6YNVMMZb3Jbz4%2FztGtOJk98T0JKZwqho2C7GnWh9HpwMw2GnQ53FX%2B3xFtDt0v9jUasWOaSD3Yz9IGzAz06fX%2FnMIG79fPCoBrQSXdWqLwBJ1QzjpSxKn3f5VCszz3rU2bBLetEaPtIm4Uv2TvbPJX%2FK86UisQXny%2Fkqj1StYl%2F2opszWjtl6CSnENwqSpfwkvhzhb9dcbcFJPj1tu1bLYaK2Qi4jyzratZzQOGyxG8NbBMPHNUyezydjbnV36%2FJFk5Q%2BBkinnaCdb9n7e5S4z7AmkReWNrjWizDX2P7EBjqkARrpp4Sr3kXQ7AvqommF%2BpiqBs2%2BgrbWujN2Zv3%2Fwx2P%2BUvMIrFFaUN9UPXTDLlbWdM03m6mkvJboteqcSHf9ThyaMyfBvgm4oBKlSj2NrRbVzKjul9lgg8OVmZ9BMtwuFhmrFlxp0EjZOE6aH5YC5IozplY3I3X%2F8jKbGidoWUsZClgiHy3CGCY2KZYUjUZ0UPvFDaQ3vPUG2qhTa%2FDY71eh1l8&X-Amz-Signature=0bbe63b2f6d76917de70f8198c05f61c9775698fa66b44392966d1c83c8d19fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
