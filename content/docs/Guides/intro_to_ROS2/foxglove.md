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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O4ALYAV%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGUtJAR1a3I%2BFNhKJhd%2B%2B%2FfuGeSXUJd2rBiXMMYjgu%2BAIgOxeZQwv1yHG38FZHlLckwKIZU5snO%2BDaadpRoeFnVIwqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHq%2Basg8Ilaco1xv3CrcA79VIuKJA6WoFC16hX%2BSFoeGIU2n8pnvbO8MA%2BBmZYq%2BUT2OnwV3%2F6gAn3zDmCh9hM9r3bvbPOfMmdzzL2nVYz5Vbr5CbYXS%2Bjk%2FGdiUCCmSfpamIH7TUMzt4%2F8NaHBPyofNSaPAY%2FMYiNtrkueMvjPoBWK4iLQGFWTZTSMl3ESlupjJadlzjXP5smMZXsgfb1GZWGZGGQUCshqv2OLoDvMlmFqjKrcjoalEzVI1xZL6uWs59KNMhLsBugpagFyzD%2FSxjvZnQwWIacWNSJJX2NGhZohhF2FKneu5NpG2u%2Bk1rh%2F9v9MzpofqiHPaZKhJOcb06xL3pKAFP6%2FWGFYKjmQFmv4ReyzLJYeWuhZ4TjW3%2BLqUjY7GmuLm64gBwbo5v%2BZfcH73YoyZ5GLPFsCkgbw0CXDtsCFoBYxcQTsu%2B4qzSLi6RvJFVzxAY8OKXu8S8xyiRK6lrVUvWCb7Rp8%2BQkyfOCQ0VLt2xunKDGnWEsYg%2FTBQMYzJwwVTWNOoa89nD37r9x9T1IzMjYFdmWCO8eP25CznTMDjCuXyqyL3YfjJrgSZtQqsdOX0m1o2%2BKFJQuStPPKyboopM%2BOvRLJFGxasEqsnad7HHwnHX9qtHRQR3M2Yihmplc62dnt3MLutjcoGOqUBO%2BRkMroPMEwJV6gHqADc3pehNdALJLyMknLkDxygxdoKe6mq2fjeeBbhlIDHtGfDVCt4QUyQYvMlnqmMFyIFc2EFBYrlFnmdD%2FoU47mC4ioBMNSWFy12bSsqBV3vTSa404w0hQG%2FO%2BDQt4QxvFp7tUpSwNFaXn0lUf0JZCIUE2mSKxNhMrBrRmMgJQZTAVJLc9yfMkP4N0Q%2BF%2Fd1eH%2F8DLApg0mH&X-Amz-Signature=e25b4ad6dd5d1f0c9f34bb359a02a885e6a3efac83965f25bca2839eb1d5c82d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O4ALYAV%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGUtJAR1a3I%2BFNhKJhd%2B%2B%2FfuGeSXUJd2rBiXMMYjgu%2BAIgOxeZQwv1yHG38FZHlLckwKIZU5snO%2BDaadpRoeFnVIwqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHq%2Basg8Ilaco1xv3CrcA79VIuKJA6WoFC16hX%2BSFoeGIU2n8pnvbO8MA%2BBmZYq%2BUT2OnwV3%2F6gAn3zDmCh9hM9r3bvbPOfMmdzzL2nVYz5Vbr5CbYXS%2Bjk%2FGdiUCCmSfpamIH7TUMzt4%2F8NaHBPyofNSaPAY%2FMYiNtrkueMvjPoBWK4iLQGFWTZTSMl3ESlupjJadlzjXP5smMZXsgfb1GZWGZGGQUCshqv2OLoDvMlmFqjKrcjoalEzVI1xZL6uWs59KNMhLsBugpagFyzD%2FSxjvZnQwWIacWNSJJX2NGhZohhF2FKneu5NpG2u%2Bk1rh%2F9v9MzpofqiHPaZKhJOcb06xL3pKAFP6%2FWGFYKjmQFmv4ReyzLJYeWuhZ4TjW3%2BLqUjY7GmuLm64gBwbo5v%2BZfcH73YoyZ5GLPFsCkgbw0CXDtsCFoBYxcQTsu%2B4qzSLi6RvJFVzxAY8OKXu8S8xyiRK6lrVUvWCb7Rp8%2BQkyfOCQ0VLt2xunKDGnWEsYg%2FTBQMYzJwwVTWNOoa89nD37r9x9T1IzMjYFdmWCO8eP25CznTMDjCuXyqyL3YfjJrgSZtQqsdOX0m1o2%2BKFJQuStPPKyboopM%2BOvRLJFGxasEqsnad7HHwnHX9qtHRQR3M2Yihmplc62dnt3MLutjcoGOqUBO%2BRkMroPMEwJV6gHqADc3pehNdALJLyMknLkDxygxdoKe6mq2fjeeBbhlIDHtGfDVCt4QUyQYvMlnqmMFyIFc2EFBYrlFnmdD%2FoU47mC4ioBMNSWFy12bSsqBV3vTSa404w0hQG%2FO%2BDQt4QxvFp7tUpSwNFaXn0lUf0JZCIUE2mSKxNhMrBrRmMgJQZTAVJLc9yfMkP4N0Q%2BF%2Fd1eH%2F8DLApg0mH&X-Amz-Signature=3a8e952134fa55e22334c7a069a380529dcf6f11f6c42fa5fe750de48a5deb24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
