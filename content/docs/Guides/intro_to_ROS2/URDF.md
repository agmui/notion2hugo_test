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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGVKHFDE%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQChEytBvhKg1css9jpIElDcshVOSiJS3K3oGTEdlDEdngIhAMzcbn8ojuw52SnHxhakQyWiiu0Jqqjac6duE4MC0ZlwKv8DCCQQABoMNjM3NDIzMTgzODA1IgwY94FIP7N0FdOZaU0q3ANpQH8bWqvPyVvFRieYBlSLZUYdC8eERhSULXoa8npHvk8lsodUnFe84jOuFcED9v1hbg957wNv3qOR%2FyLdwQwoRTo8TxxeGONXMOkWSMLva9E8P5VB0xgiSAULWLuNqvSWc86j7%2BOZWc%2Bapcuv%2FMRhWpPv72yNMbnL5ByQcYfVXZ7Lr4v9oyijVTwvhkQeTPFNhq%2BJo209vn%2FRLnRhlNXzPZK5N6obzmr6naDecQUBIY1eXpx6qzIjB%2Fp3Yb5cj1hLNCvmXZBUg1jlXNKGCRX2fgkKXCsJeql12KS%2FaYv9AzEed0B34RlR8PRDCUxJ28woLfTns97RmspkiENYIxZYy%2FSEIw8KeozEmfd6NMTOkT5TPvjcT750EoUkBYb0jQ%2BMSd%2F%2FEOpH985xThj%2B3T%2FKT2JwlpunXpQ0oxuX2I%2Fh3uZrgW1TLu8GhBlJ0aEHUa6AK4OUy1sr6vNszBn%2BoQBNuLne1llFMm5vvEnpS8whvSy99kyrMRrPwrfAof9BXUBbvPs2rzIGnOel0KRw5mnI32d3kegbXgmt20ooZzyu7LKJV3J0BzF%2BSyDTLLt27FbpC111lYaeKo1nDC6WZsyCwHmRSrXkHbXz%2B%2B1Cls4A3lPcYe%2F1DuvMVMFhcTCqh4a9BjqkAYMkf9oGFyVdN3cxofss5kzrSr9%2FpyBzTOLR1a0P6MNPOnKbHgoNs9kg%2Fk6mJYK8P1tB6Dl%2FEVOgmpu0DInfZnbWFtqf4ivb4%2B1nG4PqdmQrpQVya6P3KuQ5aZX6dmVktiiDEBpjU7sqvMRbKqk71%2BbyAC6BFdzQINiOCeWL2D2sh0oIZVXbmklGO5tzKStO%2BzaK7WOhxWdcemRTfE8AvMNzm6m8&X-Amz-Signature=96e294d1a8f688025da117c324939f66647638d493ab64bad3b324695b682fb3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGVKHFDE%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQChEytBvhKg1css9jpIElDcshVOSiJS3K3oGTEdlDEdngIhAMzcbn8ojuw52SnHxhakQyWiiu0Jqqjac6duE4MC0ZlwKv8DCCQQABoMNjM3NDIzMTgzODA1IgwY94FIP7N0FdOZaU0q3ANpQH8bWqvPyVvFRieYBlSLZUYdC8eERhSULXoa8npHvk8lsodUnFe84jOuFcED9v1hbg957wNv3qOR%2FyLdwQwoRTo8TxxeGONXMOkWSMLva9E8P5VB0xgiSAULWLuNqvSWc86j7%2BOZWc%2Bapcuv%2FMRhWpPv72yNMbnL5ByQcYfVXZ7Lr4v9oyijVTwvhkQeTPFNhq%2BJo209vn%2FRLnRhlNXzPZK5N6obzmr6naDecQUBIY1eXpx6qzIjB%2Fp3Yb5cj1hLNCvmXZBUg1jlXNKGCRX2fgkKXCsJeql12KS%2FaYv9AzEed0B34RlR8PRDCUxJ28woLfTns97RmspkiENYIxZYy%2FSEIw8KeozEmfd6NMTOkT5TPvjcT750EoUkBYb0jQ%2BMSd%2F%2FEOpH985xThj%2B3T%2FKT2JwlpunXpQ0oxuX2I%2Fh3uZrgW1TLu8GhBlJ0aEHUa6AK4OUy1sr6vNszBn%2BoQBNuLne1llFMm5vvEnpS8whvSy99kyrMRrPwrfAof9BXUBbvPs2rzIGnOel0KRw5mnI32d3kegbXgmt20ooZzyu7LKJV3J0BzF%2BSyDTLLt27FbpC111lYaeKo1nDC6WZsyCwHmRSrXkHbXz%2B%2B1Cls4A3lPcYe%2F1DuvMVMFhcTCqh4a9BjqkAYMkf9oGFyVdN3cxofss5kzrSr9%2FpyBzTOLR1a0P6MNPOnKbHgoNs9kg%2Fk6mJYK8P1tB6Dl%2FEVOgmpu0DInfZnbWFtqf4ivb4%2B1nG4PqdmQrpQVya6P3KuQ5aZX6dmVktiiDEBpjU7sqvMRbKqk71%2BbyAC6BFdzQINiOCeWL2D2sh0oIZVXbmklGO5tzKStO%2BzaK7WOhxWdcemRTfE8AvMNzm6m8&X-Amz-Signature=ea4cb712ce8845dc703a6e9fb895f60e6666027f16a83b56c5fb6844a24e822f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
