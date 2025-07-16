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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PA2EJ75%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCArfVWlj4SdhvtlyDoOwJA08D2h%2B6CTtliwdeltmoOhgIhAJov9b8giuMICPV4VNMv0mIVl2H6adTaHOvX67b4SyAgKv8DCGYQABoMNjM3NDIzMTgzODA1Igw3VMmUHYh1Fx7R9L8q3APjqOspvujwMxktnTpCShWxfaRUpjwLL5x3okYk4f5kDzoi3x0yRiQT2Bbf1QlepM66GnaIAybQHaJjcm71CtgJ%2Bl1f5AZL6%2Fb%2FzIbmQRnbdFbkKkAEjdODOulNSBx3pZO8FaAr36XBW7m7OXiKKtc2WeOd62jRZHY5mwPA8fLOsR0YBzSHMCnmzqDQHhQQhvfDRAIZ1DgEV6IR5%2BTWuYKhKOLTZaguVr8RLZHCtDmaPryglFyQwLw9cspv%2FsDsVaqaik5nVpinKZDkqH%2Fv9rE9J45s82G7hBSPzKh1EKEqSsw6CGsO0MkulreI5bZ%2Fvo8LmmYeyo7eMV4%2F9bJ6RF2mmeGIxIldOsymMAnPXpIQzHGLm2VDcetZVUih7RwoSGuMa7sNfUMr4kdDMBGpWOb5T91LJV8QY4J0Bz82tY2lJLsuOXza4EPJIkafGV9GfNA0zfUpTj4zQ7C6rbKpIS40T6aGAn88GRPRkijHSqI3AENYmQ%2B0hlGjFxIXVrSweuBJR6EvsI8BFpDKcmgIiquYwVn8NlQ4ooW6dF%2FzVrJRG%2Br7f%2BtOYU5g1Nwas2hqEgPxpjOF%2BliLnr%2BwYl5g%2BNqmRbJEtca5LbqZg8QOUETIZ2PgJpzAuH4xAD1SGDDqluDDBjqkAaqvbsmYfy022P0f1NDQSs3Qd7Km1CJH1fYTq6I8jd0SxGU5Ur9J%2F5WuI6DdG%2BOkt8QZt70QvNpGXOzsUbvLEYihO5oxvrC%2FyGJOGWNGM0Xsa%2FQZb%2FxoFgRbwgxY2rNqi94rFrbb7wURIiDLAxVuxGuvqUF7vtIhet0vjjoUlwwLc%2B%2FgY7JGjGSL3WTqwnIvJqjSJBydi3oi6fVyU7g0dXzQw7RP&X-Amz-Signature=96ac0cc5bde41952646300f52349319ca7ecc5ab554b722a9c97e4a5f0f10d53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PA2EJ75%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCArfVWlj4SdhvtlyDoOwJA08D2h%2B6CTtliwdeltmoOhgIhAJov9b8giuMICPV4VNMv0mIVl2H6adTaHOvX67b4SyAgKv8DCGYQABoMNjM3NDIzMTgzODA1Igw3VMmUHYh1Fx7R9L8q3APjqOspvujwMxktnTpCShWxfaRUpjwLL5x3okYk4f5kDzoi3x0yRiQT2Bbf1QlepM66GnaIAybQHaJjcm71CtgJ%2Bl1f5AZL6%2Fb%2FzIbmQRnbdFbkKkAEjdODOulNSBx3pZO8FaAr36XBW7m7OXiKKtc2WeOd62jRZHY5mwPA8fLOsR0YBzSHMCnmzqDQHhQQhvfDRAIZ1DgEV6IR5%2BTWuYKhKOLTZaguVr8RLZHCtDmaPryglFyQwLw9cspv%2FsDsVaqaik5nVpinKZDkqH%2Fv9rE9J45s82G7hBSPzKh1EKEqSsw6CGsO0MkulreI5bZ%2Fvo8LmmYeyo7eMV4%2F9bJ6RF2mmeGIxIldOsymMAnPXpIQzHGLm2VDcetZVUih7RwoSGuMa7sNfUMr4kdDMBGpWOb5T91LJV8QY4J0Bz82tY2lJLsuOXza4EPJIkafGV9GfNA0zfUpTj4zQ7C6rbKpIS40T6aGAn88GRPRkijHSqI3AENYmQ%2B0hlGjFxIXVrSweuBJR6EvsI8BFpDKcmgIiquYwVn8NlQ4ooW6dF%2FzVrJRG%2Br7f%2BtOYU5g1Nwas2hqEgPxpjOF%2BliLnr%2BwYl5g%2BNqmRbJEtca5LbqZg8QOUETIZ2PgJpzAuH4xAD1SGDDqluDDBjqkAaqvbsmYfy022P0f1NDQSs3Qd7Km1CJH1fYTq6I8jd0SxGU5Ur9J%2F5WuI6DdG%2BOkt8QZt70QvNpGXOzsUbvLEYihO5oxvrC%2FyGJOGWNGM0Xsa%2FQZb%2FxoFgRbwgxY2rNqi94rFrbb7wURIiDLAxVuxGuvqUF7vtIhet0vjjoUlwwLc%2B%2FgY7JGjGSL3WTqwnIvJqjSJBydi3oi6fVyU7g0dXzQw7RP&X-Amz-Signature=fa5c53fa632cc6359ac038655561e8c7e963c32feba7d4b5557980e28979dab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
