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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOM6I2PO%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQD5HvAa9be%2BF8nbeL4mwlaZQM9bJFqjWr9aJkj%2FesFK1QIhAPocZWtid55SYvX9R8%2FcSWqPZ37WKjOyTXMxYkDIxM4nKv8DCBsQABoMNjM3NDIzMTgzODA1Igwr11aE2Z6VbPaaGmwq3AOMeZCeEWbg7LlfKeIJVvbxot5Ky2tdjpfBkJ8D%2Fm8q%2BVk6gZq9a5Qbjn5zEqj1Ybp%2BTzeIkDUXOsxP4EDhVwu5muSrV%2BaLHf6WUMSN2TqDcuKUUYPHYSSEOgES2%2BmbOaBwxM%2FIRfAiAWt2LFD403FsWZaAk9S0iQNhz89lA8PrjJvEuQ%2FdOw657mIz5TzAbdKkA6gsU5W3TAnPN8OVCAil%2B7HANpOdFUehYRDVWRTm8gsZGNrnyFhvcqdRDVjqe73i%2FTbx6thQv0XYwEcorYz1xo%2B%2Fr0AONzN3WDzSCm645j5iMZKEEyr73T71ToNRGy%2FVbTenDSmPKb8oUFYHN5Jf7OFfbUuV7xl%2BIjiY9aaZHSauETrhHshKguKGv34wYUWa0fumGmCpWAWk6IhPTfKnHdWjBSJJlGXgKHFl0R5%2FsglFB3rGlkiaajI4xErsAfhc4%2FTnLMvNlo2RzVk8e92e8AfdMc4RKP1MgD8WS6vZxm4rRSkQhqJF5O3E6%2FNbmr8lC2HoFepRhyjgpRhvw9%2B6dQ7MVN0ts7Tq6b5%2F7uIlcPIPQ78fwEjLaLpEOm1ufyqBXOm09caoQ7LJeIcRLxpXK%2BoiFQXdxG%2FlqDQhlKxpWD34zIxdE0UouyWKejDZ79XLBjqkASZp6c9EnLSrJ%2FAydeUgKGkgel9Qgk%2BVbrrX4LHVCU%2BfCnfV%2BFrTu7nY%2BXJZk%2B2zAqIA9DRf%2B0%2FC8%2F%2BPfdVmjr%2Bqx9%2F97YK%2B3m7HLs0D%2BFnRokmg2uvzYL%2FUxJ4lwZC0s9uQiRuUPtPoz%2BsffST1hk%2FsGmvJKnFD4x9%2BB0B3F2vphM6zp%2BJ8JmMcMrmJ0GP9prDhYox37EQPVyspRNLPE12FcNRY&X-Amz-Signature=36e56ebe13e1099028fc9c773cea6e356d54c728cd0da3fa9089790c56e020c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOM6I2PO%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQD5HvAa9be%2BF8nbeL4mwlaZQM9bJFqjWr9aJkj%2FesFK1QIhAPocZWtid55SYvX9R8%2FcSWqPZ37WKjOyTXMxYkDIxM4nKv8DCBsQABoMNjM3NDIzMTgzODA1Igwr11aE2Z6VbPaaGmwq3AOMeZCeEWbg7LlfKeIJVvbxot5Ky2tdjpfBkJ8D%2Fm8q%2BVk6gZq9a5Qbjn5zEqj1Ybp%2BTzeIkDUXOsxP4EDhVwu5muSrV%2BaLHf6WUMSN2TqDcuKUUYPHYSSEOgES2%2BmbOaBwxM%2FIRfAiAWt2LFD403FsWZaAk9S0iQNhz89lA8PrjJvEuQ%2FdOw657mIz5TzAbdKkA6gsU5W3TAnPN8OVCAil%2B7HANpOdFUehYRDVWRTm8gsZGNrnyFhvcqdRDVjqe73i%2FTbx6thQv0XYwEcorYz1xo%2B%2Fr0AONzN3WDzSCm645j5iMZKEEyr73T71ToNRGy%2FVbTenDSmPKb8oUFYHN5Jf7OFfbUuV7xl%2BIjiY9aaZHSauETrhHshKguKGv34wYUWa0fumGmCpWAWk6IhPTfKnHdWjBSJJlGXgKHFl0R5%2FsglFB3rGlkiaajI4xErsAfhc4%2FTnLMvNlo2RzVk8e92e8AfdMc4RKP1MgD8WS6vZxm4rRSkQhqJF5O3E6%2FNbmr8lC2HoFepRhyjgpRhvw9%2B6dQ7MVN0ts7Tq6b5%2F7uIlcPIPQ78fwEjLaLpEOm1ufyqBXOm09caoQ7LJeIcRLxpXK%2BoiFQXdxG%2FlqDQhlKxpWD34zIxdE0UouyWKejDZ79XLBjqkASZp6c9EnLSrJ%2FAydeUgKGkgel9Qgk%2BVbrrX4LHVCU%2BfCnfV%2BFrTu7nY%2BXJZk%2B2zAqIA9DRf%2B0%2FC8%2F%2BPfdVmjr%2Bqx9%2F97YK%2B3m7HLs0D%2BFnRokmg2uvzYL%2FUxJ4lwZC0s9uQiRuUPtPoz%2BsffST1hk%2FsGmvJKnFD4x9%2BB0B3F2vphM6zp%2BJ8JmMcMrmJ0GP9prDhYox37EQPVyspRNLPE12FcNRY&X-Amz-Signature=9f4da4446411dfd9be3bbff98e0e33382acb92718217f27c0c2ab0695102f987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
