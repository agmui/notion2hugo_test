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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EVJBQMK%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEv1%2F6Xr0705iMagM77gZ0HZBDPCxJTINawe97ByjuvKAiEA00xxcxqEjs%2BsZE%2BbqskBmNHYH4vnadIRlY1Lp0Ipt5AqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBSi7KRwcSTar0F3AircAwnaGtEQRyhqzK%2FFahqBgddRvOr5%2FI42mG37FryiI05RNrFiXQtqJB1U38l3dlWjvjzQkIhHxZSXKF0FsdCFOvVPRvA5%2BaZJfu3mePJ4A8lvnxEUfFXHNKR7MjbH5FalbdUBavZdQEraPrStxm3vHGHaODI6WAf9WhlSP1ptwjjqxPXcRYTF%2BgfuvPMmq2WE8xlv8%2Fwz6AH%2FJEYkfHfCAOAONLzLbQikMTUEGABLTNXgt8PfYgk5EJAEXBkuS4zgINeP8xGTW1x5J5H7vmCaVwah6Jo64Nm8nt2kf0T7s4b1%2BWdXvF9cXJ4fW36ky4FrmB2rDAZEjZHxdoCLci88ylVEnW365aIb8%2FMxkYrCSD5CgFAeopqls3UUe%2Bm5n0yZ%2BtpX%2FQKLU7Wy3puzOb9U3Gwo0wjDej6nT6rDXTUnfl1IWFvvsn8Yr%2F98QwkWW3fkYLuUZ41T054yv3n8m0oWyxLuczSu3Hbpx6CRlg2Ku3wmxb9Ndi%2BvgFeQK8aw8e%2BAjXk7wcnxd1AuEdespMlihcaDdla8TM0aM2BQzoHfDW1Zv0Xm5v%2FlAErICKXD0bY10oIPegeMcJ4JS22f0XjHYbRfQ0yhtq4BTBHf3eQyFt63Dz73kCqd1PWr0hOMMNWSrr0GOqUBWmQl9OihHYYlQzVlvEj68oN0P0Cx%2FfxFgwNA9jMvZj0d4Bz6WsDXz6YhtWWaeWK9AXbUH0%2FQSVmARKFhxiNL773uQQUbtdtxQVptkol83JsQo2uZlTFOv5%2Fy7zmSwyNqnz40Oc06bPk4KfjvMp7TRbhGf2%2F6bFkTLwyYW8Uz6bzTJuJu7RpQ31CrdmNoRb2xdiQLJ9nQOtuJU3KlMyA2vh0HUcd1&X-Amz-Signature=76cd911b1d9dcc19923e77ff93c04ec02f70455e1ab95ae74270b022d11758eb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EVJBQMK%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEv1%2F6Xr0705iMagM77gZ0HZBDPCxJTINawe97ByjuvKAiEA00xxcxqEjs%2BsZE%2BbqskBmNHYH4vnadIRlY1Lp0Ipt5AqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBSi7KRwcSTar0F3AircAwnaGtEQRyhqzK%2FFahqBgddRvOr5%2FI42mG37FryiI05RNrFiXQtqJB1U38l3dlWjvjzQkIhHxZSXKF0FsdCFOvVPRvA5%2BaZJfu3mePJ4A8lvnxEUfFXHNKR7MjbH5FalbdUBavZdQEraPrStxm3vHGHaODI6WAf9WhlSP1ptwjjqxPXcRYTF%2BgfuvPMmq2WE8xlv8%2Fwz6AH%2FJEYkfHfCAOAONLzLbQikMTUEGABLTNXgt8PfYgk5EJAEXBkuS4zgINeP8xGTW1x5J5H7vmCaVwah6Jo64Nm8nt2kf0T7s4b1%2BWdXvF9cXJ4fW36ky4FrmB2rDAZEjZHxdoCLci88ylVEnW365aIb8%2FMxkYrCSD5CgFAeopqls3UUe%2Bm5n0yZ%2BtpX%2FQKLU7Wy3puzOb9U3Gwo0wjDej6nT6rDXTUnfl1IWFvvsn8Yr%2F98QwkWW3fkYLuUZ41T054yv3n8m0oWyxLuczSu3Hbpx6CRlg2Ku3wmxb9Ndi%2BvgFeQK8aw8e%2BAjXk7wcnxd1AuEdespMlihcaDdla8TM0aM2BQzoHfDW1Zv0Xm5v%2FlAErICKXD0bY10oIPegeMcJ4JS22f0XjHYbRfQ0yhtq4BTBHf3eQyFt63Dz73kCqd1PWr0hOMMNWSrr0GOqUBWmQl9OihHYYlQzVlvEj68oN0P0Cx%2FfxFgwNA9jMvZj0d4Bz6WsDXz6YhtWWaeWK9AXbUH0%2FQSVmARKFhxiNL773uQQUbtdtxQVptkol83JsQo2uZlTFOv5%2Fy7zmSwyNqnz40Oc06bPk4KfjvMp7TRbhGf2%2F6bFkTLwyYW8Uz6bzTJuJu7RpQ31CrdmNoRb2xdiQLJ9nQOtuJU3KlMyA2vh0HUcd1&X-Amz-Signature=ab93225f82d9990e0ab7f3cdba5adf43e21930f996d3707515b9e400f2018150&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
