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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK7C6GFV%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDX4KCKknYrM%2F1fQvI9Gd5GUuQoX%2BoVeYsOFyf6N0cFCwIhAIv%2FNurHZsCWzPpfG%2B6znns9wTWI1UI%2FCtLwNV7PxHFUKv8DCHgQABoMNjM3NDIzMTgzODA1Igy3vUDCexDnxkJfwhIq3ANK1oJE0dgi8OS4IFGfh0ozjD7cmbTMwxuCzDg6RrH5YYr2KLo7CVgz6PhCfztp9qFv2aBNQ0ZVqC19bGvDWZEgdXWwrFpALhzULqp7%2Fd1m%2BxGgAQ3i%2FuMz31xxVvs99wu2HTJ2liBzSUYQ1x3Vrb7JVYfSR%2FKDEOma5zzkzwu8q2WmyB6p7wC0K1JHoNayNDwm339LWfAQw%2F%2BFpmXwE5mEeFq%2Br6RV%2F4lUV1Q0tFUEW8ZL22aN1Dlb85Fn5%2BrLvjMAx%2FUQWF8dNeTnphecYH0%2FQ599lBez5ZywSmzzK4%2BUmvIJ69LiVvnnMoYi5qg%2BitjH82pXMsY6iafVVlkUwMAjvq6C0v20Q9nV8p1wMbZDtKtodagoUVLBBcN1wtqZtOiDJqrvHKxIDjIqzc0dVfakR9AAVJJz770IUje5BaCFY6bnRmlNjAQ%2FZXRB5zotv2gDwwZ4OVd9DwM1FHazdPBeZakfPOLg77UTAo1%2FTYabSb9tWt9%2FEQpE3Tqb0EvMFUGudHSIAVxhX7P5RNqvENyo%2FEGlDZaCB%2FwKZKCV6qON2At5wPik3iBJ1hxm8IwweMEuiouVmJzYJQ9V1bEdB8GzjNb3XDFn4zEGfLe6rtz8NjBphtCsYBQk964JrTCJveu%2BBjqkAW9DnvTKCXoWBtElF8kaoXAoitWUFPpjmtCbggYzXL0J7vZjQNLHfeQIoq3FCMaifPmLI3%2FwGKgoLoYrqNckInpXsJEiO5uQpAlZRH1L4c3NWzfx1KUrFueHJk%2B7GvmAHmcndfT3cM7TowphmsUSJsG7JmtjVrtYGxCqMHa1UMozlYpDAuu59T7zYe2wgBxlBF2MJsZJUKgXBuP3K2e0G7ucWwGb&X-Amz-Signature=db755222bea2033d3c076810014c0f0b8aaa28c6446ef9177f6c8d0ecd0fc0ff&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK7C6GFV%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDX4KCKknYrM%2F1fQvI9Gd5GUuQoX%2BoVeYsOFyf6N0cFCwIhAIv%2FNurHZsCWzPpfG%2B6znns9wTWI1UI%2FCtLwNV7PxHFUKv8DCHgQABoMNjM3NDIzMTgzODA1Igy3vUDCexDnxkJfwhIq3ANK1oJE0dgi8OS4IFGfh0ozjD7cmbTMwxuCzDg6RrH5YYr2KLo7CVgz6PhCfztp9qFv2aBNQ0ZVqC19bGvDWZEgdXWwrFpALhzULqp7%2Fd1m%2BxGgAQ3i%2FuMz31xxVvs99wu2HTJ2liBzSUYQ1x3Vrb7JVYfSR%2FKDEOma5zzkzwu8q2WmyB6p7wC0K1JHoNayNDwm339LWfAQw%2F%2BFpmXwE5mEeFq%2Br6RV%2F4lUV1Q0tFUEW8ZL22aN1Dlb85Fn5%2BrLvjMAx%2FUQWF8dNeTnphecYH0%2FQ599lBez5ZywSmzzK4%2BUmvIJ69LiVvnnMoYi5qg%2BitjH82pXMsY6iafVVlkUwMAjvq6C0v20Q9nV8p1wMbZDtKtodagoUVLBBcN1wtqZtOiDJqrvHKxIDjIqzc0dVfakR9AAVJJz770IUje5BaCFY6bnRmlNjAQ%2FZXRB5zotv2gDwwZ4OVd9DwM1FHazdPBeZakfPOLg77UTAo1%2FTYabSb9tWt9%2FEQpE3Tqb0EvMFUGudHSIAVxhX7P5RNqvENyo%2FEGlDZaCB%2FwKZKCV6qON2At5wPik3iBJ1hxm8IwweMEuiouVmJzYJQ9V1bEdB8GzjNb3XDFn4zEGfLe6rtz8NjBphtCsYBQk964JrTCJveu%2BBjqkAW9DnvTKCXoWBtElF8kaoXAoitWUFPpjmtCbggYzXL0J7vZjQNLHfeQIoq3FCMaifPmLI3%2FwGKgoLoYrqNckInpXsJEiO5uQpAlZRH1L4c3NWzfx1KUrFueHJk%2B7GvmAHmcndfT3cM7TowphmsUSJsG7JmtjVrtYGxCqMHa1UMozlYpDAuu59T7zYe2wgBxlBF2MJsZJUKgXBuP3K2e0G7ucWwGb&X-Amz-Signature=e1fc6b477a6da2d5b7f124a9af0011e5b40a4ee58e4df737332b8d708b6a0b3f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
