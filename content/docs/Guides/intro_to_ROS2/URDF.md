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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I3KHE6U%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIDL8208NkUZeR%2BlloMUpgEgyU%2FIukuN6TxRCifMHH1L6AiEAlFvFlYPxz3w%2FTDOCN4YmC6cXGk2rkpVscpffNojCuvIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDDX0dDIK6%2FWc7PVlryrcA0ncMW2tavQrFuj2bu2sxCPmeMTYmdhx7KkN4tGEoJ199VNIN%2FOlQ5wLKQcAnR424CSDoDaJJFRnzo6xIBBRqfJ%2B2Un%2FZla7qaTQQXtYZPfzKzNXgsJVL35YuiuK9SEk6l2KFJgdfg2U2Uz1WQiuZ0ESP3wfGr5Ummf1LexmEop8E74lHW3Eer3fKh44gZ2OVum5fDAxYeNtYsRxuszF3wcPUa1ZmM9%2BRNqbjXGMpJPpoAped8BtP4MYr5bqQ9P05V%2FPMz706%2F1u%2FWUCuKAtxyCK%2FWcvIi3QBwcxPyz5I72yaiYUqBjyUwWSIR5JvEI62Mc9gL%2FtAxl%2FANYaway6mZoxz07jwgJ1N7kAlNKkCox2O0kQc00rP%2FVktjRSc5FOVMP%2FVgvOYbFfJoFoW3gmgeo9SI50OH1j%2B%2BsVjvtFYzXe%2BgvXH%2F0duI3jr74fCYcRBN%2F4HsGYFyc0M%2FG0uAwjpqxj4jamsRhE8aK5D5c3hk39pfxDZLRQWNPk86dK%2F6RLM%2B5sljKga%2BdsOySDveGPkah%2F8r4mABrenb3IpbkbWjcZMGFrAqKCGwXsJhWpq7Eql8H8wt8pzJOJm4Agu%2B1guOrItDVfndHEwdZ8m7Cj2kA0vTnBgEmlfHIRHD6yMPvfxcEGOqUBkfSvJC5MmJ5iLxn3fOHBavlJuH3v8Eog778%2FOv08cqAA96eEpXMwWwsZCuoyCNvlVf0jOjOPFFnmrZiibZgxu0AJhB3Sykk34VaBiFI4tiIyqmf5q0KUoFn2A1NhlisIAt%2FYcWkcDM4jlCh9LtPNHyBthOXa0uzdH%2Bo4O9E2VopWpdLIqoVQYCjO4LMtbQnxuVjhiJVqgIczyogBb4ZKGq%2Bz0FIr&X-Amz-Signature=413961f066014f25c5eca1a60faf4facb1f927dc3eb63290678a8411771c9c47&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I3KHE6U%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIDL8208NkUZeR%2BlloMUpgEgyU%2FIukuN6TxRCifMHH1L6AiEAlFvFlYPxz3w%2FTDOCN4YmC6cXGk2rkpVscpffNojCuvIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDDX0dDIK6%2FWc7PVlryrcA0ncMW2tavQrFuj2bu2sxCPmeMTYmdhx7KkN4tGEoJ199VNIN%2FOlQ5wLKQcAnR424CSDoDaJJFRnzo6xIBBRqfJ%2B2Un%2FZla7qaTQQXtYZPfzKzNXgsJVL35YuiuK9SEk6l2KFJgdfg2U2Uz1WQiuZ0ESP3wfGr5Ummf1LexmEop8E74lHW3Eer3fKh44gZ2OVum5fDAxYeNtYsRxuszF3wcPUa1ZmM9%2BRNqbjXGMpJPpoAped8BtP4MYr5bqQ9P05V%2FPMz706%2F1u%2FWUCuKAtxyCK%2FWcvIi3QBwcxPyz5I72yaiYUqBjyUwWSIR5JvEI62Mc9gL%2FtAxl%2FANYaway6mZoxz07jwgJ1N7kAlNKkCox2O0kQc00rP%2FVktjRSc5FOVMP%2FVgvOYbFfJoFoW3gmgeo9SI50OH1j%2B%2BsVjvtFYzXe%2BgvXH%2F0duI3jr74fCYcRBN%2F4HsGYFyc0M%2FG0uAwjpqxj4jamsRhE8aK5D5c3hk39pfxDZLRQWNPk86dK%2F6RLM%2B5sljKga%2BdsOySDveGPkah%2F8r4mABrenb3IpbkbWjcZMGFrAqKCGwXsJhWpq7Eql8H8wt8pzJOJm4Agu%2B1guOrItDVfndHEwdZ8m7Cj2kA0vTnBgEmlfHIRHD6yMPvfxcEGOqUBkfSvJC5MmJ5iLxn3fOHBavlJuH3v8Eog778%2FOv08cqAA96eEpXMwWwsZCuoyCNvlVf0jOjOPFFnmrZiibZgxu0AJhB3Sykk34VaBiFI4tiIyqmf5q0KUoFn2A1NhlisIAt%2FYcWkcDM4jlCh9LtPNHyBthOXa0uzdH%2Bo4O9E2VopWpdLIqoVQYCjO4LMtbQnxuVjhiJVqgIczyogBb4ZKGq%2Bz0FIr&X-Amz-Signature=67cb3b7cf554a5214283c632ce598c44c926731bff3b503e4f3350573c333c6c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
