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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KWUKQW4%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChtt2nXsMwvc0DNegsiQsCWaM5YvnsSBOXmY%2FRJL7FMAIgYmdMz%2BbYaJArZ%2Bd7xXRkukku697aStd4Gc1Fn%2Bp9SDgqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDkvWN0RFMfLc1R8MircA7Fvg95ozGVyTTVxd%2BKU8lQjyTsvp%2FDGj855giLVcOlksFpJHcXTMhv%2BC6sQ4hysrj%2FF6YQUdPrh3YZhZebyopFTnBswzJdsENg1HGAL32YKDimYQ%2BT0%2Bjc0xkPDfj3SMBRPUi5yDn7SZHwQGKo3WT1riqz869UF2TPW7lATqbbbChG12yU5fgkHqzMyWpWt%2BnME7W16YNuAaM1KOzA2SdjfCRVzhtYL91sLOUBtspnL1vMwjG9fN1wp%2BbvF7myHI1aWlqPZGP%2BnGcz4skEl18n9DJWK8G%2BfZwUz4CovrcMTUUm6Eva%2Fy8cK4swqr2jKQPZbdDa0gSQgdmnyGJ2PPbvmnP%2Fk9Ob8M%2BuY5THVO5P2%2Bep4jTII5zBiqD0W3rqy8E1iTMS3y62M9GpK%2FaTKKqUkrsl84ozrXmXcSPOiQ0uGrCXlzOPHSML0hYtoMzQT%2FQrjvunkrnHCk%2FBwyBJMGHPGFwF%2BngGl3EW1h1J4nufrHdkWsQwPYWT0iDtataBpP9BoIkdnZ6f7oXgYmR9gRiXpIKHoV%2Bnw12%2F3XYYI8d1wt0pBpLjKNjQbTKndF5jGGL601bM075LWKGaJ3PiDAIIvajGpF8ioVU3EyZeHzyCZhpqbX%2BTb9CzdYVVyMLXV58EGOqUBRP%2Bl3eW9H%2F4OvkmntyytZqpXNuf%2F5J3l%2BXxFj38Mqfgb8CwebN8yuzVDVqVeYxU3vGaliRjre7cHrqBFAoYn9nFPUYEiE%2FnS%2F7D9Ds0%2BPxtX8PFlljA2edFDG0SD2UuYXWrHR1chg6W%2BcONHiXPqRut2wLOELvijZD55vlb4aU%2B%2BizXHf4U5dP4w1gg1uFDCXl3L4gNnIgBq85f04gC8hyYuABkU&X-Amz-Signature=e962414537332735daa8332ffaece7fa9ad98d6eb76620e6c293d4de121921c2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KWUKQW4%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChtt2nXsMwvc0DNegsiQsCWaM5YvnsSBOXmY%2FRJL7FMAIgYmdMz%2BbYaJArZ%2Bd7xXRkukku697aStd4Gc1Fn%2Bp9SDgqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDkvWN0RFMfLc1R8MircA7Fvg95ozGVyTTVxd%2BKU8lQjyTsvp%2FDGj855giLVcOlksFpJHcXTMhv%2BC6sQ4hysrj%2FF6YQUdPrh3YZhZebyopFTnBswzJdsENg1HGAL32YKDimYQ%2BT0%2Bjc0xkPDfj3SMBRPUi5yDn7SZHwQGKo3WT1riqz869UF2TPW7lATqbbbChG12yU5fgkHqzMyWpWt%2BnME7W16YNuAaM1KOzA2SdjfCRVzhtYL91sLOUBtspnL1vMwjG9fN1wp%2BbvF7myHI1aWlqPZGP%2BnGcz4skEl18n9DJWK8G%2BfZwUz4CovrcMTUUm6Eva%2Fy8cK4swqr2jKQPZbdDa0gSQgdmnyGJ2PPbvmnP%2Fk9Ob8M%2BuY5THVO5P2%2Bep4jTII5zBiqD0W3rqy8E1iTMS3y62M9GpK%2FaTKKqUkrsl84ozrXmXcSPOiQ0uGrCXlzOPHSML0hYtoMzQT%2FQrjvunkrnHCk%2FBwyBJMGHPGFwF%2BngGl3EW1h1J4nufrHdkWsQwPYWT0iDtataBpP9BoIkdnZ6f7oXgYmR9gRiXpIKHoV%2Bnw12%2F3XYYI8d1wt0pBpLjKNjQbTKndF5jGGL601bM075LWKGaJ3PiDAIIvajGpF8ioVU3EyZeHzyCZhpqbX%2BTb9CzdYVVyMLXV58EGOqUBRP%2Bl3eW9H%2F4OvkmntyytZqpXNuf%2F5J3l%2BXxFj38Mqfgb8CwebN8yuzVDVqVeYxU3vGaliRjre7cHrqBFAoYn9nFPUYEiE%2FnS%2F7D9Ds0%2BPxtX8PFlljA2edFDG0SD2UuYXWrHR1chg6W%2BcONHiXPqRut2wLOELvijZD55vlb4aU%2B%2BizXHf4U5dP4w1gg1uFDCXl3L4gNnIgBq85f04gC8hyYuABkU&X-Amz-Signature=5ce90a0536e1ad5ce79d7e5fd6106798db61ef935cf4d52053f884277ce86cf9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
