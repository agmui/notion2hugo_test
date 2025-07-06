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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSII4K5J%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDeBCBgveJI719YDWxETJxF%2BvkjOhWkWx8DEMb1D%2BpnIgIgD5MVDvIpothGEW6HaWYfyQRSrtW8PCTQFPYtoD%2Fn7hQq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDBgW9bZNrrkXBhCzACrcA%2BVbz2fyK3dPjQVvnRbEufc%2F9Fha9x5XLzIehHwF4gIW6jXH7Ftmb8r4ocJXkFnHBWbq4IxXrteWuBHPT8Uek990Nm%2FTx8wfYxM03up1fjxpC0yXg3AtNDhWqK1HthYaFRfunKTmP%2BF1RlKxVMUeGjKStRBD0A6eY0v1CtW5ZxWwy3c6UL5HCqGLWEe8zOV1Fxhh6No0kMqd9%2FwOAZHLI4JRSsQJhHSfOvLIRXeoFEU8OloFn6M6qipJ0hUY0NkIqsPoHhOpHUWSdkhjrBPBva%2F6J76GuZXvq2Rsi3QZpNnVLzglAyjAcxf%2BBT6klF3%2FN3T6nyWT4xM0%2FMyCNOAoe1Q9dJz3OfCsAkLUtO13Oa0Ij15unAEFW8%2BlKzXSzDb7xygXfS0qPjwMGUAh%2BricHi0zOTk50DcxivH5CpBGXx5BALn2TDNtru6FyvCwofrbfSP3bxVrWNaEhOD7H8%2F6uSewfLjqUYrMnDLmbixg1xJJaxk607EvOMYwvHU7KLG7pdbSofMqBIt7uqhYCnLv%2B20dd0JdzO7N6Usxi%2F2rdhGZUwAxgyoUmopURc%2BFKOfivx1n13DJUQWOgZajTRius6d2VB2pF3ezB8g0ij60yYdzgKf%2FHIQArotI1L7xMLyOp8MGOqUBkKcOXVPzMrngLU4kcIUQskjHJjuIehSl2DZZrgLGTyMwH5Xy0if%2FE%2Bkdz6q8jeHbS98eDfjBbm5doMU7pSOemKDSPTRVW%2FdyAVziAnJw3j%2FXiYMfvQHJTVrgs5wPlawmVazlplotZUWqjNLJ8tG3IdMjGsPmCnhWWajOuyF4TeQ227yMwa2TANLKqZH8NYRz%2F6beGZNTFgAtXHVrSslAlcBmHqM1&X-Amz-Signature=52a176f045f44e9b2df11ee07781440670d625156887467b91a2429d94b00426&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSII4K5J%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDeBCBgveJI719YDWxETJxF%2BvkjOhWkWx8DEMb1D%2BpnIgIgD5MVDvIpothGEW6HaWYfyQRSrtW8PCTQFPYtoD%2Fn7hQq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDBgW9bZNrrkXBhCzACrcA%2BVbz2fyK3dPjQVvnRbEufc%2F9Fha9x5XLzIehHwF4gIW6jXH7Ftmb8r4ocJXkFnHBWbq4IxXrteWuBHPT8Uek990Nm%2FTx8wfYxM03up1fjxpC0yXg3AtNDhWqK1HthYaFRfunKTmP%2BF1RlKxVMUeGjKStRBD0A6eY0v1CtW5ZxWwy3c6UL5HCqGLWEe8zOV1Fxhh6No0kMqd9%2FwOAZHLI4JRSsQJhHSfOvLIRXeoFEU8OloFn6M6qipJ0hUY0NkIqsPoHhOpHUWSdkhjrBPBva%2F6J76GuZXvq2Rsi3QZpNnVLzglAyjAcxf%2BBT6klF3%2FN3T6nyWT4xM0%2FMyCNOAoe1Q9dJz3OfCsAkLUtO13Oa0Ij15unAEFW8%2BlKzXSzDb7xygXfS0qPjwMGUAh%2BricHi0zOTk50DcxivH5CpBGXx5BALn2TDNtru6FyvCwofrbfSP3bxVrWNaEhOD7H8%2F6uSewfLjqUYrMnDLmbixg1xJJaxk607EvOMYwvHU7KLG7pdbSofMqBIt7uqhYCnLv%2B20dd0JdzO7N6Usxi%2F2rdhGZUwAxgyoUmopURc%2BFKOfivx1n13DJUQWOgZajTRius6d2VB2pF3ezB8g0ij60yYdzgKf%2FHIQArotI1L7xMLyOp8MGOqUBkKcOXVPzMrngLU4kcIUQskjHJjuIehSl2DZZrgLGTyMwH5Xy0if%2FE%2Bkdz6q8jeHbS98eDfjBbm5doMU7pSOemKDSPTRVW%2FdyAVziAnJw3j%2FXiYMfvQHJTVrgs5wPlawmVazlplotZUWqjNLJ8tG3IdMjGsPmCnhWWajOuyF4TeQ227yMwa2TANLKqZH8NYRz%2F6beGZNTFgAtXHVrSslAlcBmHqM1&X-Amz-Signature=8e9fbb69e58a319b851360662e3e51c761c3e979e7b76e606f73cbbded7975a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
