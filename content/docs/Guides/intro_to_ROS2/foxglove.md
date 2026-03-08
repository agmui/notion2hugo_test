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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3HZRLDR%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDCaA9%2F2EcNWxhzbJS4GiVZ0GKL%2Bkf6ytMJBnU%2FU1J69wIgO5PFpJPkIbiMzqpOzAlaGazkd%2FMA85X1hivASZm0VsEq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDGEqq%2FdT0gCEa5nsZCrcA%2FC8gvCToqw3t%2B3ibYBZV%2BwXEwKdLgwY8KAJMevjUriHBOhIF781cnsZWukVa44f29W8EQG0CiADbfh1RUFcQbuJkbJTkUsUAAMEAIg86B7Y0J0qWtcyTtVPtMCbxMzzYNDc%2BlI%2BTgob%2BR6PBy9elQCxGY%2Bex7ycPkQd44C3fllQdxeq5aZW6L%2FXwwK50eerkvSZgRQCfxG8xlWSka9r4LegGKcxfw2%2BUr3ZrCfuFe8Iy2wt0%2BK7KuYYAtA88Lo8bi5C6krIECMeEiPSJReH%2FaM2L7RNdZW4u7H88%2BbS5%2BrUlfDIIYMyNKl50Ojh98w%2FSSqWrq5Q0OGcm0iVEDzqzkJFpDnYSNQ%2Fs99LHioXKmurPJkN8hOsh80m7oBhOwL40uqOiTMoCsN%2Fo0F%2BDlwbAJmbe9Vd%2BI3y%2Fd9AiQJb9%2FrXXM4pWEku4BigBjU314L6fmVikTKFD3haMEaQxCOcKbSXpnY16u5nZc1iFGNHLrrW9ZYqyefZyoZZkXYNuCGyi5MiR3SOy0szlWyCwgBBja%2FsrB6NNcYCXqLOqfl%2BwMsxIQFsShN1HDFHXttLv%2BuvuRYq2QU4V14K09mWQyerYwfvBUsaXrTetXmbz539y1K%2BjZNa%2F7erJKSR45ULMNmds80GOqUBsVHpTCUGz8kisZ9AQ%2BVKWvxze44QaWgtufZVzdj00TVz9P2WylFk8FA2%2BPt2bfRQQNImGhP%2BZmIiIeTQJGgZyHSnv4nYkZzlgWzx%2Bf%2B4JTT2yrz7KhOIHtaxjnq4BK%2BqbCcxog1fQ7XxvBJV%2Fy9ffr%2BZsZjqviFq4N%2BcKMI2vFXDB7uxdJCpHor7S5qmecB2Ja5sYub34hl8vJmFAgcixftsKzTs&X-Amz-Signature=e24f47b49a7d0a177039c1667d66e2a7b7397c53f6223b91e0b1c7b6cda4358c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3HZRLDR%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDCaA9%2F2EcNWxhzbJS4GiVZ0GKL%2Bkf6ytMJBnU%2FU1J69wIgO5PFpJPkIbiMzqpOzAlaGazkd%2FMA85X1hivASZm0VsEq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDGEqq%2FdT0gCEa5nsZCrcA%2FC8gvCToqw3t%2B3ibYBZV%2BwXEwKdLgwY8KAJMevjUriHBOhIF781cnsZWukVa44f29W8EQG0CiADbfh1RUFcQbuJkbJTkUsUAAMEAIg86B7Y0J0qWtcyTtVPtMCbxMzzYNDc%2BlI%2BTgob%2BR6PBy9elQCxGY%2Bex7ycPkQd44C3fllQdxeq5aZW6L%2FXwwK50eerkvSZgRQCfxG8xlWSka9r4LegGKcxfw2%2BUr3ZrCfuFe8Iy2wt0%2BK7KuYYAtA88Lo8bi5C6krIECMeEiPSJReH%2FaM2L7RNdZW4u7H88%2BbS5%2BrUlfDIIYMyNKl50Ojh98w%2FSSqWrq5Q0OGcm0iVEDzqzkJFpDnYSNQ%2Fs99LHioXKmurPJkN8hOsh80m7oBhOwL40uqOiTMoCsN%2Fo0F%2BDlwbAJmbe9Vd%2BI3y%2Fd9AiQJb9%2FrXXM4pWEku4BigBjU314L6fmVikTKFD3haMEaQxCOcKbSXpnY16u5nZc1iFGNHLrrW9ZYqyefZyoZZkXYNuCGyi5MiR3SOy0szlWyCwgBBja%2FsrB6NNcYCXqLOqfl%2BwMsxIQFsShN1HDFHXttLv%2BuvuRYq2QU4V14K09mWQyerYwfvBUsaXrTetXmbz539y1K%2BjZNa%2F7erJKSR45ULMNmds80GOqUBsVHpTCUGz8kisZ9AQ%2BVKWvxze44QaWgtufZVzdj00TVz9P2WylFk8FA2%2BPt2bfRQQNImGhP%2BZmIiIeTQJGgZyHSnv4nYkZzlgWzx%2Bf%2B4JTT2yrz7KhOIHtaxjnq4BK%2BqbCcxog1fQ7XxvBJV%2Fy9ffr%2BZsZjqviFq4N%2BcKMI2vFXDB7uxdJCpHor7S5qmecB2Ja5sYub34hl8vJmFAgcixftsKzTs&X-Amz-Signature=6caff017338a55248e410c69b67b4207c5350093fb1a59c90ba13e7c610ef908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
