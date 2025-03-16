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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O3O5AQW%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr31oR3DaDOeSlWC7RVP0cv%2FV%2ByxTOEisCyHDaFhk%2F%2FwIgcyegVJV%2FhbliYbR9C20ALGozfenojbutDwqnfXOu%2Fm8q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDIKTaeWVxwXbZW5MWircA2wGPwbaGUvXyZ1KNsR0l839t5GTbTrc9jSwGlc7mA%2F5Bkpmft8MtK8%2BqSa3oftclTE98Y6K4IUemOeXcnYINYzPUJfAJ%2Ff6WKmXbnMvs3dUGVDrOlTaMz3DSGO%2BHU1ozbFxk%2FscVR70zBwSsydpmZfYejumbQT0Ke8wXffxxeGhhljT90WXZnl9UvNPvmksgp01EFHbltQCnRhBBSNW17OM%2FnnNvuYkFxF0sEvBLCzjCFxDKgWetrqzhebcN8Rin13skPbqrcDXcg%2F8iovbUv4v3tyRQbSiOKAcNW1gVD5boQZIxbAkEwDN3YArab%2FmSkSA9pgIVUyJFFd8Rnbs4E2T7OVsljvvGkt0RoHA2fSUkW6Vwx6l6IqYYXElroi%2BwgktzqQc%2Fdh6WCr%2FyDv6eh5NV0UvOD4B1PXvsiJ4DyGlhNzgv0dZQ0oGWElwDY%2BxKb14b1HWudjSdSHDvUJXVUSQpp3Yo7Ai1lVimd2BN3p0cYQ2kX%2BQa1G5%2BdaAZe%2FmGsf%2BMexlAUA%2FmxQo0BxnntF4NqLLKjTvZc68VFmwQg6ohhxW9Tm75jYaDeefwTlx5DOPGfNbrwPBokZrZOYhskv%2B46Wbza5XcGN4azKuP8VCYDez6oU%2Br9ESEqYjMKvY2r4GOqUBYL3xaC7JM4%2BOeDcdW%2Fn1%2FGt8P6KgLfUzzR1l7yGCNJ2onPel%2FUlOCfo%2BEl1J9rDyW7hkOXEjLUyAWyHY3g0O%2Fr7gvv918W11GO8UyFzW6MJfuwPB5Cn9%2BvUMw17C5J9dN08h0sYWKaNJ5W1szlANKvJ6qBEFH7ufe4jg76%2BbHwG1P%2BFPssBeW74vsv4pYueLufh9mcc49t%2FLnNhUu1f3%2FQZpAljt&X-Amz-Signature=5777fff40db9fb89807bee7b5dd7534658d4331e404bb0324ad7179c67c83528&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O3O5AQW%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr31oR3DaDOeSlWC7RVP0cv%2FV%2ByxTOEisCyHDaFhk%2F%2FwIgcyegVJV%2FhbliYbR9C20ALGozfenojbutDwqnfXOu%2Fm8q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDIKTaeWVxwXbZW5MWircA2wGPwbaGUvXyZ1KNsR0l839t5GTbTrc9jSwGlc7mA%2F5Bkpmft8MtK8%2BqSa3oftclTE98Y6K4IUemOeXcnYINYzPUJfAJ%2Ff6WKmXbnMvs3dUGVDrOlTaMz3DSGO%2BHU1ozbFxk%2FscVR70zBwSsydpmZfYejumbQT0Ke8wXffxxeGhhljT90WXZnl9UvNPvmksgp01EFHbltQCnRhBBSNW17OM%2FnnNvuYkFxF0sEvBLCzjCFxDKgWetrqzhebcN8Rin13skPbqrcDXcg%2F8iovbUv4v3tyRQbSiOKAcNW1gVD5boQZIxbAkEwDN3YArab%2FmSkSA9pgIVUyJFFd8Rnbs4E2T7OVsljvvGkt0RoHA2fSUkW6Vwx6l6IqYYXElroi%2BwgktzqQc%2Fdh6WCr%2FyDv6eh5NV0UvOD4B1PXvsiJ4DyGlhNzgv0dZQ0oGWElwDY%2BxKb14b1HWudjSdSHDvUJXVUSQpp3Yo7Ai1lVimd2BN3p0cYQ2kX%2BQa1G5%2BdaAZe%2FmGsf%2BMexlAUA%2FmxQo0BxnntF4NqLLKjTvZc68VFmwQg6ohhxW9Tm75jYaDeefwTlx5DOPGfNbrwPBokZrZOYhskv%2B46Wbza5XcGN4azKuP8VCYDez6oU%2Br9ESEqYjMKvY2r4GOqUBYL3xaC7JM4%2BOeDcdW%2Fn1%2FGt8P6KgLfUzzR1l7yGCNJ2onPel%2FUlOCfo%2BEl1J9rDyW7hkOXEjLUyAWyHY3g0O%2Fr7gvv918W11GO8UyFzW6MJfuwPB5Cn9%2BvUMw17C5J9dN08h0sYWKaNJ5W1szlANKvJ6qBEFH7ufe4jg76%2BbHwG1P%2BFPssBeW74vsv4pYueLufh9mcc49t%2FLnNhUu1f3%2FQZpAljt&X-Amz-Signature=3a32af2659bb2d108f739673e32949d4d2439b044a044f865164991924d70e7a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
