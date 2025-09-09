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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2WZHMIS%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDcxYIHiPehlqadIzOIwg4N2Sr%2BuTonrAAT5AYzhsI0ZAIhAJWchApChOAKQDNNdVZ1wAixUxei49M%2FOEciKD%2BgPv4kKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwNXjOL2tbIKh8gI8q3ANCCmFtKTKWgPKojO0RulGuE0F9IXFBLr2ayLADOhmpEJShX9ApmzC2FPdxC7SoHs1iKhZJQzkenNnP5I0BMLXpr6MUdMuA1l8UWD2ee7zmnMlIM18S%2Bt%2BU%2FjGlI3hCmei1P62PIqcY5XQwgTCPQWZILlDIcGyPu4suUNv1AiOIsVl6AI0JoHpyL8uz7WlRbhynQQbJelOkNsrrkDKP0nuddqj182Woj77WWzxk7a5EyDu59eTpJP%2FeEq2s0dqPOa5fV7CNMFd%2FwTpeyVR6R%2FSvwNE%2F8d%2BBcU55Irv%2FAMsfqEXufpS%2Fyv4PDrG48MZo7fcYyskFB%2Bn%2Bhfa1heU55y4n6Ta%2FNQWTy83Dch07qbVNal%2BrlSRDNdidp8ac9Fc28yG7KqNmsdGQozwGrgVjgEFWPfQfVK8YObbG%2Bb0gLnM9FceW%2BotIgau1ge29fqnj1HLThYlp611vADf%2Bsr%2Fm44CJcdOtGmnImIDr9H1vq2d%2BrSbf4NqBs39iJfVKwl%2FI8dIH9koGQ3t%2BLCvF9SQ8smYENNGf7ccCEZ9H01RAl4HBoBE4IjTIUczgvVOMsql5M6jFKhI8LBhkGpgimfXvUr9NF2AQP6J8LWJgw7UoZjLVMoZO7umhVO9hSAxO4zD28v3FBjqkAVjTvhTEsgr4a83uKyzeHigqaWY6CH%2FP9fsJiK6tp1T%2BpwRtSv6PQ6jbQXAQ9lvgO5PoKojk6SJWNj4hv8lZUPik6wvY%2BXHPA6aU4ECoXqbO%2FJTg3QINVgfXnO1q00QMHfnMcG0dkWHzpBBQzwfnM3DM3MRS2vPSM6DtpSAYaLsWW0C52JVpbTWZBF%2F2nxaSwC300ULw00QIhvc17HeMDtcglqpN&X-Amz-Signature=447c733341d236ffa76f541d479cf8d8d62551ae4792c346b83c56bd5d2957d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2WZHMIS%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDcxYIHiPehlqadIzOIwg4N2Sr%2BuTonrAAT5AYzhsI0ZAIhAJWchApChOAKQDNNdVZ1wAixUxei49M%2FOEciKD%2BgPv4kKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwNXjOL2tbIKh8gI8q3ANCCmFtKTKWgPKojO0RulGuE0F9IXFBLr2ayLADOhmpEJShX9ApmzC2FPdxC7SoHs1iKhZJQzkenNnP5I0BMLXpr6MUdMuA1l8UWD2ee7zmnMlIM18S%2Bt%2BU%2FjGlI3hCmei1P62PIqcY5XQwgTCPQWZILlDIcGyPu4suUNv1AiOIsVl6AI0JoHpyL8uz7WlRbhynQQbJelOkNsrrkDKP0nuddqj182Woj77WWzxk7a5EyDu59eTpJP%2FeEq2s0dqPOa5fV7CNMFd%2FwTpeyVR6R%2FSvwNE%2F8d%2BBcU55Irv%2FAMsfqEXufpS%2Fyv4PDrG48MZo7fcYyskFB%2Bn%2Bhfa1heU55y4n6Ta%2FNQWTy83Dch07qbVNal%2BrlSRDNdidp8ac9Fc28yG7KqNmsdGQozwGrgVjgEFWPfQfVK8YObbG%2Bb0gLnM9FceW%2BotIgau1ge29fqnj1HLThYlp611vADf%2Bsr%2Fm44CJcdOtGmnImIDr9H1vq2d%2BrSbf4NqBs39iJfVKwl%2FI8dIH9koGQ3t%2BLCvF9SQ8smYENNGf7ccCEZ9H01RAl4HBoBE4IjTIUczgvVOMsql5M6jFKhI8LBhkGpgimfXvUr9NF2AQP6J8LWJgw7UoZjLVMoZO7umhVO9hSAxO4zD28v3FBjqkAVjTvhTEsgr4a83uKyzeHigqaWY6CH%2FP9fsJiK6tp1T%2BpwRtSv6PQ6jbQXAQ9lvgO5PoKojk6SJWNj4hv8lZUPik6wvY%2BXHPA6aU4ECoXqbO%2FJTg3QINVgfXnO1q00QMHfnMcG0dkWHzpBBQzwfnM3DM3MRS2vPSM6DtpSAYaLsWW0C52JVpbTWZBF%2F2nxaSwC300ULw00QIhvc17HeMDtcglqpN&X-Amz-Signature=2699f54a9fafb2ba8524ced3cb439098ec20b226ed9bc51eafd9f3743fdac40f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
