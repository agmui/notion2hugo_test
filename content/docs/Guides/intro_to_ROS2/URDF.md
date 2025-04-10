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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JZLGDW6%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIGohgsRBCF4XPlRHSQjEF9eI3BU2xQo9PSGWEqixUdC1AiEAp%2B0OIfdNe1Nw7E%2BY1DGb5SNnAKQ4lUOg6Pl3tWR9E5AqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSu7AVVRL2bMO4qrircA1A8ux0alQI0TiMiFVogozCbxVa53S7Ui0bPMCB32vUw9ukfiNTKR6%2BMCx1qw6gXw%2BiK7wSZ8joFStdf4poDd1zc87VfDv6zr%2FRgqhxlZzACXu7jQ2U9mM8iuvLQDVr1vVJAeeDwHoDVi41ezta8QceaspFYT9wYk4ZfQETU0yeC4WxMYk7llmDJgIYTnocEjYECdL4UgG139iSb6JPaXNJf%2Fvl26LNUDW0sWimfvlxAPRHciS34%2FA4Aoy3CQ3RSNGUBwDTlEVWLgky6%2FN52F8JKMCt4fFEihhvZS6lezEFTklMmWrNzWCC3khz0Pn%2Bt2IZLNjlAxkk33VPkoDNJ8IFFL06nZsavDEDtZwBrVrHdZe9Q8llkKKS3OW0tGB77o6x9tp3K3yaUNVCVR%2B9hFoRCmFYIIcG1RCjiQc9I9CLBGoFquuiy34P%2FkG28%2B1IRW3SwEWSyhWF7nO4SEiD9GCIWkLAKggjIlQVdIqCpGSmaPuuMDfSOxpZuBRdXxQCIzOf%2FzzEzf9MK2y3ZZAQz%2Bne915wuWUZEUR9Hh7rSPLskyOtwSum2puTWTYgNiajIEIebfOoHd7KUiJF%2Bu1gB9E6G58rt6J%2BePpySo%2BADYMAyVp0rqGYYtVBL6PHfMJiQ3b8GOqUBLypIee69T%2FjBWf5PA1e%2Bqik260Jyh%2Fw9csRUXRu55FE5dkpWG2XRBdr2TXVQaZgnIRQnMuhCn33GHAtzFhY0aQGS8jg8LE1FXnWfY4eBmzIjMFRRD%2FnHXBpRsPxa%2BTlUn0r6RPErukmAHSNz2lEoQHdsNGoUntlI65Uz6D8chD0nQpOByL2P0G97%2BloAML3jAhA4eh9Pebev%2BqfUVtYVN7Br0BrX&X-Amz-Signature=8945beeae8e039cc72e15daf968b51361f4af3a9f734843cad81e0c1c85aab45&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JZLGDW6%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIGohgsRBCF4XPlRHSQjEF9eI3BU2xQo9PSGWEqixUdC1AiEAp%2B0OIfdNe1Nw7E%2BY1DGb5SNnAKQ4lUOg6Pl3tWR9E5AqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSu7AVVRL2bMO4qrircA1A8ux0alQI0TiMiFVogozCbxVa53S7Ui0bPMCB32vUw9ukfiNTKR6%2BMCx1qw6gXw%2BiK7wSZ8joFStdf4poDd1zc87VfDv6zr%2FRgqhxlZzACXu7jQ2U9mM8iuvLQDVr1vVJAeeDwHoDVi41ezta8QceaspFYT9wYk4ZfQETU0yeC4WxMYk7llmDJgIYTnocEjYECdL4UgG139iSb6JPaXNJf%2Fvl26LNUDW0sWimfvlxAPRHciS34%2FA4Aoy3CQ3RSNGUBwDTlEVWLgky6%2FN52F8JKMCt4fFEihhvZS6lezEFTklMmWrNzWCC3khz0Pn%2Bt2IZLNjlAxkk33VPkoDNJ8IFFL06nZsavDEDtZwBrVrHdZe9Q8llkKKS3OW0tGB77o6x9tp3K3yaUNVCVR%2B9hFoRCmFYIIcG1RCjiQc9I9CLBGoFquuiy34P%2FkG28%2B1IRW3SwEWSyhWF7nO4SEiD9GCIWkLAKggjIlQVdIqCpGSmaPuuMDfSOxpZuBRdXxQCIzOf%2FzzEzf9MK2y3ZZAQz%2Bne915wuWUZEUR9Hh7rSPLskyOtwSum2puTWTYgNiajIEIebfOoHd7KUiJF%2Bu1gB9E6G58rt6J%2BePpySo%2BADYMAyVp0rqGYYtVBL6PHfMJiQ3b8GOqUBLypIee69T%2FjBWf5PA1e%2Bqik260Jyh%2Fw9csRUXRu55FE5dkpWG2XRBdr2TXVQaZgnIRQnMuhCn33GHAtzFhY0aQGS8jg8LE1FXnWfY4eBmzIjMFRRD%2FnHXBpRsPxa%2BTlUn0r6RPErukmAHSNz2lEoQHdsNGoUntlI65Uz6D8chD0nQpOByL2P0G97%2BloAML3jAhA4eh9Pebev%2BqfUVtYVN7Br0BrX&X-Amz-Signature=ba83aa1a4816f411f48f145b79bfd3ad7cbd0eb02ad9f634c253f818889e9875&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
