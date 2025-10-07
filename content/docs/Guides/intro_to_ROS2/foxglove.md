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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPRE64TF%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCMHLakN%2BQrEw%2Br6EZtkGWwrKZs6ZxY8suL%2FWG4dMDOqAIgdn7MluBoowaUo%2F%2Bi6StIzCPQJy%2BTHAdS39pbi2FT6U4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMoxx1I%2BnnRV34S1hCrcA4Bw8YSDrjlH%2BBvgC9TkG%2BKDnvUmxC6ijU6mm7cbkx2gmcCL1WFm8dIzpsvT%2Bw%2FZXJZjClHFEu%2BJ%2Fmu9uCeefMxHYKw%2BYa3nutjrgMXdqPDKl4xw%2FKawiJ1ynwxPJh0g7yfDdSnKYrnbg6PhJXqcWqnSb%2BRhJZqPYtgQiWhxjzlf9J%2FrnWOdt%2FS12O%2BaFTfcATc0WbXw1LPTieGWY3T56bwlHf5Bkvmum48ijImr0RwPmCFV7kJI5kuutnZaau1BXpJSQ7WGVOuY0F7kWNRtVRnBIpfISxZCBSNijgpt%2FThoZfuFxnasbXHCZz6PTOxDcEdrEFuD1aEQx4LBgVDXCKbOIQFDu5ggSEdwZhZnR8Dlx7mcJ6iM4UB8zrgCUQPhaIo3xTMufLEm62jdrCvI8no81FQl0PYZv1fRI8i61TCsC%2FM3TTQHpUsfwC3J%2BjkZhPyb5gxbjVWKj5rpqsX5eofa6zTIL3CU%2Fxl6EXmcUI9uAyY0dC3siHoUNFPS4qh2AS4%2B584WOKDst%2BEXhYTq6utIKSfJbPqPh5%2FMTB6jp033NuTrpv9L8OlLKMOkdON8azr5e1sLijMDA3sQivBg3jccA45GuFWEZi4wisuIf%2BSvfGsw5R6PU0IqLryoML3JkccGOqUBhJc6mAZB54%2FwrhTsBvIOBaBpcrdxEGrm0YF%2FFdfEX3%2Fd1b1z4YIY2axF0jaSgAbcJQOPYPt8QG8Ni1zhEtrr1QWhi2cP53gGKKRjRpGr6NuV4qXwYMmkmsNVQh8AnHA%2B5xXaGXqoxdSWzN0z5QaDZUjC94YVOOeLRYUELbVaq28wHnDxUj0xwks9gR4XkYGgRAVC74hzuLeGiYgHFyej4PK3o%2BEW&X-Amz-Signature=18476775bf0d10a35226908f565033fb93b44e2b4fbc9aabb84fbd382a05acf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPRE64TF%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCMHLakN%2BQrEw%2Br6EZtkGWwrKZs6ZxY8suL%2FWG4dMDOqAIgdn7MluBoowaUo%2F%2Bi6StIzCPQJy%2BTHAdS39pbi2FT6U4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMoxx1I%2BnnRV34S1hCrcA4Bw8YSDrjlH%2BBvgC9TkG%2BKDnvUmxC6ijU6mm7cbkx2gmcCL1WFm8dIzpsvT%2Bw%2FZXJZjClHFEu%2BJ%2Fmu9uCeefMxHYKw%2BYa3nutjrgMXdqPDKl4xw%2FKawiJ1ynwxPJh0g7yfDdSnKYrnbg6PhJXqcWqnSb%2BRhJZqPYtgQiWhxjzlf9J%2FrnWOdt%2FS12O%2BaFTfcATc0WbXw1LPTieGWY3T56bwlHf5Bkvmum48ijImr0RwPmCFV7kJI5kuutnZaau1BXpJSQ7WGVOuY0F7kWNRtVRnBIpfISxZCBSNijgpt%2FThoZfuFxnasbXHCZz6PTOxDcEdrEFuD1aEQx4LBgVDXCKbOIQFDu5ggSEdwZhZnR8Dlx7mcJ6iM4UB8zrgCUQPhaIo3xTMufLEm62jdrCvI8no81FQl0PYZv1fRI8i61TCsC%2FM3TTQHpUsfwC3J%2BjkZhPyb5gxbjVWKj5rpqsX5eofa6zTIL3CU%2Fxl6EXmcUI9uAyY0dC3siHoUNFPS4qh2AS4%2B584WOKDst%2BEXhYTq6utIKSfJbPqPh5%2FMTB6jp033NuTrpv9L8OlLKMOkdON8azr5e1sLijMDA3sQivBg3jccA45GuFWEZi4wisuIf%2BSvfGsw5R6PU0IqLryoML3JkccGOqUBhJc6mAZB54%2FwrhTsBvIOBaBpcrdxEGrm0YF%2FFdfEX3%2Fd1b1z4YIY2axF0jaSgAbcJQOPYPt8QG8Ni1zhEtrr1QWhi2cP53gGKKRjRpGr6NuV4qXwYMmkmsNVQh8AnHA%2B5xXaGXqoxdSWzN0z5QaDZUjC94YVOOeLRYUELbVaq28wHnDxUj0xwks9gR4XkYGgRAVC74hzuLeGiYgHFyej4PK3o%2BEW&X-Amz-Signature=7ff92f1e482bab7590fc997bf546d07e654a01232366177bc4c47805ee3cdc3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
