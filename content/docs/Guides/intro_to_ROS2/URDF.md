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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SATSJZQJ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T121405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIGFNfAUJpvowvqjdYTmsfeF0PhGUnKEcfYtEJPbHK0biAiA8y7sawRkF7tQO3GjVGJoFRTJ437xn2kYJ3D0g3a1QtCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMbORHfW6s2a5KSq%2BwKtwDpZwDlO51TIJ1T4DsspRO9XgVdHkIqfD05G1%2BFyOeJgi84WxkXPEoTIwX%2FGjQx9gwRsA4v5sw%2BjhQ6aMBEOI1QILBwVB3Br7YfJvohgFY1CXlQfr6q1RHtSRP2jhLWiNoZGhWIhaKjNvmlFhKxbzaRz9tsQxzGxKbqYCPjRNp%2B8ubl5hG0%2BtjOvGihft8vCUuADscnYDUVJ7ZTnrQlNMZTor0vdB8aI5xCGYVTdbBtNWlYzcI%2B2IaP7H8DtJzEqZhvbl7aNr0PJWYQi1Dhsl%2Bbj%2FnpaPbyecVuGbqYAoCpSimCkjmDMyyHr81oCHIaoAE28CxH04MF1BbZUxGqLuKNftNdg09XQQUafjkbMupXW7GLkCQYj4%2BzyzBFEq9JjfpojIQCKWQDysGf6srZCMPVKlZsohEHK9%2FREqyQuzV3eqU9VZCe9lF0N0c%2BCh0GhZ3iMs4C7LS49iO2x4uKJ1xysR53L1ceobgMhZYYf%2BeBiCUm6X83RayVD4B2bGvkCrjYXCb7pNj%2FLcaN%2FYw5l3091Z1KyLufI1BTpBXxDvUEjYx1ZCipM0T7ypu7LOmvvdKFr2vhI0Q79WvEwLIEuvE4aXFymFpS5Qg9yVE0VC5ErqlcANspuMkFRVhk9sw%2BIuNvQY6pgFyr0IAg33YX0rj9tDFYs4aMS69zloowZwMgzzK7Trwo8nyNwZGMQ7x2ZGzBRIT13XKfG7DxrqiikocRJl1VB0ygbjIeeHS2cZ%2F4R2QBG%2F%2BO2a7mUwLIJsKrzbuAj6gaYhgp5no0U4d1DWQ8MdVAJxgq7XTOScdBVT4thaAMZBpgsol4Q%2Foebdi08uWO%2FEQtimoyc9E16hEi9zZ7k%2FeO3MYN54EIGfq&X-Amz-Signature=0880c707d282b4a6115101e73a792d8d955b3a7df9e8e7621b0ff2051495738e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SATSJZQJ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T121405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIGFNfAUJpvowvqjdYTmsfeF0PhGUnKEcfYtEJPbHK0biAiA8y7sawRkF7tQO3GjVGJoFRTJ437xn2kYJ3D0g3a1QtCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMbORHfW6s2a5KSq%2BwKtwDpZwDlO51TIJ1T4DsspRO9XgVdHkIqfD05G1%2BFyOeJgi84WxkXPEoTIwX%2FGjQx9gwRsA4v5sw%2BjhQ6aMBEOI1QILBwVB3Br7YfJvohgFY1CXlQfr6q1RHtSRP2jhLWiNoZGhWIhaKjNvmlFhKxbzaRz9tsQxzGxKbqYCPjRNp%2B8ubl5hG0%2BtjOvGihft8vCUuADscnYDUVJ7ZTnrQlNMZTor0vdB8aI5xCGYVTdbBtNWlYzcI%2B2IaP7H8DtJzEqZhvbl7aNr0PJWYQi1Dhsl%2Bbj%2FnpaPbyecVuGbqYAoCpSimCkjmDMyyHr81oCHIaoAE28CxH04MF1BbZUxGqLuKNftNdg09XQQUafjkbMupXW7GLkCQYj4%2BzyzBFEq9JjfpojIQCKWQDysGf6srZCMPVKlZsohEHK9%2FREqyQuzV3eqU9VZCe9lF0N0c%2BCh0GhZ3iMs4C7LS49iO2x4uKJ1xysR53L1ceobgMhZYYf%2BeBiCUm6X83RayVD4B2bGvkCrjYXCb7pNj%2FLcaN%2FYw5l3091Z1KyLufI1BTpBXxDvUEjYx1ZCipM0T7ypu7LOmvvdKFr2vhI0Q79WvEwLIEuvE4aXFymFpS5Qg9yVE0VC5ErqlcANspuMkFRVhk9sw%2BIuNvQY6pgFyr0IAg33YX0rj9tDFYs4aMS69zloowZwMgzzK7Trwo8nyNwZGMQ7x2ZGzBRIT13XKfG7DxrqiikocRJl1VB0ygbjIeeHS2cZ%2F4R2QBG%2F%2BO2a7mUwLIJsKrzbuAj6gaYhgp5no0U4d1DWQ8MdVAJxgq7XTOScdBVT4thaAMZBpgsol4Q%2Foebdi08uWO%2FEQtimoyc9E16hEi9zZ7k%2FeO3MYN54EIGfq&X-Amz-Signature=0c74dbaab18c75874867b5c468bda5f9dd0c7496cc016fb0f4600126021c37c9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
