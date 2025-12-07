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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JT5P4MS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICIXiv1LpQqDmQ6f1DFtS5kWaA%2Bo5q%2Brs1i4oy5%2F0aXMAiEA9btAc%2FOHeHUwVDegDbZhrWHdgVzm9oDDuqXQw%2B2n4C8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSJdI6UY%2BVvPZpVKSrcA3YK4pdDuhX98NpgADk1%2Bl8V3uayyPNXquZ781PL5P8JAieyYQjE63MdH%2BMNaJ5RtDpIm490vSCJarLj3pgaRqYlKngOLtvO%2F9wFWImQV4hoQaB0fTy6o6AhcySX6Gsxk7N7yLmJT5QFD7lU1ZQRt6PDQisQWPtkouBXSJ%2FuLOqqwqi22vR0XSMu1iYBULeSQEQfQqdYHK7vZvOBGQL7wokOzyV%2Bdwvl0RCUyIO5%2FgLVt%2FwkPIO5g5cUzymOniR8tYHtHNthnR9%2FpqT8%2FwRXXcKOIyhKcGzimNVEEF%2Br%2Fom4Alw%2BWKavza7emxwAXrOOhxJvTxJ70GGNjte%2BrPfZWK2mCSEwvozdzYAuvzCh6D5j7ScBHFOoLb%2Fuba7fmOf23tDZYOCih%2FfeoSxCS7NdmPT%2By%2BnXOjvespsEdOcsQg1hu%2B1SFr6P0qq7zjQRJmbYjui4BniVL5cA2u5axE9Uft5Xrb%2FqcQ9QjvuLaAEP0%2FKKEs3vaEDkz2ZiX%2FscDJ7l1RzadYqDrP7Fj6nPLEAqXAEKjJNbNb4gt2VDAVBRCG2lHO7EQo8Z4ICpQcVxvihA8jxHE4jQUr1wz0cB4xDDN4aLY5I%2F80IQkOhgxiZvETBK6S%2F%2FSDY1ZeofQBhTMK7%2B0skGOqUB%2F9gqqYvqg3Wa327McEUkJGSwsWND9r4VXk9lAsEeWivL0ryzhS8hvDlt5cJexvmSEpI0IPIAfHWjF6bbFPJ%2Fk8JTImqBKVCX8R34CfZkiZjNK6nWUuvHK2gaz9FGUQmhUb3tgL9WDSTk5K0Er8RpYviaE3DiKWeAZ2sJFzFxa5%2BikH9tzodjIo%2Buy1oZxnYY6asSgoqyf9ECcQYqnHxVmLJvlylx&X-Amz-Signature=9ace6c7605b369295ef33b32553e8a292bf1d0426832b4b776b4f024633820b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JT5P4MS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICIXiv1LpQqDmQ6f1DFtS5kWaA%2Bo5q%2Brs1i4oy5%2F0aXMAiEA9btAc%2FOHeHUwVDegDbZhrWHdgVzm9oDDuqXQw%2B2n4C8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSJdI6UY%2BVvPZpVKSrcA3YK4pdDuhX98NpgADk1%2Bl8V3uayyPNXquZ781PL5P8JAieyYQjE63MdH%2BMNaJ5RtDpIm490vSCJarLj3pgaRqYlKngOLtvO%2F9wFWImQV4hoQaB0fTy6o6AhcySX6Gsxk7N7yLmJT5QFD7lU1ZQRt6PDQisQWPtkouBXSJ%2FuLOqqwqi22vR0XSMu1iYBULeSQEQfQqdYHK7vZvOBGQL7wokOzyV%2Bdwvl0RCUyIO5%2FgLVt%2FwkPIO5g5cUzymOniR8tYHtHNthnR9%2FpqT8%2FwRXXcKOIyhKcGzimNVEEF%2Br%2Fom4Alw%2BWKavza7emxwAXrOOhxJvTxJ70GGNjte%2BrPfZWK2mCSEwvozdzYAuvzCh6D5j7ScBHFOoLb%2Fuba7fmOf23tDZYOCih%2FfeoSxCS7NdmPT%2By%2BnXOjvespsEdOcsQg1hu%2B1SFr6P0qq7zjQRJmbYjui4BniVL5cA2u5axE9Uft5Xrb%2FqcQ9QjvuLaAEP0%2FKKEs3vaEDkz2ZiX%2FscDJ7l1RzadYqDrP7Fj6nPLEAqXAEKjJNbNb4gt2VDAVBRCG2lHO7EQo8Z4ICpQcVxvihA8jxHE4jQUr1wz0cB4xDDN4aLY5I%2F80IQkOhgxiZvETBK6S%2F%2FSDY1ZeofQBhTMK7%2B0skGOqUB%2F9gqqYvqg3Wa327McEUkJGSwsWND9r4VXk9lAsEeWivL0ryzhS8hvDlt5cJexvmSEpI0IPIAfHWjF6bbFPJ%2Fk8JTImqBKVCX8R34CfZkiZjNK6nWUuvHK2gaz9FGUQmhUb3tgL9WDSTk5K0Er8RpYviaE3DiKWeAZ2sJFzFxa5%2BikH9tzodjIo%2Buy1oZxnYY6asSgoqyf9ECcQYqnHxVmLJvlylx&X-Amz-Signature=e89c48ebd26b4b09dfb4831022205c990340c7284aa18c233306a4907422b036&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
