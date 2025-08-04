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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RMZFFOW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDwQzjJXS7uhZINLbOshMETx%2FXqhBBL%2FcC%2BHTA5kR49nwIhALibGSDJLxU%2BJMQlOKlyjcKpE3%2BVmTdU3uJgytrSXdN%2BKv8DCD0QABoMNjM3NDIzMTgzODA1IgybOkF36WNkvVqWYhsq3APLNL3ebwVWozkWvMiCMr68%2FffneJqT8crRlrYBYbR1YZU2m7ZIIUB6V7aRWe6z4d6UzpOKorT2yyvlYXKsZeRoTGB4sMmSAJ5RsLv8rGcCoUVOJDG7cPuhRHNhuXhthRs6yqYU6DFSyJdiSX2W6TGLXcnvR4uoD8RVq5YMVarUpTKF8wPPE8wTl66hbGNy0hhXCKOHcgVcyeIvZJcUeiMY6Kb4r6En6aWJB69%2FXCiImj3dBL%2Fs%2BIMW%2BMfHqx0XVfsyWLe3BAiWJJ1LLmFtwZIOxoZzIULYLKNFj1tLlPWnQ8ep49mEbudAmRJcLPOTV5OgTcAEiILPUngug4FY8bMQ6jrAyGOErRJ2ooLCAt9nh7oqmTrle59qAxyzrhiuyLpD03oDCV%2FKcXA0R01fZhqLHGVI%2BaFKsHSlO19cA6lVMiBCGHMkZXXZPuS162lePEBjYkFE1UHO4BU45PozR3BJFcmiybgrp2iqOJhG0lBcPjUrn4JBXPQVsGwXeJXVXpgmAKj4ub%2B12aoOYcGWtv2E4eH%2F2zD5EaJVTxviXZKCvsR60oGil5ipitNHjGALq45JMEgBX%2F%2BrY6fpNUnldMJiCIJZt%2FH84ft73Zszd0G1Lk2BnnqYMQfH7SkiojCh6cDEBjqkAVUqZTUso1oR9hGkKQLTOKRpmEGtbO%2B0CNFyUbclc42LK5bQUuQPaePozAhApsKN3M3XEFeLQG67tlYQiV4nl6DfVUBRet5RCITbZgG3vR7sB01Bg5PoiDu7y65isH3TZdN1%2Bkc5ajpanmHljtMQ58ExHmYhAUdNOsPn0gQPMYSWLoT3Y%2BXY6UyQh1lei2NPNyBahKvdX%2FOwlecycdBpGdQgScSd&X-Amz-Signature=bea74e407bfc532bbda125fea6dabcffe159cf67b18cbe91151881a903312580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RMZFFOW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDwQzjJXS7uhZINLbOshMETx%2FXqhBBL%2FcC%2BHTA5kR49nwIhALibGSDJLxU%2BJMQlOKlyjcKpE3%2BVmTdU3uJgytrSXdN%2BKv8DCD0QABoMNjM3NDIzMTgzODA1IgybOkF36WNkvVqWYhsq3APLNL3ebwVWozkWvMiCMr68%2FffneJqT8crRlrYBYbR1YZU2m7ZIIUB6V7aRWe6z4d6UzpOKorT2yyvlYXKsZeRoTGB4sMmSAJ5RsLv8rGcCoUVOJDG7cPuhRHNhuXhthRs6yqYU6DFSyJdiSX2W6TGLXcnvR4uoD8RVq5YMVarUpTKF8wPPE8wTl66hbGNy0hhXCKOHcgVcyeIvZJcUeiMY6Kb4r6En6aWJB69%2FXCiImj3dBL%2Fs%2BIMW%2BMfHqx0XVfsyWLe3BAiWJJ1LLmFtwZIOxoZzIULYLKNFj1tLlPWnQ8ep49mEbudAmRJcLPOTV5OgTcAEiILPUngug4FY8bMQ6jrAyGOErRJ2ooLCAt9nh7oqmTrle59qAxyzrhiuyLpD03oDCV%2FKcXA0R01fZhqLHGVI%2BaFKsHSlO19cA6lVMiBCGHMkZXXZPuS162lePEBjYkFE1UHO4BU45PozR3BJFcmiybgrp2iqOJhG0lBcPjUrn4JBXPQVsGwXeJXVXpgmAKj4ub%2B12aoOYcGWtv2E4eH%2F2zD5EaJVTxviXZKCvsR60oGil5ipitNHjGALq45JMEgBX%2F%2BrY6fpNUnldMJiCIJZt%2FH84ft73Zszd0G1Lk2BnnqYMQfH7SkiojCh6cDEBjqkAVUqZTUso1oR9hGkKQLTOKRpmEGtbO%2B0CNFyUbclc42LK5bQUuQPaePozAhApsKN3M3XEFeLQG67tlYQiV4nl6DfVUBRet5RCITbZgG3vR7sB01Bg5PoiDu7y65isH3TZdN1%2Bkc5ajpanmHljtMQ58ExHmYhAUdNOsPn0gQPMYSWLoT3Y%2BXY6UyQh1lei2NPNyBahKvdX%2FOwlecycdBpGdQgScSd&X-Amz-Signature=01fea8218697287e0ffb0196c4272d1862af0df7ad458153c63e1a5dd6577bea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
