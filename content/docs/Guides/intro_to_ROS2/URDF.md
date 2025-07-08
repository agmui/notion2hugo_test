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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB733GZJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T181249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHf2mGlnj5WQQXGpt2gDgBb%2F0nCZ7HqXyebsubLNX3ZCAiEAzpojyhXT6%2BK%2Fzf%2BPGMqlr0t0ZrUPhbYjXbb4S76sfYcqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI35iN%2F89mCmbT2nmSrcAyPnnjx9vsAc4kBMfFmnDtmFTHrynVdqNHM%2F%2BS0xEuK6LhfDgZlhtLsyFzpUxsWuYcpu1xQymLOw4XHtKRG27JwPwSlcBaA1%2F88DGVX4099%2F43gVS%2Ft3QstzZEmZKc5gml0ojw2kte1mRnYP5c9P4sSLCUGtpVDoygPvk3yMqjm172pHWLz6qkgQ7WnzO3KYYD3rNzCkXsoY1dMPVlzQLif2zRGX7pmZ4YQLUndhF%2FdUXd0194PYDzMRDy2sLvMX8kTxzbQQZmjW3BIczWUMyrT5qm1vrX5pfQmelKZFx5mR6sOei3S3q%2FsrIlqCIV3sJcak4PL1GI8JBZXcEPouHRm5jYEeSzlnUvENyV2S8LGmqEKNelFZpn%2FcZoLKdtkd0HNJHHnow4rrOk6PCd9mlZDJoK8W7i3b40GXxaI4a0EpzqcVaE%2F4lwlZqrs4Ko2zVia4s9vDEN0p5fxI2duACvG4VsMSzay7dGOFtea4Cb6pGRS5FDiyk4YikozdrTLI21eLMkoh7V1ZVSv4HXpBFV3Mo1u8RIqyi0%2FIcz1OTv1cYUPf7oO%2BNw4H3dedpampuQNM3oTHqrlh%2B42BHeOlYkRIY%2F63NKrYfA0pvEjBYTm%2BH2Jckw%2FYLN4lj%2BdbMNqttcMGOqUBuWTXKXiXlMasqYjm35kvfYvzWDTcgPl%2Bz8Och9d%2FeaWeQhSxUknXg%2BVPzDuH720rFhfpFmhMRJpqnhqqRWThWDMvw4AYi8ufKel5qbLFYParkO8vXSDh6GROri%2BghQ1VJ7zkyXM17bNmE0%2BNS1YqgTEDPOmnThyyyWzLx7yIV0m7xZDlBtuV6SBUCBJNIIGQpgv7gGi5f06Bey36fCu19sRCzWNF&X-Amz-Signature=3afb97284088d2133fad035415e3077cc61c89c074e19d61aa062b81985df3d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB733GZJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T181249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHf2mGlnj5WQQXGpt2gDgBb%2F0nCZ7HqXyebsubLNX3ZCAiEAzpojyhXT6%2BK%2Fzf%2BPGMqlr0t0ZrUPhbYjXbb4S76sfYcqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI35iN%2F89mCmbT2nmSrcAyPnnjx9vsAc4kBMfFmnDtmFTHrynVdqNHM%2F%2BS0xEuK6LhfDgZlhtLsyFzpUxsWuYcpu1xQymLOw4XHtKRG27JwPwSlcBaA1%2F88DGVX4099%2F43gVS%2Ft3QstzZEmZKc5gml0ojw2kte1mRnYP5c9P4sSLCUGtpVDoygPvk3yMqjm172pHWLz6qkgQ7WnzO3KYYD3rNzCkXsoY1dMPVlzQLif2zRGX7pmZ4YQLUndhF%2FdUXd0194PYDzMRDy2sLvMX8kTxzbQQZmjW3BIczWUMyrT5qm1vrX5pfQmelKZFx5mR6sOei3S3q%2FsrIlqCIV3sJcak4PL1GI8JBZXcEPouHRm5jYEeSzlnUvENyV2S8LGmqEKNelFZpn%2FcZoLKdtkd0HNJHHnow4rrOk6PCd9mlZDJoK8W7i3b40GXxaI4a0EpzqcVaE%2F4lwlZqrs4Ko2zVia4s9vDEN0p5fxI2duACvG4VsMSzay7dGOFtea4Cb6pGRS5FDiyk4YikozdrTLI21eLMkoh7V1ZVSv4HXpBFV3Mo1u8RIqyi0%2FIcz1OTv1cYUPf7oO%2BNw4H3dedpampuQNM3oTHqrlh%2B42BHeOlYkRIY%2F63NKrYfA0pvEjBYTm%2BH2Jckw%2FYLN4lj%2BdbMNqttcMGOqUBuWTXKXiXlMasqYjm35kvfYvzWDTcgPl%2Bz8Och9d%2FeaWeQhSxUknXg%2BVPzDuH720rFhfpFmhMRJpqnhqqRWThWDMvw4AYi8ufKel5qbLFYParkO8vXSDh6GROri%2BghQ1VJ7zkyXM17bNmE0%2BNS1YqgTEDPOmnThyyyWzLx7yIV0m7xZDlBtuV6SBUCBJNIIGQpgv7gGi5f06Bey36fCu19sRCzWNF&X-Amz-Signature=cd2d2ffd4bcc0ab7b86932db16de3a9292e37d925c53fb01f1a141c9973e2dc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
