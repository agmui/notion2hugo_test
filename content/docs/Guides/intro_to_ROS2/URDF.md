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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UKFWBHX%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwfgZhRDoVfTylmtfsLlcNJxSpOD1OzHC%2Bg7xbIrLYhQIhAOdjUQOHnGMCjsGPq5pEYar2taN2ZcU0zRz3P0ryZhgfKv8DCHoQABoMNjM3NDIzMTgzODA1Igxxji4Dah5TGpUSOzIq3AP60Hzk19UPovc0YxYrVTkaDTcHUvIiuIfb1nxYcPZPGuFBzAh56FTqAWBsSs1MSt3tKugnw9V0RxXNdiwoQ%2ByxMPSeOBz8FW7P%2FGZxesTsts1pbjD4maGrTj56RoTMEfLjj87X5%2FssZ1BB7O84ZIWQ7Uffe7oVQyrMFzEbkbzNFmPfYR7J9ghXCoKp6joPf4kVpV1%2FAM8Ia7ttA2PMqN4Tr2o2Ia%2FCfIGJvDvxhSxbM5ix1DOjpRkoFOfdXcAMsV5x332HqD5XXroiako9Fg43BcHdPZLSNMgzBaS%2FWuTzFFFU8NZ1MMNc4jVq8H%2BD4yw4YkswwvJcaYRVE4eKZmYkxMgJbLMZ8gJXPpkgB%2BquSU70BOgLJqkQSEfjZUcTpefFvqMIxh0MwXDGqleCQHdoYIp%2FhCMUVuznSe%2F2I%2Bi4%2F%2BlEWJgZ1s5szxmdiQhaRoPSXWp41zPTZHCwjXIHSGC6hVgyOeBz%2FNLpL4E%2Fth4XkHfNJ0PA6zt5nw%2F5iXSEamjTg6WuajG6q3SD34kxLSOr581L3ibuIniPk7R%2BSWGpZ7vK1ugc5G%2FZVmGSkn%2FHJ5btoNgwhZnALW6iCmZuLROmX5J86JFlRIK43tPrSIN%2B0cdykPFXxKxfdrMuTzDL%2BNzBBjqkAWocOpai6A%2BP4zTJX6PRlYg2PK8PP0qmBhNjcgl%2FXfjYd5%2FG%2FNlCmMfx1dBRpSOJF4H0FcvsyxDIw0sCpIkqi%2Be151RkAxeIMUGVVPxh6V6tZQZjvlafcPuQ7a8r1jm8Qhbj6jUKe%2FBaM6rNwsScxlDpSfOKtUACYota8lMul4c2zPtjnon5wMY3z0WX4VKkdE2TbVUqEA0du6TxnlXA6%2FuJFeAz&X-Amz-Signature=220ee2ac9e28fe899c4555d5b367dcb06440002dd6fbc7471499a819c08a8426&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UKFWBHX%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwfgZhRDoVfTylmtfsLlcNJxSpOD1OzHC%2Bg7xbIrLYhQIhAOdjUQOHnGMCjsGPq5pEYar2taN2ZcU0zRz3P0ryZhgfKv8DCHoQABoMNjM3NDIzMTgzODA1Igxxji4Dah5TGpUSOzIq3AP60Hzk19UPovc0YxYrVTkaDTcHUvIiuIfb1nxYcPZPGuFBzAh56FTqAWBsSs1MSt3tKugnw9V0RxXNdiwoQ%2ByxMPSeOBz8FW7P%2FGZxesTsts1pbjD4maGrTj56RoTMEfLjj87X5%2FssZ1BB7O84ZIWQ7Uffe7oVQyrMFzEbkbzNFmPfYR7J9ghXCoKp6joPf4kVpV1%2FAM8Ia7ttA2PMqN4Tr2o2Ia%2FCfIGJvDvxhSxbM5ix1DOjpRkoFOfdXcAMsV5x332HqD5XXroiako9Fg43BcHdPZLSNMgzBaS%2FWuTzFFFU8NZ1MMNc4jVq8H%2BD4yw4YkswwvJcaYRVE4eKZmYkxMgJbLMZ8gJXPpkgB%2BquSU70BOgLJqkQSEfjZUcTpefFvqMIxh0MwXDGqleCQHdoYIp%2FhCMUVuznSe%2F2I%2Bi4%2F%2BlEWJgZ1s5szxmdiQhaRoPSXWp41zPTZHCwjXIHSGC6hVgyOeBz%2FNLpL4E%2Fth4XkHfNJ0PA6zt5nw%2F5iXSEamjTg6WuajG6q3SD34kxLSOr581L3ibuIniPk7R%2BSWGpZ7vK1ugc5G%2FZVmGSkn%2FHJ5btoNgwhZnALW6iCmZuLROmX5J86JFlRIK43tPrSIN%2B0cdykPFXxKxfdrMuTzDL%2BNzBBjqkAWocOpai6A%2BP4zTJX6PRlYg2PK8PP0qmBhNjcgl%2FXfjYd5%2FG%2FNlCmMfx1dBRpSOJF4H0FcvsyxDIw0sCpIkqi%2Be151RkAxeIMUGVVPxh6V6tZQZjvlafcPuQ7a8r1jm8Qhbj6jUKe%2FBaM6rNwsScxlDpSfOKtUACYota8lMul4c2zPtjnon5wMY3z0WX4VKkdE2TbVUqEA0du6TxnlXA6%2FuJFeAz&X-Amz-Signature=a56526b525d7a5472bba9ade94f29c7b843752f0199fbf3508de41ba324b2aff&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
