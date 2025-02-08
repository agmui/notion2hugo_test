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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLUIW7UK%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIHvDOnDCzvi95m5N1OnIip47teGG1TEZQZdOOF9Y884pAiEA%2F%2BCwfKan%2Bsx8dJfV7uSkGrYKeBcKOXkrkq8K0Jmav0kqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIrBPMX8M7OkFu3uUircA9YLVclCRG37cVC5%2B%2BUpEpCGSCcqOGU71OTHJLL9zxLNS52PuDZCNcyahujACWN2xu9Qa9rbT%2FVJgi4vKwTUw7tsFgew4REO2s3NLytzQd34Tke2yczZyoxRIvxE6RMI2bTQm2LCeMbJRlxx9yHaA%2FOouaOT%2Ff6DKHU%2Ba%2Bo3Z41QOm4OEdznve4Tx9pGydoUifMR1%2F%2FKYSbOt9GLrUgouyclxF0dciwyczhioAqZoMjGHtfGAkN%2FGliu9MJc7KUndexLB9MUnEU5%2BUhUTMlhU%2BfHJ1TF5yEfrgsKOY2gXk8TYQZMFStkSiIDmNjz%2F4zrl27QhXzrYKqxmxUVvqR6DV5hbukQOVRboiU8Y2cDqg27cGpA%2FfF66BoLrf7Vfjp4bWd8PMW6pa6SfG3wuxJQ8A0y7w%2BXelj9eiiwhHIlpcAnR0%2Bvzd9fkHu3L1sRAZTG2%2F5xr%2F2qRcRrGRv2P7eKy92iufN%2FrwcRH3XTRO%2F9iXSi96O%2FpR7VYPDHnry4rSSE7tO12rQebYE%2B%2BRpvhOTgNw4LJxaiTvELHPeMVOoJ%2FHQpTYSK92mXxfPuDOOkQdzWlWFWVAYPl3V%2BvMzr3CsQuFPuQqu6CTXJZqfwVlu5GOP54Qn578zWF96gZsg%2FMNKHnb0GOqUBcxXQ7U7DaR9xN8xowGk5GBXEiqC8NeRgfo%2BulDNVcE4rjdtMluVJUenTjnQWRoE%2Bpnjs1inB9FEq5rBqOBqic9sUXrNl6e87Dyz3ep2MMl7TBy3xvwEFmpmu4dPRobzFi0conCov2QHvfthF1tMu1k3FjoivT8yXGnla99jfUzN4rKkd8HQPtzXo3Gkle9SvuCm88kE%2FnhZm3JHcRgkQfbS4zIT4&X-Amz-Signature=97486b7c274b4a54578b3500511f7de017b3955979a0d8697c1107775783b282&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLUIW7UK%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIHvDOnDCzvi95m5N1OnIip47teGG1TEZQZdOOF9Y884pAiEA%2F%2BCwfKan%2Bsx8dJfV7uSkGrYKeBcKOXkrkq8K0Jmav0kqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIrBPMX8M7OkFu3uUircA9YLVclCRG37cVC5%2B%2BUpEpCGSCcqOGU71OTHJLL9zxLNS52PuDZCNcyahujACWN2xu9Qa9rbT%2FVJgi4vKwTUw7tsFgew4REO2s3NLytzQd34Tke2yczZyoxRIvxE6RMI2bTQm2LCeMbJRlxx9yHaA%2FOouaOT%2Ff6DKHU%2Ba%2Bo3Z41QOm4OEdznve4Tx9pGydoUifMR1%2F%2FKYSbOt9GLrUgouyclxF0dciwyczhioAqZoMjGHtfGAkN%2FGliu9MJc7KUndexLB9MUnEU5%2BUhUTMlhU%2BfHJ1TF5yEfrgsKOY2gXk8TYQZMFStkSiIDmNjz%2F4zrl27QhXzrYKqxmxUVvqR6DV5hbukQOVRboiU8Y2cDqg27cGpA%2FfF66BoLrf7Vfjp4bWd8PMW6pa6SfG3wuxJQ8A0y7w%2BXelj9eiiwhHIlpcAnR0%2Bvzd9fkHu3L1sRAZTG2%2F5xr%2F2qRcRrGRv2P7eKy92iufN%2FrwcRH3XTRO%2F9iXSi96O%2FpR7VYPDHnry4rSSE7tO12rQebYE%2B%2BRpvhOTgNw4LJxaiTvELHPeMVOoJ%2FHQpTYSK92mXxfPuDOOkQdzWlWFWVAYPl3V%2BvMzr3CsQuFPuQqu6CTXJZqfwVlu5GOP54Qn578zWF96gZsg%2FMNKHnb0GOqUBcxXQ7U7DaR9xN8xowGk5GBXEiqC8NeRgfo%2BulDNVcE4rjdtMluVJUenTjnQWRoE%2Bpnjs1inB9FEq5rBqOBqic9sUXrNl6e87Dyz3ep2MMl7TBy3xvwEFmpmu4dPRobzFi0conCov2QHvfthF1tMu1k3FjoivT8yXGnla99jfUzN4rKkd8HQPtzXo3Gkle9SvuCm88kE%2FnhZm3JHcRgkQfbS4zIT4&X-Amz-Signature=c75d258dff1e891e4787f9d77ac4cfca9d8a04891cffef2e6e2f3c2237313c2e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
