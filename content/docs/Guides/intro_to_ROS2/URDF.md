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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMCB6UL7%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKvSKQ6l%2F0rIQ8DsBa5zh%2F3DsBC1V%2FKzkrpyDMD7JJ0AiEAl25IEiXmZW7t5hr24usy9Cbn4WQwDHPREC0500S4H8wq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDE4ad%2FvCH%2BG%2FdzDUjyrcA2j60RWYir6wrMZVtBd5hJGm5OhJNpwCG4GHquY%2BAFa03WnCodsX76pWzmUFXNLpQJGNW%2FlwI3CcPlJXFbWIp8dnfbzMyFG7WbbdHuc4et5H6alNO%2FrGP9pm2Oa4sQBygq7QgUHQA5X40tK3aiX3XGT2UThVxk%2FAeVAshvaf6YSP6vX0YAcUJaE49XSaVVnOsY7a6hmYQInTiwxy38nFQa%2FZBBGzX6sHMBeg4F%2BRrL0c%2Fqbl5qVtc2gUDjVBKwQf7jAXmtpot5bDfMmWwcGdqoB16IYt9K8%2FOB0jKW8XMryMRByvHmkcNdAZCEM5bInnSJyUrR%2BeDzMWbwq%2B8uaqu2EYdH6kXs4OlaUvfF2K7KR270hOCtUjFxFPhO6gVMtuxp2TjqFYpylnA4qljr3Uz43d9hNWFLb452eHksQKtwxL9O4mVjbOlvAeTC%2BFvuiK5GygFJj3RjyYNsyhgtCiWetPNB7X4YYTjRnpXWF9BZauKNjw8E4XqfscUYYUD2BexYTdU3I04cuXibO5o1NYI%2FoOYxCLgf9h6klfO0O1gbLZLSKgqh3crKWA8Ny8zJzi5A125JU5QJXuWl%2Fch81AOAeyDXGCwXc9a9ojcxMM32RWsB1jCJbNX1At%2FXhjMIXb3r4GOqUBYoaYKtZP47yYpPlD4H7egkCGsyKm%2FvLydWvQAmkZ1t69qqg2bKSu8CLJjRygwztb1Kb8CdP2bXwODxGWbhtXiiRR5Hdn5nI3UIi1%2B9CvxTyiw7T4dedfr8naqwpjUAo4O4Cj5oJA1JuMzpmC%2FAeWBmvJwXU47OIPLpercwbM8y0mPvgcAFX7hFz9FGvsAQ04qFoOuOQIsoKbT%2BX7oXMUdtn7WBZq&X-Amz-Signature=59e2bc8c86d11361f82ac31ee7519161e4449a937a6c59d0da2fe9816f03aadd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMCB6UL7%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKvSKQ6l%2F0rIQ8DsBa5zh%2F3DsBC1V%2FKzkrpyDMD7JJ0AiEAl25IEiXmZW7t5hr24usy9Cbn4WQwDHPREC0500S4H8wq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDE4ad%2FvCH%2BG%2FdzDUjyrcA2j60RWYir6wrMZVtBd5hJGm5OhJNpwCG4GHquY%2BAFa03WnCodsX76pWzmUFXNLpQJGNW%2FlwI3CcPlJXFbWIp8dnfbzMyFG7WbbdHuc4et5H6alNO%2FrGP9pm2Oa4sQBygq7QgUHQA5X40tK3aiX3XGT2UThVxk%2FAeVAshvaf6YSP6vX0YAcUJaE49XSaVVnOsY7a6hmYQInTiwxy38nFQa%2FZBBGzX6sHMBeg4F%2BRrL0c%2Fqbl5qVtc2gUDjVBKwQf7jAXmtpot5bDfMmWwcGdqoB16IYt9K8%2FOB0jKW8XMryMRByvHmkcNdAZCEM5bInnSJyUrR%2BeDzMWbwq%2B8uaqu2EYdH6kXs4OlaUvfF2K7KR270hOCtUjFxFPhO6gVMtuxp2TjqFYpylnA4qljr3Uz43d9hNWFLb452eHksQKtwxL9O4mVjbOlvAeTC%2BFvuiK5GygFJj3RjyYNsyhgtCiWetPNB7X4YYTjRnpXWF9BZauKNjw8E4XqfscUYYUD2BexYTdU3I04cuXibO5o1NYI%2FoOYxCLgf9h6klfO0O1gbLZLSKgqh3crKWA8Ny8zJzi5A125JU5QJXuWl%2Fch81AOAeyDXGCwXc9a9ojcxMM32RWsB1jCJbNX1At%2FXhjMIXb3r4GOqUBYoaYKtZP47yYpPlD4H7egkCGsyKm%2FvLydWvQAmkZ1t69qqg2bKSu8CLJjRygwztb1Kb8CdP2bXwODxGWbhtXiiRR5Hdn5nI3UIi1%2B9CvxTyiw7T4dedfr8naqwpjUAo4O4Cj5oJA1JuMzpmC%2FAeWBmvJwXU47OIPLpercwbM8y0mPvgcAFX7hFz9FGvsAQ04qFoOuOQIsoKbT%2BX7oXMUdtn7WBZq&X-Amz-Signature=c6c17a873a686752f1bcdd81d2dbc9bc8168bb732164b37e6020472f6f52c938&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
