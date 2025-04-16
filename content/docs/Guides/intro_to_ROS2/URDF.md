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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BZSGJAE%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T081220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCa0jxdFLXRDmO4DCEcntBqs2B%2BQ8GYQkCbNggKwWGSAiEA3ge7RQMYMUaIOkMkbVPHo65hNBQTBQjenUcBFCy2rA0q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDC4JG99506T9oAeO0CrcA97PO0MjBLsYkixhwzm2x7%2F9JINZseZzjYBdSh4luDnbazuqlLwnj29NQFymcVFZ24RGtl9AufdQ7ArCX7xh5l58eqRSjPziH56IVz%2BwRXFoAqmZMLkgakvGKQvJTAAFC1b3jddqGTA0CnGMQbtrMW3aeQFLtQDR39%2FRZk0qNRWba7YZzmFRnDCTkDsbfET%2BKIHBlQNtiBky%2BVxTm%2FjZL0tDxo%2FwtHECA%2F%2F9hS3swbbDWp2k0ikY8E5%2BJR0Bbrj2w%2FdRIyHzDpjgKWNTDZwS%2BVLU%2FcFUu6rEh2YHLY9Gu0T8zI7ec9gEWwRLxSqqGTzgjZ5aKsFcqqyiVptk41NU5P%2FQk0EGVesTRhqHPGXeSZfWcCHQKDmMUEwkxxjLIw5SMFOqXyg6DBMNEPw38MFw3KYDGcCR2EUP8sEAl%2FHqX2sAEI7PFPMLEign5eWb0UULCBupAE6ChaP6P5h8YUilfW8QPL6VTFFEG1DfueAm2zYqM%2Bd32G%2BFuYl9BAHjAdOYoIF66X6fAa9Axj3FqTAp9lE%2F5WjWlD3S8QXos4TeJKu0YSi%2FeDin%2BKO0WXbJmevR55DcQCdzLP1R%2FbEHq%2Fn95VW5hTp1EJsgf5maHXZl5soShLLR2SDZijZ55KUrMIjA%2Fb8GOqUBT2zEbilXk%2Bwol%2BQIbprrk%2B6fjY1ZOfZIYRCAT%2Bgs9yV4JGV9krCv3Q4N%2FfuQf9La6s8B7pAa3yDnrM%2BQKYYLL8r42yFjJFq%2B%2FkknDMgjYKCEBAhUcCvTWwpGxFrlDjghYRq%2FusfboC9j3tp%2F06EpVGOzxIUwS%2FN85Y%2FM%2BNyDQYaC3ALMIBs1kx1IWIaFNrLQ7InqUUSZjQUMsATb8hfy4WhsJU9L&X-Amz-Signature=121a92ab71b5da0f613a0a0f839934f5581d6a0806a146980d4ae18e9389af3a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BZSGJAE%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T081220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCa0jxdFLXRDmO4DCEcntBqs2B%2BQ8GYQkCbNggKwWGSAiEA3ge7RQMYMUaIOkMkbVPHo65hNBQTBQjenUcBFCy2rA0q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDC4JG99506T9oAeO0CrcA97PO0MjBLsYkixhwzm2x7%2F9JINZseZzjYBdSh4luDnbazuqlLwnj29NQFymcVFZ24RGtl9AufdQ7ArCX7xh5l58eqRSjPziH56IVz%2BwRXFoAqmZMLkgakvGKQvJTAAFC1b3jddqGTA0CnGMQbtrMW3aeQFLtQDR39%2FRZk0qNRWba7YZzmFRnDCTkDsbfET%2BKIHBlQNtiBky%2BVxTm%2FjZL0tDxo%2FwtHECA%2F%2F9hS3swbbDWp2k0ikY8E5%2BJR0Bbrj2w%2FdRIyHzDpjgKWNTDZwS%2BVLU%2FcFUu6rEh2YHLY9Gu0T8zI7ec9gEWwRLxSqqGTzgjZ5aKsFcqqyiVptk41NU5P%2FQk0EGVesTRhqHPGXeSZfWcCHQKDmMUEwkxxjLIw5SMFOqXyg6DBMNEPw38MFw3KYDGcCR2EUP8sEAl%2FHqX2sAEI7PFPMLEign5eWb0UULCBupAE6ChaP6P5h8YUilfW8QPL6VTFFEG1DfueAm2zYqM%2Bd32G%2BFuYl9BAHjAdOYoIF66X6fAa9Axj3FqTAp9lE%2F5WjWlD3S8QXos4TeJKu0YSi%2FeDin%2BKO0WXbJmevR55DcQCdzLP1R%2FbEHq%2Fn95VW5hTp1EJsgf5maHXZl5soShLLR2SDZijZ55KUrMIjA%2Fb8GOqUBT2zEbilXk%2Bwol%2BQIbprrk%2B6fjY1ZOfZIYRCAT%2Bgs9yV4JGV9krCv3Q4N%2FfuQf9La6s8B7pAa3yDnrM%2BQKYYLL8r42yFjJFq%2B%2FkknDMgjYKCEBAhUcCvTWwpGxFrlDjghYRq%2FusfboC9j3tp%2F06EpVGOzxIUwS%2FN85Y%2FM%2BNyDQYaC3ALMIBs1kx1IWIaFNrLQ7InqUUSZjQUMsATb8hfy4WhsJU9L&X-Amz-Signature=e2be1a118ea2168705ddb2187d1c3d8848537b1eced9e859c93020d31b6eb8d3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
