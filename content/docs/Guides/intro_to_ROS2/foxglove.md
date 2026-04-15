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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXTAB22F%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEo0OfpMwjgsfIXX7UiRx5Xg2%2B%2B2uxZlRXlLeepYWqBvAiEAnhiXXU3Fge7Jxk5URONJowx6IVlCQwVMx9dgNRuSw3oqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMPaAD8164CfHZ0zyrcA1iXvrtI5e2nKGaC93v90HjSHs1Z59sfyc%2BqUZE6dPR5U7F505Ifw5XWqAU966f9U9gv%2FbKvZnzRJQO1bvb70Gf7Yo54Xh5%2Bisg2DQYxhB7iKdRYWIlNmE7l3tNuUjUj0SPyU1ymGuq%2BzUntEVc%2Fw%2FY2bfTrqFS9jkqTC5ZbgQtRu0Ts21F9TKh6tkue6nJwLHP0Di5qc2erm941RAOt2aFCSa5%2FgLjOhp7WTHZk9vvtS9xEbiEfPEpA853C2gKdMeWIjiFa0slh1rc1viicy26gTLazt6oZGQRRME9zXQMWLPf1cVPfD%2FcY97bCsHYxx%2Fj3GGbkpOMg6zp%2BAxL57fnuiOPC4BluvxBa32hE4Aea7acEO8Zf%2F9DVpP1UPpPol7jqIQK%2BGGXUL%2FRrtcFkJNQ94WscL5ZPUMx4XcSWaoqAOwpYQ5EwRwdAFep6SoLQ63mAb65HL%2FnrSeg2pSx0GVthYhIoOjeBLmIvyhAViqbukHQpuMMsz6PrJDTDijjmRFw1wBkXogeZBCLy7NVkgI80EOYFTWel2%2FFGHxuLAXsZJ0yzo%2Fignz8%2FzpjdNc%2BrOoWEAdLW21bxeNaQy1GSImsEOWR0FNAleOQVnA92Y5lRfqOIze%2BsUoC4vj8yMObh%2B84GOqUB4ZNwBrgV5noz2U6jydLTbZEJV83IS0N%2FURVr9MObMcbRj8sLiVNARx4fL6O%2F1pOOc9B2Uvvy%2B08azMnduStGuiEqshM0sRVJ0rP6jj8uHTagpxn69I0txWJI0m%2FBI0WpxpVLTyyILIoaMYVQ4x3bTqP3ZluYBK3EUaQ4qahSJSUZfsRnZC8y%2FYMjppLHz5qA67XUceNMLwqbjafJuRLBoEO64o%2FA&X-Amz-Signature=46b28abcea9beb8f3b11f4af1165a10c0ee5746790c574111d2d5213910f9dd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXTAB22F%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEo0OfpMwjgsfIXX7UiRx5Xg2%2B%2B2uxZlRXlLeepYWqBvAiEAnhiXXU3Fge7Jxk5URONJowx6IVlCQwVMx9dgNRuSw3oqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMPaAD8164CfHZ0zyrcA1iXvrtI5e2nKGaC93v90HjSHs1Z59sfyc%2BqUZE6dPR5U7F505Ifw5XWqAU966f9U9gv%2FbKvZnzRJQO1bvb70Gf7Yo54Xh5%2Bisg2DQYxhB7iKdRYWIlNmE7l3tNuUjUj0SPyU1ymGuq%2BzUntEVc%2Fw%2FY2bfTrqFS9jkqTC5ZbgQtRu0Ts21F9TKh6tkue6nJwLHP0Di5qc2erm941RAOt2aFCSa5%2FgLjOhp7WTHZk9vvtS9xEbiEfPEpA853C2gKdMeWIjiFa0slh1rc1viicy26gTLazt6oZGQRRME9zXQMWLPf1cVPfD%2FcY97bCsHYxx%2Fj3GGbkpOMg6zp%2BAxL57fnuiOPC4BluvxBa32hE4Aea7acEO8Zf%2F9DVpP1UPpPol7jqIQK%2BGGXUL%2FRrtcFkJNQ94WscL5ZPUMx4XcSWaoqAOwpYQ5EwRwdAFep6SoLQ63mAb65HL%2FnrSeg2pSx0GVthYhIoOjeBLmIvyhAViqbukHQpuMMsz6PrJDTDijjmRFw1wBkXogeZBCLy7NVkgI80EOYFTWel2%2FFGHxuLAXsZJ0yzo%2Fignz8%2FzpjdNc%2BrOoWEAdLW21bxeNaQy1GSImsEOWR0FNAleOQVnA92Y5lRfqOIze%2BsUoC4vj8yMObh%2B84GOqUB4ZNwBrgV5noz2U6jydLTbZEJV83IS0N%2FURVr9MObMcbRj8sLiVNARx4fL6O%2F1pOOc9B2Uvvy%2B08azMnduStGuiEqshM0sRVJ0rP6jj8uHTagpxn69I0txWJI0m%2FBI0WpxpVLTyyILIoaMYVQ4x3bTqP3ZluYBK3EUaQ4qahSJSUZfsRnZC8y%2FYMjppLHz5qA67XUceNMLwqbjafJuRLBoEO64o%2FA&X-Amz-Signature=7ca5dd194dd6e13a2e7673b94a753d894bfac82f2e95d6d1360eba132658a285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
