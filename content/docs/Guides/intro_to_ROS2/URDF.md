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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KHO6ICG%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClWmX4%2FA%2BAF2e76E1LmkfkgDRt9Hv5WSJ3rI8KZNjp9wIgE%2F0cps9wdEaBGJWCWzbqv4mQr1UBgeCZpUPxxiU8szIqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsVMzC%2BSdHWj6xb%2FSrcAwjFO08ezHGjEd%2FWozqj%2FVJBV6zVFaM76A%2BfZrBOTt3Xkc9ixrLgOUUYtKk289my89XIWeC0EOrr62lnBmBxYhfMWZBOf9K%2BERFkl5ZP0f0q6tOg80h0AUnI4wGPL0Ec4isxUu6cqwQ14GXR2Oe2HXbmm4AqlY7hAEA2K7SWsttWd4Nf1VC0y2z7xCNZafkVrfB4zpjzR7cP1nRWnjO%2Fbt7%2FJqBbXl7ag5Qq6Ctd3ExIK7GomQA2PhWuqF7dWH41k3ys5Y45wDOs6bqAw2lrks%2F0W%2FJ2OafEgdMrzKiuPViywSvT0LgBnFzwnruuNh7x0VjnpIuTwXF5R1ZqOokFBFKXDbDni3UDGIhDt4gT9SmWejNxmRZ6A2S6Csavv8vzLZ1ylgLgoBaPjP6z1iP%2BBTrFCJQbVoWsWkqb4zS354Riosm3VBdo52sdQOlmj2lqYRn4SdLQ6jUlWmMvbrMa3HLjRNsPgDSg89j%2BerxRFfYCeGVGhsqcG5zriv7zM8bIvuISq2ledWbR89ZbqYG0sG1%2FQLcPZ9bdiiMdqaXK4nDe8tqbD2e68vM7c9UHIZwODpJkTPtSHXr5C5%2FKjIvU%2FeU3IIrq0muHcfl5fR9ne4qWSK7xFL6cQRoAiuqHMKzmh8MGOqUBKBg1AGuxG8txEPuaEarfPwE41V0BuTYTmfV0CGiYVc5XZ%2BL1OMdsESsuP%2BX9J2%2F8rn4zEZ28YHz9kcCv5j43heLjrI5%2F7Ec4HW2lFtheRcFyP1pkHCmFA144U9BBZSJclkTWoqik%2BTAr5TjOMrrzi8iTor%2Bo8DYpKDzYCQYuRjU18Ew3awOx2Hq5qRRsI67u0XtYfNO1Udlxkcrp0Bqgqt6UEDmM&X-Amz-Signature=f98003a2930c22d190dc6cf8989a1b42a5afdc72eaa3008a52c34787f260683d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KHO6ICG%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClWmX4%2FA%2BAF2e76E1LmkfkgDRt9Hv5WSJ3rI8KZNjp9wIgE%2F0cps9wdEaBGJWCWzbqv4mQr1UBgeCZpUPxxiU8szIqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsVMzC%2BSdHWj6xb%2FSrcAwjFO08ezHGjEd%2FWozqj%2FVJBV6zVFaM76A%2BfZrBOTt3Xkc9ixrLgOUUYtKk289my89XIWeC0EOrr62lnBmBxYhfMWZBOf9K%2BERFkl5ZP0f0q6tOg80h0AUnI4wGPL0Ec4isxUu6cqwQ14GXR2Oe2HXbmm4AqlY7hAEA2K7SWsttWd4Nf1VC0y2z7xCNZafkVrfB4zpjzR7cP1nRWnjO%2Fbt7%2FJqBbXl7ag5Qq6Ctd3ExIK7GomQA2PhWuqF7dWH41k3ys5Y45wDOs6bqAw2lrks%2F0W%2FJ2OafEgdMrzKiuPViywSvT0LgBnFzwnruuNh7x0VjnpIuTwXF5R1ZqOokFBFKXDbDni3UDGIhDt4gT9SmWejNxmRZ6A2S6Csavv8vzLZ1ylgLgoBaPjP6z1iP%2BBTrFCJQbVoWsWkqb4zS354Riosm3VBdo52sdQOlmj2lqYRn4SdLQ6jUlWmMvbrMa3HLjRNsPgDSg89j%2BerxRFfYCeGVGhsqcG5zriv7zM8bIvuISq2ledWbR89ZbqYG0sG1%2FQLcPZ9bdiiMdqaXK4nDe8tqbD2e68vM7c9UHIZwODpJkTPtSHXr5C5%2FKjIvU%2FeU3IIrq0muHcfl5fR9ne4qWSK7xFL6cQRoAiuqHMKzmh8MGOqUBKBg1AGuxG8txEPuaEarfPwE41V0BuTYTmfV0CGiYVc5XZ%2BL1OMdsESsuP%2BX9J2%2F8rn4zEZ28YHz9kcCv5j43heLjrI5%2F7Ec4HW2lFtheRcFyP1pkHCmFA144U9BBZSJclkTWoqik%2BTAr5TjOMrrzi8iTor%2Bo8DYpKDzYCQYuRjU18Ew3awOx2Hq5qRRsI67u0XtYfNO1Udlxkcrp0Bqgqt6UEDmM&X-Amz-Signature=ed73d45ecc38c2c2a3382d21fc7fca7e3cffac9cd782c8b5792390935c836d20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
