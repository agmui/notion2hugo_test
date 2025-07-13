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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK3LAQBI%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZKilM%2FGqgnJSXXf%2F2aK26Pl2J8NBo8PXrsy34CpydrAiEAxIyg5MKWcaTAj12E5nMPALRH8uaRWbWml2fR3u5%2FJ0MqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWy1p29WL0D%2FnKyiircAwkW5x2WRCDr%2B908EH9SjO4IJOggs56HaPJLp1LcShPoom52ookEy4b7R207LYcVtCZfwjkvgi8V5AQiqsw4uRSiZaRXvNnWWGRyqFwmgLmapOMyNccuoNZ9RIWGX%2BTMqxKNofz%2F6BNEhNB6r2qLQmMlNJMoLMOigeROM7DCs5UTnii5DnnyKm3iXUaF%2BovFK93ZlS953IzVqy7igUyxmU8uEiTI2bsatQT%2FuHHvGuQEwXB5nY4ntViOc1PjZTn4Rxv9u3OXGHuYwjjx3EqSoOl35zitXHhV8noVb7onms4YoP7mCLybJeNIHNkfYFdoAYHl%2FitnbPhRLYnD4bLPrWyFnrNgVYupubcAVURDqGm9LeNySxLCzXERfxse5PYd4uraueq7XITQ6DOYxL2PBi%2FV62feD3Ul%2BGnKOv6ze6s8LJF48tA0vecxmRI%2FZ4SWRm5zy3YwzW5oDaxksjN8zuXFhzVVSGwi9uf2SIZuXiap%2B9rySIlzwFKgS%2F1UjZjTsB5Qlte%2BFM%2BeRR4TlXdOiBCWSvAQreAd1kY7ML3EfNzOw3O9yh2CRsXBP1X7lB5sXKjddEadqyJ%2BPwINofgd9%2BkbhKdInUWSGP0hBrZSrQwB43WWK9tlXXuISNw3MO6jzcMGOqUBI6kPPjzjt%2BxhMJfdUu1Ipr0J7feUzOAA%2BVA279utqSTDHaSRi5Cl9NsnsZE9QHUejCaUDtkePx%2FEbSFuH98gQ0PF3ZhP1EbDpgAA4GA%2Bze8vVpTmEalPCnmcvQ0VYhqqYPWA1cTqCsstPTVQnmnRbojRVJL83b5RBd7tB8iQNg5S%2FC7bojNgX%2FxNMAMO%2F9oELMOL2gIVMZFGmF329uDkrbDyPX4F&X-Amz-Signature=1cc7c6fa8b13fb8dd188b76e376c160f5bc6b3b4b07f51eebafa16a4dd3a1049&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK3LAQBI%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZKilM%2FGqgnJSXXf%2F2aK26Pl2J8NBo8PXrsy34CpydrAiEAxIyg5MKWcaTAj12E5nMPALRH8uaRWbWml2fR3u5%2FJ0MqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWy1p29WL0D%2FnKyiircAwkW5x2WRCDr%2B908EH9SjO4IJOggs56HaPJLp1LcShPoom52ookEy4b7R207LYcVtCZfwjkvgi8V5AQiqsw4uRSiZaRXvNnWWGRyqFwmgLmapOMyNccuoNZ9RIWGX%2BTMqxKNofz%2F6BNEhNB6r2qLQmMlNJMoLMOigeROM7DCs5UTnii5DnnyKm3iXUaF%2BovFK93ZlS953IzVqy7igUyxmU8uEiTI2bsatQT%2FuHHvGuQEwXB5nY4ntViOc1PjZTn4Rxv9u3OXGHuYwjjx3EqSoOl35zitXHhV8noVb7onms4YoP7mCLybJeNIHNkfYFdoAYHl%2FitnbPhRLYnD4bLPrWyFnrNgVYupubcAVURDqGm9LeNySxLCzXERfxse5PYd4uraueq7XITQ6DOYxL2PBi%2FV62feD3Ul%2BGnKOv6ze6s8LJF48tA0vecxmRI%2FZ4SWRm5zy3YwzW5oDaxksjN8zuXFhzVVSGwi9uf2SIZuXiap%2B9rySIlzwFKgS%2F1UjZjTsB5Qlte%2BFM%2BeRR4TlXdOiBCWSvAQreAd1kY7ML3EfNzOw3O9yh2CRsXBP1X7lB5sXKjddEadqyJ%2BPwINofgd9%2BkbhKdInUWSGP0hBrZSrQwB43WWK9tlXXuISNw3MO6jzcMGOqUBI6kPPjzjt%2BxhMJfdUu1Ipr0J7feUzOAA%2BVA279utqSTDHaSRi5Cl9NsnsZE9QHUejCaUDtkePx%2FEbSFuH98gQ0PF3ZhP1EbDpgAA4GA%2Bze8vVpTmEalPCnmcvQ0VYhqqYPWA1cTqCsstPTVQnmnRbojRVJL83b5RBd7tB8iQNg5S%2FC7bojNgX%2FxNMAMO%2F9oELMOL2gIVMZFGmF329uDkrbDyPX4F&X-Amz-Signature=839b1c36b790e503629bec6e24530e1d741ff4cfb4a8c3613a38dcfae6a47b47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
