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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V4STJIE%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T022702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1GIbF4xjW%2B6vAtTmyvc6zoRfGb3tc8pY5tp3H7q6r8AIhALycvIIDB%2FMAvtrHzUm5%2FjYXAE2rA7gAB3l3nqfp0HE5Kv8DCGoQABoMNjM3NDIzMTgzODA1IgzPBhVB8bJ8wUmzp2oq3ANVaDQTtfnlyP1s%2FLGbnokf83zcesQWGng%2Flge6LJ42sctyxb2soE4hRnigpxdq0ak0WUkJOk5iFhdD6gOX2wmEyp4rwEI%2FIavC9W20cpBs2lEuIZhCbp%2FncFSklyWsQ8wN470CIZKx1Hf4wbwgRpSAyfbcqy5TqBcTBlktLEcyQ7pxwJQ14mCqAqYJgYVC2H2x8lq%2FrwcHRQmI%2FpWY5%2FfU4IcY%2B7FPTKkyv03c%2FHs2rJCS94n7lQKvwy%2BLwgCg0rzFeT1UuAPZ1or6cDMOSeNwvrRIZcNwldHu0WWM8JF573WN%2FpmeL0Zl34coL9PIyt2fOQvlNSyCt1HFedu2gr%2BD6D5UylUVI9HD3j10pWjmCsQzP1pnuAUwZiTE0oABRjm033MYTv0zPh9uiLaKH8HVuu0Wq32L9hfLosUX42sKmJ2VI5KKs9MHIv%2BVCCttwNKaKU1OL2DjWO2FpGxcmZYDl5s7bYKZFbap0QC%2BWjIgggCZLCbDCL%2FLDxXBusm4OEPZ4koJsyrItEb0zelJoACeDC5gpXpmnCWGWTviVz%2B1KNmoqjOLtkRLVZR2VlC3K8l1pcSm3ftpwwdPn7z3SXFC3vjFiBxnufogh3hnSHwfdpDRTBeSFVCfjzjrbDCLo7vABjqkAZGielOGkcNgpiYdZtLX%2BRuBs%2BjxH704U6J8VnVxG83%2BW2sIFPcMvo%2FvqeJohS5DUbfD3Lr5KuFlsNrZJ4JVlDN%2BJptwDaoJMql6fFJ%2FTBEmsNkdGItmSw1uYEuNdx5jlMzIvGRdgYjkJazHi33aDCjOGEkL%2B5zte2I2dy26lglfSW3AnaH0jwVsI%2FCXQzqCKWh1imoJrCOPVRddoDCsoVOuBtvf&X-Amz-Signature=045abc594f48b8454d7e00f5ca14c32435ef67965427b3ed2fd0e6f916add086&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V4STJIE%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T022702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1GIbF4xjW%2B6vAtTmyvc6zoRfGb3tc8pY5tp3H7q6r8AIhALycvIIDB%2FMAvtrHzUm5%2FjYXAE2rA7gAB3l3nqfp0HE5Kv8DCGoQABoMNjM3NDIzMTgzODA1IgzPBhVB8bJ8wUmzp2oq3ANVaDQTtfnlyP1s%2FLGbnokf83zcesQWGng%2Flge6LJ42sctyxb2soE4hRnigpxdq0ak0WUkJOk5iFhdD6gOX2wmEyp4rwEI%2FIavC9W20cpBs2lEuIZhCbp%2FncFSklyWsQ8wN470CIZKx1Hf4wbwgRpSAyfbcqy5TqBcTBlktLEcyQ7pxwJQ14mCqAqYJgYVC2H2x8lq%2FrwcHRQmI%2FpWY5%2FfU4IcY%2B7FPTKkyv03c%2FHs2rJCS94n7lQKvwy%2BLwgCg0rzFeT1UuAPZ1or6cDMOSeNwvrRIZcNwldHu0WWM8JF573WN%2FpmeL0Zl34coL9PIyt2fOQvlNSyCt1HFedu2gr%2BD6D5UylUVI9HD3j10pWjmCsQzP1pnuAUwZiTE0oABRjm033MYTv0zPh9uiLaKH8HVuu0Wq32L9hfLosUX42sKmJ2VI5KKs9MHIv%2BVCCttwNKaKU1OL2DjWO2FpGxcmZYDl5s7bYKZFbap0QC%2BWjIgggCZLCbDCL%2FLDxXBusm4OEPZ4koJsyrItEb0zelJoACeDC5gpXpmnCWGWTviVz%2B1KNmoqjOLtkRLVZR2VlC3K8l1pcSm3ftpwwdPn7z3SXFC3vjFiBxnufogh3hnSHwfdpDRTBeSFVCfjzjrbDCLo7vABjqkAZGielOGkcNgpiYdZtLX%2BRuBs%2BjxH704U6J8VnVxG83%2BW2sIFPcMvo%2FvqeJohS5DUbfD3Lr5KuFlsNrZJ4JVlDN%2BJptwDaoJMql6fFJ%2FTBEmsNkdGItmSw1uYEuNdx5jlMzIvGRdgYjkJazHi33aDCjOGEkL%2B5zte2I2dy26lglfSW3AnaH0jwVsI%2FCXQzqCKWh1imoJrCOPVRddoDCsoVOuBtvf&X-Amz-Signature=8898cd8d68a90a6e4bc0a5349bd2d66c0c7ca5f4d414138e6c269cafea5905f6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
