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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYBXJ5LE%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCqM9wEgkCGVRsbCmAEFs6TCi6mCqdY4ypvZ0PZMoQFkAIgfQ%2FktBxeoF7HSA%2BiZBIgUOwlOA%2FGe6fZv3HqVqUUOTUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZMRmUkPllCHKfFqSrcA5PGDmYYpUEeBxZvcrwAS14Tz9B1eQEZdk8OxCXINBjMpTGnCXPxaeZerTFXQWAjHEYt3mXq42H8XnVa2HslN0wiC13pesjfzmkmbEM0GvOsJHHtcscs%2F9fQfgb5kYeMWfBAE94fAVW%2FdHqxDWZ%2Fv8z807pow9sPoLleq51%2F6y3B6cB6eGop5W9yauvU6OVmY909LNA3SBMTZMmT3N2l9BlfE5MtN8nib7cYQgmOzYHgZNDWf1ipV15ipoOu6VrG5secSYSrT%2FQxb4VjSofBmySGkhElj2G4jWFmCAHJsY9KAs%2B%2FKCw%2FH0lxR%2FGhS6nlePs3F%2BAb67D686BmHw9VTECAfCfoj2%2FJWdX9vUuxe1V4aw6CwkElkCIuNm1gOAF5D1KNp7pD7Klzeq3Br9REXQQS3dEAm8DvvtCRh6yJ4Krd5RCko8A3Bj2PfmSIBDtzC%2FanwxyyAEFofyKT%2F6d4A4WEhfraFyrQ2p2PVbvQoyQe8783WEpzOq2Qyec%2F6qjSIRCHyRtWdGh15dH8kWy5%2FjliF%2Fx0fwLKOiwPDspiGJxnXMtoW%2F%2BcIxcuRGWNq5DV2A7BU0%2B7e7MtZLAPlZHlWcydks3Dh%2BMxQnjd8PYXxP8%2FfzIA5xPMMLktg0SpMKfBgcEGOqUBg51xPGo9Jj94%2B52kGQ0Pkh1sNl4TknyO5KBfEMmG4BvYFD%2BaDBaFpdOukxQJzZdvXhB8TrC%2BiGIDFzx%2FOUA6I7mqQO7A2TnILFjJ5YVUBBLRDMbBoLY0XksAIX4rWpCGN6T3c%2FY%2BCGSCCpZXoatNbXCqtcbXmDUXlsBba2I5TP32HH7bSfBU%2F5e%2FesoYlqKiFRweFGs0b0YoyVsoflIYkucVbaO%2F&X-Amz-Signature=421eb0ad4c4c63c495c58aaab3458d4907069239da77a9df045b4a62e85bb199&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYBXJ5LE%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCqM9wEgkCGVRsbCmAEFs6TCi6mCqdY4ypvZ0PZMoQFkAIgfQ%2FktBxeoF7HSA%2BiZBIgUOwlOA%2FGe6fZv3HqVqUUOTUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZMRmUkPllCHKfFqSrcA5PGDmYYpUEeBxZvcrwAS14Tz9B1eQEZdk8OxCXINBjMpTGnCXPxaeZerTFXQWAjHEYt3mXq42H8XnVa2HslN0wiC13pesjfzmkmbEM0GvOsJHHtcscs%2F9fQfgb5kYeMWfBAE94fAVW%2FdHqxDWZ%2Fv8z807pow9sPoLleq51%2F6y3B6cB6eGop5W9yauvU6OVmY909LNA3SBMTZMmT3N2l9BlfE5MtN8nib7cYQgmOzYHgZNDWf1ipV15ipoOu6VrG5secSYSrT%2FQxb4VjSofBmySGkhElj2G4jWFmCAHJsY9KAs%2B%2FKCw%2FH0lxR%2FGhS6nlePs3F%2BAb67D686BmHw9VTECAfCfoj2%2FJWdX9vUuxe1V4aw6CwkElkCIuNm1gOAF5D1KNp7pD7Klzeq3Br9REXQQS3dEAm8DvvtCRh6yJ4Krd5RCko8A3Bj2PfmSIBDtzC%2FanwxyyAEFofyKT%2F6d4A4WEhfraFyrQ2p2PVbvQoyQe8783WEpzOq2Qyec%2F6qjSIRCHyRtWdGh15dH8kWy5%2FjliF%2Fx0fwLKOiwPDspiGJxnXMtoW%2F%2BcIxcuRGWNq5DV2A7BU0%2B7e7MtZLAPlZHlWcydks3Dh%2BMxQnjd8PYXxP8%2FfzIA5xPMMLktg0SpMKfBgcEGOqUBg51xPGo9Jj94%2B52kGQ0Pkh1sNl4TknyO5KBfEMmG4BvYFD%2BaDBaFpdOukxQJzZdvXhB8TrC%2BiGIDFzx%2FOUA6I7mqQO7A2TnILFjJ5YVUBBLRDMbBoLY0XksAIX4rWpCGN6T3c%2FY%2BCGSCCpZXoatNbXCqtcbXmDUXlsBba2I5TP32HH7bSfBU%2F5e%2FesoYlqKiFRweFGs0b0YoyVsoflIYkucVbaO%2F&X-Amz-Signature=a8eeb54f5734ced4cede8771479cf26b6fde69b4b0926ba7efac532ca7738193&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
