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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QYZELXT%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCJ%2Fw%2FyfOkSK6ZgFiXsGZYBScIElf4ydANI4HbgnzloJwIgE8o9kdqj%2F2W3pYo9NwCGedflyXQ6hOjvULyARGXjEDkq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKkLsRfhpOJIl%2BIiSyrcA6hoZncsh7QJeXkbbdxCYrT%2FphQ7autLMEE0uq9poBNkBVxTzmkd5KS2JUdKkkRaEjfvJcBdzgZFvqSssSFDYRfIQZ%2Fmx3ji6y%2FCGEIxi2bMP2wt4ewSQmVsQAdYWugXaYpIgLBOXZTUaeYkVqIK7ZFQ17YAs3GcWBXCnau56wkSybjACBuGmm6M8Ldy1TRm%2BmQxLnJrtDJsTm0Q3%2BFEQqnjIOQ7Iz6H%2Fo5jL8eDkk5mzaWm3cvIvAm7zqH0DkEwzNYd23BdcTjFaSXxY3u9adozs9ZUUcgvF2XDH159woa3viURCnl%2Bv6IFZ3g1aJ2xZIgVV762Il2U07epRGcQKTqn4Vou3v1XgD7scvGFdF%2BajvqzqqMA2TSm5cWWlrMAmb5fH32Qe5meNuDofXbhMJYqPm6MXjCXr1N6gjheDRPx0zWE0e2sp5xpPaUrwOkb8BA4SlqQYXLXxecAwiDmHOBDeHVzWyPAbu9seu4ydtgrgLvnenFwB0LCGvfXFX9Hq9f9R5yUq1onAMxmz25ddNkBmSj%2BQYkBw7%2FC06rCNTpI%2F17seuFRcO9MgdxoR6Cry9Yj%2Bpc%2FaFE%2BzPhWQux%2B9gnhbMvn4VrMhZIB7WJCAqEd0aegTn1K1wJI0D1bMM2E1MMGOqUB87GPUdCQf1htvsTgLEItHNG0mhAqVmQ2nioqlPWAg1Qzq8UkPiZMzu9x1hJwihi1Y%2FZPb%2BhxvU8ai9t1BREL774dTd78a72uHNUhPVqDYLGBDqDZO8hXtmoMfiZEPVIK0kzaCdOe92a4mWobzpP3RcVTIuxHZ7LrJbHO8EdKD%2BYos5xg8hfchk8Ig5jio5QlajhbV9fyR0GQV%2FYGJXiJTDdGKn%2Bw&X-Amz-Signature=9df1c49595712bcd5e308b5f2154e02d88ba8f4ba8b261980f9e7bcdee93f263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QYZELXT%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCJ%2Fw%2FyfOkSK6ZgFiXsGZYBScIElf4ydANI4HbgnzloJwIgE8o9kdqj%2F2W3pYo9NwCGedflyXQ6hOjvULyARGXjEDkq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKkLsRfhpOJIl%2BIiSyrcA6hoZncsh7QJeXkbbdxCYrT%2FphQ7autLMEE0uq9poBNkBVxTzmkd5KS2JUdKkkRaEjfvJcBdzgZFvqSssSFDYRfIQZ%2Fmx3ji6y%2FCGEIxi2bMP2wt4ewSQmVsQAdYWugXaYpIgLBOXZTUaeYkVqIK7ZFQ17YAs3GcWBXCnau56wkSybjACBuGmm6M8Ldy1TRm%2BmQxLnJrtDJsTm0Q3%2BFEQqnjIOQ7Iz6H%2Fo5jL8eDkk5mzaWm3cvIvAm7zqH0DkEwzNYd23BdcTjFaSXxY3u9adozs9ZUUcgvF2XDH159woa3viURCnl%2Bv6IFZ3g1aJ2xZIgVV762Il2U07epRGcQKTqn4Vou3v1XgD7scvGFdF%2BajvqzqqMA2TSm5cWWlrMAmb5fH32Qe5meNuDofXbhMJYqPm6MXjCXr1N6gjheDRPx0zWE0e2sp5xpPaUrwOkb8BA4SlqQYXLXxecAwiDmHOBDeHVzWyPAbu9seu4ydtgrgLvnenFwB0LCGvfXFX9Hq9f9R5yUq1onAMxmz25ddNkBmSj%2BQYkBw7%2FC06rCNTpI%2F17seuFRcO9MgdxoR6Cry9Yj%2Bpc%2FaFE%2BzPhWQux%2B9gnhbMvn4VrMhZIB7WJCAqEd0aegTn1K1wJI0D1bMM2E1MMGOqUB87GPUdCQf1htvsTgLEItHNG0mhAqVmQ2nioqlPWAg1Qzq8UkPiZMzu9x1hJwihi1Y%2FZPb%2BhxvU8ai9t1BREL774dTd78a72uHNUhPVqDYLGBDqDZO8hXtmoMfiZEPVIK0kzaCdOe92a4mWobzpP3RcVTIuxHZ7LrJbHO8EdKD%2BYos5xg8hfchk8Ig5jio5QlajhbV9fyR0GQV%2FYGJXiJTDdGKn%2Bw&X-Amz-Signature=38ff716e91ee88fec74b31002b005a47b7c12e0fe2ea5aa39e778332dfa01045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
