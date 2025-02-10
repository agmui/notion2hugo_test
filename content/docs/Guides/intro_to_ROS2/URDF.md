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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZQT26TA%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ6S8YN54yeWkc8IalMsAgH4I2U2FTGWBeHMxR5k45%2BgIgG9x5zRuxql3%2FCTWrS01oJc9XCRM6Xa9RmgMs4%2ByOa4EqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAt%2BuX6mV8mPsxOcjircAw8oIK7Dj%2BvywBKXiOAFmRYaeaXSOyppkGnl3MkhB2p0fm6e%2FqY3Wfi%2BMtr9QjVtKO%2B1XwNHiRoxDRwdOVTCSWLrk6Xjhpf%2FAplDy%2BLYo5T1XofdYsUBn7CFI4MJPMAj1HlO37KS0EGjxYzI1ZetO%2FfvYFO8VtuL2ViE8rKFdZy%2BYmm3cGUs9cH8exPWFGhtbhCLO1PgSol0GrEAjq9HOBBMSdsxPWyKvZYqUsUfoNfm6KZji1Y7C6JjRw7OKk5Tafh9edQ8LbRV20xlOw%2BSwc9ee7GaIu6sEnpTj%2B2yTyecQqSvNN2y4uTrhIZtg7q1NagaY7o6aFDPn5wDpgg%2Fxjas9i1uBopelbwgGhMz49cNcA4pVAldHAp%2BnI2%2Fze5Mf%2FQ%2BM4XkuhQKUZsP7FD3duChZ45ONISaPH09%2FlzNWWXSqxjq9tpcbcO2ldGiB3Dou8QLYbxmq0Q7lS1HAiuesMET2FVGrOVntI%2B2u3rqM5ljKFGXfyQIdGSEv3csyC5pol69t7pqQ%2F0Q7nfpZJz5UNv6b3T0k6qgZg%2BliIwWEwkPRQGWxyfCTg5hICQyqTfqlZj5qSpK%2BIGLTNFHsPrt3pcaRR%2Br4XrpO1wQqOAavoCyL8Zai6ynYeYRdGOWMIuzqb0GOqUBBqDHGb3j5woZ%2F7lE8fowKuKAmGRPpSTvzjuRm9OGFM5ui4KIUETNbO2VjRLHpH1GDmxGVWHaaNCl5vR04j4bIcXOatVkGHOZi8KiWq4pN4%2Fn7O7YkGmFdNFDb6JkHfT%2F%2FTPTmlVZbpkTWpp27jE1X4FMJQmNU8z4Mo%2BxeW2BUKC9xLrilC5qbDpqsSgXZTom7jDSIM0lPcCN3cVb4pDjzQqbaKyV&X-Amz-Signature=1ab0f59ea4f6499e8603f10099f10834b6fcda8e33ea7374e39a0ef595ff42e4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZQT26TA%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ6S8YN54yeWkc8IalMsAgH4I2U2FTGWBeHMxR5k45%2BgIgG9x5zRuxql3%2FCTWrS01oJc9XCRM6Xa9RmgMs4%2ByOa4EqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAt%2BuX6mV8mPsxOcjircAw8oIK7Dj%2BvywBKXiOAFmRYaeaXSOyppkGnl3MkhB2p0fm6e%2FqY3Wfi%2BMtr9QjVtKO%2B1XwNHiRoxDRwdOVTCSWLrk6Xjhpf%2FAplDy%2BLYo5T1XofdYsUBn7CFI4MJPMAj1HlO37KS0EGjxYzI1ZetO%2FfvYFO8VtuL2ViE8rKFdZy%2BYmm3cGUs9cH8exPWFGhtbhCLO1PgSol0GrEAjq9HOBBMSdsxPWyKvZYqUsUfoNfm6KZji1Y7C6JjRw7OKk5Tafh9edQ8LbRV20xlOw%2BSwc9ee7GaIu6sEnpTj%2B2yTyecQqSvNN2y4uTrhIZtg7q1NagaY7o6aFDPn5wDpgg%2Fxjas9i1uBopelbwgGhMz49cNcA4pVAldHAp%2BnI2%2Fze5Mf%2FQ%2BM4XkuhQKUZsP7FD3duChZ45ONISaPH09%2FlzNWWXSqxjq9tpcbcO2ldGiB3Dou8QLYbxmq0Q7lS1HAiuesMET2FVGrOVntI%2B2u3rqM5ljKFGXfyQIdGSEv3csyC5pol69t7pqQ%2F0Q7nfpZJz5UNv6b3T0k6qgZg%2BliIwWEwkPRQGWxyfCTg5hICQyqTfqlZj5qSpK%2BIGLTNFHsPrt3pcaRR%2Br4XrpO1wQqOAavoCyL8Zai6ynYeYRdGOWMIuzqb0GOqUBBqDHGb3j5woZ%2F7lE8fowKuKAmGRPpSTvzjuRm9OGFM5ui4KIUETNbO2VjRLHpH1GDmxGVWHaaNCl5vR04j4bIcXOatVkGHOZi8KiWq4pN4%2Fn7O7YkGmFdNFDb6JkHfT%2F%2FTPTmlVZbpkTWpp27jE1X4FMJQmNU8z4Mo%2BxeW2BUKC9xLrilC5qbDpqsSgXZTom7jDSIM0lPcCN3cVb4pDjzQqbaKyV&X-Amz-Signature=9f5f58f82697c5f880be79a1d61cd1bdc38f2048bc6ae620254671fb5f40d2b1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
