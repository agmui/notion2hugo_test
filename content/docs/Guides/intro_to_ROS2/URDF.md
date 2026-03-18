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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666QQE5TC%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCIK5MBrQ4v587JUM%2BsbR6YTWYES7jxIMUTRIwpoGyD0wIhAI302dnE35CqBzU4NeV7KEm9f4ibn%2B%2B8hzoPaSR%2Bo0crKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyB1tygbt%2BJRrjk%2BnIq3AMRrmIFikkjUuLQeN7cztgz%2Fd%2BlsYBBiwqr44lnN6zwP67yVWquxdq%2BL9HxD94ABRIwJHLnA2t7OX%2FJ4wTvRehKxZyEm%2BqUCKhaudf%2Bj8xekp5CRyPcyHynmNC06r5P5WtDVJ99SyYsfTTBjBurFofHVgbXVy5PItm7SgK1AD%2Bba36e0s4kaac9bXj3BSojJq8HlqTmmAfdd%2B1sR7bJUVVGpAu%2BdZM3bva988ffep%2BqKBqynyKXAFM43bl2ot3COnX9Vi8%2BYUXVx7k5krY%2FGAm7HNOakbrMweVyV3Vxfg5dTOP%2F51yzEnp%2BUbNCtApB6%2FpOFW4nhjkUG0vYXs2tasR6jVJB10bc4pfTTZgDR%2FaZNVyghYgPSbeAnQnWJcn%2BvS9x0pNvs13YJVXH1PQu2BcozyOM3hZL84PHnWbu9Te7T2uZF50ZwJJXJY8R0%2FDj7eNZ8KKBMFHIG%2FX6nz%2FhhI7JbcwDxqxgA5SWR4KeSTEo8NGVCLqgT0FOBCCkb7%2BXAtoMiNM%2FtJrtH34rZKIPOFmoHq9k2NgqpsgqtyVv0TARprH5NcV4P8Ai0pwEBCIZIinw3vG2QEz3nUIG%2BNSMOkCFtp0WQGDUNh3SIq%2Fio0wf0LFEMWD8jR0Mws9QNTDT6ufNBjqkAYhjrxsfuCAg873GjRr6gkmo5fmWvRe%2B3zJqZWcqw6EXg66hdcrrQwCcVmYIIFti7Bzrd%2FloCN6Mj7%2F%2BuGwh6l47LM3jn1G0mQ3heBApgrPGPm4LZcTkxP7KmaXAAs0vsq4J9KiBelGuKOLszPyANIe7137hvOu4TTe6WXPlYCdMS4NWQTyY5aksunweBXys4ZA9DIMNoycAG78uvmzJVBUQo4jj&X-Amz-Signature=a76d32058ca6d6c8b68875167c4d30e56d307c8012fd51283daf993da7ccedf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666QQE5TC%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCIK5MBrQ4v587JUM%2BsbR6YTWYES7jxIMUTRIwpoGyD0wIhAI302dnE35CqBzU4NeV7KEm9f4ibn%2B%2B8hzoPaSR%2Bo0crKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyB1tygbt%2BJRrjk%2BnIq3AMRrmIFikkjUuLQeN7cztgz%2Fd%2BlsYBBiwqr44lnN6zwP67yVWquxdq%2BL9HxD94ABRIwJHLnA2t7OX%2FJ4wTvRehKxZyEm%2BqUCKhaudf%2Bj8xekp5CRyPcyHynmNC06r5P5WtDVJ99SyYsfTTBjBurFofHVgbXVy5PItm7SgK1AD%2Bba36e0s4kaac9bXj3BSojJq8HlqTmmAfdd%2B1sR7bJUVVGpAu%2BdZM3bva988ffep%2BqKBqynyKXAFM43bl2ot3COnX9Vi8%2BYUXVx7k5krY%2FGAm7HNOakbrMweVyV3Vxfg5dTOP%2F51yzEnp%2BUbNCtApB6%2FpOFW4nhjkUG0vYXs2tasR6jVJB10bc4pfTTZgDR%2FaZNVyghYgPSbeAnQnWJcn%2BvS9x0pNvs13YJVXH1PQu2BcozyOM3hZL84PHnWbu9Te7T2uZF50ZwJJXJY8R0%2FDj7eNZ8KKBMFHIG%2FX6nz%2FhhI7JbcwDxqxgA5SWR4KeSTEo8NGVCLqgT0FOBCCkb7%2BXAtoMiNM%2FtJrtH34rZKIPOFmoHq9k2NgqpsgqtyVv0TARprH5NcV4P8Ai0pwEBCIZIinw3vG2QEz3nUIG%2BNSMOkCFtp0WQGDUNh3SIq%2Fio0wf0LFEMWD8jR0Mws9QNTDT6ufNBjqkAYhjrxsfuCAg873GjRr6gkmo5fmWvRe%2B3zJqZWcqw6EXg66hdcrrQwCcVmYIIFti7Bzrd%2FloCN6Mj7%2F%2BuGwh6l47LM3jn1G0mQ3heBApgrPGPm4LZcTkxP7KmaXAAs0vsq4J9KiBelGuKOLszPyANIe7137hvOu4TTe6WXPlYCdMS4NWQTyY5aksunweBXys4ZA9DIMNoycAG78uvmzJVBUQo4jj&X-Amz-Signature=002df53d947e3624ba5aff960bc0cf88b5fa58af13177c837054b586124885fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
