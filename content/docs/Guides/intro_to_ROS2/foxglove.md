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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DC3SJCD%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0NdfTfsMKTyBaeF00jN%2FY7bbM1ecxGjqUHJwbzlrTHAiEAmjTJTq%2F5XLzTTsogt6dOf2pH7RRzY27ZnVcvwO7Lq2YqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7RAOByaw3qHlCTpyrcA4esJw%2FbqI5zV2kUOn%2BJuAn2UNkxObLDonFshBJDs80%2BUeii7YRiudFTh7sVRhaEaxsOVAVROQ8inKC7pry6Wc1eTmACYb3LlZFwtUNDf54sWGMdbDbpap%2Be%2FJolSccJoU8ckKBvJHwjlAUyzU3q3xCGBmU%2BbU3lvwozjZNzn2QCoXES%2BWCxzhWOXEsCqUguPuetrMsI1pyBqyORmA2%2BXNXHiCxbJJIX98anddpYZLrDn581yVZDHT3MHfNMzNl7%2FtU1e5m4Tr2SWIrwFvyuDNXn1nJxBpxKmRzY6Xn%2FBodv6G5YuugKeuIp42oO8dnBv49miv0KF%2FixYggrBVuQDFk4bnAzadhJd%2FjfnfHghL4JpGCZKt2P0Wng2SR%2Bqv3FNGOpJSbzaBTi20s7lfWTrw85GJA%2BVcPclbxuWCWDkukE1Iq70U9Ge8EkTk7olqvedyf89klrbXH2hWU1aDLYCa80LPjU8w1SoQtOuatBbqfM90XGAYDRGI28C6pbo6xMw7eXrfmJd1cjAe%2FXk8NBaccU3aYUD0DJXnnZwnCQRQOqs81FbheC%2BBx8bB52MxSOhFGx%2FfH7Qoxrg4h%2ByXwl8CMxYO5LqZ3rRMrxzRc9brWqtG6SUOG0yTc2tbBtMNmB8MsGOqUB0m4CLJ6H7Op8qgtChRcvkTBQYxjF%2F4U679tVYrZ%2B2KTFv4Qdmb5nWotL2%2B3a5Pe8ZqajoHvZpKE0Php0ilrOX0p6AzHONUc%2BDypy2JedNnWlMbQn9QQO5RFIqkdnPyHMHxQDYoE68FfFIiM85dYJ%2BW6RqDnhT3rIGYvwMTb3ByypPb4XEITml2dvA557E6BwlYYBrtzpbjvCZ6JUJbg48XkFGdMG&X-Amz-Signature=b393db724832a1133cf97d79791995f641bea7c4e02182429bfa6b1c85d05743&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DC3SJCD%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0NdfTfsMKTyBaeF00jN%2FY7bbM1ecxGjqUHJwbzlrTHAiEAmjTJTq%2F5XLzTTsogt6dOf2pH7RRzY27ZnVcvwO7Lq2YqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7RAOByaw3qHlCTpyrcA4esJw%2FbqI5zV2kUOn%2BJuAn2UNkxObLDonFshBJDs80%2BUeii7YRiudFTh7sVRhaEaxsOVAVROQ8inKC7pry6Wc1eTmACYb3LlZFwtUNDf54sWGMdbDbpap%2Be%2FJolSccJoU8ckKBvJHwjlAUyzU3q3xCGBmU%2BbU3lvwozjZNzn2QCoXES%2BWCxzhWOXEsCqUguPuetrMsI1pyBqyORmA2%2BXNXHiCxbJJIX98anddpYZLrDn581yVZDHT3MHfNMzNl7%2FtU1e5m4Tr2SWIrwFvyuDNXn1nJxBpxKmRzY6Xn%2FBodv6G5YuugKeuIp42oO8dnBv49miv0KF%2FixYggrBVuQDFk4bnAzadhJd%2FjfnfHghL4JpGCZKt2P0Wng2SR%2Bqv3FNGOpJSbzaBTi20s7lfWTrw85GJA%2BVcPclbxuWCWDkukE1Iq70U9Ge8EkTk7olqvedyf89klrbXH2hWU1aDLYCa80LPjU8w1SoQtOuatBbqfM90XGAYDRGI28C6pbo6xMw7eXrfmJd1cjAe%2FXk8NBaccU3aYUD0DJXnnZwnCQRQOqs81FbheC%2BBx8bB52MxSOhFGx%2FfH7Qoxrg4h%2ByXwl8CMxYO5LqZ3rRMrxzRc9brWqtG6SUOG0yTc2tbBtMNmB8MsGOqUB0m4CLJ6H7Op8qgtChRcvkTBQYxjF%2F4U679tVYrZ%2B2KTFv4Qdmb5nWotL2%2B3a5Pe8ZqajoHvZpKE0Php0ilrOX0p6AzHONUc%2BDypy2JedNnWlMbQn9QQO5RFIqkdnPyHMHxQDYoE68FfFIiM85dYJ%2BW6RqDnhT3rIGYvwMTb3ByypPb4XEITml2dvA557E6BwlYYBrtzpbjvCZ6JUJbg48XkFGdMG&X-Amz-Signature=e3906103a4a3e6bc3cc660d8b8b973c88df0f5f9222f754303b34e74ff6c49e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
