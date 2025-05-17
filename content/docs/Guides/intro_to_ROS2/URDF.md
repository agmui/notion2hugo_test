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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDKVWGZ3%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T190147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3khlEUUZL0T4dP5ct%2FB94qdj0kf7NL%2B68Obkd4hEkvAiEA%2Fz6CTR%2F1LuqRl3cFd6EVtL7ww8D0TIFqojmdPdslcaoq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDLT1SWwzWfq0cPQ64CrcA8sqtGqsIgYRHWbOB0iD1k%2FFTzqOyZX2vgBjyb87U%2B12jfr5RQTcxsKnfX2kOKNMtTeoyX%2BHJQ70w8wsx0C1A%2BHLu6%2FuXbbC%2F9hopnrly6wxEpIcDU%2FWq6lVQ46shWVCi8t0bm8gxl%2BNy4AN1G0YaI%2B%2FB%2B6zPOrNWPFEJ803luMcYJ7kNVvGxxSkw6ZGZ4AVgwhj0x4UsILn4nQEXBptHwIsvK8arMcjfKakV1xl3qMuGR1Yfy0%2F9m%2BOig5Fod%2BXrTjZr77xOwo0i657oKU0PDNLauboGMyWWA1N8d%2FPq7IQJDajd2%2B78rAAHGVm%2BXhJVhtfyR6WwPh4gYu5xc4nRauY1672fTm0%2BOKY%2BzjpLWSeLDe4s4ZmKf3ns4xocIUK4Uct1RVNf7D%2FCOYZgY34SOo6noJh18gX6rq2G7bbwnci5uVYOtrQ8IFmucLzG%2FGg1sx1pbkfh1%2BefIa1IOM6YzkvHiRKqYrmtqjx8x1sLf9pOiOUQVBEJpB8dQtcM7F0xFUK9nrLI2pELI4S4INS7dcjkrigE4uFcOUnjmDPVKh3eFkZxhWe4lu19I%2FCcaAE34DUk%2FVi83bzFcBs0GxghuNkdcqucRGN%2BWLrDgv3I1Y6QcQzf4R4qXyuToPiMMK1osEGOqUBLmC9a8Rw6gCxAKQBD%2FjQeqNBnrZi8rD8qQxJ%2B9utUKlCLOZym0hXMH9cvivLNATiXKTIUP7YwuqGy86nWckH6RjCpdOOZ18eckUfXAtguC4Kw%2FNJ3Hp0iRsP8MUHfQnKXAer8MUn8lbfQyL5LKEvlRMZfcExwcZUwb2bFwX8GzIEy7KsBXeVgpY8SQ0Ws0AuQwpZ7qgUgK4vAXOmM%2B%2B1rCZVrXlQ&X-Amz-Signature=f582f3059d2717a619bc9fc433392cadb5bb908914d4f1611b94b8a4e74779b9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDKVWGZ3%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T190147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3khlEUUZL0T4dP5ct%2FB94qdj0kf7NL%2B68Obkd4hEkvAiEA%2Fz6CTR%2F1LuqRl3cFd6EVtL7ww8D0TIFqojmdPdslcaoq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDLT1SWwzWfq0cPQ64CrcA8sqtGqsIgYRHWbOB0iD1k%2FFTzqOyZX2vgBjyb87U%2B12jfr5RQTcxsKnfX2kOKNMtTeoyX%2BHJQ70w8wsx0C1A%2BHLu6%2FuXbbC%2F9hopnrly6wxEpIcDU%2FWq6lVQ46shWVCi8t0bm8gxl%2BNy4AN1G0YaI%2B%2FB%2B6zPOrNWPFEJ803luMcYJ7kNVvGxxSkw6ZGZ4AVgwhj0x4UsILn4nQEXBptHwIsvK8arMcjfKakV1xl3qMuGR1Yfy0%2F9m%2BOig5Fod%2BXrTjZr77xOwo0i657oKU0PDNLauboGMyWWA1N8d%2FPq7IQJDajd2%2B78rAAHGVm%2BXhJVhtfyR6WwPh4gYu5xc4nRauY1672fTm0%2BOKY%2BzjpLWSeLDe4s4ZmKf3ns4xocIUK4Uct1RVNf7D%2FCOYZgY34SOo6noJh18gX6rq2G7bbwnci5uVYOtrQ8IFmucLzG%2FGg1sx1pbkfh1%2BefIa1IOM6YzkvHiRKqYrmtqjx8x1sLf9pOiOUQVBEJpB8dQtcM7F0xFUK9nrLI2pELI4S4INS7dcjkrigE4uFcOUnjmDPVKh3eFkZxhWe4lu19I%2FCcaAE34DUk%2FVi83bzFcBs0GxghuNkdcqucRGN%2BWLrDgv3I1Y6QcQzf4R4qXyuToPiMMK1osEGOqUBLmC9a8Rw6gCxAKQBD%2FjQeqNBnrZi8rD8qQxJ%2B9utUKlCLOZym0hXMH9cvivLNATiXKTIUP7YwuqGy86nWckH6RjCpdOOZ18eckUfXAtguC4Kw%2FNJ3Hp0iRsP8MUHfQnKXAer8MUn8lbfQyL5LKEvlRMZfcExwcZUwb2bFwX8GzIEy7KsBXeVgpY8SQ0Ws0AuQwpZ7qgUgK4vAXOmM%2B%2B1rCZVrXlQ&X-Amz-Signature=42278c8353bbb1408ad15111081ae96b6ef9ae555cb981c5c8f89c18b9eb027e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
