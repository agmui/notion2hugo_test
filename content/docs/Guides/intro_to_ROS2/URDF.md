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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L4E3RKF%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIr8h%2FPUd7ZqT0zz2asDwVs7uWhS4oFz1EmARtu4t76AIgGRO9ldoegEhYMNt1lQODV4CpNhP%2FR3GE5t%2Ffgej%2F3wIq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJFkTm%2FpACPa8CdA5yrcA138J3M1oQB9T3h4z6fKjs2lusjAqjWL6pb8TU2oFSqqreNfAK6Q7nJtOoo%2BcJn6JN3vK1jwzPMaZpSu4PSNMs2yfQ88Sksl0e8siGYplubazyBZIIlQhIVQa7XKSMbk1FaE5K6HjLSDvHr56r2LK973I%2Bj7pjldhsQyYLsVzyzc3cxOD4L2bmXKd5kPyaAhjS2Wc9oLzdNxQ26CiUGvxM7ffW2EEqssXzPyXu1i0%2FlpVu%2FSoV6EWMnPBF8H5nwmBPidU90uVbNaVm%2Bv4HpRzX%2F3sec11DEHU4Q0BpM8FIUnd%2BpeKEpeo1qiguH3h%2FEJsuijcGt1fS3ehfhWtihzNCm9I%2Br9P2FG9BQuTyUw49A19kdJDwlyhuA8vDzjBlAPilnmvLPrq86LTNCOnBUzhjrXvnTp1ieXre%2BOXnOzDlj2I5jEQI63pMn1VcxvLtw%2BpoqEYchGz1NX%2B5HeTyF63CZIC%2FN9KuLIzww947PMWMVOlUeisZ6GZF7mUnI7hCx7dpx6na2%2B64e0sVacWMYAPRZi8XvCDCDl5LHSa5fRjgrNec0zmkdjlAsoQB9iaKOshJZ%2BZ5V1J209WLWcBRA0rViNX2yqCSYtNc3MWpNJTdRa9EZ2bgKJQpsqtNaaMLSUvMAGOqUBwXlsz4fp01Y6iECBFNfhJF1hnfaBxcN7bCJuUr1sLICV5XCoiQ97crnyWWzw60ejgJtKpEF4GMlWDIJWBY%2BzT7O08bWynk0CFn2qyFkoxF%2BA8HQwvg9IImICOBFY%2FSouRsN9wAtFGktnvhJp%2FkyIlxQIBCOOBXLOtcBPwk9AEh1BpraY1BUKtcsXQg9ftlF%2B7qXllKY6DzAKDO1hggBqFmIziOgx&X-Amz-Signature=fea5a83ccbb021b03cc0de78dd0c7d6c553197c34ad9400ce472bdbb1984f6fc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L4E3RKF%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIr8h%2FPUd7ZqT0zz2asDwVs7uWhS4oFz1EmARtu4t76AIgGRO9ldoegEhYMNt1lQODV4CpNhP%2FR3GE5t%2Ffgej%2F3wIq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJFkTm%2FpACPa8CdA5yrcA138J3M1oQB9T3h4z6fKjs2lusjAqjWL6pb8TU2oFSqqreNfAK6Q7nJtOoo%2BcJn6JN3vK1jwzPMaZpSu4PSNMs2yfQ88Sksl0e8siGYplubazyBZIIlQhIVQa7XKSMbk1FaE5K6HjLSDvHr56r2LK973I%2Bj7pjldhsQyYLsVzyzc3cxOD4L2bmXKd5kPyaAhjS2Wc9oLzdNxQ26CiUGvxM7ffW2EEqssXzPyXu1i0%2FlpVu%2FSoV6EWMnPBF8H5nwmBPidU90uVbNaVm%2Bv4HpRzX%2F3sec11DEHU4Q0BpM8FIUnd%2BpeKEpeo1qiguH3h%2FEJsuijcGt1fS3ehfhWtihzNCm9I%2Br9P2FG9BQuTyUw49A19kdJDwlyhuA8vDzjBlAPilnmvLPrq86LTNCOnBUzhjrXvnTp1ieXre%2BOXnOzDlj2I5jEQI63pMn1VcxvLtw%2BpoqEYchGz1NX%2B5HeTyF63CZIC%2FN9KuLIzww947PMWMVOlUeisZ6GZF7mUnI7hCx7dpx6na2%2B64e0sVacWMYAPRZi8XvCDCDl5LHSa5fRjgrNec0zmkdjlAsoQB9iaKOshJZ%2BZ5V1J209WLWcBRA0rViNX2yqCSYtNc3MWpNJTdRa9EZ2bgKJQpsqtNaaMLSUvMAGOqUBwXlsz4fp01Y6iECBFNfhJF1hnfaBxcN7bCJuUr1sLICV5XCoiQ97crnyWWzw60ejgJtKpEF4GMlWDIJWBY%2BzT7O08bWynk0CFn2qyFkoxF%2BA8HQwvg9IImICOBFY%2FSouRsN9wAtFGktnvhJp%2FkyIlxQIBCOOBXLOtcBPwk9AEh1BpraY1BUKtcsXQg9ftlF%2B7qXllKY6DzAKDO1hggBqFmIziOgx&X-Amz-Signature=eab33111396d552da1aa7775f105313010aab10d5b454e5a63533e30ebd77ab3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
