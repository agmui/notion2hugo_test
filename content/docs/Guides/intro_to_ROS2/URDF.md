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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP3TU4JO%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T170211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqtXrEnij2c0tlUuHo9HeB1t5v%2Frw4bsyABMwYN7g7IAiEA4EE8vO4mG2QZtJb6F53W0JLbHu4rkd0KafabRCLp1CYqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2FLuvovDuA2Tv5IIircA9K8vLaSjtKITpBk1C9%2BGJPP5iOxN0Puo19yPB%2Bnp0PQpg35liYgJr%2FqkMaa8i6r4OY20yw3Msu0rWh7Zl4jA3nJzrl9ITQQ1uBlw%2BAsg6J0o8yhCBsS4GvEjKbpLwtTyw7GEXI8B1E1n4zrKZW7j0zYPlT3KBcozrL08lCP3sXHp3Y3DilR3IZFkDnhN%2FprEB0pwnHh%2Bto0zHBn7schDWG4OudQwUGFkaDl3NeL49CgDa3%2F%2BpQUoqjFFBZU0R%2Bb9e5IJ%2FmcDzBC%2FgqVrBP%2BDX%2Fm57gskwjrtdWT%2BHBSCtCgod1VrW0j6APhnI2%2BUPoSuA0EIAej19P3Blt%2BFTGhCQgKoSQu9jIxIByoAST8yGUC2zytLNAMeporsfdvNvFZA3lxQp3FvLzlnstkXxAQ%2BuiUT6DcbzfuhNWOQSYBf23C5x8bwNVdPnUHjqB9c77L1tryqDQZm9hIvPpco1mRTdDlIqDsbIy3xqF3dgvDwdGh3QuJ5EjAKUpS9o%2BFl%2Fyzs26M5TyVKviQQnvPsP7JS1Xo0aOkqqYEIQqum2CAEoGvFNZR8IkSZ%2B5MZZibGblDk3jM2a71tSbNGTeWWY%2FcUoscGa1ZwTPqdVSZbfz8meUMLIBaqjJdTL99b%2FYdMPun7MEGOqUBDrVhZhrVfSjtRUliqG0GbxxLHLBWMpVaETviDV6ipI4cpu%2BHVdYSSGxuSsqTBDD3VEfMTL2zxJLyi%2F0p4O2MzcmBY4FVrqtbpejB0qlPKUfTO5krkPdHYF2qagxAe8CGaAc62GllMMD0ng4GxxXH7gr28za5kNV9UqRcPEL6x8eMimz8z1IEpkPsAh%2BWN%2B%2B2P6Of8rD3SEGjGatEw7TflUBT5Xi7&X-Amz-Signature=8bd368590814b66fbd29143657f8d783e3e9749ffdedf40e4a662d4ec8dc9778&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP3TU4JO%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T170211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqtXrEnij2c0tlUuHo9HeB1t5v%2Frw4bsyABMwYN7g7IAiEA4EE8vO4mG2QZtJb6F53W0JLbHu4rkd0KafabRCLp1CYqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2FLuvovDuA2Tv5IIircA9K8vLaSjtKITpBk1C9%2BGJPP5iOxN0Puo19yPB%2Bnp0PQpg35liYgJr%2FqkMaa8i6r4OY20yw3Msu0rWh7Zl4jA3nJzrl9ITQQ1uBlw%2BAsg6J0o8yhCBsS4GvEjKbpLwtTyw7GEXI8B1E1n4zrKZW7j0zYPlT3KBcozrL08lCP3sXHp3Y3DilR3IZFkDnhN%2FprEB0pwnHh%2Bto0zHBn7schDWG4OudQwUGFkaDl3NeL49CgDa3%2F%2BpQUoqjFFBZU0R%2Bb9e5IJ%2FmcDzBC%2FgqVrBP%2BDX%2Fm57gskwjrtdWT%2BHBSCtCgod1VrW0j6APhnI2%2BUPoSuA0EIAej19P3Blt%2BFTGhCQgKoSQu9jIxIByoAST8yGUC2zytLNAMeporsfdvNvFZA3lxQp3FvLzlnstkXxAQ%2BuiUT6DcbzfuhNWOQSYBf23C5x8bwNVdPnUHjqB9c77L1tryqDQZm9hIvPpco1mRTdDlIqDsbIy3xqF3dgvDwdGh3QuJ5EjAKUpS9o%2BFl%2Fyzs26M5TyVKviQQnvPsP7JS1Xo0aOkqqYEIQqum2CAEoGvFNZR8IkSZ%2B5MZZibGblDk3jM2a71tSbNGTeWWY%2FcUoscGa1ZwTPqdVSZbfz8meUMLIBaqjJdTL99b%2FYdMPun7MEGOqUBDrVhZhrVfSjtRUliqG0GbxxLHLBWMpVaETviDV6ipI4cpu%2BHVdYSSGxuSsqTBDD3VEfMTL2zxJLyi%2F0p4O2MzcmBY4FVrqtbpejB0qlPKUfTO5krkPdHYF2qagxAe8CGaAc62GllMMD0ng4GxxXH7gr28za5kNV9UqRcPEL6x8eMimz8z1IEpkPsAh%2BWN%2B%2B2P6Of8rD3SEGjGatEw7TflUBT5Xi7&X-Amz-Signature=7209a1eda10235a3aba684e18556e3104ce7ae95372338d350c43300500be5a7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
