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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXNE5FTS%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIE9ewCJpxQIVI6ZY73XlNtLMZKBS2CMC7s%2B9AmE4eyhCAiA9FrwvH9GH5tzjm7fpS1XpA8uV8AbyN8zdTbH1rbrecCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMNbNAqcUVf3HQOQSRKtwDYE6TWf7pf6z7pDSjxNMiuA3MvTYr3ZjtgbGvmrYevH2UoOe9jQVwwsjHRvfRLbxwxvcFKA19YMF08CfEEft40z7wBkXYwrhVRBJj%2F%2FI0DGWU85z4brhLrvq8%2BTwHExt3dHK9dVv7jck04llzto4Mvi2k70fo3QHq6VlRddNZACsDaMt2kA108UkmuBA45UB%2BBHqkAPcLpE5jiZOyNIg39Vp%2F6GNR7KN2qxVF7TcieT6Asmk8%2Bnb4EZPkS3DE1VZHjbI2J5BMTETEmKxqb8%2FeYQKp%2FWUzIx4Vn1Abcfi7YplNyutSrqVLUDnRkpm6Rb6fza04esldY11lVOwZcwFbXNX%2FN9BcIFAXLaujo7QasAe07W0u%2B4PWY30F2gcqeZ4oesKUyJOxo6N0h%2FVsOphISji119M%2FlI81a%2By%2FmGIRLvTTj6iKn9JRKlNDHli3ja9t8YRODSjcZII5LGi9T6gefHnCj4ZGEaYCHyldqAxo%2FDwfGKZFJIoKUDgC2MkZQKQoMdaHRlPEJEJIpn%2BDgyt9IRdtZYVZ%2BNUcFr9yG9VZWHLFrrY4SkGIw53j3b69JSGf9aQ6Tz94m5Zac%2FyQ0hCbCnPkGLalE7a8UiUuAjJ4MZ2zAjm9ApGi9Eq7HFgwp6r4vQY6pgEAwtlnxo6yO91%2BWXY9nVw5EdtkzjZjxc75Q5s7tCTNsM5MdHoH4kwVhyG6115V2dvJTZzldH3HCl8fgl2piYC5As%2BqkubWU7VOBjBQd%2B%2B3w9Feq1NTZjketl%2BbkdnmXtFRGhNPSP8E4zRd7xmFSwQ0lrUURU2R01e9hrqhmbG6y5KzKuaqlRmO6zi5GpFk5woHD8mYhrYXr4PQ5wvWPwtsTcodA%2Bvz&X-Amz-Signature=210c81d33017e1581c31ef32f2636818f9ef4d30f149a0a1332ff902f22a8580&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXNE5FTS%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIE9ewCJpxQIVI6ZY73XlNtLMZKBS2CMC7s%2B9AmE4eyhCAiA9FrwvH9GH5tzjm7fpS1XpA8uV8AbyN8zdTbH1rbrecCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMNbNAqcUVf3HQOQSRKtwDYE6TWf7pf6z7pDSjxNMiuA3MvTYr3ZjtgbGvmrYevH2UoOe9jQVwwsjHRvfRLbxwxvcFKA19YMF08CfEEft40z7wBkXYwrhVRBJj%2F%2FI0DGWU85z4brhLrvq8%2BTwHExt3dHK9dVv7jck04llzto4Mvi2k70fo3QHq6VlRddNZACsDaMt2kA108UkmuBA45UB%2BBHqkAPcLpE5jiZOyNIg39Vp%2F6GNR7KN2qxVF7TcieT6Asmk8%2Bnb4EZPkS3DE1VZHjbI2J5BMTETEmKxqb8%2FeYQKp%2FWUzIx4Vn1Abcfi7YplNyutSrqVLUDnRkpm6Rb6fza04esldY11lVOwZcwFbXNX%2FN9BcIFAXLaujo7QasAe07W0u%2B4PWY30F2gcqeZ4oesKUyJOxo6N0h%2FVsOphISji119M%2FlI81a%2By%2FmGIRLvTTj6iKn9JRKlNDHli3ja9t8YRODSjcZII5LGi9T6gefHnCj4ZGEaYCHyldqAxo%2FDwfGKZFJIoKUDgC2MkZQKQoMdaHRlPEJEJIpn%2BDgyt9IRdtZYVZ%2BNUcFr9yG9VZWHLFrrY4SkGIw53j3b69JSGf9aQ6Tz94m5Zac%2FyQ0hCbCnPkGLalE7a8UiUuAjJ4MZ2zAjm9ApGi9Eq7HFgwp6r4vQY6pgEAwtlnxo6yO91%2BWXY9nVw5EdtkzjZjxc75Q5s7tCTNsM5MdHoH4kwVhyG6115V2dvJTZzldH3HCl8fgl2piYC5As%2BqkubWU7VOBjBQd%2B%2B3w9Feq1NTZjketl%2BbkdnmXtFRGhNPSP8E4zRd7xmFSwQ0lrUURU2R01e9hrqhmbG6y5KzKuaqlRmO6zi5GpFk5woHD8mYhrYXr4PQ5wvWPwtsTcodA%2Bvz&X-Amz-Signature=4012ef7919d59e8ef0588f6ffff851f37b6626dd096f03e69c43a976bcf21449&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
