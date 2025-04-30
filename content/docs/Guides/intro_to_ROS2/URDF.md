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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U3FBVX7%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQChqww2pZuvEDJsnCBLf1J29NKo9frkT%2FM3rVSO6f%2BHWQIhAP8jlXeMSYi%2FVWBn%2BQFBOCGGP4EAWye6EStn1ZKChYgYKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7cepjdoAZn5fmZKgq3ANDQUyiSdKGK3pPFNPlEOjeTaNwYilA6%2Bl3SZTRN4oh5bl89OxdyUIKX8ZzaN8EAMi0JdTNqyG7uPU1fDfBJJKMcqF%2F0H9aQ%2FQFZvTUfnW7jCmyPQBIJBW6UcSubh09WInCPQ0HYNwKQxvCJn0wrbRPu4aLZ92UTZzlv1gB6rjDhBxedf0k0NGQD64STadMXx%2BuAS5A5E93dv1DaTvvPmXhOBtknRg5ydNj4z%2FPSw1HA1TMNJtLdRhYYN9OSCBQJQ4MfohOc1JSdxDe7Tgj4CJ%2BxPUEZTz%2Bx%2FnTbfSL7%2FmV2Vj1AF2YeBM7Sgmbp0LL6aPIxP8Bp3BaOnoLr4dRsQ0z%2F31HZQCOZRGAgv8xnriD5v0k3hAXJvvFNsdb09yrz2%2FbeepahNiHB4C9%2BlYV85kawhhruapo%2BLaM7PHwF8O9MRHnHjOrX8co0INKDFM%2Fg%2FEYhxxTtK%2BWQiexteMio4Sj08n0FscdoLzuKe3onWDILPtc5mCHc%2Fy1KLTTRVXb5gklkE29fsphrRo823%2FzhKnMT7sFFlwNcxWjoeCfsrbUZXnRzWA3G370UVIMNEszTjvrMIj%2Bty7RhLpXrTJbuAHmdg%2BV1ADVfgmVnPqmBQ3Q4sYIGF4AQhH71pa3%2FTC9ncnABjqkAdQyU4mSLe9RO7E1pgDROznk42xlZzgodn81niho2grQOlfl804LK7uCnI5lJ7%2F1NuFrtLc2hm0Tw9L3n8GMq5T63tMHsy7DazTUBv7DYxUrRYU3IXZbHzDJiRtrwow03nE2Icg2AqryoLrkEx2wlbu4QYbR%2FSXmfYCv%2B58BlDbjp43%2BlKNURWIVsVMBmFjyCJ2hhI5D4oOCFKh%2F0vaXgIn7mlHa&X-Amz-Signature=52f50d66d64dc07c3c95ba1f1ed7517d9b5f00d5c49849ac1d0548a4ec149827&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U3FBVX7%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQChqww2pZuvEDJsnCBLf1J29NKo9frkT%2FM3rVSO6f%2BHWQIhAP8jlXeMSYi%2FVWBn%2BQFBOCGGP4EAWye6EStn1ZKChYgYKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7cepjdoAZn5fmZKgq3ANDQUyiSdKGK3pPFNPlEOjeTaNwYilA6%2Bl3SZTRN4oh5bl89OxdyUIKX8ZzaN8EAMi0JdTNqyG7uPU1fDfBJJKMcqF%2F0H9aQ%2FQFZvTUfnW7jCmyPQBIJBW6UcSubh09WInCPQ0HYNwKQxvCJn0wrbRPu4aLZ92UTZzlv1gB6rjDhBxedf0k0NGQD64STadMXx%2BuAS5A5E93dv1DaTvvPmXhOBtknRg5ydNj4z%2FPSw1HA1TMNJtLdRhYYN9OSCBQJQ4MfohOc1JSdxDe7Tgj4CJ%2BxPUEZTz%2Bx%2FnTbfSL7%2FmV2Vj1AF2YeBM7Sgmbp0LL6aPIxP8Bp3BaOnoLr4dRsQ0z%2F31HZQCOZRGAgv8xnriD5v0k3hAXJvvFNsdb09yrz2%2FbeepahNiHB4C9%2BlYV85kawhhruapo%2BLaM7PHwF8O9MRHnHjOrX8co0INKDFM%2Fg%2FEYhxxTtK%2BWQiexteMio4Sj08n0FscdoLzuKe3onWDILPtc5mCHc%2Fy1KLTTRVXb5gklkE29fsphrRo823%2FzhKnMT7sFFlwNcxWjoeCfsrbUZXnRzWA3G370UVIMNEszTjvrMIj%2Bty7RhLpXrTJbuAHmdg%2BV1ADVfgmVnPqmBQ3Q4sYIGF4AQhH71pa3%2FTC9ncnABjqkAdQyU4mSLe9RO7E1pgDROznk42xlZzgodn81niho2grQOlfl804LK7uCnI5lJ7%2F1NuFrtLc2hm0Tw9L3n8GMq5T63tMHsy7DazTUBv7DYxUrRYU3IXZbHzDJiRtrwow03nE2Icg2AqryoLrkEx2wlbu4QYbR%2FSXmfYCv%2B58BlDbjp43%2BlKNURWIVsVMBmFjyCJ2hhI5D4oOCFKh%2F0vaXgIn7mlHa&X-Amz-Signature=d4677cf3eafa0e81b29d82622ab5e7f478a3c995af21bbd0a961632210fc93bc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
