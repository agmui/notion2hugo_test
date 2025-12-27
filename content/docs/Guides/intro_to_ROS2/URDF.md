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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NWEHUQR%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZB9tq7NohlWABBBrkeJ0uBGV9uZTY3VK00XJCViEnWwIgebbChDh2dfly8OBZrQrdm%2BmoLCT8j9aO0nvrSOMIf2wq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDP9spJVOFsqyyZ4xZCrcA5WQ4axxOC1Iaw6KxfPwP2Z4ggYngepjATPu1llmzLuYNUvl0In8t%2FO4i0YyIbunxsawU%2FSshNgapbLGnXTZPDdpfbm%2FC1yiOMg15LZ4se9Dt6nAqZ%2FEnInotwRKUHP7rzfoDRgy0g3NO6GqAcAbP872CbhuY4HBTap5AKgXD8KSSuQ047umeOFFiiJR3MFK0Re9IAsQ7woLlnXM6JVGzzIsrfWmdWjXHzBbvE0BAzHyr5B%2FHubUGrvmpUhm%2FKDR2RL4XMiXbc3J0U0VnJmpVb2WGGFHogoosWmAvtCPi07ybifDGUHcVxeJI7g5N1DIrb54WdWxKwDIfSVpZyblu6fKP5ShQTJ3%2FiHS5yJcT3cXb5V9eWmoDm0SfHs%2Ble5ge8%2FGrrnPbg9XXHVDbx%2B556luvD6CMMz%2F%2BsKGkTxoDGdg81IyB2OHYzUSmaowmSx3XRG7a%2FD%2BmkeSGe9vn1qYil77mwUNZs4hizJK20YtivwrfuRyMD6%2FW%2F15lge6HPaLI7Y9YWzkZ3UU1l2O3unhbDj9GCEQTkrCZdxZ1pCxPhTmLafaQeyD5tj0%2FwLpqExtFpGAjaNI6u%2BxyUY1zqHAevlOKv%2Fxb0RQ9aUoE46OjkpdGSVZf9OfFOTCc6D%2BMLLmvMoGOqUBg89hvh2VKnrSfY3Etv1uGaQrKEqmTmE2gX%2BK9x%2BqkbT4%2B3NseOgkTq8H1tLlDWKqIh0Z%2FSnpw1EC67Crtg%2BhfvAv6DQBB4RwP%2B%2FaPUlFTVzTH3AXZ6BqBBoL6rFA9xN9hRXMvPKMMnrMbFo41tIFEXeY9R9hsz0MTgaOLtgqzPBr1MmxPs0D4%2FKVafR40t6JcNMu0Z2Nqa416YwU6yoiuhk%2BMvCY&X-Amz-Signature=efc48d0b8870d2ce32b6617984a4cfc68df632678138a020e31e9d0cceb50fe6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NWEHUQR%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZB9tq7NohlWABBBrkeJ0uBGV9uZTY3VK00XJCViEnWwIgebbChDh2dfly8OBZrQrdm%2BmoLCT8j9aO0nvrSOMIf2wq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDP9spJVOFsqyyZ4xZCrcA5WQ4axxOC1Iaw6KxfPwP2Z4ggYngepjATPu1llmzLuYNUvl0In8t%2FO4i0YyIbunxsawU%2FSshNgapbLGnXTZPDdpfbm%2FC1yiOMg15LZ4se9Dt6nAqZ%2FEnInotwRKUHP7rzfoDRgy0g3NO6GqAcAbP872CbhuY4HBTap5AKgXD8KSSuQ047umeOFFiiJR3MFK0Re9IAsQ7woLlnXM6JVGzzIsrfWmdWjXHzBbvE0BAzHyr5B%2FHubUGrvmpUhm%2FKDR2RL4XMiXbc3J0U0VnJmpVb2WGGFHogoosWmAvtCPi07ybifDGUHcVxeJI7g5N1DIrb54WdWxKwDIfSVpZyblu6fKP5ShQTJ3%2FiHS5yJcT3cXb5V9eWmoDm0SfHs%2Ble5ge8%2FGrrnPbg9XXHVDbx%2B556luvD6CMMz%2F%2BsKGkTxoDGdg81IyB2OHYzUSmaowmSx3XRG7a%2FD%2BmkeSGe9vn1qYil77mwUNZs4hizJK20YtivwrfuRyMD6%2FW%2F15lge6HPaLI7Y9YWzkZ3UU1l2O3unhbDj9GCEQTkrCZdxZ1pCxPhTmLafaQeyD5tj0%2FwLpqExtFpGAjaNI6u%2BxyUY1zqHAevlOKv%2Fxb0RQ9aUoE46OjkpdGSVZf9OfFOTCc6D%2BMLLmvMoGOqUBg89hvh2VKnrSfY3Etv1uGaQrKEqmTmE2gX%2BK9x%2BqkbT4%2B3NseOgkTq8H1tLlDWKqIh0Z%2FSnpw1EC67Crtg%2BhfvAv6DQBB4RwP%2B%2FaPUlFTVzTH3AXZ6BqBBoL6rFA9xN9hRXMvPKMMnrMbFo41tIFEXeY9R9hsz0MTgaOLtgqzPBr1MmxPs0D4%2FKVafR40t6JcNMu0Z2Nqa416YwU6yoiuhk%2BMvCY&X-Amz-Signature=5f1547037d7efc8fa2a075a91d81e5a934e27581372e0a4a2f1c0583da000f8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
