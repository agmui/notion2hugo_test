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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX6ZYUSX%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf%2FYcERKG%2FHr2azBAL%2Bbmi2Blmo27qxXc2M2faNzUnvwIhAKYcDCnUYKoVeNXQqHMn7isu0o5ONUAf%2BK1mb9ZV8gcqKv8DCE4QABoMNjM3NDIzMTgzODA1Igx48bNlfzaHgmyvqocq3APKhuo77G2bEtdMrt9YJtFCq%2FMqkw8YIx8xIpI6jOEbb78geZeEGE4%2FfrHSuCyzOYE7XycSRA71aJcudv2%2BQqVs2RWMs9XZsXqeiQH3ASUH2VmOhHtnQiyMB6IGSI3Gfh2tmdTz%2BeToYskzA04kx5iJHs%2B2AWZPwZ%2Bhc2h0iCO6XsRKwCXr800HBIRG6kU4gdRZnBHV6QlClumlXqincXh4FnwfbvfKOzFjP4V%2BYTddAMeCwquC5S6B4DwLKUfsaOzwmiT3TsotYDd9z3GJ3KM5bAKxFU1ZssnHZ6s1FABRysw3lQF8onnR5maA0fiiJTe0S4BYEETMr48EAV5ZoGicdbL4lIvOgz2E6GSa5VBCdDKC5qRGyqaqhkyrvgsqfmSG4XJZltDCxn0LbX9A%2B1irqwAGytAl0J2Kq15DPLuNtRZbeiXHxuA9KQbVqNxq%2Bit%2FoduZ0bXu1vVQCf5W3SyvEdE9Db5CVW4cPxBTC7sfyWPP2Xk1Zilc3PRxMXxoo2NxEJlEBMX65kxyUdOzUc0acOliQ4HQLRt6IQPATopcZHIjgVJLctiaW3Ow1mZR89WstoEsA1AsvN%2Bq%2F9q4aFtHCrrZNZ0PW1NsFmFF8Ev76g%2B2b1qEXCy0C%2FSPMDDKxJ7BBjqkAYTOi%2BuitALuNtCKInE%2F9qm%2FezHFzJdfJAZUeGP05NSaHFfbJW6mHJ%2Bfz2uTpCQwpzvm4maHJk7dIsl3u32xeR377%2Bu0fQDBwVwqulZaKCdtc%2F%2BT9XI88ajTSW1vgkLzxwO0lbZ1Af3uCCFqKAJextMT1IPDTgRs9H0WQK2KHvcsM3D%2FNqlXJ5LHoMsKn1SRIQPJ03ZWdRTqpnaUIBFCJ9PQE7YH&X-Amz-Signature=5747d5dd3e5b56d5f026704074d5a985eecc0b408a09c83b73caa8cd5ffe228a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX6ZYUSX%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf%2FYcERKG%2FHr2azBAL%2Bbmi2Blmo27qxXc2M2faNzUnvwIhAKYcDCnUYKoVeNXQqHMn7isu0o5ONUAf%2BK1mb9ZV8gcqKv8DCE4QABoMNjM3NDIzMTgzODA1Igx48bNlfzaHgmyvqocq3APKhuo77G2bEtdMrt9YJtFCq%2FMqkw8YIx8xIpI6jOEbb78geZeEGE4%2FfrHSuCyzOYE7XycSRA71aJcudv2%2BQqVs2RWMs9XZsXqeiQH3ASUH2VmOhHtnQiyMB6IGSI3Gfh2tmdTz%2BeToYskzA04kx5iJHs%2B2AWZPwZ%2Bhc2h0iCO6XsRKwCXr800HBIRG6kU4gdRZnBHV6QlClumlXqincXh4FnwfbvfKOzFjP4V%2BYTddAMeCwquC5S6B4DwLKUfsaOzwmiT3TsotYDd9z3GJ3KM5bAKxFU1ZssnHZ6s1FABRysw3lQF8onnR5maA0fiiJTe0S4BYEETMr48EAV5ZoGicdbL4lIvOgz2E6GSa5VBCdDKC5qRGyqaqhkyrvgsqfmSG4XJZltDCxn0LbX9A%2B1irqwAGytAl0J2Kq15DPLuNtRZbeiXHxuA9KQbVqNxq%2Bit%2FoduZ0bXu1vVQCf5W3SyvEdE9Db5CVW4cPxBTC7sfyWPP2Xk1Zilc3PRxMXxoo2NxEJlEBMX65kxyUdOzUc0acOliQ4HQLRt6IQPATopcZHIjgVJLctiaW3Ow1mZR89WstoEsA1AsvN%2Bq%2F9q4aFtHCrrZNZ0PW1NsFmFF8Ev76g%2B2b1qEXCy0C%2FSPMDDKxJ7BBjqkAYTOi%2BuitALuNtCKInE%2F9qm%2FezHFzJdfJAZUeGP05NSaHFfbJW6mHJ%2Bfz2uTpCQwpzvm4maHJk7dIsl3u32xeR377%2Bu0fQDBwVwqulZaKCdtc%2F%2BT9XI88ajTSW1vgkLzxwO0lbZ1Af3uCCFqKAJextMT1IPDTgRs9H0WQK2KHvcsM3D%2FNqlXJ5LHoMsKn1SRIQPJ03ZWdRTqpnaUIBFCJ9PQE7YH&X-Amz-Signature=bcdc3f94d7011b9149e3cb2833515178aa7a2123bbb15939a5e58a63a327558c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
