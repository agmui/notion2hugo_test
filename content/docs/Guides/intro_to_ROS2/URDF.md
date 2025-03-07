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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP7AOU7Z%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T021603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgg3Vcd1N74sbdmJmihdWIAByIZxjqmN4HLKx%2FRnnMNQIgF%2BGQYN%2FcaBOf7PDe4VCR8nECiRoFH%2FV4zwbTrd3STCwq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDOMnaWsvtIyYp0SlLSrcA8%2Bl4EKWs0wtaiFr5dbWAB3tESlS8r21%2FJ8q9ewk4BE0ZS9eXn6AowrmCbjwhLZP%2BvjoB%2BnunZLAPgJOPE0jz8IUkH4W43xGsgPOVvBlGs8Iw5k%2Fan7ecqvghDsVn6HAckKB90QNuWv2ubdjJqcmLE%2BHHDn1vt37aRw7U6R0RJkKIP437Q3awgp3a0SfbkdD160EGKL%2Fglve4jRLp9eynEXECIHoGgmnon9BhQ1F4O8emfySkZmMuEG7R37MJTWBg87ZfKS3e6myM4Andb4hp6HTtqJcPlTgLSmn%2BCFNgqwJM%2Boce68Cfz87QRL5%2Fzrxb3MQIGxJv8OlN2p7I42G1Dz1w0sLmTQ%2Bs5L5qW7Z9SlHGr3yT2d9%2FCCmFwxX8Yy9UydJTmLVo0qMctoJMX0NWFgz7jqLlthTBtD%2FhE8o7Yu6Sk1LdKzVZQiWl1%2BUgxFWOac8q%2Bl7hdbz7Lds94ToLn7cUhhYK70WQN8gDowBpyBzB9hfphDs7vD64QZKbI6fu3QwQZFSfgCwIIljbdwIRNyhT3kcU9DmKLwkSu9O5EgH5x%2FWGgx5Ss880%2BXVshDttURVmiA92J47pFcb5AHKcFyUzwopw7DiPY7gn90FFjyVBlzb75U2UpTNzU%2BmMIjJqL4GOqUBYZwUvWi1IAcy9Agar7l0HUHoe5%2BS4%2B0A%2FQIjlZE1VmnjR99Tz%2FI4mdGWzcXsJ2lAa0VXVOy6NTduqcuScLXGtSZPLp4mTQl5uLi1GBrlutvx6e59fbI5bG1zCt38SRC8ruX%2BeuHcMCJNXPAVc%2F9l0PIep6Bv3e8kcN%2BnFzvgkI3nM6KqsMfzsxB2ahAc2wwz99aigACcL%2B%2F6MWlQbJROLOkgr1d1&X-Amz-Signature=f42a09b3d82500f431f2a92f02bed950c5a60b8298660f2ad80f340d80b8b379&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP7AOU7Z%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T021603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgg3Vcd1N74sbdmJmihdWIAByIZxjqmN4HLKx%2FRnnMNQIgF%2BGQYN%2FcaBOf7PDe4VCR8nECiRoFH%2FV4zwbTrd3STCwq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDOMnaWsvtIyYp0SlLSrcA8%2Bl4EKWs0wtaiFr5dbWAB3tESlS8r21%2FJ8q9ewk4BE0ZS9eXn6AowrmCbjwhLZP%2BvjoB%2BnunZLAPgJOPE0jz8IUkH4W43xGsgPOVvBlGs8Iw5k%2Fan7ecqvghDsVn6HAckKB90QNuWv2ubdjJqcmLE%2BHHDn1vt37aRw7U6R0RJkKIP437Q3awgp3a0SfbkdD160EGKL%2Fglve4jRLp9eynEXECIHoGgmnon9BhQ1F4O8emfySkZmMuEG7R37MJTWBg87ZfKS3e6myM4Andb4hp6HTtqJcPlTgLSmn%2BCFNgqwJM%2Boce68Cfz87QRL5%2Fzrxb3MQIGxJv8OlN2p7I42G1Dz1w0sLmTQ%2Bs5L5qW7Z9SlHGr3yT2d9%2FCCmFwxX8Yy9UydJTmLVo0qMctoJMX0NWFgz7jqLlthTBtD%2FhE8o7Yu6Sk1LdKzVZQiWl1%2BUgxFWOac8q%2Bl7hdbz7Lds94ToLn7cUhhYK70WQN8gDowBpyBzB9hfphDs7vD64QZKbI6fu3QwQZFSfgCwIIljbdwIRNyhT3kcU9DmKLwkSu9O5EgH5x%2FWGgx5Ss880%2BXVshDttURVmiA92J47pFcb5AHKcFyUzwopw7DiPY7gn90FFjyVBlzb75U2UpTNzU%2BmMIjJqL4GOqUBYZwUvWi1IAcy9Agar7l0HUHoe5%2BS4%2B0A%2FQIjlZE1VmnjR99Tz%2FI4mdGWzcXsJ2lAa0VXVOy6NTduqcuScLXGtSZPLp4mTQl5uLi1GBrlutvx6e59fbI5bG1zCt38SRC8ruX%2BeuHcMCJNXPAVc%2F9l0PIep6Bv3e8kcN%2BnFzvgkI3nM6KqsMfzsxB2ahAc2wwz99aigACcL%2B%2F6MWlQbJROLOkgr1d1&X-Amz-Signature=b64069ad4659f9d658078eccaee7f7ed4b9e819fed6d2e2b21c7b3815d008804&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
