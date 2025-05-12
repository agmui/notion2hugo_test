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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665CQ4VZ6%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIDbVjPX07iLH9P9lJSrGxzpqnN0gkqwUoH%2B9eqpzUZHrAiBP9p3gLcqx0457n4fQZ1Qm4AzWHOGQ450Q7Z8LZIzBDyqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2wT9M1oUHZU3rVIUKtwD77Sub6h70JxkglwLprEF8M1nOrBAR1yEPTT%2FnqR3L5ceXBOPPiQq5ypuxVdGfiKwp0Wt3Hz2sqkRF98OvZxWQlbT511eIQuas%2Fag4QoxWKnB5WOWxX7YLwGmPRHahDGEP7oBDREHggVflyYkWtFxl19w85Ya1iDCQZL7zfsfslTXqPNrTGx4DSkPxmWnxlmDQja%2BUxcder2aJPOiaa60LSbwxSwMqq3%2FXCJrvAjcEJWI3vufwo9VmJLTQLB%2BW13KsOgqupqEhmm0fidHngrC4hiyjGggOLEoEImbTj4ZfOb7ztcOtSeBNUcflRsmjhIHOwHO8319K9caAZsP%2BW8JFNTDV1xENav5jJ%2FMd%2FHmwfzHCXKdLLMvvoOZbmbe6w9jGZJueaad%2Ffftxf9zM54TJkqUSGPZJO50%2FzyDcSJNLc7S5cqYeijvS%2F1IvmPxiWkD3I5z%2FEaJIZGoWVcKtk3CI0GB1G%2BmizjlLxaOEWpPmTHvlE43tzbGKoo5oqvIAAe7qICrDPgTRRD9mfIN2ino%2F1DpR2zo%2Bz1fVKvgxqgQN70q9%2BKq2cIOQQePmA%2Bga72ombIpbPKfmRtCxDE1lK5%2F1nwJ%2FdkAYw9YrPR1oSrIMoaY7HS6F8XYNHQGZs0wmIKHwQY6pgHb0dGCNA1%2BaAGnWX8CHku2L5bfbNf22u0QJD2qrx1rKRBOAWTXo%2Bjc7pv2H%2FNF16jD9twXFYQh%2BIMUfdFLGt%2FlEBVxlZrzsQ7pSeOz3Cvfm89T5qlhlpthpihyTZhehWJdIcvxVgew%2BsaDQcCJUDj97MHlQq6EVfv8mzuc2QnLRoS%2F4I5HzXqYWApv1gsFSHPaPi9soIiEHgolRyYj9SH%2Biaz2xRQi&X-Amz-Signature=76d3cd380d95e0f933fc1729532f94bee662715ce10f9bfa7a6d2d07cf0af513&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665CQ4VZ6%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIDbVjPX07iLH9P9lJSrGxzpqnN0gkqwUoH%2B9eqpzUZHrAiBP9p3gLcqx0457n4fQZ1Qm4AzWHOGQ450Q7Z8LZIzBDyqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2wT9M1oUHZU3rVIUKtwD77Sub6h70JxkglwLprEF8M1nOrBAR1yEPTT%2FnqR3L5ceXBOPPiQq5ypuxVdGfiKwp0Wt3Hz2sqkRF98OvZxWQlbT511eIQuas%2Fag4QoxWKnB5WOWxX7YLwGmPRHahDGEP7oBDREHggVflyYkWtFxl19w85Ya1iDCQZL7zfsfslTXqPNrTGx4DSkPxmWnxlmDQja%2BUxcder2aJPOiaa60LSbwxSwMqq3%2FXCJrvAjcEJWI3vufwo9VmJLTQLB%2BW13KsOgqupqEhmm0fidHngrC4hiyjGggOLEoEImbTj4ZfOb7ztcOtSeBNUcflRsmjhIHOwHO8319K9caAZsP%2BW8JFNTDV1xENav5jJ%2FMd%2FHmwfzHCXKdLLMvvoOZbmbe6w9jGZJueaad%2Ffftxf9zM54TJkqUSGPZJO50%2FzyDcSJNLc7S5cqYeijvS%2F1IvmPxiWkD3I5z%2FEaJIZGoWVcKtk3CI0GB1G%2BmizjlLxaOEWpPmTHvlE43tzbGKoo5oqvIAAe7qICrDPgTRRD9mfIN2ino%2F1DpR2zo%2Bz1fVKvgxqgQN70q9%2BKq2cIOQQePmA%2Bga72ombIpbPKfmRtCxDE1lK5%2F1nwJ%2FdkAYw9YrPR1oSrIMoaY7HS6F8XYNHQGZs0wmIKHwQY6pgHb0dGCNA1%2BaAGnWX8CHku2L5bfbNf22u0QJD2qrx1rKRBOAWTXo%2Bjc7pv2H%2FNF16jD9twXFYQh%2BIMUfdFLGt%2FlEBVxlZrzsQ7pSeOz3Cvfm89T5qlhlpthpihyTZhehWJdIcvxVgew%2BsaDQcCJUDj97MHlQq6EVfv8mzuc2QnLRoS%2F4I5HzXqYWApv1gsFSHPaPi9soIiEHgolRyYj9SH%2Biaz2xRQi&X-Amz-Signature=35548a22825924f5a2a1249036a9dfc672a383f43c6081a8e65f2a662e68b06c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
