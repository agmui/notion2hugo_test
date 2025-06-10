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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FJ55QXV%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T051008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChHsLVGhGdz6IVIDMLzLXPUk%2B%2FjQOsqhP4Aq5WVBCyrgIhAIuiqKiIy13WUYmXB6Gx1Rm%2BfwDkK%2BY2ziMPhKe9AsYJKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEWI8zJb7tP1lFAnMq3AMbIduLvQMJsLIldW7a0yb5Z0uGk85JRNiuj9a5JeIE%2FypAtyKRUwz7g5v5rnzxJm5vfgOSW7Wv1CW53pNHPznz9rjx%2FH7LvJvesYW6ID5wwTTtUFZdl67pP2mV%2F2g6E2OfNwiBjsJmfcEAURLTaMNB%2B5F1lxIo7%2B7zq%2Bw%2F91TEdLQuRyIgpwMQ25jt97wf0LL1%2Bu2dmYCLx%2F%2BGhBu1%2BtgH4n6fvlCwN%2FKFlstquRrwgl0plvjn6CB%2Fs9xaxZ5aPzgpf96wuuaG7qcBQbVfavzOdArKq4oVLtA0aFTvchxwaSHnINpi0PGR2dIV%2Bmdrimn6HL6gHopnauDc%2BSEMK7Z%2Fuwih47nmT0MvxPCX2KMDQi0k3YZFzSZ8ulMHmBLFbPkXrqk5gyXBhY9gK8G4Ry03CxzVRgiLy4DBdqtF9uDx1FwWl4wdWUxg87FAlQrRDGoRkNiVm3%2B5RsxCbFm3T8soxhnvpZw5zSnMq6o6b6hXy0FwgdCCUpqOUuyEhQrIDFRogvvqw%2FSEp9EQg5QYqMs75%2Fowr2XDez4smrQtCspVazAWKfyoegc9qpdKg4ytKyOlEHcB2fgPVEP6a%2FsVKHQWlSfjr6VWYipnFG07tBVMu6FO1C%2B%2Fvr5%2FF5oA%2FzD01Z7CBjqkAT61%2FaCG9pqa0HfoqvVpVBQ99jNn2UmQScR8uFYY7h8esX0fknFdtH2yvrL1YTOozwhxcwGXmPEQQ4tIn2BxAQqJ%2FSzsaUHjQv5XYMgn2EyJB0PEcz%2BgmH254HQUuQgPP5VrF7k4Htzfu4znizxS%2F1gFgu3dpj0VEckgckWgH2f7GMUC2QO%2Fmfm2I03L%2BI1GiUd%2B%2Fiz979r1%2FMGc7Gz5obNGI2rS&X-Amz-Signature=2f589ad64d56b7ddcee422671c6d27782e3de3ba66c03cb2a334d954d4e198ff&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FJ55QXV%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T051008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChHsLVGhGdz6IVIDMLzLXPUk%2B%2FjQOsqhP4Aq5WVBCyrgIhAIuiqKiIy13WUYmXB6Gx1Rm%2BfwDkK%2BY2ziMPhKe9AsYJKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEWI8zJb7tP1lFAnMq3AMbIduLvQMJsLIldW7a0yb5Z0uGk85JRNiuj9a5JeIE%2FypAtyKRUwz7g5v5rnzxJm5vfgOSW7Wv1CW53pNHPznz9rjx%2FH7LvJvesYW6ID5wwTTtUFZdl67pP2mV%2F2g6E2OfNwiBjsJmfcEAURLTaMNB%2B5F1lxIo7%2B7zq%2Bw%2F91TEdLQuRyIgpwMQ25jt97wf0LL1%2Bu2dmYCLx%2F%2BGhBu1%2BtgH4n6fvlCwN%2FKFlstquRrwgl0plvjn6CB%2Fs9xaxZ5aPzgpf96wuuaG7qcBQbVfavzOdArKq4oVLtA0aFTvchxwaSHnINpi0PGR2dIV%2Bmdrimn6HL6gHopnauDc%2BSEMK7Z%2Fuwih47nmT0MvxPCX2KMDQi0k3YZFzSZ8ulMHmBLFbPkXrqk5gyXBhY9gK8G4Ry03CxzVRgiLy4DBdqtF9uDx1FwWl4wdWUxg87FAlQrRDGoRkNiVm3%2B5RsxCbFm3T8soxhnvpZw5zSnMq6o6b6hXy0FwgdCCUpqOUuyEhQrIDFRogvvqw%2FSEp9EQg5QYqMs75%2Fowr2XDez4smrQtCspVazAWKfyoegc9qpdKg4ytKyOlEHcB2fgPVEP6a%2FsVKHQWlSfjr6VWYipnFG07tBVMu6FO1C%2B%2Fvr5%2FF5oA%2FzD01Z7CBjqkAT61%2FaCG9pqa0HfoqvVpVBQ99jNn2UmQScR8uFYY7h8esX0fknFdtH2yvrL1YTOozwhxcwGXmPEQQ4tIn2BxAQqJ%2FSzsaUHjQv5XYMgn2EyJB0PEcz%2BgmH254HQUuQgPP5VrF7k4Htzfu4znizxS%2F1gFgu3dpj0VEckgckWgH2f7GMUC2QO%2Fmfm2I03L%2BI1GiUd%2B%2Fiz979r1%2FMGc7Gz5obNGI2rS&X-Amz-Signature=fcc00cadfc47b9dfbf3c072af507f05a6ec1c591a5413a615e109e6554de4559&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
