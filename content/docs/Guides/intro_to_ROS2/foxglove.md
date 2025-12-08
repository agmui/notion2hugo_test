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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7EGTBXF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRuJta%2B52%2FKNPB20fgIJbMlvwAKXQnNdbmNbVd%2B9NmAAiEA6ceNHP7irwg2%2BbBF1gUtyj143bFau6UsbULawG%2B2V5sqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFPIXrr4kZp%2F8sWxCrcA7Gdz3Lt%2Fjn8VfiZWAFbwd03e%2FmcXUET4vxvILulGRCCI37RTohIWvsJOyt5WsG64GxbHR8BpDAeO3TSQODCDrhWvKcsXmPIvzYu1EozRQD1twyPuf%2Bv32hWmAxloE5DGcbWX9vu4b3oF4l6feSV7F9FjuXaIg5C6RoUCVWF00AIF2bcm%2B71PjiOMWsaGT68Ujdon2E5Buo3MD3om6bOG6v2fmfE662HQff58c8joQ%2BmF7AdYNO7dVwGhnP3cQlWVn5YJiZbOKiVfZ2x%2B8ABAaSOvR2JWuE5uDCVXmF8qheYxDt6gZG9oalmO2Gjmh1OcX8ANiJvKAa%2Fpp4cN0QjhMfyZr4B%2FXRAusKb6UStPXXnsaYzffnEZg1HyEr3BsAo%2FKcamfOVXaQ%2FyWnWvAbFqfsvDpcwh8W3u2%2Fbe88Wuoro%2Fa%2FuSKY2RiVa9bZduWU7xmpZYA8DI6Ayl6NezvX%2Fxd%2BKoYUTnK1jSQwNlnE6LfubB%2B93NIV3cJT4wnJqwT3Hk0BA%2F1kJKCFQZ%2B929e4WVnV0C%2BGtQiLCO4EjK3rcfSI%2FfxuRO0oENM52AlQl3eQP17erJZQIYKb3QFq0809nsH7XS6QB4um5zc78PPSKfDuOZfi3GFSdB%2ByBUEbRMJPQ2MkGOqUBTy5gD1fgq5Y9x4NaNrIZliUmKebXJtmJKjKo1mNMxFr70qSdYJFfNtxub4xK%2FA41a2t502hY3kQ0tLFennRpS66xVqeF6C3%2Fb8mcH8hSlUhs%2BMLrLpfQ0hMS8eFS%2BhA3noZ2NtLyDcNq%2F4x%2BlG%2FZvLye2FVgtJogZrFvamNypmN6egT0QIkVB5F12%2FKm4tFY%2FGtrw4rJdYiB2mx3Q%2F9U6LhWlAAz&X-Amz-Signature=f87713cb8ecbcc1f2f82801141c49fc0572ba4051ef599fdd07563adf0a793f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7EGTBXF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRuJta%2B52%2FKNPB20fgIJbMlvwAKXQnNdbmNbVd%2B9NmAAiEA6ceNHP7irwg2%2BbBF1gUtyj143bFau6UsbULawG%2B2V5sqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFPIXrr4kZp%2F8sWxCrcA7Gdz3Lt%2Fjn8VfiZWAFbwd03e%2FmcXUET4vxvILulGRCCI37RTohIWvsJOyt5WsG64GxbHR8BpDAeO3TSQODCDrhWvKcsXmPIvzYu1EozRQD1twyPuf%2Bv32hWmAxloE5DGcbWX9vu4b3oF4l6feSV7F9FjuXaIg5C6RoUCVWF00AIF2bcm%2B71PjiOMWsaGT68Ujdon2E5Buo3MD3om6bOG6v2fmfE662HQff58c8joQ%2BmF7AdYNO7dVwGhnP3cQlWVn5YJiZbOKiVfZ2x%2B8ABAaSOvR2JWuE5uDCVXmF8qheYxDt6gZG9oalmO2Gjmh1OcX8ANiJvKAa%2Fpp4cN0QjhMfyZr4B%2FXRAusKb6UStPXXnsaYzffnEZg1HyEr3BsAo%2FKcamfOVXaQ%2FyWnWvAbFqfsvDpcwh8W3u2%2Fbe88Wuoro%2Fa%2FuSKY2RiVa9bZduWU7xmpZYA8DI6Ayl6NezvX%2Fxd%2BKoYUTnK1jSQwNlnE6LfubB%2B93NIV3cJT4wnJqwT3Hk0BA%2F1kJKCFQZ%2B929e4WVnV0C%2BGtQiLCO4EjK3rcfSI%2FfxuRO0oENM52AlQl3eQP17erJZQIYKb3QFq0809nsH7XS6QB4um5zc78PPSKfDuOZfi3GFSdB%2ByBUEbRMJPQ2MkGOqUBTy5gD1fgq5Y9x4NaNrIZliUmKebXJtmJKjKo1mNMxFr70qSdYJFfNtxub4xK%2FA41a2t502hY3kQ0tLFennRpS66xVqeF6C3%2Fb8mcH8hSlUhs%2BMLrLpfQ0hMS8eFS%2BhA3noZ2NtLyDcNq%2F4x%2BlG%2FZvLye2FVgtJogZrFvamNypmN6egT0QIkVB5F12%2FKm4tFY%2FGtrw4rJdYiB2mx3Q%2F9U6LhWlAAz&X-Amz-Signature=29ff0fb3c73776c6d340c3406a6f316111f9fa5963c7c3db5d76a13e6d8e74a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
