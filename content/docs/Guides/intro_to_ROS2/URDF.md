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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJBFIIZA%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIEFk3P69cwlrimHM96yNRaBAvLPIqtkidAGy10JYcMBZAiBMuyB%2BwYCPSxg4ye86m%2BPAcwta7cqA6JXSWixPHRMcNiqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM51eGK8nrzG4h%2FRmtKtwDk2wTtD1YYg%2B7jduoHiIAufLVjgQ5M%2FeaHgzp6wczXaFlyW0%2Bd6J%2Fya%2FfMK%2FK4BWNOZftGRTVLNw2g2uYo7NinpqzuXq%2BZ9qdAbWGCDwlc7P7L%2FgI3n8CVib%2B8bs3RS3xBm92ckDoW6RiX47fFeufrEQjg5237XZwlSQhZ93m9TyuP%2FqT9OcQh24l5vJC3Z8y%2BozLvblWzVkzZe3Li0NP5PlpSWH3mkYyMx0dKVPMf50hraAgGmSJw4zmuoRmteiodtPHNCztMXd5I6B77O31MyT0DefWNSzM8%2F%2FbEq69wZ%2Fpq7vJvyEdB7KW5HbxJvCJgf4IHvZRZg9F9mGb5ji9nWIDc7qlFOjmwfgejNDWOYGoh%2FNZP2re5bU5PQjnedt%2BOtxw3UVR%2BW0SHftquBEm4KLs9pytx2ImbrfRAeTEO3W8zLGzvkl3HE2UZE0u0jmBClw0JOHvwYU2wg34z8dpwWOBJmeIuyca5Er%2Fl2ZuaUSMULECchCu%2BFtbNexCVtN%2Foa%2BwYaGtPqw07TBpRrTAJUVt5Dut9FnEAa%2FA8DwsIQ3DK2M6ZKYX7NiTfoYdEfRSQK759FjtMT3E%2Fn29OuvKd8sqFX079PBRA8CWHclerfBFDFF9km%2BiNKSVeUEw68GevQY6pgGPmiFhlSL9QvjYSmRRxNQ5sLfbyvdnq8qFpUF%2FbQ3bjyBMxpwHErSO4Iz6yc%2BKVZ2%2BhR%2F8x2RC2HjJca949LhehT7yqFydHblePdIU89ZA%2B1L6foAa3gRucYUmhY8rc7jh0PhbKFV2P85hqOoJmKKTG2OBRhcc4c9Owp45PzTslJ8jUHlw%2FTHbJuA7Dt9RSy%2F2EYM9t6JgGheR29Rc5SazpPNyK8be&X-Amz-Signature=c29858e5e08e591314003cc3ed3350b02b4e1cbdf81c5defb8b8fbb02fb2d8e9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJBFIIZA%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIEFk3P69cwlrimHM96yNRaBAvLPIqtkidAGy10JYcMBZAiBMuyB%2BwYCPSxg4ye86m%2BPAcwta7cqA6JXSWixPHRMcNiqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM51eGK8nrzG4h%2FRmtKtwDk2wTtD1YYg%2B7jduoHiIAufLVjgQ5M%2FeaHgzp6wczXaFlyW0%2Bd6J%2Fya%2FfMK%2FK4BWNOZftGRTVLNw2g2uYo7NinpqzuXq%2BZ9qdAbWGCDwlc7P7L%2FgI3n8CVib%2B8bs3RS3xBm92ckDoW6RiX47fFeufrEQjg5237XZwlSQhZ93m9TyuP%2FqT9OcQh24l5vJC3Z8y%2BozLvblWzVkzZe3Li0NP5PlpSWH3mkYyMx0dKVPMf50hraAgGmSJw4zmuoRmteiodtPHNCztMXd5I6B77O31MyT0DefWNSzM8%2F%2FbEq69wZ%2Fpq7vJvyEdB7KW5HbxJvCJgf4IHvZRZg9F9mGb5ji9nWIDc7qlFOjmwfgejNDWOYGoh%2FNZP2re5bU5PQjnedt%2BOtxw3UVR%2BW0SHftquBEm4KLs9pytx2ImbrfRAeTEO3W8zLGzvkl3HE2UZE0u0jmBClw0JOHvwYU2wg34z8dpwWOBJmeIuyca5Er%2Fl2ZuaUSMULECchCu%2BFtbNexCVtN%2Foa%2BwYaGtPqw07TBpRrTAJUVt5Dut9FnEAa%2FA8DwsIQ3DK2M6ZKYX7NiTfoYdEfRSQK759FjtMT3E%2Fn29OuvKd8sqFX079PBRA8CWHclerfBFDFF9km%2BiNKSVeUEw68GevQY6pgGPmiFhlSL9QvjYSmRRxNQ5sLfbyvdnq8qFpUF%2FbQ3bjyBMxpwHErSO4Iz6yc%2BKVZ2%2BhR%2F8x2RC2HjJca949LhehT7yqFydHblePdIU89ZA%2B1L6foAa3gRucYUmhY8rc7jh0PhbKFV2P85hqOoJmKKTG2OBRhcc4c9Owp45PzTslJ8jUHlw%2FTHbJuA7Dt9RSy%2F2EYM9t6JgGheR29Rc5SazpPNyK8be&X-Amz-Signature=9d6f692f8f895a357ae6b866b39307816d8ce2df734677f3c1d6db350b62d38b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
