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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K2PEA64%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIFcOx1ktEL8h7CL%2FoIl9xFtkpmgs08lkHrvI6Xk%2BNIRfAiEAg9CdyLyyrinwQSM6kgTZA66qqjR1AbP6cijrQi1V5AcqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExsqv6su3rpwD50%2FSrcAxzJfsL8FQwz3lLhQ8wXI6jkjvk7W4kyS12JaGYmFPb7sMOhAL770uoK1W5qQKSpQREZOsG1yhGsWhySWMrQaAq1doFf5h84i5MaUX8bCJ5EEXPey1DkMQnohoFvppbt7trTPqpBX0LC3HAtGOzquZyx7HEA1gfO%2BExnORgmTr9o4y7DeisucxptsQ1KYVqt0x83scpsOK6ZaSFqIBIDaNDm992HpwUUkyf1ZzYFsgOEZOjrLtenUsrjWqq4ltFX1jJ5FqthsTVf69NT9%2B4bnqrumyRa4pSqRDYF4EONn9x4guE1gDNEVu8cKMRTCi%2BqzwzlE2v9iWB9%2FYvi8%2BGg6H%2FAXTOoiEa0lKDgCQp1c3jSum7wQPsqfMzheKHUeYaG787ZTkjXfrswQOrmThgX3mVnbrxlDfAyIGC6y2s5sGVynZbTdSHtzqaeLNmOUzKwr5sGTjU9%2FXaKyeRlB9o7PAdaR%2FkqNf%2FpKdfMff7AMK0RlByYgEC%2BmBFc0JXF87db6WDvmiK%2FDbmqPJsIHyF9M2fXtNRLGMfvCrhXcLZHzf%2FnVzVUmty8IkJHzCMnWilImiSHel%2FQz6vjrb7D1Ntdqz9M6SHEPtI%2FLaWGt%2BjmqJmZKtfyuYP9E%2Bw4YVOvMOGN38IGOqUBjWQERb6wYjdq2SLqxKgg9jPRAwdlTnYLVI%2B6lbSEne1zBUyndpDROcs7%2BSxIgtq9s0W0e3YpooHbHAI6VApOUinIqGcBg2E%2BrhmomRKGjEbA1fGzBz3wrRIOJuLXMvd9VO9JaY5siwm3KeWefTsRYIyiBxlr%2F0rfR15aAH4vZgysAFlMV7YT%2BgfD8gFp5vG3OZEhzFGk6E%2B3pg7wDRl1RRpLA7bL&X-Amz-Signature=0a5916f3be635271fd13e126d2c4d9901268cc6c09b0a356e05be26a67718504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K2PEA64%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIFcOx1ktEL8h7CL%2FoIl9xFtkpmgs08lkHrvI6Xk%2BNIRfAiEAg9CdyLyyrinwQSM6kgTZA66qqjR1AbP6cijrQi1V5AcqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExsqv6su3rpwD50%2FSrcAxzJfsL8FQwz3lLhQ8wXI6jkjvk7W4kyS12JaGYmFPb7sMOhAL770uoK1W5qQKSpQREZOsG1yhGsWhySWMrQaAq1doFf5h84i5MaUX8bCJ5EEXPey1DkMQnohoFvppbt7trTPqpBX0LC3HAtGOzquZyx7HEA1gfO%2BExnORgmTr9o4y7DeisucxptsQ1KYVqt0x83scpsOK6ZaSFqIBIDaNDm992HpwUUkyf1ZzYFsgOEZOjrLtenUsrjWqq4ltFX1jJ5FqthsTVf69NT9%2B4bnqrumyRa4pSqRDYF4EONn9x4guE1gDNEVu8cKMRTCi%2BqzwzlE2v9iWB9%2FYvi8%2BGg6H%2FAXTOoiEa0lKDgCQp1c3jSum7wQPsqfMzheKHUeYaG787ZTkjXfrswQOrmThgX3mVnbrxlDfAyIGC6y2s5sGVynZbTdSHtzqaeLNmOUzKwr5sGTjU9%2FXaKyeRlB9o7PAdaR%2FkqNf%2FpKdfMff7AMK0RlByYgEC%2BmBFc0JXF87db6WDvmiK%2FDbmqPJsIHyF9M2fXtNRLGMfvCrhXcLZHzf%2FnVzVUmty8IkJHzCMnWilImiSHel%2FQz6vjrb7D1Ntdqz9M6SHEPtI%2FLaWGt%2BjmqJmZKtfyuYP9E%2Bw4YVOvMOGN38IGOqUBjWQERb6wYjdq2SLqxKgg9jPRAwdlTnYLVI%2B6lbSEne1zBUyndpDROcs7%2BSxIgtq9s0W0e3YpooHbHAI6VApOUinIqGcBg2E%2BrhmomRKGjEbA1fGzBz3wrRIOJuLXMvd9VO9JaY5siwm3KeWefTsRYIyiBxlr%2F0rfR15aAH4vZgysAFlMV7YT%2BgfD8gFp5vG3OZEhzFGk6E%2B3pg7wDRl1RRpLA7bL&X-Amz-Signature=8f211fd64bc824bee8f6fab9de3a01d48df524b9874549042d2cc4b178a8bb79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
