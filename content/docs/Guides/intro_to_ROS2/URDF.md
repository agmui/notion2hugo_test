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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJL6Q23Y%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T181206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQCNH7m%2FO6zO4XUN78X5UZI%2BP2UQyrDqls7DZCM9TWII6gIhAN2r4Hx5JfuWDiMpqAFAiuc5yGqghuTF5i5WitJ0oBh%2FKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6VLg4o%2Bfndr5b%2FQ8q3AOFYVSmUxCndWet2R%2FAtTsAQ4LtBSq812sr64V0w4h42EhExN93ew%2FG2OOZIED9b514jUpr%2FdxBaHudt2YkMEFWZ%2FfcYfjneVzhLlh4OtQeSlJwItIeUslKsUU2fAw6Nvn%2B%2BRY7L5GlSFlby93BIduzK%2B9XAEZi%2Bov0J%2Fim3kXdKKnv5JtwZVIi4kRpm87Bp4pbSIEMz2ffsV2WHJDKseYHCoKQfLSGP1F%2B8VSKemiHA69AI9eCe0twCTupahiJErI%2FAKOuTnupWEjEETY3B%2FCG036bRtpg9oUKSOnDVRhoKIYClnPKkljmzZKtKL532Nv4bUDcsqsUwrti%2B7xwthpyGwCWI%2Bk0A3RnT5y%2BRBqmN2kRRwTQwr%2F4Ie7gojXGjQTLm3OwY69zo3UiZAEp9nZZ36FKzz%2FFsVSjILDtFUJJvHuI%2FrYtHvXyVu2GBU2KIMUNVRxSk9%2FvbIP7M6GP%2BiyYPSCiBDuu%2Bwj86JB8Va1V7%2BuB72GhL8yHxQuzwj%2FaxdeMfqbnHOc2wlX%2BND2AaacgWaVVyje7Iz%2F6QQ47xpsBT4MSg0lma1dVE47VFTwVSXjvn2JYyb7txEZt09b8ixGer6NCYtG5e8uwr50JmsQX4s%2BFERsHue2MWKhxODCJn5%2FABjqkAXIfOU%2BnmmyJ3QNlP44rAUXKWyJ0FwCXqion3FjmhzY7AyNjjTs4pQAO0SUtg68Clah2NUUk1c%2BAK5ZkYdzAvBsRmdRm6bXbnmeKdn6HLu%2Faj7Qhq3BgxYlfE62eTYcV9M3vN5yDurxG7Sk4iSumPNrB7I%2BdwYvQwRH3WV8JoHXhX4p8Z7JacPN0qX8QTi3P8IwC0co9LfQzUoCu58rItesM9nLW&X-Amz-Signature=eba01bd795bae970caab8ef42ee5d69d52776c5d83f48f6cddc6b66195f4cc54&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJL6Q23Y%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T181206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQCNH7m%2FO6zO4XUN78X5UZI%2BP2UQyrDqls7DZCM9TWII6gIhAN2r4Hx5JfuWDiMpqAFAiuc5yGqghuTF5i5WitJ0oBh%2FKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6VLg4o%2Bfndr5b%2FQ8q3AOFYVSmUxCndWet2R%2FAtTsAQ4LtBSq812sr64V0w4h42EhExN93ew%2FG2OOZIED9b514jUpr%2FdxBaHudt2YkMEFWZ%2FfcYfjneVzhLlh4OtQeSlJwItIeUslKsUU2fAw6Nvn%2B%2BRY7L5GlSFlby93BIduzK%2B9XAEZi%2Bov0J%2Fim3kXdKKnv5JtwZVIi4kRpm87Bp4pbSIEMz2ffsV2WHJDKseYHCoKQfLSGP1F%2B8VSKemiHA69AI9eCe0twCTupahiJErI%2FAKOuTnupWEjEETY3B%2FCG036bRtpg9oUKSOnDVRhoKIYClnPKkljmzZKtKL532Nv4bUDcsqsUwrti%2B7xwthpyGwCWI%2Bk0A3RnT5y%2BRBqmN2kRRwTQwr%2F4Ie7gojXGjQTLm3OwY69zo3UiZAEp9nZZ36FKzz%2FFsVSjILDtFUJJvHuI%2FrYtHvXyVu2GBU2KIMUNVRxSk9%2FvbIP7M6GP%2BiyYPSCiBDuu%2Bwj86JB8Va1V7%2BuB72GhL8yHxQuzwj%2FaxdeMfqbnHOc2wlX%2BND2AaacgWaVVyje7Iz%2F6QQ47xpsBT4MSg0lma1dVE47VFTwVSXjvn2JYyb7txEZt09b8ixGer6NCYtG5e8uwr50JmsQX4s%2BFERsHue2MWKhxODCJn5%2FABjqkAXIfOU%2BnmmyJ3QNlP44rAUXKWyJ0FwCXqion3FjmhzY7AyNjjTs4pQAO0SUtg68Clah2NUUk1c%2BAK5ZkYdzAvBsRmdRm6bXbnmeKdn6HLu%2Faj7Qhq3BgxYlfE62eTYcV9M3vN5yDurxG7Sk4iSumPNrB7I%2BdwYvQwRH3WV8JoHXhX4p8Z7JacPN0qX8QTi3P8IwC0co9LfQzUoCu58rItesM9nLW&X-Amz-Signature=e334fc8449656985cb16bae3f46dfd1cc34c1d76c7070bc7db27eefaff6af723&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
