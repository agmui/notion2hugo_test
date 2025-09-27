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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETZBL4V%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCo57tc7ESeieCKJaUEYtLukvgU9wpRO3qGRzxHZUHMdwIge%2BeiokmyWM3FHeENywgWlU5REA2l50LTZ%2FG9imYHBz8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMzXjU9RrQ6rpghpCrcAxvMtdtPm1%2F0f8r%2FKKrz68JoWXpvBvXr%2BHXr5Pu7r9oj4k%2BLNOiYKLXdp54a16%2FDCWz2oIrMwhZkW7VbJA9jGkIRjDo2b4KcAnT7Ou%2BEN%2BTS0v%2FtGcA0XePhLrY01qqZbXtEc7Vnl4dN3AFoNWqiZKAwQvgEs32tEDYzWDpUhuXNrvjvtNe%2BzA7N8%2FtUHYmkTqmXg1VwMBxEujIxBwxgAaPsyvwgyrF8AzSRV2%2FHN0igXwutY02xom9q7Yx28UaWfkMOgcSXT2pfnl%2F2T0OTjLluJRemV9danFq0xE5cYwXuRrlnJdplAQcGA9CiD9kD%2BmwEiMDpt67WwV6nBS5t%2BcVapVCdWLA8HpGi1kgHmsbVCdNCWZ3dJBHKhLPVFlDBEtvvtTEmgM0eBSaUSS3pvqI9o4y7Wzfgm0XZ7W9EQlZJuxtehKR2zdiV6wx6Pjqr4jZG3LQ9wMt1Cc9oMtW6HkUhh9vdsmg9ur2k%2BoIjU8MI56g0wkRACeKMgmU7qzmKI3IixCWjMGWjDI6FteaTSc6U4zKIe7SKj58rv0DZ88CpEXJEndqCtbyXCtxHGpwdu4zbcCsSUoXTiywm28%2F1mvxhXWTmBDuPltxDIvmD4KgFOHBsvVku6Vf3ytdpMOTn3MYGOqUBuuv8X1bfBOpX2okeK2Adyf05mmpk1t2Lw03ljaJ4fTdgIDLxwhq3fSynN8JNv62PR4KCmvHuW8IGN4NZ5I7%2F3PRlRrcokBWcQYW8n%2BLF37GfdWF%2BJCJLo6lWl8G3F%2BkKyTb2FV4DnMrS%2FM64vtzVX9E2FemmMpJePJUX3yfYB8X%2FvsRtUcbMvqhSMnN34aKGpxsz6853vyzglIlmPTZbI18hHQZE&X-Amz-Signature=76bba35ba43c753e5b5b4a215a30b8a4daaacb7553e1d2dd6d06ad2c8d1da143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETZBL4V%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCo57tc7ESeieCKJaUEYtLukvgU9wpRO3qGRzxHZUHMdwIge%2BeiokmyWM3FHeENywgWlU5REA2l50LTZ%2FG9imYHBz8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMzXjU9RrQ6rpghpCrcAxvMtdtPm1%2F0f8r%2FKKrz68JoWXpvBvXr%2BHXr5Pu7r9oj4k%2BLNOiYKLXdp54a16%2FDCWz2oIrMwhZkW7VbJA9jGkIRjDo2b4KcAnT7Ou%2BEN%2BTS0v%2FtGcA0XePhLrY01qqZbXtEc7Vnl4dN3AFoNWqiZKAwQvgEs32tEDYzWDpUhuXNrvjvtNe%2BzA7N8%2FtUHYmkTqmXg1VwMBxEujIxBwxgAaPsyvwgyrF8AzSRV2%2FHN0igXwutY02xom9q7Yx28UaWfkMOgcSXT2pfnl%2F2T0OTjLluJRemV9danFq0xE5cYwXuRrlnJdplAQcGA9CiD9kD%2BmwEiMDpt67WwV6nBS5t%2BcVapVCdWLA8HpGi1kgHmsbVCdNCWZ3dJBHKhLPVFlDBEtvvtTEmgM0eBSaUSS3pvqI9o4y7Wzfgm0XZ7W9EQlZJuxtehKR2zdiV6wx6Pjqr4jZG3LQ9wMt1Cc9oMtW6HkUhh9vdsmg9ur2k%2BoIjU8MI56g0wkRACeKMgmU7qzmKI3IixCWjMGWjDI6FteaTSc6U4zKIe7SKj58rv0DZ88CpEXJEndqCtbyXCtxHGpwdu4zbcCsSUoXTiywm28%2F1mvxhXWTmBDuPltxDIvmD4KgFOHBsvVku6Vf3ytdpMOTn3MYGOqUBuuv8X1bfBOpX2okeK2Adyf05mmpk1t2Lw03ljaJ4fTdgIDLxwhq3fSynN8JNv62PR4KCmvHuW8IGN4NZ5I7%2F3PRlRrcokBWcQYW8n%2BLF37GfdWF%2BJCJLo6lWl8G3F%2BkKyTb2FV4DnMrS%2FM64vtzVX9E2FemmMpJePJUX3yfYB8X%2FvsRtUcbMvqhSMnN34aKGpxsz6853vyzglIlmPTZbI18hHQZE&X-Amz-Signature=7b3be0ba9479dd746417c72f10f03cd857a16faf1ae045896769dd00ede0508b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
