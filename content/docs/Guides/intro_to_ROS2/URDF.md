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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPDFZA65%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIBHDitiB3h%2BNJu3vxUCV5dZQk036QgkboKg6eYBEHHjDAiEArDSZP5q6S5mS0N8x2BbNRDXZdsmLQ%2Fhk%2BQv8dQTyR8UqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLG2ofK0L8z03U33QSrcA6wK9dHExtv9p7dki1H%2FDJSzhpYvanXidDAfqWhs9H9Wyx9o6n3xAYc3nYHzI7UzcmTJZ7agfMmBNpOIXyoqXYfcbwwjFg1aR2wyVBYdMTpUtj81YM4ljNwTGGl2W5Zrjd0UGQN5dSD1DH3O77X89rcbE%2BFAKp0Q4%2FTsSZxB6WG6FczkD%2BuWaS8JzAJ0AZKLodH1VZ2QE7trYD6NLcyNisXCGhj7wN5P1WiAGXyIrRAANKlyRV55%2FoytJhqlZm3bRMDEFys4UeMlqQEijNpbFtodh7OpiU0DcAg%2F6eCAY2orqrB9c43JYju%2Fx9ZwZuqIA6ZXmJfcCg7UarRtxLQdpCkEgYcj0ZGZNwnSN8Lm%2B2nh5bXQ7wWtv%2FH54xWUWOgfJcVkTKVdARJGHNUS%2FoxHezc8wVe4DQdayNGKb2txJVvytfsmIfxCEJoVARFOPSkLM%2BnhJbl0fV1G3pEF7SkcEsg%2Fvdkct2NfUpwPayr6iHDa00RipTtjPXVfdMPksmbDR8IgMyyRNbO2QRhrBiB2cvwV5xFUV2dP90HjrrfqwvxWvEhrmchnYjBpPa0JNPbXkUrTGQYN40xlCp0H4OP4MVxsSv3bJ%2FHckofBVsy8dEe228dECB6zvdNs2SzeMIvmqb8GOqUBcJ2Q6FlgGQDdHRYtscabtcLP6XRr7k6opYtKjLWMSDMUOu1IHYZblwkRlKgWSpkQCXAyGS8h4TsFWmH9t%2BV%2F7mVvGogx1E00yigR5FC%2BRjFYLzq79l9xXRWR73e2jVRf5VcHBFd66AueBjubIksL3Q3CXYzSdbz%2BweQLhBf7O429U5g7rtWnuQzAxiIUl9QqIFKStoLx2wSRNr5WqE2Pq3%2FdOfT6&X-Amz-Signature=b284b7bbf907fb6d693b27c36bbc11735d4d1d2c2ecacb0d0e05e06522f2f027&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPDFZA65%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIBHDitiB3h%2BNJu3vxUCV5dZQk036QgkboKg6eYBEHHjDAiEArDSZP5q6S5mS0N8x2BbNRDXZdsmLQ%2Fhk%2BQv8dQTyR8UqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLG2ofK0L8z03U33QSrcA6wK9dHExtv9p7dki1H%2FDJSzhpYvanXidDAfqWhs9H9Wyx9o6n3xAYc3nYHzI7UzcmTJZ7agfMmBNpOIXyoqXYfcbwwjFg1aR2wyVBYdMTpUtj81YM4ljNwTGGl2W5Zrjd0UGQN5dSD1DH3O77X89rcbE%2BFAKp0Q4%2FTsSZxB6WG6FczkD%2BuWaS8JzAJ0AZKLodH1VZ2QE7trYD6NLcyNisXCGhj7wN5P1WiAGXyIrRAANKlyRV55%2FoytJhqlZm3bRMDEFys4UeMlqQEijNpbFtodh7OpiU0DcAg%2F6eCAY2orqrB9c43JYju%2Fx9ZwZuqIA6ZXmJfcCg7UarRtxLQdpCkEgYcj0ZGZNwnSN8Lm%2B2nh5bXQ7wWtv%2FH54xWUWOgfJcVkTKVdARJGHNUS%2FoxHezc8wVe4DQdayNGKb2txJVvytfsmIfxCEJoVARFOPSkLM%2BnhJbl0fV1G3pEF7SkcEsg%2Fvdkct2NfUpwPayr6iHDa00RipTtjPXVfdMPksmbDR8IgMyyRNbO2QRhrBiB2cvwV5xFUV2dP90HjrrfqwvxWvEhrmchnYjBpPa0JNPbXkUrTGQYN40xlCp0H4OP4MVxsSv3bJ%2FHckofBVsy8dEe228dECB6zvdNs2SzeMIvmqb8GOqUBcJ2Q6FlgGQDdHRYtscabtcLP6XRr7k6opYtKjLWMSDMUOu1IHYZblwkRlKgWSpkQCXAyGS8h4TsFWmH9t%2BV%2F7mVvGogx1E00yigR5FC%2BRjFYLzq79l9xXRWR73e2jVRf5VcHBFd66AueBjubIksL3Q3CXYzSdbz%2BweQLhBf7O429U5g7rtWnuQzAxiIUl9QqIFKStoLx2wSRNr5WqE2Pq3%2FdOfT6&X-Amz-Signature=0aadfadb7d40f43da9b1d68402606fb6c3862f67b18da053ced52f302b33e7fe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
