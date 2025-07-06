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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NETUPXG%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQD0hP0CkIN85KEUKmRMgkSCJf4yL1WJ1emdzcDSreZu6QIgEJxuQ3smd41jiKFWcRtq%2B8oQ1TkTTTz%2F1ZSS3ECXzJ4q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDE2%2FHH1lHNuxfgjdCyrcAwtJFDx7naKu8yKLM5bYs4xlI2Y1itdI5oGmLIt5j5KrzBC65PXtM74QJ01YxEclaMYVZDlBGe%2BLtXDDWnxhRtpvzFLWn61bE2hpw%2FiynwpZ54IZLb8EOeMi4Gzki0p6xaGaZdOfGt%2F3%2FPbHsM7ZkuC1v2IuNXJzIJcx8nC17T3PKnuoKmIVZpV8mMOhw5AgXwGSfptcC6yfhEuTbviTaGjiQk1Yjy0gVXXU4pccwhhKIiE6K5UXyBayyASZXKcV9h6STk55rq58GkhqVFG%2BTqEhBoqagvFO1ipk%2BauEURMawSQxM2wbb3tzv7hAPAVEEUrs5IMgtAfbragsFChXHeUM8OHmuA1WusggwvC5s2MTqNmSKPt9g5YkztvpArbSeHSD4S5Rn0VqskUijgpwIH1vEJaZvyfa306LzSgRMpZjwBBbTkSAkPXW30j2oRxfSwRHNcIUL2UJwjZclhtvIsTHMobj90TUQlva7EfKzpoO%2FPZZUPx9qQLA%2FVlVqE0Fu2nVkkS4%2Bj4YPm4LWvtpDN%2FfC07tzUcaUaDpcGBXerLuoBieschV4keIgQbn1Mk1rP515yQyfpHlT9XzymOKmv3n1vN9g9UBu3ApUvy7OvAygab5K%2FtdQ%2F1wm%2BNRMOPHqcMGOqUBEzRZOhuIaMkkZllpGXfS3dAyY4CfB4RZBKMsrHYCm%2B%2F4%2FaVyHAxyrIelJLZ5b1YxzaLE0BhrBT7saSuIgjr5RRDRb4gv%2BvuLr9AniNrbdny98lfJXhLCdU%2FlKnNz%2FQ8iH3n8IvP9bnAukL7jT%2BSotxvorJTCf5hXHCpKMDnXrrcRdHJeWRJSrd39XFPYQo%2Bw2l3qFBvDNfqx3chG4jqS6aLA5u%2BR&X-Amz-Signature=836b532d137c5ef0f71708c559d168557ad2c21220441ae3f1d861aa73a43ffb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NETUPXG%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQD0hP0CkIN85KEUKmRMgkSCJf4yL1WJ1emdzcDSreZu6QIgEJxuQ3smd41jiKFWcRtq%2B8oQ1TkTTTz%2F1ZSS3ECXzJ4q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDE2%2FHH1lHNuxfgjdCyrcAwtJFDx7naKu8yKLM5bYs4xlI2Y1itdI5oGmLIt5j5KrzBC65PXtM74QJ01YxEclaMYVZDlBGe%2BLtXDDWnxhRtpvzFLWn61bE2hpw%2FiynwpZ54IZLb8EOeMi4Gzki0p6xaGaZdOfGt%2F3%2FPbHsM7ZkuC1v2IuNXJzIJcx8nC17T3PKnuoKmIVZpV8mMOhw5AgXwGSfptcC6yfhEuTbviTaGjiQk1Yjy0gVXXU4pccwhhKIiE6K5UXyBayyASZXKcV9h6STk55rq58GkhqVFG%2BTqEhBoqagvFO1ipk%2BauEURMawSQxM2wbb3tzv7hAPAVEEUrs5IMgtAfbragsFChXHeUM8OHmuA1WusggwvC5s2MTqNmSKPt9g5YkztvpArbSeHSD4S5Rn0VqskUijgpwIH1vEJaZvyfa306LzSgRMpZjwBBbTkSAkPXW30j2oRxfSwRHNcIUL2UJwjZclhtvIsTHMobj90TUQlva7EfKzpoO%2FPZZUPx9qQLA%2FVlVqE0Fu2nVkkS4%2Bj4YPm4LWvtpDN%2FfC07tzUcaUaDpcGBXerLuoBieschV4keIgQbn1Mk1rP515yQyfpHlT9XzymOKmv3n1vN9g9UBu3ApUvy7OvAygab5K%2FtdQ%2F1wm%2BNRMOPHqcMGOqUBEzRZOhuIaMkkZllpGXfS3dAyY4CfB4RZBKMsrHYCm%2B%2F4%2FaVyHAxyrIelJLZ5b1YxzaLE0BhrBT7saSuIgjr5RRDRb4gv%2BvuLr9AniNrbdny98lfJXhLCdU%2FlKnNz%2FQ8iH3n8IvP9bnAukL7jT%2BSotxvorJTCf5hXHCpKMDnXrrcRdHJeWRJSrd39XFPYQo%2Bw2l3qFBvDNfqx3chG4jqS6aLA5u%2BR&X-Amz-Signature=b30070b732a6a01491d837d9db267f43e28fd979e527a70c260e4292c1189ecf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
