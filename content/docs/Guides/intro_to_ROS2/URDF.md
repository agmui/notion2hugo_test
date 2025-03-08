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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GTIRPXB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T040802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIElZB56AhCt%2FOFANjl2dMg%2FDzZ5C%2BdhIh59lFQRwOwPqAiEAzS01rYhwtrRfy4ybRxddQJ6Pc9H%2FZT%2Fqy42aLOe68PYq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDNHwdfjs1S84OdzjLircA3G8MV0npRu3mkeOAjqjQH34L4gh4%2BcSawsah4kS1p9rR2dvg%2BhVYXc6NqTEDdFMRRgGnOgaYj73kvrGEUYTMGq1r2CoC2ZOf8JupWiTNrDvx%2BAnhD1CZ7R3qymjTSKGZSb2cPpY%2BMUG0d5ZQOWjJqgEei6GPsEI97Wa8mWK3HSVQuovy9OHtQk%2FMjSdNgRPPuScelnOk%2Bvc6d2JbcJSwNuv%2BcQp4IN46XmQ%2B9F1rebdqQ%2FfTmmRNYclaDXzJWPlvfyytoodM56qNlCfZAQfj6AcNaE6XpzdtgFFokjEeG3wR5Db5GlOxw3UpL5YdCifLflyP679ms99yEy86ijIKP%2FTw8glyMABo0bPmjAj%2FoOfQmXv9z0b%2BX3DUqVMB2iWP1l8xUY7gLmPCpHZmxFNFgNdOR%2BJMvbtH8DsBEuqaW45nK%2BloG6vQFG7KRW45rkrLwl1TiyDqhonj7Zggoe6gzez0%2FQNUFKbUlrpS4GYR9nqs6zoiKNsCMVQPWjXkRHkHnfMZMCVr3%2Fa8GtylW1U5%2F3qToI2BJtrkLLZUizEi1YspcGvG%2FgFAHlEFlRuhwGE%2FG5t6tmP9mEs3oPmIFAi%2FvdHBK%2FftSEAOWAGF0UkmAQwYO6V9kAYawIdnasCMPv6rr4GOqUBeYH6JqlTdcuIE%2F%2BUyB25%2BJw0QfWIrMeJNGmDXuZ3aq%2B1fZZ29Yb397eGiJGD5ZziIK9CP4Y1DSOXDdP4G6PegWNJ%2BCtZasbJb%2FEaKRhclhDbgUj5LIA9dQKvdSMYsjKQ%2FRjEWA1rfM0L7qNwkoDEkDsPCTHqm0Wc5YGR3vx%2BBvJvCOo6MeNizA2A%2BOKcatfzc1XMq%2FJf0MqtxQV3meotTV9H2tYJ&X-Amz-Signature=7e0934bca7613bd3260870aa65ed28eb44c8ea73495bf6e422d672dff1659dbb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GTIRPXB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T040802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIElZB56AhCt%2FOFANjl2dMg%2FDzZ5C%2BdhIh59lFQRwOwPqAiEAzS01rYhwtrRfy4ybRxddQJ6Pc9H%2FZT%2Fqy42aLOe68PYq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDNHwdfjs1S84OdzjLircA3G8MV0npRu3mkeOAjqjQH34L4gh4%2BcSawsah4kS1p9rR2dvg%2BhVYXc6NqTEDdFMRRgGnOgaYj73kvrGEUYTMGq1r2CoC2ZOf8JupWiTNrDvx%2BAnhD1CZ7R3qymjTSKGZSb2cPpY%2BMUG0d5ZQOWjJqgEei6GPsEI97Wa8mWK3HSVQuovy9OHtQk%2FMjSdNgRPPuScelnOk%2Bvc6d2JbcJSwNuv%2BcQp4IN46XmQ%2B9F1rebdqQ%2FfTmmRNYclaDXzJWPlvfyytoodM56qNlCfZAQfj6AcNaE6XpzdtgFFokjEeG3wR5Db5GlOxw3UpL5YdCifLflyP679ms99yEy86ijIKP%2FTw8glyMABo0bPmjAj%2FoOfQmXv9z0b%2BX3DUqVMB2iWP1l8xUY7gLmPCpHZmxFNFgNdOR%2BJMvbtH8DsBEuqaW45nK%2BloG6vQFG7KRW45rkrLwl1TiyDqhonj7Zggoe6gzez0%2FQNUFKbUlrpS4GYR9nqs6zoiKNsCMVQPWjXkRHkHnfMZMCVr3%2Fa8GtylW1U5%2F3qToI2BJtrkLLZUizEi1YspcGvG%2FgFAHlEFlRuhwGE%2FG5t6tmP9mEs3oPmIFAi%2FvdHBK%2FftSEAOWAGF0UkmAQwYO6V9kAYawIdnasCMPv6rr4GOqUBeYH6JqlTdcuIE%2F%2BUyB25%2BJw0QfWIrMeJNGmDXuZ3aq%2B1fZZ29Yb397eGiJGD5ZziIK9CP4Y1DSOXDdP4G6PegWNJ%2BCtZasbJb%2FEaKRhclhDbgUj5LIA9dQKvdSMYsjKQ%2FRjEWA1rfM0L7qNwkoDEkDsPCTHqm0Wc5YGR3vx%2BBvJvCOo6MeNizA2A%2BOKcatfzc1XMq%2FJf0MqtxQV3meotTV9H2tYJ&X-Amz-Signature=20f1731e2e98ced6ad3cbe333866d0e4edda8ceedd92b437916ea0105ac50688&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
