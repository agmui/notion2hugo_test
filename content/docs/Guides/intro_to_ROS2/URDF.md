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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAE3OKDS%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl3CClscEndJb5q0miE6qe3wZ43eriELqgZdRaYThJGwIhAKd0q1%2F8lF4vzLTaQ9e69BpWUERw6Hp2wmbX2pyIr8fhKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrI8l84dnK4bd5eaMq3AMapFh0uUkNSY%2BRid9SzmgLCUa3tN0MsvALpWepOsHGBzD59PIhOJunl2UwGY2Y8YGrrSRUUF6KlgB%2B2pSbpJ2gb8vxnDOdItxqwvMgBjX6RS6rER3BsSd6oI4NFIPcQ5AegTBUYDMXd3OKALyVlYXiQGy1nLnHZ4iX6oUtX%2FnY37LfmzAJRI3B6204YvQU6fLQYu5bQBwtB5HbaPGbtpNxeWstRT8hVmHSJ1vm09oSDIEtcPfkovkt6MMjyyS0UekT%2Brwdhj3wBXBvuLZHpU0TUoLeuRThM7gHLA3oIAOt3PxjoZTH28orf23OvQgFYfc1QHImAl4%2B9rrqjT7O2RI96dmO%2BXDZGDR30NuofzkWsSYZcevr7QmjvR8RQ8M0haBru23k7Myb58HFhEZplWJ8ZP6D3jN8yyRhU0ILcCUGGVQSMev7%2Bwzd9mgIUW77AhrW185rtkCgJTyJAi2%2BUWXKHqKo5zcWDNjDG4JUFU5OpoWRFy9xGu%2BtitvRQvCBum8c0DWfRXlHVfuWvstDDcXnrtS4kAhoEaOoyw5fzQOUg79DUG%2FeE7WFAUuADc1d1gnJrwoJJbYPGkAx0RdGb8EGKd1tfnC5rSmeEeUVzVImKmK120GmcTreiBTHGjD1vqC9BjqkAaBeuHm6FzFP8xuxLlfE3wCRRlgxgJdhr%2FMAOg9ddoKGJtUQN0ObYpVpQHZjDMMV9ur1cxsdAvRRpDe9kDGzciv7xTzL94VrtCWYJcDab8OrvlrCApzxj4XCNf188487wAg82QjYWXORgvhtJEteFGpW2tx3qqKvtKTEh5mcOlhfMrlG88G6zg3ojAgwqOhAOZTsElxoeAQG4dvYv6HCgt3L%2FmI%2B&X-Amz-Signature=4d8f7c8736b493ce8b0eef6523650587e9e0df390ce6e5925f13c0e76a155a2d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAE3OKDS%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl3CClscEndJb5q0miE6qe3wZ43eriELqgZdRaYThJGwIhAKd0q1%2F8lF4vzLTaQ9e69BpWUERw6Hp2wmbX2pyIr8fhKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrI8l84dnK4bd5eaMq3AMapFh0uUkNSY%2BRid9SzmgLCUa3tN0MsvALpWepOsHGBzD59PIhOJunl2UwGY2Y8YGrrSRUUF6KlgB%2B2pSbpJ2gb8vxnDOdItxqwvMgBjX6RS6rER3BsSd6oI4NFIPcQ5AegTBUYDMXd3OKALyVlYXiQGy1nLnHZ4iX6oUtX%2FnY37LfmzAJRI3B6204YvQU6fLQYu5bQBwtB5HbaPGbtpNxeWstRT8hVmHSJ1vm09oSDIEtcPfkovkt6MMjyyS0UekT%2Brwdhj3wBXBvuLZHpU0TUoLeuRThM7gHLA3oIAOt3PxjoZTH28orf23OvQgFYfc1QHImAl4%2B9rrqjT7O2RI96dmO%2BXDZGDR30NuofzkWsSYZcevr7QmjvR8RQ8M0haBru23k7Myb58HFhEZplWJ8ZP6D3jN8yyRhU0ILcCUGGVQSMev7%2Bwzd9mgIUW77AhrW185rtkCgJTyJAi2%2BUWXKHqKo5zcWDNjDG4JUFU5OpoWRFy9xGu%2BtitvRQvCBum8c0DWfRXlHVfuWvstDDcXnrtS4kAhoEaOoyw5fzQOUg79DUG%2FeE7WFAUuADc1d1gnJrwoJJbYPGkAx0RdGb8EGKd1tfnC5rSmeEeUVzVImKmK120GmcTreiBTHGjD1vqC9BjqkAaBeuHm6FzFP8xuxLlfE3wCRRlgxgJdhr%2FMAOg9ddoKGJtUQN0ObYpVpQHZjDMMV9ur1cxsdAvRRpDe9kDGzciv7xTzL94VrtCWYJcDab8OrvlrCApzxj4XCNf188487wAg82QjYWXORgvhtJEteFGpW2tx3qqKvtKTEh5mcOlhfMrlG88G6zg3ojAgwqOhAOZTsElxoeAQG4dvYv6HCgt3L%2FmI%2B&X-Amz-Signature=ad68201db4a1fdc1dd26a5a4289183a64a6103e4f1e877e697b756f60215af3b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
