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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAPPLKGL%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T020846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDauVPi7LPomap4adIX6x2BqsLJDTRnOEg3t6OD8LrjZAIgItMKkMLm%2FNKwMFGd9P0kE1KJ69M2vEAaom5wWMni1dgqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhuhknI0ZhEDcRpUyrcA7loHdx9OXdJ4NxIShom%2BHexwEvTH9lwGVGOYiaGBpDdd0WfWZVKOfOlof79sWzdIvwWUMyimqFjsNwujvRnJbueWP6m7s1Z71vJgBDW8BYM7jIHTajo0TpZhHP4T%2FsdJ4Yc52ls8DnXXrNw0EARUYUNUGneu19PXwnl2zb4IsP%2BBtNeD17voHJLHshSGPdA3viHwB2%2B2fzIE1AaMpDFEJlg%2Fhhs0rU2hx8yXPBNA6TTUTTsVlMhM5WthNM6MXScIi1JURehuaN2Jr9NAZHy%2BNAJnSJUrDOsFnoS8ekMh%2BQVSr7r3XVMr9bXxPOp9i5eO%2BAtoz6PEgkoxwOySynQWEQQvzmXVbLJNuoVko24MQ5oftnXS8JhFEM2eQJR9ez6%2FCz9aqIZiu5hOCwvSDr7zUPq1zRkBzC14h3szB9pbuiqXyB4YxHMdlBFY7%2Bq6v0MWVhd81%2BxyUEQTYuOeKoIixDL8unyiZcwdUqGEIj5CPfbm9c0V5ioCovCoKQG4ESPSVDwkOb3LtpgD%2FfajlAx8xpG8YMvayis4h3FmSSNnTQeAoWCVg4PQJzY%2B1H3aNsgT1a5Y6rb%2BsTGsduJQdMT6nRjbe3UdS0zvMXuaP96PetpTNXY0REZlO8BC1NTMIDEz70GOqUBMv2P3E823JIaVWVoUWooFXcKwVI74ejW5vY3w1dMxM8zkmvAS1nrJfSXb7L8eHsl1xyBzvbpcw7zUHxmuOCJoU%2Ff4dTwzdr1lm9Amu6CM3nN9ArWMSA99YQctfHm3RsO9Pp7Mrse0LU%2FlFfh%2Bkc3g%2BNqKMmuWzdM8edYdshgRFj7w%2BqpXcL0k6jdbFEYPilSvQVzgnu0fmas%2F%2BEPPXDIG9rYeYb2&X-Amz-Signature=b6fce435bc0fdd628cc1870d573ba9d53585cc7dbee3e93432be1de77e1413ee&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAPPLKGL%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T020846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDauVPi7LPomap4adIX6x2BqsLJDTRnOEg3t6OD8LrjZAIgItMKkMLm%2FNKwMFGd9P0kE1KJ69M2vEAaom5wWMni1dgqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhuhknI0ZhEDcRpUyrcA7loHdx9OXdJ4NxIShom%2BHexwEvTH9lwGVGOYiaGBpDdd0WfWZVKOfOlof79sWzdIvwWUMyimqFjsNwujvRnJbueWP6m7s1Z71vJgBDW8BYM7jIHTajo0TpZhHP4T%2FsdJ4Yc52ls8DnXXrNw0EARUYUNUGneu19PXwnl2zb4IsP%2BBtNeD17voHJLHshSGPdA3viHwB2%2B2fzIE1AaMpDFEJlg%2Fhhs0rU2hx8yXPBNA6TTUTTsVlMhM5WthNM6MXScIi1JURehuaN2Jr9NAZHy%2BNAJnSJUrDOsFnoS8ekMh%2BQVSr7r3XVMr9bXxPOp9i5eO%2BAtoz6PEgkoxwOySynQWEQQvzmXVbLJNuoVko24MQ5oftnXS8JhFEM2eQJR9ez6%2FCz9aqIZiu5hOCwvSDr7zUPq1zRkBzC14h3szB9pbuiqXyB4YxHMdlBFY7%2Bq6v0MWVhd81%2BxyUEQTYuOeKoIixDL8unyiZcwdUqGEIj5CPfbm9c0V5ioCovCoKQG4ESPSVDwkOb3LtpgD%2FfajlAx8xpG8YMvayis4h3FmSSNnTQeAoWCVg4PQJzY%2B1H3aNsgT1a5Y6rb%2BsTGsduJQdMT6nRjbe3UdS0zvMXuaP96PetpTNXY0REZlO8BC1NTMIDEz70GOqUBMv2P3E823JIaVWVoUWooFXcKwVI74ejW5vY3w1dMxM8zkmvAS1nrJfSXb7L8eHsl1xyBzvbpcw7zUHxmuOCJoU%2Ff4dTwzdr1lm9Amu6CM3nN9ArWMSA99YQctfHm3RsO9Pp7Mrse0LU%2FlFfh%2Bkc3g%2BNqKMmuWzdM8edYdshgRFj7w%2BqpXcL0k6jdbFEYPilSvQVzgnu0fmas%2F%2BEPPXDIG9rYeYb2&X-Amz-Signature=0b38b01415914317d0e2ece5fd15f2894932f47ed1537add3c051a91bb44690f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
