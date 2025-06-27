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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657S3XGLX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC20JR1MJodJkdwrcoT7b0GOh9yrO7YNQ63wcQD7mABQgIgfwpjs6oo7%2BzQFxRAJmWdZSL4j3l%2FANZ4l%2Fqvrbz8GIMq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDH%2Fc5SQCy2KPRiuaCyrcA85mX%2B0tl420nF6oZWon6oZ2GWCzs54m1SIoCXEhRH6addgTrtvFdj7jrjoWmP0Jy5b7bb1poHK4%2B2E4otkz7M6VNH3RiOBvGE24wailbp8vquAMxBCQcB9EKFbi1m51uY45VTOwH0j9KzEQ8ySKCLZEuySS6ErbXkXwg5SZXCv03VZz9z3ui3Ad1wIQOWSTJzPHhOPiD%2FInL52T1dRD8Sr3riv968EVjuZUcg%2FJGYgY2Hli4sUlZQ5Ao1M%2FPjupfxq0xq%2BFjXOZqhzXtNxu7RqVw2aX2P3MclcZY%2FiKhQYREIXzqOpT7Htr9MBMDqBeoNKhMqzd32dYh0E2bnHiKqvqmxhiOz5Dx5CnENeeCc%2FjCuloim8D5SjS9mlg6OXPNd%2FGTCyqgivBZujHdS4Ahhd6LrIa%2BNR%2BMTIzO%2FBSRB9QV%2BhkPZCOBTPt%2FjecRTI%2BG90YY0IVTo9rT5ghOiL5BNP%2FwRwHXvgtXZimM1m4%2B48trpmSl4jD5FfMfLRyJ0fCDEqUo0oxvRgXrxOy3eVn1O95dKRj2e7Anv0irkPWISryK5U5zSKLMtaUeZICfvkc0r0SyLDWbxlx8vFCmHKTIgbPeRWhnsa%2FIxWGIeYgnEZYgjWLJGwRqftgepLVMJ%2Bk%2B8IGOqUBNlLBOZPEor9xuQE61%2B3kpFffpht45wLvH5pmnjkyg4xJwws0Mo3XgmX9%2B%2F6%2B4tZIpB2gC1%2FNn75D8M2aCEGQqE1JercEEQg%2BIoYN7xjQar%2BQp9O0oRuKYv7gVqj9oHBjc49xmUyyrATlM0JWf%2BZwq9Jkx1bPyUpnQmPSz0d4nFELB6sfIB%2FE0%2Bhp06P5ZEQ%2BmnDPt7gb2avrs%2FOnXos2g65ncxA8&X-Amz-Signature=d88977e03cce9d5dcd91855a5e31f138e2c28fc9298b2f858d2f8ad4b394cfc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657S3XGLX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC20JR1MJodJkdwrcoT7b0GOh9yrO7YNQ63wcQD7mABQgIgfwpjs6oo7%2BzQFxRAJmWdZSL4j3l%2FANZ4l%2Fqvrbz8GIMq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDH%2Fc5SQCy2KPRiuaCyrcA85mX%2B0tl420nF6oZWon6oZ2GWCzs54m1SIoCXEhRH6addgTrtvFdj7jrjoWmP0Jy5b7bb1poHK4%2B2E4otkz7M6VNH3RiOBvGE24wailbp8vquAMxBCQcB9EKFbi1m51uY45VTOwH0j9KzEQ8ySKCLZEuySS6ErbXkXwg5SZXCv03VZz9z3ui3Ad1wIQOWSTJzPHhOPiD%2FInL52T1dRD8Sr3riv968EVjuZUcg%2FJGYgY2Hli4sUlZQ5Ao1M%2FPjupfxq0xq%2BFjXOZqhzXtNxu7RqVw2aX2P3MclcZY%2FiKhQYREIXzqOpT7Htr9MBMDqBeoNKhMqzd32dYh0E2bnHiKqvqmxhiOz5Dx5CnENeeCc%2FjCuloim8D5SjS9mlg6OXPNd%2FGTCyqgivBZujHdS4Ahhd6LrIa%2BNR%2BMTIzO%2FBSRB9QV%2BhkPZCOBTPt%2FjecRTI%2BG90YY0IVTo9rT5ghOiL5BNP%2FwRwHXvgtXZimM1m4%2B48trpmSl4jD5FfMfLRyJ0fCDEqUo0oxvRgXrxOy3eVn1O95dKRj2e7Anv0irkPWISryK5U5zSKLMtaUeZICfvkc0r0SyLDWbxlx8vFCmHKTIgbPeRWhnsa%2FIxWGIeYgnEZYgjWLJGwRqftgepLVMJ%2Bk%2B8IGOqUBNlLBOZPEor9xuQE61%2B3kpFffpht45wLvH5pmnjkyg4xJwws0Mo3XgmX9%2B%2F6%2B4tZIpB2gC1%2FNn75D8M2aCEGQqE1JercEEQg%2BIoYN7xjQar%2BQp9O0oRuKYv7gVqj9oHBjc49xmUyyrATlM0JWf%2BZwq9Jkx1bPyUpnQmPSz0d4nFELB6sfIB%2FE0%2Bhp06P5ZEQ%2BmnDPt7gb2avrs%2FOnXos2g65ncxA8&X-Amz-Signature=1c8b3b5878594743474bd797fa8e478fd3444303a33b17da2869fb2d9cb77c6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
