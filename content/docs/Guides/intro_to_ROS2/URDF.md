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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3QYDW2J%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIACp6VjsMYXw3Fpsxr4fkXbgyI51io8eolqJ%2FZjtCqPuAiB6wIJjqNCaV82F0MfwT3fTIdwofBfD2xLO92Kq7FXCgSqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2NT3j1TX%2FBbqe1CTKtwDliifDXEyY2%2F4a%2FlATqK%2FmOkPZSVMv1bUUmqGvCK4bcE1aCJ6dpIootDV6ySrPXBzzE8nnzzNb2TFcMINH8Pf0kyaszFmwMscpjTJ3UCk3ZogOh4Pbsq9CpA7L7R0YGbLIJNnmhDfX16LIyU9kdOEt9kSV4rrFEZtBXpnOOy0u2pS6YLkyBdnqTBqwpMAP2lyYYQlOpu1cn7PHoyjRvJb4d4iZXsaWTlLhT7r3Rl%2BHbYgQyUJ42%2BnNxctwuP1g1GKvZFt775qp0az%2BiGDA32Z%2BYCwEcRTr5RH5Z8deapACGyHHZI7obe3oWchF3ObLRdFpeh0NxPXYcvioIgyuSVR7IHtsphFmO8u7bLNdGlddCvuLKordNA7QLteN%2BWzRUgzX8byFJ1isGz4QBIgXcDnoIaiXwFnaUVuYzasnOqwsFu4kvDQ5k5GIh82b8o9xrSkdlT58WZylHTQiwCkkqEHk%2F%2FBV1Fad5B7jgxkscHTqzLaRa802KMnQ82N1EogH2KcjDEVOww33h8ezyTuz44F0mEd2L%2FFT3bcovc3ZdnwaanPmuS5vnKvCmvGXGWKW6s0DyUupHOmdAMrTfFazX0ndT7P2aCfKipxecpP3T103wonZaaHygvYJX2GbkAw4NnlvwY6pgHJzfILcBk90azbppETCzWazZZflGsPJFjviEwymXoPAoovlaaBLsQQESDC0C0Ol1LZTVFUKs816g%2BE7vJuO%2FIFSRClVgepPEOx%2BEfs6ondX7qe7zaJa7Tdl6S1CZbO180V%2FBaLgnhVoWIVEjyAYr04vooMEbfs%2BRteHjcWUJ10yw%2F2zlECs5xg%2BH1gboWPE8m4xLXdiHNdbFO5SinKEjxExdcHQcGQ&X-Amz-Signature=68bd290faec8579daac5021c3259b077dec8551b16c6548f37903908543b58c9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3QYDW2J%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIACp6VjsMYXw3Fpsxr4fkXbgyI51io8eolqJ%2FZjtCqPuAiB6wIJjqNCaV82F0MfwT3fTIdwofBfD2xLO92Kq7FXCgSqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2NT3j1TX%2FBbqe1CTKtwDliifDXEyY2%2F4a%2FlATqK%2FmOkPZSVMv1bUUmqGvCK4bcE1aCJ6dpIootDV6ySrPXBzzE8nnzzNb2TFcMINH8Pf0kyaszFmwMscpjTJ3UCk3ZogOh4Pbsq9CpA7L7R0YGbLIJNnmhDfX16LIyU9kdOEt9kSV4rrFEZtBXpnOOy0u2pS6YLkyBdnqTBqwpMAP2lyYYQlOpu1cn7PHoyjRvJb4d4iZXsaWTlLhT7r3Rl%2BHbYgQyUJ42%2BnNxctwuP1g1GKvZFt775qp0az%2BiGDA32Z%2BYCwEcRTr5RH5Z8deapACGyHHZI7obe3oWchF3ObLRdFpeh0NxPXYcvioIgyuSVR7IHtsphFmO8u7bLNdGlddCvuLKordNA7QLteN%2BWzRUgzX8byFJ1isGz4QBIgXcDnoIaiXwFnaUVuYzasnOqwsFu4kvDQ5k5GIh82b8o9xrSkdlT58WZylHTQiwCkkqEHk%2F%2FBV1Fad5B7jgxkscHTqzLaRa802KMnQ82N1EogH2KcjDEVOww33h8ezyTuz44F0mEd2L%2FFT3bcovc3ZdnwaanPmuS5vnKvCmvGXGWKW6s0DyUupHOmdAMrTfFazX0ndT7P2aCfKipxecpP3T103wonZaaHygvYJX2GbkAw4NnlvwY6pgHJzfILcBk90azbppETCzWazZZflGsPJFjviEwymXoPAoovlaaBLsQQESDC0C0Ol1LZTVFUKs816g%2BE7vJuO%2FIFSRClVgepPEOx%2BEfs6ondX7qe7zaJa7Tdl6S1CZbO180V%2FBaLgnhVoWIVEjyAYr04vooMEbfs%2BRteHjcWUJ10yw%2F2zlECs5xg%2BH1gboWPE8m4xLXdiHNdbFO5SinKEjxExdcHQcGQ&X-Amz-Signature=c3034733063abbf32163920e0cc8ed2c0902489315af8aee97c39f61423d4230&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
