---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 148
toc: false
icon: ""
---

## Setup

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TLQIKPV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJW%2Fr2n30H%2Fr7fKJu7CAjoJbXE91pKR2OqqNAAJlEk7AiEAp%2BHTfoeT4OnsE2QW6YHCo6WZtd0pQlCpnU5XT2TIdx4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIrmjuDiX5GgmkaI4ircA7zrph0FKmgKX5b9rZOBAIAeVKdofQDDxFmaEBq0OiixZdGtee%2Ffx%2FMEB9HV6weO6iws3N3u6uaWDcH3xPI0k2cga5fHvbMuHt9tDugkWVCTplgAS36%2Bxjrei9YBcSC4cUkIewTjrQPBLxN7k7hFPXf04863x9rp2JaGUZIVrg4vXMpqGVIxVhqRzNokW8AWsmaNI5TCBIsx3OYTfnJsBMtIMxw%2B2s8ZHuBXXs7soxEn2v9myJ444904MWOqp%2BIjPc%2F2YFVzPclqFvl2ntfKpKqBRSvG17tqxcBMM7WQZ0dGMVwPQd%2B2TomWm%2FEdSrZT8UDhdKMCECvHIU8rEn%2F0X9YXpmURs1Jq%2BhagVXJANcVZCJtejdijFYSR%2FP%2BRQ%2BiWxZG76H1urrYWZRNdZjK0o8c79CulFkBhQ%2BD%2Fa%2BoZ%2B2coxyqCPPt7IOTS5Wg%2FAurx7fTOck2X79l9esA9IK4URKdEm3fOqO15PsyYp2Y1F7LXU%2BYIpH5FgYX1n%2BTxCJuW1N9zeaGyRH4Kda9eT701yuFBnwIVEfH0yagAy88uBgV5BA1b8VdsjfjHeQRb%2BVp45PmtJCSaK4jS2rIaChqvvfH7ZFIK9%2F9ldjxZEoFr7pNOJizpEgrVGyvpH0%2FRMPGqvsQGOqUBbTndwpNxr1arTpzV1VTPbmPmN3d9u%2FvevyBdMKr8kiJGhqZTRvoJfKQ5fcbjMPO0sawUWRTDMXr69B5DsTzj6PNKG7YUEealCPeZ%2FUGTZa2YZT%2FX23qIbWlvp6u1rv5TjD5bWdfab9QtaynAcy834Ke6GamFObNrPGfB%2FF4cXpex6t11K3GF2xiqKDrsqJ96s3RT5jZomNjCHWu6vuebxCXfm7q2&X-Amz-Signature=3de2854e72d3306aba83625e6a7ce7436c688ec6ec559ee38c7e870073852f98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TLQIKPV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJW%2Fr2n30H%2Fr7fKJu7CAjoJbXE91pKR2OqqNAAJlEk7AiEAp%2BHTfoeT4OnsE2QW6YHCo6WZtd0pQlCpnU5XT2TIdx4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIrmjuDiX5GgmkaI4ircA7zrph0FKmgKX5b9rZOBAIAeVKdofQDDxFmaEBq0OiixZdGtee%2Ffx%2FMEB9HV6weO6iws3N3u6uaWDcH3xPI0k2cga5fHvbMuHt9tDugkWVCTplgAS36%2Bxjrei9YBcSC4cUkIewTjrQPBLxN7k7hFPXf04863x9rp2JaGUZIVrg4vXMpqGVIxVhqRzNokW8AWsmaNI5TCBIsx3OYTfnJsBMtIMxw%2B2s8ZHuBXXs7soxEn2v9myJ444904MWOqp%2BIjPc%2F2YFVzPclqFvl2ntfKpKqBRSvG17tqxcBMM7WQZ0dGMVwPQd%2B2TomWm%2FEdSrZT8UDhdKMCECvHIU8rEn%2F0X9YXpmURs1Jq%2BhagVXJANcVZCJtejdijFYSR%2FP%2BRQ%2BiWxZG76H1urrYWZRNdZjK0o8c79CulFkBhQ%2BD%2Fa%2BoZ%2B2coxyqCPPt7IOTS5Wg%2FAurx7fTOck2X79l9esA9IK4URKdEm3fOqO15PsyYp2Y1F7LXU%2BYIpH5FgYX1n%2BTxCJuW1N9zeaGyRH4Kda9eT701yuFBnwIVEfH0yagAy88uBgV5BA1b8VdsjfjHeQRb%2BVp45PmtJCSaK4jS2rIaChqvvfH7ZFIK9%2F9ldjxZEoFr7pNOJizpEgrVGyvpH0%2FRMPGqvsQGOqUBbTndwpNxr1arTpzV1VTPbmPmN3d9u%2FvevyBdMKr8kiJGhqZTRvoJfKQ5fcbjMPO0sawUWRTDMXr69B5DsTzj6PNKG7YUEealCPeZ%2FUGTZa2YZT%2FX23qIbWlvp6u1rv5TjD5bWdfab9QtaynAcy834Ke6GamFObNrPGfB%2FF4cXpex6t11K3GF2xiqKDrsqJ96s3RT5jZomNjCHWu6vuebxCXfm7q2&X-Amz-Signature=546f53f9e67719710b4541485fbc9e3c1726e0903db4b31a256a9a35239b14b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
