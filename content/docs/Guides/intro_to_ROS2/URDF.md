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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTK5LNHH%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIFADqWWZrCo8YATvD%2BizQN%2BGIA35VzLmxrqdZWZgZmQdAiEAvbxZsMc0n0bob9CwCbSAwTTlTns%2FAgq6WbiqV0KqiesqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnxPZxHaTIc%2Fe7OHyrcA9hBUIibXgavO3I3RqAqaQhSeHKGZ1N%2Be1iRU5Bn%2FTaow229aG4Co56lokEF9azMvDwUUXWPI6p%2FZXyzkk77V%2F%2F7HKhLvBzpneXBM87Lvtfrwitn8fvK6I36RLT3CVtR4bIK%2FzsRa87eohTMsQc1iBpGs5tPbKxL%2FHUtziKO1Q5%2BLMXpJuID6askE5mTBilg%2Fr9zfyimQecFnhpiv8UpHpCVYxAykB%2BEBvs%2FY3R2jk%2FdCGlQNkd2GdWUTh7wAwyjbafCPOROf1VArwmXKLEiNg5OwIpIOnvUq4zTPbtiUGUfezAeDgLdr579xJgsIHefLW0xu%2B4YuchLuSTEyU46nEHG8fnbhYB%2BkyYwxENDGKd%2FadNoDB47u%2BFns0aGCcl626iejI7bfB9ODisijJWM6rZYxjfbQ9A9pwhlZtaI6AcTAZ5r2pFs274OF1mkF4DJFMZRKKKctFkA2rTzHvSiPTdLG70gEtsVsdHAIyxW2ELmd5URddmjZrgMgyciC9wWT7kp5jSh4FCPTKiXnlGxSxTU5VIwEmjzjQo2l1D1bx%2B5tNPlmXzDNwh9aV9gZ5aKsf%2B2UqpaElI%2FyhbPSIdezghTbNP9sYf2l%2F48P1fbafDPuiMGQuzqwM%2BsX6wAMNeN38IGOqUBmLaTOsVDCHkJg1mtZTo%2BG3eGJgIesPCNfOSOcHH24X1%2FtLI421KzikO%2BQ4qaoH8GWSo3fVKw%2B5eKBbVU4Y8QL0Duu791csCqqoJ0Ttca8hmUnnh4Lg%2B5uF1r3ALEsB%2BLVW%2Fw8yYyts4sHAgn%2FvC6DV8nkOEpqXW5TST%2FzmyisvmaF2B5LonsmiyA2ZLbt92x46G1V03OWnqP3gWzMxG%2BcEXJhta7&X-Amz-Signature=cfc4f343fe0aa4a738704ce58e5f3d1e78ad33791014fae574a00798791a2dba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTK5LNHH%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIFADqWWZrCo8YATvD%2BizQN%2BGIA35VzLmxrqdZWZgZmQdAiEAvbxZsMc0n0bob9CwCbSAwTTlTns%2FAgq6WbiqV0KqiesqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnxPZxHaTIc%2Fe7OHyrcA9hBUIibXgavO3I3RqAqaQhSeHKGZ1N%2Be1iRU5Bn%2FTaow229aG4Co56lokEF9azMvDwUUXWPI6p%2FZXyzkk77V%2F%2F7HKhLvBzpneXBM87Lvtfrwitn8fvK6I36RLT3CVtR4bIK%2FzsRa87eohTMsQc1iBpGs5tPbKxL%2FHUtziKO1Q5%2BLMXpJuID6askE5mTBilg%2Fr9zfyimQecFnhpiv8UpHpCVYxAykB%2BEBvs%2FY3R2jk%2FdCGlQNkd2GdWUTh7wAwyjbafCPOROf1VArwmXKLEiNg5OwIpIOnvUq4zTPbtiUGUfezAeDgLdr579xJgsIHefLW0xu%2B4YuchLuSTEyU46nEHG8fnbhYB%2BkyYwxENDGKd%2FadNoDB47u%2BFns0aGCcl626iejI7bfB9ODisijJWM6rZYxjfbQ9A9pwhlZtaI6AcTAZ5r2pFs274OF1mkF4DJFMZRKKKctFkA2rTzHvSiPTdLG70gEtsVsdHAIyxW2ELmd5URddmjZrgMgyciC9wWT7kp5jSh4FCPTKiXnlGxSxTU5VIwEmjzjQo2l1D1bx%2B5tNPlmXzDNwh9aV9gZ5aKsf%2B2UqpaElI%2FyhbPSIdezghTbNP9sYf2l%2F48P1fbafDPuiMGQuzqwM%2BsX6wAMNeN38IGOqUBmLaTOsVDCHkJg1mtZTo%2BG3eGJgIesPCNfOSOcHH24X1%2FtLI421KzikO%2BQ4qaoH8GWSo3fVKw%2B5eKBbVU4Y8QL0Duu791csCqqoJ0Ttca8hmUnnh4Lg%2B5uF1r3ALEsB%2BLVW%2Fw8yYyts4sHAgn%2FvC6DV8nkOEpqXW5TST%2FzmyisvmaF2B5LonsmiyA2ZLbt92x46G1V03OWnqP3gWzMxG%2BcEXJhta7&X-Amz-Signature=19fe6c4900fa4bb1f5d448ac36461f9fb8056a80731de1d73d35ff436e268d64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
