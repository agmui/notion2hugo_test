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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJTYIA3A%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T033057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB763OuVviSMgevYP9K10%2FDM0ee1qsnacplMHfoJYCMBAiBm3u6O07EG8RajrX9BpfrnlpdY78nXdaf6JWuxR%2FbAWCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLG6FqRWSUfdKIHueKtwDp8rohqUb%2B5EnrQx3a7c5vmLvwR9F83eAlpUG1tKiePPzTRno3cegRxBQN%2BO%2B3Mnon2mueI%2FoVSB0es%2FZCwRm9knQ0jwm%2FCxcQPnlZnGUnats%2FUSqDDbnVaYZxXirb2I7qGESiF9%2FsXGcL%2BMkqOkmgS6pmULEOKR0kCEDQS2kzUBkujm61Q2cToFzHT6wwuRaFXO8tyUl6OrconHjRp3bFBrllvFj6myqsS5%2FWI5EW8ncb1f9fGdRTuqjMsfRHomQXf94V0pxE4ALd1wBzIxHr46EsmwoUmKH52rOAIt0Uo7DHNjyXqB7XC%2B6i7tBdWuh1ePxU52GqNYhjDY72VScQJjnpDmIGFnmlOyxsmTy3ciRSaQ4KLumU4Y7sWyqSViXkA7no%2BvRnt3TF0%2BAXugwDYquGcylSW56fdmqkZbw2w4yxHFTrFNnf7xgrE5NEsZcK0kGR1%2BBmN0KntNgQPOTsJWin40tGViBA%2FzKEPqtVbH%2FQ7B%2FPw%2Fp1o5OndrY49ucTSrPXqwEKjfu68uGQslYmRW7DwDY5Y2bJelAbZ%2F2k0aqdzcWqmsSTpRKpX2%2BJIpxMq39xHjcEX%2FeHY9yeiR%2BF609s6NyFNXf29W1YgeiQC7PkrtXudHw9Fu39yowrf3AwAY6pgGJCVfv1hojeHDYYsmWa6TEeqk9CJ5IUhgFpVYqpO3nPbapBlRaxCi0%2FOu%2BevS8MPuVQHhmNczimtOdsEfgZlb9inJNryanWlr2N%2FJm92wG5E3WBdHT%2FI9tniFbk%2FDOkirLLAU1SxS0UBiLy1fY3bFcBqyd4SIX8LJscyVYcz%2BJQVqzGURpnK7UssjZJt%2BCHI2Ala3SYzPnFubEVzVTyMsqk1HI7kiv&X-Amz-Signature=b9131d7f19db2ceff7c007ff5361223187851951622c4bccad39eb38a25bab9a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJTYIA3A%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T033057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB763OuVviSMgevYP9K10%2FDM0ee1qsnacplMHfoJYCMBAiBm3u6O07EG8RajrX9BpfrnlpdY78nXdaf6JWuxR%2FbAWCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLG6FqRWSUfdKIHueKtwDp8rohqUb%2B5EnrQx3a7c5vmLvwR9F83eAlpUG1tKiePPzTRno3cegRxBQN%2BO%2B3Mnon2mueI%2FoVSB0es%2FZCwRm9knQ0jwm%2FCxcQPnlZnGUnats%2FUSqDDbnVaYZxXirb2I7qGESiF9%2FsXGcL%2BMkqOkmgS6pmULEOKR0kCEDQS2kzUBkujm61Q2cToFzHT6wwuRaFXO8tyUl6OrconHjRp3bFBrllvFj6myqsS5%2FWI5EW8ncb1f9fGdRTuqjMsfRHomQXf94V0pxE4ALd1wBzIxHr46EsmwoUmKH52rOAIt0Uo7DHNjyXqB7XC%2B6i7tBdWuh1ePxU52GqNYhjDY72VScQJjnpDmIGFnmlOyxsmTy3ciRSaQ4KLumU4Y7sWyqSViXkA7no%2BvRnt3TF0%2BAXugwDYquGcylSW56fdmqkZbw2w4yxHFTrFNnf7xgrE5NEsZcK0kGR1%2BBmN0KntNgQPOTsJWin40tGViBA%2FzKEPqtVbH%2FQ7B%2FPw%2Fp1o5OndrY49ucTSrPXqwEKjfu68uGQslYmRW7DwDY5Y2bJelAbZ%2F2k0aqdzcWqmsSTpRKpX2%2BJIpxMq39xHjcEX%2FeHY9yeiR%2BF609s6NyFNXf29W1YgeiQC7PkrtXudHw9Fu39yowrf3AwAY6pgGJCVfv1hojeHDYYsmWa6TEeqk9CJ5IUhgFpVYqpO3nPbapBlRaxCi0%2FOu%2BevS8MPuVQHhmNczimtOdsEfgZlb9inJNryanWlr2N%2FJm92wG5E3WBdHT%2FI9tniFbk%2FDOkirLLAU1SxS0UBiLy1fY3bFcBqyd4SIX8LJscyVYcz%2BJQVqzGURpnK7UssjZJt%2BCHI2Ala3SYzPnFubEVzVTyMsqk1HI7kiv&X-Amz-Signature=f77c1313e80f027914c29a3f13f31ee85837f2e50633d7cd6845118e69d62266&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
