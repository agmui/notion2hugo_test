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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHTT5MM2%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCo9GTvvifqqBr6eP6%2FTmQFCr8ijNc3VfwsvKFuvU2XNwIhAKxiiFMj7ZCb1hU1xEPDJhI%2B1cIIqMtQ%2BVQayVZ7hI6kKv8DCEEQABoMNjM3NDIzMTgzODA1IgyRkI9R7IZEgd7VY3gq3AOh1FMz3xbRG1ZLmjWoQDMBF4uWm1nkS4%2FMdSvWyd%2BW%2Bbi0f7WuQC9gPvUDBlIVv8sa9LRrOKXlamqnf9OONcQlUGGrGvmfdGTYbxi3gTz6umfG04q33Cu0R1qkyaE6Zf%2FF7QyzVlr%2FTU11r47smOClyoIf01nImewVYjO0fa4m%2FY7%2FYviPlLqBYi5SOv1%2BCzmLyJZzHTGC%2BnMJRi%2FuM%2FHbu8NlyDXjsJ3C9%2Fki8bJWPUudKDZaPDX8T97XvSAesggUpiP%2FYSJ%2FdVi86OgN0yj1baZYdv1UgWUDjWdkJwYrWVVYRnDoYf75yYcc5bCFNTAyeDgR45lkYB1ohGuSSe%2BL0vQBZYZp%2Fz%2BdqEN58HZZEpwOdN8rPMU7eHvVq%2BOIp0%2F2l4L%2FpyPooXjxMloEAr0RT7LpVWXwoYGITMIFFVltOYXWVfuJgyAmahCDlOkI7K%2BZDguy3e6CVzeiIISTndOc1NLMcw3gX4RjuFRx9dzUPdu%2Bz021JuGN6eVgswgvdnD%2FRku4TeQC5mGk8y5k5wA7RIdSy8M9cTisOzLpybXoqDfT6au4DRZ6ZPlpuH3%2BgvDQ%2FYpWQ5CCUVO8GPknnmnvv0FNk9RpNaDyvp6Oy5e2LNIzZr4d7OM%2BpWC%2FjzCRr%2FbEBjqkAbLaYsjEecigbSH1M8tSeD7NhCvhRBM8zD9NSIbEv7R8%2FvINxBkZFhLcbITZBtlYXh8YGS5qLHfFnAbfZXTHYcPYzZnkrIhJjp6hrZvi0ryOwONE6krIN0o8RKtbj3buJM9vsQ0j0qHs8QHa3IhSZn2YbOFE9HtZQzLgGQ1o3CBf0lAePoodad%2FI5ymFZUmENYajNazu8umQ4cu2NOaJNB%2BgMjrV&X-Amz-Signature=a94463b9484efe1efd550991dca9a543ea857102cec65759bb6517977d41bc51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHTT5MM2%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCo9GTvvifqqBr6eP6%2FTmQFCr8ijNc3VfwsvKFuvU2XNwIhAKxiiFMj7ZCb1hU1xEPDJhI%2B1cIIqMtQ%2BVQayVZ7hI6kKv8DCEEQABoMNjM3NDIzMTgzODA1IgyRkI9R7IZEgd7VY3gq3AOh1FMz3xbRG1ZLmjWoQDMBF4uWm1nkS4%2FMdSvWyd%2BW%2Bbi0f7WuQC9gPvUDBlIVv8sa9LRrOKXlamqnf9OONcQlUGGrGvmfdGTYbxi3gTz6umfG04q33Cu0R1qkyaE6Zf%2FF7QyzVlr%2FTU11r47smOClyoIf01nImewVYjO0fa4m%2FY7%2FYviPlLqBYi5SOv1%2BCzmLyJZzHTGC%2BnMJRi%2FuM%2FHbu8NlyDXjsJ3C9%2Fki8bJWPUudKDZaPDX8T97XvSAesggUpiP%2FYSJ%2FdVi86OgN0yj1baZYdv1UgWUDjWdkJwYrWVVYRnDoYf75yYcc5bCFNTAyeDgR45lkYB1ohGuSSe%2BL0vQBZYZp%2Fz%2BdqEN58HZZEpwOdN8rPMU7eHvVq%2BOIp0%2F2l4L%2FpyPooXjxMloEAr0RT7LpVWXwoYGITMIFFVltOYXWVfuJgyAmahCDlOkI7K%2BZDguy3e6CVzeiIISTndOc1NLMcw3gX4RjuFRx9dzUPdu%2Bz021JuGN6eVgswgvdnD%2FRku4TeQC5mGk8y5k5wA7RIdSy8M9cTisOzLpybXoqDfT6au4DRZ6ZPlpuH3%2BgvDQ%2FYpWQ5CCUVO8GPknnmnvv0FNk9RpNaDyvp6Oy5e2LNIzZr4d7OM%2BpWC%2FjzCRr%2FbEBjqkAbLaYsjEecigbSH1M8tSeD7NhCvhRBM8zD9NSIbEv7R8%2FvINxBkZFhLcbITZBtlYXh8YGS5qLHfFnAbfZXTHYcPYzZnkrIhJjp6hrZvi0ryOwONE6krIN0o8RKtbj3buJM9vsQ0j0qHs8QHa3IhSZn2YbOFE9HtZQzLgGQ1o3CBf0lAePoodad%2FI5ymFZUmENYajNazu8umQ4cu2NOaJNB%2BgMjrV&X-Amz-Signature=74d540c8c391c787d42d23fc49b15615cb7b8e963ee646b84d18b513a35946e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
