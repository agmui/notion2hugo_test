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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SSDKD3Z%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T050827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbEuF7a3dC3XIJRzYwiYqhzOr9V7J28kO8qGh4wswk7QIgOGioDV7o1sw0aCt6ADoW8p40xKqCzeaNHDH5V5sltzQq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDEOuLeDOBaN3wjg1UCrcA%2FKI%2FSfgwq18tRXRLJNPgdF3gDnfwAAuXdLxkWREtAmt9L2LMI8J1%2BmKT04VnL23gRAl22EmXo%2BjH9EL%2BZUDRH9AUEsZU%2BEMk%2BL2%2FLocmkOc7MUMu%2Fo4tXE5hPpL7NIA1MLwxDWuf6Ljxhi%2B4libtjtEXmHRyK9xb7GLvRICjh1pOMcwlDpYqsP3SJSrMrocrTaYhtUL8JJGRVIL4EBMuY1dDftLmoydV3N8wKxKA9cSZ6zPvGrzsv9TZuZn%2FeQ%2FMk0hmGpbCdQ03WFnYzB3UJvaeSuodLxFALCt9px%2Fan6EYGRO%2FyHMtyKbT%2BD%2FT8jqQ8DBmo5q%2FUIfHcBXoS68PG%2BmKppeG31yZFXDX2QMSTytk5XUFZJe7yIYYsdrLFMkmfwV0aoodbZj62hEypzqls0D9JFeZAI0rerghCWfh9c4hKDBzaUA%2F8RKfAP2BWoS%2FU27tkLOtV%2BUscEa4TSOgTXRhkLADxCtLoYxmg8%2Br2O2osIwd7wVqlAdCTtUM8J2NuyjRwlplaGkIChzZlYNSUrk2WIh%2FV9Y9kKobZw1Q66blouuk3f6wgytJKhRdAqL1e8FhXfAvy9Nrx8o2qPzTOtAFGcp3IRVHVosGuclbc1wKeL4KJZjHb60upNyMM%2FttsAGOqUBSzBSsedYrBICofC93ie8ygwO4tz9zhd7gv6BBDiaQGKGyYfSN4uGI4gbMfeGgCexgOyAKPtzAV1KN9HwyMuJnrJV1PvFn7OS4e2SGmGvbn3RDuXJHfHTQ4Nr%2Bm1zxmuRaK7IoWTfw3btJAFPvOmGVsTc4MtSqc2yAd%2BHJA1S9wvMB0nq6%2BY3FSWO%2FO8FSI6KMJRa86x6hWBda0No5c4SeHFufxv9&X-Amz-Signature=dc7c33f158737e3ba0a29a500db2a800af7acad25ec9ad20fec470826cabc8e3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SSDKD3Z%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T050827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbEuF7a3dC3XIJRzYwiYqhzOr9V7J28kO8qGh4wswk7QIgOGioDV7o1sw0aCt6ADoW8p40xKqCzeaNHDH5V5sltzQq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDEOuLeDOBaN3wjg1UCrcA%2FKI%2FSfgwq18tRXRLJNPgdF3gDnfwAAuXdLxkWREtAmt9L2LMI8J1%2BmKT04VnL23gRAl22EmXo%2BjH9EL%2BZUDRH9AUEsZU%2BEMk%2BL2%2FLocmkOc7MUMu%2Fo4tXE5hPpL7NIA1MLwxDWuf6Ljxhi%2B4libtjtEXmHRyK9xb7GLvRICjh1pOMcwlDpYqsP3SJSrMrocrTaYhtUL8JJGRVIL4EBMuY1dDftLmoydV3N8wKxKA9cSZ6zPvGrzsv9TZuZn%2FeQ%2FMk0hmGpbCdQ03WFnYzB3UJvaeSuodLxFALCt9px%2Fan6EYGRO%2FyHMtyKbT%2BD%2FT8jqQ8DBmo5q%2FUIfHcBXoS68PG%2BmKppeG31yZFXDX2QMSTytk5XUFZJe7yIYYsdrLFMkmfwV0aoodbZj62hEypzqls0D9JFeZAI0rerghCWfh9c4hKDBzaUA%2F8RKfAP2BWoS%2FU27tkLOtV%2BUscEa4TSOgTXRhkLADxCtLoYxmg8%2Br2O2osIwd7wVqlAdCTtUM8J2NuyjRwlplaGkIChzZlYNSUrk2WIh%2FV9Y9kKobZw1Q66blouuk3f6wgytJKhRdAqL1e8FhXfAvy9Nrx8o2qPzTOtAFGcp3IRVHVosGuclbc1wKeL4KJZjHb60upNyMM%2FttsAGOqUBSzBSsedYrBICofC93ie8ygwO4tz9zhd7gv6BBDiaQGKGyYfSN4uGI4gbMfeGgCexgOyAKPtzAV1KN9HwyMuJnrJV1PvFn7OS4e2SGmGvbn3RDuXJHfHTQ4Nr%2Bm1zxmuRaK7IoWTfw3btJAFPvOmGVsTc4MtSqc2yAd%2BHJA1S9wvMB0nq6%2BY3FSWO%2FO8FSI6KMJRa86x6hWBda0No5c4SeHFufxv9&X-Amz-Signature=5d83e6f3e068bcabad64a0ab6e9eafeace55c85d4b264122ab7ca93ce3d1f788&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
