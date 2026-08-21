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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHVJFXYH%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt2vBRYrZO3xQchNWfC96ICDNnFW1tyjlBsnMClK4MtAIgUp2hRIetHUOTrstF%2BnZpNxqMBbOdqUK1uqn8Sw%2FDHqYqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNr1a9sOPWpHFcduircA8GtveLHCtXzd8BTdAhLr%2FoX2U8jUPSFve2kmHK6VP9ngk%2FkNlhHn7mf%2F2ZoCAdmrJR8onrwQmZ7Fo1uj9qbr9GiwWxUNMSgpVduXPOuim7p2%2Fxp%2F3Lv6O3GWDDbvf2z%2FL97kUtlkllEyZS6%2FGJqwsjpS5hO5IEeq5dVk12c%2Bdsph65ARIMepnpBHGZpv5LruGO6IV2qFLfyic8%2Fk9D6xXf%2BqspLXJ%2BX4Lw87SMUMhOcawfqQfrWPoDCnYNZeYEH77VP2Z2Vxil1ugPWzOhoIDQvJgz%2BMgJCX7uG37MedIHpgbZ%2BAdMzMNeWZkYb1j6Y2iBmsrvn%2BnNaPqjkrXt6QytbWCnI37R1uhzdxOclkLNqQV2HrJzo32mSR2bT6M%2BmZkxekkQ5U%2BosWUsJcmMDxHcpbjj12OvumD65IEmuj5UmP9P5WF8xu2A0B1Z%2BKN1mnGusI61ADV4WlMmoVjdpXDqlZ4xqbqxriZzFpI3QCdkUJvQb5R2oVXT%2FTc1EXAYX9x0AMF7so6fGlvX6i69uPwNV0YkNL6%2BJtOfFPMvPKQI1b06bM6FG6uzHEkXMutzKTbJhU%2BomK71plVMc6QpYkgcXT5cwZO%2FlmwW2JOTa6VeINWHOgE3bsT85yq5vMJGvntQGOqUBn7gsFyexrchTOQR48SHE8TYDwC%2FSFBCALC4ixuVODPiQ72pgZVVTUh1myiZIBl530nEUIFo%2FpSqNUuCErZ2KP3oabPg96%2BfAlJWJ9jJXzB3HOZMFxPdkMCofqTdFolcBnjJUcceti830oW2by2cFgMsGrgIrme9AV1mJLOBnWraTQTjIjb74YEXGFsCuq%2FIwVaQX%2FQNAjQhAtbNukOHhQp5psl28&X-Amz-Signature=14265097601715a9b37daffc28f433f66e3d5d90e60429f0b1d80a30ecbdc42b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHVJFXYH%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt2vBRYrZO3xQchNWfC96ICDNnFW1tyjlBsnMClK4MtAIgUp2hRIetHUOTrstF%2BnZpNxqMBbOdqUK1uqn8Sw%2FDHqYqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNr1a9sOPWpHFcduircA8GtveLHCtXzd8BTdAhLr%2FoX2U8jUPSFve2kmHK6VP9ngk%2FkNlhHn7mf%2F2ZoCAdmrJR8onrwQmZ7Fo1uj9qbr9GiwWxUNMSgpVduXPOuim7p2%2Fxp%2F3Lv6O3GWDDbvf2z%2FL97kUtlkllEyZS6%2FGJqwsjpS5hO5IEeq5dVk12c%2Bdsph65ARIMepnpBHGZpv5LruGO6IV2qFLfyic8%2Fk9D6xXf%2BqspLXJ%2BX4Lw87SMUMhOcawfqQfrWPoDCnYNZeYEH77VP2Z2Vxil1ugPWzOhoIDQvJgz%2BMgJCX7uG37MedIHpgbZ%2BAdMzMNeWZkYb1j6Y2iBmsrvn%2BnNaPqjkrXt6QytbWCnI37R1uhzdxOclkLNqQV2HrJzo32mSR2bT6M%2BmZkxekkQ5U%2BosWUsJcmMDxHcpbjj12OvumD65IEmuj5UmP9P5WF8xu2A0B1Z%2BKN1mnGusI61ADV4WlMmoVjdpXDqlZ4xqbqxriZzFpI3QCdkUJvQb5R2oVXT%2FTc1EXAYX9x0AMF7so6fGlvX6i69uPwNV0YkNL6%2BJtOfFPMvPKQI1b06bM6FG6uzHEkXMutzKTbJhU%2BomK71plVMc6QpYkgcXT5cwZO%2FlmwW2JOTa6VeINWHOgE3bsT85yq5vMJGvntQGOqUBn7gsFyexrchTOQR48SHE8TYDwC%2FSFBCALC4ixuVODPiQ72pgZVVTUh1myiZIBl530nEUIFo%2FpSqNUuCErZ2KP3oabPg96%2BfAlJWJ9jJXzB3HOZMFxPdkMCofqTdFolcBnjJUcceti830oW2by2cFgMsGrgIrme9AV1mJLOBnWraTQTjIjb74YEXGFsCuq%2FIwVaQX%2FQNAjQhAtbNukOHhQp5psl28&X-Amz-Signature=20a71c29c746d21488a4fbb513dc00afe8ad8d30284d79c6aed17b8668789660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
