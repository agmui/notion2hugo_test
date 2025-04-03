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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYKGZTYW%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChxP8f5NbeY7YzRN%2F5wqRYURV9qhdOcjo1JpxxMpb2xAIhAPMEdSx3F6Q%2FLNjA2jR26l5nFnVuaKYBoVa5rYYIsYDUKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FCRYixk5RWR1y%2F88q3AM%2B2LOBjakwkWCCJQPg9lPocRiXPqBigrB6Ju7K4PsqSqeKz08VlGtLPYfDsT0OcP3zdWJwHGkQTJ%2FSz47%2BqiUIS8Qq6au2alv1pJhFg5FFyHvc6R34n9x3RYFokAAfsfDqkQergxJWGrJFyYLhhf%2BqKXHsmar0ICcCCPakGdRT1A%2BrjqfArohiffqsqO4mt6kN79pif1%2FwovXAo0NAJQJiOikN9GNDe2fKus9oRdfDBzbO5hLO4JSaCZrBlAxde13qx7KZZ%2FCLMf3UXhoVM2k76b3bLoc8vzxqc1%2FQld7NR0cen6tHL%2BAJVvp%2B9Arct4QldTjU4CsM1Z%2FyW4uwHHjs6ZeBnADKFDteq3tvRGCa4bG6INh1pAA0lnTkVPZpV4PyALCi6%2FvRYudw9Sbh4S5A1sdwVyRFcA4%2BdeVEMsfxiDN%2Bw0SIc0Ex7oyNSHFhFqVPPixAyChCB%2B23JfPJIJOg8dcfEugpSjSaitLAGpspO9%2BRaZ%2F3TQU5%2FseDKmu1kHjampSeCL5QSUP2tqxmfFRy884tMxAPzO2fsYCiSCG%2FK%2FPRJ5sB%2FMarDA2z%2FFFMWMx%2FJdjMO8U9s0O9T%2FMwQ6kVpuKN%2FHR6p68MsANU5v2PR8pshzOOaOrNo2ImiDCXmLq%2FBjqkAXKNv97o2o9UDVNMDYq4sZsRAy21zJtuC5fYGScsHqmAge5OBYqhfCGgecwelWmLfNIJ%2FOnsk6hSgw5cO54qsuTG7oneuVCXK8DAGt4Xd%2BClZZQ0YzGFDTubEbmDw6F2p6lqpyCtjknsFJEoEXDKa8UNuGlK7x50rkf%2BE9yw9EpJRx9w5qfjvwcE8fu%2FxjvAPJO68c0Z3YMAn%2B9XP8pe1VlpHtKa&X-Amz-Signature=cbf7beec5d078245c93cbc14d504f12c028fbd693f8ecfdc0f211c8ea528a053&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYKGZTYW%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChxP8f5NbeY7YzRN%2F5wqRYURV9qhdOcjo1JpxxMpb2xAIhAPMEdSx3F6Q%2FLNjA2jR26l5nFnVuaKYBoVa5rYYIsYDUKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FCRYixk5RWR1y%2F88q3AM%2B2LOBjakwkWCCJQPg9lPocRiXPqBigrB6Ju7K4PsqSqeKz08VlGtLPYfDsT0OcP3zdWJwHGkQTJ%2FSz47%2BqiUIS8Qq6au2alv1pJhFg5FFyHvc6R34n9x3RYFokAAfsfDqkQergxJWGrJFyYLhhf%2BqKXHsmar0ICcCCPakGdRT1A%2BrjqfArohiffqsqO4mt6kN79pif1%2FwovXAo0NAJQJiOikN9GNDe2fKus9oRdfDBzbO5hLO4JSaCZrBlAxde13qx7KZZ%2FCLMf3UXhoVM2k76b3bLoc8vzxqc1%2FQld7NR0cen6tHL%2BAJVvp%2B9Arct4QldTjU4CsM1Z%2FyW4uwHHjs6ZeBnADKFDteq3tvRGCa4bG6INh1pAA0lnTkVPZpV4PyALCi6%2FvRYudw9Sbh4S5A1sdwVyRFcA4%2BdeVEMsfxiDN%2Bw0SIc0Ex7oyNSHFhFqVPPixAyChCB%2B23JfPJIJOg8dcfEugpSjSaitLAGpspO9%2BRaZ%2F3TQU5%2FseDKmu1kHjampSeCL5QSUP2tqxmfFRy884tMxAPzO2fsYCiSCG%2FK%2FPRJ5sB%2FMarDA2z%2FFFMWMx%2FJdjMO8U9s0O9T%2FMwQ6kVpuKN%2FHR6p68MsANU5v2PR8pshzOOaOrNo2ImiDCXmLq%2FBjqkAXKNv97o2o9UDVNMDYq4sZsRAy21zJtuC5fYGScsHqmAge5OBYqhfCGgecwelWmLfNIJ%2FOnsk6hSgw5cO54qsuTG7oneuVCXK8DAGt4Xd%2BClZZQ0YzGFDTubEbmDw6F2p6lqpyCtjknsFJEoEXDKa8UNuGlK7x50rkf%2BE9yw9EpJRx9w5qfjvwcE8fu%2FxjvAPJO68c0Z3YMAn%2B9XP8pe1VlpHtKa&X-Amz-Signature=3f0400c0cb435506e6bacf80b1e772689443a980d753166214b29af173672daa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
