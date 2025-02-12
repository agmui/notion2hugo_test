---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2024-12-03T18:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2024-12-03T18:43:00.000Z"
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

clone this repo into an existing workspace:
`git clone https://github.com/joshnewans/my_bot.git`

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf](https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O2B3AWX%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq6uyy1USAVAosMSiaqh3p6RmdYMGX3dFnSMmDPOYzUAiBfFg2MY0e9%2BiZOe%2BZpzvrSEOwYemYnCac3VuwLknJ9pSqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaZ%2B0VsE%2BhrbY%2FCDmKtwDWFT9shwuDhh0CrJDW8TJEUZr9RP18hHPFtW6SnF9vOU3Qi9UnGEonWlytdn6Jt8OVssGLk%2BrTMdTADmNciAB%2BncI99JY2KagMS43kW1A5G49KfZZWaWkVHOcqdj2skqml3hw1rnSznYMSkLAybc8uvIl0BoI4ReWGJPhcFhRnEMMgPaNow4ImS3Fu1b3GF7Dar%2Fv3M%2Fz7A0osg%2BZHi1%2BTp%2FCIKKAP7X%2BqGVigV%2BkEjBqxWOhcAfqIw67U9A6QUV%2FmmSOTExJ5Db4NBFKd%2BVqAMaxcn7ekyeqFfB4KpwSfFBHg%2Bw%2FFmh%2Fg6811jJxnEugxTw5p597EOcyMwbjj3J4KyZ4JLzggHyThfBAPwcnpHfjLbJHlSwED2y9tj66GFFqBfTZQFmZ66zzcXl840Nt9rUs8rACeKKv2uylafjpdoxPiVHll0dvLq8RuyjVkKAPd6yhwtYot2r8fSLO02efxlZdNvaUrA1MFh6OJh0Ja6%2FEglW%2BpPymfWJTtStH1KRMQ%2BEFlI39iVVbQ6TM%2FW7WMXIuRFkkW5o4KQ7%2BC5vcScJEsV2ri4GtJkraIM1m36I5ub4jCT9DRxOFwyc8ZjW%2FUkTSEYMcfCGUamolo2N%2FGJA6Dp9wpycN%2F4DaP24w07OyvQY6pgGnGKMtzDgtj03JRpArvSt9D7%2B8Nd0KeccfyH5Qv4fGN8mib8unLc1KDPVq92vGIwFG%2FF%2FNCke%2Fki5QZYXYGqXnFkumi2oCc%2FC5xbpMNf0gmuNvDEdS8kaLC67KgkIZZWPOj1746ZzJje7iWd%2Fs%2BlkNE2yZafx5IDw3ahOFCUiKFkvIQUST6gBZVUMMSKpzqnKNh7RmlTW8rmVUUdrRTd4HqFHobiUr&X-Amz-Signature=5ff9d5aa217724717abe1336be8f20e4e11e5755d534f50ad723cabec5adf52f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O2B3AWX%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq6uyy1USAVAosMSiaqh3p6RmdYMGX3dFnSMmDPOYzUAiBfFg2MY0e9%2BiZOe%2BZpzvrSEOwYemYnCac3VuwLknJ9pSqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaZ%2B0VsE%2BhrbY%2FCDmKtwDWFT9shwuDhh0CrJDW8TJEUZr9RP18hHPFtW6SnF9vOU3Qi9UnGEonWlytdn6Jt8OVssGLk%2BrTMdTADmNciAB%2BncI99JY2KagMS43kW1A5G49KfZZWaWkVHOcqdj2skqml3hw1rnSznYMSkLAybc8uvIl0BoI4ReWGJPhcFhRnEMMgPaNow4ImS3Fu1b3GF7Dar%2Fv3M%2Fz7A0osg%2BZHi1%2BTp%2FCIKKAP7X%2BqGVigV%2BkEjBqxWOhcAfqIw67U9A6QUV%2FmmSOTExJ5Db4NBFKd%2BVqAMaxcn7ekyeqFfB4KpwSfFBHg%2Bw%2FFmh%2Fg6811jJxnEugxTw5p597EOcyMwbjj3J4KyZ4JLzggHyThfBAPwcnpHfjLbJHlSwED2y9tj66GFFqBfTZQFmZ66zzcXl840Nt9rUs8rACeKKv2uylafjpdoxPiVHll0dvLq8RuyjVkKAPd6yhwtYot2r8fSLO02efxlZdNvaUrA1MFh6OJh0Ja6%2FEglW%2BpPymfWJTtStH1KRMQ%2BEFlI39iVVbQ6TM%2FW7WMXIuRFkkW5o4KQ7%2BC5vcScJEsV2ri4GtJkraIM1m36I5ub4jCT9DRxOFwyc8ZjW%2FUkTSEYMcfCGUamolo2N%2FGJA6Dp9wpycN%2F4DaP24w07OyvQY6pgGnGKMtzDgtj03JRpArvSt9D7%2B8Nd0KeccfyH5Qv4fGN8mib8unLc1KDPVq92vGIwFG%2FF%2FNCke%2Fki5QZYXYGqXnFkumi2oCc%2FC5xbpMNf0gmuNvDEdS8kaLC67KgkIZZWPOj1746ZzJje7iWd%2Fs%2BlkNE2yZafx5IDw3ahOFCUiKFkvIQUST6gBZVUMMSKpzqnKNh7RmlTW8rmVUUdrRTd4HqFHobiUr&X-Amz-Signature=e3334b7b61d08888e4abc676a1407cdfed908bcae202fc4f7b9c8424e273aa58&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
