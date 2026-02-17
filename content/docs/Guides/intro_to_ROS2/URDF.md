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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466277CPBIZ%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIHp51fUtm7M0yb5GZqUhlRwI7lNvvAg4jEXdUvC88iZ0AiBx9CREcbO%2BJZjxqWZMpBAmFt0U0AK2FnktTrIgrnlxyCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMoUgQDh6F0vYbH89CKtwDSeh%2F78132wdvmi54wxJL%2B2sNyNlNQtQbRTgjNfmiXUtJ%2BYM40DvaUGu03CKprSTK%2BEorsgUSEa4PCzhg%2Fk9pTkaAo6iIAKP8EEQaVTlWrM7RpdnxK8LrG1snCCnVpsr8yoaFP%2Fgoa6AfshPEk%2FVaBcIRTcyQlBptfGg%2Bk73jIgsp%2Btk4z%2F1bOCsvwmgubBjLTIMMjGZoPMEjgKaGcPr7eIrAct2YylSsDElHM3751p%2BxzhLeEX%2Fmz8SA86CfhgGa%2BFjR3%2BbuUpP6UQ9ww8pU2WheaQOvP8kxQSGSJUFtRIak8vCQXSscxGL4mjYwQVEc%2BpRefhhwSDWV8Sjb0ZBsIWn4MHgJIR5Trtm6vxcWCrKvxeunLl0UywswpaKZ408hwe9IRlXQyLDV04HyMM%2BCZxoHzBbBZ4T1HxeH8amfzr%2FiN%2FrV1PqomMRcGtgMBh%2BnIXozsapmLi%2FFu1lj5xeViyGg2sv5yHlVE5yuNPO8%2Fi2l7aJYAqVCbCdBThHD9KXYm3oean89WHlmUPqnsX80IB%2BN6yYbrSay%2Fd33M%2B1fgtzoJt7Q0vC6uoPaxCc7e5m3s%2FBkXdOMgPN09%2Fbg4K1NM6rOO0JKQqQAp%2BwocS4eLvzwP0BaGkEwSCUEQQIw3pfPzAY6pgEQL3B3WNSI5mUfal%2BCL0cdDdJFQ0UPssdSrJ4%2BYxTTdKWgysLQ0cUF6gwyFSgiLYa3SEFPrRly8I%2BKVfl9gT0rO8LKLmAvKTCSt9w5rt6%2FSBWBTTfP4iLJsgQ%2FKW25XaxLJaYRf%2BJXJ4uwhCdDQQ%2FJ2WPX9SiCtDJ9e9xq%2BAbbO%2FU8sX5LM0kML5p8lm6FMfN3CB6xEPMQe3pdn%2BTr1eGArzGT0JjX&X-Amz-Signature=5f54355ae77535f4f128e773ddbffde0956da5e0349dbdabc994505a7cbfa58b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466277CPBIZ%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIHp51fUtm7M0yb5GZqUhlRwI7lNvvAg4jEXdUvC88iZ0AiBx9CREcbO%2BJZjxqWZMpBAmFt0U0AK2FnktTrIgrnlxyCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMoUgQDh6F0vYbH89CKtwDSeh%2F78132wdvmi54wxJL%2B2sNyNlNQtQbRTgjNfmiXUtJ%2BYM40DvaUGu03CKprSTK%2BEorsgUSEa4PCzhg%2Fk9pTkaAo6iIAKP8EEQaVTlWrM7RpdnxK8LrG1snCCnVpsr8yoaFP%2Fgoa6AfshPEk%2FVaBcIRTcyQlBptfGg%2Bk73jIgsp%2Btk4z%2F1bOCsvwmgubBjLTIMMjGZoPMEjgKaGcPr7eIrAct2YylSsDElHM3751p%2BxzhLeEX%2Fmz8SA86CfhgGa%2BFjR3%2BbuUpP6UQ9ww8pU2WheaQOvP8kxQSGSJUFtRIak8vCQXSscxGL4mjYwQVEc%2BpRefhhwSDWV8Sjb0ZBsIWn4MHgJIR5Trtm6vxcWCrKvxeunLl0UywswpaKZ408hwe9IRlXQyLDV04HyMM%2BCZxoHzBbBZ4T1HxeH8amfzr%2FiN%2FrV1PqomMRcGtgMBh%2BnIXozsapmLi%2FFu1lj5xeViyGg2sv5yHlVE5yuNPO8%2Fi2l7aJYAqVCbCdBThHD9KXYm3oean89WHlmUPqnsX80IB%2BN6yYbrSay%2Fd33M%2B1fgtzoJt7Q0vC6uoPaxCc7e5m3s%2FBkXdOMgPN09%2Fbg4K1NM6rOO0JKQqQAp%2BwocS4eLvzwP0BaGkEwSCUEQQIw3pfPzAY6pgEQL3B3WNSI5mUfal%2BCL0cdDdJFQ0UPssdSrJ4%2BYxTTdKWgysLQ0cUF6gwyFSgiLYa3SEFPrRly8I%2BKVfl9gT0rO8LKLmAvKTCSt9w5rt6%2FSBWBTTfP4iLJsgQ%2FKW25XaxLJaYRf%2BJXJ4uwhCdDQQ%2FJ2WPX9SiCtDJ9e9xq%2BAbbO%2FU8sX5LM0kML5p8lm6FMfN3CB6xEPMQe3pdn%2BTr1eGArzGT0JjX&X-Amz-Signature=94af63d9281d11804f76ee56878adf546c6639433b1745d92dbe06c08b03d224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
