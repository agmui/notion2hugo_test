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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKM6ZSJA%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQoDqLwYbLm6ZHajpSmqVOveR6eJGFz0eDCpmVAHKh%2FwIhAPW1YOMlMLVyNPkRGBtp%2FW8k1%2BpdJRm%2Fr6CAgZaghJcyKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlGocXT6eHsQQhV1cq3AOrs5AGapCBRQD4Vd0jNqlkP7k4C8c48R2ieyal5OjJN1BbvxKSI67eBMWMIq6I1E3oZoIytdBHkE1TcIoVNWTXYpYgI5%2Fvl7avqRWIrjKfnkBpQsMgMgiXPNf0KaKkBT8L8kmtj2yvMkj%2BPt9ntldF0lwuIivizHTmYngGeSh%2BveRi47b0EsURe6xEAt7q4xL2xE7gGYMbXQElpm4CyIe%2Ft0fgPgFGnRHBhm8%2FD0ZOePMH7soger8dVhRd%2FdpEHK2nNT5Um4K9nyCcVc2qOgvAIKOZgD7zk37Eo0VhW8MtfLlPWSbaMbpIbA7WKoGptYOiA2JSgHJu%2FPpQVsOJ9oD%2BrW8bu8rQkop8aXKwlhPje7DtrOmokay4ODFXWfbB4xH6sZSR51J9ZZckdEmzalinuycVdXLM8SB0W8wSrsKyS59j1GGt3iSDLz1lQlhnchYcStBElj0vIl7KGutmd3zHzCNwzsyVi3FzWjU9TqeXPdXx7HTpMi0kgJhNp4tktt1WRACJPK33IreFAIhFMjzN2sVoCso8Qm0%2BtDqhGcQUE2xfMWm3S99cSKM6JeyXPogLTEbt%2FQUy5I9oQMNy5yS4i5X31kU1blG9rj3OqUMAw0WkUAqVHQ1ZV1J0DzC38%2Fq8BjqkAddof8FEMc4xCW8rTj5SuXsjckjPfdXkXNJo4cgyCFZfVClkKZPFOufnM5CXYsGsK5A4mPZz0%2BjIabL%2BYc47s0tWptGxv9uj5z1D2skBFANFfTXmPNN2f4kO9TiTG%2BjDkww967PQvn84Q3LPY7LOvnueM7JFhlcrQj7F9djDP9BZFFqkD71gcbINgktSTre%2F5Y0MsbPDyouwYSZg%2B623U3V97Ugu&X-Amz-Signature=1f4798d99eaeea47fdd786ed726afc15d44dcfddc16e09857ac8a75b88e745c5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKM6ZSJA%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQoDqLwYbLm6ZHajpSmqVOveR6eJGFz0eDCpmVAHKh%2FwIhAPW1YOMlMLVyNPkRGBtp%2FW8k1%2BpdJRm%2Fr6CAgZaghJcyKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlGocXT6eHsQQhV1cq3AOrs5AGapCBRQD4Vd0jNqlkP7k4C8c48R2ieyal5OjJN1BbvxKSI67eBMWMIq6I1E3oZoIytdBHkE1TcIoVNWTXYpYgI5%2Fvl7avqRWIrjKfnkBpQsMgMgiXPNf0KaKkBT8L8kmtj2yvMkj%2BPt9ntldF0lwuIivizHTmYngGeSh%2BveRi47b0EsURe6xEAt7q4xL2xE7gGYMbXQElpm4CyIe%2Ft0fgPgFGnRHBhm8%2FD0ZOePMH7soger8dVhRd%2FdpEHK2nNT5Um4K9nyCcVc2qOgvAIKOZgD7zk37Eo0VhW8MtfLlPWSbaMbpIbA7WKoGptYOiA2JSgHJu%2FPpQVsOJ9oD%2BrW8bu8rQkop8aXKwlhPje7DtrOmokay4ODFXWfbB4xH6sZSR51J9ZZckdEmzalinuycVdXLM8SB0W8wSrsKyS59j1GGt3iSDLz1lQlhnchYcStBElj0vIl7KGutmd3zHzCNwzsyVi3FzWjU9TqeXPdXx7HTpMi0kgJhNp4tktt1WRACJPK33IreFAIhFMjzN2sVoCso8Qm0%2BtDqhGcQUE2xfMWm3S99cSKM6JeyXPogLTEbt%2FQUy5I9oQMNy5yS4i5X31kU1blG9rj3OqUMAw0WkUAqVHQ1ZV1J0DzC38%2Fq8BjqkAddof8FEMc4xCW8rTj5SuXsjckjPfdXkXNJo4cgyCFZfVClkKZPFOufnM5CXYsGsK5A4mPZz0%2BjIabL%2BYc47s0tWptGxv9uj5z1D2skBFANFfTXmPNN2f4kO9TiTG%2BjDkww967PQvn84Q3LPY7LOvnueM7JFhlcrQj7F9djDP9BZFFqkD71gcbINgktSTre%2F5Y0MsbPDyouwYSZg%2B623U3V97Ugu&X-Amz-Signature=747ee7f6b461f8b94230749fcc74d20b59422a56c5b6832c9048617c36afb24b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
