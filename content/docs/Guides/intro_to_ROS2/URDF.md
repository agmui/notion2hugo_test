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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY3OZQLD%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIBaR92tv7FSWVIz5sBCCmcIcgbvsiajRoxhXE61XaCOcAiEAlpwnwPTvdy9EWXkctntVui8FVgMwEJlt5ECtzCwLlYQq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDIeTfa5ayi%2ByjnTL2yrcA15kMsvAH4B6Nj1YulEIxn9ZnGhdMRLYHkVVXEa8N2a%2FqezjODfsZWIcT4NhfxjQ0AFzEngi4FCK1e99bVfwdzbUydR154JdFk79uzcQrcXCw944SMwYur6%2F%2Bhm17VxhFSRnFGhLKZbVoMWrc1Xf1BChonE1J7MgeF2n%2FmzpH4gZUtUkHqafUYGLGerSRSjba5iBobDmSe4CwDWlYPzoUqRrgZSPPGAtrYkz2FTLxp4Ut0fUScRurhiA7EXBxXTaN%2BZ0vgiD6jJ6v1kfz1amJvsBo0SgKo2jaiEYSPN6tcbht%2Fs9EGBtr1CGwkGfffj6OiyBWnhZ5vKJUO4oLw7ACXMCSsYxHvwCF55lN0LAlF8OWavQxfHXI50DPvT%2BBMztrTlX9rw4S5doJT7rXLvM0yi%2FkuTDa%2B7zayXwnE0HOImUtkNwHDn675IuDzz3ufXp1jNIshf6O7AVsKL6%2BnDPGrlIDj7Jag9myw9zSFA0JihseAKuA%2F8K5e4vSMY0CJQLGyizebrVmi6Hp0xMgrHXahynKO0%2FjJKaYY6KnhKbHDuB0FlF%2FoYsRiPuL1HM9%2BELHjfEZO8TOD%2Ba%2BY80QOrXGSeJchDBadTSSllGQbH1e0ohbukn2lS2IOQ3m6T9MPSH1b8GOqUBlAz%2B%2FrzXUGeC0naxqjDkZfjM9MbZE9R6tOucbK8wLuMDRwsGauMsPuxo4zDqb4N9G%2B6L1bk%2FnhpnaEyODPN7eB4MVmNY2HUGYTnSf6ytKQjaG2K9uvRcJqvenN35YHGqlVh0IDFU7Al0YL8bRWJ3TLdwdBkb7EE7LmsWCSNk%2FphD2KBvVrtoYfFdUBbe1qY8P5PlNBe0emJSynrQwU%2FOO9IkBH33&X-Amz-Signature=551b10e1d116f7b8938a534b23f818e00d28a255d4b9366f046fda95f6427c75&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY3OZQLD%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIBaR92tv7FSWVIz5sBCCmcIcgbvsiajRoxhXE61XaCOcAiEAlpwnwPTvdy9EWXkctntVui8FVgMwEJlt5ECtzCwLlYQq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDIeTfa5ayi%2ByjnTL2yrcA15kMsvAH4B6Nj1YulEIxn9ZnGhdMRLYHkVVXEa8N2a%2FqezjODfsZWIcT4NhfxjQ0AFzEngi4FCK1e99bVfwdzbUydR154JdFk79uzcQrcXCw944SMwYur6%2F%2Bhm17VxhFSRnFGhLKZbVoMWrc1Xf1BChonE1J7MgeF2n%2FmzpH4gZUtUkHqafUYGLGerSRSjba5iBobDmSe4CwDWlYPzoUqRrgZSPPGAtrYkz2FTLxp4Ut0fUScRurhiA7EXBxXTaN%2BZ0vgiD6jJ6v1kfz1amJvsBo0SgKo2jaiEYSPN6tcbht%2Fs9EGBtr1CGwkGfffj6OiyBWnhZ5vKJUO4oLw7ACXMCSsYxHvwCF55lN0LAlF8OWavQxfHXI50DPvT%2BBMztrTlX9rw4S5doJT7rXLvM0yi%2FkuTDa%2B7zayXwnE0HOImUtkNwHDn675IuDzz3ufXp1jNIshf6O7AVsKL6%2BnDPGrlIDj7Jag9myw9zSFA0JihseAKuA%2F8K5e4vSMY0CJQLGyizebrVmi6Hp0xMgrHXahynKO0%2FjJKaYY6KnhKbHDuB0FlF%2FoYsRiPuL1HM9%2BELHjfEZO8TOD%2Ba%2BY80QOrXGSeJchDBadTSSllGQbH1e0ohbukn2lS2IOQ3m6T9MPSH1b8GOqUBlAz%2B%2FrzXUGeC0naxqjDkZfjM9MbZE9R6tOucbK8wLuMDRwsGauMsPuxo4zDqb4N9G%2B6L1bk%2FnhpnaEyODPN7eB4MVmNY2HUGYTnSf6ytKQjaG2K9uvRcJqvenN35YHGqlVh0IDFU7Al0YL8bRWJ3TLdwdBkb7EE7LmsWCSNk%2FphD2KBvVrtoYfFdUBbe1qY8P5PlNBe0emJSynrQwU%2FOO9IkBH33&X-Amz-Signature=52ec293c7b26b948a6a717d83f8ad12c9119caea87d1a1b6dda9ee1e37cd22f4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
