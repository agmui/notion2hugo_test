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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UXGJEOZ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T032322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeA8atJJvY4eOdXeuqjJDdpNNNI4Kbzdzt3zICAlm%2FhgIgIWfthDlhPEiTfQF%2FldLE3yFjFUmkFb01Ak8LQv%2Bpxd0q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDD2OYQSm6oct%2FK%2F2SircA7V5L%2Bu2NxVKEzJqqmozfPiTuHH3G%2FPn%2B%2FFGGzRGSLKhn%2BUno%2Bqor2K7VIHj3QEVX3vf7mM5PFt%2F%2BX2Ek7Lz3BfMojg7u0exdFiAzBUWvwCe5F%2Bq%2BoYCBxo1lnL7NRBisfZjAqon2qr31FiXReF2BPJvohH5C%2B%2BJHv%2FSOc52FegqV7lJZhVYQwj0vAu0V1FK7dIFtbG5zWSPgAazL%2FKZyt9R53dRBIQ%2BUqv0ds4Ilo2qDUpwr7xx0YYO8jGLZqS0oSJceY6Z7d1lgSMdFbD5x2RDAlfCrjrPzQYWVfITbxL8KHqPRog%2Fdo%2BBBWQdh109Mp%2Fy%2FZrIEJwdYg5Ff3yGCFDoOHENwaUOyjX34nst7%2BA1%2FMM5ljsRfmxWR2KBHZRXHBZZJjm%2BGf23dtHIJ8tA0SV0OfYJfFrY9lrTxD0Dq2ygeUN0sZb7Ko3Z3vZz2VgSlVYay5Zo9Vozlo%2FvJOqXtHzyt0%2FG4mAmbGKUDob6ovXkii8OPh7kk7Qg3Da7dGTJwYaROfR69XS71830OuxbOoGYWk0ScR6rUXuQpn0%2FnND2n4WTy22iaNac5pNaihP5T62%2BexUxQ7gOVKmUJOChTd0Z1Q7diwhnJYmgaxgzOYU5DeDe3l5G79%2FyW6CQMLqB2L4GOqUBG65Zp4uZi0fjitkPrYXEHJIecKv688nthq6vdOHASItB1uqmP4XquMEHFs1IpcLhtqGKzJQBB0xIjtZCvGXZqGEy43oIVNINUxxtWs%2FJN3ZSikA7eezz7SUynktfTgGlGeP0Lb7hr%2FqsCZCSLihve%2BizDy2chkG2hFdfV%2BUtfBcD3%2BGvvgenNsQFv5Qrt8h%2FEHEPxJZCl3o39rOZODgJHH%2FSCatv&X-Amz-Signature=855344f6f498ed6e0fa8f42d1c9df695830480a98c485b1bb511ead53d008034&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UXGJEOZ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T032322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeA8atJJvY4eOdXeuqjJDdpNNNI4Kbzdzt3zICAlm%2FhgIgIWfthDlhPEiTfQF%2FldLE3yFjFUmkFb01Ak8LQv%2Bpxd0q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDD2OYQSm6oct%2FK%2F2SircA7V5L%2Bu2NxVKEzJqqmozfPiTuHH3G%2FPn%2B%2FFGGzRGSLKhn%2BUno%2Bqor2K7VIHj3QEVX3vf7mM5PFt%2F%2BX2Ek7Lz3BfMojg7u0exdFiAzBUWvwCe5F%2Bq%2BoYCBxo1lnL7NRBisfZjAqon2qr31FiXReF2BPJvohH5C%2B%2BJHv%2FSOc52FegqV7lJZhVYQwj0vAu0V1FK7dIFtbG5zWSPgAazL%2FKZyt9R53dRBIQ%2BUqv0ds4Ilo2qDUpwr7xx0YYO8jGLZqS0oSJceY6Z7d1lgSMdFbD5x2RDAlfCrjrPzQYWVfITbxL8KHqPRog%2Fdo%2BBBWQdh109Mp%2Fy%2FZrIEJwdYg5Ff3yGCFDoOHENwaUOyjX34nst7%2BA1%2FMM5ljsRfmxWR2KBHZRXHBZZJjm%2BGf23dtHIJ8tA0SV0OfYJfFrY9lrTxD0Dq2ygeUN0sZb7Ko3Z3vZz2VgSlVYay5Zo9Vozlo%2FvJOqXtHzyt0%2FG4mAmbGKUDob6ovXkii8OPh7kk7Qg3Da7dGTJwYaROfR69XS71830OuxbOoGYWk0ScR6rUXuQpn0%2FnND2n4WTy22iaNac5pNaihP5T62%2BexUxQ7gOVKmUJOChTd0Z1Q7diwhnJYmgaxgzOYU5DeDe3l5G79%2FyW6CQMLqB2L4GOqUBG65Zp4uZi0fjitkPrYXEHJIecKv688nthq6vdOHASItB1uqmP4XquMEHFs1IpcLhtqGKzJQBB0xIjtZCvGXZqGEy43oIVNINUxxtWs%2FJN3ZSikA7eezz7SUynktfTgGlGeP0Lb7hr%2FqsCZCSLihve%2BizDy2chkG2hFdfV%2BUtfBcD3%2BGvvgenNsQFv5Qrt8h%2FEHEPxJZCl3o39rOZODgJHH%2FSCatv&X-Amz-Signature=95c7b86df9877eb86169f98d05e1b587f75e49e6dc7782740d3158a01175a1d5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
