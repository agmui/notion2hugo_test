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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JGE324T%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T200800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkswLtgzAgEKnyCW3aER6QeoQUdwYVubHBAbD7Q039QAIgVplarmttiYr5momzu0bHwiCqN8Ac0M2ouLV%2FntOsU7wqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiIzB%2Bnk1Vs39Mt4yrcAz1lWR3zJ9pmD0bsYePyAuvclQH4xlBimJbnuNnCGKUecOkxS1nMPR8OC3IhykW%2Fd7ZFLf73AhR3NMCyHIjw0%2B0xUdkZKVMGFVNw%2BhkVM2uICi6p0c9284D5i2z%2Bzj6Ls2Uz2%2F4QG%2Ftt8mex0W8Fzo%2BmqvwgXD2lIC46atcIunzleGOv%2FXoIUM1%2BbGIaRsx3Q8LtBBukC2Q%2FR7%2Bj1pD%2BvZrcSw%2BtdRH9rXnT3WwMvMCGxvCHyPcVWQVLQustDwcBxlagNKfi1xNNEyZABj62R3k27puJhLWKuxllxaAHZ13x%2FUblvJ0onv4YSeF8AhetATUCcls1gT1fOn8XgE8%2BC3rj5mNhEDFs2BbXbURDgm71N%2BABL%2BGJI42pHb%2Bin%2FpnxmLpXVw5dCdomE6fd0OEZ4DpYG5DajmCmDrTy6CvVjzjUfvq7dZ78A4w0pHRa6ZtdCQEK9hjq4uyuIYOgiCPltGZXu%2BlQoACwkUMfwgsugHZQ7ZQ%2FZG5tvkdX%2FwY4AAvffT02IMOC3mIrvuCq4U5y5o3K%2F%2B%2BTePc4spb6CfPY%2F3zRjrPW5%2BhNFiZooBCvM4CYye6SbrY75ITLuuLbOK%2BNe1iCoQH71%2BlT4hPwv%2FPUoSteP0G3KGZIKC1UlMHMKaakr4GOqUB7iAbY8vlqEgMhKLEqUa81epaR7aaxRuV%2FRPt6htF0rW2Vriz%2Bjkz3s%2BASnP%2Fii3S5NJN%2FN4%2BosZRgpDw80gd9qZMSXK%2FfSZQk8Id8TjvPpDbT%2ByDYp85A42vhaKtFAQa2ux7nvcxnPf8QW606PHTc8sYKiLwSTmBD5K8QI%2FhTAmHm9%2F0eAB0LhZKg4lhZgXlOaTK5uVzIZ%2F7fEfokr3F14SyGfz6&X-Amz-Signature=9480714cef33294bd04b646f9b240a5153a492af3072683c5720f83886fcf9ca&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JGE324T%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T200800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkswLtgzAgEKnyCW3aER6QeoQUdwYVubHBAbD7Q039QAIgVplarmttiYr5momzu0bHwiCqN8Ac0M2ouLV%2FntOsU7wqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiIzB%2Bnk1Vs39Mt4yrcAz1lWR3zJ9pmD0bsYePyAuvclQH4xlBimJbnuNnCGKUecOkxS1nMPR8OC3IhykW%2Fd7ZFLf73AhR3NMCyHIjw0%2B0xUdkZKVMGFVNw%2BhkVM2uICi6p0c9284D5i2z%2Bzj6Ls2Uz2%2F4QG%2Ftt8mex0W8Fzo%2BmqvwgXD2lIC46atcIunzleGOv%2FXoIUM1%2BbGIaRsx3Q8LtBBukC2Q%2FR7%2Bj1pD%2BvZrcSw%2BtdRH9rXnT3WwMvMCGxvCHyPcVWQVLQustDwcBxlagNKfi1xNNEyZABj62R3k27puJhLWKuxllxaAHZ13x%2FUblvJ0onv4YSeF8AhetATUCcls1gT1fOn8XgE8%2BC3rj5mNhEDFs2BbXbURDgm71N%2BABL%2BGJI42pHb%2Bin%2FpnxmLpXVw5dCdomE6fd0OEZ4DpYG5DajmCmDrTy6CvVjzjUfvq7dZ78A4w0pHRa6ZtdCQEK9hjq4uyuIYOgiCPltGZXu%2BlQoACwkUMfwgsugHZQ7ZQ%2FZG5tvkdX%2FwY4AAvffT02IMOC3mIrvuCq4U5y5o3K%2F%2B%2BTePc4spb6CfPY%2F3zRjrPW5%2BhNFiZooBCvM4CYye6SbrY75ITLuuLbOK%2BNe1iCoQH71%2BlT4hPwv%2FPUoSteP0G3KGZIKC1UlMHMKaakr4GOqUB7iAbY8vlqEgMhKLEqUa81epaR7aaxRuV%2FRPt6htF0rW2Vriz%2Bjkz3s%2BASnP%2Fii3S5NJN%2FN4%2BosZRgpDw80gd9qZMSXK%2FfSZQk8Id8TjvPpDbT%2ByDYp85A42vhaKtFAQa2ux7nvcxnPf8QW606PHTc8sYKiLwSTmBD5K8QI%2FhTAmHm9%2F0eAB0LhZKg4lhZgXlOaTK5uVzIZ%2F7fEfokr3F14SyGfz6&X-Amz-Signature=143ace90ae80e8d717b47349739df4c86040f696bc59d0f40b88f004783fbc17&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
