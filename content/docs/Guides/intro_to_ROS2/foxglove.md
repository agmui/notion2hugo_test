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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OGKEBQY%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDcn2%2B5eOMC%2Fi3XStfX3JP2xTFh2PchEcYX0V%2F0daKF3QIgBmxt8Ml8m6Rga2aX%2FJlTisdOLc%2Fv7WKDViS%2Bxy3XqRcq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDI9gIxyFpACnG6eH6yrcAxQ9pCgbVWiPMvDWXxHwVWXVsQwLsst2yyOtDfxxsHcMrmfQ2dlUtyznukxhCW98XLYGi3uFYxJgzYFeWmYGvnnpTN%2BG3g3pptoap86X0GWpb4lnBCstOIKHJ395QOxqjerqI4hTqK3jYWf98tVvoA3CZKPbphsPKOr%2FddjSgA6ewma5jE3v6hKDJWhd8cPIVY3VYxjcU4CpNgBFBu6n6YXnG8d8lNyslU5zR5xYysiTMLjG8NMzP7xZRsAtX96a4Kjdia3pDFc5UR%2BAAYExccGUYtRaVP%2F%2F7Jmsk8SBOULvkOPd%2BKNV95hZU3PrnDJgeeHZO6vmRyV8%2BwL4gNPHh5uVFWW1OHWKuIuMTd9jpZAhCTcfsUKMVdLQ9XvQpUMTgyHKRY2J9%2Fd8ZtOxDAQGlKLi7sAdfG3QSx%2BeE%2BNHrtq5Ov4%2FqEEuRPXb2IwuvvAoLLslC039FNKSFbQdcwOWW5CRE2%2FRJ1Zg8cFsCc14chEhL602%2F5Iv96sIXqV4Z1KOdethWvzCesi1UfSWueFAfUukPyxdpjpqHDTuePKkdryaOHb%2FKhYOW9h0gPCDjBRZWShcBN4Uy0IBzUuVkYYBYYszbnRO5efNYk%2B77JnLgV5l8YOYJWWkbwmVKfoLMKrNm8sGOqUBl3K6N1wmrs%2FjmDtTBZAau8bLwGn7pJ74zHiuQvi1%2FY8D6P9S77y2Q6e5LLyjXGIatrq0vQ1Ee2XHkkn5ESOfVbzqsyNb82tVzmPbJ5CaD5j%2BB4yyjaEkCb2c0gf%2BVXEjznasYdPwQIJ70jxIsuPo4GJfdi4iXxjniBxnZUcCq%2BMub2BdsQTelnH4%2FmiGOPPTyXMSShkhqq6YsgZUJsqoB1SqTZwS&X-Amz-Signature=6ec2bb83317b25b83b228172c89997016e1aca0dcb55765a1f19caafbb5d34e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OGKEBQY%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDcn2%2B5eOMC%2Fi3XStfX3JP2xTFh2PchEcYX0V%2F0daKF3QIgBmxt8Ml8m6Rga2aX%2FJlTisdOLc%2Fv7WKDViS%2Bxy3XqRcq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDI9gIxyFpACnG6eH6yrcAxQ9pCgbVWiPMvDWXxHwVWXVsQwLsst2yyOtDfxxsHcMrmfQ2dlUtyznukxhCW98XLYGi3uFYxJgzYFeWmYGvnnpTN%2BG3g3pptoap86X0GWpb4lnBCstOIKHJ395QOxqjerqI4hTqK3jYWf98tVvoA3CZKPbphsPKOr%2FddjSgA6ewma5jE3v6hKDJWhd8cPIVY3VYxjcU4CpNgBFBu6n6YXnG8d8lNyslU5zR5xYysiTMLjG8NMzP7xZRsAtX96a4Kjdia3pDFc5UR%2BAAYExccGUYtRaVP%2F%2F7Jmsk8SBOULvkOPd%2BKNV95hZU3PrnDJgeeHZO6vmRyV8%2BwL4gNPHh5uVFWW1OHWKuIuMTd9jpZAhCTcfsUKMVdLQ9XvQpUMTgyHKRY2J9%2Fd8ZtOxDAQGlKLi7sAdfG3QSx%2BeE%2BNHrtq5Ov4%2FqEEuRPXb2IwuvvAoLLslC039FNKSFbQdcwOWW5CRE2%2FRJ1Zg8cFsCc14chEhL602%2F5Iv96sIXqV4Z1KOdethWvzCesi1UfSWueFAfUukPyxdpjpqHDTuePKkdryaOHb%2FKhYOW9h0gPCDjBRZWShcBN4Uy0IBzUuVkYYBYYszbnRO5efNYk%2B77JnLgV5l8YOYJWWkbwmVKfoLMKrNm8sGOqUBl3K6N1wmrs%2FjmDtTBZAau8bLwGn7pJ74zHiuQvi1%2FY8D6P9S77y2Q6e5LLyjXGIatrq0vQ1Ee2XHkkn5ESOfVbzqsyNb82tVzmPbJ5CaD5j%2BB4yyjaEkCb2c0gf%2BVXEjznasYdPwQIJ70jxIsuPo4GJfdi4iXxjniBxnZUcCq%2BMub2BdsQTelnH4%2FmiGOPPTyXMSShkhqq6YsgZUJsqoB1SqTZwS&X-Amz-Signature=bcb69e0d22ca2c295d20b57c073c0e00bf51bd55667d3cd4c3ac8d58bbd65696&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
