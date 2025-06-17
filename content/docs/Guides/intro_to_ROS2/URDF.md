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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRXXUXNX%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsJixJoGBWl4t3k1zKVHQZ7DHYiC6Vr9vu5Sf2U8Pr5gIhAMBb2N0RwqSRfWqXMdHqwgAdvPafWcqgoZoBVIs0%2FFZHKv8DCH0QABoMNjM3NDIzMTgzODA1IgwEw1eQIlgMEUU1CUMq3AP03g%2BpqImi6fwIkIWD4wl7s6j6M4FaohXST%2BYH8tq6nylubYAfd28MNE1%2B9hdE6lJrp%2BJCUqyxe1Ckakx4Lx6Q1D1h4p38ZR0d0DuEFtfAbCF7Uc1B61N3X4mXMKIPNd2gVXYWfjRyBqDgKNKARfziliJ9o6Pfc6UYfq5NJunr7d%2FQESJXH716kIKykDrCIHrAZomBBEzXLTpdC5r%2FKCGFkVx18fM7YEpTjiMBkX3gfws%2By4Z6sBmuUZKl2eEMPLEid1WaP3aJ4v4MMoI88FH7XQ3LTnG8lNxjF%2Fej5PZt0UsQgKKhIWypJJlx%2FSqCv%2FVN0SuAbyLEdcRoouu8xo5diIOGzKnlYpB56WSMZ4pBC%2FLdYxqKR7aKBPQDYcLSodM6Nn97btL1U77tRvkAU35Och7McIOjgziKlVFvvIsefdDvLwTdWv%2Fxcv6KMBoq8jw4ef51tevXC3tHv%2FFX0ZjRf%2BMZ%2FcdMUv7tv4XxrN3bSRgy%2FI9Si5V23u6vkGdG81dsj6yBcZGaM%2B%2FMh6Hoy%2BIPTREG6BJKzZRFHZd92QuYGQb8QLok3n6zIyInre7nXKhGP9VGBvIjJ%2Be1odwrbR6UU026RC3PrvxTEm9GEoJLFe8dT8pAbjZcuzUnkDDdiMfCBjqkAeiean5ExbHLCcwhQ55gi2vY3iKtyBz3KZALkE8L7z1QeAtAR33z5Vb31NBOettG6PLrvnshQd82WwG4MzN9WcUkWCXKdCN5byK1bMh%2FQKO%2B95wKQeRJnnc2%2FyUqzEsUhWbZSVjrBGna3XtKdelxeTF%2FssmL7uaLzUvdD5LiOGKmRfblG5Nthhq%2B6wT9%2F8iSiWWxogm91kCHjHlueDGzmyzXrMaA&X-Amz-Signature=d2bb85da26992ba4d330834f8b6958a20407fea6aea0445bd22bae98f61a3d20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRXXUXNX%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsJixJoGBWl4t3k1zKVHQZ7DHYiC6Vr9vu5Sf2U8Pr5gIhAMBb2N0RwqSRfWqXMdHqwgAdvPafWcqgoZoBVIs0%2FFZHKv8DCH0QABoMNjM3NDIzMTgzODA1IgwEw1eQIlgMEUU1CUMq3AP03g%2BpqImi6fwIkIWD4wl7s6j6M4FaohXST%2BYH8tq6nylubYAfd28MNE1%2B9hdE6lJrp%2BJCUqyxe1Ckakx4Lx6Q1D1h4p38ZR0d0DuEFtfAbCF7Uc1B61N3X4mXMKIPNd2gVXYWfjRyBqDgKNKARfziliJ9o6Pfc6UYfq5NJunr7d%2FQESJXH716kIKykDrCIHrAZomBBEzXLTpdC5r%2FKCGFkVx18fM7YEpTjiMBkX3gfws%2By4Z6sBmuUZKl2eEMPLEid1WaP3aJ4v4MMoI88FH7XQ3LTnG8lNxjF%2Fej5PZt0UsQgKKhIWypJJlx%2FSqCv%2FVN0SuAbyLEdcRoouu8xo5diIOGzKnlYpB56WSMZ4pBC%2FLdYxqKR7aKBPQDYcLSodM6Nn97btL1U77tRvkAU35Och7McIOjgziKlVFvvIsefdDvLwTdWv%2Fxcv6KMBoq8jw4ef51tevXC3tHv%2FFX0ZjRf%2BMZ%2FcdMUv7tv4XxrN3bSRgy%2FI9Si5V23u6vkGdG81dsj6yBcZGaM%2B%2FMh6Hoy%2BIPTREG6BJKzZRFHZd92QuYGQb8QLok3n6zIyInre7nXKhGP9VGBvIjJ%2Be1odwrbR6UU026RC3PrvxTEm9GEoJLFe8dT8pAbjZcuzUnkDDdiMfCBjqkAeiean5ExbHLCcwhQ55gi2vY3iKtyBz3KZALkE8L7z1QeAtAR33z5Vb31NBOettG6PLrvnshQd82WwG4MzN9WcUkWCXKdCN5byK1bMh%2FQKO%2B95wKQeRJnnc2%2FyUqzEsUhWbZSVjrBGna3XtKdelxeTF%2FssmL7uaLzUvdD5LiOGKmRfblG5Nthhq%2B6wT9%2F8iSiWWxogm91kCHjHlueDGzmyzXrMaA&X-Amz-Signature=c1887179f07997e94b2679261064ea5f6f96cb406aec5f6fea307918e506e57a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
