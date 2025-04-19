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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWXUHFT4%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDzo2oLDBdD%2Fdh2kTDzVOgx6SZauEr2LB4YZjERZ9SAiAIhAL9hCfCTdOTDao86tH4sHGtNq4TpnFLObtTT%2BxRHYs1vKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsY0aatMqRDakNswwq3AP%2FsQBuuel3Hdfu9DIZg4UQ%2FXKbiCz9J2TRx912rRA773AqECbxf9DWRfgEw4gyZxRlB%2BJZ3dR8bYzUIHP73qJYCFZCyqwop7PKupd4btPIOAuKy7Imw%2FVkQ5MmsBndLpaG3gD%2BIKvBuje0xlSX1mzw7P2WZc0sjUOrBjIc%2FLlrVHwW7R6EUp4rU6c%2BaiWdZeo%2FB4j%2BECLVzdJV9Ftato9IXRJK0oJVhNjClx8qiUag8NCqOGezYItPPzuko01xsNh5VfahHoO5FN4DKrmoGDsxWD1Q1WicxgtNlQR6k08d0jk2EearBkrX6F3sGOVPwFjmF7p9P7AZm4aLaaruQOrJKhBl8vbvkw57JeNrEgbdsqsK6SElLvJQC93rMBzIIMRq5BUg%2BPuiRm3c4gnoT2fj%2BQg%2F9xRMtzI9iO8fCDNy9g%2BXq6F9ZxFFAzQWW0E9003h415NIkW3AuEhWtLqQlgP0u8MDYslluaTHWy2X4qd%2F3kxLKykj6Abx3rbi56MMa089Q27k4nXkxjRcu1GExT5LaatVQeaOgg00azT%2FeC4ibqP%2Ba%2FxQV0%2BiRsggZhZmI%2FWLd4OSEiYD9wE6%2BEtBtOBFn11Mw33fvwZQUDWxf1qt7p9gLETIDsk8TcIkDDJoI%2FABjqkAeZZP4Scy02r5xpd6OS9d8akLrV%2BcJU79PfrRa2fYsM1hu0YlggSgyMfbnuDbUf56GU8gdfgpTM6Lz1tbnPywdWcnDeFnRHftHbSVPoMVgPQk9JFoHwbSL1sqvjJdx%2FvqITxw8pcDwLpTZHJR4x%2BatATm7JULXFTILf1lodl7Nz8X91RsF8GetBx%2F3NMYVAoeAR7zC5gINROItvYgmDRH0NZYEaX&X-Amz-Signature=ad1e22973c5e46dcb741798f3b24d167bb8a823e6f64db3db024b0edb5bfa991&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWXUHFT4%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDzo2oLDBdD%2Fdh2kTDzVOgx6SZauEr2LB4YZjERZ9SAiAIhAL9hCfCTdOTDao86tH4sHGtNq4TpnFLObtTT%2BxRHYs1vKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsY0aatMqRDakNswwq3AP%2FsQBuuel3Hdfu9DIZg4UQ%2FXKbiCz9J2TRx912rRA773AqECbxf9DWRfgEw4gyZxRlB%2BJZ3dR8bYzUIHP73qJYCFZCyqwop7PKupd4btPIOAuKy7Imw%2FVkQ5MmsBndLpaG3gD%2BIKvBuje0xlSX1mzw7P2WZc0sjUOrBjIc%2FLlrVHwW7R6EUp4rU6c%2BaiWdZeo%2FB4j%2BECLVzdJV9Ftato9IXRJK0oJVhNjClx8qiUag8NCqOGezYItPPzuko01xsNh5VfahHoO5FN4DKrmoGDsxWD1Q1WicxgtNlQR6k08d0jk2EearBkrX6F3sGOVPwFjmF7p9P7AZm4aLaaruQOrJKhBl8vbvkw57JeNrEgbdsqsK6SElLvJQC93rMBzIIMRq5BUg%2BPuiRm3c4gnoT2fj%2BQg%2F9xRMtzI9iO8fCDNy9g%2BXq6F9ZxFFAzQWW0E9003h415NIkW3AuEhWtLqQlgP0u8MDYslluaTHWy2X4qd%2F3kxLKykj6Abx3rbi56MMa089Q27k4nXkxjRcu1GExT5LaatVQeaOgg00azT%2FeC4ibqP%2Ba%2FxQV0%2BiRsggZhZmI%2FWLd4OSEiYD9wE6%2BEtBtOBFn11Mw33fvwZQUDWxf1qt7p9gLETIDsk8TcIkDDJoI%2FABjqkAeZZP4Scy02r5xpd6OS9d8akLrV%2BcJU79PfrRa2fYsM1hu0YlggSgyMfbnuDbUf56GU8gdfgpTM6Lz1tbnPywdWcnDeFnRHftHbSVPoMVgPQk9JFoHwbSL1sqvjJdx%2FvqITxw8pcDwLpTZHJR4x%2BatATm7JULXFTILf1lodl7Nz8X91RsF8GetBx%2F3NMYVAoeAR7zC5gINROItvYgmDRH0NZYEaX&X-Amz-Signature=424bd6ba4884ca47281f5bf106d0ba8724dce504335d3052b23e96a4550b79af&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
