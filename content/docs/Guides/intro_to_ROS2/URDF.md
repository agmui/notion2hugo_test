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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T6HWET6%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIFJA1EZ9FE351hXNYr4HhUI9c1L6YURGHjVgRuEJVPtFAiEAxcDMEreVJavH6fIOXlH%2F0MngLrWj58KkGM%2Bl%2Fp%2BvhSkq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDL5D8afuTrJ9WpKXvSrcA9rWqrVVN2zzT6VE%2FYRT%2Ba1rB0TXPOYdY8YF7Sz83af8wI1FQQQppRXPOsYwEi4Gm2wKuug8MkXW0PRZ9pYNeAIuerZRHx1DR%2FEgMcvF9d3mhmUyVB57za6RK5wzL%2FtrmaQiRoNHc0b4rCJHYY%2BRousxcthXjF0MWY7I4urz3cvZve4aD5vpWjzUiIds6QyGIfAEhW%2BGpL7P3%2Fg7fXh3fNq0ebpydBUeFViP%2FAH8DdzgU0kc7MjwwdTIQEl9Xez4W%2FcTvnCMFdrPvR1nV3jyVuUluuTX3asq9CL2QwmeagWf4coyOXTCGOutc8GZ6BNInRvh2Vu6z5cPuBgwwhNClEOrbZprfggf0nw8KY%2F%2F2dk64sSIlK838oO20HoU%2FDPzzaOkRpsZKxt9ke6PgP%2FmZ7it8kSqO9vHkT%2BD9YUynTg52G4%2BnME8HbpP4n%2B8inWN2MvHovb1UvyEE45T6enzytyp6DYpJ1eVRV8ooLSrirrm33Ysbr2%2BrQTg03naeMw2WhxR2M%2B%2FPcKIKotFNGjXxhFfD3g8xdWbeJVP3Wvs9nFXj9gyImG3MfDCQ4aLdw1k54jEPMjvNU9ONwSUViSY7yd4UK5KURWeSRm5zWDSmlgCTh4QwvzApRVxGRvxMKnR4MMGOqUBBUyQ9Essak09iVBaaECDmrMEqW7U3NmzCftPkDMVbFdlvgmxTHJgmsdDwITLJV%2B%2BR809OkYa9JK8YdS0HzdMfe9JhRPKHBQz6HFh93nCWql8MgT4HkPzC0S86j56pbMOVTKrx7nzbw4c1GRm0nuWks0Zh8cQnRa2iIsaWI48woHRbEqaDZ1m0dBajhw4uFRnV8QEWVCdkTxDvcKpZJok5BMxqbkz&X-Amz-Signature=a15dbc5b26f878ee85db6dc705fbbaafbf24ea37865f4244ca107e2935f02af1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T6HWET6%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIFJA1EZ9FE351hXNYr4HhUI9c1L6YURGHjVgRuEJVPtFAiEAxcDMEreVJavH6fIOXlH%2F0MngLrWj58KkGM%2Bl%2Fp%2BvhSkq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDL5D8afuTrJ9WpKXvSrcA9rWqrVVN2zzT6VE%2FYRT%2Ba1rB0TXPOYdY8YF7Sz83af8wI1FQQQppRXPOsYwEi4Gm2wKuug8MkXW0PRZ9pYNeAIuerZRHx1DR%2FEgMcvF9d3mhmUyVB57za6RK5wzL%2FtrmaQiRoNHc0b4rCJHYY%2BRousxcthXjF0MWY7I4urz3cvZve4aD5vpWjzUiIds6QyGIfAEhW%2BGpL7P3%2Fg7fXh3fNq0ebpydBUeFViP%2FAH8DdzgU0kc7MjwwdTIQEl9Xez4W%2FcTvnCMFdrPvR1nV3jyVuUluuTX3asq9CL2QwmeagWf4coyOXTCGOutc8GZ6BNInRvh2Vu6z5cPuBgwwhNClEOrbZprfggf0nw8KY%2F%2F2dk64sSIlK838oO20HoU%2FDPzzaOkRpsZKxt9ke6PgP%2FmZ7it8kSqO9vHkT%2BD9YUynTg52G4%2BnME8HbpP4n%2B8inWN2MvHovb1UvyEE45T6enzytyp6DYpJ1eVRV8ooLSrirrm33Ysbr2%2BrQTg03naeMw2WhxR2M%2B%2FPcKIKotFNGjXxhFfD3g8xdWbeJVP3Wvs9nFXj9gyImG3MfDCQ4aLdw1k54jEPMjvNU9ONwSUViSY7yd4UK5KURWeSRm5zWDSmlgCTh4QwvzApRVxGRvxMKnR4MMGOqUBBUyQ9Essak09iVBaaECDmrMEqW7U3NmzCftPkDMVbFdlvgmxTHJgmsdDwITLJV%2B%2BR809OkYa9JK8YdS0HzdMfe9JhRPKHBQz6HFh93nCWql8MgT4HkPzC0S86j56pbMOVTKrx7nzbw4c1GRm0nuWks0Zh8cQnRa2iIsaWI48woHRbEqaDZ1m0dBajhw4uFRnV8QEWVCdkTxDvcKpZJok5BMxqbkz&X-Amz-Signature=ac3d30ad07d0945890403ba45d1bde3df255bd1e00382e8d1e2c89076af1ad85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
