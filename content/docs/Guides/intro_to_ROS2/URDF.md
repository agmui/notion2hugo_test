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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2I7UATI%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T021618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFDk3nluh2UcYxtqBeK1x9f6YxHSEZuMRVvcnDhLazBSAiAFjJ9ugx%2F1o5ISTKGNviFnVYN1iGk7YTNwtC%2B8eX3TiiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCV87BLMvAmtAqmDsKtwDoiNIQ9DsSUy1r4KuKUgDhWXe5pCwUuIZiAv8xW5d723j2KTi8LScVs6ClRGzuMG2gAQAnMP%2FtlYTr7RoOI0Xm0STwE29GAZuy%2FG98eIc0hzmFgs1inBn9mdbfbNWG2FkzqNs9s4WAyRuQL53ujD2l4TYBIw0jm5dmYpFPAG9%2FBHsnSN0Ekx9ReILbv%2BJ1KviGJ%2BHyp69vUS3cYKQMufoYexV2i%2FVZmWQXFFFYN3%2BcVStSNJmbgI4zQWgGCvrYPtq1gVyXjI4RAEF0qpnYvx8qFxKaV5LDdU2EYPJTJbNkqHa81UOQq9vilRA0epbUwZttBK6Z%2FrrDPuMliSHN2V4t4%2FANpfpw6sfEfNKq8cm1N4UWUaR4p9ECAO5P2%2B1vXB7foiANclQgAka0A9Q2clHlXX4PwgZN4aaaGLi91j%2FVnszq0NhjdqzXMOkXoaLBXR%2Fj2t2Uzl0GOSnZ4TB4KfvEtaMdBaw3NskrOlk8ef8ZZUVcZa1xIjoGw90QHutoizcy0D7RH4cDMU4ifARARKuptk1ozCrK%2B6L3hVHQ2baLEI70rMTLUbNZ%2FFVjsfwzrwk8WExbtmeKhbXlPSEJNP99Qa2gHHbvEFRrly4Rh9%2F98284mMnmOcH2y3GpOow3uDIvgY6pgF2gYCP6TFaZ9KRcV5AUs50HQqF45erD%2F5UPjzJ28n60%2FdsYl7aaYYDyDVGD%2B63w1ALKQHheWYnrwfmWJkVs1RwI0j4sjmVapZuLwDl8%2F4aFPxfoaQEP6lB0MxWUw9PzS9aEZvf4oGrXpyp7ylVSPQX08krwIvBOA4YBhUilBDjEdtdWaV5wmasHQ3glZnXPUkkyB0zOOofcKVThO34qnVhwwAUwyCJ&X-Amz-Signature=59a7d67b5c38de2fbac595893e94b8bdadd885c3d894154e0e44a90c329c1257&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2I7UATI%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T021618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFDk3nluh2UcYxtqBeK1x9f6YxHSEZuMRVvcnDhLazBSAiAFjJ9ugx%2F1o5ISTKGNviFnVYN1iGk7YTNwtC%2B8eX3TiiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCV87BLMvAmtAqmDsKtwDoiNIQ9DsSUy1r4KuKUgDhWXe5pCwUuIZiAv8xW5d723j2KTi8LScVs6ClRGzuMG2gAQAnMP%2FtlYTr7RoOI0Xm0STwE29GAZuy%2FG98eIc0hzmFgs1inBn9mdbfbNWG2FkzqNs9s4WAyRuQL53ujD2l4TYBIw0jm5dmYpFPAG9%2FBHsnSN0Ekx9ReILbv%2BJ1KviGJ%2BHyp69vUS3cYKQMufoYexV2i%2FVZmWQXFFFYN3%2BcVStSNJmbgI4zQWgGCvrYPtq1gVyXjI4RAEF0qpnYvx8qFxKaV5LDdU2EYPJTJbNkqHa81UOQq9vilRA0epbUwZttBK6Z%2FrrDPuMliSHN2V4t4%2FANpfpw6sfEfNKq8cm1N4UWUaR4p9ECAO5P2%2B1vXB7foiANclQgAka0A9Q2clHlXX4PwgZN4aaaGLi91j%2FVnszq0NhjdqzXMOkXoaLBXR%2Fj2t2Uzl0GOSnZ4TB4KfvEtaMdBaw3NskrOlk8ef8ZZUVcZa1xIjoGw90QHutoizcy0D7RH4cDMU4ifARARKuptk1ozCrK%2B6L3hVHQ2baLEI70rMTLUbNZ%2FFVjsfwzrwk8WExbtmeKhbXlPSEJNP99Qa2gHHbvEFRrly4Rh9%2F98284mMnmOcH2y3GpOow3uDIvgY6pgF2gYCP6TFaZ9KRcV5AUs50HQqF45erD%2F5UPjzJ28n60%2FdsYl7aaYYDyDVGD%2B63w1ALKQHheWYnrwfmWJkVs1RwI0j4sjmVapZuLwDl8%2F4aFPxfoaQEP6lB0MxWUw9PzS9aEZvf4oGrXpyp7ylVSPQX08krwIvBOA4YBhUilBDjEdtdWaV5wmasHQ3glZnXPUkkyB0zOOofcKVThO34qnVhwwAUwyCJ&X-Amz-Signature=aa0d4e6f1740cd859b976fdb65084d32484ca0c3f33e13900b808c05c636f26f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
