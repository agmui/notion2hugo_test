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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EJQU3D5%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH860ZiSmowb%2FlrSyr%2BaR8awUb0UnYzYFTaURUfTrIDwIhAM8t9DdWod57K6AFqr9SAnTo9SjmDNp%2BinTTUuP967IeKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7dSV9XLjqE%2BEuoQ0q3APdakf1tJvLu5zDuKUI46yC%2FsIfI8kMAyw7N8trlUrIISDT2WgBKLQAWrAzOxu1uJQ8wsVf7%2FekEbqVq6V%2FeocaHYIECkZ3A94BxLHVVk22ynYLasYCY6ebMTW59Q%2BqxKQS%2FJQXliR7ebLcz%2F%2FuI7w0L0xP75HnDaAQCUwhufh8xhypkBp8wDqrjdK59RXSFWRDwjEKu8JP1HUer1TCY%2FYbPdEEiZ3arjOXC5joI6kxMSzUmjPWs6AHlZov1Dx6fVfQSASDbyQhrhyxx%2BcmR9I9gMTTzwFycYVH9n%2FMiRiXfPKnZ17aZ17qU%2BlFfBrRHnOqNzt2s1D2jeSU31OhLq3X8GKNpAqz7M9wjz5JKiKzT3GqQvfz1H%2BdqfJMaNDc1gidj%2FfWiXOc168WlmmIhJR2%2BML3hebMfjAnIdyxnNr3FlEuUVU6BzBqQBKNBUZGWgrrDmi90guOz7Dx7XuQbb6La9ZrP3avPVWHM%2FmjMdIdAnl5jJv%2FDapLyfFIt5%2F1j6PE14kRRf5f4DrAkZ4gT0GeL65LctMCumn0g88EqCnJrx37BLgRn9tM4koggf8yuyFZ5c6jxANu1%2B0tu%2F03mMt2eczQxOxdYu0%2B%2BVdQgPy8Y0Hc%2FJ4dP%2B4vp%2B5tCTDwuIO%2FBjqkAQ1HTwo1MFHD9j4fFQpAqFIruTmh6l4SFfH5HWTRTCBCdPR4gf1Bfu2Gt9z3hO%2F%2Fw17oBVfoQ3unDDXXIJRpnedjDv99RSMP4QdjvGCwDj5NuNwNUIJdeAA5tia8YuyIEPQKj7C7COBZszxRL0V%2Bttfpj1onsyVdAq0D6Fm3g1fTflrdoJcXO5PognFWT7Gl84Ee05ZFMzpWLr5FnJIfdov4rOvS&X-Amz-Signature=9e27ee6f4458a5b9d6f2996d70b778d48c33c68b6731a44ebd5da9833566a281&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EJQU3D5%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH860ZiSmowb%2FlrSyr%2BaR8awUb0UnYzYFTaURUfTrIDwIhAM8t9DdWod57K6AFqr9SAnTo9SjmDNp%2BinTTUuP967IeKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7dSV9XLjqE%2BEuoQ0q3APdakf1tJvLu5zDuKUI46yC%2FsIfI8kMAyw7N8trlUrIISDT2WgBKLQAWrAzOxu1uJQ8wsVf7%2FekEbqVq6V%2FeocaHYIECkZ3A94BxLHVVk22ynYLasYCY6ebMTW59Q%2BqxKQS%2FJQXliR7ebLcz%2F%2FuI7w0L0xP75HnDaAQCUwhufh8xhypkBp8wDqrjdK59RXSFWRDwjEKu8JP1HUer1TCY%2FYbPdEEiZ3arjOXC5joI6kxMSzUmjPWs6AHlZov1Dx6fVfQSASDbyQhrhyxx%2BcmR9I9gMTTzwFycYVH9n%2FMiRiXfPKnZ17aZ17qU%2BlFfBrRHnOqNzt2s1D2jeSU31OhLq3X8GKNpAqz7M9wjz5JKiKzT3GqQvfz1H%2BdqfJMaNDc1gidj%2FfWiXOc168WlmmIhJR2%2BML3hebMfjAnIdyxnNr3FlEuUVU6BzBqQBKNBUZGWgrrDmi90guOz7Dx7XuQbb6La9ZrP3avPVWHM%2FmjMdIdAnl5jJv%2FDapLyfFIt5%2F1j6PE14kRRf5f4DrAkZ4gT0GeL65LctMCumn0g88EqCnJrx37BLgRn9tM4koggf8yuyFZ5c6jxANu1%2B0tu%2F03mMt2eczQxOxdYu0%2B%2BVdQgPy8Y0Hc%2FJ4dP%2B4vp%2B5tCTDwuIO%2FBjqkAQ1HTwo1MFHD9j4fFQpAqFIruTmh6l4SFfH5HWTRTCBCdPR4gf1Bfu2Gt9z3hO%2F%2Fw17oBVfoQ3unDDXXIJRpnedjDv99RSMP4QdjvGCwDj5NuNwNUIJdeAA5tia8YuyIEPQKj7C7COBZszxRL0V%2Bttfpj1onsyVdAq0D6Fm3g1fTflrdoJcXO5PognFWT7Gl84Ee05ZFMzpWLr5FnJIfdov4rOvS&X-Amz-Signature=e1486c46b8077f00e2d318576a1f2bdb0e9fb01013eb361a506c863cf190c9db&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
