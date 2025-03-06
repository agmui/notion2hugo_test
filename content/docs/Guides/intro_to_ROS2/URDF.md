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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VXZHSPV%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGKBANP3N0TsrZrPttm2tkEIZ%2FaTFUsqaBEC%2Bjy2LhdwIgUc3xZ0FqJtDgVEpc5JEVWJAyGR7fGw9lHvRCVuiPCrQq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDF%2BQCj5a9dnm9gbPKSrcA8q5T%2FazdrV5cvlRsS2G39YnIV96ggwPuYXx4JDBV5BD8UztXUlBxBVET3GhtK7y5%2B4D49PPrYr6NqHlNHI6wPP3E2Xl0H0V8PvqHr92mbCuFj6YuCl1rNm07uWd%2FtX3jF0SyOlBXuW6iBAQwHaVoHT%2B2y79IR6%2BgCz5nU2ftnKYCTOmFwP9s%2FmIpcPa8%2FtHHwRq2NsowyUxMas3vczlVOcZv49OlFIxBHYw6TA7iFbeo6UpZPgDhqP5Bx4tN%2ByLivh5O7sbYU2eKv0jnNIQsUomsAW32ADpkALaaRWaSjKItuG74izv8D6hC8kv9DkqKfUUuubMnefQTD%2BXrcy59a3sQjEvEr1df5ePtnCfauTdfkIsXBq9OOMbVlZ3Zx99NIU45ISrv0uzXX%2Fx0DrLNuypYP8BeYvLxgXFUX4g%2B%2F61M2bzubFqhPJ%2BnqXmx3jmzOdV1fY%2FPcyt0csV5WQwwoJYPQCJVJF%2BToY3XrDE503IDfj2GA4T4bbWDKxRRwfUrB1LAJzz%2BDjZH5rvgqqXYOPRo230tQ73TuezfURUCuEziS8u48y1IbpvecNcYv%2BfCnT%2Bm05%2FYdj6%2FhtBj5JLN9E%2FlRoR%2FwAWF4S3P2MQmF1sYBBKkU7uH1BuXnfoMJfOp74GOqUBPpnO61NCJ12Q3GAb2bMUoA4UZPPSJWT4gycRX6ZqP2lJ1RppZyazQqotdwn0RNKf%2BvAdfHMznmGjD7rsQT9O6nDlLmjtSlGKoSA8CCB7nYUpatlAvp5Zz8wfWUdCU9bTk1Kw7J9VyTRTbpDbUT7YaLOCywP3o48WJDQkfh5c34fDERMVnQ9tLNk%2BApcLc4aYFZdpSv%2BnXxXNnQYXwHdFXLUrGfGZ&X-Amz-Signature=12b5036301aab0450aa4edf604afdf3f29b48f75a963ce68d58cea4830151383&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VXZHSPV%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGKBANP3N0TsrZrPttm2tkEIZ%2FaTFUsqaBEC%2Bjy2LhdwIgUc3xZ0FqJtDgVEpc5JEVWJAyGR7fGw9lHvRCVuiPCrQq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDF%2BQCj5a9dnm9gbPKSrcA8q5T%2FazdrV5cvlRsS2G39YnIV96ggwPuYXx4JDBV5BD8UztXUlBxBVET3GhtK7y5%2B4D49PPrYr6NqHlNHI6wPP3E2Xl0H0V8PvqHr92mbCuFj6YuCl1rNm07uWd%2FtX3jF0SyOlBXuW6iBAQwHaVoHT%2B2y79IR6%2BgCz5nU2ftnKYCTOmFwP9s%2FmIpcPa8%2FtHHwRq2NsowyUxMas3vczlVOcZv49OlFIxBHYw6TA7iFbeo6UpZPgDhqP5Bx4tN%2ByLivh5O7sbYU2eKv0jnNIQsUomsAW32ADpkALaaRWaSjKItuG74izv8D6hC8kv9DkqKfUUuubMnefQTD%2BXrcy59a3sQjEvEr1df5ePtnCfauTdfkIsXBq9OOMbVlZ3Zx99NIU45ISrv0uzXX%2Fx0DrLNuypYP8BeYvLxgXFUX4g%2B%2F61M2bzubFqhPJ%2BnqXmx3jmzOdV1fY%2FPcyt0csV5WQwwoJYPQCJVJF%2BToY3XrDE503IDfj2GA4T4bbWDKxRRwfUrB1LAJzz%2BDjZH5rvgqqXYOPRo230tQ73TuezfURUCuEziS8u48y1IbpvecNcYv%2BfCnT%2Bm05%2FYdj6%2FhtBj5JLN9E%2FlRoR%2FwAWF4S3P2MQmF1sYBBKkU7uH1BuXnfoMJfOp74GOqUBPpnO61NCJ12Q3GAb2bMUoA4UZPPSJWT4gycRX6ZqP2lJ1RppZyazQqotdwn0RNKf%2BvAdfHMznmGjD7rsQT9O6nDlLmjtSlGKoSA8CCB7nYUpatlAvp5Zz8wfWUdCU9bTk1Kw7J9VyTRTbpDbUT7YaLOCywP3o48WJDQkfh5c34fDERMVnQ9tLNk%2BApcLc4aYFZdpSv%2BnXxXNnQYXwHdFXLUrGfGZ&X-Amz-Signature=4e4d2552f1e969b86811383cb9a5468fdf61db21e461798f8167c4d29c4d5e5e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
