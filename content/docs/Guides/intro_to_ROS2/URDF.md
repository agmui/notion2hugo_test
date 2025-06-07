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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMGUE74D%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC878Lqze3bNVh3c2tEvMs%2BEGtIyWolgKIibxFossqltwIgB45fz7TuOr41E0gR%2Fk%2FRMVOHTIG2iHwQKdo6WZFomU4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDO8cFV8j1wXtBGvuiyrcAyKSPgEbzFMzVYEemOdRPOvSrZciwWrUc3J%2FjctfCYMq47WZlPOnR5PtgCgQto9jqqNUvzVhKj9SqHsw3A7lkAJjSpegwrz169BBeuPR6ohJx2ZmlOc77gDlKUM4eZe12PmLIEltjyIlGQvKBQlbLL4cy2BCeDhFuPdSjId49a6dJ1iDjQcG0WoAafg7gsAI2HhBveJJ4bFjvO%2BfwJR6Ug3Wx7s3RbjrxTXB0OvnaEs44%2B2B2twafAdL9reqe9Zcpg7kIXrYXkpdlaUMBYydrX9fWINdArjryu8ng52uv59WLQQXCHgCv9rT35pebPD8Tybd8W%2F0Tt1TmlhTD2MTwSBHkEIMJK6E%2BR%2FEyXZVvFQzFqkY8w8UdXYsl%2FAF%2FLAiFAOEAGsYz%2F4LLUwVgwoDE6pvNZIg%2FV5Ebm7vPXgvsOxbpTX33QeApraDUAvO%2FRtvM2AaEA4vyKSIMaftOf5AJ5B%2F6wp%2FLQf5tz5Mgt0hqdEU05zsoiY%2BZmvvchWHksXgQxmgxZNP6KYBvZD4IWF2UNRp1ohzzuBmhyUHvd5T1celGAF8MmjWhNiV42Ioe%2FFg3%2Fn03nTzSmxwQa3lSFqWtuZVZ1n%2BkNdy3ov5q7sPBMFAMsh86ZPjD%2Fwvaf8hMKyqkcIGOqUBHbMfDFUllw5%2BcAWdhwbU%2FxPbK8C92s05mTAdGvtoLT3AunxOQnPmQ3AdJdgLsURcDJWlk6MMvoW2genPScCmsmVf2OcZ28Lhyg1O%2BK9W59dZBfFYajRHaFoqlUz1ojM8yKr60pjghqY0IK9xetfMvCGq%2BwRPYtyn1cK4BhBjNW%2BSaFSMZiOmde8wctCUXXdKKzFPFo44gd1irZSNX%2BhyE9lTkXjn&X-Amz-Signature=a0f2ce96c2dabd04cdb327e8f03575807a6a71e3e61802f572ac0e5de655f98f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMGUE74D%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC878Lqze3bNVh3c2tEvMs%2BEGtIyWolgKIibxFossqltwIgB45fz7TuOr41E0gR%2Fk%2FRMVOHTIG2iHwQKdo6WZFomU4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDO8cFV8j1wXtBGvuiyrcAyKSPgEbzFMzVYEemOdRPOvSrZciwWrUc3J%2FjctfCYMq47WZlPOnR5PtgCgQto9jqqNUvzVhKj9SqHsw3A7lkAJjSpegwrz169BBeuPR6ohJx2ZmlOc77gDlKUM4eZe12PmLIEltjyIlGQvKBQlbLL4cy2BCeDhFuPdSjId49a6dJ1iDjQcG0WoAafg7gsAI2HhBveJJ4bFjvO%2BfwJR6Ug3Wx7s3RbjrxTXB0OvnaEs44%2B2B2twafAdL9reqe9Zcpg7kIXrYXkpdlaUMBYydrX9fWINdArjryu8ng52uv59WLQQXCHgCv9rT35pebPD8Tybd8W%2F0Tt1TmlhTD2MTwSBHkEIMJK6E%2BR%2FEyXZVvFQzFqkY8w8UdXYsl%2FAF%2FLAiFAOEAGsYz%2F4LLUwVgwoDE6pvNZIg%2FV5Ebm7vPXgvsOxbpTX33QeApraDUAvO%2FRtvM2AaEA4vyKSIMaftOf5AJ5B%2F6wp%2FLQf5tz5Mgt0hqdEU05zsoiY%2BZmvvchWHksXgQxmgxZNP6KYBvZD4IWF2UNRp1ohzzuBmhyUHvd5T1celGAF8MmjWhNiV42Ioe%2FFg3%2Fn03nTzSmxwQa3lSFqWtuZVZ1n%2BkNdy3ov5q7sPBMFAMsh86ZPjD%2Fwvaf8hMKyqkcIGOqUBHbMfDFUllw5%2BcAWdhwbU%2FxPbK8C92s05mTAdGvtoLT3AunxOQnPmQ3AdJdgLsURcDJWlk6MMvoW2genPScCmsmVf2OcZ28Lhyg1O%2BK9W59dZBfFYajRHaFoqlUz1ojM8yKr60pjghqY0IK9xetfMvCGq%2BwRPYtyn1cK4BhBjNW%2BSaFSMZiOmde8wctCUXXdKKzFPFo44gd1irZSNX%2BhyE9lTkXjn&X-Amz-Signature=8532a3e3ccd6f38764c939afb2f6f49f7afc425557aeb2f80879f57d02c3c9a5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
