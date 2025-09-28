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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUD4N54T%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIAscB2%2FiGLLDrHv4QiyYoOoom4HWTRxsI1gyeSLXvno2AiA%2Frf0CV5DhtL%2BKCsNG96xyqIng%2FW1j5uR0%2FJurV6e8ByqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn188T6ybXIk0w6n%2BKtwDtzJMuywTJQdx9%2FRT%2BtvRJtQdyuNn0NDD5Su3kC3gYQiTxyZ3u%2F%2BhH2zAAbOHf0AVpXP34j5nGV%2FKjoLATJMZ2bRAHZg1lHvWl%2B%2Fx0L4GOHE7nUTwcTa7tYY6UWvFBKSZt3ZK%2F5C2p9MDDdxn9kKWbuBBaWHe4YkZBphgsZ6j7SxRQjcIRL%2BtV3Sa%2BM3PWbUrJU%2FoFy4rcwMvF5bCtnG3R3b3WOqak7cEc%2FBPOtSliaeg%2BuqvHn%2FDB7k2EuOhhNnnyImsz%2BsuJIIfafPGbQch%2F0Ze3PRtsaw2zl2pg9%2BiN5cKXfYVXVrRzNENM2PEyfvkDwJqX2j%2BHd1Zno2hOFvWAsNoUCYoGlki846EFqVPEFZegGaYBxiqpkhFE8nG9GZZ1yxEtCuNUV4AgIZe92q6DR6lZ%2BFvNsyxzVjzl661oNVbAL2LT6ctevsowhsZZIrpHsj3Xgq1IFgHMLUURv09eFBF3uDluQJFSKcqC6HsJ6t3jFSIPVMO4jgxBhoEduZGVfsAgM6Ftp1fTKQqOfq%2B3SMyUEcf0D97OBpGPAG0zBJBu%2BVyKTSDrKeG%2B04Np6bdaYDRaABvRSZkL18NCbz27za8cfVBEJD2VAP03ga0Mv3aAMZ4aSyS3STyrHcwrL%2FhxgY6pgFOl3RICyPrRupgzcaPF9GCiRBm81GY81QKbMoEsrrDL%2FrP6jNj4LDIteV%2BTCRItOtq0uXJcYLsOKWdR68S%2Fup%2FE235F6bZYckvPW%2B%2B4sPP1UJPvloNeycSIbkTJeOF6asB3FAAsyjHnNo5uA5Iljp17bjA%2B9E2hBpbpTxE7Uasx4H%2BJmifIF8Rx3oUGrWS%2FYJOGg%2BXg%2FtcDCam9iXGaYzIpa6pjRJ5&X-Amz-Signature=2e3cbf9cedda1ed3da09f27816b7684592f0234da0124de981d3103c6d922903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUD4N54T%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIAscB2%2FiGLLDrHv4QiyYoOoom4HWTRxsI1gyeSLXvno2AiA%2Frf0CV5DhtL%2BKCsNG96xyqIng%2FW1j5uR0%2FJurV6e8ByqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn188T6ybXIk0w6n%2BKtwDtzJMuywTJQdx9%2FRT%2BtvRJtQdyuNn0NDD5Su3kC3gYQiTxyZ3u%2F%2BhH2zAAbOHf0AVpXP34j5nGV%2FKjoLATJMZ2bRAHZg1lHvWl%2B%2Fx0L4GOHE7nUTwcTa7tYY6UWvFBKSZt3ZK%2F5C2p9MDDdxn9kKWbuBBaWHe4YkZBphgsZ6j7SxRQjcIRL%2BtV3Sa%2BM3PWbUrJU%2FoFy4rcwMvF5bCtnG3R3b3WOqak7cEc%2FBPOtSliaeg%2BuqvHn%2FDB7k2EuOhhNnnyImsz%2BsuJIIfafPGbQch%2F0Ze3PRtsaw2zl2pg9%2BiN5cKXfYVXVrRzNENM2PEyfvkDwJqX2j%2BHd1Zno2hOFvWAsNoUCYoGlki846EFqVPEFZegGaYBxiqpkhFE8nG9GZZ1yxEtCuNUV4AgIZe92q6DR6lZ%2BFvNsyxzVjzl661oNVbAL2LT6ctevsowhsZZIrpHsj3Xgq1IFgHMLUURv09eFBF3uDluQJFSKcqC6HsJ6t3jFSIPVMO4jgxBhoEduZGVfsAgM6Ftp1fTKQqOfq%2B3SMyUEcf0D97OBpGPAG0zBJBu%2BVyKTSDrKeG%2B04Np6bdaYDRaABvRSZkL18NCbz27za8cfVBEJD2VAP03ga0Mv3aAMZ4aSyS3STyrHcwrL%2FhxgY6pgFOl3RICyPrRupgzcaPF9GCiRBm81GY81QKbMoEsrrDL%2FrP6jNj4LDIteV%2BTCRItOtq0uXJcYLsOKWdR68S%2Fup%2FE235F6bZYckvPW%2B%2B4sPP1UJPvloNeycSIbkTJeOF6asB3FAAsyjHnNo5uA5Iljp17bjA%2B9E2hBpbpTxE7Uasx4H%2BJmifIF8Rx3oUGrWS%2FYJOGg%2BXg%2FtcDCam9iXGaYzIpa6pjRJ5&X-Amz-Signature=bc3b6b3baa9d35a3e074d4cf3223fc90d125e4a1fbe64651d12c9cf33fed4dec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
