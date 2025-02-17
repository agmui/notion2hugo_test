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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VDJSMWT%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCfBlEitDXhRlJ7s1TKHNHb6yO87MHCwftoW1YFwG73zgIgIej19Nch8WhpWzw3286pKY8CZybjpUe77q3TfA32haYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDNayLXhM6TbNMMRuPircA3oDlUxDbj6WEk4avTz78%2Fph%2FD%2FITVx9H5MYzzCqnYEzyK1CYDVEtiauW8xXKQBB59%2FU2hj6tV7BlVF1X65HGDsqIHX81Bdb6tJuirOn7d7Yb%2FMicME7S%2BLIv47Uh1XCvJf8YfLSa4%2FjALDBl3VM%2BruspZ%2FhdWLz4eBh8UPI94e00B2nrIkjjFYx9TB9XC3Unx7LCn8UsA1T1rNGyv5sGGlbKmhdyRdW6FONQi4WbsN9G9Sjx4GP1OVc8V1JK03zPitflOE7rU4N1tFWRFBWOkWsG%2BfBT9Uz2Dqh%2Bh%2FtvZgzz4yKU48kiGI%2BWQemog%2BUOEPakvtka4fiuXpLa1s%2FiEWrOHzOobShMcUl9YQis5N1xuZeBkr5R%2BwoCcoOE%2FWaMO74xHqKQLLFWG7Ij9N2FYftqVlnBUtK1RbesxJGUS2f8eEPMv%2FobSrMbD5MX2REmnHKheH5QpYEAjppdaPhHkkhsKIQp95XvU9aUv5fBWhAT6u1baWyeiW%2F6iQG0tJcUOq4MMae%2BmDiZX0zkE5I7%2FyHGQtBhQq5%2FcSDevc%2BbYIWsROXYEPWPRP%2BLDgEv9J6Z%2FVr%2Bgd99j7o3JLnRdU01DQ0MWqrYJUxCIUAC3nhHdT1r00Ry8v3B7bMtSFJMJnczL0GOqUBkmDJ40CjUbU7arIJiRw5o8XEgGu0B6IkkpydXhHOEcOmv3208I%2BJmRXjXstMDc0LPDuCbjbOFViyDeRtIlHXvOlb2Or7mkpg%2BQZ5Z%2B%2BRlgBLBXWYdxz4ZHVc4Jh1E%2BN9oj7JfnfdglcSjzxpwrAdKEZELYPztfH7fnTMHXvBRm%2FwA%2Bj8SXepPUdZySFLmXXqSnBLqklHXmkHvYzhYxEwe5HzILei&X-Amz-Signature=949337b04a13a7e2f91eac3614b64b6b8eef8c55d9a9e093b21f024aeb1e36dd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VDJSMWT%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCfBlEitDXhRlJ7s1TKHNHb6yO87MHCwftoW1YFwG73zgIgIej19Nch8WhpWzw3286pKY8CZybjpUe77q3TfA32haYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDNayLXhM6TbNMMRuPircA3oDlUxDbj6WEk4avTz78%2Fph%2FD%2FITVx9H5MYzzCqnYEzyK1CYDVEtiauW8xXKQBB59%2FU2hj6tV7BlVF1X65HGDsqIHX81Bdb6tJuirOn7d7Yb%2FMicME7S%2BLIv47Uh1XCvJf8YfLSa4%2FjALDBl3VM%2BruspZ%2FhdWLz4eBh8UPI94e00B2nrIkjjFYx9TB9XC3Unx7LCn8UsA1T1rNGyv5sGGlbKmhdyRdW6FONQi4WbsN9G9Sjx4GP1OVc8V1JK03zPitflOE7rU4N1tFWRFBWOkWsG%2BfBT9Uz2Dqh%2Bh%2FtvZgzz4yKU48kiGI%2BWQemog%2BUOEPakvtka4fiuXpLa1s%2FiEWrOHzOobShMcUl9YQis5N1xuZeBkr5R%2BwoCcoOE%2FWaMO74xHqKQLLFWG7Ij9N2FYftqVlnBUtK1RbesxJGUS2f8eEPMv%2FobSrMbD5MX2REmnHKheH5QpYEAjppdaPhHkkhsKIQp95XvU9aUv5fBWhAT6u1baWyeiW%2F6iQG0tJcUOq4MMae%2BmDiZX0zkE5I7%2FyHGQtBhQq5%2FcSDevc%2BbYIWsROXYEPWPRP%2BLDgEv9J6Z%2FVr%2Bgd99j7o3JLnRdU01DQ0MWqrYJUxCIUAC3nhHdT1r00Ry8v3B7bMtSFJMJnczL0GOqUBkmDJ40CjUbU7arIJiRw5o8XEgGu0B6IkkpydXhHOEcOmv3208I%2BJmRXjXstMDc0LPDuCbjbOFViyDeRtIlHXvOlb2Or7mkpg%2BQZ5Z%2B%2BRlgBLBXWYdxz4ZHVc4Jh1E%2BN9oj7JfnfdglcSjzxpwrAdKEZELYPztfH7fnTMHXvBRm%2FwA%2Bj8SXepPUdZySFLmXXqSnBLqklHXmkHvYzhYxEwe5HzILei&X-Amz-Signature=527c9b7edeaf016805b2fffe04e069561df7d25b9951cb0baad00f7dd288665c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
