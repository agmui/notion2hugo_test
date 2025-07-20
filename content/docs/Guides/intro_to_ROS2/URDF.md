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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA37IU63%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAEaD9HySAeZ66E7I2FbWz5iGGnpKyMpLS%2Bz%2BhMUZV39AiEAvPeweuSSlGKD%2BPiv7Kf0prjlvFS45vnTJv6zBIEACjMqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPg%2BW2sTVt0yJL4aEircA9Le%2BEbQPCVGpDj0wWmjkurgHqxHy%2BiO4bk9lTRjrwPAWtF5XZ%2BoPwkg3xj3Sp%2Fm6jQm2%2BiNiij54tVgSloY2N4fw5Xj26G3MyPBbGDmO4LvhRQoR5teYH4lEaAUd%2FIDhYl3Vn1kBRfh%2BlPz8ZyckjKJBoqltfKY7l34zLNBEWZ0bLgA5Su8jGK4ed%2FNndfP7DPhkCo6GchdTnGGgBRRkinGbbm1HFxDbWXegFOytrkHoN6b4B1HNXUkFhEhM%2FAj5Rg2K5npkUhcovd9enHS1NXn4Q4H0Re5FoaeQKCKRvd2%2BsGq%2F6AjjxamUvRQWqn01WZyC4S0D75gA%2BzFD6qG2X4eDhpuHPoMr8xAEXPuBbv6TFsXZwdso6gzsF1Xl%2BXJZJD2bkk9kE4ilpq59T4GIxmimvkQTDzndT%2FPLtBG95bN0yMbN6%2FjvDRwdiqJLZ1nHS9w9G%2BBsNG1RaYoG6FUTxvLmMM%2ByWPBbsM4Tev%2BIb7Wm7u%2BBZjlMQJupbCnbznC%2F4BG2dbHaZHsAW8t9mqy1%2BPAYSvTpxpXuxUWKSKSJ1tNW9LYgmu4%2FEcEcPsUlvYeivo6nImcsEEdufqQhMpfWAP87QjHjlIULm5DlHrx1SmEKoBq1lD8WOSHVlFjMJ6a8cMGOqUBUs5%2FG%2BXZyniHQTTWrhi0aRslw4nOeXRZZOzIt5l5zLyhdWoIXqkaCHIxC8f5TBF2JblZ2bbB3yXccGlZRf3wqp90s79kFMWClvWKokzwvErJ%2BU4YUqSNrZv%2F1JckWELV2K8GL3GUEBG%2B4EZQxkyoo%2BHCpnPA%2FT7ulaBOK%2BCO2FQkQtvJeb1SgWZfqPHHFCq57wpaZxppvHM%2Fk6WBeYWhIE6RRRas&X-Amz-Signature=794cb7959847ac0ed44d410fcb66929a0cc29ba938004cc435a9c133184c67de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA37IU63%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAEaD9HySAeZ66E7I2FbWz5iGGnpKyMpLS%2Bz%2BhMUZV39AiEAvPeweuSSlGKD%2BPiv7Kf0prjlvFS45vnTJv6zBIEACjMqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPg%2BW2sTVt0yJL4aEircA9Le%2BEbQPCVGpDj0wWmjkurgHqxHy%2BiO4bk9lTRjrwPAWtF5XZ%2BoPwkg3xj3Sp%2Fm6jQm2%2BiNiij54tVgSloY2N4fw5Xj26G3MyPBbGDmO4LvhRQoR5teYH4lEaAUd%2FIDhYl3Vn1kBRfh%2BlPz8ZyckjKJBoqltfKY7l34zLNBEWZ0bLgA5Su8jGK4ed%2FNndfP7DPhkCo6GchdTnGGgBRRkinGbbm1HFxDbWXegFOytrkHoN6b4B1HNXUkFhEhM%2FAj5Rg2K5npkUhcovd9enHS1NXn4Q4H0Re5FoaeQKCKRvd2%2BsGq%2F6AjjxamUvRQWqn01WZyC4S0D75gA%2BzFD6qG2X4eDhpuHPoMr8xAEXPuBbv6TFsXZwdso6gzsF1Xl%2BXJZJD2bkk9kE4ilpq59T4GIxmimvkQTDzndT%2FPLtBG95bN0yMbN6%2FjvDRwdiqJLZ1nHS9w9G%2BBsNG1RaYoG6FUTxvLmMM%2ByWPBbsM4Tev%2BIb7Wm7u%2BBZjlMQJupbCnbznC%2F4BG2dbHaZHsAW8t9mqy1%2BPAYSvTpxpXuxUWKSKSJ1tNW9LYgmu4%2FEcEcPsUlvYeivo6nImcsEEdufqQhMpfWAP87QjHjlIULm5DlHrx1SmEKoBq1lD8WOSHVlFjMJ6a8cMGOqUBUs5%2FG%2BXZyniHQTTWrhi0aRslw4nOeXRZZOzIt5l5zLyhdWoIXqkaCHIxC8f5TBF2JblZ2bbB3yXccGlZRf3wqp90s79kFMWClvWKokzwvErJ%2BU4YUqSNrZv%2F1JckWELV2K8GL3GUEBG%2B4EZQxkyoo%2BHCpnPA%2FT7ulaBOK%2BCO2FQkQtvJeb1SgWZfqPHHFCq57wpaZxppvHM%2Fk6WBeYWhIE6RRRas&X-Amz-Signature=d11b5e506cd200b9717c35faf62dd0208bce45662bf074ce1858adcb9cf98656&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
