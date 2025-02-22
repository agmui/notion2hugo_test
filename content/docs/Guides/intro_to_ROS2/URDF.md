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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LGYO4ZD%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T220237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSQccGP8lLpron6YfJa2KQEnJmtg4d1W5oSYkivrpZ2QIhANZ9hzF4gMkAdSoAJxqnyvvjRGpAwf%2BrbyGuyqjRuhNCKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3gmLg52tyUTb%2FQ8Eq3ANlDZ65i%2BTJRz7U%2FO5yqaH8wOVyMx0gqgB3SXtv8ssiUhrPXWznHuMB8kU1Fi2W99O38o0IUrjsSmRRH0SVUSQeDTpzzCKJmaXf0MpinsOqVTMq9mfO2QOEgxdBeAnl%2B%2BUVnZF3pVHZjELsRc7rGUZpVVbOdJCC8CsED5o%2BwrUm9h%2B5ezBdYxSwvUeb%2FJr8q6Pyb4PMo%2Fx8MLnOshvlF5M64mcjimTKji2olh64PPh1q6X9gZH09g8buUFm0X%2BQvSik4YIU%2B6a%2BI3Bk1Mi6TH3Ed5oLybWm3v4l7JIv271d6471fRRv%2B0S%2FiiKqFzs7XxwlJzoCKCtgg1kWDmzfjl5cGNfr%2BJyQCrBAtqA465GLgWpUpwO0AKJlXTPfQTbV9FJy51flpgdCoF%2B8NAiM0ZSh9GzRa3HRHYeImw4egGQk%2F3ET6nh6JGC3pKKmmJ3Eqfd9p9RRoeY1IebLL07L5nmeLoHsEedKbtX2OXdCenuusE%2F0BX5HihUP3HyD%2FTDEo598MHsdwj3QNUe5QV8mQ4%2BrHELWAgEzKZqTCW6fzNk1oOD2fK%2BgXohARFQ9miAv4WseEblVCuLhpOx2KOyu%2F%2FAfj5aIfKCIjWjgELfA%2BJQHnzaGXsQQ9PxR5ttyejCfh%2Bi9BjqkActqv0rsX2OkVn2l9NGSEvqlJWFgYZIQUaQ5cI7%2BWObu8YvfiF6eL9VrtiyEqceF0t3vqhwXgXAj6PIMDNyspAXCa%2BE2e4BuIsGO4HWlTMyY4RwKyrGMZRTbfORDuArDCtCD%2FcUrg9Z13Xn%2FX8U4oUN15B42W1wQGKBXvEofAHbgoQRdW%2BfeDegAsRUuuyHA9HBNDg6KQReNRlEUuva1%2Fm5KzOxh&X-Amz-Signature=3c4a04596792118c677c84c48927b06de16ae0393bb3544774980ff36c3b3a57&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LGYO4ZD%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T220237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSQccGP8lLpron6YfJa2KQEnJmtg4d1W5oSYkivrpZ2QIhANZ9hzF4gMkAdSoAJxqnyvvjRGpAwf%2BrbyGuyqjRuhNCKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3gmLg52tyUTb%2FQ8Eq3ANlDZ65i%2BTJRz7U%2FO5yqaH8wOVyMx0gqgB3SXtv8ssiUhrPXWznHuMB8kU1Fi2W99O38o0IUrjsSmRRH0SVUSQeDTpzzCKJmaXf0MpinsOqVTMq9mfO2QOEgxdBeAnl%2B%2BUVnZF3pVHZjELsRc7rGUZpVVbOdJCC8CsED5o%2BwrUm9h%2B5ezBdYxSwvUeb%2FJr8q6Pyb4PMo%2Fx8MLnOshvlF5M64mcjimTKji2olh64PPh1q6X9gZH09g8buUFm0X%2BQvSik4YIU%2B6a%2BI3Bk1Mi6TH3Ed5oLybWm3v4l7JIv271d6471fRRv%2B0S%2FiiKqFzs7XxwlJzoCKCtgg1kWDmzfjl5cGNfr%2BJyQCrBAtqA465GLgWpUpwO0AKJlXTPfQTbV9FJy51flpgdCoF%2B8NAiM0ZSh9GzRa3HRHYeImw4egGQk%2F3ET6nh6JGC3pKKmmJ3Eqfd9p9RRoeY1IebLL07L5nmeLoHsEedKbtX2OXdCenuusE%2F0BX5HihUP3HyD%2FTDEo598MHsdwj3QNUe5QV8mQ4%2BrHELWAgEzKZqTCW6fzNk1oOD2fK%2BgXohARFQ9miAv4WseEblVCuLhpOx2KOyu%2F%2FAfj5aIfKCIjWjgELfA%2BJQHnzaGXsQQ9PxR5ttyejCfh%2Bi9BjqkActqv0rsX2OkVn2l9NGSEvqlJWFgYZIQUaQ5cI7%2BWObu8YvfiF6eL9VrtiyEqceF0t3vqhwXgXAj6PIMDNyspAXCa%2BE2e4BuIsGO4HWlTMyY4RwKyrGMZRTbfORDuArDCtCD%2FcUrg9Z13Xn%2FX8U4oUN15B42W1wQGKBXvEofAHbgoQRdW%2BfeDegAsRUuuyHA9HBNDg6KQReNRlEUuva1%2Fm5KzOxh&X-Amz-Signature=3e81c35fb5f5cc439fe9444977e3a62980a902852048fd174409f86899d5ce1a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
