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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM3IF5MT%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDFJYRZs%2BBCTQjW8SwEzwgCPn6o8eWB%2FzpNNi0uu9lZvgIgYQ7kWeFW628cq8ipiYeC01%2BhPKeKZYh8RNCTjUpEns4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDP6hAq0L1kgNnnRhfyrcA03%2BEpanZ%2BBNxm4OdoxVyy1RzVdM9x4aSMbzoXxiGDb%2FPEKMjWYxVUsqQODXF17rw2QMysAh5O%2Bi%2BFk4m0nhBNP8NuhEpxddl3j%2FXhvRzSTQ0MRMAN1Qug28SrMCyjrIXc4McNoxR2CyQSnVfCzMCYqcBqBThfTZY85W3On3TC%2BhLFRAZjiyc8rC9TCKab6ZoSbfih741GHSqfW4XH7Fppsz%2B0sAWlOUOsUDJMT4hd2vHfHvFf92PQ6oWfZXUxpqxVpkteT%2BlWZk9KMcg1KnbryrgDuO6qu02xws8Is%2Bm42Sehc8P6DDVt8f4Aiso3P%2FfR23iHz6U%2Bh9SOXQakb4%2Bzpp93Yw653dalbR0PqrB%2Bzcy93dOqk7SCozBFJwrTV1lgjIIsRWeN%2FUGOB2MiboW%2Bwih0ZpjMsQZeLGaO%2BgeJtOMOj%2BhOug2oabUTVbhZm%2BHFirj4fQATOvmX3oQniIjM4L8CkOyL8YeVip8c2mVs2BHmX1hR3beewTZRl33TgiYVPbrFAlpKuZ%2BZ77f8Sw0qV6qpAUv1UIX7haoFWNeym%2BrxkiB9j5b2xxjwqbkEO3MwitSf3MbF15bKNF7QW7BwSAZXDkrpw9e0bqfx%2Fa%2BP1zkyeXD0q7v6xb2f%2BSMIC1n78GOqUBFkwjMwg6MxyN2G3uyEGVJviVIK9bE6T3npJR2UKqzfme2uBsF%2BU0fERbw349bnb29mqT8X4OAx4ew97Ix%2Fqyyc9KOepbsI3WXQCBT1V%2BUPlwVi%2BBDKZAPsZUaRaO7YBS1RgLq29BakXSNI743iJYzDxpPiROwDVa6dSzIQklQtXKGtuVlyqbukmGXWsGEzjzyKowRbQ2wLk%2FCCbr0o9JSbE%2F1gAA&X-Amz-Signature=98b76fdd60f4147b533bbee0b388548ec6d222baed992e6f74b6102dc40fbb6e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM3IF5MT%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDFJYRZs%2BBCTQjW8SwEzwgCPn6o8eWB%2FzpNNi0uu9lZvgIgYQ7kWeFW628cq8ipiYeC01%2BhPKeKZYh8RNCTjUpEns4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDP6hAq0L1kgNnnRhfyrcA03%2BEpanZ%2BBNxm4OdoxVyy1RzVdM9x4aSMbzoXxiGDb%2FPEKMjWYxVUsqQODXF17rw2QMysAh5O%2Bi%2BFk4m0nhBNP8NuhEpxddl3j%2FXhvRzSTQ0MRMAN1Qug28SrMCyjrIXc4McNoxR2CyQSnVfCzMCYqcBqBThfTZY85W3On3TC%2BhLFRAZjiyc8rC9TCKab6ZoSbfih741GHSqfW4XH7Fppsz%2B0sAWlOUOsUDJMT4hd2vHfHvFf92PQ6oWfZXUxpqxVpkteT%2BlWZk9KMcg1KnbryrgDuO6qu02xws8Is%2Bm42Sehc8P6DDVt8f4Aiso3P%2FfR23iHz6U%2Bh9SOXQakb4%2Bzpp93Yw653dalbR0PqrB%2Bzcy93dOqk7SCozBFJwrTV1lgjIIsRWeN%2FUGOB2MiboW%2Bwih0ZpjMsQZeLGaO%2BgeJtOMOj%2BhOug2oabUTVbhZm%2BHFirj4fQATOvmX3oQniIjM4L8CkOyL8YeVip8c2mVs2BHmX1hR3beewTZRl33TgiYVPbrFAlpKuZ%2BZ77f8Sw0qV6qpAUv1UIX7haoFWNeym%2BrxkiB9j5b2xxjwqbkEO3MwitSf3MbF15bKNF7QW7BwSAZXDkrpw9e0bqfx%2Fa%2BP1zkyeXD0q7v6xb2f%2BSMIC1n78GOqUBFkwjMwg6MxyN2G3uyEGVJviVIK9bE6T3npJR2UKqzfme2uBsF%2BU0fERbw349bnb29mqT8X4OAx4ew97Ix%2Fqyyc9KOepbsI3WXQCBT1V%2BUPlwVi%2BBDKZAPsZUaRaO7YBS1RgLq29BakXSNI743iJYzDxpPiROwDVa6dSzIQklQtXKGtuVlyqbukmGXWsGEzjzyKowRbQ2wLk%2FCCbr0o9JSbE%2F1gAA&X-Amz-Signature=21e3a96f94fc2af7838cf82af612933cd708e699d2421e2c7a5c2c2172a5fde1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
