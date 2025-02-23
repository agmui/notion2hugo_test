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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JBLVUFW%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T070714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8f5ZtomoGm9mPBEvLXJJAoXxaxUVqnXuWkudyNIud5AiB%2BZtjN9JOT4EwuHoWQwuPXAThv4cCOD7hVWWQzoePCqSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMib3zo7CCy3MZLZfAKtwDgofgMhwwsijiJR4NzPt9reisrKfVjH9%2BlofHILCrxtMxSwKO2vCnFzBBfNhkbjZLXgmxSP9BhLdaJpmTqJqLLAVYsD9p7vdMFP4vczXASpQlY03izXVEnjH2MZ0IYNZzbez%2FmpTIGwg7AbB0jicKo999NtN6phCLOzqYZAi3ja5Urtcv9iC%2B4YL%2F6r3v1xMCVTnH%2BeWHlmjsxGYtTvRry6F1fLxhnlAykyeN97ced5oJj1wyDZl0W%2FxGUGQQLe1dv5FkXO43iJXawIud17hsXZhK7mlqE6xCHGIDVYQRGWjR3DXDs1CiTAEnSB9mPms9R0QvrplXGL9qUGpl77sdANGabiUfHy3thzfzMF2r4GX19R7NHNmMb3PxySPgDjOQi%2FyKfMEN91OQKxuqQiU350cp%2B%2Fi1%2FKfwtGKX%2FJ1rtQmoq0ieno8RmCyX8vUQANU1IC84pFRD%2FWYgqfjVd048QY6kyFMRSx6BnWcFMxJNZ0ka%2FcypfAvIxvRzRmbGVYJMLMuMgmz95qqR1jma7lj1X0kpSNE0CSObq1AQt1pxu17ASq%2BnOFKyXWY556D4eqoWQKZPJAld4mHeovS3nYu3ffw3iEPOf%2FMVrV1hf%2FQ2V%2FGA7%2FRWaZVzm9%2BBHEEwjdLqvQY6pgFbiH39d%2FB1hMVJmZIevs56QVrfMctj%2BCKCGHhKvfBJ2vOoZpy4FBtwwxnR%2B28NKNyHEPJXOSJ5OuzrjCQBYOjlvbQ6sGP%2FacN8%2Fbr3jP7X8aDhKGP5wJ4ZFs3TE%2BWNqIr6mdKIywSicjvR%2FV2%2Bk7LaYCGOEqwuoj65LXIChXLv8NqLymIT7a2D2XEe%2FY3ZRLobZB8vx6PF1L7F6hGl7MUQfhU7Tvd1&X-Amz-Signature=d1053cb2f97ed2342a774cc5f90648724b4a45168783879bf736ee71f9c07621&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JBLVUFW%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T070714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8f5ZtomoGm9mPBEvLXJJAoXxaxUVqnXuWkudyNIud5AiB%2BZtjN9JOT4EwuHoWQwuPXAThv4cCOD7hVWWQzoePCqSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMib3zo7CCy3MZLZfAKtwDgofgMhwwsijiJR4NzPt9reisrKfVjH9%2BlofHILCrxtMxSwKO2vCnFzBBfNhkbjZLXgmxSP9BhLdaJpmTqJqLLAVYsD9p7vdMFP4vczXASpQlY03izXVEnjH2MZ0IYNZzbez%2FmpTIGwg7AbB0jicKo999NtN6phCLOzqYZAi3ja5Urtcv9iC%2B4YL%2F6r3v1xMCVTnH%2BeWHlmjsxGYtTvRry6F1fLxhnlAykyeN97ced5oJj1wyDZl0W%2FxGUGQQLe1dv5FkXO43iJXawIud17hsXZhK7mlqE6xCHGIDVYQRGWjR3DXDs1CiTAEnSB9mPms9R0QvrplXGL9qUGpl77sdANGabiUfHy3thzfzMF2r4GX19R7NHNmMb3PxySPgDjOQi%2FyKfMEN91OQKxuqQiU350cp%2B%2Fi1%2FKfwtGKX%2FJ1rtQmoq0ieno8RmCyX8vUQANU1IC84pFRD%2FWYgqfjVd048QY6kyFMRSx6BnWcFMxJNZ0ka%2FcypfAvIxvRzRmbGVYJMLMuMgmz95qqR1jma7lj1X0kpSNE0CSObq1AQt1pxu17ASq%2BnOFKyXWY556D4eqoWQKZPJAld4mHeovS3nYu3ffw3iEPOf%2FMVrV1hf%2FQ2V%2FGA7%2FRWaZVzm9%2BBHEEwjdLqvQY6pgFbiH39d%2FB1hMVJmZIevs56QVrfMctj%2BCKCGHhKvfBJ2vOoZpy4FBtwwxnR%2B28NKNyHEPJXOSJ5OuzrjCQBYOjlvbQ6sGP%2FacN8%2Fbr3jP7X8aDhKGP5wJ4ZFs3TE%2BWNqIr6mdKIywSicjvR%2FV2%2Bk7LaYCGOEqwuoj65LXIChXLv8NqLymIT7a2D2XEe%2FY3ZRLobZB8vx6PF1L7F6hGl7MUQfhU7Tvd1&X-Amz-Signature=9e979e7995f2a4f03347cb3e3afba41d824a4361b208dab41031c3c436677482&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
