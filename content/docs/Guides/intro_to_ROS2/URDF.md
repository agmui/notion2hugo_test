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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QF6KI7X%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIA%2FuWZns2cKxpCeLPiIAiJEiqWsN8SMqDf%2FUIjVKChm1AiAv57s0bbnNIXf0vLM7hPlON2%2FxUcw56TX2NcR93apy4iqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCwoa6kinc5IJkA1VKtwDj13UdphhwlK9%2FxhfP9WoFqUKrjpGdC4OPTiWSzCk49bJSDBv5jFGDhVKZjccPyekcniaBeBJPgyKhlLtsqIkQ4%2B2sFgMpN4OrxNevFRd%2FCyhN2ylBQYt%2Bi%2BXP3nuKQHATUllPaneNqTjPa1SdArxH0MB1NVzJNtQfwlzQpMgSyNuGo8gcaR0XnueVK7MdlG0hHYz%2FodIWMiCmbkuT47a1Dq72ePr3b2ZSFHa7JmOmnTWOwfzVUBmz277wS7CvWA%2FbqQwQx0tR9MrDn5h0WFZwDJ8vM3vOT7SJC8EL2UW00ukv8K1brCi8QgBessDPz13Lto%2Bre5W86%2BiUAhJiCVJ%2FPMnOJmWtszI%2FSl6iiTmUBN6OawNf6tQIjQ48Wa7sP3%2F76xRBav4dGS5f8DSaSwlSacWCaUMwV5c5o9cKTrmoaoKSOaKgnBq93bzAhaYp198nQ7ldvRrLM%2Bmi0jiuF8%2FPQ0pkehHTx5CS1eGqv5HfnzQ2KJba1fl3m7JFbKE5i64KeD%2FqEmMnZsaZOekjkOKzwIBSaJrnLDZLDm6KJB77zcaBX%2BviMscBASB71%2Ft0cL8f%2FxjsPcmpBEoHZ3p9dVvySz84hJIu%2FNGq6x5D8p8blnsyVZb%2Ff%2B3V7vUKSQwz7qLvgY6pgFADKVoRjDHc0TGGY8f%2FlBmM2mVx%2BxxeEP%2BhfvTg8zbDnkowSWpOUurwNrB7bCg5NRUuZjBHeX%2FVG%2FwamphBqFd3uvgG5J86SA1NwAsx3kbDwNLsgJTZ7SJ72xGgtoz7rbW%2FenfsbyPLkRo7cpR3%2FUo30yKS2lllv%2BP%2FC8115W%2B9tYk1oeTWXKOcwvBCEe7PgDRhSdZ4YMD7UBoJ24fPH4BFWKGXLak&X-Amz-Signature=e58215ac90797f4386e95578e97f65a779fa3c22c5416fbf73d271edf7c1bc34&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QF6KI7X%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIA%2FuWZns2cKxpCeLPiIAiJEiqWsN8SMqDf%2FUIjVKChm1AiAv57s0bbnNIXf0vLM7hPlON2%2FxUcw56TX2NcR93apy4iqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCwoa6kinc5IJkA1VKtwDj13UdphhwlK9%2FxhfP9WoFqUKrjpGdC4OPTiWSzCk49bJSDBv5jFGDhVKZjccPyekcniaBeBJPgyKhlLtsqIkQ4%2B2sFgMpN4OrxNevFRd%2FCyhN2ylBQYt%2Bi%2BXP3nuKQHATUllPaneNqTjPa1SdArxH0MB1NVzJNtQfwlzQpMgSyNuGo8gcaR0XnueVK7MdlG0hHYz%2FodIWMiCmbkuT47a1Dq72ePr3b2ZSFHa7JmOmnTWOwfzVUBmz277wS7CvWA%2FbqQwQx0tR9MrDn5h0WFZwDJ8vM3vOT7SJC8EL2UW00ukv8K1brCi8QgBessDPz13Lto%2Bre5W86%2BiUAhJiCVJ%2FPMnOJmWtszI%2FSl6iiTmUBN6OawNf6tQIjQ48Wa7sP3%2F76xRBav4dGS5f8DSaSwlSacWCaUMwV5c5o9cKTrmoaoKSOaKgnBq93bzAhaYp198nQ7ldvRrLM%2Bmi0jiuF8%2FPQ0pkehHTx5CS1eGqv5HfnzQ2KJba1fl3m7JFbKE5i64KeD%2FqEmMnZsaZOekjkOKzwIBSaJrnLDZLDm6KJB77zcaBX%2BviMscBASB71%2Ft0cL8f%2FxjsPcmpBEoHZ3p9dVvySz84hJIu%2FNGq6x5D8p8blnsyVZb%2Ff%2B3V7vUKSQwz7qLvgY6pgFADKVoRjDHc0TGGY8f%2FlBmM2mVx%2BxxeEP%2BhfvTg8zbDnkowSWpOUurwNrB7bCg5NRUuZjBHeX%2FVG%2FwamphBqFd3uvgG5J86SA1NwAsx3kbDwNLsgJTZ7SJ72xGgtoz7rbW%2FenfsbyPLkRo7cpR3%2FUo30yKS2lllv%2BP%2FC8115W%2B9tYk1oeTWXKOcwvBCEe7PgDRhSdZ4YMD7UBoJ24fPH4BFWKGXLak&X-Amz-Signature=5cce2a66b164e951c8e71725d9d14525fb7d31d9150f2e6c62ef1b5bf0a43694&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
