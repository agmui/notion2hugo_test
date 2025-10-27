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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XALR32BB%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGcbluZxDeAI3NHDM5FE%2BCSsJx79%2BbdW6nbrE8rVbR4zAiBxIToPgvDa1SPhGivpuxKZ7JKMVQiKZ4ji8tJbep5VFiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4G0L1f8evUG5A2NzKtwDGhc%2FHEpfkSnWEUUmgP11EWzn3oVKQTa%2BOKri5y5T1uYvhlBGEINXXWOHTCTz5ixlrMZOMMIjyTQ6QC37BoPG5QyOrJzcqcTNb9PA997UfdotV7IAOoz3Qy2%2BnBS8dDtE2FJlFf93FdigWuBN%2FGreMxMywI9Ucmov%2FP55IphEpb4Q5XXoUFGVaFIoZJpyHvFfvh3QhRO92F4hf0FXX8YFyduZigvXMlrAgJWdZG0b7XgYQvVzy%2B7H67Wr4DbShqjR6Jc3DuKOu%2BBMxgoO5%2FeoeTOywTtA4yvsGi3ghGkf5%2BsYE5k%2B27nhHoI%2F%2F%2F%2FrT4EZUzTn7AMHDWwzxB9WvMLo7x3LUk1JXgNKcggkZF7Yc4XenYsuzD8A4tGeAaIvADlqn7CTHuefvCgPu1s2f6VWDsr5BGT8OUkns5wagqeOJAQU3JMLGYriInHyhDiBO%2B3IaThraCeKvoHLWjjNraJzTx0DNYJ1Nlr3la0U8jW4c2u1b0I0MPyvGE4FEaxowWx38ze531uOlfLFG%2BV4DUZPcvqoX2WwflJiwi0cGMumhTA1rX76VMBGGIKaDTnuKgwBqGXGR%2FM9nXg4hHwHVNkz%2BleTb%2Bn8IjrintFEjHpnGmqb2ZTPc0Z3MQls%2FO0w1I77xwY6pgGMvxUCgQZFia1qDu7VpZgmwlMYPrWTcEuSQrzmELpzPWwokQGI0SCPzeWzR48BizUiShxwwMOkPjeOOdNSjNg6yKlOXB6FZSUkQA%2FipogA%2FkWrZcktzIxcdZol4uZl5W8COmW6ZNQqf7UdIyKM%2FreztSsebmhtCF72ZnTDR0FHzc%2BA75K8cbtcAHkk3T7U96bjwtWat7WYFjy0R4hrREuRfl%2FGToOd&X-Amz-Signature=58fe365795ebb93de512edc6bc2cb16aca57f47862db7fa1f1350c6ef5022a51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XALR32BB%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGcbluZxDeAI3NHDM5FE%2BCSsJx79%2BbdW6nbrE8rVbR4zAiBxIToPgvDa1SPhGivpuxKZ7JKMVQiKZ4ji8tJbep5VFiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4G0L1f8evUG5A2NzKtwDGhc%2FHEpfkSnWEUUmgP11EWzn3oVKQTa%2BOKri5y5T1uYvhlBGEINXXWOHTCTz5ixlrMZOMMIjyTQ6QC37BoPG5QyOrJzcqcTNb9PA997UfdotV7IAOoz3Qy2%2BnBS8dDtE2FJlFf93FdigWuBN%2FGreMxMywI9Ucmov%2FP55IphEpb4Q5XXoUFGVaFIoZJpyHvFfvh3QhRO92F4hf0FXX8YFyduZigvXMlrAgJWdZG0b7XgYQvVzy%2B7H67Wr4DbShqjR6Jc3DuKOu%2BBMxgoO5%2FeoeTOywTtA4yvsGi3ghGkf5%2BsYE5k%2B27nhHoI%2F%2F%2F%2FrT4EZUzTn7AMHDWwzxB9WvMLo7x3LUk1JXgNKcggkZF7Yc4XenYsuzD8A4tGeAaIvADlqn7CTHuefvCgPu1s2f6VWDsr5BGT8OUkns5wagqeOJAQU3JMLGYriInHyhDiBO%2B3IaThraCeKvoHLWjjNraJzTx0DNYJ1Nlr3la0U8jW4c2u1b0I0MPyvGE4FEaxowWx38ze531uOlfLFG%2BV4DUZPcvqoX2WwflJiwi0cGMumhTA1rX76VMBGGIKaDTnuKgwBqGXGR%2FM9nXg4hHwHVNkz%2BleTb%2Bn8IjrintFEjHpnGmqb2ZTPc0Z3MQls%2FO0w1I77xwY6pgGMvxUCgQZFia1qDu7VpZgmwlMYPrWTcEuSQrzmELpzPWwokQGI0SCPzeWzR48BizUiShxwwMOkPjeOOdNSjNg6yKlOXB6FZSUkQA%2FipogA%2FkWrZcktzIxcdZol4uZl5W8COmW6ZNQqf7UdIyKM%2FreztSsebmhtCF72ZnTDR0FHzc%2BA75K8cbtcAHkk3T7U96bjwtWat7WYFjy0R4hrREuRfl%2FGToOd&X-Amz-Signature=c197c871f9ba92fc702df8d6b6cf21cee42f10accf13b7e51d58f51ea79112a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
