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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNV3LU6Q%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T050802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz7sAxZWQ4DrJGqHJ72eKaXTnBCgTyC0ALRpZOUXIaQgIhAK6CxNS4vgYaqFB9a60m804fbSPmaS5%2BojjgR5CIye%2FJKv8DCD0QABoMNjM3NDIzMTgzODA1IgzSFOzxnAfAQQmDj8kq3APbBiYTbvswsBxzV2lLjCgQOSHjipkpIOL2W64H6X2B30Afhreo39Ss5n0uDleO40WeyBhfGGwngbVd%2FhrNPomp507hMykbjoCI0BSyyAF9GCmByEsZmrBGqZW515%2BIyJ%2Bc9dIrBwHDrlfZStygOBz3uLbBV9J2GwqLtqy2FhSy9T6YZ%2BVpSHG9CtBEdKfD1icEZ%2BbsNw3FfqNRpvt7J7dBn4Upvsosa4SLEJoiy35vmCQOVzIbzyQM5xmoZ5z4ylP4YWQxs8e55zyX5aTrvrQcxeED%2BJ1qp6ny5SerW5BOzFzo6EMyPUBW2Av5sP5YfRWOVjLIPUTzPZnXc%2BYxFO0C35V03mdpvwiptCecJdI2SdjjfNuA%2B9iVWgFwP8QlUGvkefMP9%2F7yt%2BOxgf58wQCL8HRqpzzgD1GJjuMUvvXmxxzXNqcrmRg4x7Uul%2BJcFBnkadbRBVK46GD1YcUPyOKCVrW7dhAEcm90MrnwnYKe8%2FzRmh69kKNDH8a6uhuC50KrkjmmUUd8LhdFUtf4%2FHMJWbdXgooheTnOf7Dl38LP7udxR1ojg5zrvAS9%2BRFHhmVNVhzHspCTORuSf4X8y9VqZVVP8UnLPBwEK3VSf1fHKAGriJmPcBkqsJFV7jDKgMi%2FBjqkARsR%2Fl3fx5Z2Sdc1D7KIdKKpuwdQ0PaUhCvagl0wQrp0yIn4UDS%2F4eG4MD1lCWDRbl%2FN5F1qUkefTGojuxIz3SOtivUFwn678g8RgK3t%2BNSwiohEtnxIBkWxWUcPIXHs3%2FNuF6Sn6Vfl7V0hHdmlXPXL0avCU4i7F0mIifq6Ce%2B1vUB3Ky%2B1R0rP8OHF5NcN5sKGdp%2BJS2kJwNz%2BrP%2Bbms%2BGPSU6&X-Amz-Signature=8044a83810ab4e4232b102a8099846d28b3eee9543793f02f3579178f6648333&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNV3LU6Q%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T050802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz7sAxZWQ4DrJGqHJ72eKaXTnBCgTyC0ALRpZOUXIaQgIhAK6CxNS4vgYaqFB9a60m804fbSPmaS5%2BojjgR5CIye%2FJKv8DCD0QABoMNjM3NDIzMTgzODA1IgzSFOzxnAfAQQmDj8kq3APbBiYTbvswsBxzV2lLjCgQOSHjipkpIOL2W64H6X2B30Afhreo39Ss5n0uDleO40WeyBhfGGwngbVd%2FhrNPomp507hMykbjoCI0BSyyAF9GCmByEsZmrBGqZW515%2BIyJ%2Bc9dIrBwHDrlfZStygOBz3uLbBV9J2GwqLtqy2FhSy9T6YZ%2BVpSHG9CtBEdKfD1icEZ%2BbsNw3FfqNRpvt7J7dBn4Upvsosa4SLEJoiy35vmCQOVzIbzyQM5xmoZ5z4ylP4YWQxs8e55zyX5aTrvrQcxeED%2BJ1qp6ny5SerW5BOzFzo6EMyPUBW2Av5sP5YfRWOVjLIPUTzPZnXc%2BYxFO0C35V03mdpvwiptCecJdI2SdjjfNuA%2B9iVWgFwP8QlUGvkefMP9%2F7yt%2BOxgf58wQCL8HRqpzzgD1GJjuMUvvXmxxzXNqcrmRg4x7Uul%2BJcFBnkadbRBVK46GD1YcUPyOKCVrW7dhAEcm90MrnwnYKe8%2FzRmh69kKNDH8a6uhuC50KrkjmmUUd8LhdFUtf4%2FHMJWbdXgooheTnOf7Dl38LP7udxR1ojg5zrvAS9%2BRFHhmVNVhzHspCTORuSf4X8y9VqZVVP8UnLPBwEK3VSf1fHKAGriJmPcBkqsJFV7jDKgMi%2FBjqkARsR%2Fl3fx5Z2Sdc1D7KIdKKpuwdQ0PaUhCvagl0wQrp0yIn4UDS%2F4eG4MD1lCWDRbl%2FN5F1qUkefTGojuxIz3SOtivUFwn678g8RgK3t%2BNSwiohEtnxIBkWxWUcPIXHs3%2FNuF6Sn6Vfl7V0hHdmlXPXL0avCU4i7F0mIifq6Ce%2B1vUB3Ky%2B1R0rP8OHF5NcN5sKGdp%2BJS2kJwNz%2BrP%2Bbms%2BGPSU6&X-Amz-Signature=1e52b17928147fbfaed8703bc5b3b4d276e34dcd92ee8c2532555b214fbc44b0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
