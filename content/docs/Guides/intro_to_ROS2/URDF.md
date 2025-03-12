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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWYX4YZJ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDKyiqSSbMjLwKK37p%2FK7p%2Boo1S9g1HSRqebPNTBprpeQIgJAhFOU6ejwnOQeQGKC9DByI66tMPwqashARFCmjlgR0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1PmMO4pmVe93t6NyrcAwFkL2xgrbUpP5a2vmhbyAO0N3omWaVHGKP6%2F8bFI1QbtEBgd4Gnu0SLlpAHddryaDqwFRVCj7gyL0Mmg6GgzX1kYrlH%2FJEFXAtgcD23C4Dkw4BP%2BJwE5NS8AhgVSUQXuc9WyLIC6ZMIDe2XbIziW1UYNYjKReAq30RHnd5B0X3k9dcz0Z%2BfPJdNZ9juOOleXXx4GjxTMo1bETUiLbKQVQbXzJAJ094Si90jI7kVitYUjeSvfesQHqfAq23Zc40Vr%2FA%2B7PLwn%2FRclwh2kRZ7%2BRQ2pXgbHPMtPjnxRSV3J7NhCtG9dwIN8seYT44l7An0wMdf2mCDR707xSLFNWXndn8fHvODVArhUbmodizy0qReQ0Lsr0eVU%2BgNI8IAWf%2Ft7We7rXIOh%2FjHKp5UNSVt5uPPLPcw31%2F1D5CRXHyJ3LNmfSH3SXCFZ9PmafC0wpu5NyWCo5Zy0pC46lPSSDtKLrXWw8v0nMUxVOKkmX%2BhIB9XJty%2FxamFlLSVTfyTU9qAQf2f%2F0FXNXeoig219QAlSJR9ViaKzKUfrlz09OGvwwcE76ggpP%2BxOq0r0Ikgc%2BwLJhiln%2F9NoyoUh75pNnDJ4oVNfrQHiim3H8mrkjKhcMsDx7KV%2F9x4e1NTbrtdMOKcxb4GOqUBdEhHBVLzHS4x%2FYOhJ8B0esbBLs3cz%2FaOscn1sObcjS%2BNWqlgDxayJo6v59%2FZxPmU6R2BwMw3U6J%2FYICUbHY9%2BGI6MmorhoVv8QMUMNlbA%2B8wDmEJXEnPsDk35lcKgDfqnxX6W4ZEJ8gtwsbyzJ074o9GuuiCI37ce2VvXyZsJIB2OcvkIESsMB3B7Rs3Cme846FQ6yM6i8ylLpuc0owXnCDcBfGo&X-Amz-Signature=3320297bc384301d82e533e8c8a23fb1b32c1e7f8a49eaca5b8d76e810f4dbfc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWYX4YZJ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDKyiqSSbMjLwKK37p%2FK7p%2Boo1S9g1HSRqebPNTBprpeQIgJAhFOU6ejwnOQeQGKC9DByI66tMPwqashARFCmjlgR0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1PmMO4pmVe93t6NyrcAwFkL2xgrbUpP5a2vmhbyAO0N3omWaVHGKP6%2F8bFI1QbtEBgd4Gnu0SLlpAHddryaDqwFRVCj7gyL0Mmg6GgzX1kYrlH%2FJEFXAtgcD23C4Dkw4BP%2BJwE5NS8AhgVSUQXuc9WyLIC6ZMIDe2XbIziW1UYNYjKReAq30RHnd5B0X3k9dcz0Z%2BfPJdNZ9juOOleXXx4GjxTMo1bETUiLbKQVQbXzJAJ094Si90jI7kVitYUjeSvfesQHqfAq23Zc40Vr%2FA%2B7PLwn%2FRclwh2kRZ7%2BRQ2pXgbHPMtPjnxRSV3J7NhCtG9dwIN8seYT44l7An0wMdf2mCDR707xSLFNWXndn8fHvODVArhUbmodizy0qReQ0Lsr0eVU%2BgNI8IAWf%2Ft7We7rXIOh%2FjHKp5UNSVt5uPPLPcw31%2F1D5CRXHyJ3LNmfSH3SXCFZ9PmafC0wpu5NyWCo5Zy0pC46lPSSDtKLrXWw8v0nMUxVOKkmX%2BhIB9XJty%2FxamFlLSVTfyTU9qAQf2f%2F0FXNXeoig219QAlSJR9ViaKzKUfrlz09OGvwwcE76ggpP%2BxOq0r0Ikgc%2BwLJhiln%2F9NoyoUh75pNnDJ4oVNfrQHiim3H8mrkjKhcMsDx7KV%2F9x4e1NTbrtdMOKcxb4GOqUBdEhHBVLzHS4x%2FYOhJ8B0esbBLs3cz%2FaOscn1sObcjS%2BNWqlgDxayJo6v59%2FZxPmU6R2BwMw3U6J%2FYICUbHY9%2BGI6MmorhoVv8QMUMNlbA%2B8wDmEJXEnPsDk35lcKgDfqnxX6W4ZEJ8gtwsbyzJ074o9GuuiCI37ce2VvXyZsJIB2OcvkIESsMB3B7Rs3Cme846FQ6yM6i8ylLpuc0owXnCDcBfGo&X-Amz-Signature=0c0eb7bc7df01e1b1dbe0ca72252b70327fa63928f5a605c59e91dd33fdaf937&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
