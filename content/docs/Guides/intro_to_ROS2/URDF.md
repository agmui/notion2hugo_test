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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LWMOZAM%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDc5XDyZxfGE9%2B4dp1zSisUsMODCyEdZVf2PIUwbmMJRwIhAOtRuZky2W6Qld7bklce8WUvz2r6HjR%2FQ18PlzYanWbbKv8DCH0QABoMNjM3NDIzMTgzODA1Igw1SVe2lCNuZhf6txEq3APhTaOwqwNPYDZqkxZfQVRBz4ADHd%2BuNouyxGPi3CitX8%2Btvge4%2FyNJqx3Xusrf95KQV9eJFpuSo%2B0KjhiMkQSDhEawZQM5IK%2FrPlufAN9AlH6VuNDDzD1r0T5REScP0JLFhnrpdebx2tGtxx%2BmQqt4GZK4FnqAERhqio4LUaY%2Fndvwi6uk%2BDnTQwFwqAR1%2BHz8eRzZ3DY4tR4qw36g1ztbRMuRntdYp51oyJJ5mUayhKMfb34ePGAuTmvkJcicVn0dOPk0EaIwEmsB%2FRoTPw5aSppFAFM%2BBUBbzMUB03UHHWc2pPEFztYK%2FQXfmNr86%2Fz1QjhrZdIQpunVkXQnn7dlk%2BJsIgpEpGG2Piioka%2BIc2UYysK7XpTOID1Y7cWRMgyrXAT9m4%2B4evc%2BPlDYOopRctgJJVAU%2FWFZSiEsriOfjhLVyUUw8oFcvBsLUbQwF4ssHb1AABeQ1abXOhtrcrDusjJQxoModl2obViUwRRqIDrCuFCuYZVOtyCep%2F3%2FGPUskA5GGoqakSlp3xoL9xg6%2FtmGL3uhh6zBIfcKYttstl%2FDr9dg7GBSmE3LW5CAUh6cz6NTdwzyLAvnL5MgcWuytR6E4weGts71ysXK8TiCFA7BiesK2VOu7lWxkTC24Le%2BBjqkAcN9Z2imHy%2FMuipJGqa8l723pd7lMrkcYZNJZj69Pm6CJ4vJLPgw3ZQJkCvtC6pSWeQV9ngAs87wLd6Wovd37BIv048LQDN%2BN2joue26FnJFQF7B%2BKIvkOB6ovnhwYibAQ6TDDJ1VVGtEMWkN2s%2B0CZ1hgK9Kgp3j%2BbTJ1%2BCXEIgYnL95JS11CwmizrdmCKTZQF4Xj956gSWyCUp2L0H63%2FbdDY%2F&X-Amz-Signature=bf5595c861d28cbb1fc9281fb709b549d1e39a1e669db800425a7da803ed932f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LWMOZAM%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDc5XDyZxfGE9%2B4dp1zSisUsMODCyEdZVf2PIUwbmMJRwIhAOtRuZky2W6Qld7bklce8WUvz2r6HjR%2FQ18PlzYanWbbKv8DCH0QABoMNjM3NDIzMTgzODA1Igw1SVe2lCNuZhf6txEq3APhTaOwqwNPYDZqkxZfQVRBz4ADHd%2BuNouyxGPi3CitX8%2Btvge4%2FyNJqx3Xusrf95KQV9eJFpuSo%2B0KjhiMkQSDhEawZQM5IK%2FrPlufAN9AlH6VuNDDzD1r0T5REScP0JLFhnrpdebx2tGtxx%2BmQqt4GZK4FnqAERhqio4LUaY%2Fndvwi6uk%2BDnTQwFwqAR1%2BHz8eRzZ3DY4tR4qw36g1ztbRMuRntdYp51oyJJ5mUayhKMfb34ePGAuTmvkJcicVn0dOPk0EaIwEmsB%2FRoTPw5aSppFAFM%2BBUBbzMUB03UHHWc2pPEFztYK%2FQXfmNr86%2Fz1QjhrZdIQpunVkXQnn7dlk%2BJsIgpEpGG2Piioka%2BIc2UYysK7XpTOID1Y7cWRMgyrXAT9m4%2B4evc%2BPlDYOopRctgJJVAU%2FWFZSiEsriOfjhLVyUUw8oFcvBsLUbQwF4ssHb1AABeQ1abXOhtrcrDusjJQxoModl2obViUwRRqIDrCuFCuYZVOtyCep%2F3%2FGPUskA5GGoqakSlp3xoL9xg6%2FtmGL3uhh6zBIfcKYttstl%2FDr9dg7GBSmE3LW5CAUh6cz6NTdwzyLAvnL5MgcWuytR6E4weGts71ysXK8TiCFA7BiesK2VOu7lWxkTC24Le%2BBjqkAcN9Z2imHy%2FMuipJGqa8l723pd7lMrkcYZNJZj69Pm6CJ4vJLPgw3ZQJkCvtC6pSWeQV9ngAs87wLd6Wovd37BIv048LQDN%2BN2joue26FnJFQF7B%2BKIvkOB6ovnhwYibAQ6TDDJ1VVGtEMWkN2s%2B0CZ1hgK9Kgp3j%2BbTJ1%2BCXEIgYnL95JS11CwmizrdmCKTZQF4Xj956gSWyCUp2L0H63%2FbdDY%2F&X-Amz-Signature=2476d2024f6cd8b819e1e1f3eedc9f473f884390959b18cc702181504c75b902&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
