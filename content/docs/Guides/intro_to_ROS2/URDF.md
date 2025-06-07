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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLOCQV5A%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T081036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxRhggCfbFR8YkCqEjXff32wRxEjI16M1EWTPWLQIQywIgU0D0bnV%2FPypgPd4ZpG1LS31ovJ7t264krc1CLgWEHTgq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDN%2FjjdKyZo5CdOjmpyrcAym2UZN19FyqNdbn6d4LNCr0PrAWvvTwQTjclY8iPwLzAHXuy11qyVTJdeSgtFs7zuain0knuaVtM8qGCfFwwueVm5pR8UgbyQ9KoSXRXjAYM7zuXcLeaTkmG%2FqMeVQ%2FlXBmPn6fFSx92dMs3VUqLTIgIVIPuoE%2BpnxEZNlzSvvazEFZtGQeV%2FMvwHELnXAsgGWItouQ9RvQKchVm1X6BVZvL3R01m6U%2FB%2FSNH098b1pcIBH%2Bg9RtsZsVgOOPdqqsljBYZI3RysqwyNlQNCDt5cK2Nq5EpnjopWUyydok%2BHlFFCw1qGahV9IThdlWsxXfllr9xEIdn9QpSumoj%2FhtQmryJ3nWXe7e9UtZQXBpRo2CwN0HzEiqfKybsvQ8JcHXaqul95ID9ky%2BjA%2FskI%2Fzr0KLP2IoXImyR04unY1wZ3uULXdsSqrma1IwYq9Zs7hCxZSp1Lfs52%2BazZLKU4JDlHAsPbf%2FMYMMD13txeybgzWS1qnOHgSM85sVY2LrK0fwdAwSP7m1N42dFCkNmiJQja2jfMzBTm9vsr0JJqx%2B3cfANyTTd0HkN8RNZUI9fV3tUwxpBtlniuzf4XU9VsY3e%2BHEKCV19vuqn4WKTU7%2BFnyoshKTlyGLbDB74I3MPO3j8IGOqUBpYunM7dPUrfwvz7wUZokTY3zNDiFP6ytKV2hFY6v5dfQo2EOjgzlNZRbtpmX%2FcJsZBU9QPh6ZvonM9UXpaS6tvjkzxM8zZR46k92H0DXYOk23surIUSUNolcRVy29zPGa%2Fld6lK7HfS3MEDi6sLZZ%2FpSZmmTEWCjhUIvQWflSV9HYXWw7IKA%2F3V%2BOJ1yskQPfjTNm4HPtBWUt6ybTq9UEAXilffE&X-Amz-Signature=b439882342dde6a489fc313b863cb0154004b3d5ee68a2fae2189af4d4a18b5a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLOCQV5A%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T081036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxRhggCfbFR8YkCqEjXff32wRxEjI16M1EWTPWLQIQywIgU0D0bnV%2FPypgPd4ZpG1LS31ovJ7t264krc1CLgWEHTgq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDN%2FjjdKyZo5CdOjmpyrcAym2UZN19FyqNdbn6d4LNCr0PrAWvvTwQTjclY8iPwLzAHXuy11qyVTJdeSgtFs7zuain0knuaVtM8qGCfFwwueVm5pR8UgbyQ9KoSXRXjAYM7zuXcLeaTkmG%2FqMeVQ%2FlXBmPn6fFSx92dMs3VUqLTIgIVIPuoE%2BpnxEZNlzSvvazEFZtGQeV%2FMvwHELnXAsgGWItouQ9RvQKchVm1X6BVZvL3R01m6U%2FB%2FSNH098b1pcIBH%2Bg9RtsZsVgOOPdqqsljBYZI3RysqwyNlQNCDt5cK2Nq5EpnjopWUyydok%2BHlFFCw1qGahV9IThdlWsxXfllr9xEIdn9QpSumoj%2FhtQmryJ3nWXe7e9UtZQXBpRo2CwN0HzEiqfKybsvQ8JcHXaqul95ID9ky%2BjA%2FskI%2Fzr0KLP2IoXImyR04unY1wZ3uULXdsSqrma1IwYq9Zs7hCxZSp1Lfs52%2BazZLKU4JDlHAsPbf%2FMYMMD13txeybgzWS1qnOHgSM85sVY2LrK0fwdAwSP7m1N42dFCkNmiJQja2jfMzBTm9vsr0JJqx%2B3cfANyTTd0HkN8RNZUI9fV3tUwxpBtlniuzf4XU9VsY3e%2BHEKCV19vuqn4WKTU7%2BFnyoshKTlyGLbDB74I3MPO3j8IGOqUBpYunM7dPUrfwvz7wUZokTY3zNDiFP6ytKV2hFY6v5dfQo2EOjgzlNZRbtpmX%2FcJsZBU9QPh6ZvonM9UXpaS6tvjkzxM8zZR46k92H0DXYOk23surIUSUNolcRVy29zPGa%2Fld6lK7HfS3MEDi6sLZZ%2FpSZmmTEWCjhUIvQWflSV9HYXWw7IKA%2F3V%2BOJ1yskQPfjTNm4HPtBWUt6ybTq9UEAXilffE&X-Amz-Signature=e21c4618ad1a7644c166e54307da3ccb5ae49ef38f3a9a51755373bbde30be87&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
