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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JK72HNT%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOV6j6v1MGCZBj6q17p2mZWz%2BcJYsmuLqxnFEbwhM7IAiEApOQfgnjhCbTDiUrNWZkPyJ7oKXHKhQKKclgGVRpXqUoqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOH9XaM08A6SeZpXCrcAy%2Bj6b7LNLhPjy4F9v4Tw9Sr5HAEAqKrklM4N5IQ3lOij8nLBE5XVAJBBGpHVOEu23urBesXFDqNqsvDHRGDYbTNZxuaWAcR3ZscdT%2FlVAz5rRIN9ZG1DOOSWjzK5TTR7Gv4PsOyxrVn65zzuMlPjguxzQSOkYp9iHT5dMYXyWDSMC1kjnRCV4l3UB%2FUtbLw61oM3SDChmcAXbgeSdIGPN0HaHwZ7%2FsIiCDxM%2BfUpTazo67mc0LfSKrjZbYx0Nxst%2BQvPUl1Wf2oM9BaHuIN7bNr16CxLD6jobkfG6Lh1kpI5I2krIV2c3m2JUoTuStzhJyxcNzcuvwsYB0nVOhF1oooxhdrRnCDRCfkMvp%2FHHXoWb7%2BD7oyW5J%2F321ykw3FeL4emu%2F4lxnmhsKvU4ztox6rEyHaIeBqUPhImE%2FeNQlTsUhRk9IGr6LVXD1W7LG1c0O8Tv47eWbvWMVdc6zist%2BJ8pMX%2BOfw0DKlvfi3wJXPyoUbs5BIAw9drF2aGoOlJt1Vs%2FjPSgRzScVj8edRoCu07rsx2sbwvfqa9cH%2F9oGxRQCvL6Cwd%2BLXhWZ9Ago22OGfQt%2B4Q9lVFELbjWzj0pRl83CRzkdraeAH0EeO%2BE%2F%2FDXhaFYmlBRbmxymlMOTwu8MGOqUBqJQFsKM2%2FZyw2fCVj13dabOG2auFMw7JRJxLVHc6VRerAs%2B4HmCH6LK8BqhF7WMl0fQlGCk74S5OCbWCZsNiUZn5YP5JFq7FaTkrdeZT2MBv6%2BU5M7eMM7nJCuscsEKL1DvNvjqNdsTKQcH3ym4uqUf25sI0ta1FLRM5EXK2g%2Fj9EInXUTXbwLqi0NR3orsWARn9X9%2BA895hn1fQNgZG%2F1dSJa%2Bp&X-Amz-Signature=5ab6df9562e15acab54127bacb72baeb1c6545a8c8e770509b9637e8031fd7b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JK72HNT%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOV6j6v1MGCZBj6q17p2mZWz%2BcJYsmuLqxnFEbwhM7IAiEApOQfgnjhCbTDiUrNWZkPyJ7oKXHKhQKKclgGVRpXqUoqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOH9XaM08A6SeZpXCrcAy%2Bj6b7LNLhPjy4F9v4Tw9Sr5HAEAqKrklM4N5IQ3lOij8nLBE5XVAJBBGpHVOEu23urBesXFDqNqsvDHRGDYbTNZxuaWAcR3ZscdT%2FlVAz5rRIN9ZG1DOOSWjzK5TTR7Gv4PsOyxrVn65zzuMlPjguxzQSOkYp9iHT5dMYXyWDSMC1kjnRCV4l3UB%2FUtbLw61oM3SDChmcAXbgeSdIGPN0HaHwZ7%2FsIiCDxM%2BfUpTazo67mc0LfSKrjZbYx0Nxst%2BQvPUl1Wf2oM9BaHuIN7bNr16CxLD6jobkfG6Lh1kpI5I2krIV2c3m2JUoTuStzhJyxcNzcuvwsYB0nVOhF1oooxhdrRnCDRCfkMvp%2FHHXoWb7%2BD7oyW5J%2F321ykw3FeL4emu%2F4lxnmhsKvU4ztox6rEyHaIeBqUPhImE%2FeNQlTsUhRk9IGr6LVXD1W7LG1c0O8Tv47eWbvWMVdc6zist%2BJ8pMX%2BOfw0DKlvfi3wJXPyoUbs5BIAw9drF2aGoOlJt1Vs%2FjPSgRzScVj8edRoCu07rsx2sbwvfqa9cH%2F9oGxRQCvL6Cwd%2BLXhWZ9Ago22OGfQt%2B4Q9lVFELbjWzj0pRl83CRzkdraeAH0EeO%2BE%2F%2FDXhaFYmlBRbmxymlMOTwu8MGOqUBqJQFsKM2%2FZyw2fCVj13dabOG2auFMw7JRJxLVHc6VRerAs%2B4HmCH6LK8BqhF7WMl0fQlGCk74S5OCbWCZsNiUZn5YP5JFq7FaTkrdeZT2MBv6%2BU5M7eMM7nJCuscsEKL1DvNvjqNdsTKQcH3ym4uqUf25sI0ta1FLRM5EXK2g%2Fj9EInXUTXbwLqi0NR3orsWARn9X9%2BA895hn1fQNgZG%2F1dSJa%2Bp&X-Amz-Signature=61d44be62e8e1f18e0b7093d1ad30256af3ef338775270c86ad5547d84ae240d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
