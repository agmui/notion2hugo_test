---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2024-12-03T18:43:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/URDF.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EJJ4FVJ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCRuuzgEyZw8dH0rEBkon%2FssYhyBwY7ri405s4gKfnUuAIhAKXLrCEzy7oAaG0RLLk4BKF51JsHxwFWBsyhuL9R3llGKv8DCD4QABoMNjM3NDIzMTgzODA1IgzaxxPbrbExKnyFpZ4q3AMyHdxXopngvnZi6L8Wrkk%2Fv%2Bl1eUb6f11kszDAuqAau6D3XOw2intJ6dvfh3Fn2hpKf8oH530cd6JDIPCF1gWYtERLph3Fv0YRh8zG18tPzKdHJTOzOYtNLnRQD%2BRYTUuqJVLLeYB%2FRWQaZIBQJ0XRvjyprBQxOp5lvYKhZDP28fAfof7wbd9JGPbokYHztVCn4QOSKRmIb0wy8D%2Fa7rKSHC%2B%2FY5mhn1lX%2BD6sjIGYLFQvPh4OIVD1GklaPwI6B5oRSi6CpjMlQQRTzZk5L5Vor5rmDwG9NvUyR6G6W%2FbUM9UqD04hsGd%2F%2FnJtssu5XqqlSnBM6t5%2F8QK2xDF2rIdAUU%2B1DpM9TpkWWcsexzZxnQACwqV94VHHX8%2FIgkoZCK%2BZ3xPLTNs3dfF5VMFQWXGa5xfajy0mVhBjnOTmuZoVBf1dnQ%2FIifAaa3T9sUfisWfDdxX0wp9jPCfokYUjcBJo%2BvIroa5C8sIIF5ex5JGl%2BQSmZdsCmCqatLCD35ijMQ43flXvSkCyGUua82Y2miLBRvVuiXBoBlXDNUlPLq0iNTyBB6H6citFZWFMZeShfQESlctfLiXUA4UCw0VEcQpq9kXE7YaIWLePoTvQSUYtaNhoNDjTfkbt5Tu3MzCq34u9BjqkATvyygFEPZFc%2BcsrH2%2FeQgFWqZLxTUUsv%2FAaB09g6liRpaH7igZh0wqNy4gHC99qfLdv4x8qwZ4TktAOM3J273ObXPvDi7hGy2Phjz81LrK77lTbAqXFLUjxvtdNcc2UsL6nePnn3FGbE5KJS0WTy3i2ngn%2BcMMils6%2F3WHZvPrhMA3foXQjNd8DR2br9SyCxMXE88zvkczY88gvJnakJieI2GQ0&X-Amz-Signature=fab16a1ac03bb71c1b849690c9045ba8d6f4010b7ac81a4d5299edd382b683ae&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EJJ4FVJ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCRuuzgEyZw8dH0rEBkon%2FssYhyBwY7ri405s4gKfnUuAIhAKXLrCEzy7oAaG0RLLk4BKF51JsHxwFWBsyhuL9R3llGKv8DCD4QABoMNjM3NDIzMTgzODA1IgzaxxPbrbExKnyFpZ4q3AMyHdxXopngvnZi6L8Wrkk%2Fv%2Bl1eUb6f11kszDAuqAau6D3XOw2intJ6dvfh3Fn2hpKf8oH530cd6JDIPCF1gWYtERLph3Fv0YRh8zG18tPzKdHJTOzOYtNLnRQD%2BRYTUuqJVLLeYB%2FRWQaZIBQJ0XRvjyprBQxOp5lvYKhZDP28fAfof7wbd9JGPbokYHztVCn4QOSKRmIb0wy8D%2Fa7rKSHC%2B%2FY5mhn1lX%2BD6sjIGYLFQvPh4OIVD1GklaPwI6B5oRSi6CpjMlQQRTzZk5L5Vor5rmDwG9NvUyR6G6W%2FbUM9UqD04hsGd%2F%2FnJtssu5XqqlSnBM6t5%2F8QK2xDF2rIdAUU%2B1DpM9TpkWWcsexzZxnQACwqV94VHHX8%2FIgkoZCK%2BZ3xPLTNs3dfF5VMFQWXGa5xfajy0mVhBjnOTmuZoVBf1dnQ%2FIifAaa3T9sUfisWfDdxX0wp9jPCfokYUjcBJo%2BvIroa5C8sIIF5ex5JGl%2BQSmZdsCmCqatLCD35ijMQ43flXvSkCyGUua82Y2miLBRvVuiXBoBlXDNUlPLq0iNTyBB6H6citFZWFMZeShfQESlctfLiXUA4UCw0VEcQpq9kXE7YaIWLePoTvQSUYtaNhoNDjTfkbt5Tu3MzCq34u9BjqkATvyygFEPZFc%2BcsrH2%2FeQgFWqZLxTUUsv%2FAaB09g6liRpaH7igZh0wqNy4gHC99qfLdv4x8qwZ4TktAOM3J273ObXPvDi7hGy2Phjz81LrK77lTbAqXFLUjxvtdNcc2UsL6nePnn3FGbE5KJS0WTy3i2ngn%2BcMMils6%2F3WHZvPrhMA3foXQjNd8DR2br9SyCxMXE88zvkczY88gvJnakJieI2GQ0&X-Amz-Signature=82b0d5fd5938f88f78928354f674a01b209013057e6d8300232574c2c04031a6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
