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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M4JDQT6%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEe9ctHcMnfm%2ByyjidbwT5akZDJ0kxPvRPdW0hRdJJSSAiEAkVObv26uo7cef9%2F8GLsL7E1JSxOViSUSKBjFMSAw5tkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDAqTRzY85PhdAKTblyrcA9GoXprhUwbhQ637nBT3Hk%2FyO15gi4RqIJgXB%2F0zEZvCM1mHWfmT8FvoPTsEn2R7unyShTBW03H550euZjTia1YRnPINOiHy0VRZGOW1CeqsCAYKIiNpr4TBDfsuSg3ljSUHYFbawsdlOGM4drkWJNEygBfv2KHq0f0l0v6TNvlv6cmK3Aasy1bgjmY9zJ0PS23WwJhBuW2xXQ0sGMNn7qpw0PluO65mWwlkJ8qsAXRRaRLFbI04h0cA8VJQVe7emnJKt2K%2BV53xyWy9qedK8peR0Su2Ia%2BEVjRF6SzQido%2Fs41ivVNLj0oe4xCPZWZMAHriiNFwTRraiotadfoHeh9Vd0myDraXuwwc%2FmmRgS8W8iyFao8DvD1Zs%2FLekBRvyrpqSizYLMTqWaEkXf2kmDszlsexlXhcwnb1TrVd94HjqHY4RrbFxaFEKXo9CZEYvkCsXdAXsSa0ZCPihAS9Pz4NLQ8lCadRDF62vDIX0%2F8Yf0VHl3LqOwSx3iDVtzD9g5YhJ02wWom%2BubXiZvC2%2FNGsfPNE%2Bw59uJwj4WkKU7gzcQUEFWTfStjkKgvzALFnd4up1cmCQ5Ho7AEyP6AZOOjI3DlgmHMtpImNbimI4lB1MBj561TOryGdbra%2BMMakzcMGOqUBkdSjWju1z%2FNceklIZN6jF6wlzceh70j0hU1CJxkG9fDGZtRUyzRNrq3IbPTC%2FZtIPa7oU7WEOZ8A12opwGfmrdJ3OfCpm3GGNnn7GkFfQyozKlvw3aJD1%2FTnLY3L%2BGnNortVlkB9cHA9rK%2BlzdCOYwp1lfIhn54uHZibPNfgMY56A5uUEBXKgoDp0DEOqoGbNjSZwYf0SbfLhugO9MM2Aokd9gHF&X-Amz-Signature=b7cab6d910373aa472ef55c3b40671729d44e45202b76fd6f9f77ece23b36126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M4JDQT6%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEe9ctHcMnfm%2ByyjidbwT5akZDJ0kxPvRPdW0hRdJJSSAiEAkVObv26uo7cef9%2F8GLsL7E1JSxOViSUSKBjFMSAw5tkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDAqTRzY85PhdAKTblyrcA9GoXprhUwbhQ637nBT3Hk%2FyO15gi4RqIJgXB%2F0zEZvCM1mHWfmT8FvoPTsEn2R7unyShTBW03H550euZjTia1YRnPINOiHy0VRZGOW1CeqsCAYKIiNpr4TBDfsuSg3ljSUHYFbawsdlOGM4drkWJNEygBfv2KHq0f0l0v6TNvlv6cmK3Aasy1bgjmY9zJ0PS23WwJhBuW2xXQ0sGMNn7qpw0PluO65mWwlkJ8qsAXRRaRLFbI04h0cA8VJQVe7emnJKt2K%2BV53xyWy9qedK8peR0Su2Ia%2BEVjRF6SzQido%2Fs41ivVNLj0oe4xCPZWZMAHriiNFwTRraiotadfoHeh9Vd0myDraXuwwc%2FmmRgS8W8iyFao8DvD1Zs%2FLekBRvyrpqSizYLMTqWaEkXf2kmDszlsexlXhcwnb1TrVd94HjqHY4RrbFxaFEKXo9CZEYvkCsXdAXsSa0ZCPihAS9Pz4NLQ8lCadRDF62vDIX0%2F8Yf0VHl3LqOwSx3iDVtzD9g5YhJ02wWom%2BubXiZvC2%2FNGsfPNE%2Bw59uJwj4WkKU7gzcQUEFWTfStjkKgvzALFnd4up1cmCQ5Ho7AEyP6AZOOjI3DlgmHMtpImNbimI4lB1MBj561TOryGdbra%2BMMakzcMGOqUBkdSjWju1z%2FNceklIZN6jF6wlzceh70j0hU1CJxkG9fDGZtRUyzRNrq3IbPTC%2FZtIPa7oU7WEOZ8A12opwGfmrdJ3OfCpm3GGNnn7GkFfQyozKlvw3aJD1%2FTnLY3L%2BGnNortVlkB9cHA9rK%2BlzdCOYwp1lfIhn54uHZibPNfgMY56A5uUEBXKgoDp0DEOqoGbNjSZwYf0SbfLhugO9MM2Aokd9gHF&X-Amz-Signature=ddfb98c05d179a479072e870cf2645ee76379a0ef1a8c85d85833d2dc08da119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
