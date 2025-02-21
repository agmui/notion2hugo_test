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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C6SB64S%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW99VjIqzg9sb9ccS86UR42R2r5QKR8DG82wsLPncQxAIhAJQjyqMzDpmJDIv0Dp%2FKAuse%2FS9hlPBCQ1TPUFc%2BzXQQKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNr2%2BbPnfaUH0eOJEq3AMx6EUGakMMe9Kk0AtFANlAV9%2FERI8d9WnEXbnbp5slxPbC6u9uH2NNwXnD%2FPdfshPSJQneuKp1EmUTa8Jgq6mTjNNz0KKn1PKJcyGysuNGVxHuZ7QE1JW1cJ%2FJqTapVHtfkvY15soe7So5wZmEaBzv%2BRKNl%2Bv%2Bq4zJ8YcNS7VI8yRzi%2F5ruQdQR52lYaVa8RBn7b8Ru5TIneXQASebXIYMxWzJ0hh%2BHIj4GhwJt2HEgDW2MP7G0ZLKiFdoMSaEeHn8Snwb8Zu%2F%2FTXKE9GC%2FVWoPTd8vcVK%2Bkt2QkqdDKj0qBx3w13zcBnzBe4sBWfJAB1Ww4S79vjqAZmW0paJA%2FotMQgtXnBxTXcvBtnHiZFc1mFdm%2Fo7V7FzkXIxu%2FJRcf8ouizBcjujvSf58qpaoV5zNnijrXcwDOs0fLv%2BbsKdT2WgOz8abI88AqcBy%2FjFWbWA2fy2yfZmg77Dv1umsxmuXhwrXg%2BmBLDTEYjH7WSKhmHMsEwyIAOSKSYc6OGpw0JfjlKETNmblh6aDA4pJPIpqMR92iUSsd%2BPYyuYaGaCFEjt1fuMETH2HoTIIJ12yygzSR0jm%2FRwlQ4Bqhcwx1eQLkC4gXFhYUQhHLMtqWh1NqzbHp1MJZXOt6jWpDDt9uO9BjqkAeP0vewqoi7G3642mQuDmBKyRrgnY7bLiP4h2Izioa5bJmRWaBBN4mJwh19AIRtav3VvXbTTjKx1rrVWUEndt1XhAPBO9ASZGdB%2FaIjNXXaJ48flxnQPc3yD4sMI9TntJaVohdlajxAx60WEC%2BCix9WKy6nUBarxxixMl2cO1hWLRu78IXtv0MHKBeHB%2FjrLkJKS4KoC6vJwHGZw0naP0hzZnUeU&X-Amz-Signature=aff85ddba755f8647b0b4f4402209a16b7705bf8a9bec75a2a0f6b20a569b6e1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C6SB64S%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW99VjIqzg9sb9ccS86UR42R2r5QKR8DG82wsLPncQxAIhAJQjyqMzDpmJDIv0Dp%2FKAuse%2FS9hlPBCQ1TPUFc%2BzXQQKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNr2%2BbPnfaUH0eOJEq3AMx6EUGakMMe9Kk0AtFANlAV9%2FERI8d9WnEXbnbp5slxPbC6u9uH2NNwXnD%2FPdfshPSJQneuKp1EmUTa8Jgq6mTjNNz0KKn1PKJcyGysuNGVxHuZ7QE1JW1cJ%2FJqTapVHtfkvY15soe7So5wZmEaBzv%2BRKNl%2Bv%2Bq4zJ8YcNS7VI8yRzi%2F5ruQdQR52lYaVa8RBn7b8Ru5TIneXQASebXIYMxWzJ0hh%2BHIj4GhwJt2HEgDW2MP7G0ZLKiFdoMSaEeHn8Snwb8Zu%2F%2FTXKE9GC%2FVWoPTd8vcVK%2Bkt2QkqdDKj0qBx3w13zcBnzBe4sBWfJAB1Ww4S79vjqAZmW0paJA%2FotMQgtXnBxTXcvBtnHiZFc1mFdm%2Fo7V7FzkXIxu%2FJRcf8ouizBcjujvSf58qpaoV5zNnijrXcwDOs0fLv%2BbsKdT2WgOz8abI88AqcBy%2FjFWbWA2fy2yfZmg77Dv1umsxmuXhwrXg%2BmBLDTEYjH7WSKhmHMsEwyIAOSKSYc6OGpw0JfjlKETNmblh6aDA4pJPIpqMR92iUSsd%2BPYyuYaGaCFEjt1fuMETH2HoTIIJ12yygzSR0jm%2FRwlQ4Bqhcwx1eQLkC4gXFhYUQhHLMtqWh1NqzbHp1MJZXOt6jWpDDt9uO9BjqkAeP0vewqoi7G3642mQuDmBKyRrgnY7bLiP4h2Izioa5bJmRWaBBN4mJwh19AIRtav3VvXbTTjKx1rrVWUEndt1XhAPBO9ASZGdB%2FaIjNXXaJ48flxnQPc3yD4sMI9TntJaVohdlajxAx60WEC%2BCix9WKy6nUBarxxixMl2cO1hWLRu78IXtv0MHKBeHB%2FjrLkJKS4KoC6vJwHGZw0naP0hzZnUeU&X-Amz-Signature=7201785a081339c5acc8389d6722f21deadcf2ea5ef0df27572d3ce13d8f5a42&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
