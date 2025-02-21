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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WSDNPQ5%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmjpuDp4t5FSgb5f7fiFMvJRlrhqU6drEMyC8u3SPOKwIhAOMRs5Ke3qKzSxb64zLUyNiaMIVJ74EW08jB5XvYnCpkKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwI%2FelbKwu7DQVzJ9Eq3AM%2FTBjYjechcCrVdWUvegRItNBFFZCGZ9OQf5F6LrwgFnuaUy%2FpQtd4WK4vN63sa09Q5H5K3ACpAE49ijlN1%2BlF875niws7upTM%2Bac9wpYOME9A1klxRr9KN1o6T7LOQbBSYEmWigp4kM27BJrLtmChYhMUffL3O2eKDRMkimFZRUPDbzEUQ0vQaVG9DMz9tqyKsCK4IP6yW5%2FW513iUxbJe1stiHKkL3bT%2BT6gNZwD0pYhNHflGgml1Ap5uho%2FY2d9ynbLIB0RiXZWgTQ8mb6YsWAc4s%2BPd22lsoV1EUyD6g4H94OlyQOThIc%2FvlYVsNw6mIO3W%2B19MHFPPgA6R6tMVHYwxKT98s02LMg37TG91XJi5HDf%2ByNs4U%2BQ6VsHsD5%2B8EUh8960feUapCwxPWK4IMBXbS41TDdIZq%2BEzuylVwa6%2F2rg5Y%2F7pYXH5RJRzA4sdO%2B6dy3MSmnnjOxMX6A1zC7%2FkKWucZN4zvcVjRk0DoGqa9VVMkTH0r3vPiWwokn%2FLE2Z4dZB9WRWU5WIpt%2BPSB9QsdvoRzx6rBzOPiYb5C0wL%2BgbZ8pCi%2FZM5c8qfjJA1phY9tH03HtGs%2Fn9MIam8Wi5oEcvvhlr6rIFOlr6c5CU4lf8hMIkVh354jCJ%2B%2BC9BjqkAXLHlaqK%2F8bUj8BhHMHdLMbImFCHkFVBlvQkhUMJrSID9qsKI5C3UlJYDqKfV3VlyI1bzWOd61IqdhH%2BcThhmR%2F49pQGbpZ1rK4bBEaz%2BIEpzeMoMXyzpAaxJ2HDVjFr6uu0iDmdWfj%2BRWjuZwgKEG5k6kbb0DxyLUm6L98Nm%2BEjTmtlJ3P8Zeww%2BG2O7ccYO7ey%2BzfiPh7aQHTIn%2FjhL5TuDZDg&X-Amz-Signature=fd8c6ead9df5356ce620fd196ffa1c04afa8b6c74f1e4fdc9676856bf19e215c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WSDNPQ5%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmjpuDp4t5FSgb5f7fiFMvJRlrhqU6drEMyC8u3SPOKwIhAOMRs5Ke3qKzSxb64zLUyNiaMIVJ74EW08jB5XvYnCpkKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwI%2FelbKwu7DQVzJ9Eq3AM%2FTBjYjechcCrVdWUvegRItNBFFZCGZ9OQf5F6LrwgFnuaUy%2FpQtd4WK4vN63sa09Q5H5K3ACpAE49ijlN1%2BlF875niws7upTM%2Bac9wpYOME9A1klxRr9KN1o6T7LOQbBSYEmWigp4kM27BJrLtmChYhMUffL3O2eKDRMkimFZRUPDbzEUQ0vQaVG9DMz9tqyKsCK4IP6yW5%2FW513iUxbJe1stiHKkL3bT%2BT6gNZwD0pYhNHflGgml1Ap5uho%2FY2d9ynbLIB0RiXZWgTQ8mb6YsWAc4s%2BPd22lsoV1EUyD6g4H94OlyQOThIc%2FvlYVsNw6mIO3W%2B19MHFPPgA6R6tMVHYwxKT98s02LMg37TG91XJi5HDf%2ByNs4U%2BQ6VsHsD5%2B8EUh8960feUapCwxPWK4IMBXbS41TDdIZq%2BEzuylVwa6%2F2rg5Y%2F7pYXH5RJRzA4sdO%2B6dy3MSmnnjOxMX6A1zC7%2FkKWucZN4zvcVjRk0DoGqa9VVMkTH0r3vPiWwokn%2FLE2Z4dZB9WRWU5WIpt%2BPSB9QsdvoRzx6rBzOPiYb5C0wL%2BgbZ8pCi%2FZM5c8qfjJA1phY9tH03HtGs%2Fn9MIam8Wi5oEcvvhlr6rIFOlr6c5CU4lf8hMIkVh354jCJ%2B%2BC9BjqkAXLHlaqK%2F8bUj8BhHMHdLMbImFCHkFVBlvQkhUMJrSID9qsKI5C3UlJYDqKfV3VlyI1bzWOd61IqdhH%2BcThhmR%2F49pQGbpZ1rK4bBEaz%2BIEpzeMoMXyzpAaxJ2HDVjFr6uu0iDmdWfj%2BRWjuZwgKEG5k6kbb0DxyLUm6L98Nm%2BEjTmtlJ3P8Zeww%2BG2O7ccYO7ey%2BzfiPh7aQHTIn%2FjhL5TuDZDg&X-Amz-Signature=f360e37bbe017a8b010cb6339ba49408afaae0b3719d253f81f988050fa83ee3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
