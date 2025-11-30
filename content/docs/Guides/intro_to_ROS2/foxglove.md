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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652AWV3A3%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIGMZ%2FrkyWic6%2Bqk2jWwEUMCSd77ndZgISLpsjuixVvpIAiEA6bM1Zo8T8muJmDJN%2BF8AHxno7gyfwwDyvNt4hlNH%2Bc8qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD18ck8%2BuLXbcalFuyrcA4hQqqRAYs62oQVcDY7jmsWT%2FFXaX2bsWaQR9Dx6jnlufOOsdLfYZDeTw0NvudRwxrGdkeoJTizMW15dJdrh9sTaUWEhbZ0Foad86AxVhoIpuwF2emyas82%2B8whwrChWuSPhnS0JaEHActrqiHed87zmQr8GK7P9tQw1nxJANS2r6V3w7YLzpM2wsBdYDoXKYVMaqbEaOvWDGsGvS24A46onTIvktggHieeqGgjlvoZwrk6lMraOmYQPg%2B%2BMS9BeQSY3UxeEo2o%2BPEFhKODbuo%2BwrhA8KDGcW5kVzPYqYJnzXMqTRwkoPZ98vgA4hHmhHN5zBmQ6aIqR%2BTl%2B7vQ4ViJ8SI%2F4z%2FOOHcG9dhfMvDqI4MK2RcnxkaZNUTdzijULbXx1U%2FU9lTNmlh2GSfjp3ByxCzFGcqgeKDezWUCZ0oNqeoj8Or%2FJkMMM8Yta7xj2O5f82Vbs8iEXzIQiihivgU8PPLqibIkeQl2TBx6S3QK5eD%2FaBhySukWzIZkTnw3B2fcRpyatxIbobcKSjLq69DKp7e4dy%2BpZERh0nODqLdpHD3RasfxRVRhlT0lyU%2FPM3ZoeCrbMjHdolrkq7qViaFnsMb1dDs%2BPgIjKJxLT%2FSXTsKAusDxfBpQmkmPcMIvarckGOqUBmBSGYM0IIPwgI2jzQ%2FQiIEVGGtm0iVwq%2FcWq91u9e6P%2BMrzFL6tpsV022xOrI4AOb0iAyshfyQF0rsVEe9cB4fnEF7XaqNVHRH2vPYSr4KSSINqWIUtzSzvPmIVg9kxqTGE0FjyZRBSn5XN2EBji7%2FBWmXQEaXtgZdWJ4pe3laeA424DkCJ8S%2FwEboNtkj4G9jAzhY%2FuiwAbFADdHTizceTsOJYo&X-Amz-Signature=1b1a19116247fa5e6a79c134110c7027e7ca6fca0e7374e8e093a3b8e96ea55a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652AWV3A3%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIGMZ%2FrkyWic6%2Bqk2jWwEUMCSd77ndZgISLpsjuixVvpIAiEA6bM1Zo8T8muJmDJN%2BF8AHxno7gyfwwDyvNt4hlNH%2Bc8qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD18ck8%2BuLXbcalFuyrcA4hQqqRAYs62oQVcDY7jmsWT%2FFXaX2bsWaQR9Dx6jnlufOOsdLfYZDeTw0NvudRwxrGdkeoJTizMW15dJdrh9sTaUWEhbZ0Foad86AxVhoIpuwF2emyas82%2B8whwrChWuSPhnS0JaEHActrqiHed87zmQr8GK7P9tQw1nxJANS2r6V3w7YLzpM2wsBdYDoXKYVMaqbEaOvWDGsGvS24A46onTIvktggHieeqGgjlvoZwrk6lMraOmYQPg%2B%2BMS9BeQSY3UxeEo2o%2BPEFhKODbuo%2BwrhA8KDGcW5kVzPYqYJnzXMqTRwkoPZ98vgA4hHmhHN5zBmQ6aIqR%2BTl%2B7vQ4ViJ8SI%2F4z%2FOOHcG9dhfMvDqI4MK2RcnxkaZNUTdzijULbXx1U%2FU9lTNmlh2GSfjp3ByxCzFGcqgeKDezWUCZ0oNqeoj8Or%2FJkMMM8Yta7xj2O5f82Vbs8iEXzIQiihivgU8PPLqibIkeQl2TBx6S3QK5eD%2FaBhySukWzIZkTnw3B2fcRpyatxIbobcKSjLq69DKp7e4dy%2BpZERh0nODqLdpHD3RasfxRVRhlT0lyU%2FPM3ZoeCrbMjHdolrkq7qViaFnsMb1dDs%2BPgIjKJxLT%2FSXTsKAusDxfBpQmkmPcMIvarckGOqUBmBSGYM0IIPwgI2jzQ%2FQiIEVGGtm0iVwq%2FcWq91u9e6P%2BMrzFL6tpsV022xOrI4AOb0iAyshfyQF0rsVEe9cB4fnEF7XaqNVHRH2vPYSr4KSSINqWIUtzSzvPmIVg9kxqTGE0FjyZRBSn5XN2EBji7%2FBWmXQEaXtgZdWJ4pe3laeA424DkCJ8S%2FwEboNtkj4G9jAzhY%2FuiwAbFADdHTizceTsOJYo&X-Amz-Signature=be6b08898984c3fdc8d0ebeabc2152d51344d8080acc451e4ad6cea3fe97558b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
