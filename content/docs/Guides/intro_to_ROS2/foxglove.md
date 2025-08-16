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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5cf04f4f-d88c-493a-9d2b-daf9d7097800/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S5XMVEQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICCXz5g1q0HN3Czmzt9BdJj1985gZ9FXVNvsivoa2TICAiBmzw8nH5lFqDThPixS60PpIGB4sWdKaZFgDf0MJ1SnZyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMc7ir1PtEp0uxgHTtKtwD1s6Vvq106obsw5lew6W8S2C%2Fgk6ZN%2BqWJrAXE0YCAA%2B0aANmVU13xuzc4lphTkPK8sZVrWKH14xAQZJA%2F%2FZYzK5pRpnW18NmczAAlXpbCunevzWszPzTgwvn0gUT227fBEPcPtdR1r3sUFBiYiyLBXeKO01LDeitU%2BRFgaNQAl6Igb2CLEuMK3OgPbw29y5aglH9lNcwulSi3ZwvLo7x30e7l0YhL1wGVy7jAM5bqwTsaidZ%2FxmdgJ2RKSrN18eYa%2F8MzftH0g0XBADTa3NTy9FuMVntwWG9FwiWBHeajb8tmFd2k1JL%2FFX7DkdxWfHSAMd%2FCeLXm4afgAOyRHBxVO297heryOmgwkEYb1wvvXTor09QbE%2B9QF7RRiBWXfjH8aiXEYGlsJleohMnHBEuwtJKly8xAIH2o%2FWpUkRRI7rYR81tExxqsPA1sNAWXVr56whqt9V7s2ci0QKQo%2FkhFIt%2FmM7rtTq5UdEEbky04YrKhyqrfHa3cSorx%2FZorVvNuaC%2B%2FCAuGiaOCUM6JXUX2mD%2Fc9PdFMDZ1q0BYPoi%2BmJcquXQaZMunXNwxCg4TTLaGDrs9XqVVow6u5cRVOHeiHi9hbiDWwjGSfLdxN8vTu7aF0P6G8mewOQ2l8AwifiAxQY6pgEP6mVsAuc8GiWFvX3esQsLE3ZRsO2rAhkQTcNeQ%2BoaKaYhtZGzTKxOVcxWJl5sH0XAp0HoWG%2BY41k5%2BygU7NmG2IL8qP3awhuPgPjBW6%2ByOJl4Kyc5%2FoFUJ%2BvvejK7Q8XgxmibuysCEhjhMhqQByYDkYgTTiSLGQ4CDGu%2BByGbB4U9A2pkEhHprTZaoq7MDrQOWl2Rv7zC2%2BLmXT6A4zrzRHnParCe&X-Amz-Signature=c6844652ce979579426937ea1a7543dd95c147c7ce37bd4609f1ddef7c87ca4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Foxglove is similar to rviz however one of its biggest feature is its ability to connect over the internet.

This is nice for wireless robotics setups but still need a rviz visualization.

You are also able to record and play back sensor data and visualize it in foxglove.

## Using foxglove

First make sure you know the ip of your robot.

<details>
      <summary>How to get robot ip:</summary>
      To find the robot’s ip run on the robot computer:
  </details>

For now I recommend using your phone’s hotspot to connect between the computer and robot.

<details>
      <summary>how to connect robot jetson/rasberry pi to hotspot</summary>
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/038d4769-0554-483f-9c8e-6b3ee837aeff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S5XMVEQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICCXz5g1q0HN3Czmzt9BdJj1985gZ9FXVNvsivoa2TICAiBmzw8nH5lFqDThPixS60PpIGB4sWdKaZFgDf0MJ1SnZyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMc7ir1PtEp0uxgHTtKtwD1s6Vvq106obsw5lew6W8S2C%2Fgk6ZN%2BqWJrAXE0YCAA%2B0aANmVU13xuzc4lphTkPK8sZVrWKH14xAQZJA%2F%2FZYzK5pRpnW18NmczAAlXpbCunevzWszPzTgwvn0gUT227fBEPcPtdR1r3sUFBiYiyLBXeKO01LDeitU%2BRFgaNQAl6Igb2CLEuMK3OgPbw29y5aglH9lNcwulSi3ZwvLo7x30e7l0YhL1wGVy7jAM5bqwTsaidZ%2FxmdgJ2RKSrN18eYa%2F8MzftH0g0XBADTa3NTy9FuMVntwWG9FwiWBHeajb8tmFd2k1JL%2FFX7DkdxWfHSAMd%2FCeLXm4afgAOyRHBxVO297heryOmgwkEYb1wvvXTor09QbE%2B9QF7RRiBWXfjH8aiXEYGlsJleohMnHBEuwtJKly8xAIH2o%2FWpUkRRI7rYR81tExxqsPA1sNAWXVr56whqt9V7s2ci0QKQo%2FkhFIt%2FmM7rtTq5UdEEbky04YrKhyqrfHa3cSorx%2FZorVvNuaC%2B%2FCAuGiaOCUM6JXUX2mD%2Fc9PdFMDZ1q0BYPoi%2BmJcquXQaZMunXNwxCg4TTLaGDrs9XqVVow6u5cRVOHeiHi9hbiDWwjGSfLdxN8vTu7aF0P6G8mewOQ2l8AwifiAxQY6pgEP6mVsAuc8GiWFvX3esQsLE3ZRsO2rAhkQTcNeQ%2BoaKaYhtZGzTKxOVcxWJl5sH0XAp0HoWG%2BY41k5%2BygU7NmG2IL8qP3awhuPgPjBW6%2ByOJl4Kyc5%2FoFUJ%2BvvejK7Q8XgxmibuysCEhjhMhqQByYDkYgTTiSLGQ4CDGu%2BByGbB4U9A2pkEhHprTZaoq7MDrQOWl2Rv7zC2%2BLmXT6A4zrzRHnParCe&X-Amz-Signature=2a3ab60ec494cad13b9694250bb16975823c239f1357707710929efd7e19d594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## saving map with foxglove

There is a [service call](https://docs.foxglove.dev/docs/visualization/panels/service-call) panel where you can easily make ros2 service calls. Using service calls you are able to save a scan of the map from SLAM.

To start first start the robot launch file with SLAM and foxglove nodes

> Note you don’t need to turn on nav2_bringup to scan the map

Then add a new service call panel in the service name box select `/slam_toolbox/serialize_map` 

Then in the request section input the place where you want to store your scanned map too in the “filename” field.

Do the same for the `/slam_toolbox/save_map` service.

It is also recommended to turn of editing mode.

Then drive around for a bit and look at the 3D panel to see if you have scanned enough of the map and hit the two service buttons you just made. This should save the map just like in the rviz plugin.
