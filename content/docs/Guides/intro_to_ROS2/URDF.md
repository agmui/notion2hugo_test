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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F627RFD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIH98kgF92fwYoV2Wg9RMZGT0h0rfDB4nWO2oipANMOieAiEApnp9pYt77lolaLMLqGFakEPX5ydi8X4Wk7z8J7gk0%2Bcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDF%2BHu%2BXW1q3SFxB7%2ByrcA3HemY%2Bp35co9Z9SleO%2FbkpU3KFSAFZA%2F63KtGDLkXtrJXIMmogJA975UXWd5GPCntYfmbGlfoG6remR2WA3Plma8EaFIt%2BM4xDjD9p3o9dTuKgkC7JpsTLh1KozkWGI5ptK5MwYWDRhayYWg8aRGPhMrW2mQsWc4YN4uEseywtEwr3p4g1AkaVf1%2BQ7209%2BV2NmAajOnFMNVtXnS2HOrmR6LMCXGHzln8oXRDfUp5vSylqTpOUrSEGctcTN2ohKRc5aubuvO%2BvqTaCOMrBJ7Mim6xLfkRW1hLk2xYQX45l%2FaUSQr5aIQCezDf736p7MGEoMBJMWBp%2FusIXUjX2ysVotkQZNZMnIVGRAh8RQQAtEV3DIfAZlZqTsMOJZX4pi%2FOx4ZG2sr%2Fa9oDp667AO3Y5lvdWerWxS7dWXHKvYktWgxVTjs2ZZDP%2B5qg%2FTjgXIFO%2FS6NNI7TtFFiVKASAY2ttj%2BgSIhHBofzAd22IWvk9x%2BrUF%2BGlnrKu%2FHY%2B9vB3PH6%2BvsRjtd1i3n6ArR3Cty7dAWaGxfO4QeZSjYi2lAtHwwND7h9iE5GVGR4tnC2r4bB3ixSWElGZE%2BK4WqcEqk44uA%2BI%2BUNintdVv0hAsGWA9H0aSnAtlL4LzFNOKMKr4gMUGOqUBt8ETe5lTSxyA9v5PzBWjqdz1lqmaUSu34NCrHU1PtVs7%2FPzvButQYqkk3n5XlWpl5baAfLcpgLR1JMl414YfwgzckYje0YdgowT3ifbbv6TJdmxW8cn4N4cCAmaAU2MXRNPFQArelEKrZ%2FUVCb2ZvVQjXq847tuJUoz4j%2Br52zcJD5bLym00L2K4XXoWPsSnVOhiXyiQwz6SCSfFj3xB9OG7n%2F%2Fo&X-Amz-Signature=a8504650d07177cdd2c1e8c861ed798339fec80aa724d94d72afc5164e552796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F627RFD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIH98kgF92fwYoV2Wg9RMZGT0h0rfDB4nWO2oipANMOieAiEApnp9pYt77lolaLMLqGFakEPX5ydi8X4Wk7z8J7gk0%2Bcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDF%2BHu%2BXW1q3SFxB7%2ByrcA3HemY%2Bp35co9Z9SleO%2FbkpU3KFSAFZA%2F63KtGDLkXtrJXIMmogJA975UXWd5GPCntYfmbGlfoG6remR2WA3Plma8EaFIt%2BM4xDjD9p3o9dTuKgkC7JpsTLh1KozkWGI5ptK5MwYWDRhayYWg8aRGPhMrW2mQsWc4YN4uEseywtEwr3p4g1AkaVf1%2BQ7209%2BV2NmAajOnFMNVtXnS2HOrmR6LMCXGHzln8oXRDfUp5vSylqTpOUrSEGctcTN2ohKRc5aubuvO%2BvqTaCOMrBJ7Mim6xLfkRW1hLk2xYQX45l%2FaUSQr5aIQCezDf736p7MGEoMBJMWBp%2FusIXUjX2ysVotkQZNZMnIVGRAh8RQQAtEV3DIfAZlZqTsMOJZX4pi%2FOx4ZG2sr%2Fa9oDp667AO3Y5lvdWerWxS7dWXHKvYktWgxVTjs2ZZDP%2B5qg%2FTjgXIFO%2FS6NNI7TtFFiVKASAY2ttj%2BgSIhHBofzAd22IWvk9x%2BrUF%2BGlnrKu%2FHY%2B9vB3PH6%2BvsRjtd1i3n6ArR3Cty7dAWaGxfO4QeZSjYi2lAtHwwND7h9iE5GVGR4tnC2r4bB3ixSWElGZE%2BK4WqcEqk44uA%2BI%2BUNintdVv0hAsGWA9H0aSnAtlL4LzFNOKMKr4gMUGOqUBt8ETe5lTSxyA9v5PzBWjqdz1lqmaUSu34NCrHU1PtVs7%2FPzvButQYqkk3n5XlWpl5baAfLcpgLR1JMl414YfwgzckYje0YdgowT3ifbbv6TJdmxW8cn4N4cCAmaAU2MXRNPFQArelEKrZ%2FUVCb2ZvVQjXq847tuJUoz4j%2Br52zcJD5bLym00L2K4XXoWPsSnVOhiXyiQwz6SCSfFj3xB9OG7n%2F%2Fo&X-Amz-Signature=19d1812bb4a7c60b4fded6ba201977158a874ce1afead1e67526524b6d1ef3c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
