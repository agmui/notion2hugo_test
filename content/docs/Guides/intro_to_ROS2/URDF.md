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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5GK4UAF%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIAz1p%2BPluzfPZL1a7LX0Z7o6FCXNSOY%2BzdrT%2BtgAqlOSAiEAyCg1%2Fa7o0CJtIVEYUP8PtcQTXYEIDat4fP9LK3zDUC8q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDE7ozybOOZYJcMeoGSrcAwpjL46NDnkNopJtFdzspGytQEoMDAE1HI3D%2F1654fjvAZYn3YslRPjiu6eMGnLTm5C%2BOGMEKyMI2W%2Bgn6dfuHRJkPHjbADVsXysmfy%2BORMBgVMpjx7%2FFgC13nwfB7P7zrD6yIX3OVqOk2wT93WRuN8ploqGav9w2BxHj9qT65AFCVs8k0%2B%2BkAPL8ba1CtPbXxou6gi9GUFrFlsrN306AzgDsqAkkO0RqVPZtwCsybpnoAEtWG5DqJJPVAf6XayUQWauZfvDUsckIpxOSEB61pe5zDJKC%2F5zBg34D0I5PHtZgi6P6DGkLcJdRFeHI%2BrV28MdIrOWLaO4vN%2B3mpPVsPIAWmUF%2BGtlEccRJEWXxFbxtroGpj5okjVqjZyHTS1%2F7l1kZZlocvD6DuRQh1GmiLUKGWzriD%2FuuwPMNIZZvYbgxz8j%2F2%2BgJMQC%2FblIGiWHbBfE0mFpSTz5t5TxU%2BwZ3UlTPDoikCUqGq8HTRXMd5mSPRM9XCljvZwHBShwX8IDY9hMxGW5Vjb8KpkHGKjat7PuMxm2%2FYkC1Zwrhpk5ffyfFktLDKg0Un3m0ilCgGYr9yXDT7lhCGtNzszCyJeeJd2yuMxZF%2BujISwSOaE9ley4seYhduR2x7yKjEdhMLDMg70GOqUBJlT4ZoLIyA85UkJa5YILTVAhaYda2G3vxtZdUsxdGyjrN7HF5PLMtvrsWhsT4NBwqcn63nqtgPRW0%2F0FLGh9Ac4UOqz7oYLzjSq3ST5DvHSPtB1ERLTlMu%2FuuYgkttXpdQXFKODWhtLNFyr%2BSSpDnzFiFnCsJo%2BINybYqkHJ67SgLGF%2FmInIigfi5r3CrinJflRBdmI7XB0q6D%2BYv8OtGvcaTJZ5&X-Amz-Signature=8f10b25108db19ba5893f096f3243e02d0ac40cd8101c513247a04319de4ca27&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5GK4UAF%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIAz1p%2BPluzfPZL1a7LX0Z7o6FCXNSOY%2BzdrT%2BtgAqlOSAiEAyCg1%2Fa7o0CJtIVEYUP8PtcQTXYEIDat4fP9LK3zDUC8q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDE7ozybOOZYJcMeoGSrcAwpjL46NDnkNopJtFdzspGytQEoMDAE1HI3D%2F1654fjvAZYn3YslRPjiu6eMGnLTm5C%2BOGMEKyMI2W%2Bgn6dfuHRJkPHjbADVsXysmfy%2BORMBgVMpjx7%2FFgC13nwfB7P7zrD6yIX3OVqOk2wT93WRuN8ploqGav9w2BxHj9qT65AFCVs8k0%2B%2BkAPL8ba1CtPbXxou6gi9GUFrFlsrN306AzgDsqAkkO0RqVPZtwCsybpnoAEtWG5DqJJPVAf6XayUQWauZfvDUsckIpxOSEB61pe5zDJKC%2F5zBg34D0I5PHtZgi6P6DGkLcJdRFeHI%2BrV28MdIrOWLaO4vN%2B3mpPVsPIAWmUF%2BGtlEccRJEWXxFbxtroGpj5okjVqjZyHTS1%2F7l1kZZlocvD6DuRQh1GmiLUKGWzriD%2FuuwPMNIZZvYbgxz8j%2F2%2BgJMQC%2FblIGiWHbBfE0mFpSTz5t5TxU%2BwZ3UlTPDoikCUqGq8HTRXMd5mSPRM9XCljvZwHBShwX8IDY9hMxGW5Vjb8KpkHGKjat7PuMxm2%2FYkC1Zwrhpk5ffyfFktLDKg0Un3m0ilCgGYr9yXDT7lhCGtNzszCyJeeJd2yuMxZF%2BujISwSOaE9ley4seYhduR2x7yKjEdhMLDMg70GOqUBJlT4ZoLIyA85UkJa5YILTVAhaYda2G3vxtZdUsxdGyjrN7HF5PLMtvrsWhsT4NBwqcn63nqtgPRW0%2F0FLGh9Ac4UOqz7oYLzjSq3ST5DvHSPtB1ERLTlMu%2FuuYgkttXpdQXFKODWhtLNFyr%2BSSpDnzFiFnCsJo%2BINybYqkHJ67SgLGF%2FmInIigfi5r3CrinJflRBdmI7XB0q6D%2BYv8OtGvcaTJZ5&X-Amz-Signature=01fb32695e07ff36f4838210120e37f2ea06eddd74ab26083b02d1fee90254d8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
