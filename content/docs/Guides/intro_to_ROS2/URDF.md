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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAP2LQJG%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQD1t74jA3RvFiYTd%2FN7dPIQ0y0HzOrgzcBXKQzCTa2kmwIgUzWTVnsqfntW6lxprN4rOdNEnrMyowr%2FMYYaUjO%2FjAoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDHgZVx0QzkM5ytFjRSrcA2tqaB3kCO%2F%2FFPvkoGri52Bn8%2FTEtZH5xGwKIR3RTrqwn23Ld46%2BO0cPePvA3LdGuPgEicFgQlYdj9VyfC2AOd720tX%2FMhokzNdqDF%2FchBIHj3kdYuSnQ0bstluHDLZqbJdyZtxpN8MdZQ7SAWbzNXHTWFKLlIpuudVFvEYeVtLHPK3QfYRWwpxazH8ihOdOTLLNEoaNxLihi1yljjoG7Fnv42LN3IOiSMva%2BOnR%2FIsBOvqRzXB35ou6Xc3llLd6hLzl7dTGnjiuqVRzRK%2BN5SY7n9xW14XfdBEf4kIE5X7U3YzcmWjNB4NbZhLtu8SkHoikDnU%2Bgp%2F%2B0hYCmUdCl6PlY%2F%2Fbk%2FHBFCl7qqZpBLKN07oDlHUebQuud7eSr2BeCnXpLJ9haBOxcXpgEq%2BxYnVhYHEHBJvFc20Xcv4S%2Brt2fe%2BZUZC0yFYGA9mhIhha4sHB8WW0v7CV0HWvV0Qzcnu0PVopHWd4NQDkRDH3ovv7j6shS0Uu3orkNsFwH8Tk7onWGPld6I3wAqHH7onzYlZMLqEv7enVZmLRi6yh6iiQtZjhBHRULjb0Yau1L2kmAAVG6rQj76nKYpPdXGylUTzi4jVAKXj9RxByaRKOTq%2FPnToUyNhKJAok5OjVMOmGosMGOqUBhV3VIkh1dPMnfpSw1Xo50F8hOeF7pGCOjzj%2FPyCvnGMiRnc9bcgeE%2BO48l0so%2FDewzavxBhkyLxwN6mAXXe%2BdZA3Tzzov3B%2FF7zZholgMlpsGGgmNv33jPIkF3i1zRSG3rNwadiWhG472m%2B0IsuYIGkQvglKFOD4t4YmpXzkYyJgmZz22bzNOAbtypS8dkewnQB%2BGI6noBgDRusmD4iol8lJvuaW&X-Amz-Signature=c6e5c21e7f5af6943b5053bc17b25bf0d3fb4d22685246a37611d8f4df5032f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAP2LQJG%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQD1t74jA3RvFiYTd%2FN7dPIQ0y0HzOrgzcBXKQzCTa2kmwIgUzWTVnsqfntW6lxprN4rOdNEnrMyowr%2FMYYaUjO%2FjAoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDHgZVx0QzkM5ytFjRSrcA2tqaB3kCO%2F%2FFPvkoGri52Bn8%2FTEtZH5xGwKIR3RTrqwn23Ld46%2BO0cPePvA3LdGuPgEicFgQlYdj9VyfC2AOd720tX%2FMhokzNdqDF%2FchBIHj3kdYuSnQ0bstluHDLZqbJdyZtxpN8MdZQ7SAWbzNXHTWFKLlIpuudVFvEYeVtLHPK3QfYRWwpxazH8ihOdOTLLNEoaNxLihi1yljjoG7Fnv42LN3IOiSMva%2BOnR%2FIsBOvqRzXB35ou6Xc3llLd6hLzl7dTGnjiuqVRzRK%2BN5SY7n9xW14XfdBEf4kIE5X7U3YzcmWjNB4NbZhLtu8SkHoikDnU%2Bgp%2F%2B0hYCmUdCl6PlY%2F%2Fbk%2FHBFCl7qqZpBLKN07oDlHUebQuud7eSr2BeCnXpLJ9haBOxcXpgEq%2BxYnVhYHEHBJvFc20Xcv4S%2Brt2fe%2BZUZC0yFYGA9mhIhha4sHB8WW0v7CV0HWvV0Qzcnu0PVopHWd4NQDkRDH3ovv7j6shS0Uu3orkNsFwH8Tk7onWGPld6I3wAqHH7onzYlZMLqEv7enVZmLRi6yh6iiQtZjhBHRULjb0Yau1L2kmAAVG6rQj76nKYpPdXGylUTzi4jVAKXj9RxByaRKOTq%2FPnToUyNhKJAok5OjVMOmGosMGOqUBhV3VIkh1dPMnfpSw1Xo50F8hOeF7pGCOjzj%2FPyCvnGMiRnc9bcgeE%2BO48l0so%2FDewzavxBhkyLxwN6mAXXe%2BdZA3Tzzov3B%2FF7zZholgMlpsGGgmNv33jPIkF3i1zRSG3rNwadiWhG472m%2B0IsuYIGkQvglKFOD4t4YmpXzkYyJgmZz22bzNOAbtypS8dkewnQB%2BGI6noBgDRusmD4iol8lJvuaW&X-Amz-Signature=0c50b6040e421ed2613d062498f5fc7681e2a3d0db673f15d9d1b69805198a53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
