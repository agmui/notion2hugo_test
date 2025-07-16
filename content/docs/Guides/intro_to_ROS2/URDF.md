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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCCLKET3%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T141020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFtufjAtZZI2fnSRRF4CWy7ni6jUeq9Zil%2BWqRcMYbx4AiBopZtiDkZoPPVZ%2BpTmNWSwbWrpzJMPtP5wfIGWAV9AQCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMMaaXp1iErXf4x6rIKtwDAMilADfXmEQEEICK6m9j8QofHhGCbqTQc1JiCe3pdcb3f9BOt4LHG2NpdeJsK%2F9e%2FP47yGshBG32HGNpDnGzjanga1wzz%2B5SBcOC7vajhne89RLFp%2BsPKErxLvndhUyjO9qOxDhgPva5VwwyHipUly%2FXt13dom9XC%2FVLh2fwHpsgMYmnR0fV%2FjXnxCxlFWzbRdNHhePeA%2FJTd1ulHGJR0SPVUvZPzMwktH%2FlDMtljSUpiV%2BEPRbxs3TXGbqk9IR4wdIxXDS9Ljd1ziIgKXCFgZ%2Brs503o1J7uxgs7Sn9IbmbLzsBbwPP6GQ2lplkI%2Bm99GM97fsanBjXVYm3Bc0eZCeTA9aqOh4ncQBt87D1sZBGyL1L3W3ZflvIwomnSU2kCYNWA882fWWOyTh5MN7hj0MtlZQL8QrvkXDSAJ%2B0mB%2BmLoE5sg1JNBfbBAs1YHVUieiAYc8Y0mI3ySTlCE0dsfQP79UmxoO8DNbkhEXGmg4dEbDI4%2FSfb80ZbazCS0CeKTcQOHebpN8i%2FFM%2BOEg9bdsAyW4sRzff6IHZfD%2FxCty4oNzKnmZCCYYr98N%2BtjN5Jatmkk5pDMZKdFIuXyEA9H%2FYYt7xsBVKEjOpgQ23Yi5zh2WLb1wTiBl5wT0wspPewwY6pgF6GNgkU7GKL%2BTkHvLoguYg4pHfdRSZT6c3Ma3hYTmKC%2B%2F8ZmQHSryYY3p7NT0ZiNS%2BB3jebHmR32ShRAQ4Woqe2P%2BQ2VhwTd%2FiijZ42ST9sz8i8MNUPndt23jVonC9SyhxxoqLqB3vEISZAgMgoToKlziJAjsNWYkNthPPsCKHzWHTAP7udNvby2gxlTqRAqLpcm%2BycTIwiwES%2B8iQYuGT%2FL0j9w0F&X-Amz-Signature=9d14a13da356265ea497828ad55b0b0642198d7c6b3f3a99e3053068dc0c4f9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCCLKET3%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T141020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFtufjAtZZI2fnSRRF4CWy7ni6jUeq9Zil%2BWqRcMYbx4AiBopZtiDkZoPPVZ%2BpTmNWSwbWrpzJMPtP5wfIGWAV9AQCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMMaaXp1iErXf4x6rIKtwDAMilADfXmEQEEICK6m9j8QofHhGCbqTQc1JiCe3pdcb3f9BOt4LHG2NpdeJsK%2F9e%2FP47yGshBG32HGNpDnGzjanga1wzz%2B5SBcOC7vajhne89RLFp%2BsPKErxLvndhUyjO9qOxDhgPva5VwwyHipUly%2FXt13dom9XC%2FVLh2fwHpsgMYmnR0fV%2FjXnxCxlFWzbRdNHhePeA%2FJTd1ulHGJR0SPVUvZPzMwktH%2FlDMtljSUpiV%2BEPRbxs3TXGbqk9IR4wdIxXDS9Ljd1ziIgKXCFgZ%2Brs503o1J7uxgs7Sn9IbmbLzsBbwPP6GQ2lplkI%2Bm99GM97fsanBjXVYm3Bc0eZCeTA9aqOh4ncQBt87D1sZBGyL1L3W3ZflvIwomnSU2kCYNWA882fWWOyTh5MN7hj0MtlZQL8QrvkXDSAJ%2B0mB%2BmLoE5sg1JNBfbBAs1YHVUieiAYc8Y0mI3ySTlCE0dsfQP79UmxoO8DNbkhEXGmg4dEbDI4%2FSfb80ZbazCS0CeKTcQOHebpN8i%2FFM%2BOEg9bdsAyW4sRzff6IHZfD%2FxCty4oNzKnmZCCYYr98N%2BtjN5Jatmkk5pDMZKdFIuXyEA9H%2FYYt7xsBVKEjOpgQ23Yi5zh2WLb1wTiBl5wT0wspPewwY6pgF6GNgkU7GKL%2BTkHvLoguYg4pHfdRSZT6c3Ma3hYTmKC%2B%2F8ZmQHSryYY3p7NT0ZiNS%2BB3jebHmR32ShRAQ4Woqe2P%2BQ2VhwTd%2FiijZ42ST9sz8i8MNUPndt23jVonC9SyhxxoqLqB3vEISZAgMgoToKlziJAjsNWYkNthPPsCKHzWHTAP7udNvby2gxlTqRAqLpcm%2BycTIwiwES%2B8iQYuGT%2FL0j9w0F&X-Amz-Signature=7394865a4e08ce782551add134aa0c6b73a85091efa4d9b02edc3ef2beec1386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
