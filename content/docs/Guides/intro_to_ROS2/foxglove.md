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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGTLR2IT%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2m5OdFUjnmWGfLuixqd5LzPSsAls5%2BEl8XgEUaHB1IAiAsJ5YOCcYwW%2FNuYtmIF3cX9SN4hpJOj9Rs%2Fy0VmXDscyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMjNHMhf%2Fp2O2KE7yrKtwDlW%2FsgMG9HFj%2F8PjXqoLE0YGy9Hsk8Ckef1wxGQtKn5YyJC4QXKp2porGxYSn9eHGl%2FFnFnEPZRryLbzkpmcQ98vZMJ76TPApqGcyg4aEr3Eic%2BdVRivgYN67z%2Btjw176DnKVqu%2BR1HyHNHKtuITJDXvWsB79N6Jj0TbBPzJcWRqlvghUyrzcUEERUrn2FIBLGoZRykS2xxgr%2Bt7dTKXbE7StfIl3sngC7bC9DKf27n%2BR5RppgGn6pf%2Fbo0p6QFXbX4T%2B2UoFXbv4IkjnLACzpROf2G%2FfzpEh48ULchWOSBtlV5Nhh%2F4RzgaZXeJ3Li17T74JoolCoSOkZfukbeh1sejeR6NVLEebT%2BrvnRpH204fkeRaFQIbkAfTXUDZ0bwHHpvxuXBvVTLhg9BbWITg2CiPiwHugEJg5EUB1TeIC6sXZo6swoWblIxyRKZj%2FktwIbhRhKWqaly9F3Zim4YaFVJeOCRhkopLopb%2FpQqYZY%2BaJCEgdZ14SZVS9ox7prD0NF6yS%2BXjPApZrIoQhTesaWfT7ircdUEVW3iiy2HBSEzNxgrCqV2gG2Q2RAGmmLv8JHzP8FITDI7IV6vtSDnSnmbAhEdAPf7bECXs3nmmln68qfI%2B0DfFXCLXnxMwh%2B3Z0wY6pgGBGAISxumyqvdgS0Fct492I8vs0SXAWz0XILGT39n01B7g83WjiUblpFKOH2tKslgJ6vDFH7fcFfd5U1A5WRUX1Ax1mjn4qVxnMHW5fqVn7fl2HlVz6PS%2FNG48P%2B6WNJIvEwZCvmQ%2BLfUjDzTGRQ9BpBiniWjPws%2BPe3QMbekTumESmCHkL3uxE%2FHskyLNWI1PX7YfkTD5cKITCnyC2zQGl%2FwaV8vz&X-Amz-Signature=798a67bacf6b2197b40c3571f8a3b1a1d1ad480e935fe152df89ae77d4f006c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGTLR2IT%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2m5OdFUjnmWGfLuixqd5LzPSsAls5%2BEl8XgEUaHB1IAiAsJ5YOCcYwW%2FNuYtmIF3cX9SN4hpJOj9Rs%2Fy0VmXDscyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMjNHMhf%2Fp2O2KE7yrKtwDlW%2FsgMG9HFj%2F8PjXqoLE0YGy9Hsk8Ckef1wxGQtKn5YyJC4QXKp2porGxYSn9eHGl%2FFnFnEPZRryLbzkpmcQ98vZMJ76TPApqGcyg4aEr3Eic%2BdVRivgYN67z%2Btjw176DnKVqu%2BR1HyHNHKtuITJDXvWsB79N6Jj0TbBPzJcWRqlvghUyrzcUEERUrn2FIBLGoZRykS2xxgr%2Bt7dTKXbE7StfIl3sngC7bC9DKf27n%2BR5RppgGn6pf%2Fbo0p6QFXbX4T%2B2UoFXbv4IkjnLACzpROf2G%2FfzpEh48ULchWOSBtlV5Nhh%2F4RzgaZXeJ3Li17T74JoolCoSOkZfukbeh1sejeR6NVLEebT%2BrvnRpH204fkeRaFQIbkAfTXUDZ0bwHHpvxuXBvVTLhg9BbWITg2CiPiwHugEJg5EUB1TeIC6sXZo6swoWblIxyRKZj%2FktwIbhRhKWqaly9F3Zim4YaFVJeOCRhkopLopb%2FpQqYZY%2BaJCEgdZ14SZVS9ox7prD0NF6yS%2BXjPApZrIoQhTesaWfT7ircdUEVW3iiy2HBSEzNxgrCqV2gG2Q2RAGmmLv8JHzP8FITDI7IV6vtSDnSnmbAhEdAPf7bECXs3nmmln68qfI%2B0DfFXCLXnxMwh%2B3Z0wY6pgGBGAISxumyqvdgS0Fct492I8vs0SXAWz0XILGT39n01B7g83WjiUblpFKOH2tKslgJ6vDFH7fcFfd5U1A5WRUX1Ax1mjn4qVxnMHW5fqVn7fl2HlVz6PS%2FNG48P%2B6WNJIvEwZCvmQ%2BLfUjDzTGRQ9BpBiniWjPws%2BPe3QMbekTumESmCHkL3uxE%2FHskyLNWI1PX7YfkTD5cKITCnyC2zQGl%2FwaV8vz&X-Amz-Signature=479a8f08259f605935f67fba45648833b6c2be6d934efb14b3537e5f281451f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
