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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C5I2CVE%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC74lZCm5RPAoGOfr8Qxwxs%2BHYGA0pOgLXb7EMtU9MMXgIhAJ7DTW0EY6XkeP%2ByGDwOJB8lWA4AX7fVwLNnQNDRsVMNKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQcpls0e8Q3DKj%2Fj0q3AO8qK1%2BcjPiCBVTYVADs1Qa0gcdZOO5oCEp6miWJguqiSr5bt%2B%2FFxcnC020AzDnRCIHbGyZ%2ByRpbdMYc47vPgQXZt6LarGmellOsGLY2yXYZfU3R8o14vKdE63CT1pt4OK%2BFnvnld2YnummnIgSeiAB0hulvf0VHN9iboo8zTvKhfW73Cjpz%2Bpj3yrWgjQYmZVeRGmM0zrufDDjAwF7BsWCT7AukPGMzfM80fcYmh7988Vi1gIw8du7Qw1E0bsCZ0Viy72D4v7D2mDQfsE3ipr2ABpkZ1vbavCK%2BrK7wGXZNTQ5GN2yBMM%2FT6kxPpXiNse%2BHL76PMIjnrH4SLRT9yLGbnhuXZzaNfgbiBW8F%2BAKKJZtsGAGEKtcjd6qT15RtIlX6qMA3ZgLGCbn4uJEtE4TjEL03R6umw%2F0mZZVB%2BUWeSXL7XEr6GADtN6FCFcV2hg8Pf7r7KfJzIcPwfaCmTYpDRKEfR4LQocMzSGVxADDaAORTNZTcIutzIGccknRY8bF%2FLAaCtDrrBRGSyxT7M4X9p%2Foa1ogyFIEy105WpWzzuPttHguvKAGjXM0jg11QxzIxP2%2FVXd958rzZJQT5sgLuVbx1oYwwlovIgq3p1JqLbzj31Q4cC%2BTUPhzrjDhuKu%2FBjqkAY8Hx3c4IMOYpngiwUB3dAJa2k0Jy7g7%2BnQM95PoH9kTOfy%2FTZEqDBnn55ytFO%2FpyRchwCs434e8YbQrRprRQUEJb8gJjFrMuUh3GL5CaO4vaquOUiGU%2F3TH84LjNTc0FnVNNe1MzoREuK9eLVxdSuklxLqu9tHQd9cjeN9GfNHraFo8ldN%2FqPmRi8qL8wEBvzhtCzo3%2BOO4odRo0g7gUkY5XVOh&X-Amz-Signature=0dd843b2da27c0f9ae2b46639383051e6169799c89df23a519b65d80d54f30a1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C5I2CVE%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC74lZCm5RPAoGOfr8Qxwxs%2BHYGA0pOgLXb7EMtU9MMXgIhAJ7DTW0EY6XkeP%2ByGDwOJB8lWA4AX7fVwLNnQNDRsVMNKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQcpls0e8Q3DKj%2Fj0q3AO8qK1%2BcjPiCBVTYVADs1Qa0gcdZOO5oCEp6miWJguqiSr5bt%2B%2FFxcnC020AzDnRCIHbGyZ%2ByRpbdMYc47vPgQXZt6LarGmellOsGLY2yXYZfU3R8o14vKdE63CT1pt4OK%2BFnvnld2YnummnIgSeiAB0hulvf0VHN9iboo8zTvKhfW73Cjpz%2Bpj3yrWgjQYmZVeRGmM0zrufDDjAwF7BsWCT7AukPGMzfM80fcYmh7988Vi1gIw8du7Qw1E0bsCZ0Viy72D4v7D2mDQfsE3ipr2ABpkZ1vbavCK%2BrK7wGXZNTQ5GN2yBMM%2FT6kxPpXiNse%2BHL76PMIjnrH4SLRT9yLGbnhuXZzaNfgbiBW8F%2BAKKJZtsGAGEKtcjd6qT15RtIlX6qMA3ZgLGCbn4uJEtE4TjEL03R6umw%2F0mZZVB%2BUWeSXL7XEr6GADtN6FCFcV2hg8Pf7r7KfJzIcPwfaCmTYpDRKEfR4LQocMzSGVxADDaAORTNZTcIutzIGccknRY8bF%2FLAaCtDrrBRGSyxT7M4X9p%2Foa1ogyFIEy105WpWzzuPttHguvKAGjXM0jg11QxzIxP2%2FVXd958rzZJQT5sgLuVbx1oYwwlovIgq3p1JqLbzj31Q4cC%2BTUPhzrjDhuKu%2FBjqkAY8Hx3c4IMOYpngiwUB3dAJa2k0Jy7g7%2BnQM95PoH9kTOfy%2FTZEqDBnn55ytFO%2FpyRchwCs434e8YbQrRprRQUEJb8gJjFrMuUh3GL5CaO4vaquOUiGU%2F3TH84LjNTc0FnVNNe1MzoREuK9eLVxdSuklxLqu9tHQd9cjeN9GfNHraFo8ldN%2FqPmRi8qL8wEBvzhtCzo3%2BOO4odRo0g7gUkY5XVOh&X-Amz-Signature=88c0b1c8198cb0833acff38a43475732ebccf9a62e4ec5a3e0e59b9d4756f351&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
