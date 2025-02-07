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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664534V2SC%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIF3Z7TbXPIbeS%2B5FkiqLbgfw%2FH98qECmMqfSosnKQ4uwAiBkrMRHkCet5%2FiXpEGRxXT0yM5W%2F4miRaoSMmYE3hHJdir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMubJ9gN3LkHU2UKIJKtwDlu2%2BQ1%2BXoNRUXof5zCg1dyPZ4fBV7YS3ZIL1KpPS5TlYjKHXY333VNEROTXPnbMAZwMVVxDMJ19KXnJ1Qg7e5VMy2MbT%2BG9L%2BJsqWyOIiQkrJeyThiUhUz7c6RvN0Ud4l5Cb5%2Faw8UGpgESEsyhmnky9ndCLZN5LcWyWPgSQDH5PKZDz0ILVHFkDq9r3wz3r6XmptmfVtWJQ3bHqopP8Gnig0xU3GZ4bHvJx51WlJ%2BVR3kl6L5WLAn4No5MQpGFtZMsqG0ENRyz6LUr%2BqkxlUKquHTc8uOHooAOQqsEPQgjodvgBhWGdRXz3DFOMEoPmg0%2BA5bZK7X6dwziDyoAbjdkQw9vCtBD717gVjI7OB34qi7yMqWT%2BIFmgfrj3rCfde6Rc8q2C41YlXNEg%2B4BElZ6tRIKinA%2B1RqILv1fH3IVdgmATB9ybGinUtKJjPrdd%2B9nPClgij86sW%2FUMXAxjaKtwgR%2BLj9pfUHFEx2Cb6K1FlLBfpVJ%2BEo9VkRe9r3l%2FGotPEmCGrJJVrzRj95OAqzCdtTNyw7NfSu2%2FMIidghLuYAYk6JOSFMT5FQ07Sr%2F7SO8lv7eTjV%2BbzB4Q%2Bp6E6kdR1eysKE9lRemu6kyQ9%2FDteV6loqc%2B1tFz0FIw%2B%2FqWvQY6pgHvTeb6m7s0vzLgfrGA%2FAc6j9Sjn6KvlnwSS83o4wBgkJbacz4x4eaZsQ%2BxT%2FDbaxdx6lMNprOvDKTgByy78Mei50U5eVXe%2FBJrTgfnJrHMOFVvaL6xoAo6eNZ%2B6mfmUqR7NHkcBtYQjXjnnCWTrBP31v6E%2FNxcqoNt5RLKcpdI8Z7i4c5pstbGwoPkf7IkAe6a2LoWcdbolCeA5PoYqrV0HhKN8KnH&X-Amz-Signature=915dffd2d47d769f7ae93d0f43646d84db80826bdebed0062343654f2846f6f6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664534V2SC%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIF3Z7TbXPIbeS%2B5FkiqLbgfw%2FH98qECmMqfSosnKQ4uwAiBkrMRHkCet5%2FiXpEGRxXT0yM5W%2F4miRaoSMmYE3hHJdir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMubJ9gN3LkHU2UKIJKtwDlu2%2BQ1%2BXoNRUXof5zCg1dyPZ4fBV7YS3ZIL1KpPS5TlYjKHXY333VNEROTXPnbMAZwMVVxDMJ19KXnJ1Qg7e5VMy2MbT%2BG9L%2BJsqWyOIiQkrJeyThiUhUz7c6RvN0Ud4l5Cb5%2Faw8UGpgESEsyhmnky9ndCLZN5LcWyWPgSQDH5PKZDz0ILVHFkDq9r3wz3r6XmptmfVtWJQ3bHqopP8Gnig0xU3GZ4bHvJx51WlJ%2BVR3kl6L5WLAn4No5MQpGFtZMsqG0ENRyz6LUr%2BqkxlUKquHTc8uOHooAOQqsEPQgjodvgBhWGdRXz3DFOMEoPmg0%2BA5bZK7X6dwziDyoAbjdkQw9vCtBD717gVjI7OB34qi7yMqWT%2BIFmgfrj3rCfde6Rc8q2C41YlXNEg%2B4BElZ6tRIKinA%2B1RqILv1fH3IVdgmATB9ybGinUtKJjPrdd%2B9nPClgij86sW%2FUMXAxjaKtwgR%2BLj9pfUHFEx2Cb6K1FlLBfpVJ%2BEo9VkRe9r3l%2FGotPEmCGrJJVrzRj95OAqzCdtTNyw7NfSu2%2FMIidghLuYAYk6JOSFMT5FQ07Sr%2F7SO8lv7eTjV%2BbzB4Q%2Bp6E6kdR1eysKE9lRemu6kyQ9%2FDteV6loqc%2B1tFz0FIw%2B%2FqWvQY6pgHvTeb6m7s0vzLgfrGA%2FAc6j9Sjn6KvlnwSS83o4wBgkJbacz4x4eaZsQ%2BxT%2FDbaxdx6lMNprOvDKTgByy78Mei50U5eVXe%2FBJrTgfnJrHMOFVvaL6xoAo6eNZ%2B6mfmUqR7NHkcBtYQjXjnnCWTrBP31v6E%2FNxcqoNt5RLKcpdI8Z7i4c5pstbGwoPkf7IkAe6a2LoWcdbolCeA5PoYqrV0HhKN8KnH&X-Amz-Signature=ff7effc2c7148cceea156bd7b27f163f7feca7c4e2b3245fdfbaa90cc077c564&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
