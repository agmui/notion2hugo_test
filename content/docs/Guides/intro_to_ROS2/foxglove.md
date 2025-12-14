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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB4WGS3U%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCyX3zs8GTVzv8XT%2BJeorHObmU%2BMU870sMQCCRcwuwEywIgUQtrN6m0faYuIfLmRKrPetTHxJHg58wMuXEkR%2FC7SMcq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJE%2BPaE0I6cPvZQfTSrcA2YLYPm4EfXNZ0ZzboiHlrsywf33F0%2BGuInIuyZaq2AL25Qan%2F517GFAjLdA7NxSjtGU5sQeKL31NZcjTAwCClr47wfQkaSnO5SdTW3YIKS%2BE2z5N3Y6u2hTR6TgeCAAAITO%2FE%2F8rkI2%2Fbieraj2DFtgs8fBsVNJrbPfekOtmEY%2BhMSJrAEwVmLRVSYffST%2BbsJo3vepncSPNOOPdZn4V7CVrU2OrOf9V%2F%2Fy43XoyHBKgMgaU2WHVnrAV170L5LQdqPgW3kVGLm2EirOxaOfRicw5FbhqGrdbLG%2FmDkVMiA%2F45%2FiQbA%2BduFi4tX1Leyr3XsNKXurmqnBklqIP9KPHtOlA8ShGjlT47abxuDNjoDM5EyEzFjWfVn7DhjL%2BHmrDjw3LvNEZE44QBgb8i7UOIMGdq6ix2vTtxLfuYw6dOiccMy4e1lCjNIWlk%2BG8tjV1ooEWcPDJaFogq%2BvQTvyz%2FvuNIMJVgsw7qbDmP3dmeNoOe4AP2nJ4U2hn8%2Fi2214ya5%2FB8kf9rfKfjYG8d2PCZgZJSZNO6F5H40Y3WWDSesiyGYKcOdURW2YzYj11ACU4UdMS8%2FO0dyuKWtrUD79eXy7WQsRU2EE%2FGCoUaWICiqj2%2BiM%2FewQ9NUxlfZLMJSW%2BMkGOqUB2zOTCL95FhHlTS6hbeZIz8YLCJt1xraqwOB4HGrSWG%2BSe3vAeE6EV5lEzg6exzsc79lsH%2BmSSF91CO8JsIfJKTHlLWeahm3%2F3R7L7vrAbTupKjs%2F7xc%2BO9BKMjD8MnbUKWmWZIX7PPJmieK2r65wPZzqZWaCjP1Z01AWsalK5Ov0qftqIbBS%2B3rWEVb9b5wTYt2Cv6NDTvBqr3c12IEIyN8UDs7c&X-Amz-Signature=08bd13fe42f9be5f4984a54dac814a5c9c58cde4cc8ae5203a404dbc1838e1f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB4WGS3U%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCyX3zs8GTVzv8XT%2BJeorHObmU%2BMU870sMQCCRcwuwEywIgUQtrN6m0faYuIfLmRKrPetTHxJHg58wMuXEkR%2FC7SMcq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJE%2BPaE0I6cPvZQfTSrcA2YLYPm4EfXNZ0ZzboiHlrsywf33F0%2BGuInIuyZaq2AL25Qan%2F517GFAjLdA7NxSjtGU5sQeKL31NZcjTAwCClr47wfQkaSnO5SdTW3YIKS%2BE2z5N3Y6u2hTR6TgeCAAAITO%2FE%2F8rkI2%2Fbieraj2DFtgs8fBsVNJrbPfekOtmEY%2BhMSJrAEwVmLRVSYffST%2BbsJo3vepncSPNOOPdZn4V7CVrU2OrOf9V%2F%2Fy43XoyHBKgMgaU2WHVnrAV170L5LQdqPgW3kVGLm2EirOxaOfRicw5FbhqGrdbLG%2FmDkVMiA%2F45%2FiQbA%2BduFi4tX1Leyr3XsNKXurmqnBklqIP9KPHtOlA8ShGjlT47abxuDNjoDM5EyEzFjWfVn7DhjL%2BHmrDjw3LvNEZE44QBgb8i7UOIMGdq6ix2vTtxLfuYw6dOiccMy4e1lCjNIWlk%2BG8tjV1ooEWcPDJaFogq%2BvQTvyz%2FvuNIMJVgsw7qbDmP3dmeNoOe4AP2nJ4U2hn8%2Fi2214ya5%2FB8kf9rfKfjYG8d2PCZgZJSZNO6F5H40Y3WWDSesiyGYKcOdURW2YzYj11ACU4UdMS8%2FO0dyuKWtrUD79eXy7WQsRU2EE%2FGCoUaWICiqj2%2BiM%2FewQ9NUxlfZLMJSW%2BMkGOqUB2zOTCL95FhHlTS6hbeZIz8YLCJt1xraqwOB4HGrSWG%2BSe3vAeE6EV5lEzg6exzsc79lsH%2BmSSF91CO8JsIfJKTHlLWeahm3%2F3R7L7vrAbTupKjs%2F7xc%2BO9BKMjD8MnbUKWmWZIX7PPJmieK2r65wPZzqZWaCjP1Z01AWsalK5Ov0qftqIbBS%2B3rWEVb9b5wTYt2Cv6NDTvBqr3c12IEIyN8UDs7c&X-Amz-Signature=4d277af5d74ace67c071acfb28b9b7f4d4f0857ccc05cac71b436c693c198129&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
