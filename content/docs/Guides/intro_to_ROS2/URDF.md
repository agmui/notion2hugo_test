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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635AYJTSZ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIHkh2nowIcMsj1RYlcHu25wK4L9vSJVF6KUYoz3hRP0KAiEA4bYtzGpfiPdu4Gu9jN3ArR5mUJoO69qWV6VsLN88%2FSAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOvB7nbGq1ZXXPQjircA2oE9I0bx1n3b0q1eXiPKof1Wh%2FEsRCwJwTYlraAwnEQ8rG7RRQf%2FBPEDaJe7%2F2VUA1V%2BHQqqYkQOl%2BRT2WiL29wTWDO1iKYwvaXCjfDPtryyO1DVAZeTa%2FrU%2BWli0Uu0QcDOgy7sZK1yyltPlhHh%2F23qCwHmb5awGx3zlhgA7iPuzT%2F4Nrp355CIkkDJ10OE1BIDi%2F1e7XVCKoviMaaGSFFkxRpa03HslcQl%2B4IyGmN%2FdBECvSbMTHT8iELgY0WkSlYSKTTfNep7xUNoTyJp11%2Fep9ZxgGEQL47%2F74Cb6wAL4AzA%2FddDCm61ilr4jIJdwwYb0NAv8xPV%2Bk%2Fth07ye5DC70cAjFRoaKxG%2Buqe5ad%2BglLUFzjAZba7YwlTovtnjWOY1fAdZVkNcRYqTku2SicAlrwqu%2FMu0t6COKuG1qeRylOQnDXzngVfrVsYRLX5eSbgHNp5FhxIszttfyFbqQUAkw9amiouuZf4KQosTi3nWji5cMPi20t%2BT9%2FSW%2BKs4AnewX1llQKgXBV%2BTjkueCm5IL6RDwfAc86KeNcJvh1ea%2FBbM2Hh6tJ%2FRNSjl1ZrYnYukhd0LAp1LLqdGOBIAV0SiZQ9fQ1faBQxJgSmJ9gQa7XZRJCxczNOTuIMPrDyMAGOqUByiIxX%2BdXIS1oR%2B%2FsoMGLBpudWTwDnBtgH9tVXX1nCZx4PYMGwbrlZM02jhCwRDIvJtVPsbHHUnbhzpvoTfvY1NoFNH2R%2Ffr4jRSaXHgduW648CV38nkIleSGCT2VYM0ZFc%2FEjYF6%2BIlEK0aKbyGtfiTHgMCXZwUIjsnu2%2F3ESDx0hfs66rHHx2J60sUcMsVEWXbL80GYC9zP9B0m90U0lHfw8gBQ&X-Amz-Signature=6983c24884c19ec4cf8cdc89cf536cfc2a4f96c41d49ac0226495dcf772136cd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635AYJTSZ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIHkh2nowIcMsj1RYlcHu25wK4L9vSJVF6KUYoz3hRP0KAiEA4bYtzGpfiPdu4Gu9jN3ArR5mUJoO69qWV6VsLN88%2FSAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOvB7nbGq1ZXXPQjircA2oE9I0bx1n3b0q1eXiPKof1Wh%2FEsRCwJwTYlraAwnEQ8rG7RRQf%2FBPEDaJe7%2F2VUA1V%2BHQqqYkQOl%2BRT2WiL29wTWDO1iKYwvaXCjfDPtryyO1DVAZeTa%2FrU%2BWli0Uu0QcDOgy7sZK1yyltPlhHh%2F23qCwHmb5awGx3zlhgA7iPuzT%2F4Nrp355CIkkDJ10OE1BIDi%2F1e7XVCKoviMaaGSFFkxRpa03HslcQl%2B4IyGmN%2FdBECvSbMTHT8iELgY0WkSlYSKTTfNep7xUNoTyJp11%2Fep9ZxgGEQL47%2F74Cb6wAL4AzA%2FddDCm61ilr4jIJdwwYb0NAv8xPV%2Bk%2Fth07ye5DC70cAjFRoaKxG%2Buqe5ad%2BglLUFzjAZba7YwlTovtnjWOY1fAdZVkNcRYqTku2SicAlrwqu%2FMu0t6COKuG1qeRylOQnDXzngVfrVsYRLX5eSbgHNp5FhxIszttfyFbqQUAkw9amiouuZf4KQosTi3nWji5cMPi20t%2BT9%2FSW%2BKs4AnewX1llQKgXBV%2BTjkueCm5IL6RDwfAc86KeNcJvh1ea%2FBbM2Hh6tJ%2FRNSjl1ZrYnYukhd0LAp1LLqdGOBIAV0SiZQ9fQ1faBQxJgSmJ9gQa7XZRJCxczNOTuIMPrDyMAGOqUByiIxX%2BdXIS1oR%2B%2FsoMGLBpudWTwDnBtgH9tVXX1nCZx4PYMGwbrlZM02jhCwRDIvJtVPsbHHUnbhzpvoTfvY1NoFNH2R%2Ffr4jRSaXHgduW648CV38nkIleSGCT2VYM0ZFc%2FEjYF6%2BIlEK0aKbyGtfiTHgMCXZwUIjsnu2%2F3ESDx0hfs66rHHx2J60sUcMsVEWXbL80GYC9zP9B0m90U0lHfw8gBQ&X-Amz-Signature=065c9fc29d6f8a12bcf1a102a69f9f22cb7c108c0778358d2dd80517a551c3be&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
