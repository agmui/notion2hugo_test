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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633CF2WW5%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCICh6CfjRGADFb%2FLzXuk2rFbQi0pRHxnZd5usURmeITDXAiEAoJP4XQeJwBIH6WsvmcCKm0q0PEeYWXxtm5l4xULQlqQqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAzdSN3uDUjUskvROSrcAwiLwBSeJVOzqsunhPIGjZGFFZvlPZwI9R5OQWUoJNXPiY%2BkpA2GLOaAWEBRP%2F4gEw%2BFUBB5Juvt%2FiDQvmEWhtss6SFamJ7r3KB0ayoOdoxT58cuedDP6RH4bJtwZnbElcOU3m%2BIUa90LaQOBM5LvPQlm2VK%2BYqNNLx5Jx6gk6DLiE1lUfK2TZOqMHEkpV5ITUY7FUGIorXHUaRy9Dp7f0dLCAtxD7ZUx3Jb1i4pGd5bJVEclFx6mUaefkQDbMXjeE1kIaY99q08P2ADIWuPUnXlr9amzzFQs7aelEro1uOdz5vk%2FXkP9wPbPv4pcEstyYn4thHXDEMdjXpY9ixD5YGnyhIFucVBCAsahQeVdqSP9fUqAGzDdMmFi07iI%2FfDUoHF%2FNiqN%2BMpPty5e3YSrdpkvFwiPisldiosrlY0UwYhk15alFOO%2FQCbCAKqgcNQEUyOJ%2BFxBZYFiXVfKm%2BOuGutvUrJtDA45yOYA9%2BzCCUXYgTv3Pjy6gjzjHVY0v%2FrYEKT8JaxMv%2B%2B1cAysbO8OxKdF9V%2FUozHVrEMd%2BZsRekJO3Y6RgLO2vb3Wkl7mFkvsQBEszVeUNtR%2B0Rq2sdUmh105RnYmPtMe521R8xSSC8FdNRQ30lI2b1XgIgQMJqR78EGOqUBlu0uqWAPGvIrTahfIlv6UvHOkQgdx6kDR0qaqm%2BcYuTrDSbuiH4zZoArtQByBU5gVbgsF2OdN38jZXvjFNlRatNiGJPucduvb%2FEH7s8kEyKhlR59ilFUd9PHGYaejr%2FTHdl6YfmSwrcLis0oyR7r9mEy%2BM6YuwOURMHjSYy2OyjBBL6IuudfA1tmIWo9Th2yZq5fiN8CyVZDlUqQ2xl1ASGrafL1&X-Amz-Signature=766053bd427b784eb229e54284222a5e7d31e2d7cd1c9362dec75a6e2eeb8af5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633CF2WW5%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCICh6CfjRGADFb%2FLzXuk2rFbQi0pRHxnZd5usURmeITDXAiEAoJP4XQeJwBIH6WsvmcCKm0q0PEeYWXxtm5l4xULQlqQqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAzdSN3uDUjUskvROSrcAwiLwBSeJVOzqsunhPIGjZGFFZvlPZwI9R5OQWUoJNXPiY%2BkpA2GLOaAWEBRP%2F4gEw%2BFUBB5Juvt%2FiDQvmEWhtss6SFamJ7r3KB0ayoOdoxT58cuedDP6RH4bJtwZnbElcOU3m%2BIUa90LaQOBM5LvPQlm2VK%2BYqNNLx5Jx6gk6DLiE1lUfK2TZOqMHEkpV5ITUY7FUGIorXHUaRy9Dp7f0dLCAtxD7ZUx3Jb1i4pGd5bJVEclFx6mUaefkQDbMXjeE1kIaY99q08P2ADIWuPUnXlr9amzzFQs7aelEro1uOdz5vk%2FXkP9wPbPv4pcEstyYn4thHXDEMdjXpY9ixD5YGnyhIFucVBCAsahQeVdqSP9fUqAGzDdMmFi07iI%2FfDUoHF%2FNiqN%2BMpPty5e3YSrdpkvFwiPisldiosrlY0UwYhk15alFOO%2FQCbCAKqgcNQEUyOJ%2BFxBZYFiXVfKm%2BOuGutvUrJtDA45yOYA9%2BzCCUXYgTv3Pjy6gjzjHVY0v%2FrYEKT8JaxMv%2B%2B1cAysbO8OxKdF9V%2FUozHVrEMd%2BZsRekJO3Y6RgLO2vb3Wkl7mFkvsQBEszVeUNtR%2B0Rq2sdUmh105RnYmPtMe521R8xSSC8FdNRQ30lI2b1XgIgQMJqR78EGOqUBlu0uqWAPGvIrTahfIlv6UvHOkQgdx6kDR0qaqm%2BcYuTrDSbuiH4zZoArtQByBU5gVbgsF2OdN38jZXvjFNlRatNiGJPucduvb%2FEH7s8kEyKhlR59ilFUd9PHGYaejr%2FTHdl6YfmSwrcLis0oyR7r9mEy%2BM6YuwOURMHjSYy2OyjBBL6IuudfA1tmIWo9Th2yZq5fiN8CyVZDlUqQ2xl1ASGrafL1&X-Amz-Signature=edd7c35a9de75edaef64b83a485063ac07a876d6c97410c11771d75b9d19d7d4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
