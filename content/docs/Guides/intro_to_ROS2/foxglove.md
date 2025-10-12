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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDUX6DC%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDLMKjVJEK%2BzUb9pCkXHitTJyqEirAiT%2BkoEi5%2BEGQt3QIhAM%2FGFq8SkSRLfroNqXKoUPBYrMAN6l43iKSX3AFWa1DNKv8DCCAQABoMNjM3NDIzMTgzODA1IgzXMeari2P1m4IC4Isq3AN%2B%2Fv3i0qhi3QIykUo0nO7xj0z%2B%2BTCwM%2Bv0XqVPO0cJweP0m8K0uAuxDuyP74ViXBzvSylvYbraY8%2FyySy2sYxNOn4t8kb6BltJo6H4J%2BGH4Pk1DmCwJC%2FiRJRQ8XWWC2WidQ8mjXB2LNCaEcbDcOdLnxsQXQOxBOJ5BBU2vsMnKUeArOwtU2qnhi37crh13XrDqdw%2BUGDX9mwk%2F9rORKXpmxOlQ84JxGN7ngIp8vLJL3toru%2FVrA%2FWQp4l%2B7T6NgIVPHbC5IFyBlbtNl7xDWH35ltm4ZNBdu5Za5u5xej0lofnW6rlhTei0oHd5mnllvCVQSG0drxSG3oug7sscYEHDdsovNPuKSWTik1nWUlNFXho9rsE0Tanyn9jIIvAXG%2FUh3M8cQsJwi%2BUd9STlf779C4FHrAOargBbE5Mn76QQ3pbxJPOSiQ9M4ESMK2tN2mibyLVK9hair9bOFbOG6uVHr%2BU3CQKpqey2QBRy51A5q3Hgx9dv6L3gNMo%2BBcBh2ZPd2dgOrvaTtbYHoTgr1wytM3wYSDTw4%2FE4nJ4e8QCmN%2BCgEZjKdgifozRnYL52p3TeNLkaPqpSJxpz1mruKhvWnkSujr4ueD292QNC7WHB7kNk%2FA1Xgja6JFF4TDTuavHBjqkAT%2Bnz5d7dEKFBIU1bsysjSO%2FeoXOMvp9QV5fDG90cTWPYc%2F1OrK2EzsEvkPlKP54UfErLK3uGteTE2f3kxKcGxX0bBNq1X5Ng8s4y9v7DnAGo7V%2BRVNDq8ypKgTYOCzO%2Bg0yy%2Bs9bJC8839poyKfCuUIFXvTe4agXU4Vp7C0LH3HDKjxx5bTrn28SuIiF5beDJUgBmJnE35TpSKGy%2BBj0hVqgcK5&X-Amz-Signature=e548ae7a4031fa0fccbf5258db71b923b40f0465cce330964d266ba1f0f26356&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDUX6DC%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDLMKjVJEK%2BzUb9pCkXHitTJyqEirAiT%2BkoEi5%2BEGQt3QIhAM%2FGFq8SkSRLfroNqXKoUPBYrMAN6l43iKSX3AFWa1DNKv8DCCAQABoMNjM3NDIzMTgzODA1IgzXMeari2P1m4IC4Isq3AN%2B%2Fv3i0qhi3QIykUo0nO7xj0z%2B%2BTCwM%2Bv0XqVPO0cJweP0m8K0uAuxDuyP74ViXBzvSylvYbraY8%2FyySy2sYxNOn4t8kb6BltJo6H4J%2BGH4Pk1DmCwJC%2FiRJRQ8XWWC2WidQ8mjXB2LNCaEcbDcOdLnxsQXQOxBOJ5BBU2vsMnKUeArOwtU2qnhi37crh13XrDqdw%2BUGDX9mwk%2F9rORKXpmxOlQ84JxGN7ngIp8vLJL3toru%2FVrA%2FWQp4l%2B7T6NgIVPHbC5IFyBlbtNl7xDWH35ltm4ZNBdu5Za5u5xej0lofnW6rlhTei0oHd5mnllvCVQSG0drxSG3oug7sscYEHDdsovNPuKSWTik1nWUlNFXho9rsE0Tanyn9jIIvAXG%2FUh3M8cQsJwi%2BUd9STlf779C4FHrAOargBbE5Mn76QQ3pbxJPOSiQ9M4ESMK2tN2mibyLVK9hair9bOFbOG6uVHr%2BU3CQKpqey2QBRy51A5q3Hgx9dv6L3gNMo%2BBcBh2ZPd2dgOrvaTtbYHoTgr1wytM3wYSDTw4%2FE4nJ4e8QCmN%2BCgEZjKdgifozRnYL52p3TeNLkaPqpSJxpz1mruKhvWnkSujr4ueD292QNC7WHB7kNk%2FA1Xgja6JFF4TDTuavHBjqkAT%2Bnz5d7dEKFBIU1bsysjSO%2FeoXOMvp9QV5fDG90cTWPYc%2F1OrK2EzsEvkPlKP54UfErLK3uGteTE2f3kxKcGxX0bBNq1X5Ng8s4y9v7DnAGo7V%2BRVNDq8ypKgTYOCzO%2Bg0yy%2Bs9bJC8839poyKfCuUIFXvTe4agXU4Vp7C0LH3HDKjxx5bTrn28SuIiF5beDJUgBmJnE35TpSKGy%2BBj0hVqgcK5&X-Amz-Signature=094cc22cd6acb732578bb80dceb7daea8910d6a21f6543a07fc84396cd36a2e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
