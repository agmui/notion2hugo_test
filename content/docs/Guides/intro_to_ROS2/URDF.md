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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2R76IMG%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIG8CoEfcFLwNufiWK13bzNUQ3yEg3gapLZUzKPDvwFOjAiBSMgbMbccxS7oBpiJRZrXiQ0btEQwrI6R8o7GUEFd%2F2CqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8ZqnJZrSoVqSHkQjKtwDnjWJ1K%2F9PrRUQWBvVZvWjvZG2EzL%2FrD1tNHxEHi0zW1sdeYQBNYegR4AlYh0qJXhMy%2FM40GG4%2FWMkkeiRwIjaFojQYBoTmUXuUeCJc5tO9kZuMOyKUX%2BbBYZYNKPiz23iykC2zSJGupdCqxq0pdgxMmtP%2BhkUIVD1enNUP%2Fh2VXCuqRUIimW1U84zlNzmOCMtUzeILcKtGYj%2BiUxIdbd8mp76ocBaKZ8o7jJzwdT2idvsh1lIFGsEuANhGzOXSP9yfsUnYKyu3s1qv%2FnXEXFCGLHWxXxSk%2FHM2TK3lzip0nPUgvW2PNHYliXWAJCpOjZi0q%2BSeTnjXe6BIOqJEu0Mi9OhWb9%2F9ZvJInXPdSM%2F4VH2DGgi%2F8u49lfXBW%2FygKn16KZQfhrUe5oHGrNgQvA%2FL9cGClHg59siBtG3N2UAaxUsMYyyJbKFdOZOp%2F%2B7yV6fuasRo5v8Tu4LGHh6biU4Qk1Jt11gEcOt82EVfOev1wwvcAewyBKBPwSdnvu3qd5Z3bz8mmVTdXIKtDMMV6PUUUFpefn0gXfbvIwNb4B6UeYTm9V4z5jpNjRvc0M06%2BKFddCWOx%2FmWzvunxjv4Rkwj30dFrz4FTX1KItjOsF%2FQ073R2VDV3MCIpi4bIwltjzvgY6pgFuI7qen0LMWw0x%2Fe91uB5ZP%2FurkVqI3n18j%2BKDLNcmj9TNgzU6mJ4SwDd9tPdISLZ4C3w3X8y4ywr%2FTIZ%2BdGIpRIgjc5BbjQhUTimz8wkWjxb%2FhS72oBIBPnFBhGXz%2FYO%2FE1ixAlCoNJTZzZuadEjEBByfavi6UePmz1hbjdGpmqq0XerWdRzOx95X2%2BbMQ92qPy0WDsszRK9tDlYog6kGIvFgpYRm&X-Amz-Signature=0bf5cd151bb1354268fba1b562dd531ee14c51d363936022f8f18e2c1e2b7273&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2R76IMG%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIG8CoEfcFLwNufiWK13bzNUQ3yEg3gapLZUzKPDvwFOjAiBSMgbMbccxS7oBpiJRZrXiQ0btEQwrI6R8o7GUEFd%2F2CqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8ZqnJZrSoVqSHkQjKtwDnjWJ1K%2F9PrRUQWBvVZvWjvZG2EzL%2FrD1tNHxEHi0zW1sdeYQBNYegR4AlYh0qJXhMy%2FM40GG4%2FWMkkeiRwIjaFojQYBoTmUXuUeCJc5tO9kZuMOyKUX%2BbBYZYNKPiz23iykC2zSJGupdCqxq0pdgxMmtP%2BhkUIVD1enNUP%2Fh2VXCuqRUIimW1U84zlNzmOCMtUzeILcKtGYj%2BiUxIdbd8mp76ocBaKZ8o7jJzwdT2idvsh1lIFGsEuANhGzOXSP9yfsUnYKyu3s1qv%2FnXEXFCGLHWxXxSk%2FHM2TK3lzip0nPUgvW2PNHYliXWAJCpOjZi0q%2BSeTnjXe6BIOqJEu0Mi9OhWb9%2F9ZvJInXPdSM%2F4VH2DGgi%2F8u49lfXBW%2FygKn16KZQfhrUe5oHGrNgQvA%2FL9cGClHg59siBtG3N2UAaxUsMYyyJbKFdOZOp%2F%2B7yV6fuasRo5v8Tu4LGHh6biU4Qk1Jt11gEcOt82EVfOev1wwvcAewyBKBPwSdnvu3qd5Z3bz8mmVTdXIKtDMMV6PUUUFpefn0gXfbvIwNb4B6UeYTm9V4z5jpNjRvc0M06%2BKFddCWOx%2FmWzvunxjv4Rkwj30dFrz4FTX1KItjOsF%2FQ073R2VDV3MCIpi4bIwltjzvgY6pgFuI7qen0LMWw0x%2Fe91uB5ZP%2FurkVqI3n18j%2BKDLNcmj9TNgzU6mJ4SwDd9tPdISLZ4C3w3X8y4ywr%2FTIZ%2BdGIpRIgjc5BbjQhUTimz8wkWjxb%2FhS72oBIBPnFBhGXz%2FYO%2FE1ixAlCoNJTZzZuadEjEBByfavi6UePmz1hbjdGpmqq0XerWdRzOx95X2%2BbMQ92qPy0WDsszRK9tDlYog6kGIvFgpYRm&X-Amz-Signature=1f7c7fe7558f58adf165fbed0aeb82830964ba66a9109af4a86cc583aa09bbf5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
